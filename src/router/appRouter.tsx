import {
  BarChartOutlined,
  FileDoneOutlined,
  ProductOutlined,
  TrademarkCircleOutlined,
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
import ManageInvoice from "../views/invoice/danh-sach";
import CreateInvoice from "../views/invoice/xu-ly/create";
import EditInvoice from "../views/invoice/xu-ly/edit";
import ViewInvoice from "../views/invoice/xu-ly/view";

const appRoutes: RouteType[] = [
  {
    path: "dashboard",
    element: <ManageProduct />,
    state: "Home",
    displayText: "Thống kê",
    icon: <BarChartOutlined />,
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
    displayText:"Quản lý sản phẩm",
    icon: <ProductOutlined />,
    child:[
      {
        path:"add",
        state:"product.add",
        element:<CreateProduct/>,
        displayText:'Thêm sản phẩm',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state:"product.edit",
        element:<EditProduct/>,
        displayText:'Sửa sản phẩm',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state:"product.view",
        element:<ViewProduct/>,
        displayText:"Chi tiết sản phẩm",
        hiddenMenu:true
      }
    ]
  },
  {
    path: "trademark",
    state: "trademark",
    element: <ManageTrademark/>,
    displayText:"Quản lý thương hiệu",
    icon: <TrademarkCircleOutlined />,
    child:[
      {
        path:"add",
        state: "trademark.add",
        element:<CreateTrademark/>,
        displayText:'Thêm thương hiệu',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state: "trademark.edit",
        element:<EditTrademark/>,
        displayText:'Sửa thương hiệu',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state: "trademark.view",
        element:<ViewTrademark/>,
        displayText:"Chi tiết thương hiệu",
        hiddenMenu:true
      }
    ]
  },
  {
    path: "invoice",
    state: "invoice",
    element: <ManageInvoice/>,
    displayText:"Quản lý hóa đơn",
    icon: <FileDoneOutlined />,
    child:[
      {
        path:"add",
        state: "invoice.add",
        element:<CreateInvoice/>,
        displayText:'Thêm hóa đơn',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state: "invoice.edit",
        element:<EditInvoice/>,
        displayText:'Sửa hóa đơn',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state: "invoice.view",
        element:<ViewInvoice/>,
        displayText:"Chi tiết hóa đơn",
        hiddenMenu:true
      }
    ]
  },
];

export default appRoutes;
