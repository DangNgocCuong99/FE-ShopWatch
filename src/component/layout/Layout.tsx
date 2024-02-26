import "./index.css";
import TopBar from "../topbar/TopBar";
import Header from "../header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { findContentBypath, headerMenuItems } from "../sideBar/dataConfig";
import BreadCrumb from "../breadcumb";
import PopupItem from "./popupItem";

const Layout = () => {
  const location = useLocation();
  const [isShowMenu , setIsShowMenu] = useState(false)

  return (
    <>
      {/* topbar */}
      <div className="opacity_menu current" onClick={()=>setIsShowMenu(false)} style={{display: isShowMenu ? "block" :"none"}}/>
      <TopBar />
      <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu}/>
      <div className="bodywrap">
      {location.pathname!== '/'&& (<BreadCrumb content={findContentBypath(headerMenuItems,location.pathname)}/>) }
      <Outlet/>
      </div>
      <Footer/>
      <PopupItem/>
    </>
  );
};

export default Layout;
