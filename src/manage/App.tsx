import { Route,Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/layout/Main";
// import 'antd/dist/antd.min.css'
import "./assets/styles/main.scss";
import "./assets/styles/responsive.scss";
import Tables2 from "./pages/userManage/danh-sach";
import { transformRoute } from "../router/hook";
import { useEffect } from "react";

const checkToken = () => {
  const token = () => localStorage.getItem("token"); // Lấy token từ localStorage hoặc nơi lưu trữ token khác
  return !!token(); // Chuyển đổi token thành một giá trị boolean: true nếu token tồn tại và false nếu không
};

const getRole = ()=> localStorage.getItem("role")

function AppManage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra token khi component được mount
    const tokenExists = checkToken();
    console.log("🚀 ~ useEffect ~ tokenExists:", !tokenExists);
    console.log(location.pathname);
    
    if (
      !tokenExists || getRole() !== "admin"
    ) {
      // Nếu không có token, chuyển hướng đến trang đăng nhập
      navigate("/account/login");
    }
  }, [location.pathname]);

  return (
    <div className="App" id="manage">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/dashboard" element={<Home />} />
          {transformRoute()}
        </Route>
        </Routes>
    </div>
  );
}

export default AppManage;
