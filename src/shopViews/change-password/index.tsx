const ChangePassword = ()=>{
    return (
        <>
        <section className="signup page_customer_account">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
        <div className="block-account">
          <h5 className="title-account">Trang tài khoản</h5>
          <p>
            Xin chào, <span style={{ color: "#000000" }}>Nguyen Van Nam</span>
            &nbsp;!
          </p>
          <ul>
            <li>
              <a  className="title-info" href="/account">
                Thông tin tài khoản
              </a>
            </li>
            <li>
              <a className="title-info" href="/account/orders">
                Đơn hàng của bạn
              </a>
            </li>
            <li>
              <a className="title-info active" href="javascript:void(0);">
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
      <div className="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
        <h1 className="title-head margin-top-0">Đổi mật khẩu</h1>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="page-login">
              <form
                method="post"
                action="/account/changepassword"
                id="change_customer_password"
                acceptCharset="UTF-8"
              >
                <input
                  name="FormType"
                  type="hidden"
                  defaultValue="change_customer_password"
                />
                <input name="utf8" type="hidden" defaultValue="true" />
                <p>
                  Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít
                  nhất 8 kí tự
                </p>
                <div className="form-signup clearfix">
                  <fieldset className="form-group">
                    <label htmlFor="oldPass">
                      Mật khẩu cũ <span className="error">*</span>
                    </label>
                    <input
                      type="password"
                      name="OldPassword"
                      id="OldPass"
                     
                      className="form-control form-control-lg"
                 
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="changePass">
                      Mật khẩu mới <span className="error">*</span>
                    </label>
                    <input
                      type="password"
                      name="Password"
                      id="changePass"
                    
                      className="form-control form-control-lg"
                
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="confirmPass">
                      Xác nhận lại mật khẩu <span className="error">*</span>
                    </label>
                    <input
                      type="password"
                      name="ConfirmPassword"
                      id="confirmPass"
              
                      className="form-control form-control-lg"
           
                    />
                  </fieldset>
                  <button
                    className="button btn-edit-addr btn btn-primary btn-more"
                    type="submit"
         
             
                  >
                    <i className="hoverButton" />
                    Đặt lại mật khẩu
                  </button>
                </div>
              </form>
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

export default ChangePassword