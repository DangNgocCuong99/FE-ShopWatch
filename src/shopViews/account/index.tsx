import { useEffect, useState } from "react";
import { useUserApi } from "/@/apis";
import { Button } from "antd";
const Account = () => {
  const [mode, setMode] = useState<string>();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();
  const { userApi } = useUserApi();
  const HandleGetUser = async () => {
    try {
      const res = await userApi.getCurrentUser();
      setName(res.data.username);
      setEmail(res.data.email);
      setPhone(res.data.phoneNumber);
      setAddress(res.data.address);
    } catch (error) {}
  };
  useEffect(() => {
    HandleGetUser();
  }, []);
  const HandleUpdate = async () => {
    try {
      await userApi.updateUser({username:name,email,phoneNumber:phone,address});
      HandleGetUser()
      setMode('view')
    } catch (error) {

    }
  }
  return (
    <>
      <section className="signup page_customer_account">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
              <div className="block-account">
                <h5 className="title-account">Trang tài khoản</h5>
                <p>
                  Xin chào, <span style={{ color: "#ef4339" }}>{name}</span>
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
                  
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-9 col-right-ac">
              <h1 className="title-head margin-top-0">Thông tin tài khoản</h1>

              {mode === "edit" ? (
                <button style={{ backgroundColor: "blue" }} onClick={() => {HandleUpdate()}}>
                  {" "}
                  luu
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    setMode("edit");
                  }}
                >
                  {" "}
                  Sua
                </button>
              )}
              <div className="form-signup name-account m992">
                <p>
                  <strong>Họ tên:</strong>{" "}
                  {mode === "edit" ? <input value={name} onChange={(e)=>setName(e.target.value)}/> : name}
                </p>
                <p>
                  {" "}
                  <strong>Email:</strong>{" "}
                  {mode === "edit" ? <input value={email} onChange={(e)=>setEmail(e.target.value)}/> : email}
                </p>
                <p>
                  {" "}
                  <strong>Điện thoại:</strong>{" "}
                  {mode === "edit" ? <input value={phone} onChange={(e)=>setPhone(e.target.value)}/> : phone}
                </p>
                <p>
                  <strong>Địa chỉ :</strong>{" "}
                  {mode === "edit" ? <input value={address} onChange={(e)=>setAddress(e.target.value)}/> : address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Account;
