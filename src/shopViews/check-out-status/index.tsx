import { useParams, useSearchParams } from "react-router-dom";
import "./index.scss";
import { useInvoiceApi } from "/@/apis";
import { useEffect, useState } from "react";
import { formattedNumber } from "/@/utils/stringUtil";
import { statusPayment } from "/@/utils";
import { message } from "antd";
import { IInvoice } from "/@/apis/invoiceApi/types";
const CheckOutStatus = () => {
  const { invoiceApi } = useInvoiceApi();
  const [searchParams] = useSearchParams();
  const [invoice, setInvoice] = useState<IInvoice>();
  const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
  const vnp_OrderInfo = searchParams.get("vnp_OrderInfo");
  const id = searchParams.get("id");
  const handleGetInvoice = async(id: string) => {
    try {
      console.log(vnp_ResponseCode);
      if(vnp_ResponseCode == "00"){
        message.info("thanh toan thanh cong");
      }else if (vnp_ResponseCode){
        message.error("thanh toan that bai")
      }
      
      const res = await invoiceApi.getById(id);
      setInvoice(res.data)
    } catch (error) {}
  };
  useEffect(() => {
    if (vnp_OrderInfo) {
      handleGetInvoice(vnp_OrderInfo);
    } else if(id){
      handleGetInvoice(id)
    }
  }, [vnp_OrderInfo,id]);

  const handleRenderItem = (listItem:any[]) => {
    return listItem.map((item:any, index:number) => {
      return (
        <tr className="product" key={index}>
          <td className="product__image">
            <div className="product-thumbnail-check-out">
              <div className="product-thumbnail__wrapper">
                <img
                  src={item.productDetails.images[0]}
                  alt=""
                  className="product-thumbnail__image"
                />
              </div>
              <span className="product-thumbnail__quantity unprintable">{item.quantity}</span>
            </div>
          </td>
          <th className="product__description">
            <span className="product__description__name">
            {item.productDetails.name}
            </span>
          </th>
          <td className="product__quantity printable-only">x {item.quantity}</td>
          <td className="product__price">{formattedNumber(item.quantity * item.productDetails.discountedPrice)}₫</td>
        </tr>
      );
    })
   
  };

  const handleTinhTong = (listItem:any[])=>{
    let price = 0
    for (let index = 0; index < listItem?.length; index++) {
      price += listItem[index].productDetails.discountedPrice * listItem[index].quantity       
    }
    return price
  }

  return (
   <>
      <div className="content" id="check-out-status">
    {invoice && (
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
                        className="svg-done"
                      >
                        <g fill="none" stroke="#8EC343" strokeWidth={2}>
                          <circle
                            cx={36}
                            cy={36}
                            r={35}
                            style={{
                              strokeDasharray: "240px, 240px",
                              strokeDashoffset: 480,
                            }}
                          />
                          <path
                            d="M17.417,37.778l9.93,9.909l25.444-25.393"
                            style={{
                              strokeDasharray: "50px, 50px",
                              strokeDashoffset: 0,
                            }}
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="thankyou-message-container">
                      <h2 className="section__title">Cảm ơn bạn đã đặt hàng</h2>
                      <p className="section__text">
                        Một email xác nhận đã được gửi tới
                        {invoice?.email}. <br />
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
                            <p>{invoice?.userName}</p>
                            <p>{invoice?.email}</p>
                            <p>{invoice?.phone}</p>
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
                            <p>{invoice?.statusPayment !== statusPayment.cash ? "Thanh toán qua Internet":"Thanh toán khi giao hàng (COD)"}</p>
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
                          onClick={() => window.print()}
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
                            {invoice && handleRenderItem(invoice.items)}
                          </tbody>
                        </table>
                      </div>
                      <div className="order-summary__section">
                        <table className="total-line-table">
                          <tbody className="total-line-table__tbody">
                            <tr className="total-line total-line--subtotal">
                              <th className="total-line__name">Tạm tính</th>
                              <td className="total-line__price">
                                {invoice && formattedNumber(handleTinhTong(invoice.items))}₫
                              </td>
                            </tr>
                            <tr className="total-line total-line--shipping-fee">
                              <th className="total-line__name">
                                Phí vận chuyển
                              </th>
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
                                {invoice && formattedNumber(handleTinhTong(invoice.items)+ 40000)}₫
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
    )}

    </div>
    </>
  );
};

export default CheckOutStatus;
