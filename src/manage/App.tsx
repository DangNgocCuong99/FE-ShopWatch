import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
// import 'antd/dist/antd.min.css'
import "./assets/styles/main.scss";
import "./assets/styles/responsive.scss";
import Tables2 from "./pages/userManage/danh-sach";
import { transformRoute } from "../router/hook";

function AppManage() {
  return (
    <div className="App" id="manage">
      <Routes>
      <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Main />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/tables2" element={<Tables2 />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/rtl" element={<Rtl />} />
          <Route path="/profile" element={<Profile />} />
          {transformRoute()}
        </Route>
        </Routes>
    </div>
  );
}

export default AppManage;
