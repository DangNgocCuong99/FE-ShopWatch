import { useState } from 'react'
import PopupCoupon from './component/popupCoupon'
import './index.css'

const Coupon = ()=>{
    const [isPopupCoupon, setIsPopupCoupon] = useState(false)

    return (
        <>
        <section className="section_coupon">
        <div className="container">
          <div
            className="coupon-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            style={{ cursor: "grab" }}
          >
            <div className="swiper-wrapper" style={{display:"inline-flex"}}>
              <div
                className="swiper-slide swiper-slide-active"
                style={{ width: 316, marginRight: 10 }}
              >
                <div className="content_wrap">
                  <a
                    title="Chi tiết"
                    onClick={()=>setIsPopupCoupon(true)}
                    className="info-button"
                    data-coupon="DOLA10"
                    data-time="1/10/2023"
                    data-content="Áp dụng cho đơn hàng từ 200k trở lên<br>
      Không đi kèm với chương trình khác"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                    </svg>
                  </a>
                  <div className="content-top">
                    DOLA10
                    <span>Giảm 10.000đ giá trị đơn hàng</span>
                  </div>
                  <div className="content-bottom">
                    <span>HSD: 1/10/2023</span>
                    <div
                      className="coupon-code js-copy"
                      data-copy="DOLA10"
                      title="Sao chép"
                    >
                      Sao chép
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{ width: 316, marginRight: 10 }}
              >
                <div className="content_wrap">
                  <a
                    title="Chi tiết"
                    href="javascript:void(0)"
                    className="info-button"
                    data-coupon="FREESHIP"
                    data-time="Không thời hạn"
                    data-content="Áp dụng cho đơn hàng từ 500k trở lên"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                    </svg>
                  </a>
                  <div className="content-top">
                    FREESHIP
                    <span>Miễn phí vận chuyển</span>
                  </div>
                  <div className="content-bottom">
                    <span>HSD: Không thời hạn</span>
                    <div
                      className="coupon-code js-copy"
                      data-copy="FREESHIP"
                      title="Sao chép"
                    >
                      Sao chép
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: 316, marginRight: 10 }}>
                <div className="content_wrap">
                  <a
                    title="Chi tiết"
                    href="javascript:void(0)"
                    className="info-button"
                    data-coupon="DOLA20"
                    data-time="1/10/2023"
                    data-content="Áp dụng cho đơn hàng từ 2 triệu trở lên<br>
      Không đi kèm với chương trình khác"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                    </svg>
                  </a>
                  <div className="content-top">
                    DOLA20
                    <span>Giảm 20% giá trị đơn hàng</span>
                  </div>
                  <div className="content-bottom">
                    <span>HSD: 1/10/2023</span>
                    <div
                      className="coupon-code js-copy"
                      data-copy="DOLA20"
                      title="Sao chép"
                    >
                      Sao chép
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide" style={{ width: 316, marginRight: 10 }}>
                <div className="content_wrap">
                  <a
                    title="Chi tiết"
                    href="javascript:void(0)"
                    className="info-button"
                    data-coupon="DOLA50K"
                    data-time="1/10/2023"
                    data-content="Áp dụng cho đơn hàng từ 2 triệu trở lên<br>
      Không đi kèm với chương trình khác"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                    </svg>
                  </a>
                  <div className="content-top">
                    DOLA50K
                    <span>Giảm 50k</span>
                  </div>
                  <div className="content-bottom">
                    <span>HSD: 1/10/2023</span>
                    <div
                      className="coupon-code js-copy"
                      data-copy="DOLA50K"
                      title="Sao chép"
                    >
                      Sao chép
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopupCoupon isShow={isPopupCoupon} handleClose={()=>setIsPopupCoupon(false)}/>
      </>
    )
}

export default Coupon