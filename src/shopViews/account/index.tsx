const Account = ()=>{
    return(
        <>
        <section className="signup page_customer_account">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
        <div className="block-account">
          <h5 className="title-account">Trang tài khoản</h5>
          <p>
            Xin chào, <span style={{ color: "#ef4339" }}>Nguyen Van Nam</span>
            &nbsp;!
          </p>
          <ul>
            <li>
              <a
                // disabled="disabled"
                className="title-info active"
                href="javascript:void(0);"
              >
                Thông tin tài khoản
              </a>
            </li>
            <li>
              <a className="title-info" href="/account/orders">
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
      <div className="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
        <h1 className="title-head margin-top-0">Thông tin tài khoản</h1>
        <div className="form-signup name-account m992">
          <p>
            <strong>Họ tên:</strong>{" "}<input value={"Nguyen Van Nam"}/>
          </p>
          <p>
            {" "}
            <strong>Email:</strong>{" "}  <input value={"nguyenvannam@gmail.com"}/>
          </p>
          <p>
            {" "}
            <strong>Điện thoại:</strong> {" "}<input value={"+84389993293"}/>
          </p>
          <p>
            <strong>Địa chỉ :</strong>{" "}  <input value={"Thị xã Sơn Tây, Vietnam"}/>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default Account