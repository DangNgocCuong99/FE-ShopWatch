import { useEffect, useState } from "react";
import "./index.scss";
import { renderProduct } from "/@/shopViews/product-template";
import { useProductApi } from "/@/apis";
import { IProduct } from "/@/apis/productApi/types";
import { renderProductTest } from "../../../product-template/index_test";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
const FlashSale = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [day, setDay] = useState(0);
  const [overTime, setOverTime] = useState(false);

  const { productApi } = useProductApi();
  const [listProduct, setListProduct] = useState<any[]>();
  const listText = [
    { text: "1 đổi 1 nếu sản phẩm xảy ra lỗi", href: "/chinh-sach-thanh-thanh-toan" },
    {
      text: "Tặng gói bảo hành 5 năm khi mua bất kỳ sản phẩm nào",
      href: "/chinh-sach-thanh-thanh-toan",
    },
    {
      text: "Miễn phí thay pin trọn đời cho tất cả sản phẩm",
      href: "/chinh-sach-thanh-thanh-toan",
    },
    {
      text: "Giảm giá khi mua từ 3 sản phẩm trở lên",
      href: "/chinh-sach-thanh-thanh-toan",
    },
    {
      text: "Nhận ngay ưu đãi khi đăng ký thành viên",
      href: "/chinh-sach-thanh-thanh-toan",
    },
    {
      text: "1 đổi 1 nếu sản phẩm xảy ra lỗi",
      href: "/chinh-sach-thanh-thanh-toan",
    },
  ];

  const handleFetchProductFalsh = async () => {
    try {
      const res = await productApi.getAll({ page: 1, pageSize: 5 });
      setListProduct(res.data.items);
    } catch (error) {}
  };

  function countdownTimer() {
    // Lấy thời gian hiện tại
    const currentDate = new Date();

    // Đặt giờ, phút, giây về 0
    currentDate.setHours(0, 0, 0, 0);

    // Lấy tổng số giây trong ngày
    let totalSeconds = Math.floor(
      (currentDate.getTime() + 24 * 60 * 60 * 1000 - Date.now()) / 1000
    );

    // Kiểm tra nếu đã hết thời gian đếm ngược
    if (totalSeconds <= 0) {
      console.log("Hết thời gian đếm ngược!");
      return;
    }

    // Tạo interval để đếm ngược từng giây
    const intervalId = setInterval(() => {
      // Giảm giây đi 1
      totalSeconds--;

      // Tính toán giờ, phút, giây từ tổng số giây
      setDay(Math.floor(totalSeconds / 3600 / 24));
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);

      // Kiểm tra nếu đã hết thời gian đếm ngược
      if (totalSeconds <= 0) {
        console.log("Hết thời gian đếm ngược!");
        clearInterval(intervalId);
        setOverTime(true);
      }
    }, 1000);
  }
  useEffect(() => {
    countdownTimer();
    handleFetchProductFalsh();
  }, []);

  // Gọi hàm để bắt đầu đếm ngược

  return (
    <div id="flash-sale">
      <section
        className="section_flashsale"
        style={overTime ? { display: "none" } : undefined}
      >
        <div className="container">
          <div
            className="thumb-flasale"
            style={{
              background: "linear-gradient(145deg, #000000 0%, #d1a02f 89%)",
            }}
          >
            <div className="group_title_index_flash">
              <div className="title">
                <a
                  className="title-name"
                  href="san-pham-khuyen-mai"
                  title="Khuyến mãi hấp dẫn"
                >
                  <img
                    width={12}
                    height={16}
                    src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/flash.svg?1696125396195"
                    alt="flash"
                  />
                  Khuyến mãi hấp dẫn
                </a>
              </div>
              <div className="count-down">
                <div
                  className="timer-view"
                  data-countdown="countdown"
                  data-date="2023-12-30-00-00-00"
                >
                  <div className="block-timer">
                    <p>
                      <b>{day}</b>Ngày
                    </p>
                  </div>
                  <span>:</span>
                  <div className="block-timer">
                    <p>
                      <b>{hours}</b>Giờ
                    </p>
                  </div>
                  <span className="mobile">:</span>
                  <div className="block-timer">
                    <p>
                      <b>{minutes}</b>Phút
                    </p>
                  </div>
                  <span>:</span>
                  <div className="block-timer">
                    <p>
                      <b>{seconds}</b>Giây
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-banner-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <Swiper
                modules={[EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                effect="slide" // Sử dụng hiệu ứng chuyển động Slide Fade
                speed={10000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
              >
                {listText.map((item, index) => {
                  return (
                      <SwiperSlide key={index}>
                        <a href={item.href} title={item.text}>
                          {item.text}
                        </a>
                      </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="banner-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <div
                className="swiper-wrapper"
                style={{
                  display: "inline-flex",
                  transform: "translate3d(-2592px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={1}
                >
                  <a className="image-effect" href="" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_2.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_2.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={2}
                >
                  <a className="image-effect" href="#" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_3.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_3.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-next"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={0}
                >
                  <a className="image-effect" href="#" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_1.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_1.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={1}
                >
                  <a className="image-effect" href="" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_2.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_2.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={2}
                >
                  <a className="image-effect" href="#" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_3.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_3.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={0}
                >
                  <a className="image-effect" href="#" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_1.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_1.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  style={{ width: 628, marginRight: 20 }}
                  data-swiper-slide-index={1}
                >
                  <a className="image-effect" href="" title="Banner">
                    <img
                      width={700}
                      height={235}
                      className="lazyload loaded"
                      src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_2.jpg?1696125396195"
                      data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_flash_2.jpg?1696125396195"
                      alt="Banner"
                      data-was-processed="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="product-flash-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
              style={{ cursor: "grab" }}
            >
              <div
                className="row row-fix"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "inline-flex",
                }}
              >
                {renderProductTest(listProduct as IProduct[], 5)}
              </div>
            </div>
            <div className="see-more">
              <a href="san-pham-khuyen-mai" title="Xem tất cả">
                Xem tất cả
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlashSale;
