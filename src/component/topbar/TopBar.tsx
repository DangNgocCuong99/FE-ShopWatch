import { useState, useEffect, useCallback } from "react";
import "./index.css";

const Topbar = () => {
  const arrTitleBar: string[] = [
    "Chào mừng bạn đến với cửa hàng Nam Dung Watch!",
    "Rất nhiều ưu đãi và chương trình khuyến mãi đang chờ đợi bạn",
    "Ưu đãi lớn dành cho thành viên mới",
  ];
  const [titleBar, setTitleBar] = useState<string>(arrTitleBar[0]);

  const handleGetTitleBar = useCallback(() => {
    const delayTitleNextMs = 2000;
   
    let i = 1;
    setInterval(() => {
      setTitleBar(arrTitleBar[i]);
      if (i < arrTitleBar.length - 1) {
        i++;
      } else {
        i = 0;
      }
    }, delayTitleNextMs);
  }, []);

  useEffect(() => {
    handleGetTitleBar();
  }, [handleGetTitleBar]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-text">
            <div className="text-slider swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <div
                className="swiper-wrapper"
                style={{ transitionDuration: "0ms" , display:"flow"}}
              >
                <div
                  className="swiper-slide"
                  style={{
                    width: "100%",
                    opacity: "1",
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  <span className="dot"></span>
                  {titleBar}
                </div>

                <div
                  className="swiper-slide swiper-slide-next"
                  style={{
                    width: "1296px",
                    opacity: "1",
                    transform: " translate3d(0, 0px, 0px)",
                    transitionDuration: " 0ms",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
