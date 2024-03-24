import { useEffect, useState } from "react";
import PopupCoupon from "./component/popupCoupon";
import "./index.scss";
import { useVoucherApi } from "/@/apis";
import { IVoucher } from "/@/apis/voucherApi/types";

const Coupon = () => {
  const [listVoucher,setListVoucher] = useState<IVoucher[]>()
  const [isPopupCoupon, setIsPopupCoupon] = useState(false);
  const {voucherApi} = useVoucherApi()

  const handleGetVoucher = async( )=>{
    try {
      const res = await voucherApi.getAll()
      setListVoucher(res.data.items as IVoucher[])
    } catch (error) {
      
    }
  }
  useEffect(() => {
    handleGetVoucher()
  }, [])

  return (
    <div id="coupon">
      <section className="section_coupon">
        <div className="container">
          <div
            className="coupon-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            style={{ cursor: "grab" }}
          >
            <div className="swiper-wrapper" style={{ display: "inline-flex" }}>
              {listVoucher?.map((voucher,key)=>(
              <div
              className="swiper-slide swiper-slide-active"
              style={{ width: 316, marginRight: 10 }}
              key={key}
            >
              <div className="content_wrap">
                <a
                  title="Chi tiết"
                  onClick={() => setIsPopupCoupon(true)}
                  className="info-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 512"
                  >
                    <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                  </svg>
                </a>
                <div className="content-top">
                  {voucher.code}
                  <span>{voucher.moTa}</span>
                </div>
                <div className="content-bottom">
                  <span>HSD: Không thời hạn</span>
                </div>
              </div>
            </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PopupCoupon
        isShow={isPopupCoupon}
        handleClose={() => setIsPopupCoupon(false)}
      />
    </div>
  );
};

export default Coupon;
