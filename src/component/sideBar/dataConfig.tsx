import { ReactNode } from "react";
import { RouteType } from "/@/router/config";
import GioiThieu from "/@/shopViews/gioiThieu";
import Home from "/@/shopViews/home";
import KienThucDongHo from "/@/shopViews/kien-thuc-dong-ho";
import LienHe from "/@/shopViews/lienHe";
import Login from "/@/shopViews/login";
import Register from "/@/shopViews/register";
import ChinhSach from "/@/shopViews/chinh-sach";
import Favorite from "/@/shopViews/favorite";
import Account from "/@/shopViews/account";
import Order from "/@/shopViews/order";
import DetailOrder from "/@/shopViews/detailOrder";
import ChangePassword from "/@/shopViews/change-password";
import DetailProduct from "/@/shopViews/detailProduct";
import CheckOut from "/@/shopViews/check-out";

interface RouterShopType extends  RouteType {
    img?:{
        width?:number,
        height?:number,
        src: string,
    }
}

export const headerMenuItems:RouterShopType[] = [
    {
   
        path: '/',
        displayText: 'Trang chủ',
        isOpen: false,
        element:<Home/>
    },
    {
        path: '/gioi-thieu',
        displayText: 'Giới thiệu',
        isOpen: false,
        element:<GioiThieu/>
    },
    {
        path: '/thuong-hieu',
        displayText: 'Thương hiệu',
        isOpen: false,
        img: {
            src: "//bizweb.dktcdn.net/100/487/743/themes/912230/assets/mega-1-image.jpg?1696125396195",
        },
        child: [
            {
                path: '/cac-hang-ban-chay',
                displayText: 'CÁC HÃNG BÁN CHẠY',
                isOpen: false,
                child: [
                    {
                        path: "/daniel-wellington-dw",
                        displayText: "Daniel Wellington (DW)",
                        
                    },
                    {
                        path: "/seiko",
                        displayText: "Seiko",
                        
                    },
                    {
                        path: "/saga",
                        displayText: "Saga",
                        
                    },
                    {
                        path: "/sokolov",
                        displayText: "Sokolov",
                        
                    },
                    {
                        path: "/casio",
                        displayText: "Casio",
                        
                    },
                    {
                        path: "/citizen",
                        displayText: "Citizen",
                        
                    },
                    {
                        path: "/orient",
                        displayText: "Orient",
                        
                    }

                ]
            },
            {
                path: '/khuyen-dung',
                displayText: 'KHUYÊN DÙNG',
                isOpen: false,
                child: [
                    {
                        path: "/koi",
                        displayText: "Koi",
                        
                    },
                    {
                        path: "/g-Shock",
                        displayText: "G-Shock",
                        
                    },
                    {
                        path: "/baby-G",
                        displayText: "Baby-G",
                        
                    },
                    {
                        path: "/fossil",
                        displayText: "Fossil",
                        
                    },
                    {
                        path: "/skagen",
                        displayText: "Skagen",
                        
                    },
                    {
                        path: "/michael-kors",
                        displayText: "Michael Kors",
                        
                    },

                ]
            },
            {
                path: '/cac-dong-dac-biet',
                displayText: 'CÁC DÒNG ĐẶC BIỆT',
                isOpen: false,
                child: [
                    {
                        path: "/limited-edition",
                        displayText: "Limited Edition",
                        
                    },
                    {
                        path: "/dong-ho-quan-doi",
                        displayText: "Đồng Hồ Quân Đội",
                        
                    },
                    {
                        path: "/dong-ho-dien-tu",
                        displayText: "Đồng Hồ Điện Tử",
                        
                    },
                    {
                        path: "/dong-ho-dinh-kim-cuong",
                        displayText: "Đồng Hồ Đính Kim Cương",
                        
                    },
                    {
                        path: "/dong-ho-xa-cu",
                        displayText: "Đồng Hồ Xà Cừ",
                        
                    },
                    {
                        path: "/dong-ho-tre-em",
                        displayText: "Đồng Hồ Trẻ Em",
                        
                    }
                ]
            }

        ]
    },
    {
        path: '/dong-ho-nam',
        displayText: 'Đồng hồ nam',
        isOpen: false,
        img: {
            src: "//bizweb.dktcdn.net/100/487/743/themes/912230/assets/mega-1-image.jpg?1696125396195",

        },
        child: [
            {
                path: '/cac-hang-ban-chay',
                displayText: 'CÁC HÃNG BÁN CHẠY',
                isOpen: false,
                child: [
                    {
                        path: "/daniel-wellington-dw",
                        displayText: "Daniel Wellington (DW)",
                    },
                    {
                        path: "/seiko",
                        displayText: "Seiko",
                    },
                    {
                        path: "/saga",
                        displayText: "Saga",
                    },
                    {
                        path: "/sokolov",
                        displayText: "Sokolov",
                    },
                    {
                        path: "/casio",
                        displayText: "Casio",
                    },
                    {
                        path: "/citizen",
                        displayText: "Citizen",
                    },
                    {
                        path: "/orient",
                        displayText: "Orient",
                    },
                    {
                        path: "/op",
                        displayText: "OP",
                    },

                ]
            },
            {
                path: '/khuyen-dung',
                displayText: 'KHUYÊN DÙNG',
                isOpen: false,
                child: [
                    {
                        path: "/koi",
                        displayText: "Koi",
                    },
                    {
                        path: "/g-Shock",
                        displayText: "G-Shock",
                    },
                    {
                        path: "/baby-G",
                        displayText: "Baby-G",
                    },
                    {
                        path: "/fossil",
                        displayText: "Fossil",
                    },
                    {
                        path: "/skagen",
                        displayText: "Skagen",
                    },
                    {
                        path: "/michael-kors",
                        displayText: "Michael Kors",
                    },

                ]
            },
            {
                path: '/cac-dong-dac-biet',
                displayText: 'CÁC DÒNG ĐẶC BIỆT',
                isOpen: false,
                child: [
                    {
                        path: "/limited-edition",
                        displayText: "Limited Edition",
                    },
                    {
                        path: "/dong-ho-quan-doi",
                        displayText: "Đồng Hồ Quân Đội",
                    },
                    {
                        path: "/dong-ho-dien-tu",
                        displayText: "Đồng Hồ Điện Tử",
                    },
                    {
                        path: "/dong-ho-dinh-kim-cuong",
                        displayText: "Đồng Hồ Đính Kim Cương",
                    },
                    {
                        path: "/dong-ho-xa-cu",
                        displayText: "Đồng Hồ Xà Cừ",
                    },
                    {
                        path: "/dong-ho-tre-em",
                        displayText: "Đồng Hồ Trẻ Em",
                    }
                ]
            },

        ]
    },
    {
        path: '/dong-ho-nu',
        displayText: 'Đồng hồ nữ',
        isOpen: false,
        img: {
            src: "//bizweb.dktcdn.net/100/487/743/themes/912230/assets/mega-1-image.jpg?1696125396195",

        },
        child: [
            {
                path: '/cac-hang-ban-chay',
                displayText: 'CÁC HÃNG BÁN CHẠY',
                isOpen: false,
                child: [
                    {
                        path: "/daniel-wellington-dw",
                        displayText: "Daniel Wellington (DW)",
                    },
                    {
                        path: "/seiko",
                        displayText: "Seiko",
                    },
                    {
                        path: "/saga",
                        displayText: "Saga",
                    },
                    {
                        path: "/sokolov",
                        displayText: "Sokolov",
                    },
                    {
                        path: "/casio",
                        displayText: "Casio",
                    },
                    {
                        path: "/citizen",
                        displayText: "Citizen",
                    },
                    {
                        path: "/orient",
                        displayText: "Orient",
                    },
                    {
                        path: "/op",
                        displayText: "OP",
                    },

                ]
            },
            {
                path: '/khuyen-dung',
                displayText: 'KHUYÊN DÙNG',
                isOpen: false,
                child: [
                    {
                        path: "/koi",
                        displayText: "Koi",
                    },
                    {
                        path: "/g-Shock",
                        displayText: "G-Shock",
                    },
                    {
                        path: "/baby-G",
                        displayText: "Baby-G",
                    },
                    {
                        path: "/fossil",
                        displayText: "Fossil",
                    },
                    {
                        path: "/skagen",
                        displayText: "Skagen",
                    },
                    {
                        path: "/michael-kors",
                        displayText: "Michael Kors",
                    },

                ]
            },
            {
                path: '/cac-dong-dac-biet',
                displayText: 'CÁC DÒNG ĐẶC BIỆT',
                isOpen: false,
                child: [
                    {
                        path: "/limited-edition",
                        displayText: "Limited Edition",
                    },
                    {
                        path: "/dong-ho-quan-doi",
                        displayText: "Đồng Hồ Quân Đội",
                    },
                    {
                        path: "/dong-ho-dien-tu",
                        displayText: "Đồng Hồ Điện Tử",
                    },
                    {
                        path: "/dong-ho-dinh-kim-cuong",
                        displayText: "Đồng Hồ Đính Kim Cương",
                    },
                    {
                        path: "/dong-ho-xa-cu",
                        displayText: "Đồng Hồ Xà Cừ",
                    },
                    {
                        path: "/dong-ho-tre-em",
                        displayText: "Đồng Hồ Trẻ Em",
                    }
                ]
            }
        ]
    },
    {
        path: '/kien-thuc-dong-ho',
        displayText: 'Kiến thức đồng hồ',
        element:<KienThucDongHo></KienThucDongHo>
    },
    {
        path: '/tin-tuc',
        displayText: 'Tin tức',
        element:<KienThucDongHo></KienThucDongHo>
    },
    {
        path: '/lien-he',
        displayText: 'Liên hệ',
        element:<LienHe></LienHe>
    },
    {
        path:'/account/login',
        displayText:"Đăng nhập tài khoản",
        element: <Login/>,
        hiddenMenu:true
    },
    {
        path:'/account/register',
        displayText:"Đăng ký tài khoản ",
        element: <Register/>,
        hiddenMenu:true
    },
    {
        path:'/chinh-sach',
        displayText:"Chính Sách",
        element:<ChinhSach/>,
        hiddenMenu:true
    },
    {
        path:'/san-pham-yeu-thich',
        displayText:"Sản phẩm yêu thích",
        element:<Favorite/>,
        hiddenMenu:true
    },
    {
        path:'/account',
        displayText:'Account',
        element:<Account/>,
        hiddenMenu:true
    },
    {
        path:"/account/orders",
        displayText :"Order",
        element:<Order/>,
        hiddenMenu:true
    },
    {
        path:"/account/orders/:id",
        displayText :"DetailOrder",
        element:<DetailOrder/>,
        hiddenMenu:true
    },

    {
        path:"account/changepassword",
        displayText :"Change Password",
        element:<ChangePassword/>,
        hiddenMenu:true
    },
    {
        path:"/chi-tiet-san-pham/:id",
        displayText:"Chi tiet san pham",
        element :<DetailProduct/>,
        hiddenMenu:true
    },
    {
        path:"/check-out",
        element:<CheckOut/>,
        hiddenMenu:true,
        displayText:"check out",
    }
    
    
]

export function findContentBypath(items: RouterShopType[], path: any):any {
    // Duyệt qua từng item trong mảng headerMenuItems
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
  
      // Nếu item hiện tại có path khớp với path đang tìm kiếm
      if (item.path === path) {
        // Trả về content của item
        return item.displayText;
      }
  
      // Nếu item hiện tại có thuộc tính children và children không rỗng
      if (item.child && item.child.length > 0) {
        // Gọi đệ quy để tìm kiếm trong children
        const content = findContentBypath(item.child, path);
  
        // Nếu tìm thấy content trong children, trả về content đó
        if (content) {
          return content;
        }
      }
    }
  
    // Nếu không tìm thấy content, trả về null hoặc giá trị mặc định mong muốn
    return null;
  }