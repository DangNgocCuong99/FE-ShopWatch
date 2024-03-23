import { useNavigate } from "react-router-dom";
import { useAuthApi } from "/@/apis";
import { useState } from "react";
import "./index.scss";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {
  IResolveParams,
  LoginSocialFacebook,
  LoginSocialGoogle,
} from "reactjs-social-login";
import { Input, Modal } from "antd";
const Register = () => {
  const navigation = useNavigate();
  const { AuthApi } = useAuthApi();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [isPopup, setIsPopup] = useState(false);
  const [otp, setOtp] = useState<string>()
  const [phoneNumber, setPhoneNumber] = useState<string>()
  const handleRegister = async () => {
    try {
      if (!email || !password) return;
      const res = await AuthApi.register({ email, password, username ,phoneNumber});
      alert(res.message);
      if (!res.status) return
      setIsPopup(true)
    } catch (error) {}
  };

  const handleOk = async() => {
    try {
      const res = await AuthApi.otp({ email, password, otp });
      alert(res.message);
      if (res.status){
        localStorage.setItem('token', res.data)
        localStorage.setItem('role',"user")
        navigation("/");
      }
    } catch (error) {
      
    }
  };

  const handleCancel = () => {
    setIsPopup(false);
  };

  return (
    <div id="register-shop">
      {isPopup && (
        <Modal
        centered
          title="Notifications"
          open={isPopup}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
          Vui long kiem tra email va nhap OTP de hoan thanh kich hoat tai khoan
          <Input value={otp} onChange={(e)=>setOtp(e.target.value)}/>
          </p>
          
        </Modal>
      )}
      <section className="section">
        <div className="container ">
          <div className="wrap_background_aside  page_login">
            <div className="wrap_background_aside">
              <div className="row">
                <div
                  style={{ margin: "auto" }}
                  className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3"
                >
                  <div
                    className="row no-margin align-items-center"
                    style={{ background: "#fff", borderRadius: 5 }}
                  >
                    <div className=" page-login pagecustome clearfix no-padding">
                      <div className="wpx">
                        <ul className="auth-block__menu-list">
                          <li>
                            <a
                              onClick={() => navigation("/account/login")}
                              title="Đăng nhập"
                            >
                              Đăng nhập
                            </a>
                          </li>
                          <li className="active">
                            <a title="Đăng ký">Đăng ký</a>
                          </li>
                        </ul>
                        <h1 className="title_heads a-center">
                          <span>Đăng ký</span>
                        </h1>
                        <div id="login" className="section">
                          <input
                            name="FormType"
                            type="hidden"
                            defaultValue="customer_register"
                          />
                          <input
                            name="utf8"
                            type="hidden"
                            defaultValue="true"
                          />
                          <input
                            type="hidden"
                            id="Token-4a3ad09240574c5ebe8e84b3480085ff"
                            name="Token"
                            defaultValue="03AFcWeA6cmXrV3ZDe9AjZaFnV9miKQxU6HGqCyp1eQbkPDZ_1Q2UCyNVTF_UAZf7LgVSEpD38lfIp1ZE6Cuf0Iiwhmhjioa5MYX8v1wrp8fs5KzMVydM4Dt_Iw1u10MiAu7f52q8ONnYmjydv9sGVYJG7K6PsgD_7jtEx33z9ZtCISvUG6M-qaf8EP04_W_aZwpXoJbouhTauWsxi4eX93vIzak5SYvXr9SC7GZm20qbduqIlgtrJO5RbuRc9grlky3n_WVxP2xXq4oj0gm8iImUT7n5H4icYk2YBpMBHCIL3FVfT6JBZKY7Ih5g-9gLzXrREb48oublgZwTPWVRwM2GLS8EoqvqtADM68rqVgYTel6W7RB_66qUFFoa3rbcJyhRsbi3nzUCmx0SCPaaxU1flmg3x7Lz8xDHcaN0rEvFM7S0yON2HTf97sg2pki1IRLJqb3h3O0vZwyA0gCEQyjXAqeDBLlrZXIJ1vXgQUroM0dcrhRBQNTndFnzCXfqTWt7lFmdTeSeRyK_kvSVO1FzN8lAsEVHTL2tzcuKSdSsQUPYzBSe5a9KiScZSXwz03jpn4bW3IxRJDfDoCE7DaTXts-edgE-C1LXNwwA9awJb9h0ekAFEEjDpDpasHCXcT1st_1a-nsA8"
                          />
                          <div
                            className="form-signup "
                            style={{ color: "red" }}
                          ></div>
                          <div className="form-signup clearfix">
                            <div className="row">
                              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <fieldset className="form-group">
                                  <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    defaultValue=""
                                    name="firstName"
                                    id="firstName"
                                    placeholder="Họ Tên"
                                    value={username}
                                    onChange={(e) =>
                                      setUsername(e.target.value)
                                    }
                                  />
                                </fieldset>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <fieldset className="form-group">
                                  <input
                                    type="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                    className="form-control form-control-lg"
                                    defaultValue=""
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </fieldset>
                              </div>
                              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <fieldset className="form-group">
                                  <input
                                    placeholder="Số điện thoại"
                                    type="text"
                                    pattern="\d+"
                                    className="form-control form-control-comment form-control-lg"
                                    name="PhoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                      setPhoneNumber(e.target.value)
                                    }
                                  />
                                </fieldset>
                              </div>
                              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <fieldset className="form-group">
                                  <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    defaultValue=""
                                    name="password"
                                    id="password"
                                    placeholder="Mật khẩu"
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    value={password}
                                  />
                                </fieldset>
                              </div>
                            </div>
                            <div className="section">
                              <button
                                value="Đăng ký"
                                className="btn  btn-style btn_50"
                                onClick={handleRegister}
                              >
                                Đăng ký
                              </button>
                            </div>
                          </div>
                          <div className="block social-login--facebooks margin-top-15">
                            <p className="a-center">Hoặc đăng nhập bằng</p>
                            <LoginSocialFacebook
                              appId={"875353224298460"}
                              fieldsProfile={
                                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                              }
                              // redirect_uri={"/"}
                              onResolve={({
                                provider,
                                data,
                              }: IResolveParams) => {
                                console.log(
                                  "🚀 ~ file: facebook~ Login ~ data :",
                                  data
                                );
                                console.log(
                                  "🚀 ~ file:facebook ~ Login ~ provider:",
                                  provider
                                );
                                // setProvider(provider);
                                // setProfile(data);
                              }}
                              onReject={(err) => {
                                console.log(err);
                              }}
                            >
                              <FacebookLoginButton />
                            </LoginSocialFacebook>
                            <LoginSocialGoogle
                              client_id="574042642259-d2d3rj2p08vbngv0ke7nlc5c6k32val1.apps.googleusercontent.com"
                              onResolve={({
                                provider,
                                data,
                              }: IResolveParams) => {
                                console.log("🚀 ~ file: google  data :", data);
                                console.log(
                                  "🚀 ~ file: google ~ Login ~ provider:",
                                  provider
                                );
                                // setProvider(provider);
                                // setProfile(data);
                              }}
                              onReject={(err) => {
                                console.log(err);
                              }}
                            >
                              <GoogleLoginButton />
                            </LoginSocialGoogle>
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
export default Register;
