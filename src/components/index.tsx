import Header from "./Haeder/Header";
import Footer from "./Footer/Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import React from "react";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
