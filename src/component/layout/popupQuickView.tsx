import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductPopup,
} from "/@/stores/popupItem/popupReduce";
import { IProduct } from "/@/apis/productApi/types";
import { formattedNumber } from "/@/utils/stringUtil";
import "./popupQuickView.scss";
import { selectProductPopupQuickView ,setProductPopupQuickView} from "/@/stores/popupQuickView/popupQuickViewReduce";
import { useCartApi } from "/@/apis";
import { setListProduct } from "/@/stores/cart/cartReduce";
const PopupQuickView = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(false);
  const [product, setProduct] = useState<IProduct>();
  const popupStoreQuickView = useSelector(selectProductPopupQuickView);
  const [inputNumber, setInputNumber] = useState(1);
  const {cartApi} = useCartApi()

  useEffect(() => {
    if (popupStoreQuickView.product) {
      setProduct(popupStoreQuickView.product);
      setMode(true);
    }
  }, [popupStoreQuickView]);

  const handleClosePopup = () => {
    dispatch(setProductPopupQuickView(undefined));
    setMode(false);
  };

  const handleGetDataCart = async () => {
    const res = await cartApi.getAll();
    dispatch(setListProduct(res.data as unknown as any[]));
  };

  const handleAddToCart = async () => {
    try {
      await cartApi.create({ productId: product?._id ,quantity:inputNumber});
      handleGetDataCart();
      handleClosePopup()
      dispatch(setProductPopup(product));
    } catch (error) {}
  };


  return (
    <>
      {mode && product && (
        <>
          <div id="quick-view-product" className="quickview-product">
            <div className="quickview-overlay fancybox-overlay fancybox-overlay-fixed"  onClick={()=>handleClosePopup()}/>
            <div className="quick-view-product">
              <div className="block-quickview primary_block details-product">
                <div className="row">
                  <div className="product-left-column product-images col-xs-12 col-sm-4 col-md-4 col-lg-5 col-xl-6">
                    <div className="image-block large-image col_large_default">
                      <span className="view_full_size">
                        <a className="img-product" title="" >
                          <img
                            src={product?.images[0]}
                            id="product-featured-image-quickview"
                            className="img-responsive product-featured-image-quickview"
                            alt="quickview"
                          />
                        </a>
                      </span>
                      {/* <div
                                      className="loading-imgquickview"
                                      style={{ display: "block" }}
                                    /> */}
                    </div>
                    <div className="more-view-wrapper clearfix">
                      <div
                        className="thumbs_quickview owl_nav_custome1 swiper-container thumbs_list_quickview swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                        id="thumbs_list_quickview"
                      >
                        <ul
                          className="product-photo-thumbs quickview-more-views-owlslider not-thuongdq swiper-wrapper"
                          id="thumblist_quickview"
                          style={{
                            transitionDuration: "0ms",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <li
                            className="swiper-slide swiper-slide-active"
                            style={{ width: "94.75px", marginRight: 15 }}
                          >
                            <a >
                              <img
                                src={product?.images[0]}
                                alt="Zomart"
                                style={{ maxWidth: 120, maxHeight: 120 }}
                              />
                            </a>
                          </li>
                          <li
                            className="swiper-slide swiper-slide-next"
                            style={{ width: "94.75px", marginRight: 15 }}
                          >
                            <a
                              
                              style={{ maxWidth: 120, maxHeight: 120 }}
                            ></a>
                          </li>
                        </ul>
                        <div className="swiper-button-prev swiper-button-disabled"></div>
                        <div className="swiper-button-next"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product-center-column product-info product-item col-xs-12 col-sm-6 col-md-8 col-lg-7 col-xl-6 details-pro style_product style_border"
                    id="product-31449259"
                  >
                    <div className="head-qv group-status">
                      <h3 className="qwp-name title-product">
                        <a
                          className="text2line"
                          // href="/g-shock-ga-2000-1a2dr-nam-kinh-cung-quartz-pin-mat-so-51-2mm-bo-bam-gio-chong-nuoc-20atm"
                          title="G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ (PIN) – MẶT SỐ 51.2MM, BỘ BẤM GIỜ, CHỐNG NƯỚC 20ATM"
                        >
                          {product?.name}
                        </a>
                      </h3>
                      <div className="vend-qv group-status">
                        <div className="left_vend">
                          <div className="first_status ">
                            Tình trạng:
                            <span className="soluong status_name">
                              Còn hàng
                            </span>
                          </div>
                          <div className="top_sku first_status">
                            Mã sản phẩm:
                            <span className="sku_ status_name">
                              Đang cập nhật
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="quickview-info">
                      <span className="prices price-box">
                        <span className="price product-price sale-price">
                          {formattedNumber(product?.discountedPrice)}
                        </span>
                        <del className="old-price">
                          {formattedNumber(product?.originalPrice)}₫
                        </del>
                      </span>
                    </div>
                    <div className="product-description product-summary">
                      <div className="rte">
                        Thông tin sản phẩm đang cập nhật
                      </div>
                    </div>
                    <div
                      className="quick_option variants form-ajaxtocart form-product"
                      id="product-actions-31449259"
                    >
                      <span
                        className="price-product-detail d-none"
                        style={{ opacity: 0 }}
                      >
                        <span className="" />
                      </span>
                      <div className="form_product_content">
                        <div className="count_btn_style quantity_wanted_p">
                          <div
                            className=" soluong1 clearfix"
                            style={{ display: "block" }}
                          >
                            <span className="soluong_h">Số lượng:</span>{" "}
                            <div className="sssssscustom input_number_product">
                              <button
                                className="btn_num num_1 button button_qty"
                                onClick={() =>
                                  setInputNumber((val) =>
                                    val > 1 ? val - 1 : 1
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                id="quantity-detail"
                                maxLength={2}
                                className="prd_quantity"
                                value={inputNumber}
                                onChange={(e) =>
                                  setInputNumber(
                                    Number(e.target.value) <= 0
                                      ? 1
                                      : Number(e.target.value)
                                  )
                                }
                              />
                              <button
                                className="btn_num num_2 button button_qty"
                                onClick={() => setInputNumber((val) => val + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="button_actions clearfix">
                            <button
                              type="submit"
                              className="btn_cool btn btn_base fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart add_to_cart_detail"
                              onClick={()=>handleAddToCart()}
                            >
                              <span className="btn-content text_1">
                                Thêm vào giỏ hàng
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                title="Close"
                className="quickview-close close-window"
                onClick={()=>handleClosePopup()}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="times"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="svg-inline--fa fa-times fa-w-10"
                >
                  <path
                    fill="currentColor"
                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                    className=""
                  />
                </svg>
              </a>
            </div>
            <div id="quickview-modal" style={{ display: "none" }}>
              <div className="block-quickview primary_block details-product">
                <div className="row">
                  <div className="product-left-column product-images col-xs-12 col-sm-4 col-md-4 col-lg-5 col-xl-6">
                    <div className="image-block large-image col_large_default">
                      <span className="view_full_size">
                        <a className="img-product" title="" >
                          <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/487/743/products/casio-efv-550l-1avudf-3-699x699.png"
                            id="product-featured-image-quickview"
                            className="img-responsive product-featured-image-quickview"
                            alt="quickview"
                          />
                        </a>
                      </span>
                      <div
                        className="loading-imgquickview"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="more-view-wrapper clearfix">
                      <div
                        className="thumbs_quickview owl_nav_custome1 swiper-container thumbs_list_quickview swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                        id="thumbs_list_quickview"
                      >
                        <ul
                          className="product-photo-thumbs quickview-more-views-owlslider not-thuongdq swiper-wrapper"
                          id="thumblist_quickview"
                          style={{ transitionDuration: "0ms" }}
                        />
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                      </div>
                    </div>
                  </div>
                  <div className="product-center-column product-info product-item col-xs-12 col-sm-6 col-md-8 col-lg-7 col-xl-6 details-pro style_product style_border">
                    <div className="head-qv group-status">
                      <h3 className="qwp-name title-product">abc</h3>
                      <div className="vend-qv group-status">
                        <div className="left_vend">
                          <div className="first_status ">
                            Tình trạng:
                            <span className="soluong status_name" />
                          </div>
                          <div className="top_sku first_status">
                            Mã sản phẩm:
                            <span className="sku_ status_name" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="quickview-info">
                      <span className="prices price-box">
                        <span className="price product-price" />
                        <del className="old-price" />
                      </span>
                    </div>
                    <div className="product-description product-summary">
                      <div className="rte"></div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                title="Close"
                className="quickview-close close-window"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="times"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="svg-inline--fa fa-times fa-w-10"
                >
                  <path
                    fill="currentColor"
                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                    className=""
                  />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopupQuickView;
