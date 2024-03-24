import PhoneInput from "react-phone-input-2";
import "./index.css";
import { useState } from "react";
import data from "/tree.json";

const Address = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [provinces] = useState(Object.values(data)); // Lấy danh sách tỉnh/thành phố từ file JSON

  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [address, setAddress] = useState(["", "", ""]);
  const [isDefault, setIsDefault] = useState(false);
  const [otherAddress, setOtherAddress] = useState("");
  const [userName, setUserName] = useState("");

  const [isPopup, setIsPopup] = useState(false);

  const handleAddAndEditAddress = () => {
    try {
      console.log(
        phoneNumber,
        selectedProvince,
        selectedDistrict,
        selectedWard,
        address,
        isDefault,
        otherAddress
      );
    } catch (error) {}
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    const selectedProvince = provinces.find(
      (province) => province.code === provinceId
    );
    const provinceDistricts = Object.values(selectedProvince["quan-huyen"]);
    setDistricts(provinceDistricts);
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
    setSelectedWard("");
    setWards([]);
    setAddress((val) => {
      val[2] = selectedProvince?.name_with_type;
      val[1] = "";
      val[0] = "";
      return val;
    });
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    const selectedDistrict = districts.find(
      (district) => district.code === districtId
    );
    const districtWards = Object.values(selectedDistrict["xa-phuong"]);
    setWards(districtWards);
    setSelectedDistrict(districtId);
    setSelectedWard("");
    setAddress((val) => {
      val[1] = selectedDistrict?.name_with_type;
      val[0] = "";
      return val;
    });
  };

  const handleWardChange = (e) => {
    const wardId = e.target.value;
    setSelectedWard(wardId);
    const selectedWard = wards.find((ward) => ward.code === wardId);
    setAddress((val) => {
      val[0] = selectedWard?.name_with_type;
      return val;
    });
  };

  const handleOnChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleRenderItem = () => {
    let a = [1, 2, 3];
    return a.map((i) => {
      return (
        <div
          id="view_address_25804102"
          className="customer_address col-xs-12 col-lg-12 col-md-12 col-xl-12"
        >
          <div
            className="address_info"
            style={{
              borderTop: "1px #ebebeb solid",
              paddingTop: 16,
              marginTop: 20,
            }}
          >
            <div className="address-group">
              <div className="address form-signup">
                <p>
                  <strong>Họ tên: </strong>Đặng Ngọc Cường
                  <span className="address-default">
                    <i className="far fa-check-circle" />
                    Địa chỉ mặc định
                  </span>
                </p>
                <p>
                  <strong>Địa chỉ: </strong>
                  hà nội, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội, Vietnam
                </p>
                <p>
                  <strong>Số điện thoại:</strong> 0388842605
                </p>
                <p>
                  <strong>Công ty:</strong> kinh doanh cong nghe ha noi
                </p>
              </div>
            </div>
            <div id="tool_address_25804102" className="btn-address">
              <p className="btn-row">
                <button
                  className="btn-edit-addr btn btn-primary btn-edit"
                  type="button"
                  onClick={() => setIsPopup(true)}
                >
                  Chỉnh sửa địa chỉ
                </button>
                <button
                  className="btn btn-dark-address btn-edit-addr btn-delete"
                  type="button"
                >
                  <span>Xóa</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="address">
        <div className="container page_address margin-bottom-20">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-lg-3 col-left-ac">
              <div className="block-account">
                <h5 className="title-account">Trang tài khoản</h5>
                <p>
                  Xin chào,{" "}
                  <span style={{ color: "#ef4339" }}>Nguyen Van Nam</span>
                  &nbsp;!
                </p>
                <ul>
                  <li>
                    <a className="title-info" href="/account">
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
                  {/* <li>
                    <a
                      // disabled="disabled"
                      className="title-info active"
                      href="javascript:void(0);"
                    >
                      Sổ địa chỉ (2)
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <h1 className="title-head">Địa chỉ của bạn</h1>
              <p className="btn-row">
                <button
                  className="btn-edit-addr btn btn-primary btn-more"
                  type="button"
                  onClick={() => setIsPopup(true)}
                >
                  Thêm địa chỉ
                </button>
              </p>
              {isPopup && (
                <>
                  <div
                    className="backdrop__body-backdrop___1rvky active"
                    onClick={() => setIsPopup(false)}
                  />

                  <div
                    id="add_address"
                    className="form-list modal_address modal"
                    style={{ height: 545, display: "block" }}
                  >
                    <div
                      className="btn-close closed_pop"
                      onClick={() => setIsPopup(false)}
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="times"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="svg-inline--fa fa-times fa-w-10"
                      >
                        <path
                          fill="currentColor"
                          d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                          className=""
                        />
                      </svg>
                    </div>
                    <h2 className="title_pop">Thêm địa chỉ mới</h2>
                    <div
                      method="post"
                      action="/account/addresses"
                      id="customer_address"
                      acceptCharset="UTF-8"
                    >
                      <input
                        name="FormType"
                        type="hidden"
                        defaultValue="customer_address"
                      />
                      <input name="utf8" type="hidden" defaultValue="true" />
                      <div className="pop_bottom">
                        <div className="form_address">
                          <div
                            className="field  field--show-floating-label"
                            data-bind-class="{'field--show-floating-label': billing.name}"
                          >
                            <div className="field__input-wrapper">
                              <label
                                htmlFor="billingName"
                                className="field__label"
                              >
                                Họ và tên
                              </label>
                              <input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="field__input"
                              />
                            </div>
                          </div>
                          <div
                            className="field  field--show-floating-label"
                            data-bind-class="{'field--show-floating-label': billing.phone}"
                          >
                            <div
                              className="field__input-wrapper field__input-wrapper--connected"
                              data-define="{phoneInput: new InputPhone(this)}"
                            >
                              <label
                                htmlFor="billingPhone"
                                className="field__label"
                              >
                                Số điện thoại (tùy chọn)
                              </label>
                              <PhoneInput
                                country={"vn"}
                                value={phoneNumber}
                                onChange={(value) => handleOnChange(value)}
                              />
                            </div>
                          </div>
                          <div
                            className="field "
                            data-bind-class="{'field--show-floating-label': billing.address}"
                          >
                            <div className="field__input-wrapper">
                              <label
                                htmlFor="billingAddress"
                                className="field__label"
                              >
                                Địa chỉ (tùy chọn)
                              </label>
                              <input
                                value={otherAddress}
                                className="field__input"
                                onChange={(e) =>
                                  setOtherAddress(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="field field--show-floating-label ">
                            <div className="field__input-wrapper field__input-wrapper--select2">
                              <label
                                htmlFor="billingProvince"
                                className="field__label"
                              >
                                Tỉnh thành
                              </label>
                              <select
                                name="billingProvince"
                                id="billingProvince"
                                size={1}
                                className="field__input field__input--select select2-hidden-accessible"
                                data-bind="billing.province"
                                data-address-type="province"
                                data-address-zone="billing"
                                data-select2-id="select2-data-billingProvince"
                                tabIndex={-1}
                                aria-hidden="true"
                                onChange={handleProvinceChange}
                                value={selectedProvince}
                              >
                                <option value="" hidden="">
                                  ---
                                </option>
                                {provinces.map((province) => (
                                  <option
                                    key={province.code}
                                    value={province.code}
                                  >
                                    {province.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="field field--show-floating-label ">
                            <div className="field__input-wrapper field__input-wrapper--select2">
                              <label
                                htmlFor="billingDistrict"
                                className="field__label"
                              >
                                Quận huyện (tùy chọn)
                              </label>
                              <select
                                name="billingDistrict"
                                id="billingDistrict"
                                size={1}
                                className="field__input field__input--select select2-hidden-accessible"
                                data-bind="billing.district"
                                data-address-type="district"
                                data-address-zone="billing"
                                data-select2-id="select2-data-billingDistrict"
                                tabIndex={-1}
                                aria-hidden="true"
                                onChange={handleDistrictChange}
                                value={selectedDistrict}
                              >
                                <option value="" hidden="">
                                  ---
                                </option>
                                {districts.map((district) => (
                                  <option
                                    key={district.code}
                                    value={district.code}
                                  >
                                    {district.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="field field--show-floating-label ">
                            <div className="field__input-wrapper field__input-wrapper--select2">
                              <label
                                htmlFor="billingWard"
                                className="field__label"
                              >
                                Phường xã (tùy chọn)
                              </label>
                              <select
                                name="billingWard"
                                id="billingWard"
                                size={1}
                                className="field__input field__input--select select2-hidden-accessible"
                                data-bind="billing.ward"
                                data-address-type="ward"
                                data-address-zone="billing"
                                data-select2-id="select2-data-billingWard"
                                tabIndex={-1}
                                aria-hidden="true"
                                value={selectedWard}
                                onChange={handleWardChange}
                              >
                                <option value="" hidden="">
                                  ---
                                </option>
                                {wards.map((ward) => (
                                  <option key={ward.code} value={ward.code}>
                                    {ward.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="checkbox">
                          <label
                            className="c-input c-checkbox"
                            style={{ paddingLeft: 20 }}
                          >
                            <input
                              type="checkbox"
                              id="address_default_address_"
                              name="IsDefault"
                              checked={isDefault}
                              onChange={(e) => setIsDefault(e.target.checked)}
                            />
                            <span className="c-indicator">
                              Đặt là địa chỉ mặc định?
                            </span>
                          </label>
                        </div>
                        <div className="btn-row">
                          <button
                            className="btn btn-lg btn-dark-address btn-outline article-readmore btn-close"
                            type="button"
                          >
                            <span>Hủy</span>
                          </button>
                          <button
                            style={{ left: "10px" }}
                            className="btn btn-lg btn-primary btn-submit"
                            onClick={() => handleAddAndEditAddress()}
                          >
                            <span>Thêm địa chỉ</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="row total_address">{handleRenderItem()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
