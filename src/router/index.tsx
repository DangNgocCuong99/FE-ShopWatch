import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import LayoutDefault from "../layout";
import { transformRoute, transformRouteShop } from "./hook";
import Layout from "../component/layout/Layout";
import GioiThieu from "../shopViews/gioiThieu";
import LienHe from "../shopViews/lienHe";
import KienThucDongHo from "../shopViews/kien-thuc-dong-ho";
import AppManage from "../manage/App";
import ShopRouter from "./routerShop";
import { useEffect } from "react";


export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        {/* //manage */}
        {/* <Route path="/manage" element={<LayoutDefault /> }>
          {transformRoute()}
        </Route> */}
        {/* // shop */}
        {/* <Route path="/" element={<Layout/>}>
          {transformRouteShop()}
        </Route> */}
        {/* <Route path="/manage/sign-up" element={<SignUp />} />
        <Route path="/manage/sign-in" element={<SignIn />} />
        <Route path="/manage" element={<Main />}>
          <Route path="/manage/dashboard" element={<Home />} />
          <Route path="/manage/tables" element={<Tables />} />
          <Route path="/manage/billing" element={<Billing />} />
          <Route path="/manage/rtl" element={<Rtl />} />
          <Route path="/manage/profile" element={<Profile />} />
        </Route> */}
        <Route path="/*" element={<ShopRouter/>}/> 
        <Route path="/manage/*" element={<AppManage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
