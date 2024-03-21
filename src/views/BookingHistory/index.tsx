import { DataGrid } from "@mui/x-data-grid";
import { useUser } from "../../contexts/User";
import { useEffect, useState } from "react";
import { where, query, getDocs } from "firebase/firestore";
import { reservationCollection } from "../../firebase";
import { ReservationInterface } from "../BookService";
import { BookingHistoryWrapper } from "./StyledBookingHistory";

const BookingHistory = () => {
  const { user } = useUser();

  const [reservations, setReservations] = useState<ReservationInterface[]>([]);

  const getReservations = async () => {
    const reservationsSnapshot = await getDocs(
      query(
        reservationCollection,
        user?.id === "9mQntXzUIrSwlVAihSOWBA8zpDj2"
          ? where("user_id", "!=", "-1")
          : where("user_id", "==", user?.id)
      )
    );

    setReservations(
      [...reservationsSnapshot.docs].map(
        (doc) =>
          ({
            ...doc.data(),
            id: doc.id,
            start: new Date(doc.data().start.seconds * 1000),
            end: new Date(doc.data().end.seconds * 1000),
          } as ReservationInterface)
      )
    );
  };

  useEffect(() => {
    getReservations();
  }, []);

  const columns = [
    { field: "title", headerName: "Title", flex: 1 },
    { field: "start", headerName: "Start", type: "dateTime", flex: 1 },
    { field: "end", headerName: "End", type: "dateTime", flex: 1 },
  ];

  return (
    <BookingHistoryWrapper style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={reservations}
        columns={columns}
        rowSelection={false}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
      />
    </BookingHistoryWrapper>
  );
};

export default BookingHistory;
