import { useEffect, useState } from "react"
import { useInvoiceApi } from "/@/apis"
import { IInvoice } from "/@/apis/invoiceApi/types"
import { useUserApi } from "/@/apis";
import { formattedNumber } from "/@/utils/stringUtil"
import dayjs from "dayjs"


const Order = ()=>{
  const [listOrder , setListOrder] = useState<IInvoice[]>([])
  const {invoiceApi} = useInvoiceApi()
  const [name, setName] = useState<string>();
  const { userApi } = useUserApi();
  const handleGetOrder = async ()=>{
    try {
      const order = await invoiceApi.getAll() 
      setListOrder(order.data.items as IInvoice[])
    } catch (error) {
      
    }
  }
  const HandleGetUser = async () => {
    try {
      const res = await userApi.getCurrentUser();
      setName(res.data.username);
      
    } catch (error) {}
  };
  
  useEffect(()=>{
    handleGetOrder()
    HandleGetUser()
  },[])


    return(
        <>
        <section className="signup page_customer_account">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-12 col-left-ac">
        <div className="block-account">
          <h5 className="title-account">Trang tài khoản</h5>
          <p>
            Xin chào, <span style={{ color: "#000000" }}>{name}</span>
            &nbsp;!
          </p>
          <ul>
            <li>
              <a  className="title-info" href="/account">
                Thông tin tài khoản
              </a>
            </li>
            <li>
              <a
              
                className="title-info active"
                href="javascript:void(0);"
              >
               
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
      <div className="col-lg-9 col-12 col-right-ac">
        <h1 className="title-head margin-top-0">Đơn hàng của bạn</h1>
        <div className="my-account">
          <div className="dashboard">
            <div className="recent-orders">
              <div
                className="table-responsive-block tab-all"
                style={{ overflowX: "auto" }}
              >
                <table
                  className="table table-cart table-order"
                  id="my-orders-table"
                >
                  <thead className="thead-default">
                    <tr>
                      <th>Đơn hàng</th>
                      <th>Ngày</th>
                      <th>Địa chỉ</th>
                      <th>Giá trị đơn hàng</th>
                      <th>TT thanh toán</th>
                      <th>TT vận chuyển</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOrder && (
                      listOrder.map((item, index) => {
                        return (
                          <tr className="first odd" key={index}>
                          <td>
                            <a href={`/account/orders/${item._id}`} title="">
                              {item._id}
                            </a>
                          </td>
                          <td>{dayjs(item?.createdAt).format('DD-MM-YYYY')}</td>
                          <td>{item.address}</td>
                          <td>
                            <span className="price">{formattedNumber(item.totalAmount)}₫</span>
                          </td>
                          <td>
                            <b
                              className="span_pending"
                              style={{ color: "#E49C06", fontWeight: 600 }}
                            >
                              {item.statusPayment}
                            </b>
                          </td>
                          <td>
                            <span className="span_">{item.statusInvoice}</span>
                          </td>
                        </tr>
                        )
                      })
                    )}

                  </tbody>
                </table>
              </div>
              <div className="paginate-pages pull-right page-account text-right col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
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

export default Order