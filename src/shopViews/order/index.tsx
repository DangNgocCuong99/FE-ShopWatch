const Order = ()=>{
    return(
        <>
        <section className="signup page_customer_account">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-12 col-left-ac">
        <div className="block-account">
          <h5 className="title-account">Trang tài khoản</h5>
          <p>
            Xin chào, <span style={{ color: "#000000" }}>dang ngoc cuong</span>
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
                    <tr className="first odd">
                      <td>
                        <a href="/account/orders/12519662" title="">
                          #1006
                        </a>
                      </td>
                      <td>02/11/2023</td>
                      <td>Thị xã Sơn Tây, Hà Nội, Vietnam {/* Hà Nội */}</td>
                      <td>
                        <span className="price">37.607.000₫</span>
                      </td>
                      <td>
                        <b
                          className="span_pending"
                          style={{ color: "#E49C06", fontWeight: 600 }}
                        >
                          Chưa thanh toán
                        </b>
                      </td>
                      <td>
                        <span className="span_">Chưa chuyển</span>
                      </td>
                    </tr>
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