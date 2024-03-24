import "./index.scss";
import TopBar from "../topbar/TopBar";
import Header from "../header/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { findContentBypath, headerMenuItems } from "../sideBar/dataConfig";
import BreadCrumb from "../breadcumb";
import PopupItem from "./popupItem";
import PopupQuickView from "./popupQuickView";

const checkToken = () => {
  const token = () => localStorage.getItem("token"); // Lấy token từ localStorage hoặc nơi lưu trữ token khác
  return !!token(); // Chuyển đổi token thành một giá trị boolean: true nếu token tồn tại và false nếu không
};

const Layout = () => {
  const location = useLocation();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra token khi component được mount
    const tokenExists = checkToken();
    console.log("🚀 ~ useEffect ~ tokenExists:", !tokenExists);
    console.log(location.pathname);
    
    if (
      !tokenExists &&
      !["/account/login", "/account/register"].includes(location.pathname)
    ) {
      // Nếu không có token, chuyển hướng đến trang đăng nhập
      navigate("/account/login");
    }
  }, [location.pathname]);

  return (
    <div id="layout-shop">
      {/* topbar */}
      <div
        className="opacity_menu current"
        onClick={() => setIsShowMenu(false)}
        style={{ display: isShowMenu ? "block" : "none" }}
      />
      <TopBar />
      <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <div className="bodywrap">
        {location.pathname !== "/" && (
          <BreadCrumb
            content={findContentBypath(headerMenuItems, location.pathname)}
          />
        )}
        <Outlet />
      </div>
      <Footer />
      <PopupItem />
      <PopupQuickView/>
    </div>
  );
};

export default Layout;
