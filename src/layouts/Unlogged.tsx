import { Outlet } from "react-router-dom";
import Header from "../components/atoms/Header";

const Unlogged = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Unlogged;
