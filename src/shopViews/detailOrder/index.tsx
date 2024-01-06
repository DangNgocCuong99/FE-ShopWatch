const DetailOrder = ()=>{
    return(
        <>
        <section className="login page_order">
  <div className="container">
    <div className="row">
      <div className="col-12 col-xl-3 col-left-ac">
        <div className="block-account">
          <h5 className="title-account">Trang tài khoản</h5>
          <p>
            Xin chào,{" "}
            <a href="javascript:;" style={{ color: "#000000" }}>
              dang ngoc cuong
            </a>
            &nbsp;!
          </p>
          <ul>
            <li>
              <a className="title-info" href="/account">
                Thông tin tài khoản
              </a>
            </li>
            <li>
              <a className="title-info active" href="/account/orders">
                Đơn hàng của bạn
              </a>
            </li>
            <li>
              <a className="title-info" href="/account/changepassword">
                Đổi mật khẩu
              </a>
            </li>
            <li>
              <a className="title-info" href="/account/addresses">
                Sổ địa chỉ (1)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-xl-9">
        <div className="head-title clearfix">
          <h1>Chi tiết đơn hàng #1006</h1>
          <span className="note order_date">Ngày tạo: 02/ 11/ 2023</span>
        </div>
        <div className="payment_status">
          <span className="note">Trạng thái thanh toán:</span>
          <b className="status_pending">
            <b
              className="span_pending"
              style={{ color: "#E49C06", fontWeight: 600 }}
            >
              Chưa thanh toán
            </b>
          </b>
        </div>
        <div className="shipping_status">
          <span className="note">Trạng thái vận chuyển:</span>
          <b style={{ color: "#212B25" }} className="span_">
            Chưa chuyển
          </b>
        </div>
        <div className="code_order order-stt">
          <span className="note">Mã vận đơn:</span>
          <a
            style={{
              color: "#FBBF22",
              fontWeight: "bold",
              textTransform: "uppercase"
            }}
            target="_blank"
            href=""
          />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 body_order">
            <div className="box-address">
              <h2 className="title-head">Địa chỉ giao hàng</h2>
              <div className="address box-des">
                <p>
                  {" "}
                  <strong>dang ngoc cuong</strong>
                </p>
                <p>Địa chỉ: , Thị xã Sơn Tây, Hà Nội</p>
                <p>Số điện thoại: +84389993293</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 body_order">
            <div className="box-address">
              <h2 className="title-head">Thanh toán</h2>
              <div className="box-des">
                <p>Thanh toán khi giao hàng (COD)</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 body_order">
            <div className="box-address">
              <h2 className="title-head">Ghi chú</h2>
              <div className="box-des">
                <p>Không có ghi chú</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="table-order">
              <div className="table-responsive-block table_mobile">
                <table id="order_details" className="table table-cart">
                  <thead className="thead-default theborder">
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="link" data-title="Tên">
                        <div className="image_order">
                          <a
                            title="CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM"
                            href="/casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                          >
                            <img
                              src="//bizweb.dktcdn.net/thumb/small/100/487/743/products/68-efv-550l-1avudf-1-699x699.png?v=1687058396797"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="content_right">
                          <a
                            className="title_order"
                            href="/casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                            title="CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM"
                          >
                            CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ
                            47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM
                          </a>
                          <div className="bottom_mb">
                            <div className="quantity_mb">x1</div>
                            <div className="sum_mb">3.529.000₫</div>
                          </div>
                        </div>
                      </td>
                      <td data-title="Giá" className="numeric">
                        3.529.000₫
                      </td>
                      <td data-title="Số lượng" className="numeric">
                        1
                      </td>
                      <td data-title="Tổng" className="numeric">
                        3.529.000₫
                      </td>
                    </tr>
                    <tr>
                      <td className="link" data-title="Tên">
                        <div className="image_order">
                          <a
                            title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                            href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                          >
                            <img
                              src="//bizweb.dktcdn.net/thumb/small/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="content_right">
                          <a
                            className="title_order"
                            href="/tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
                            title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                          >
                            TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ
                            (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE
                          </a>
                          <div className="bottom_mb">
                            <div className="quantity_mb">x2</div>
                            <div className="sum_mb">29.400.000₫</div>
                          </div>
                        </div>
                      </td>
                      <td data-title="Giá" className="numeric">
                        14.700.000₫
                      </td>
                      <td data-title="Số lượng" className="numeric">
                        2
                      </td>
                      <td data-title="Tổng" className="numeric">
                        29.400.000₫
                      </td>
                    </tr>
                    <tr>
                      <td className="link" data-title="Tên">
                        <div className="image_order">
                          <a
                            title="G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ (PIN) – MẶT SỐ 51.2MM, BỘ BẤM GIỜ, CHỐNG NƯỚC 20ATM"
                            href="/g-shock-ga-2000-1a2dr-nam-kinh-cung-quartz-pin-mat-so-51-2mm-bo-bam-gio-chong-nuoc-20atm"
                          >
                            <img
                              src="//bizweb.dktcdn.net/thumb/small/100/487/743/products/53-ga-2000-1a2dr-699x699.png?v=1687059536243"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="content_right">
                          <a
                            className="title_order"
                            href="/g-shock-ga-2000-1a2dr-nam-kinh-cung-quartz-pin-mat-so-51-2mm-bo-bam-gio-chong-nuoc-20atm"
                            title="G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ (PIN) – MẶT SỐ 51.2MM, BỘ BẤM GIỜ, CHỐNG NƯỚC 20ATM"
                          >
                            G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ
                            (PIN) – MẶT SỐ 51.2MM, BỘ BẤM GIỜ, CHỐNG NƯỚC 20ATM
                          </a>
                          <div className="bottom_mb">
                            <div className="quantity_mb">x1</div>
                            <div className="sum_mb">4.638.000₫</div>
                          </div>
                        </div>
                      </td>
                      <td data-title="Giá" className="numeric">
                        4.638.000₫
                      </td>
                      <td data-title="Số lượng" className="numeric">
                        1
                      </td>
                      <td data-title="Tổng" className="numeric">
                        4.638.000₫
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <table className="table totalorders">
                <tfoot>
                  <tr className="order_summary discount">
                    <td>Khuyến mại </td>
                    <td className="total money right">0₫</td>
                  </tr>
                  <tr className="order_summary ">
                    <td >Phí vận chuyển</td>
                    <td className="total money right">
                      40.000₫ (Giao hàng tận nơi)
                    </td>
                  </tr>
                  <tr className="order_summary order_total">
                    <td>Tổng tiền</td>
                    <td className="right">
                      <strong style={{ color: "#CA170E", fontSize: 19 }}>
                        37.607.000₫
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default DetailOrder