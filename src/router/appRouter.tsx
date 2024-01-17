import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { RouteType } from "./config";
// import Status from "../views/status/danh-sach/index";
// import { ViewA } from "../views/view-a/index";
// import { AboutView } from "../views/view-b/index";
// import StatusAdd from "../views/status copy/xu-ly/create";
// import StatusEdit from "../views/status copy/xu-ly/edit";
// import StatusView from "../views/status copy/xu-ly/view";
// import UserManage from "../views/status copy/danh-sach";
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
import ManageStudent from "../views/test/danh-sach";
import EditStudent from "../views/test/xu-ly/edit";
import ViewStudent from "../views/test/xu-ly/view";
import CreateStudent from "../views/test/xu-ly/create";
import ManageStaff from "../views/staff/danh-sach";
import CreateStaff from "../views/staff/xu-ly/create";
import EditStaff from "../views/staff/xu-ly/edit";
import ViewStaff from "../views/staff/xu-ly/view";
import ManageStaff2 from "../views/staff2.0/danh-sach";
import CreateStaff2 from "../views/staff2.0/xu-ly/create";
import EditStaff2 from "../views/staff2.0/xu-ly/edit";
import ViewStaff2 from "../views/staff2.0/xu-ly/view";
const appRoutes: RouteType[] = [
  {
    path: "/manage/home",
    element: <ManageProduct />,
    state: "Home",
    displayText: "HOME",
    icon: <DesktopOutlined />,
  },
  // {
  //   path: "/manage/status",
  //   state: "status",
  //   element: <UserManage />,
  //   displayText: "Quan ly User",
  //   icon: <FileOutlined />,
  //   // hiddenMenu:true,
  //   child: [
  //     {
  //       path: "add",
  //       element: <StatusAdd />,
  //       state: "status.add",
  //       displayText: "Add",
  //       hiddenMenu: true,
  //     },
  //     {
  //       path: "edit/:id",
  //       element: <StatusEdit />,
  //       state: "status.edit",
  //       displayText: "Edit",
  //       hiddenMenu: true,
  //     },
  //     {
  //       path: "view/:id",
  //       element: <StatusView />,
  //       state: "status.view",
  //       displayText: "view",
  //       hiddenMenu: true,
  //     },
  //   ],
  // },
  // {
  //   path: "/manage/component",
  //   state: "component",
  //   element: <StatusView />,
  //   displayText: "Components",
  //   icon: <PieChartOutlined />,
  //   child: [
  //     {
  //       path: "alert",
  //       element: <AboutView />,
  //       state: "component.alert",
  //       displayText: "Alert",
  //     },
  //     {
  //       path: "button",
  //       element: <Status />,
  //       state: "component.button",
  //       displayText: "Button",
  //     },
  //   ],
  // },
  // {
  //   path: "/manage/documentation",
  //   element: <ViewA />,
  //   state: "documentation",
  //   displayText: "Documentation",
  //   icon: <TeamOutlined />,
  // },
  // {
  //   path: "/manage/changelog",
  //   element: <StatusAdd />,
  //   state: "changelog",
  //   displayText: "Changelog",
  //   icon: <UserOutlined />,
  // },
  // {
  //   path: "/manage/profile",
  //   element: <></>,
  //   state: "profile",
  //   displayText: "Trang cá nhân",
  //   hiddenMenu: true,
  //   child: [
  //     {
  //       path: "edit",
  //       element: <></>,
  //       state: "edit_profile",
  //       displayText: "Sửa trang cá nhân",
  //       hiddenMenu: true,
  //     },
  //   ],
  // },
  {
    path: "/manage/avatar",
    element: <></>,
    state: "avatar",
    displayText: "Ảnh đại diện",
    hiddenMenu: true,
  },
  {
    path: "/manage/change_password",
    element: <></>,
    state: "change_password",
    displayText: "Đổi mật khẩu",
    hiddenMenu: true,
  },
  {
    path: "/manage/user",
    element: <User/>,
    displayText:"quan ly user",
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
    path: "/manage/product",
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
    path: "/manage/trademark",
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
  //sua trademark thanh tét , module
  {
    path: "/manage/student",
    state: "student",
    element: <ManageStudent/>,
    displayText:"Quan ly hoc sinh",
    icon: <UserOutlined />,
    child:[
      {
        path:"add",
        state: "student.add",
        element:<CreateStudent/>,
        displayText:'them hoc sinh',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state: "student.edit",
        element:<EditStudent/>,
        displayText:'sua thong tin',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state: "student.view",
        element:<ViewStudent/>,
        displayText:"thong tin chi tiet",
        hiddenMenu:true
      }
    ]
  },
  {
    path: "/manage/staff",
    state: "staff",
    element: <ManageStaff/>,
    displayText:"Quan ly nhan vien",
    icon: <UserOutlined />,
    child:[
      {
        path:"add",
        state: "staff.add",
        element:<CreateStaff/>,
        displayText:'them nhan vien',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state: "staff.edit",
        element:<EditStaff/>,
        displayText:'sua thong tin',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state: "staff.view",
        element:<ViewStaff/>,
        displayText:"thong tin chi tiet",
        hiddenMenu:true
      }
    ]
  },
  {
    path: "/manage/staff2",
    state: "staff",
    element: <ManageStaff2/>,
    displayText:"Quản lý nhân viên",
    icon: <UserOutlined />,
    child:[
      {
        path:"add",
        state: "staff.add",
        element:<CreateStaff2/>,
        displayText:'Thêm nhân viên',
        hiddenMenu:true
      },
      {
        path:"edit/:id",
        state: "staff.edit",
        element:<EditStaff2/>,
        displayText:'Sửa thông tin',
        hiddenMenu:true
      },
      {
        path:"view/:id",
        state: "staff.view",
        element:<ViewStaff2/>,
        displayText:"Thông tin chi tiết",
        hiddenMenu:true
      }
    ]
  }
];

export default appRoutes;
