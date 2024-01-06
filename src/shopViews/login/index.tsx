
import { useState } from 'react'
import './index.css'
import { useAuthApi } from '/@/apis'
import { LoginSocialFacebook ,IResolveParams,LoginSocialGoogle} from 'reactjs-social-login';
import { FacebookLoginButton , GoogleLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
  const navigation = useNavigate();
  const {AuthApi} = useAuthApi()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLogin = async()=>{
    try {
    if(!email|| !password) return
      const res = await AuthApi.login({email:email, password:password})
      alert(res.message)
      if (!res.status) return
        localStorage.setItem('token', res.data)
        navigation('/')
    } catch (error) {
      
    }
  }


    return (
        <>
        <section className="section">
  <div className="container">
    <div className="wrap_background_aside page_login">
      <div className="row">
        <div
          style={{ margin: "auto" }}
          className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 "
        >
          <div
            className="row no-margin align-items-center"
            style={{ background: "#fff", borderRadius: 5 }}
          >
            <div className="page-login pagecustome clearfix no-padding">
              <div className="wpx">
                <ul className="auth-block__menu-list">
                  <li className="active">
                    <a href="#" title="Đăng nhập">
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a title="Đăng ký" onClick={()=>navigation("/account/register")}>
                      Đăng ký
                    </a>
                  </li>
                </ul>
                <h1 className="title_heads a-center">
                  <span>Đăng nhập</span>
                </h1>
                <div id="login" className="section">
                  {/* <form
                    // method="post"
                    // action="/account/login"
                    // id="customer_login"
                    acceptCharset="UTF-8"
                  > */}
                    <input
                      name="FormType"
                      type="hidden"
                      defaultValue="customer_login"
                    />
                    <input name="utf8" type="hidden" defaultValue="true" />
                    <span
                      className="form-signup"
                      style={{ color: "red" }}
                    ></span>
                    <div className="form-signup clearfix">
                      <fieldset className="form-group">
                        <input
                          type="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                          className="form-control form-control-lg"
                          defaultValue=""
                          value={email}
                          name="email"
                          id="customer_email"
                          placeholder="Email"
                          required={true}
                          onChange={(e)=> setEmail(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          defaultValue=""
                          name="password"
                          id="customer_password"
                          placeholder="Mật khẩu"
                          required={true}
                          onChange={(e)=> setPassword(e.target.value)}
                          value={password}
                        />
                      </fieldset>
                      <div className="pull-xs-left">
                        <button
                            type="submit"
                            value="Đăng ký"
                            className="btn  btn-style btn_50"
                            onClick={()=>{handleLogin()}}
                          >
                            Đăng nhập
                          </button>
                        <span className="block a-center quenmk">
                          Quên mật khẩu
                        </span>
                      </div>
                    </div>
                  {/* </form> */}
                </div>
                <div className="h_recover" style={{ display: "none" }}>
                  <div id="recover-password" className="form-signup page-login">
                    <form
                      method="post"
                      action="/account/recover"
                      id="recover_customer_password"
                      acceptCharset="UTF-8"
                    >
                      <input
                        name="FormType"
                        type="hidden"
                        defaultValue="recover_customer_password"
                      />
                      <input name="utf8" type="hidden" defaultValue="true" />
                      <div
                        className="form-signup"
                        style={{ color: "red" }}
                      ></div>
                      <div className="form-signup clearfix">
                        <fieldset className="form-group">
                          <input
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                            className="form-control form-control-lg"
                            defaultValue=""
                            name="Email"
                            id="recover-email"
                            placeholder="Email"
                    
                          />
                        </fieldset>
                      </div>
                      <div className="action_bottom">
                        <input
                          className="btn btn-style btn_50"
                          style={{ marginTop: 0 }}
                          type="submit"
                          defaultValue="Lấy lại mật khẩu"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="block social-login--facebooks">
                  <p className="a-center">Hoặc đăng nhập bằng</p>
                  <LoginSocialFacebook
          appId={"875353224298460"}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          // redirect_uri={"/"}
          onResolve={({ provider, data }: IResolveParams) => {
            console.log("🚀 ~ file: facebook~ Login ~ data :", data )
            console.log("🚀 ~ file:facebook ~ Login ~ provider:", provider)
            // setProvider(provider);
            // setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
                <LoginSocialGoogle
                client_id='574042642259-d2d3rj2p08vbngv0ke7nlc5c6k32val1.apps.googleusercontent.com'
                onResolve={({ provider, data }: IResolveParams) => {
                  console.log("🚀 ~ file: google  data :", data )
                  console.log("🚀 ~ file: google ~ Login ~ provider:", provider)
                  // setProvider(provider);
                  // setProfile(data);
                }}
                onReject={err => {
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
</section>

        </>
    )
}

export default Login