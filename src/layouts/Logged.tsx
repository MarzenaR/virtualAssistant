import { Outlet } from "react-router-dom";
import Header from "../components/atoms/Header";

const Logged = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Logged;
