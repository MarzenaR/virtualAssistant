import {
  Calendar,
  EventWrapperProps,
  momentLocalizer,
  View,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { reservationCollection } from "../../firebase";
import { addDoc, getDocs, query } from "firebase/firestore";
import { useUser } from "../../contexts/User";
import { LoggedBookServiceWrapper } from "./StyledLoogedBookService";

interface Reservation {
  title: string;
  start: Date;
  end: Date;
  user_id: string | undefined;
}

const localizer = momentLocalizer(moment);

const LoggedBookService = () => {
  const CustomEventWrapper = (data: EventWrapperProps) => {
    if (user?.id === "9mQntXzUIrSwlVAihSOWBA8zpDj2") {
      return (
        <div style={{ background: "#4f9b5a", padding: "3px", color: "#fff" }}>
          {data.event.title}
        </div>
      );
    }

    return (
      <div style={{ background: "grey", padding: "3px", color: "#fff" }}>
        Niedostępne
      </div>
    );
  };

  const { user } = useUser();

  const [currentView, setCurrentView] = useState<string>("week");
  const [currentRange, setCurrentRange] = useState<{ start: Date; end: Date }>({
    start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  });

  const [reservations, setReservations] = useState<Reservation[]>([]);

  const getReservations = async () => {
    const querySnapshot = await getDocs(query(reservationCollection));

    setReservations(
      [...querySnapshot.docs].map((el) => ({
        ...el.data(),
        start: new Date(el.data().start.seconds * 1000),
        end: new Date(el.data().end.seconds * 1000),
      })) as Reservation[]
    );
  };

  useEffect(() => {
    getReservations();
  }, [currentRange]);

  const checkDateIsAvailable = (newReservations: Reservation[]) => {
    for (let i = 0; i < reservations.length; i++) {
      if (
        newReservations.find(
          (reservation) =>
            reservation.start.getTime() === reservations[i].start.getTime() ||
            reservation.end.getTime() === reservations[i].end.getTime()
        )
      ) {
        return false;
      }
    }
    return true;
  };

  const onViewChange = (view: View) => setCurrentView(view.toString());

  const onSelectSlot = (slotInfo: {
    start: Date;
    end: Date;
    slots: Date[];
    action: "select" | "click" | "doubleClick";
  }) => {
    if (window.confirm("Please confirm you would like to book it")) {
      const reservations: Reservation[] = [];

      const tommorowDate = new Date();
      tommorowDate.setDate(tommorowDate.getDate() + 1);

      if (
        slotInfo.slots.find((date) => date.getTime() < tommorowDate.getTime())
      ) {
        return alert("Please choose the date from tomorrow onwards");
      }

      if (currentView === "month") {
        slotInfo.slots.forEach((slot) => {
          [8, 9, 10, 11, 12, 13, 14, 15, 16].forEach((hour) => {
            reservations.push({
              title: user?.companyName
                ? user.companyName
                : user?.firstName + " " + user?.surname,
              user_id: user?.id,
              start: new Date(
                slot.getFullYear(),
                slot.getMonth(),
                slot.getDate(),
                hour
              ),
              end: new Date(
                slot.getFullYear(),
                slot.getMonth(),
                slot.getDate(),
                hour + 1
              ),
            });
          });
        });
      } else {
        slotInfo.slots.pop();
        slotInfo.slots.forEach((slot) => {
          reservations.push({
            title: user?.companyName
              ? user.companyName
              : user?.firstName + " " + user?.surname,
            user_id: user?.id,
            start: new Date(
              slot.getFullYear(),
              slot.getMonth(),
              slot.getDate(),
              slot.getHours()
            ),
            end: new Date(
              slot.getFullYear(),
              slot.getMonth(),
              slot.getDate(),
              slot.getHours() + 1
            ),
          });
        });
      }

      if (checkDateIsAvailable(reservations)) {
        reservations.forEach(async (reservation) => {
          await addDoc(reservationCollection, reservation);
          setReservations((prev) => [...prev, reservation]);
        });
      } else {
        alert(
          "Please choose a different time because there hours are partly booked"
        );
      }
    }
  };

  return (
    <LoggedBookServiceWrapper>
      <Calendar
        defaultView="month"
        localizer={localizer}
        events={reservations}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        min={new Date(2024, 0, 1, 8)}
        max={new Date(2024, 0, 1, 16)}
        selectable={true}
        onSelectSlot={onSelectSlot}
        onView={onViewChange}
        step={60}
        views={["week", "month"]}
        components={{
          eventWrapper: CustomEventWrapper,
        }}
      />
    </LoggedBookServiceWrapper>
  );
};

export default LoggedBookService;
