import { useParams } from "react-router-dom";
import { useInvoiceApi } from "/@/apis";
import { useEffect, useState } from "react";
import { IInvoice } from "/@/apis/invoiceApi/types";
import { formattedNumber } from "/@/utils/stringUtil";
import { statusPayment } from "/@/utils";
import dayjs from "dayjs";
const DetailOrder = () => {
  const { id } = useParams() as { id: string };
  const { invoiceApi } = useInvoiceApi();
  const [order, setOrder] = useState<IInvoice>()
  const handleDetailOrder = async () => {
    try {
      const res = await invoiceApi.getById(id);
      setOrder(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    handleDetailOrder();
  }, []);
  const handleReturn = ()=>{
    switch (order?.statusPayment) {
      case statusPayment.cash:
        return "Thanh toán khi giao hàng (COD)"
        case statusPayment.paid:
          return "Đã thanh toán (Banking)"
          case statusPayment.unpaid:
        return "Chưa thanh toán (Banking)"
      default:
        return "Thanh toán khi giao hàng (COD)";
    }
  }

  return (
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
                    Nguyen Van Nam
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
                  {/* <li>
                    <a className="title-info" href="/account/addresses">
                      Sổ địa chỉ (1)
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-9">
              <div className="head-title clearfix">
                <h1>Chi tiết đơn hàng #{order?._id}</h1>
                <span className="note order_date">Ngày tạo: {order && dayjs(order?.createdAt).format('YYYY-MM-DD')}</span>
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
                    textTransform: "uppercase",
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
                        <strong>{order?.userName}</strong>
                      </p>
                      <p>Địa chỉ:{order?.address}</p>
                      <p>Số điện thoại: {order?.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 body_order">
                  <div className="box-address">
                    <h2 className="title-head">Thanh toán</h2>
                    <div className="box-des">
                      <p>{
                        handleReturn()
                        }</p>
                       
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 body_order">
                  <div className="box-address">
                    <h2 className="title-head">Ghi chú</h2>
                    <div className="box-des">
                      <p>{order?.note}</p>
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
                          {order?.items.map((val,index)=>{
                            return (
                              <>
                              <tr key={index}>
                            <td className="link" data-title="Tên">
                              <div className="image_order">
                                <a
                                  title="CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ 47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM"
                                  href="/casio-efv-550l-1avudf-nam-quartz-pin-mat-so-47mm-kinh-cung-chong-nuoc-10atm"
                                >
                                  <img
                                    src={val.productDetails.images[0]}
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="content_right">
                                <a
                                  className="title_order"
                                  title={val.productDetails.name}
                                >
                                 {val.productDetails.name} – {val.productDetails.gioiTinh} – {val.productDetails.may} –
                                 {val.productDetails.mauMatSo}, {val.productDetails.kinh}, {val.productDetails.chongNuoc}
                                </a>
                                <div className="bottom_mb">
                                  <div className="quantity_mb">x1</div>
                                  <div className="sum_mb">{val.productDetails.discountedPrice}₫</div>
                                </div>
                              </div>
                            </td>
                            <td data-title="Giá" className="numeric">
                            {formattedNumber(val.productDetails.discountedPrice)}₫
                            </td>
                            <td data-title="Số lượng" className="numeric">
                            {val.quantity}
                            </td>
                            <td data-title="Tổng" className="numeric">
                            {formattedNumber(val.productDetails.discountedPrice * val.quantity)}₫
                            </td>
                          </tr>
                              </>
                            )
                          })}
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
                          <td>Phí vận chuyển</td>
                          <td className="total money right">
                            40.000₫ (Giao hàng tận nơi)
                          </td>
                        </tr>
                        <tr className="order_summary order_total">
                          <td>Tổng tiền</td>
                          <td className="right">
                            <strong style={{ color: "#CA170E", fontSize: 19 }}>
                              {order && formattedNumber(order?.totalAmount + 40000)}₫
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
  );
};

export default DetailOrder;
