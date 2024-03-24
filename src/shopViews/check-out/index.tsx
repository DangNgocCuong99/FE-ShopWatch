import PhoneInput from "react-phone-input-2";
import "./index.css";
import { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useInvoiceApi, usePaymentApi, useUserApi } from "/@/apis";
import { statusInvoice, statusPayment } from "/@/utils";
import { useSelector } from "react-redux";
import { selectCart } from "/@/stores/cart/cartReduce";
import { formattedNumber } from "/@/utils/stringUtil";
import data from "/tree.json";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { invoiceApi } = useInvoiceApi();
  const cartStore = useSelector(selectCart);
  const { paymentApi } = usePaymentApi();
  const [infoCart, setInfoCart] = useState({ price: 0, quantity: 0 });

  const [provinces] = useState(Object.values(data)); // Lấy danh sách tỉnh/thành phố từ file JSON

  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [payments, setPayments] = useState("cod");
  const [selectAddress, setSelectAddress] = useState<"other" | "current">(
    "current"
  );
  const [codeVoucher, setCodeVoucher] = useState();
  const [notes, setNotes] = useState();
  const navigation = useNavigate();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [address, setAddress] = useState<string>();
  const { userApi } = useUserApi();
  const [discount, setDiscount] = useState<number>();

  const HandleGetUser = async () => {
    try {
      const res = await userApi.getCurrentUser();
      setName(res.data.username);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phoneNumber);
      setAddress(res.data.address);
    } catch (error) {}
  };

  useEffect(() => {
    HandleGetUser();
  }, []);

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
  };

  const handleWardChange = (e) => {
    const wardId = e.target.value;
    setSelectedWard(wardId);
  };

  const handleOnChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleCheckout = async () => {
    const phuong = wards.find((wards) => wards.code === selectedWard)?.name;
    const quan = districts.find(
      (district) => district.code === selectedDistrict
    )?.name;
    const tinh = provinces.find(
      (province) => province.code === selectedProvince
    )?.name;
    const finalAddress = selectAddress === "current" ? address : (phuong +","+ quan+","+ tinh)
    try {
      const res = await invoiceApi.createInvoice<any, any>({
        statusPayment:
          payments === "bank" ? statusPayment.unpaid : statusPayment.cash,
        statusInvoice: statusInvoice.todo,
        phone:phoneNumber,
        address: finalAddress,
        userName: name,
        transportFee:40000,
        discount:discount,
        email:email,
        note:notes,
      });

      if (payments === "bank") {
        const url = (await paymentApi.create({
          invoice: res.data._id,
        })) as string;
        window.location.href = url;
      } else {
        navigation(`/check-out-status/?id=${res.data._id}`);
      }
    } catch (error) {}
  };

  const handleRenderItem = () => {
    return cartStore.listProduct.map((product, key) => {
      return (
        <tr className="product" key={key}>
          <td className="product__image">
            <div className="product-thumbnail-check-out">
              <div className="product-thumbnail__wrapper" data-tg-static="">
                <img
                  src={product.images[0]}
                  alt=""
                  className="product-thumbnail__image"
                />
              </div>
              <span className="product-thumbnail__quantity">
                {product.quantity}
              </span>
            </div>
          </td>
          <th className="product__description">
            <span className="product__description__name">{product.name}</span>
          </th>
          <td className="product__price">
            {formattedNumber(product.discountedPrice * product.quantity)}₫
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    if (cartStore.listProduct?.length > 0) {
      handleTinhTong();
    }
  }, [cartStore]);

  const handleTinhTong = () => {
    let price = 0;
    let quantity = 0;
    for (let index = 0; index < cartStore.listProduct.length; index++) {
      price +=
        cartStore.listProduct[index].discountedPrice *
        cartStore.listProduct[index].quantity;
      quantity += cartStore.listProduct[index].quantity;
    }
    setInfoCart({ price: price, quantity: quantity });
  };

  return (
    <div data-tg-refresh="checkout" id="checkout" className="content">
      <div id="checkoutForm">
        <input type="hidden" name="_method" defaultValue="patch" />
        <div className="wrap">
          <main className="main">
            <div className="main__content">
              <article className="animate-floating-labels row">
                <div className="col col--two">
                  <section className="section">
                    <div className="section__header">
                      <div className="layout-flex">
                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                          <i className="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop" />
                          Thông tin nhận hàng
                        </h2>
                      </div>
                    </div>
                    <div className="section__content">
                      <div className="fieldset">
                        <div className="field field--show-floating-label">
                          <div className="field__input-wrapper">
                            <label
                              htmlFor="customer-address"
                              className="field__label"
                            >
                              Địa chỉ
                            </label>
                            <select
                              size={1}
                              className="field__input field__input--select"
                              id="customer-address"
                              data-bind="customerAddress"
                              value={selectAddress}
                              onChange={(e) =>
                                setSelectAddress(
                                  e.target.value as "current" | "other"
                                )
                              }
                            >
                              <option value={"other"}>Địa chỉ khác...</option>
                              <option value={"current"}>{address}</option>
                            </select>
                            <div className="field__caret">
                              <i className="fa fa-caret-down" />
                            </div>
                          </div>
                        </div>
                        <div className="field field--show-floating-label field--disabled">
                          <div className="field__input-wrapper">
                            <label htmlFor="email" className="field__label">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="field__input"
                              disabled={true}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
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
                              name="billingName"
                              id="billingName"
                              type="text"
                              className="field__input"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
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
                        {selectAddress === "other" && (
                          <>
                            <div className="field field--show-floating-label ">
                              <div className="field__input-wrapper field__input-wrapper--select2">
                                <label
                                  htmlFor="billingProvince"
                                  className="field__label"
                                >
                                  Tỉnh thành(tùy chọn)
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
                          </>
                        )}
                      </div>
                    </div>
                  </section>
                  <div className="fieldset">
                    <h3 className="visually-hidden">Ghi chú</h3>
                    <div
                      className="field "
                      data-bind-class="{'field--show-floating-label': note}"
                    >
                      <div className="field__input-wrapper">
                        <label htmlFor="note" className="field__label">
                          Ghi chú (tùy chọn)
                        </label>
                        <textarea
                          className="field__input"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col--two">
                  <section
                    className="section"
                    data-define="{shippingMethod: '760173_0,40.000 VND'}"
                  >
                    <div className="section__header">
                      <div className="layout-flex">
                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                          <i className="fa fa-truck fa-lg section__title--icon hide-on-desktop" />
                          Vận chuyển
                        </h2>
                      </div>
                    </div>
                    <div
                      className="section__content"
                      data-tg-refresh="refreshShipping"
                      id="shippingMethodList"
                      data-define="{isAddressSelecting: false, shippingMethods: []}"
                    >
                      <div
                        className="alert alert--loader spinner spinner--active hide"
                        data-bind-show="isLoadingShippingMethod"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="spinner-loader"
                        >
                          <use href="#spinner" />
                        </svg>
                      </div>
                      <div
                        className="alert alert-retry alert--danger hide"
                        data-bind-event-click="handleShippingMethodErrorRetry()"
                        data-bind-show="!isLoadingShippingMethod && !isAddressSelecting && isLoadingShippingError"
                      >
                        <span data-bind="loadingShippingErrorMessage">
                          Không thể load phí vận chuyển. Vui lòng thử lại
                        </span>{" "}
                        <i className="fa fa-refresh" />
                      </div>
                      <div
                        className="content-box"
                        data-bind-show="!isLoadingShippingMethod && !isAddressSelecting && !isLoadingShippingError"
                      >
                        <div
                          className="content-box__row"
                          data-define-array="{shippingMethods: {name: '760173_0,40.000 VND', textPrice: '40.000₫', textDiscountPrice: '-', subtotalPriceWithShippingFee: '24.589.000₫'}}"
                        >
                          <div className="radio-wrapper">
                            <div className="radio__input">
                              <input
                                type="radio"
                                className="input-radio"
                                checked
                              />
                            </div>
                            <label
                              htmlFor="shippingMethod-760173_0"
                              className="radio__label"
                            >
                              <span className="radio__label__primary">
                                <span>Giao hàng tận nơi</span>
                              </span>
                              <span className="radio__label__accessory">
                                <span className="content-box__emphasis price">
                                  40.000₫
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="alert alert--info hide"
                        data-bind-show="!isLoadingShippingMethod && isAddressSelecting"
                      >
                        Vui lòng nhập thông tin giao hàng
                      </div>
                    </div>
                  </section>
                  <section className="section">
                    <div className="section__header">
                      <div className="layout-flex">
                        <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                          <i className="fa fa-credit-card fa-lg section__title--icon hide-on-desktop" />
                          Thanh toán
                        </h2>
                      </div>
                    </div>
                    <div className="section__content">
                      <div
                        className="content-box"
                        data-define="{paymentMethod: undefined}"
                      >
                        <div className="content-box__row">
                          <div className="radio-wrapper">
                            <div className="radio__input">
                              <input
                                name="paymentMethod"
                                id="paymentMethod-618857"
                                type="radio"
                                className="input-radio"
                                defaultChecked={true}
                                onChange={(e) =>
                                  e.target.checked ? setPayments("cod") : null
                                }
                              />
                            </div>
                            <label
                              htmlFor="paymentMethod-618857"
                              className="radio__label"
                            >
                              <span className="radio__label__primary">
                                Thanh toán khi giao hàng (COD)
                              </span>
                              <span className="radio__label__accessory">
                                <span className="radio__label__icon">
                                  <i className="payment-icon payment-icon--4" />
                                </span>
                              </span>
                            </label>
                          </div>
                          <div
                            className="content-box__row__desc hide"
                            data-bind-show="paymentMethod == 618857"
                            data-provider-id={4}
                          >
                            <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="section__content"
                      style={{ marginTop: "1em" }}
                    >
                      <div
                        className="content-box"
                        data-define="{paymentMethod: undefined}"
                      >
                        <div className="content-box__row">
                          <div className="radio-wrapper">
                            <div className="radio__input">
                              <input
                                name="paymentMethod"
                                id="paymentMethod-618858"
                                type="radio"
                                className="input-radio"
                                data-bind="paymentMethod"
                                data-provider-id={5}
                                value={"banking"}
                                onChange={(e) =>
                                  e.target.checked ? setPayments("bank") : null
                                }
                              />
                            </div>
                            <label
                              htmlFor="paymentMethod-618858"
                              className="radio__label"
                            >
                              <span className="radio__label__primary">
                                Thanh toán qua Internet
                              </span>
                              <span className="radio__label__accessory">
                                <span className="radio__label__icon">
                                  <i className="payment-icon payment-icon--4" />
                                </span>
                              </span>
                            </label>
                          </div>
                          <div
                            className="content-box__row__desc hide"
                            data-bind-show="paymentMethod == 618857"
                            data-provider-id={4}
                          >
                            <p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </article>
              <div className="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                <button
                  // type="submit"
                  className="btn btn-checkout spinner"
                  data-bind-class="{'spinner--active': isSubmitingCheckout}"
                  data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                >
                  <span
                    className="spinner-label"
                    onClick={() => handleCheckout()}
                  >
                    ĐẶT HÀNG
                  </span>
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="spinner-loader"
              >
                <use href="#spinner" />
              </svg> */}
                </button>
                <a href="/cart" className="previous-link">
                  <i className="previous-link__arrow">❮</i>
                  <span className="previous-link__content">
                    Quay về giỏ hàng
                  </span>
                </a>
              </div>
              <div id="common-alert" data-tg-refresh="refreshError">
                <div
                  className="alert alert--danger hide-on-desktop hide"
                  data-bind-show="!isSubmitingCheckout && isSubmitingCheckoutError"
                  data-bind="submitingCheckoutErrorMessage"
                >
                  Có lỗi xảy ra khi xử lý. Vui lòng thử lại
                </div>
              </div>
            </div>
          </main>
          <aside className="sidebar">
            <div className="sidebar__header">
              <h2 className="sidebar__title">
                Đơn hàng ({infoCart.quantity} sản phẩm)
              </h2>
            </div>
            <div className="sidebar__content">
              <div
                id="order-summary"
                className="order-summary order-summary--is-collapsed"
              >
                <div className="order-summary__sections">
                  <div className="order-summary__section order-summary__section--product-list order-summary__section--is-scrollable order-summary--collapse-element">
                    <table className="product-table">
                      <caption className="visually-hidden">
                        Chi tiết đơn hàng
                      </caption>
                      <thead className="product-table__header">
                        <tr>
                          <th>
                            <span className="visually-hidden">
                              Ảnh sản phẩm
                            </span>
                          </th>
                          <th>
                            <span className="visually-hidden">Mô tả</span>
                          </th>
                          <th>
                            <span className="visually-hidden">Sổ lượng</span>
                          </th>
                          <th>
                            <span className="visually-hidden">Đơn giá</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>{handleRenderItem()}</tbody>
                    </table>
                  </div>
                  <div
                    className="order-summary__section order-summary__section--discount-code"
                    data-tg-refresh="refreshDiscount"
                    id="discountCode"
                  >
                    <h3 className="visually-hidden">Mã khuyến mại</h3>
                    <div className="edit_checkout animate-floating-labels">
                      <div className="fieldset">
                        <div className="field ">
                          <div>
                            <div className="field__input-wrapper">
                              <label
                                htmlFor="reductionCode"
                                className="field__label"
                              >
                                Nhập mã giảm giá
                              </label>
                            </div>
                            <div style={{ display: "flex" }}>
                              <input
                                name="reductionCode"
                                id="reductionCode"
                                type="text"
                                className="field__input"
                                autoComplete="off"
                                data-bind-disabled="isLoadingReductionCode"
                                data-bind-event-keypress="handleReductionCodeKeyPress(event)"
                                data-define="{reductionCode: null}"
                                data-bind="reductionCode"
                              />
                              <button
                                className="field__input-btn btn spinner btn--disabled"
                                type="button"
                                data-bind-disabled="isLoadingReductionCode || !reductionCode"
                                data-bind-class="{'spinner--active': isLoadingReductionCode, 'btn--disabled': !reductionCode}"
                                data-bind-event-click="applyReductionCode()"
                                disabled=""
                              >
                                <span className="spinner-label">Áp dụng</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="spinner-loader"
                                >
                                  <use href="#spinner" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <p
                            className="field__message field__message--error field__message--error-always-show hide"
                            data-bind-show="!isLoadingReductionCode && isLoadingReductionCodeError"
                            data-bind="loadingReductionCodeErrorMessage"
                          >
                            Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng thử
                            lại
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="order-summary__section order-summary__section--total-lines order-summary--collapse-element"
                    data-define="{subTotalPriceText: '24.549.000₫'}"
                    data-tg-refresh="refreshOrderTotalPrice"
                    id="orderSummary"
                  >
                    <table className="total-line-table">
                      <caption className="visually-hidden">
                        Tổng giá trị
                      </caption>
                      <thead>
                        <tr>
                          <td>
                            <span className="visually-hidden">Mô tả</span>
                          </td>
                          <td>
                            <span className="visually-hidden">Giá tiền</span>
                          </td>
                        </tr>
                      </thead>
                      <tbody className="total-line-table__tbody">
                        <tr className="total-line total-line--subtotal">
                          <th className="total-line__name">Tạm tính</th>
                          <td className="total-line__price">
                            {formattedNumber(infoCart.price)}₫
                          </td>
                        </tr>
                        <tr className="total-line total-line--shipping-fee">
                          <th className="total-line__name">Phí vận chuyển</th>
                          <td
                            className="total-line__price"
                            data-bind="getTextShippingPrice()"
                          >
                            40.000₫
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="total-line-table__footer">
                        <tr className="total-line payment-due">
                          <th className="total-line__name">
                            <span className="payment-due__label-total">
                              Tổng cộng
                            </span>
                          </th>
                          <td className="total-line__price">
                            <span
                              className="payment-due__price"
                              data-bind="getTextTotalPrice()"
                            >
                              {formattedNumber(infoCart.price + 40000)}₫
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                    <button
                      // type="submit"
                      className="btn btn-checkout spinner"
                      data-bind-class="{'spinner--active': isSubmitingCheckout}"
                      data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                    >
                      <span
                        className="spinner-label"
                        onClick={() => handleCheckout()}
                      >
                        ĐẶT HÀNG
                      </span>
                      {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="spinner-loader"
                  >
                    <use href="#spinner" />
                  </svg> */}
                    </button>
                    <a href="/cart" className="previous-link">
                      <i className="previous-link__arrow">❮</i>
                      <span className="previous-link__content">
                        Quay về giỏ hàng
                      </span>
                    </a>
                  </div>
                  <div id="common-alert-sidebar" data-tg-refresh="refreshError">
                    <div
                      className="alert alert--danger hide-on-mobile hide"
                      data-bind-show="!isSubmitingCheckout && isSubmitingCheckoutError"
                      data-bind="submitingCheckoutErrorMessage"
                    >
                      Có lỗi xảy ra khi xử lý. Vui lòng thử lại
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="spinner">
          <svg viewBox="0 0 30 30">
            <circle
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeDasharray="85%"
              cx="50%"
              cy="50%"
              r="40%"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 15 15"
                to="360 15 15"
                dur="0.7s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </symbol>
      </svg>
    </div>
  );
};

export default CheckOut;
