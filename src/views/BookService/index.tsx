import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { reservationCollection } from "../../firebase";
import { getDocs, query } from "firebase/firestore";
import { BookServiceWrapper } from "./StyledBookService";

export interface ReservationInterface {
  id?: string;
  title: string;
  start: Date;
  end: Date;
  user_id: string | undefined;
}

const localizer = momentLocalizer(moment);

const CustomEventWrapper = () => {
  return (
    <div style={{ background: "grey", padding: "3px", color: "#fff" }}>
      Partially booked
    </div>
  );
};

const BookService = () => {
  const [reservations, setReservations] = useState<ReservationInterface[]>([]);

  const getReservations = async () => {
    const querySnapshot = await getDocs(query(reservationCollection));

    setReservations(
      [...querySnapshot.docs].map((el) => ({
        ...el.data(),
        start: new Date(el.data().start.seconds * 1000),
        end: new Date(el.data().end.seconds * 1000),
      })) as ReservationInterface[]
    );
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <BookServiceWrapper>
      <Calendar
        defaultView="month"
        localizer={localizer}
        events={reservations}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        min={new Date(2024, 0, 1, 8)}
        max={new Date(2024, 0, 1, 16)}
        selectable={false}
        step={60}
        views={["week", "month"]}
        components={{
          eventWrapper: CustomEventWrapper,
        }}
      />
    </BookServiceWrapper>
  );
};

export default BookService;
