import "./index.css";
import TopBar from "../topbar/TopBar";
import Header from "../header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import { findContentBypath, headerMenuItems } from "../sideBar/dataConfig";
import BreadCrumb from "../breadcumb";

const Layout = () => {
  const location = useLocation();


  return (
    <>
      {/* topbar */}
      <TopBar />
      <Header/>
      <div className="bodywrap">
      {location.pathname!== '/'&& (<BreadCrumb content={findContentBypath(headerMenuItems,location.pathname)}/>) }
      <Outlet/>
      </div>
    
      <Footer/>
    </>
  );
};

export default Layout;
