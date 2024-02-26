import PhoneInput from "react-phone-input-2"
import "./index.css"
import { useState } from "react";
import 'react-phone-input-2/lib/style.css';
const CheckOut = ()=>{
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOnChange = (value, country) => {
    console.log('Country:', country);
    console.log('Phone number:', value);
    setPhoneNumber(value);
  };
    return (
<div data-tg-refresh="checkout" id="checkout" className="content">
  <form
    id="checkoutForm"
  >
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
                          Sổ địa chỉ
                        </label>
                        <select
                          size={1}
                          className="field__input field__input--select"
                          id="customer-address"
                          data-bind="customerAddress"
                        >
                          <option value={0}>Địa chỉ khác...</option>
                          <option
                            selected="selected"
                            data-name="dang ngoc cuong"
                            data-address=""
                            data-phone={+84389993293}
                            data-province={1}
                            data-district={1}
                            data-ward={3291}
                          >
                            dang ngoc cuong, Phường Phú Thịnh, Thị xã Sơn Tây,
                            Hà Nội
                          </option>
                        </select>
                        <div className="field__caret">
                          <i className="fa fa-caret-down" />
                        </div>
                      </div>
                    </div>
                    <div className="field field--show-floating-label field--disabled">
                      <input
                        name="email"
                        type="hidden"
                        defaultValue="dangngoccuong99@gmail.com"
                      />
                      <div className="field__input-wrapper">
                        <label htmlFor="email" className="field__label">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="field__input"
                          data-bind="email"
                          defaultValue="dangngoccuong99@gmail.com"
                          disabled=""
                        />
                      </div>
                    </div>
                    <div
                      className="field  field--show-floating-label"
                      data-bind-class="{'field--show-floating-label': billing.name}"
                    >
                      <div className="field__input-wrapper">
                        <label htmlFor="billingName" className="field__label">
                          Họ và tên
                        </label>
                        <input
                          name="billingName"
                          id="billingName"
                          type="text"
                          className="field__input"
                          data-bind="billing.name"
                          defaultValue="dang ngoc cuong"
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
                        <label htmlFor="billingPhone" className="field__label">
                          Số điện thoại (tùy chọn)
                        </label>
                        <PhoneInput
                          country={'vn'}
                          value={phoneNumber}
                          onChange={(value, country) => handleOnChange(value, country)}
      />
                        {/* <div style={{display:"flex"}}>
                        <input
                          name="billingPhone"
                          id="billingPhone"
                          type="tel"
                          className="field__input"
                          data-bind="billing.phone"
                          defaultValue={+84389993293}
                        />
                        <div className="field__input-phone-region-wrapper">
                          <select
                            className="field__input select-phone-region select2-hidden-accessible"
                            name="billingPhoneRegion"
                            data-init-value="VN"
                            data-select2-id="select2-data-7-djsh"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option
                              value="AF"
                              data-select2-id="select2-data-9-7wzx"
                            >
                              Afghanistan (+93)
                            </option>
                            <option
                              value="AL"
                              data-select2-id="select2-data-10-kswn"
                            >
                              Albania (+355)
                            </option>
                            <option
                              value="DZ"
                              data-select2-id="select2-data-11-z202"
                            >
                              Algeria (+213)
                            </option>
                            <option
                              value="AD"
                              data-select2-id="select2-data-12-30ur"
                            >
                              Andorra (+376)
                            </option>
                            <option
                              value="AO"
                              data-select2-id="select2-data-13-9ygy"
                            >
                              Angola (+244)
                            </option>
                            <option
                              value="AG"
                              data-select2-id="select2-data-14-s2yy"
                            >
                              Antigua and Barbuda (+1)
                            </option>
                            <option
                              value="AR"
                              data-select2-id="select2-data-15-0bxs"
                            >
                              Argentina (+54)
                            </option>
                            <option
                              value="AM"
                              data-select2-id="select2-data-16-so16"
                            >
                              Armenia (+374)
                            </option>
                            <option
                              value="AU"
                              data-select2-id="select2-data-17-o2sz"
                            >
                              Australia (+61)
                            </option>
                            <option
                              value="AT"
                              data-select2-id="select2-data-18-3md2"
                            >
                              Austria (+43)
                            </option>
                            <option
                              value="AZ"
                              data-select2-id="select2-data-19-3d3c"
                            >
                              Azerbaijan (+994)
                            </option>
                            <option
                              value="BS"
                              data-select2-id="select2-data-20-jpgh"
                            >
                              Bahamas (+1)
                            </option>
                            <option
                              value="BH"
                              data-select2-id="select2-data-21-59fn"
                            >
                              Bahrain (+973)
                            </option>
                            <option
                              value="BD"
                              data-select2-id="select2-data-22-t8hq"
                            >
                              Bangladesh (+880)
                            </option>
                            <option
                              value="BB"
                              data-select2-id="select2-data-23-mvug"
                            >
                              Barbados (+1)
                            </option>
                            <option
                              value="BY"
                              data-select2-id="select2-data-24-4rr6"
                            >
                              Belarus (+375)
                            </option>
                            <option
                              value="BE"
                              data-select2-id="select2-data-25-4528"
                            >
                              Belgium (+32)
                            </option>
                            <option
                              value="BZ"
                              data-select2-id="select2-data-26-n8a2"
                            >
                              Belize (+501)
                            </option>
                            <option
                              value="BJ"
                              data-select2-id="select2-data-27-o7zn"
                            >
                              Benin (+229)
                            </option>
                            <option
                              value="BT"
                              data-select2-id="select2-data-28-y1bj"
                            >
                              Bhutan (+975)
                            </option>
                            <option
                              value="BO"
                              data-select2-id="select2-data-29-t0lo"
                            >
                              Bolivia (+591)
                            </option>
                            <option
                              value="BA"
                              data-select2-id="select2-data-30-kg79"
                            >
                              Bosnia and Herzegovina (+387)
                            </option>
                            <option
                              value="BW"
                              data-select2-id="select2-data-31-pfgh"
                            >
                              Botswana (+267)
                            </option>
                            <option
                              value="BR"
                              data-select2-id="select2-data-32-2j7j"
                            >
                              Brazil (+55)
                            </option>
                            <option
                              value="BN"
                              data-select2-id="select2-data-33-c2ng"
                            >
                              Brunei (+673)
                            </option>
                            <option
                              value="BG"
                              data-select2-id="select2-data-34-td3c"
                            >
                              Bulgaria (+359)
                            </option>
                            <option
                              value="BF"
                              data-select2-id="select2-data-35-pqh2"
                            >
                              Burkina Faso (+226)
                            </option>
                            <option
                              value="BI"
                              data-select2-id="select2-data-36-alhd"
                            >
                              Burundi (+257)
                            </option>
                            <option
                              value="KH"
                              data-select2-id="select2-data-37-ivpd"
                            >
                              Cambodia (+855)
                            </option>
                            <option
                              value="CM"
                              data-select2-id="select2-data-38-acvw"
                            >
                              Cameroon (+237)
                            </option>
                            <option
                              value="CA"
                              data-select2-id="select2-data-39-239j"
                            >
                              Canada (+1)
                            </option>
                            <option
                              value="CV"
                              data-select2-id="select2-data-40-4ttj"
                            >
                              Cape Verde (+238)
                            </option>
                            <option
                              value="CF"
                              data-select2-id="select2-data-41-nmwg"
                            >
                              Central African Republic (+236)
                            </option>
                            <option
                              value="TD"
                              data-select2-id="select2-data-42-brih"
                            >
                              Chad (+235)
                            </option>
                            <option
                              value="CL"
                              data-select2-id="select2-data-43-6fnm"
                            >
                              Chile (+56)
                            </option>
                            <option
                              value="CO"
                              data-select2-id="select2-data-44-q75f"
                            >
                              Colombia (+57)
                            </option>
                            <option
                              value="KM"
                              data-select2-id="select2-data-45-xbj1"
                            >
                              Comoros (+269)
                            </option>
                            <option
                              value="CG"
                              data-select2-id="select2-data-46-8fpq"
                            >
                              Congo-Brazzaville (+242)
                            </option>
                            <option
                              value="CK"
                              data-select2-id="select2-data-47-5avb"
                            >
                              Congo-Kinshasa (+682)
                            </option>
                            <option
                              value="CR"
                              data-select2-id="select2-data-48-8dhc"
                            >
                              Costa Rica (+506)
                            </option>
                            <option
                              value="CD"
                              data-select2-id="select2-data-49-vb2t"
                            >
                              Côte d'Ivoire (+243)
                            </option>
                            <option
                              value="HR"
                              data-select2-id="select2-data-50-dshv"
                            >
                              Croatia (+385)
                            </option>
                            <option
                              value="CU"
                              data-select2-id="select2-data-51-ygu1"
                            >
                              Cuba (+53)
                            </option>
                            <option
                              value="CY"
                              data-select2-id="select2-data-52-q3ul"
                            >
                              Cyprus (+357)
                            </option>
                            <option
                              value="CZ"
                              data-select2-id="select2-data-53-9ka1"
                            >
                              Czech Republic (+420)
                            </option>
                            <option
                              value="DK"
                              data-select2-id="select2-data-54-g3ja"
                            >
                              Denmark (+45)
                            </option>
                            <option
                              value="DJ"
                              data-select2-id="select2-data-55-ohqu"
                            >
                              Djibouti (+253)
                            </option>
                            <option
                              value="DM"
                              data-select2-id="select2-data-56-e3ze"
                            >
                              Dominica (+1)
                            </option>
                            <option
                              value="DO"
                              data-select2-id="select2-data-57-9fna"
                            >
                              Dominican Republic (+1)
                            </option>
                            <option
                              value="TL"
                              data-select2-id="select2-data-58-2332"
                            >
                              East Timor (+670)
                            </option>
                            <option
                              value="EC"
                              data-select2-id="select2-data-59-3ybb"
                            >
                              Ecuador (+593)
                            </option>
                            <option
                              value="EG"
                              data-select2-id="select2-data-60-ih5y"
                            >
                              Egypt (+20)
                            </option>
                            <option
                              value="SV"
                              data-select2-id="select2-data-61-8vbo"
                            >
                              El Salvador (+503)
                            </option>
                            <option
                              value="GQ"
                              data-select2-id="select2-data-62-zsx2"
                            >
                              Equatorial Guinea (+240)
                            </option>
                            <option
                              value="ER"
                              data-select2-id="select2-data-63-zunr"
                            >
                              Eritrea (+291)
                            </option>
                            <option
                              value="EE"
                              data-select2-id="select2-data-64-8nqr"
                            >
                              Estonia (+372)
                            </option>
                            <option
                              value="ET"
                              data-select2-id="select2-data-65-wq0y"
                            >
                              Ethiopia (+251)
                            </option>
                            <option
                              value="FJ"
                              data-select2-id="select2-data-66-59sa"
                            >
                              Fiji (+679)
                            </option>
                            <option
                              value="FI"
                              data-select2-id="select2-data-67-f85n"
                            >
                              Finland (+358)
                            </option>
                            <option
                              value="FR"
                              data-select2-id="select2-data-68-6ocx"
                            >
                              France (+33)
                            </option>
                            <option
                              value="GA"
                              data-select2-id="select2-data-69-fllp"
                            >
                              Gabon (+241)
                            </option>
                            <option
                              value="GM"
                              data-select2-id="select2-data-70-igmk"
                            >
                              Gambia (+220)
                            </option>
                            <option
                              value="GE"
                              data-select2-id="select2-data-71-a29d"
                            >
                              Georgia (+995)
                            </option>
                            <option
                              value="DE"
                              data-select2-id="select2-data-72-d5r2"
                            >
                              Germany (+49)
                            </option>
                            <option
                              value="GH"
                              data-select2-id="select2-data-73-2gq0"
                            >
                              Ghana (+233)
                            </option>
                            <option
                              value="GR"
                              data-select2-id="select2-data-74-opod"
                            >
                              Greece (+30)
                            </option>
                            <option
                              value="GD"
                              data-select2-id="select2-data-75-t74a"
                            >
                              Grenada (+1)
                            </option>
                            <option
                              value="GT"
                              data-select2-id="select2-data-76-xzpk"
                            >
                              Guatemala (+502)
                            </option>
                            <option
                              value="GN"
                              data-select2-id="select2-data-77-b4bx"
                            >
                              Guinea (+224)
                            </option>
                            <option
                              value="GW"
                              data-select2-id="select2-data-78-32z7"
                            >
                              Guinea-Bissau (+245)
                            </option>
                            <option
                              value="GY"
                              data-select2-id="select2-data-79-pdkc"
                            >
                              Guyana (+592)
                            </option>
                            <option
                              value="HT"
                              data-select2-id="select2-data-80-uxre"
                            >
                              Haiti (+509)
                            </option>
                            <option
                              value="HN"
                              data-select2-id="select2-data-81-7gq2"
                            >
                              Honduras (+504)
                            </option>
                            <option
                              value="HK"
                              data-select2-id="select2-data-82-4tg9"
                            >
                              Hong Kong (+852)
                            </option>
                            <option
                              value="HU"
                              data-select2-id="select2-data-83-p8wc"
                            >
                              Hungary (+36)
                            </option>
                            <option
                              value="IS"
                              data-select2-id="select2-data-84-avv3"
                            >
                              Iceland (+354)
                            </option>
                            <option
                              value="IN"
                              data-select2-id="select2-data-85-0y6x"
                            >
                              India (+91)
                            </option>
                            <option
                              value="ID"
                              data-select2-id="select2-data-86-uvql"
                            >
                              Indonesia (+62)
                            </option>
                            <option
                              value="IR"
                              data-select2-id="select2-data-87-5l73"
                            >
                              Iran (+98)
                            </option>
                            <option
                              value="IQ"
                              data-select2-id="select2-data-88-1miy"
                            >
                              Iraq (+964)
                            </option>
                            <option
                              value="IE"
                              data-select2-id="select2-data-89-i8td"
                            >
                              Ireland (+353)
                            </option>
                            <option
                              value="IL"
                              data-select2-id="select2-data-90-ewkn"
                            >
                              Israel (+972)
                            </option>
                            <option
                              value="IT"
                              data-select2-id="select2-data-91-zw53"
                            >
                              Italy (+39)
                            </option>
                            <option
                              value="JM"
                              data-select2-id="select2-data-92-xgi3"
                            >
                              Jamaica (+1)
                            </option>
                            <option
                              value="JP"
                              data-select2-id="select2-data-93-876r"
                            >
                              Japan (Nippon) (+81)
                            </option>
                            <option
                              value="JO"
                              data-select2-id="select2-data-94-8smh"
                            >
                              Jordan (+962)
                            </option>
                            <option
                              value="KZ"
                              data-select2-id="select2-data-95-p2ra"
                            >
                              Kazakhstan (+7)
                            </option>
                            <option
                              value="KE"
                              data-select2-id="select2-data-96-vaf4"
                            >
                              Kenya (+254)
                            </option>
                            <option
                              value="KI"
                              data-select2-id="select2-data-97-x2kr"
                            >
                              Kiribati (+686)
                            </option>
                            <option
                              value="KP"
                              data-select2-id="select2-data-98-e6v7"
                            >
                              North Korea (+850)
                            </option>
                            <option
                              value="XK"
                              data-select2-id="select2-data-99-l4a9"
                            >
                              Kosovo (+383)
                            </option>
                            <option
                              value="KW"
                              data-select2-id="select2-data-100-yoxt"
                            >
                              Kuwait (+965)
                            </option>
                            <option
                              value="KG"
                              data-select2-id="select2-data-101-3opj"
                            >
                              Kyrgyzstan (+996)
                            </option>
                            <option
                              value="LA"
                              data-select2-id="select2-data-102-q26t"
                            >
                              Laos (+856)
                            </option>
                            <option
                              value="LV"
                              data-select2-id="select2-data-103-5ofv"
                            >
                              Latvia (+371)
                            </option>
                            <option
                              value="LB"
                              data-select2-id="select2-data-104-zter"
                            >
                              Lebanon (+961)
                            </option>
                            <option
                              value="LS"
                              data-select2-id="select2-data-105-6zs8"
                            >
                              Lesotho (+266)
                            </option>
                            <option
                              value="LR"
                              data-select2-id="select2-data-106-dcn4"
                            >
                              Liberia (+231)
                            </option>
                            <option
                              value="LY"
                              data-select2-id="select2-data-107-d7dh"
                            >
                              Libya (+218)
                            </option>
                            <option
                              value="LI"
                              data-select2-id="select2-data-108-cbrs"
                            >
                              Liechtenstein (+423)
                            </option>
                            <option
                              value="LT"
                              data-select2-id="select2-data-109-pmrz"
                            >
                              Lithuania (+370)
                            </option>
                            <option
                              value="LU"
                              data-select2-id="select2-data-110-y73b"
                            >
                              Luxembourg (+352)
                            </option>
                            <option
                              value="MK"
                              data-select2-id="select2-data-111-jed3"
                            >
                              Macedonia (FYROM) (+389)
                            </option>
                            <option
                              value="MG"
                              data-select2-id="select2-data-112-ujfj"
                            >
                              Madagascar (+261)
                            </option>
                            <option
                              value="MW"
                              data-select2-id="select2-data-113-qi7e"
                            >
                              Malawi (+265)
                            </option>
                            <option
                              value="MY"
                              data-select2-id="select2-data-114-prg0"
                            >
                              Malaysia (+60)
                            </option>
                            <option
                              value="MV"
                              data-select2-id="select2-data-115-lgyr"
                            >
                              Maldives (+960)
                            </option>
                            <option
                              value="ML"
                              data-select2-id="select2-data-116-gjcl"
                            >
                              Mali (+223)
                            </option>
                            <option
                              value="MT"
                              data-select2-id="select2-data-117-uqe9"
                            >
                              Malta (+356)
                            </option>
                            <option
                              value="MH"
                              data-select2-id="select2-data-118-rehw"
                            >
                              Marshall Islands (+692)
                            </option>
                            <option
                              value="MR"
                              data-select2-id="select2-data-119-y757"
                            >
                              Mauritania (+222)
                            </option>
                            <option
                              value="MU"
                              data-select2-id="select2-data-120-7hwe"
                            >
                              Mauritius (+230)
                            </option>
                            <option
                              value="MX"
                              data-select2-id="select2-data-121-gyf1"
                            >
                              Mexico (+52)
                            </option>
                            <option
                              value="FM"
                              data-select2-id="select2-data-122-ba5y"
                            >
                              Micronesia (+691)
                            </option>
                            <option
                              value="MD"
                              data-select2-id="select2-data-123-pp6u"
                            >
                              Moldova (+373)
                            </option>
                            <option
                              value="MC"
                              data-select2-id="select2-data-124-yc3q"
                            >
                              Monaco (+377)
                            </option>
                            <option
                              value="MN"
                              data-select2-id="select2-data-125-99pi"
                            >
                              Mongolia (+976)
                            </option>
                            <option
                              value="ME"
                              data-select2-id="select2-data-126-4u0h"
                            >
                              Montenegro (+382)
                            </option>
                            <option
                              value="MA"
                              data-select2-id="select2-data-127-zkbj"
                            >
                              Morocco (+212)
                            </option>
                            <option
                              value="MZ"
                              data-select2-id="select2-data-128-rcve"
                            >
                              Mozambique (+258)
                            </option>
                            <option
                              value="MM"
                              data-select2-id="select2-data-129-x6yq"
                            >
                              Myanmar (+95)
                            </option>
                            <option
                              value="NA"
                              data-select2-id="select2-data-130-s4k2"
                            >
                              Namibia (+264)
                            </option>
                            <option
                              value="NR"
                              data-select2-id="select2-data-131-30hr"
                            >
                              Nauru (+674)
                            </option>
                            <option
                              value="NP"
                              data-select2-id="select2-data-132-mx78"
                            >
                              Nepal (+977)
                            </option>
                            <option
                              value="NL"
                              data-select2-id="select2-data-133-j3e8"
                            >
                              Netherlands (+31)
                            </option>
                            <option
                              value="NZ"
                              data-select2-id="select2-data-134-v4cc"
                            >
                              New Zealand (+64)
                            </option>
                            <option
                              value="NI"
                              data-select2-id="select2-data-135-k7hp"
                            >
                              Nicaragua (+505)
                            </option>
                            <option
                              value="NE"
                              data-select2-id="select2-data-136-8y0b"
                            >
                              Niger (+227)
                            </option>
                            <option
                              value="NG"
                              data-select2-id="select2-data-137-oppk"
                            >
                              Nigeria (+234)
                            </option>
                            <option
                              value="KR"
                              data-select2-id="select2-data-138-cqkd"
                            >
                              South Korea (+82)
                            </option>
                            <option
                              value="NC"
                              data-select2-id="select2-data-139-371u"
                            >
                              New Caledonia (+687)
                            </option>
                            <option
                              value="NO"
                              data-select2-id="select2-data-140-zlvu"
                            >
                              Norway (+47)
                            </option>
                            <option
                              value="OM"
                              data-select2-id="select2-data-141-ng38"
                            >
                              Oman (+968)
                            </option>
                            <option
                              value="PK"
                              data-select2-id="select2-data-142-5x6l"
                            >
                              Pakistan (+92)
                            </option>
                            <option
                              value="PW"
                              data-select2-id="select2-data-143-zlaq"
                            >
                              Palau (+680)
                            </option>
                            <option
                              value="PS"
                              data-select2-id="select2-data-144-rbe6"
                            >
                              Palestine (+970)
                            </option>
                            <option
                              value="PA"
                              data-select2-id="select2-data-145-ekao"
                            >
                              Panama (+507)
                            </option>
                            <option
                              value="PG"
                              data-select2-id="select2-data-146-ifnl"
                            >
                              Papua New Guinea (+675)
                            </option>
                            <option
                              value="PY"
                              data-select2-id="select2-data-147-tm4f"
                            >
                              Paraguay (+595)
                            </option>
                            <option
                              value="PE"
                              data-select2-id="select2-data-148-ilme"
                            >
                              Peru (+51)
                            </option>
                            <option
                              value="PH"
                              data-select2-id="select2-data-149-2r4v"
                            >
                              Philippines (+63)
                            </option>
                            <option
                              value="PL"
                              data-select2-id="select2-data-150-frnh"
                            >
                              Poland (+48)
                            </option>
                            <option
                              value="PT"
                              data-select2-id="select2-data-151-iozj"
                            >
                              Portugal (+351)
                            </option>
                            <option
                              value="QA"
                              data-select2-id="select2-data-152-ojpz"
                            >
                              Qatar (+974)
                            </option>
                            <option
                              value="RO"
                              data-select2-id="select2-data-153-wofn"
                            >
                              Romania (+40)
                            </option>
                            <option
                              value="RU"
                              data-select2-id="select2-data-154-bhzg"
                            >
                              Russia (+7)
                            </option>
                            <option
                              value="RW"
                              data-select2-id="select2-data-155-kpll"
                            >
                              Rwanda (+250)
                            </option>
                            <option
                              value="KN"
                              data-select2-id="select2-data-156-00ut"
                            >
                              Saint Kitts and Nevis (+1)
                            </option>
                            <option
                              value="LC"
                              data-select2-id="select2-data-157-qiid"
                            >
                              Saint Lucia (+1)
                            </option>
                            <option
                              value="VC"
                              data-select2-id="select2-data-158-jidc"
                            >
                              Saint Vincent and the Grenadines (+1)
                            </option>
                            <option
                              value="WS"
                              data-select2-id="select2-data-159-hbhe"
                            >
                              Samoa (+685)
                            </option>
                            <option
                              value="SM"
                              data-select2-id="select2-data-160-p2co"
                            >
                              San Marino (+378)
                            </option>
                            <option
                              value="ST"
                              data-select2-id="select2-data-161-xn5p"
                            >
                              Sao Tome and Principe (+239)
                            </option>
                            <option
                              value="SA"
                              data-select2-id="select2-data-162-rlgp"
                            >
                              Saudi Arabia (+966)
                            </option>
                            <option
                              value="SS"
                              data-select2-id="select2-data-163-hg6y"
                            >
                              South Sudan (+211)
                            </option>
                            <option
                              value="SN"
                              data-select2-id="select2-data-164-7dgs"
                            >
                              Senegal (+221)
                            </option>
                            <option
                              value="RS"
                              data-select2-id="select2-data-165-g15a"
                            >
                              Serbia (+381)
                            </option>
                            <option
                              value="SC"
                              data-select2-id="select2-data-166-mn19"
                            >
                              Seychelles (+248)
                            </option>
                            <option
                              value="SL"
                              data-select2-id="select2-data-167-47fi"
                            >
                              Sierra Leone (+232)
                            </option>
                            <option
                              value="SG"
                              data-select2-id="select2-data-168-z4cg"
                            >
                              Singapore (+65)
                            </option>
                            <option
                              value="SH"
                              data-select2-id="select2-data-169-ofpe"
                            >
                              Saint Helena (+290)
                            </option>
                            <option
                              value="SK"
                              data-select2-id="select2-data-170-7wee"
                            >
                              Slovakia (+421)
                            </option>
                            <option
                              value="SI"
                              data-select2-id="select2-data-171-4cge"
                            >
                              Slovenia (+386)
                            </option>
                            <option
                              value="SB"
                              data-select2-id="select2-data-172-zkkr"
                            >
                              Solomon Islands (+677)
                            </option>
                            <option
                              value="SO"
                              data-select2-id="select2-data-173-4kfe"
                            >
                              Somalia (+252)
                            </option>
                            <option
                              value="SJ"
                              data-select2-id="select2-data-174-kb0p"
                            >
                              Svalbard and Jan Mayen (+47)
                            </option>
                            <option
                              value="ZA"
                              data-select2-id="select2-data-175-kpht"
                            >
                              South Africa (+27)
                            </option>
                            <option
                              value="ES"
                              data-select2-id="select2-data-176-o8c8"
                            >
                              Spain (+34)
                            </option>
                            <option
                              value="LK"
                              data-select2-id="select2-data-177-ch90"
                            >
                              Sri Lanka (+94)
                            </option>
                            <option
                              value="SD"
                              data-select2-id="select2-data-178-ohqc"
                            >
                              Sudan (+249)
                            </option>
                            <option
                              value="SR"
                              data-select2-id="select2-data-179-u3oy"
                            >
                              Suriname (+597)
                            </option>
                            <option
                              value="SZ"
                              data-select2-id="select2-data-180-55c1"
                            >
                              Swaziland (+268)
                            </option>
                            <option
                              value="SE"
                              data-select2-id="select2-data-181-mtvc"
                            >
                              Sweden (+46)
                            </option>
                            <option
                              value="CH"
                              data-select2-id="select2-data-182-ck75"
                            >
                              Switzerland (+41)
                            </option>
                            <option
                              value="SY"
                              data-select2-id="select2-data-183-qgmd"
                            >
                              Syria (+963)
                            </option>
                            <option
                              value="TJ"
                              data-select2-id="select2-data-184-bgir"
                            >
                              Tajikistan (+992)
                            </option>
                            <option
                              value="TZ"
                              data-select2-id="select2-data-185-5f3y"
                            >
                              Tanzania (+255)
                            </option>
                            <option
                              value="TH"
                              data-select2-id="select2-data-186-rlny"
                            >
                              Thailand (+66)
                            </option>
                            <option
                              value="TG"
                              data-select2-id="select2-data-187-3swb"
                            >
                              Togo (+228)
                            </option>
                            <option
                              value="TO"
                              data-select2-id="select2-data-188-vxz0"
                            >
                              Tonga (+676)
                            </option>
                            <option
                              value="TK"
                              data-select2-id="select2-data-189-w0zc"
                            >
                              Tokelau (+690)
                            </option>
                            <option
                              value="TT"
                              data-select2-id="select2-data-190-crm7"
                            >
                              Trinidad and Tobago (+1)
                            </option>
                            <option
                              value="TN"
                              data-select2-id="select2-data-191-vx4s"
                            >
                              Tunisia (+216)
                            </option>
                            <option
                              value="TR"
                              data-select2-id="select2-data-192-bhtv"
                            >
                              Turkey (+90)
                            </option>
                            <option
                              value="CN"
                              data-select2-id="select2-data-193-z9yw"
                            >
                              China (+86)
                            </option>
                            <option
                              value="TM"
                              data-select2-id="select2-data-194-2zdt"
                            >
                              Turkmenistan (+993)
                            </option>
                            <option
                              value="TV"
                              data-select2-id="select2-data-195-h43t"
                            >
                              Tuvalu (+688)
                            </option>
                            <option
                              value="UG"
                              data-select2-id="select2-data-196-n2e2"
                            >
                              Uganda (+256)
                            </option>
                            <option
                              value="UA"
                              data-select2-id="select2-data-197-ftye"
                            >
                              Ukraine (+380)
                            </option>
                            <option
                              value="AE"
                              data-select2-id="select2-data-198-trsm"
                            >
                              United Arab Emirates (+971)
                            </option>
                            <option
                              value="GB"
                              data-select2-id="select2-data-199-4mow"
                            >
                              United Kingdom (+44)
                            </option>
                            <option
                              value="US"
                              data-select2-id="select2-data-200-hh8g"
                            >
                              United States (+1)
                            </option>
                            <option
                              value="UY"
                              data-select2-id="select2-data-201-5wd2"
                            >
                              Uruguay (+598)
                            </option>
                            <option
                              value="UZ"
                              data-select2-id="select2-data-202-vpvc"
                            >
                              Uzbekistan (+998)
                            </option>
                            <option
                              value="VU"
                              data-select2-id="select2-data-203-c3cg"
                            >
                              Vanuatu (+678)
                            </option>
                            <option
                              value="VA"
                              data-select2-id="select2-data-204-o593"
                            >
                              Vatican (+39)
                            </option>
                            <option
                              value="VE"
                              data-select2-id="select2-data-205-oglf"
                            >
                              Venezuela (+58)
                            </option>
                            <option
                              value="VN"
                              data-select2-id="select2-data-206-f7fk"
                            >
                              Vietnam (+84)
                            </option>
                            <option
                              value="EH"
                              data-select2-id="select2-data-207-e25y"
                            >
                              Western Sahara (+212)
                            </option>
                            <option
                              value="YE"
                              data-select2-id="select2-data-208-3s5z"
                            >
                              Yemen (+967)
                            </option>
                            <option
                              value="ZM"
                              data-select2-id="select2-data-209-ibky"
                            >
                              Zambia (+260)
                            </option>
                            <option
                              value="ZW"
                              data-select2-id="select2-data-210-8kxm"
                            >
                              Zimbabwe (+263)
                            </option>
                            <option
                              value="TW"
                              data-select2-id="select2-data-211-3h99"
                            >
                              Taiwan (+886)
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-8-tuoe"
                            style={{ width: 56 }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single select2-phone-region"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-billingPhoneRegion-3g-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-billingPhoneRegion-3g-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Vietnam (+84)"
                                >
                                  <span className="fi fi-vn" />
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation" />
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        </div> */}

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
                          name="billingAddress"
                          id="billingAddress"
                          type="text"
                          className="field__input"
                          data-bind="billing.address"
                          defaultValue=""
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
                          value={1}
                          data-address-type="province"
                          data-address-zone="billing"
                          data-select2-id="select2-data-billingProvince"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value="" hidden="">
                            ---
                          </option>
                          <option
                            value={1}
                            selected=""
                            data-select2-id="select2-data-212-mmn8"
                          >
                            Hà Nội
                          </option>
                          <option value={2}>TP Hồ Chí Minh</option>
                          <option value={3}>An Giang</option>
                          <option value={4}>Bà Rịa-Vũng Tàu</option>
                          <option value={5}>Bắc Giang</option>
                          <option value={6}>Bắc Kạn</option>
                          <option value={7}>Bạc Liêu</option>
                          <option value={8}>Bắc Ninh</option>
                          <option value={9}>Bến Tre</option>
                          <option value={10}>Bình Dương</option>
                          <option value={11}>Bình Định</option>
                          <option value={12}>Bình Phước</option>
                          <option value={13}>Bình Thuận</option>
                          <option value={14}>Cà Mau</option>
                          <option value={15}>Cao Bằng</option>
                          <option value={16}>Cần Thơ</option>
                          <option value={17}>Đà Nẵng</option>
                          <option value={18}>Đắk Lắk</option>
                          <option value={19}>Đắk Nông</option>
                          <option value={20}>Điện Biên</option>
                          <option value={21}>Đồng Nai</option>
                          <option value={22}>Đồng Tháp</option>
                          <option value={23}>Gia Lai</option>
                          <option value={24}>Hà Giang</option>
                          <option value={25}>Hà Nam</option>
                          <option value={26}>Hà Tĩnh</option>
                          <option value={27}>Hải Dương</option>
                          <option value={28}>Hải Phòng</option>
                          <option value={29}>Hậu Giang</option>
                          <option value={30}>Hòa Bình</option>
                          <option value={31}>Hưng Yên</option>
                          <option value={32}>Khánh Hòa</option>
                          <option value={33}>Kiên Giang</option>
                          <option value={34}>Kon Tum</option>
                          <option value={35}>Lai Châu</option>
                          <option value={36}>Lâm Đồng</option>
                          <option value={37}>Lạng Sơn</option>
                          <option value={38}>Lào Cai</option>
                          <option value={39}>Long An</option>
                          <option value={40}>Nam Định</option>
                          <option value={41}>Nghệ An</option>
                          <option value={42}>Ninh Bình</option>
                          <option value={43}>Ninh Thuận</option>
                          <option value={44}>Phú Thọ</option>
                          <option value={45}>Phú Yên</option>
                          <option value={46}>Quảng Bình</option>
                          <option value={47}>Quảng Nam</option>
                          <option value={48}>Quảng Ngãi</option>
                          <option value={49}>Quảng Ninh</option>
                          <option value={50}>Quảng Trị</option>
                          <option value={51}>Sóc Trăng</option>
                          <option value={52}>Sơn La</option>
                          <option value={53}>Tây Ninh</option>
                          <option value={54}>Thái Bình</option>
                          <option value={55}>Thái Nguyên</option>
                          <option value={56}>Thanh Hóa</option>
                          <option value={57}>Thừa Thiên Huế</option>
                          <option value={58}>Tiền Giang</option>
                          <option value={59}>Trà Vinh</option>
                          <option value={60}>Tuyên Quang</option>
                          <option value={61}>Vĩnh Long</option>
                          <option value={62}>Vĩnh Phúc</option>
                          <option value={63}>Yên Bái</option>
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
                          value={1}
                          data-bind="billing.district"
                          data-address-type="district"
                          data-address-zone="billing"
                          data-select2-id="select2-data-billingDistrict"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value="" hidden="">
                            ---
                          </option>
                          <option
                            value={1}
                            selected=""
                            data-select2-id="select2-data-213-kvt1"
                          >
                            Thị xã Sơn Tây
                          </option>
                          <option value={2}>Quận Ba Đình</option>
                          <option value={3}>Quận Cầu Giấy</option>
                          <option value={4}>Quận Đống Đa</option>
                          <option value={5}>Quận Hà Đông</option>
                          <option value={6}>Quận Hai Bà Trưng</option>
                          <option value={7}>Quận Hoàn Kiếm</option>
                          <option value={8}>Quận Hoàng Mai</option>
                          <option value={9}>Quận Long Biên</option>
                          <option value={10}>Quận Tây Hồ</option>
                          <option value={11}>Quận Thanh Xuân</option>
                          <option value={12}>Huyện Ba Vì</option>
                          <option value={13}>Huyện Chương Mỹ</option>
                          <option value={14}>Huyện Đan Phượng</option>
                          <option value={15}>Huyện Đông Anh</option>
                          <option value={16}>Huyện Gia Lâm</option>
                          <option value={17}>Huyện Hoài Đức</option>
                          <option value={18}>Huyện Mê Linh</option>
                          <option value={19}>Huyện Mỹ Đức</option>
                          <option value={20}>Huyện Phú Xuyên</option>
                          <option value={21}>Huyện Phúc Thọ</option>
                          <option value={22}>Huyện Quốc Oai</option>
                          <option value={23}>Huyện Sóc Sơn</option>
                          <option value={24}>Huyện Thạch Thất</option>
                          <option value={25}>Huyện Thanh Oai</option>
                          <option value={26}>Huyện Thanh Trì</option>
                          <option value={27}>Huyện Thường Tín</option>
                          <option value={28}>Quận Bắc Từ Liêm</option>
                          <option value={29}>Huyện Ứng Hòa</option>
                          <option value={688}>Quận Nam Từ Liêm</option>
                        </select>
                      </div>
                    </div>
                    <div className="field field--show-floating-label ">
                      <div className="field__input-wrapper field__input-wrapper--select2">
                        <label htmlFor="billingWard" className="field__label">
                          Phường xã (tùy chọn)
                        </label>
                        <select
                          name="billingWard"
                          id="billingWard"
                          size={1}
                          className="field__input field__input--select select2-hidden-accessible"
                          value={3291}
                          data-bind="billing.ward"
                          data-address-type="ward"
                          data-address-zone="billing"
                          data-select2-id="select2-data-billingWard"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value="" hidden="">
                            ---
                          </option>
                          <option value={3290}>Phường Lê Lợi</option>
                          <option
                            value={3291}
                            selected=""
                            data-select2-id="select2-data-214-7qjb"
                          >
                            Phường Phú Thịnh
                          </option>
                          <option value={3292}>Phường Ngô Quyền</option>
                          <option value={3293}>Phường Quang Trung</option>
                          <option value={3294}>Phường Sơn Lộc</option>
                          <option value={3295}>Phường Xuân Khanh</option>
                          <option value={3296}>Xã Đường Lâm</option>
                          <option value={3297}>Phường Viên Sơn</option>
                          <option value={3298}>Xã Xuân Sơn</option>
                          <option value={3299}>Phường Trung Hưng</option>
                          <option value={3300}>Xã Thanh Mỹ</option>
                          <option value={3301}>Phường Trung Sơn Trầm</option>
                          <option value={3302}>Xã Kim Sơn</option>
                          <option value={3303}>Xã Sơn Đông</option>
                          <option value={3304}>Xã Cổ Đông</option>
                        </select>
                      </div>
                    </div>
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
                      name="note"
                      id="note"
                      className="field__input"
                      data-bind="note"
                      defaultValue={""}
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
                            name="shippingMethod"
                            id="shippingMethod-760173_0"
                            defaultValue="760173_0,40.000 VND"
                            data-bind="shippingMethod"
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
                            data-bind="paymentMethod"
                            defaultValue={618857}
                            data-provider-id={4}
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
                <div className="section__content" style={{marginTop:"1em"}}>
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
                            data-bind="paymentMethod"
                            defaultValue={618857}
                            data-provider-id={4}
                          />
                        </div>
                        <label
                          htmlFor="paymentMethod-618857"
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
              type="submit"
              className="btn btn-checkout spinner"
              data-bind-class="{'spinner--active': isSubmitingCheckout}"
              data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
            >
              <span className="spinner-label">ĐẶT HÀNG</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="spinner-loader"
              >
                <use href="#spinner" />
              </svg>
            </button>
            <a href="/cart" className="previous-link">
              <i className="previous-link__arrow">❮</i>
              <span className="previous-link__content">Quay về giỏ hàng</span>
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
          <h2 className="sidebar__title">Đơn hàng (4 sản phẩm)</h2>
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
                        <span className="visually-hidden">Ảnh sản phẩm</span>
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
                  <tbody>
                    <tr className="product">
                      <td className="product__image">
                        <div className="product-thumbnail-check-out">
                          <div
                            className="product-thumbnail__wrapper"
                            data-tg-static=""
                          >
                            <img
                              src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/srpg33k1-699x699.png?v=1687059618537"
                              alt=""
                              className="product-thumbnail__image"
                            />
                          </div>
                          <span className="product-thumbnail__quantity">2</span>
                        </div>
                      </td>
                      <th className="product__description">
                        <span className="product__description__name">
                          SEIKO 5 FIELD SPORTS STYLE SRPG33K1 – NAM – AUTOMATIC
                          (TỰ ĐỘNG) – MẶT SỐ 39.4MM, CHỐNG NƯỚC 10ATM, BỘ MÁY
                          IN-HOUSE
                        </span>
                      </th>
                      <td className="product__quantity visually-hidden">
                        <em>Số lượng:</em> 2
                      </td>
                      <td className="product__price">14.180.000₫</td>
                    </tr>
                    <tr className="product">
                      <td className="product__image">
                        <div className="product-thumbnail-check-out">
                          <div
                            className="product-thumbnail__wrapper"
                            data-tg-static=""
                          >
                            <img
                              src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/68-efv-550l-1avudf-1-699x699.png?v=1687058396797"
                              alt=""
                              className="product-thumbnail__image"
                            />
                          </div>
                          <span className="product-thumbnail__quantity">1</span>
                        </div>
                      </td>
                      <th className="product__description">
                        <span className="product__description__name">
                          CASIO EFV-550L-1AVUDF – NAM – QUARTZ (PIN) – MẶT SỐ
                          47MM, KÍNH CỨNG, CHỐNG NƯỚC 10ATM
                        </span>
                      </th>
                      <td className="product__quantity visually-hidden">
                        <em>Số lượng:</em> 1
                      </td>
                      <td className="product__price">3.529.000₫</td>
                    </tr>
                    <tr className="product">
                      <td className="product__image">
                        <div className="product-thumbnail-check-out">
                          <div
                            className="product-thumbnail__wrapper"
                            data-tg-static=""
                          >
                            <img
                              src="//bizweb.dktcdn.net/thumb/thumb/100/487/743/products/59-srz520p1-699x699.png?v=1687060768163"
                              alt=""
                              className="product-thumbnail__image"
                            />
                          </div>
                          <span className="product-thumbnail__quantity">1</span>
                        </div>
                      </td>
                      <th className="product__description">
                        <span className="product__description__name">
                          SEIKO SRZ520P1 – NỮ – QUARTZ (PIN) – MẶT SỐ 29MM, KÍNH
                          CỨNG, CHỐNG NƯỚC 5ATM
                        </span>
                      </th>
                      <td className="product__quantity visually-hidden">
                        <em>Số lượng:</em> 1
                      </td>
                      <td className="product__price">6.840.000₫</td>
                    </tr>
                  </tbody>
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
                      <div >
                        <div className="field__input-wrapper">
                          <label
                            htmlFor="reductionCode"
                            className="field__label"
                          >
                            Nhập mã giảm giá
                          </label>
                        </div>
                        <div style={{display:"flex"}}>
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
                        Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng thử lại
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
                  <caption className="visually-hidden">Tổng giá trị</caption>
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
                      <td className="total-line__price">24.549.000₫</td>
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
                          24.589.000₫
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                <button
                  type="submit"
                  className="btn btn-checkout spinner"
                  data-bind-class="{'spinner--active': isSubmitingCheckout}"
                  data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode"
                >
                  <span className="spinner-label">ĐẶT HÀNG</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="spinner-loader"
                  >
                    <use href="#spinner" />
                  </svg>
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
  </form>
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


    )
}

export default CheckOut