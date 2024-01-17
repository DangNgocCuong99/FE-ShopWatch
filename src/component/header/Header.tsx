import "./index.css";
import Cart from "../cart/Cart";
import SearchHeader from "../searchHeader/searchHeader";

import SideBar from "../sideBar/sideBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem('token');
  const [isClose , setIsClose] = useState(false)

  return (
    <>
      {/* {placeholder} */}

      <header className="header" style={{ minHeight: "193px" }}>
        <div className="container">
          <div className="row row-header align-items-center">
            <div className="menu-bar d-lg-none d-flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-bars fa-w-14"
              >
                <path
                  fill="#ffffff"
                  d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                  className=""
                ></path>
              </svg>
            </div>

            <div className="col-lg-5 col-12 d-lg-block d-none">
              <ul className="ul-control-left">
                <li className="header-contact d-lg-flex d-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                  <span>
                    Hotline:
                    <a href="tel:19006750" title="1900 6750">
                      1900 6750
                    </a>
                  </span>
                </li>
                <li className="header-contact d-lg-flex d-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  </svg>
                  <span>
                    <a
                      title="Hệ thống cửa hàng"
                      onClick={()=>navigation("/he-thong-cua-hang")}
                      className="button-wishlist icon"
                    >
                      Hệ thống cửa hàng
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-12">
              <a  onClick={()=>navigation("/")} className="logo" title="Logo">
                <img
                  width="220"
                  height="27"
                  src="/logo.png"
                  alt="Dola Watch"
                />
              </a>
            </div>

            {/* header-control */}
            <div className="col-lg-5 header-control col-12">
              <SearchHeader />

              <ul className="ul-control-right">
                <li className="header-account d-lg-flex d-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 40 40"
                  >
                    <defs></defs>
                    <g id="ic-user">
                      <g id="_6-User" data-name="6-User">
                        <g id="Group_18" data-name="Group 18">
                          <path
                            id="Path_92"
                            data-name="Path 92"
                            className="cls-1"
                            d="M20,22.21a6.12,6.12,0,1,0-6.12-6.12h0A6.13,6.13,0,0,0,20,22.21ZM20,12a4.08,4.08,0,1,1-4.08,4.08A4.08,4.08,0,0,1,20,12Z"
                          ></path>
                          <path
                            id="Path_93"
                            data-name="Path 93"
                            className="cls-1"
                            d="M20,4.88A16.31,16.31,0,1,0,36.31,21.19,16.31,16.31,0,0,0,20,4.88Zm0,2A14.25,14.25,0,0,1,31.93,29a15.23,15.23,0,0,0-21.38-2.47A15.66,15.66,0,0,0,8.07,29,14.25,14.25,0,0,1,20,6.92Zm0,28.54A14.24,14.24,0,0,1,9.35,30.65a13.24,13.24,0,0,1,21.3,0A14.24,14.24,0,0,1,20,35.46Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <ul>
                    {
                      token ?
                        (
                          <>
                          <li>
                      <a  title="Tài khoản" onClick={()=>navigation("/account")}>
                        Tài khoản
                      </a>
                    </li>
                    <li>
                      <a title="Đăng xuất" onClick={()=>{localStorage.removeItem("token");navigation("/")}}>
                        Đăng xuất
                      </a>
                    </li>
                    <li>
                      <a  title="Quản lý shop" onClick={()=>navigation("/manage")}>
                        Quản lý shop
                      </a>
                    </li>
                          </>
                        ) :
                        (
                          <>
                           <li>
                        <a title="Đăng ký" onClick={()=>navigation("/account/register")}>
                          Đăng ký
                        </a>
                      </li>
                      <li>
                        <a title="Đăng nhập" onClick={()=>navigation("/account/login")}>
                          Đăng nhập
                        </a>
                      </li>
                          </>
                        )
                    }
                    
                  </ul>
                
                </li>

                <li className="header-wishlist d-lg-flex ">
                  <a
                    title="Sản phẩm yêu thích"
                    onClick={()=>navigation("/san-pham-yeu-thich")}
                    className="button-wishlist icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 40 40"
                    >
                      <defs></defs>
                      <path
                        className="cls-1"
                        d="M20,38.38a2.14,2.14,0,0,1-1.4-.53c-1.41-1.24-2.78-2.4-4-3.43a73.47,73.47,0,0,1-8.72-8.2,13.06,13.06,0,0,1-3.5-8.59,11,11,0,0,1,2.8-7.54,9.53,9.53,0,0,1,7-3.08h.11a8.94,8.94,0,0,1,5.52,1.92A11,11,0,0,1,20,11.18,12.13,12.13,0,0,1,22.2,8.93,8.89,8.89,0,0,1,27.71,7h.11a9.53,9.53,0,0,1,7,3.08,11,11,0,0,1,2.8,7.54,13.06,13.06,0,0,1-3.5,8.59,73.53,73.53,0,0,1-8.73,8.19c-1.2,1-2.57,2.2-4,3.44a2.14,2.14,0,0,1-1.4.53ZM12.19,9.19a7.35,7.35,0,0,0-5.41,2.37,8.84,8.84,0,0,0-2.22,6.06,10.89,10.89,0,0,0,3,7.21A73.66,73.66,0,0,0,16,32.75c1.2,1,2.55,2.18,4,3.41l4-3.41a72.9,72.9,0,0,0,8.46-7.92,10.89,10.89,0,0,0,3-7.21,8.84,8.84,0,0,0-2.22-6.06,7.35,7.35,0,0,0-5.41-2.37,6.8,6.8,0,0,0-4.28,1.46,9.8,9.8,0,0,0-2.36,2.73A1.37,1.37,0,0,1,20,14a1.41,1.41,0,0,1-.7-.19,1.51,1.51,0,0,1-.47-.47,9.8,9.8,0,0,0-2.36-2.73,6.8,6.8,0,0,0-4.2-1.46Z"
                      ></path>
                    </svg>
                    <span className="count js-wishlist-count js-wishlist-count-mobile">
                      1
                    </span>
                  </a>
                </li>

                <Cart />
              </ul>
            </div>
          </div>
        </div>
        <div className="header-menu">
          <div className="container" style={{ position: "relative" }}>
            <div className="header-menu-des">
              <nav className="header-nav current" style={{display:isClose ? "none" :"block"}}>
                <ul className="item_big">
                  <li>
                    <div style={{textAlign:"right"}}>
                     <div onClick={()=> setIsClose(true)} style={{fontSize:40}}>
                     X
                     </div>
                    </div>
                    <a
                      className="logo-sitenav d-lg-none d-block"
                      href="/"
                      title="Logo"
                    >
                      <img
                        width="172"
                        height="50"
                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/logo.png?1696125396195"
                        alt="Dola Watch"
                      />
                    </a>
                  </li>
                  <li className="d-lg-none d-block account-mb">
                    <ul>
                      <li>
                        <a title="Đăng ký" onClick={()=>navigation("/account/register")}>
                          Đăng ký
                        </a>
                      </li>
                      <li>
                        <a title="Đăng nhập" onClick={()=>navigation("/account/login")}>
                          Đăng nhập
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="d-block d-lg-none title-danhmuc">
                    <span>Menu chính</span>
                  </li>
                  {/* header menu */}
          
                  <SideBar/>
                  {/* header menu */}
                  <li className="d-lg-none d-block item-mb">
                    <a href="/he-thong-cua-hang" title="Hệ thống cửa hàng">
                      Hệ thống cửa hàng
                    </a>
                    <a  title="Sản phẩm Yêu thích" onClick={()=>navigation("/san-pham-yeu-thich")}>
                      Sản phẩm yêu thích
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* header */}
    </>
  );
};

export default Header;
