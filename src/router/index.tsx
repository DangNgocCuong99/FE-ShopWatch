import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutDefault from "../layout";
import { transformRoute, transformRouteShop } from "./hook";
import Layout from "../component/layout/Layout";
import Home from "../shopViews/home";
import GioiThieu from "../shopViews/gioiThieu";
import LienHe from "../shopViews/lienHe";
import KienThucDongHo from "../shopViews/kien-thuc-dong-ho";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //manage */}
        <Route path="/manage" element={<LayoutDefault /> }>
          {transformRoute()}
        </Route>
        {/* // shop */}
        <Route path="/" element={<Layout/>}>
          {transformRouteShop()}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
