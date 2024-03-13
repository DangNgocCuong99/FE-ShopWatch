import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { RouteType } from "./config";
import User from "../views/user/danh-sach";
import UserEdit from "../views/user/xu-ly/edit";
import UserView from "../views/user/xu-ly/view";
import ManageProduct from "../views/product/danh-sach";
import CreateProduct from "../views/product/xu-ly/create";
import EditProduct from "../views/product/xu-ly/edit";
import ViewProduct from "../views/product/xu-ly/view";
import ManageTrademark from "../views/trademark/danh-sach";
import CreateTrademark from "../views/trademark/xu-ly/create";
import EditTrademark from "../views/trademark/xu-ly/edit";
import ViewTrademark from "../views/trademark/xu-ly/view";

const appRoutes: RouteType[] = [
  {
    path: "home",
    element: <ManageProduct />,
    state: "Home",
    displayText: "HOME",
    icon: <DesktopOutlined />,
  },
  {
    path: "avatar",
    element: <></>,
    state: "avatar",
    displayText: "Ảnh đại diện",
    hiddenMenu: true,
  },
  {
    path: "change_password",
    element: <></>,
    state: "change_password",
    displayText: "Đổi mật khẩu",
    hiddenMenu: true,
  },
  {
    path: "user",
    element: <User/>,
    displayText:"User",
    icon: <UserOutlined />,
    child:[
      {
        path:"edit/:id",
        element:<UserEdit/>,
        displayText:'sua user',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        element:<UserView/>,
        displayText:"chi tiet user",
        hiddenMenu:true
      }
    ]
  },
  {
    path: "product",
    element: <ManageProduct/>,
    state:"product",
    displayText:"quan ly san pham",
    icon: <UserOutlined />,
    child:[
      {
        path:"add",
        state:"product.add",
        element:<CreateProduct/>,
        displayText:'them san pham',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state:"product.edit",
        element:<EditProduct/>,
        displayText:'sua san pham',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state:"product.view",
        element:<ViewProduct/>,
        displayText:"chi tiet san pham",
        hiddenMenu:true
      }
    ]
  },
  {
    path: "trademark",
    state: "trademark",
    element: <ManageTrademark/>,
    displayText:"quan ly thuong hieu",
    icon: <UserOutlined />,
    child:[
      {
        path:"add",
        state: "trademark.add",
        element:<CreateTrademark/>,
        displayText:'them thuong hieu',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state: "trademark.edit",
        element:<EditTrademark/>,
        displayText:'sua thuong hieu',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state: "trademark.view",
        element:<ViewTrademark/>,
        displayText:"chi tiet thuong hieu",
        hiddenMenu:true
      }
    ]
  },
];

export default appRoutes;
