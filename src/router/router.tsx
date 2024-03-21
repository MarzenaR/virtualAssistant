import { createBrowserRouter } from "react-router-dom";
import Logged from "../layouts/Logged";
import Unlogged from "../layouts/Unlogged";
import Home from "../views/Home";
import ContactUs from "../views/ContactUs";
import BookService from "../views/BookService";
import LoggedBookService from "../views/LoggedBookService";
import BookingHistory from "../views/BookingHistory";

export const unloggedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Unlogged />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "book-service",
        element: <BookService />,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);

export const loggedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Logged />,
    children: [
      {
        path: "",
        element: <LoggedBookService />,
      },
      {
        path: "booking-history",
        element: <BookingHistory />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);
