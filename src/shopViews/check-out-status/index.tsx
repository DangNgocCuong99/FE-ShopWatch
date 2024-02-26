import './index.css'
const CheckOutStatus = ()=>{
    return (
<div className="content">
  <form>
    <div className="wrap wrap--mobile-fluid">
      <main className="main main--nosidebar">
        <div className="main__content">
          <article className="row">
            <div className="col col--primary">
              <section className="section section--icon-heading">
                <div className="section__icon unprintable">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='svg-done'
                  >
                    <g fill="none" stroke="#8EC343" strokeWidth={2}>
                      <circle
                        cx={36}
                        cy={36}
                        r={35}
                        style={{
                          strokeDasharray: "240px, 240px",
                          strokeDashoffset: 480
                        }}
                      />
                      <path
                        d="M17.417,37.778l9.93,9.909l25.444-25.393"
                        style={{
                          strokeDasharray: "50px, 50px",
                          strokeDashoffset: 0
                        }}
                      />
                    </g>
                  </svg>
                </div>
                <div className="thankyou-message-container">
                  <h2 className="section__title">Cảm ơn bạn đã đặt hàng</h2>
                  <p className="section__text">
                    Một email xác nhận đã được gửi tới
                    dangngoccuong99@gmail.com. <br />
                    Xin vui lòng kiểm tra email của bạn
                  </p>
                </div>
              </section>
              <div className="">
              <section className="section">
                <div className="section__content section__content--bordered">
                  <div className="row">
                    <div className="col col--md-two">
                      <h2>Thông tin mua hàng</h2>
                      <p>dang cuong</p>
                      <p>dangngoccuong99@gmail.com</p>
                      <p>+84388842605</p>
                    </div>
                    <div className="col col--md-two">
                      <h2>Địa chỉ nhận hàng</h2>
                      <p>dang cuong</p>
                      <p>hà nội</p>
                      <p>Phường Phú Thịnh, Thị xã Sơn Tây, Hà Nội</p>
                      <p>+84388842605</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col--md-two">
                      <h2>Phương thức thanh toán</h2>
                      <p>Thanh toán khi giao hàng (COD)</p>
                    </div>
                    <div className="col col--md-two">
                      <h2>Phương thức vận chuyển</h2>
                      <p>Giao hàng tận nơi</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section unprintable">
                <div className="field__input-btn-wrapper field__input-btn-wrapper--floating">
                  <a href="/" className="btn btn--large">
                    Tiếp tục mua hàng
                  </a>
                  <span
                    className="text-icon-group text-icon-group--large icon-print"
                    onClick={()=>window.print()}
                  >
                    <i className="fa fa-print" />
                    <span>In </span>
                  </span>
                </div>
              </section>
            </div>
            </div>
            <div className="col col--secondary">
              <aside
                className="order-summary order-summary--bordered order-summary--is-collapsed"
                id="order-summary"
              >
                <div className="order-summary__header">
                  <div className="order-summary__title">
                    Đơn hàng #1009
                    <span className="unprintable">(15)</span>
                  </div>
                  <div className="order-summary__action hide-on-desktop unprintable">
                    <a
                      data-toggle="#order-summary"
                      data-toggle-class="order-summary--is-collapsed"
                      className="expandable"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </div>
                <div className="order-summary__sections">
                  <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                    <table className="product-table">
                      <tbody>
                        <tr className="product">
                          <td className="product__image">
                            <div className="product-thumbnail-check-out">
                              <div className="product-thumbnail__wrapper">
                                <img
                                  src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/59-srz520p1-699x699.png?v=1687060768163"
                                  alt=""
                                  className="product-thumbnail__image"
                                />
                              </div>
                              <span className="product-thumbnail__quantity unprintable">
                                3
                              </span>
                            </div>
                          </td>
                          <th className="product__description">
                            <span className="product__description__name">
                              SEIKO SRZ520P1 – NỮ – QUARTZ (PIN) – MẶT SỐ 29MM,
                              KÍNH CỨNG, CHỐNG NƯỚC 5ATM
                            </span>
                          </th>
                          <td className="product__quantity printable-only">
                            x 3
                          </td>
                          <td className="product__price">20.520.000₫</td>
                        </tr>
                        <tr className="product">
                          <td className="product__image">
                            <div className="product-thumbnail-check-out">
                              <div className="product-thumbnail__wrapper">
                                <img
                                  src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/me3228-699x699.png?v=1687060397727"
                                  alt=""
                                  className="product-thumbnail__image"
                                />
                              </div>
                              <span className="product-thumbnail__quantity unprintable">
                                3
                              </span>
                            </div>
                          </td>
                          <th className="product__description">
                            <span className="product__description__name">
                              FOSSIL HERITAGE ME3228 – UNISEX (NAM/NỮ) –
                              AUTOMATIC (CƠ) – MẶT SỐ 38MM, TRỮ CÓT 40 GIỜ,
                              CHỐNG NƯỚC 5ATM
                            </span>
                          </th>
                          <td className="product__quantity printable-only">
                            x 3
                          </td>
                          <td className="product__price">25.770.000₫</td>
                        </tr>
                        <tr className="product">
                          <td className="product__image">
                            <div className="product-thumbnail-check-out">
                              <div className="product-thumbnail__wrapper">
                                <img
                                  src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/36-ra-ar0001s10b-699x699.png?v=1687058243213"
                                  alt=""
                                  className="product-thumbnail__image"
                                />
                              </div>
                              <span className="product-thumbnail__quantity unprintable">
                                2
                              </span>
                            </div>
                          </td>
                          <th className="product__description">
                            <span className="product__description__name">
                              ORIENT OPEN HEART RA-AR0001S10B – NAM – AUTOMATIC
                              – MẶT SỐ 40.8 MM, TRỮ CÓT 40 GIỜ, KÍNH SAPPHIRE
                            </span>
                          </th>
                          <td className="product__quantity printable-only">
                            x 2
                          </td>
                          <td className="product__price">23.520.000₫</td>
                        </tr>
                        <tr className="product">
                          <td className="product__image">
                            <div className="product-thumbnail-check-out">
                              <div className="product-thumbnail__wrapper">
                                <img
                                  src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/6-d124rbkw-699x699.png?v=1687059353183"
                                  alt=""
                                  className="product-thumbnail__image"
                                />
                              </div>
                              <span className="product-thumbnail__quantity unprintable">
                                1
                              </span>
                            </div>
                          </td>
                          <th className="product__description">
                            <span className="product__description__name">
                              DOXA CALEX D124RBKW – NAM – KÍNH SAPPHIRE –
                              AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 41MM, TRỮ CÓT 41 GIỜ,
                              CHỐNG NƯỚC 3ATM
                            </span>
                          </th>
                          <td className="product__quantity printable-only">
                            x 1
                          </td>
                          <td className="product__price">33.010.000₫</td>
                        </tr>
                        <tr className="product">
                          <td className="product__image">
                            <div className="product-thumbnail-check-out">
                              <div className="product-thumbnail__wrapper">
                                <img
                                  src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/ltp-v001g-9budf-699x699.png?v=1687060043403"
                                  alt=""
                                  className="product-thumbnail__image"
                                />
                              </div>
                              <span className="product-thumbnail__quantity unprintable">
                                1
                              </span>
                            </div>
                          </td>
                          <th className="product__description">
                            <span className="product__description__name">
                              CASIO NỮ – QUARTZ (PIN) – DÂY KIM LOẠI
                              (LTP-V001G-9BUDF)
                            </span>
                          </th>
                          <td className="product__quantity printable-only">
                            x 1
                          </td>
                          <td className="product__price">1.140.000₫</td>
                        </tr>
                        <tr className="product">
                          <td className="product__image">
                            <div className="product-thumbnail-check-out">
                              <div className="product-thumbnail__wrapper">
                                <img
                                  src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/53-ga-2000-1a2dr-699x699.png?v=1687059536243"
                                  alt=""
                                  className="product-thumbnail__image"
                                />
                              </div>
                              <span className="product-thumbnail__quantity unprintable">
                                5
                              </span>
                            </div>
                          </td>
                          <th className="product__description">
                            <span className="product__description__name">
                              G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ
                              (PIN) – MẶT SỐ 51.2MM, BỘ BẤM GIỜ, CHỐNG NƯỚC
                              20ATM
                            </span>
                          </th>
                          <td className="product__quantity printable-only">
                            x 5
                          </td>
                          <td className="product__price">23.190.000₫</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="order-summary__section">
                    <table className="total-line-table">
                      <tbody className="total-line-table__tbody">
                        <tr className="total-line total-line--subtotal">
                          <th className="total-line__name">Tạm tính</th>
                          <td className="total-line__price">127.150.000₫</td>
                        </tr>
                        <tr className="total-line total-line--shipping-fee">
                          <th className="total-line__name">Phí vận chuyển</th>
                          <td className="total-line__price">40.000₫</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="order-summary__section">
                    <table className="total-line-table">
                      <tbody className="total-line-table__tbody">
                        <tr className="total-line payment-due">
                          <th className="total-line__name">
                            <span className="payment-due__label-total">
                              Tổng cộng
                            </span>
                          </th>
                          <td className="total-line__price">
                            <span className="payment-due__price">
                              127.190.000₫
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </aside>
            </div>
  
          </article>
        </div>
      </main>
    </div>
  </form>
</div>

    )
}

export default CheckOutStatus