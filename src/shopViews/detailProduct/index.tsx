import { useParams } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import { useProductApi } from '/@/apis';
import { IProduct } from '/@/apis/productApi/types';
import { formattedNumber } from '/@/utils/stringUtil';

const DetailProduct = () => {
  const {productApi} = useProductApi()

  const { id } = useParams() as { id: string }
  const [product, setProduct] =  useState<IProduct>()
  const handleGetDetailProduct = async()=>{
    try {
      console.log(id);   
      const res =await productApi.getDetailByShop(id)
      setProduct(res.data)
      console.log("🚀 ~ handleGetDetailProduct ~ res:", res)
    } catch (error) {
      
    }
  }

useEffect(()=>{
  handleGetDetailProduct()
},[id])  

  return (
    <div id='detail-product'>
      <section
        className="product layout-product"
        itemType="https://schema.org/Product"
      >
        <div
          className="d-none"
          itemProp="brand"
          itemType="https://schema.org/Brand"
        >
          <meta itemProp="name" content="TISSOT" />
        </div>
        <div
          className="d-none hidden"
          itemProp="offers"
          itemType="http://schema.org/Offer"
        >
          <div
            className="inventory_quantity hidden"
            itemType="http://schema.org/ItemAvailability"
          >
            <span className="a-stock" itemProp="supersededBy">
              Hết hàng
            </span>
          </div>
          <link itemProp="availability" href="http://schema.org/OutOfStock" />
          <meta itemProp="priceCurrency" content="VND" />
          <meta itemProp="price" content={"14700000"} />
          <meta
            itemProp="url"
            content="https://dola-watch.mysapo.net/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
          />
          <span
            itemProp="UnitPriceSpecification"
            itemType="https://schema.org/Downpayment"
          >
            <meta itemProp="priceType" content={"14700000"} />
          </span>
          <span
            itemProp="UnitPriceSpecification"
            itemType="https://schema.org/Downpayment"
          >
            <meta itemProp="priceSpecification" content={"18300000"} />
          </span>
          <meta itemProp="priceValidUntil" content="2099-01-01" />
        </div>
        <div
          className="d-none hidden"
          id="https://dola-watch.mysapo.net"
          itemProp="seller"
          itemType="http://schema.org/Organization"
        >
    
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-12">
              <div className="details-product">
                <div className="row">



                  <div className="product-detail-left product-images col-12 col-md-12 col-lg-4">
                    <div className="product-image-block relative ">
                      <div className="swiper-container gallery-top block-background swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                        <div className="swiper-wrapper" id="lightgallery" >
                          <a
                            className="swiper-slide"
                            data-hash={8}
                            href="//bizweb.dktcdn.net/thumb/1024x1024/100/487/743/products/t063-617-36-037-00-10-699x699.png?v=1687058755027"
                            title="Click để xem"
                            style={{ width: 356 }}
                          >
                            <img
                              height={400}
                              width={400}
                              src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/t063-617-36-037-00-10-699x699.png?v=1687058755027"
                              alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                              data-image="https://bizweb.dktcdn.net/100/487/743/products/t063-617-36-037-00-10-699x699.png?v=1687058755027"
                              className="img-responsive mx-auto d-block swiper-lazy"
                            />
                          </a>
                        </div>
                        <div className="tag-km">
                          <span>
                            <img src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195" />{" "}
                            Mới
                          </span>
                          <span>
                            <img src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195" />{" "}
                            Bán chạy
                          </span>
                        </div>
                      </div>
                      <div className="swiper-container gallery-thumbs block-background swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-free-mode swiper-container-thumbs">
                        <div className="swiper-wrapper" >
                          <div
                            className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                            data-hash={0}
                            style={{ width: "81.5px", marginRight: 10 }}
                          >
                            <div className="p-100">
                              <img
                                height={80}
                                width={80}
                                src="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
                                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                data-image="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
                                className="swiper-lazy swiper-lazy-loaded"
                              />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-visible swiper-slide-next"
                            data-hash={1}
                            style={{ width: "81.5px", marginRight: 10 }}
                          >
                            <div className="p-100">
                              <img
                                height={80}
                                width={80}
                                src="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-9-699x699.png?v=1687058745247"
                                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                data-image="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-9-699x699.png?v=1687058745247"
                                className="swiper-lazy swiper-lazy-loaded"
                              />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-visible"
                            data-hash={2}
                            style={{ width: "81.5px", marginRight: 10 }}
                          >
                            <div className="p-100">
                              <img
                                height={80}
                                width={80}
                                src="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-6-699x699.png?v=1687058746713"
                                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                data-image="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-6-699x699.png?v=1687058746713"
                                className="swiper-lazy swiper-lazy-loaded"
                              />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-visible"
                            data-hash={3}
                            style={{ width: "81.5px", marginRight: 10 }}
                          >
                            <div className="p-100">
                              <img
                                height={80}
                                width={80}
                                src="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-5-699x699.png?v=1687058748347"
                                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                data-image="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-5-699x699.png?v=1687058748347"
                                className="swiper-lazy swiper-lazy-loaded"
                              />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-visible"
                            data-hash={3}
                            style={{ width: "81.5px", marginRight: 10 }}
                          >
                            <div className="p-100">
                              <img
                                height={80}
                                width={80}
                                src="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-5-699x699.png?v=1687058748347"
                                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                data-image="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-5-699x699.png?v=1687058748347"
                                className="swiper-lazy swiper-lazy-loaded"
                              />
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide-visible"
                            data-hash={3}
                            style={{ width: "81.5px", marginRight: 10 }}
                          >
                            <div className="p-100">
                              <img
                                height={80}
                                width={80}
                                src="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-5-699x699.png?v=1687058748347"
                                alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                data-image="//bizweb.dktcdn.net/thumb/medium/100/487/743/products/t063-617-36-037-00-5-699x699.png?v=1687058748347"
                                className="swiper-lazy swiper-lazy-loaded"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev swiper-button-disabled"></div>
                      </div>
                    </div>
                  </div>



                  
                  <div className=" col-12 col-md-7 col-lg-5">
                    <div className="details-pro block-background">
                      <h1 className="title-product">
                        {product?.name} – {product?.gioiTinh} – {product?.may} 
                        – MẶT SỐ {product?.duongKinhMatSo} MM, KÍNH {product?.kinh}
                      </h1>
                      <div className="inventory_quantity">
                        <div className="thump-break">
                          <span className="mb-break inventory">
                            <span className="stock-brand-title">
                              Tình trạng:
                            </span>
                            <span className="a-stock">{product?.quantity ? `${product?.quantity} sản phẩm`: "Hết hàng"}</span>
                          </span>
                          <div className="sku-product clearfix">
                            <span className="stock-brand-title">
                              Mã sản phẩm:
                            </span>
                            <span
                              className="variant-sku"
                              itemProp="sku"
                              content="Đang cập nhật"
                            >
                              <span className="a-sku">Đang cập nhật</span>
                            </span>
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="reviews_details_product ">
                        <div
                          className="sapo-product-reviews-badge sapo-product-reviews-badge-detail"
                          data-id={31449180}
                        />
                      </div>
                      <form
                        encType="multipart/form-data"
                        data-cart-form=""
                        id="add-to-cart-form"
                        action="/cart/add"
                        method="post"
                        className="form-inline"
                      >
                        <div className="price-box clearfix">
                          <span className="special-price">
                            <span className="price product-price">
                             {product && formattedNumber(product?.discountedPrice)}₫
                            </span>
                            <meta itemProp="price" content={"14700000"} />
                            <meta itemProp="priceCurrency" content="VND" />
                          </span>{" "}
                          {/* Giá Khuyến mại */}
                          <span
                            className="old-price"
                            itemProp="priceSpecification"
                            // itemScope=""
                            itemType="http://schema.org/priceSpecification"
                          >
                            <span className="price product-price-old">
                            {product && formattedNumber(product?.originalPrice)}₫
                            </span>
                            <meta itemProp="price" content={"18300000"} />
                            <meta itemProp="priceCurrency" content="VND" />
                          </span>{" "}
                          {/* Giás gốc */}
                          <span className="save-price">
                            Tiết kiệm:
                            <span className="price product-price-save">
                            {product && formattedNumber(product?.originalPrice - ( product.discountedPrice || 0))}₫
                            </span>
                          </span>{" "}
                          {/* Tiết kiệm */}
                        </div>
                        {/* <div className="flashsale_product">
                          <div
                            className="count-down"
                            style={{
                              background:
                                "linear-gradient(90deg, #bd110f 0%, #d1a02f 89%)",
                            }}
                          >
                            <span className="title-count-down">
                              Kết thúc còn:
                            </span>
                            <div
                              className="timer-view"
                              data-countdown="countdown"
                              data-date="2023-12-30-00-00-00"
                            >
                              <div className="block-timer">
                                <p>
                                  <b>54</b>Ngày
                                </p>
                              </div>
                              <span>:</span>
                              <div className="block-timer">
                                <p>
                                  <b>15</b>Giờ
                                </p>
                              </div>
                              <span className="mobile">:</span>
                              <div className="block-timer">
                                <p>
                                  <b>23</b>Phút
                                </p>
                              </div>
                              <span>:</span>
                              <div className="block-timer">
                                <p>
                                  <b>05</b>Giây
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="elio-productcount">
                            <div className="countdown sold-out">
                              <div className="line">
                                <span style={{ width: "100%" }}> </span>
                              </div>
                              <span className="title">Hết hàng</span>
                            </div>
                          </div>
                        </div> */}
                        <div className="pro-promo">
                          Miễn phí thay pin trọn đời cho tất cả khách hàng
                        </div>
                        {/* <div className="form-product">
                          <div className="box-variant clearfix  d-none ">
                            <input
                              type="hidden"
                              id="one_variant"
                              name="variantId"
                              defaultValue={91048217}
                            />
                          </div>
                          <div className="clearfix form-group ">
                            <div className="flex-quantity">
                              <div className="custom custom-btn-number ">
                                <label className="sl section">Số lượng:</label>
                                <div className="input_number_product form-control">
                                  <button
                                    className="btn_num num_1 button button_qty"
                                    // onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro ) && qtypro > 1 ) result.value--;return false;"
                                    type="button"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    id="qtym"
                                    name="quantity"
                                    defaultValue={1}
                                    maxLength={3}
                                    className="form-control prd_quantity"
                                    // onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                    // onchange="if(this.value == 0)this.value=1;"
                                  />
                                  <button
                                    className="btn_num num_2 button button_qty"
                                    // onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro )) result.value++;return false;"
                                    type="button"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="btn-mua button_actions clearfix">
                                <button
                                  className="btn btn-lg btn-style btn-style-active btn-cart btn-soldout btn_base btn_dis"
                                  // disabled="disabled"
                                >
                                  <span className="txt-main">Hết hàng</span>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="setWishlist btn-wishlist active"
                                  data-wish="tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                                  tabIndex={0}
                                  title="Bỏ yêu thích"
                                >
                                  <svg className="icon">
                                    {" "}
                                    <use
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xlinkHref="#icon-wishlist-active"
                                    />{" "}
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="form-product">
  <div className="box-variant clearfix  d-none ">
    <input
      type="hidden"
      id="one_variant"
      name="variantId"
      defaultValue={91048358}
    />
  </div>
  <div className="clearfix form-group ">
    <div className="flex-quantity">
      <div className="custom custom-btn-number show">
        <label className="sl section">Số lượng:</label>
        <div className="input_number_product form-control" style={{display:"flex"}}>
          <button
            className="btn_num num_1 button button_qty"
            onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro ) && qtypro > 1 ) result.value--;return false;"
            type="button"
          >
            -
          </button>
          <input
            type="text"
            id="qtym"
            name="quantity"
            defaultValue={1}
            maxLength={3}
            className="form-control prd_quantity"
            onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
            onchange="if(this.value == 0)this.value=1;"
          />
          <button
            className="btn_num num_2 button button_qty"
            onclick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro )) result.value++;return false;"
            type="button"
          >
            +
          </button>
        </div>
      </div>
      <div className="btn-mua button_actions clearfix">
        <button
          type="submit"
          className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart"
        >
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 40 40"
            >
              <defs />
              <g>
                <path
                  className="cls-1"
                  d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"
                />
              </g>
            </svg>
          </span>
          <span className="text">
            <span className="txt-main text_1">Thêm vào giỏ</span>
            <span className="text_2">Giao hàng tận nơi miễn phí</span>
          </span>
        </button>
        <a
          href="javascript:void(0)"
          className="setWishlist btn-wishlist"
          data-wish="g-shock-ga-2000-1a2dr-nam-kinh-cung-quartz-pin-mat-so-51-2mm-bo-bam-gio-chong-nuoc-20atm"
          tabIndex={0}
          title="Thêm vào yêu thích"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>



                      </form>
                      <div className="khuyen-mai">
                        <div className="title">
                          <img
                            width={64}
                            height={64}
                            src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/giftbox.png?1696125396195"
                            alt="vouver"
                          />
                          <span>Khuyến mãi đặc biệt !!!</span>
                        </div>
                        <div className="content">
                          <ul>
                            <li>
                              <img
                                width={20}
                                height={20}
                                src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/km_product1.png?1696125396195"
                                alt="Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành hàng."
                              />
                              Áp dụng Phiếu quà tặng/ Mã giảm giá theo ngành
                              hàng.
                            </li>
                            <li>
                              <img
                                width={20}
                                height={20}
                                src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/km_product2.png?1696125396195"
                                alt="Giảm giá 10% khi mua từ 5 sản phẩm trở lên."
                              />
                              Giảm giá 10% khi mua từ 5 sản phẩm trở lên.
                            </li>
                            <li>
                              <img
                                width={20}
                                height={20}
                                src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/km_product3.png?1696125396195"
                                alt="Tặng 100.000₫ mua hàng tại website thành viên Nam Dung Watch, áp dụng khi mua Online tại Hồ Chí Minh và 1 số khu vực khác."
                              />
                              Tặng 100.000₫ mua hàng tại website thành viên Dola
                              Watch, áp dụng khi mua Online tại Hồ Chí Minh và 1
                              số khu vực khác.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5 col-12 content-pro">
                    <div className="thumb-vendor">
                      <div className="title">Thương hiệu</div>
                      <div className="vendoritem">
                        <img
                          width={100}
                          height={100}
                          className="lazyload loaded"
                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
                          alt="TISSOT"
                          data-was-processed="true"
                        />
                      </div>
                      <a
                        className="see-more"
                        href="/search/?query=vendor:tissot"
                      >
                        Xem tất cả <b>TISSOT</b>
                      </a>
                    </div>
                    <div className="chinhsach-pro">
                      <div className="item">
                        <img
                          width={40}
                          height={40}
                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/chinhsach_1.png?1696125396195"
                          alt="Miễn phí vẫn chuyển"
                        />
                        <div className="text">
                          <span className="title">Miễn phí vẫn chuyển</span>
                          <span className="des">
                            Cho tất cả đơn hàng trong nội thành Hồ Chí Minh
                          </span>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          width={40}
                          height={40}
                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/chinhsach_2.png?1696125396195"
                          alt="Miễn phí đổi - trả"
                        />
                        <div className="text">
                          <span className="title">Miễn phí đổi - trả</span>
                          <span className="des">
                            Đối với sản phẩm lỗi sản xuất hoặc vận chuyển
                          </span>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          width={40}
                          height={40}
                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/chinhsach_3.png?1696125396195"
                          alt="Hỗ trợ nhanh chóng"
                        />
                        <div className="text">
                          <span className="title">Hỗ trợ nhanh chóng</span>
                          <span className="des">
                            Gọi Hotline: 19006750 để được hỗ trợ ngay lập tức
                          </span>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          width={40}
                          height={40}
                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/chinhsach_4.png?1696125396195"
                          alt="Ưu đãi thành viên"
                        />
                        <div className="text">
                          <span className="title">Ưu đãi thành viên</span>
                          <span className="des">
                            Đăng ký thành viên để được nhận được nhiều khuyến
                            mãi
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 col-xl-8 ">
                    <div
                      className="product-tab e-tabs not-dqtab block-background"
                      id="tab-product"
                    >
                      <ul className="tabs tabs-title clearfix">
                        <li className="tab-link active" data-tab="#tab-1">
                          <h3>
                            <img
                              alt="title"
                              src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
                            />
                            <span>Mô tả sản phẩm</span>
                          </h3>
                        </li>
                        <li className="tab-link" data-tab="#tab-2">
                          <h3>
                            <img
                              alt="title"
                              src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
                            />
                            <span>Hướng dẫn mua hàng</span>
                          </h3>
                        </li>
                      </ul>
                      <div className="tab-float">
                        <div
                          id="tab-1"
                          className="tab-content active content_extab"
                        >
                          <div className="rte product_getcontent">
                            <div className="ba-text-fpt has-height">
                              <p>
                                <strong>
                                  <em>
                                    Phái mạnh luôn có một sự hứng thú kỳ lạ với
                                    tốc độ và thể thao, vì thế họ cần một
                                    chiếc&nbsp;đồng hồ&nbsp;với khả năng đo đạc
                                    thời gian chính xác, và thế là cỗ
                                    máy&nbsp;chronograph&nbsp;ra đời từ đó. Là
                                    một cái tên lâu đời trong ngành công nghiệp
                                    này, thương hiệu&nbsp;đồng hồ
                                    Tissot&nbsp;cũng có cho riêng mình những
                                    thiết kế chronograph mạnh mẽ, đơn cử như
                                    phiên bản Tissot T063.617.36.037.00.
                                  </em>
                                </strong>
                              </p>
                              <p>&nbsp;</p>
                              <h2>
                                <strong>
                                  LỊCH SỬ THƯƠNG HIỆU ĐỒNG HỒ TISSOT
                                </strong>
                              </h2>
                              <p>
                                Tissot ra mắt lần đầu tiên năm 1853 tại thị trấn
                                Le Locle, Thụy Sỹ. Được xem là một trong những
                                thương hiệu đồng hồ lâu đời nhất còn hoạt động
                                đến hiện tại. Sản phẩm đầu tiên là đồng hồ bỏ
                                túi đã gây ấn tượng với người dùng bởi chất
                                lượng tốt và khả năng chính xác cao.
                              </p>
                              <p>
                                Thương hiệu gắn liền với các hoạt động thể thao
                                như đua xe, đua ngựa và nhiều giải đấu trên thế
                                giới. Đồng hồ Tissot được đánh giá có thiết kế
                                cổ điển, thanh lịch cùng mức giá dễ tiếp cận
                                nhất so với các thương hiệu Thụy Sỹ khác.
                              </p>
                              <p>
                                <img
                                  alt=""
                                  data-src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/10-dong-ho-tissot-t063-617-36-037-00-chinh-hang-100.jpg"
                                  data-was-processed="true"
                                  height={600}
                                  src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/10-dong-ho-tissot-t063-617-36-037-00-chinh-hang-100.jpg"
                                  width={600}
                                />
                              </p>
                              <p>
                                <em>
                                  Đồng hồ bỏ túi của Tissot thể hiện 2 múi giờ
                                  cùng lúc
                                </em>
                              </p>
                              <p>&nbsp;</p>
                              <h2>
                                <strong>
                                  SỨC HÚT MẠNH MẼ TỪ ĐỒNG HỒ NAM TISSOT
                                  T063.617.36.037.00
                                </strong>
                              </h2>
                              <p>
                                Là phiên bản&nbsp;đồng hồ cao cấp&nbsp;của
                                thương hiệu hàng trăm năm tuổi, Tissot
                                T063.617.36.037.00 được xem là có bước đệm tương
                                đối vững chắc. Không khó hiểu tại sao sản phẩm
                                này lại được khách hàng biết đến nhiều như vậy.
                              </p>
                              <p>
                                Tuy thuộc dòng chronograph nhưng thiết kế tổng
                                thể của đồng hồ lại không mang cảm giác quá thể
                                thao, thay vào đó là sự thanh lịch và sang trọng
                                toát ra từ mặt số và cả bộ phận dây đeo.
                              </p>
                              <p>
                                Và những lý giải sau đây sẽ cho các bạn biết tại
                                sao Tissot T063.617.36.037.00 lại có một sức hút
                                mạnh mẽ khó cưỡng đối với các quý ông thành đạt.
                              </p>
                              <p>
                                <img
                                  alt="Đồng hồ Tissot T063.617.36.037.00 sở hữu bộ bấm giờ thể thao - Ảnh 1"
                                  data-src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/1-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  data-was-processed="true"
                                  height={513}
                                  src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/1-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  width={770}
                                />
                              </p>
                              <p>
                                <em>
                                  Tissot T063.617.36.037.00 sở hữu vẻ ngoài
                                  tương đối lịch lãm với màu mặt số sáng
                                </em>
                              </p>
                              <p>&nbsp;</p>
                              <h3>
                                <strong>
                                  1. MẶT SỐ KHÔNG CẦU KỲ NHƯNG VẪN ĐỦ ẤN TƯỢNG
                                </strong>
                              </h3>
                              <p>
                                Tissot T063.617.36.037.00 là chiếc&nbsp;đồng hồ
                                nam&nbsp;theo phong cách thanh lịch, thế nên nó
                                sở hữu kích thước không quá hầm hố, với đường
                                kính 42mm trên độ dày 11.07mm.
                              </p>
                              <p>
                                Việc lựa chọn nền trắng cho phiên bản này không
                                chỉ giúp người xem dễ dàng quan sát thời gian mà
                                còn giúp chủ nhân tiện lợi trong việc phối hợp
                                với các trang phục hàng ngày.
                              </p>
                              <p>
                                Đặc biệt, các chi tiết thời gian trên thiết kế
                                này đều được nhà sản xuất tinh tế phủ lên nó một
                                lớp mạ vàng sang trọng bằng công nghệ tiên tiến
                                mang tên PVD.&nbsp;
                              </p>
                              <p>
                                Đây được xem là một trong những công nghệ tiên
                                tiến nhất trong chế tạo đồng hồ, vì thế người
                                dùng hoàn toàn có thể yên tâm vì độ bền và tính
                                thẩm mỹ đối với các sản phẩm&nbsp;mạ
                                PVD&nbsp;này.
                              </p>
                              <p>
                                Việc tối giản các chi tiết bên trong mặt đồng hồ
                                còn giúp tạo độ “thông thoáng” cho người dùng,
                                tại đây các mặt số phụ được bố trí một cách hài
                                hòa, logic.
                              </p>
                              <p>
                                <img
                                  alt="Đồng hồ Tissot T063.617.36.037.00 sở hữu bộ bấm giờ thể thao - Ảnh 3"
                                  data-src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/3-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  data-was-processed="true"
                                  height={513}
                                  src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/3-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  width={770}
                                />
                              </p>
                              <p>
                                <em>
                                  Các chi tiết được bố trí hài hòa và rất dễ
                                  nhìn
                                </em>
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                Và cuối cùng để bao phủ bề mặt ấy, nhà thiết kế
                                đã phủ lên nó lớp kính&nbsp;sapphire&nbsp;cao
                                cấp với những ưu điểm lớn như:
                              </p>
                              <p>● Tăng độ trong suốt cho&nbsp;mặt đồng hồ</p>
                              <p>
                                ● Khả năng chống trầy xước cực kỳ ấn tượng,
                                những va quẹt vô tình hằng ngày giờ đây sẽ không
                                phải là điều đáng lo nữa.&nbsp;
                              </p>
                              <p>
                                ● Độ cứng cao, được đánh giá với thang điểm
                                8/10, chỉ xếp sau kim cương trong bảng so sánh
                                Mohs.
                              </p>
                              <p>
                                Tuy nhiên, chẳng có điều gì là tuyệt đối cả, và
                                kính Sapphire cũng vậy. Nhược điểm lớn nhất của
                                loại chất liệu này là không thể đánh bóng được .
                              </p>
                              <p>
                                Tuy nhiên, bạn vẫn có thể lấy lại vẻ đẹp như ban
                                đầu cho chiếc đồng hồ cao cấp của mình bằng cách
                                thay cho nó mặt kính sapphire mới, hãy yên tâm
                                vì Đồng Hồ Hải Triều sẽ hỗ trợ người dùng dịch
                                vụ này với mức giá hợp lý nhất.
                              </p>
                              <p>
                                <img
                                  alt="Đồng hồ Tissot T063.617.36.037.00 sở hữu bộ bấm giờ thể thao - Ảnh 2"
                                  data-src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/2-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  data-was-processed="true"
                                  height={513}
                                  src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/2-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  width={770}
                                />
                              </p>
                              <p>
                                <em>
                                  Lớp niềng sáng bóng được chế tác bằng thép
                                  không gỉ 316L, kết hợp mạ vàng PVD
                                </em>
                              </p>
                              <p>&nbsp;</p>
                              <h3>
                                <strong>
                                  2. DÂY ĐEO ĐƯỢC CHẾ TẠO TỪ DA THẬT 100%
                                </strong>
                              </h3>
                              <p>
                                Phiên bản T063.617.36.037.00 là dòng&nbsp;đồng
                                hồ dây da&nbsp;cao cấp của thương hiệu Tissot,
                                thế nên từ thời điểm ra mắt đến nay, nó vẫn luôn
                                chiếm lĩnh một lượng khách hàng nhất định trên
                                thị trường.
                              </p>
                              <p>
                                Cụ thể, dây đeo của thiết kế này được chế tạo từ
                                chất liệu da bò, với bề mặt bên trên tạo hình
                                dập vân trông như da cá sấu và bề mặt bên dưới
                                là sự xuất hiện của sợi tổng hợp.
                              </p>
                              <p>
                                Bạn có biết, những chiếc đồng hồ dây da có điểm
                                cộng là tính thời trang và sự gọn nhẹ, thế nhưng
                                tuổi thọ của nó lại không cao. Tuy nhiên nếu
                                biết cách bảo quản, bạn vẫn có thể gia tăng độ
                                bền của nó. Cụ thể:
                              </p>
                              <p>
                                ● Hạn chế để bộ phận dây đeo tiếp xúc trực tiếp
                                và thường xuyên với nước.
                              </p>
                              <p>
                                ● Thường xuyên vệ sinh bằng khăn bông mềm, tuyệt
                                đối tránh xa các chất tẩy rửa với nồng độ mạnh.
                              </p>
                              <p>
                                ● Không kéo căng hoặc gập dây, vì nó có thể ảnh
                                hưởng trực tiếp đến tính thẩm mỹ của sản phẩm.
                              </p>
                              <p>
                                Ngoài ra, bạn nên thay dây da mới cho đồng hồ
                                của mình sau 1-2 năm sử dụng hoặc ngay khi phát
                                hiện các dấu hiệu xuống cấp.
                              </p>
                              <p>
                                <img
                                  alt="Đồng hồ Tissot T063.617.36.037.00 sở hữu bộ bấm giờ thể thao - Ảnh : 4"
                                  data-src="https://cdn3.dhht.vn/wp-content/uploads/2020/06/Dong-ho-Tissot-T063.617.36.037.00-so-huu-bo-bam-gio-the-thao-3.jpg"
                                  data-was-processed="true"
                                  height={409}
                                  src="https://cdn3.dhht.vn/wp-content/uploads/2020/06/Dong-ho-Tissot-T063.617.36.037.00-so-huu-bo-bam-gio-the-thao-3.jpg"
                                  width={728}
                                />
                              </p>
                              <p>
                                <em>
                                  Tissot T063.617.36.037.00 có 3 núm điều chỉnh,
                                  hỗ trợ chức năng bấm giờ thể thao
                                </em>
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                Hiện nay tại Hải Triều đang kinh doanh 2 dòng
                                dây da chính, đó là&nbsp;Hirsch&nbsp;và Masamu.
                                Cả hai đều có mẫu mã đa dạng, giá thành hợp lý
                                và chất lượng thì không cần phải bàn cãi. Tất
                                nhiên bạn sẽ được hỗ trợ và tư vấn nhiệt tình để
                                chọn cho mình một chiếc dây da ưng ý nhất.
                              </p>
                              <p>&nbsp;</p>
                              <h3>
                                <strong>
                                  3. BỘ MÁY VỚI CHỨNG NHẬN&nbsp;SWISS
                                  MADE&nbsp;DANH GIÁ
                                </strong>
                              </h3>
                              <p>
                                Có lẽ một trong những lý do chính khiến các
                                phiên bản&nbsp;đồng hồ quartz&nbsp;của thương
                                hiệu Tissot được người dùng ưa chuộng đến vậy là
                                do sự mạnh mẽ và chất lượng của&nbsp;bộ máy.
                              </p>
                              <p>
                                Ít ai biết rằng đại đa số đồng hồ của Tissot đều
                                mang trên mình cỗ máy của&nbsp;hãng ETA, một
                                người anh em cùng xuất thân chung
                                nhà&nbsp;Swatch Group.
                              </p>
                              <p>
                                Độ chính xác cao, thiết kế nhỏ gọn và tiện lợi
                                là những điểm cộng của lớn của dòng máy
                                này.&nbsp;
                              </p>
                              <p>
                                Ngoài ra, 4&nbsp;chân kính&nbsp;bên trong còn
                                giúp nó hoạt động trơn tru hơn vì độ ma sát giữa
                                các bánh răng đã được giảm bớt.&nbsp;
                              </p>
                              <p>
                                Thêm vào đó, khi mua sản phẩm đồng hồ nam Tissot
                                T063.617.36.037.00 tại các chi nhánh của Đồng Hồ
                                Hải Triều, bạn sẽ nhận được ưu đãi thay pin miễn
                                phí với thời hạn trọn đời.
                              </p>
                              <p>&nbsp;</p>
                              <p>
                                <img
                                  alt="YouTube video"
                                  data-pin-nopin="true"
                                  data-src="https://i.ytimg.com/vi/Frij9lKIT8U/hqdefault.jpg"
                                  data-was-processed="true"
                                  height={360}
                                  src="https://i.ytimg.com/vi/Frij9lKIT8U/hqdefault.jpg"
                                  width={480}
                                />
                              </p>
                              <p>&nbsp;</p>
                              <h3>
                                <strong>
                                  4. TÍNH NĂNG ĐI KÈM CỦA THIẾT KẾ
                                </strong>
                              </h3>
                              <p>
                                Là phiên bản đồng hồ chronograph, thế nên Tissot
                                T063.617.36.037.00 sẽ không thể thiếu những tính
                                năng đo đạc khác nhau thông qua 3 nút bấm bên
                                hông và 3 mặt số phụ.
                              </p>
                              <p>
                                Hơn thế nữa, hãng còn hoàn thiện chức năng hiển
                                thị thời gian bằng cách trang bị cho nó bộ lịch
                                ngày nhỏ được đặt tại vị trí 4 giờ.
                              </p>
                              <p>
                                Thêm vào đó là chỉ số chống nước ở mức tiêu
                                chuẩn&nbsp;3ATM, hỗ trợ người đeo trong các
                                trường hợp có tiếp xúc với nước như rửa tay hoặc
                                đi mưa nhỏ.
                              </p>
                              <p>
                                Tissot T063.617.36.037.00 chính là chiếc đồng hồ
                                thích hợp cho các môn thể thao trên cạn, vì vậy
                                muốn đo đếm thời gian cho các hoạt động dưới
                                nước, bạn nên chọn những phiên bản&nbsp;dây kim
                                loại&nbsp;với chỉ số lớn hơn&nbsp;10ATM.
                              </p>
                              <p>
                                <img
                                  alt="Đồng hồ Tissot T063.617.36.037.00 sở hữu bộ bấm giờ thể thao - Ảnh 4"
                                  data-src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/4-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  data-was-processed="true"
                                  height={513}
                                  src="https://cdn3.dhht.vn/wp-content/uploads/2017/08/4-tissot-t063-617-36-037-00-nam-kinh-sapphire-quartz-pin-day-da.jpg"
                                  width={770}
                                />
                              </p>
                              <p>
                                <em>
                                  Đây là sự lưa chọn hoàn hảo cho các quý ông
                                  theo đuổi phong cách lịch lãm&nbsp;
                                </em>
                              </p>
                            </div>
                            <div className="show-more">
                              <div className="btn btn-default btn--view-more see-more">
                                <a
                                  href="javascript:void(0)"
                                  className="more-text see-more"
                                >
                                  Xem thêm
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="less-text see-more"
                                >
                                  Thu gọn{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab-2" className="tab-content content_extab">
                          <div className="rte">
                            <p>
                              <strong>Bước 1:</strong>&nbsp;Truy cập website và
                              lựa chọn sản phẩm&nbsp;cần mua
                            </p>
                            <p>
                              <strong>Bước 2:</strong>&nbsp;Click và sản phẩm
                              muốn mua, màn hình hiển thị ra pop up với các lựa
                              chọn sau
                            </p>
                            <p>
                              Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp
                              tục mua hàng để lựa chọn thêm sản phẩm vào giỏ
                              hàng
                            </p>
                            <p>
                              Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm:
                              Bấm vào xem giỏ hàng
                            </p>
                            <p>
                              Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm
                              này vui lòng bấm vào: Đặt hàng và thanh toán
                            </p>
                            <p>
                              <strong>Bước 3:</strong>&nbsp;Lựa chọn thông tin
                              tài khoản thanh toán
                            </p>
                            <p>
                              Nếu bạn đã có tài khoản vui lòng nhập thông tin
                              tên đăng nhập là email và mật khẩu vào mục đã có
                              tài khoản trên hệ thống
                            </p>
                            <p>
                              Nếu bạn chưa có tài khoản và muốn đăng ký tài
                              khoản vui lòng điền các thông tin cá nhân để tiếp
                              tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ
                              dàng theo dõi được đơn hàng của mình
                            </p>
                            <p>
                              Nếu bạn muốn mua hàng mà không cần tài khoản vui
                              lòng nhấp chuột vào mục đặt hàng không cần tài
                              khoản
                            </p>
                            <p>
                              <strong>Bước 4:</strong>&nbsp;Điền các thông tin
                              của bạn để nhận đơn hàng, lựa chọn hình thức thanh
                              toán và vận chuyển cho đơn hàng của mình
                            </p>
                            <p>
                              <strong>Bước 5:</strong>&nbsp;Xem lại thông tin
                              đặt hàng, điền chú thích và gửi đơn hàng
                            </p>
                            <p>
                              Sau khi nhận được đơn hàng bạn gửi chúng tôi sẽ
                              liên hệ bằng cách gọi điện lại để xác nhận lại đơn
                              hàng và địa chỉ của bạn.
                            </p>
                            <p>Trân trọng cảm ơn.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-xl-4 ">
                    <div className="thong-so block-background">
                      <div className="title">
                        <img
                          alt="title"
                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
                        />
                        <span>Thông số kỹ thuật</span>
                      </div>
                      <div className="content">
                        <p>
                          <strong>Thương hiệu:</strong>&nbsp;Tissot
                        </p>
                        <p>
                          <strong>Số hiệu sản phẩm:</strong>
                          &nbsp;T063.617.36.037.00
                        </p>
                        <p>
                          <strong>Xuất xứ:</strong>&nbsp;Thụy Sỹ
                        </p>
                        <p>
                          <strong>Giới tính:</strong>&nbsp;Nam
                        </p>
                        <p>
                          <strong>Kính:</strong>&nbsp;Sapphire (Kính chống trầy)
                        </p>
                        <p>
                          <strong>Máy:</strong>&nbsp;Quartz&nbsp;(Pin)
                        </p>
                        <p>
                          <strong>Bảo hành quốc tế:</strong>&nbsp;2 năm
                        </p>
                        <p>
                          <strong>Bảo hành tại Hải Triều:</strong>&nbsp;
                          <strong>4 năm –</strong>&nbsp;
                          <strong>RED Guarantee</strong>
                        </p>
                        <p>
                          <strong>Đường kính mặt số:</strong>&nbsp;42 mm
                        </p>
                        <p>
                          <strong>Bề dày mặt số:&nbsp;</strong>11.07 mm
                        </p>
                        <p>
                          <strong>Niềng:</strong>&nbsp;Thép không gỉ
                        </p>
                        <p>
                          <strong>Dây đeo:</strong>&nbsp;Dây da chính hãng
                        </p>
                        <p>
                          <strong>Màu mặt số:</strong>&nbsp;Trắng
                        </p>
                        <p>
                          <strong>Chống nước:</strong>&nbsp;3&nbsp;ATM
                        </p>
                        <p>
                          <strong>Chức năng:</strong>&nbsp;Lịch ngày –
                          Chronograph
                        </p>
                        <p>
                          <strong>Nơi sản xuất (Tùy từng lô hàng):</strong>
                          &nbsp;Thụy Sỹ
                        </p>
                        <p>
                          <strong>Thông số đặc biệt</strong>:&nbsp;Máy ETA
                          G10.211, 4 chân kính, mạ vàng hồng PVD, da bò vân cá
                          sấu
                        </p>
                      </div>
                    </div>
                    <div className="productcompareprice d-none"></div>
                  </div>
                  <div className="col-12 col-lg-12 col-xl-12">
                    <div className="productRelate product-lq">
                      <div className="block-background">
                        <div className="group_title_index">
                          <h3 className="title">
                            <img
                              alt="title"
                              src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
                            />
                            <a
                              className="title-name"
                              href="/san-pham-ban-chay"
                              title="Sản phẩm liên quan"
                            >
                              Sản phẩm liên quan
                            </a>
                          </h3>
                        </div>
                        <div className="product-relate-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                          <div
                            className="swiper-wrapper"
                            style={{ transform: "translate3d(0px, 0px, 0px)" }}
                          >
                            <div
                              className="swiper-slide swiper-slide-active"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-32499353"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/demo-san-pham-co-thuoc-tinh"
                                      title="Demo sản phẩm có thuộc tính"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/fgw0100aw0-15775f27-e1be-421a-af5f-acd8ea138196.png?v=1694134890500"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/fgw0100aw0-15775f27-e1be-421a-af5f-acd8ea138196.png?v=1694134890500"
                                        alt="Demo sản phẩm có thuộc tính"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_5.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_5.jpg?1696125396195"
                                        alt="Orient"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={97465463}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views"
                                        title="Tùy chọn"
                                        type="button"
                                        // onclick="window.location.href='/demo-san-pham-co-thuoc-tinh'"
                                      >
                                        Tùy chọn
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/demo-san-pham-co-thuoc-tinh"
                                        data-handle="demo-san-pham-co-thuoc-tinh"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views"
                                        data-wish="demo-san-pham-co-thuoc-tinh"
                                        tabIndex={0}
                                        title="Thêm vào yêu thích"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#ffffff"
                                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/demo-san-pham-co-thuoc-tinh"
                                        title="Demo sản phẩm có thuộc tính"
                                      >
                                        Demo sản phẩm có thuộc tính
                                      </a>
                                    </h3>
                                    <div className="price-box">4.160.000₫ </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Miễn phí thay pin trọn đời cho tất cả
                                      khách hàng
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="swiper-slide swiper-slide-next"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449471"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/tissot-t103-310-36-111-01-nu-quartz-pin-mat-so-28mm-kinh-sapphire-chong-nuoc-3atm"
                                      title="TISSOT T103.310.36.111.01 – NỮ – QUARTZ (PIN) – MẶT SỐ 28MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/158-t103-310-36-111-01-2-699x699.png?v=1687062170310"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/158-t103-310-36-111-01-2-699x699.png?v=1687062170310"
                                        alt="TISSOT T103.310.36.111.01 – NỮ – QUARTZ (PIN) – MẶT SỐ 28MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <span className="smart">
                                      Giảm
                                      <br />
                                      10%
                                    </span>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
                                        alt="TISSOT"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91049075}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/tissot-t103-310-36-111-01-nu-quartz-pin-mat-so-28mm-kinh-sapphire-chong-nuoc-3atm"
                                        data-handle="tissot-t103-310-36-111-01-nu-quartz-pin-mat-so-28mm-kinh-sapphire-chong-nuoc-3atm"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views"
                                        data-wish="tissot-t103-310-36-111-01-nu-quartz-pin-mat-so-28mm-kinh-sapphire-chong-nuoc-3atm"
                                        tabIndex={0}
                                        title="Thêm vào yêu thích"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#ffffff"
                                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/tissot-t103-310-36-111-01-nu-quartz-pin-mat-so-28mm-kinh-sapphire-chong-nuoc-3atm"
                                        title="TISSOT T103.310.36.111.01 – NỮ – QUARTZ (PIN) – MẶT SỐ 28MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                      >
                                        TISSOT T103.310.36.111.01 – NỮ – QUARTZ
                                        (PIN) – MẶT SỐ 28MM, KÍNH SAPPHIRE,
                                        CHỐNG NƯỚC 3ATM
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      12.600.000₫
                                      <span className="compare-price">
                                        14.000.000₫
                                      </span>
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Tặng kèm gói bảo hành lên đến 5 năm
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="swiper-slide"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449453"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                      title="LONGINES LYRE L4.360.2.12.7 – NỮ – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/l4-360-2-12-7-699x699.png?v=1687062077460"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/l4-360-2-12-7-699x699.png?v=1687062077460"
                                        alt="LONGINES LYRE L4.360.2.12.7 – NỮ – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_14.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_14.jpg?1696125396195"
                                        alt="Longines"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91049037}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        data-handle="longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views"
                                        data-wish="longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        tabIndex={0}
                                        title="Thêm vào yêu thích"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#ffffff"
                                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Nổi bật"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Nổi bật
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        title="LONGINES LYRE L4.360.2.12.7 – NỮ – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                      >
                                        LONGINES LYRE L4.360.2.12.7 – NỮ –
                                        AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH
                                        SAPPHIRE, CHỐNG NƯỚC 3ATM
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      38.532.000₫{" "}
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Áp dụng chương trình giảm giá cho khách
                                      hàng là thành viên
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="swiper-slide"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449433"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                      title="G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN) – DÂY CAO SU"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/ga-1000-1adr-699x699.png?v=1687061856183"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/ga-1000-1adr-699x699.png?v=1687061856183"
                                        alt="G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN) – DÂY CAO SU"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_2.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_2.jpg?1696125396195"
                                        alt="G-Shock"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048990}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                        // fdprocessedid="wfeblb"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        data-handle="g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        title="G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN) – DÂY CAO SU"
                                      >
                                        G-SHOCK GA-1000-1ADR – NAM – QUARTZ
                                        (PIN) – DÂY CAO SU
                                      </a>
                                    </h3>
                                    <div className="price-box">8.576.000₫ </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Tặng kèm gói bảo hành lên đến 5 năm
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="swiper-slide"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449366"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/seiko-srz520p1-nu-quartz-pin-mat-so-29mm-kinh-cung-chong-nuoc-5atm"
                                      title="SEIKO SRZ520P1 – NỮ – QUARTZ (PIN) – MẶT SỐ 29MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/59-srz520p1-699x699.png?v=1687060768163"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/59-srz520p1-699x699.png?v=1687060768163"
                                        alt="SEIKO SRZ520P1 – NỮ – QUARTZ (PIN) – MẶT SỐ 29MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_6.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_6.jpg?1696125396195"
                                        alt="Seiko"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048622}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/seiko-srz520p1-nu-quartz-pin-mat-so-29mm-kinh-cung-chong-nuoc-5atm"
                                        data-handle="seiko-srz520p1-nu-quartz-pin-mat-so-29mm-kinh-cung-chong-nuoc-5atm"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="seiko-srz520p1-nu-quartz-pin-mat-so-29mm-kinh-cung-chong-nuoc-5atm"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/seiko-srz520p1-nu-quartz-pin-mat-so-29mm-kinh-cung-chong-nuoc-5atm"
                                        title="SEIKO SRZ520P1 – NỮ – QUARTZ (PIN) – MẶT SỐ 29MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
                                      >
                                        SEIKO SRZ520P1 – NỮ – QUARTZ (PIN) – MẶT
                                        SỐ 29MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM
                                      </a>
                                    </h3>
                                    <div className="price-box">6.840.000₫ </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Áp dụng chương trình giảm giá cho khách
                                      hàng là thành viên
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="swiper-slide"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449324"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
                                      title="FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/me3227-699x699.png?v=1687060277060"
                                        alt="FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
                                      />
                                    </a>
                                    <span className="smart">
                                      Giảm
                                      <br />
                                      8%
                                    </span>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_8.jpg?1696125396195"
                                        alt="Fossil"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048466}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
                                        data-handle="fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
                                        title="FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
                                      >
                                        FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ)
                                        – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM,
                                        KÍNH CỨNG, CHỐNG NƯỚC 5ATM
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      8.590.000₫
                                      <span className="compare-price">
                                        9.323.000₫
                                      </span>
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Áp dụng chương trình giảm giá cho khách
                                      hàng là thành viên
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="swiper-slide"
                              style={{ width: "207.2px", marginRight: 20 }}
                            >
                              <div className=" item_product_main">
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449294"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/casio-nu-quartz-pin-day-kim-loai-ltp-v001g-9budf"
                                      title="CASIO NỮ – QUARTZ (PIN) – DÂY KIM LOẠI (LTP-V001G-9BUDF)"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/ltp-v001g-9budf-699x699.png?v=1687060043403"
                                        alt="CASIO NỮ – QUARTZ (PIN) – DÂY KIM LOẠI (LTP-V001G-9BUDF)"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_1.jpg?1696125396195"
                                        alt="Casio"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048434}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/casio-nu-quartz-pin-day-kim-loai-ltp-v001g-9budf"
                                        data-handle="casio-nu-quartz-pin-day-kim-loai-ltp-v001g-9budf"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views"
                                        data-wish="casio-nu-quartz-pin-day-kim-loai-ltp-v001g-9budf"
                                        tabIndex={0}
                                        title="Thêm vào yêu thích"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#ffffff"
                                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/casio-nu-quartz-pin-day-kim-loai-ltp-v001g-9budf"
                                        title="CASIO NỮ – QUARTZ (PIN) – DÂY KIM LOẠI (LTP-V001G-9BUDF)"
                                      >
                                        CASIO NỮ – QUARTZ (PIN) – DÂY KIM LOẠI
                                        (LTP-V001G-9BUDF)
                                      </a>
                                    </h3>
                                    <div className="price-box">1.140.000₫ </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Miễn phí thay pin trọn đời cho tất cả
                                      khách hàng
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination" />
                        </div>
                      </div>
                    </div>
                    <div className="section-recenview-product productRelate block-background">
                      <div className="section_prd_feature swiper-container swiper_related recent-page-viewed">
                        <div className="group_title_index">
                          <h3 className="title">
                            <img
                              alt="title"
                              src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
                            />
                            <span className="title-name">Sản phẩm đã xem</span>
                          </h3>
                        </div>
                        <div className="sliderecenreview">
                          <div className="products product_related recent-viewed swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                            <div
                              className="swiper-wrapper"
                              style={{
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            >
                              <div
                                className="swiper-slide swiper-slide-active"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449453"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                      title="LONGINES LYRE L4.360.2.12.7 – NỮ – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/l4-360-2-12-7-699x699.png?v=1687062077460"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/l4-360-2-12-7-699x699.png?v=1687062077460"
                                        alt="LONGINES LYRE L4.360.2.12.7 – NỮ – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_14.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_14.jpg?1696125396195"
                                        alt="Longines"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91049037}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        data-handle="longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views"
                                        data-wish="longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        tabIndex={0}
                                        title="Thêm vào yêu thích"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#ffffff"
                                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Nổi bật"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Nổi bật
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/longines-lyre-l4-360-2-12-7-nu-automatic-tu-dong-mat-so-25mm-kinh-sapphire-chong-nuoc-3atm"
                                        title="LONGINES LYRE L4.360.2.12.7 – NỮ – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH SAPPHIRE, CHỐNG NƯỚC 3ATM"
                                      >
                                        LONGINES LYRE L4.360.2.12.7 – NỮ –
                                        AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 25MM, KÍNH
                                        SAPPHIRE, CHỐNG NƯỚC 3ATM
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      38.532.000₫{" "}
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Áp dụng chương trình giảm giá cho khách
                                      hàng là thành viên
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="swiper-slide swiper-slide-next"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449433"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                      title="G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN) – DÂY CAO SU"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/ga-1000-1adr-699x699.png?v=1687061856183"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/ga-1000-1adr-699x699.png?v=1687061856183"
                                        alt="G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN) – DÂY CAO SU"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_2.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_2.jpg?1696125396195"
                                        alt="G-Shock"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048990}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        data-handle="g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/g-shock-ga-1000-1adr-nam-quartz-pin-day-cao-su"
                                        title="G-SHOCK GA-1000-1ADR – NAM – QUARTZ (PIN) – DÂY CAO SU"
                                      >
                                        G-SHOCK GA-1000-1ADR – NAM – QUARTZ
                                        (PIN) – DÂY CAO SU
                                      </a>
                                    </h3>
                                    <div className="price-box">8.576.000₫ </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Tặng kèm gói bảo hành lên đến 5 năm
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="swiper-slide"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449140"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/orient-open-heart-ra-ar0001s10b-nam-automatic-mat-so-40-8-mm-tru-cot-40-gio-kinh-sapphire"
                                      title="ORIENT OPEN HEART RA-AR0001S10B – NAM – AUTOMATIC – MẶT SỐ 40.8 MM, TRỮ CÓT 40 GIỜ, KÍNH SAPPHIRE"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/36-ra-ar0001s10b-699x699.png?v=1687058243213"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/36-ra-ar0001s10b-699x699.png?v=1687058243213"
                                        alt="ORIENT OPEN HEART RA-AR0001S10B – NAM – AUTOMATIC – MẶT SỐ 40.8 MM, TRỮ CÓT 40 GIỜ, KÍNH SAPPHIRE"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_5.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_5.jpg?1696125396195"
                                        alt="Orient"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048158}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                        // fdprocessedid="polpdb"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/orient-open-heart-ra-ar0001s10b-nam-automatic-mat-so-40-8-mm-tru-cot-40-gio-kinh-sapphire"
                                        data-handle="orient-open-heart-ra-ar0001s10b-nam-automatic-mat-so-40-8-mm-tru-cot-40-gio-kinh-sapphire"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="orient-open-heart-ra-ar0001s10b-nam-automatic-mat-so-40-8-mm-tru-cot-40-gio-kinh-sapphire"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/orient-open-heart-ra-ar0001s10b-nam-automatic-mat-so-40-8-mm-tru-cot-40-gio-kinh-sapphire"
                                        title="ORIENT OPEN HEART RA-AR0001S10B – NAM – AUTOMATIC – MẶT SỐ 40.8 MM, TRỮ CÓT 40 GIỜ, KÍNH SAPPHIRE"
                                      >
                                        ORIENT OPEN HEART RA-AR0001S10B – NAM –
                                        AUTOMATIC – MẶT SỐ 40.8 MM, TRỮ CÓT 40
                                        GIỜ, KÍNH SAPPHIRE
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      11.760.000₫{" "}
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Áp dụng chương trình giảm giá cho khách
                                      hàng là thành viên
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="swiper-slide"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-32499353"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/demo-san-pham-co-thuoc-tinh"
                                      title="Demo sản phẩm có thuộc tính"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/fgw0100aw0-15775f27-e1be-421a-af5f-acd8ea138196.png?v=1694134890500"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/fgw0100aw0-15775f27-e1be-421a-af5f-acd8ea138196.png?v=1694134890500"
                                        alt="Demo sản phẩm có thuộc tính"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_5.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_5.jpg?1696125396195"
                                        alt="Orient"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={97465463}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views"
                                        title="Tùy chọn"
                                        type="button"
                                        // onclick="window.location.href='/demo-san-pham-co-thuoc-tinh'"
                                      >
                                        Tùy chọn
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/demo-san-pham-co-thuoc-tinh"
                                        data-handle="demo-san-pham-co-thuoc-tinh"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views"
                                        data-wish="demo-san-pham-co-thuoc-tinh"
                                        tabIndex={0}
                                        title="Thêm vào yêu thích"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#ffffff"
                                            d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/demo-san-pham-co-thuoc-tinh"
                                        title="Demo sản phẩm có thuộc tính"
                                      >
                                        Demo sản phẩm có thuộc tính
                                      </a>
                                    </h3>
                                    <div className="price-box">4.160.000₫ </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Miễn phí thay pin trọn đời cho tất cả
                                      khách hàng
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="swiper-slide"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449180"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                                      title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1 loaded"
                                        src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
                                        alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                        data-was-processed="true"
                                      />
                                    </a>
                                    <span className="smart">
                                      Giảm
                                      <br />
                                      20%
                                    </span>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload loaded"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
                                        alt="TISSOT"
                                        data-was-processed="true"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048217}
                                    />
                                    <div className="action">
                                      <a
                                        title="Xem nhanh"
                                        href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                                        data-handle="tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Mới
                                      </span>
                                      <span>
                                        <img
                                          alt="Bán chạy"
                                          width={60}
                                          height={60}
                                          className="lazyload loaded"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
                                          data-was-processed="true"
                                        />{" "}
                                        Bán chạy
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                                        title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                                      >
                                        TISSOT TRADITION T063.617.36.037.00 –
                                        NAM – QUARTZ (PIN) – MẶT SỐ 42 MM,
                                        CHRONOGRAPH, KÍNH SAPPHIRE
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      14.700.000₫
                                      <span className="compare-price">
                                        18.300.000₫
                                      </span>
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Miễn phí thay pin trọn đời cho tất cả
                                      khách hàng
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="swiper-slide"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449269"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/seiko-5-field-sports-style-srpg33k1-nam-automatic-tu-dong-mat-so-39-4mm-chong-nuoc-10atm-bo-may-in-house"
                                      title="SEIKO 5 FIELD SPORTS STYLE SRPG33K1 – NAM – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 39.4MM, CHỐNG NƯỚC 10ATM, BỘ MÁY IN-HOUSE"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/srpg33k1-699x699.png?v=1687059618537"
                                        alt="SEIKO 5 FIELD SPORTS STYLE SRPG33K1 – NAM – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 39.4MM, CHỐNG NƯỚC 10ATM, BỘ MÁY IN-HOUSE"
                                      />
                                    </a>
                                    <span className="smart">
                                      Giảm
                                      <br />
                                      14%
                                    </span>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_6.jpg?1696125396195"
                                        alt="Seiko"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048378}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/seiko-5-field-sports-style-srpg33k1-nam-automatic-tu-dong-mat-so-39-4mm-chong-nuoc-10atm-bo-may-in-house"
                                        data-handle="seiko-5-field-sports-style-srpg33k1-nam-automatic-tu-dong-mat-so-39-4mm-chong-nuoc-10atm-bo-may-in-house"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="seiko-5-field-sports-style-srpg33k1-nam-automatic-tu-dong-mat-so-39-4mm-chong-nuoc-10atm-bo-may-in-house"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Nổi bật"
                                          width={60}
                                          height={60}
                                          className="lazyload"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_tag.png?1696125396195"
                                        />{" "}
                                        Nổi bật
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/seiko-5-field-sports-style-srpg33k1-nam-automatic-tu-dong-mat-so-39-4mm-chong-nuoc-10atm-bo-may-in-house"
                                        title="SEIKO 5 FIELD SPORTS STYLE SRPG33K1 – NAM – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 39.4MM, CHỐNG NƯỚC 10ATM, BỘ MÁY IN-HOUSE"
                                      >
                                        SEIKO 5 FIELD SPORTS STYLE SRPG33K1 –
                                        NAM – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ
                                        39.4MM, CHỐNG NƯỚC 10ATM, BỘ MÁY
                                        IN-HOUSE
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      7.090.000₫
                                      <span className="compare-price">
                                        8.200.000₫
                                      </span>
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Áp dụng chương trình giảm giá cho khách
                                      hàng là thành viên
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="swiper-slide"
                                style={{ width: "206.4px", marginRight: 20 }}
                              >
                                <form
                                  action="/cart/add"
                                  method="post"
                                  className="variants product-action"
                                  data-cart-form=""
                                  data-id="product-actions-31449151"
                                  encType="multipart/form-data"
                                >
                                  <div className="product-thumbnail">
                                    <a
                                      className="image_thumb scale_hover"
                                      href="/casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                                      title="CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM"
                                    >
                                      <img
                                        width={234}
                                        height={234}
                                        className="lazyload image1"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/68-efv-550l-1avudf-1-699x699.png?v=1687058396797"
                                        alt="CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM"
                                      />
                                    </a>
                                    <span className="smart">
                                      Giảm
                                      <br />
                                      14%
                                    </span>
                                    <div className="vendoritem">
                                      <img
                                        width={60}
                                        height={60}
                                        className="lazyload"
                                        src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                        data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_1.jpg?1696125396195"
                                        alt="Casio"
                                      />
                                    </div>
                                    <input
                                      className="hidden"
                                      type="hidden"
                                      name="variantId"
                                      defaultValue={91048169}
                                    />
                                    <div className="action">
                                      <button
                                        className="btn-cart btn-views add_to_cart "
                                        title="Mua ngay"
                                      >
                                        Mua ngay
                                      </button>
                                      <a
                                        title="Xem nhanh"
                                        href="/casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                                        data-handle="casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                                        className="quick-view btn-views"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 512 512"
                                        >
                                          <path
                                            fill="#fff"
                                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                          />
                                        </svg>
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="setWishlist btn-wishlist btn-views active"
                                        data-wish="casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                                        tabIndex={0}
                                        title="Bỏ yêu thích"
                                      >
                                        <svg className="icon">
                                          {" "}
                                          <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#icon-wishlist-active"
                                          />{" "}
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="tag-km">
                                      <span>
                                        <img
                                          alt="Mới"
                                          width={60}
                                          height={60}
                                          className="lazyload"
                                          src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                                          data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
                                        />{" "}
                                        Mới
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <h3 className="product-name">
                                      <a
                                        className="line-clamp line-clamp-2"
                                        href="/casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                                        title="CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM"
                                      >
                                        CASIO EFV-550L-1AVUDF – NAM – QUARTZ
                                        (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG
                                        NƯỚC 10ATM
                                      </a>
                                    </h3>
                                    <div className="price-box">
                                      3.529.000₫
                                      <span className="compare-price">
                                        4.100.000₫
                                      </span>
                                    </div>
                                    <div className="pro-promo line-clamp line-clamp-2">
                                      Tặng kèm gói bảo hành lên đến 5 năm
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="swiper-pagination" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct