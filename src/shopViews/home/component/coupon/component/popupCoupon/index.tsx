import './index.scss'
import { IVoucher } from '/@/apis/voucherApi/types';
const PopupCoupon = ({isShow, handleClose,voucher}:{isShow:boolean,handleClose : ()=> void,voucher:IVoucher}) => {
  return (
    <div id='popup-coupon-body'>
     {isShow ? (<div className="backdrop__body-backdrop___1rvky active" onClick={handleClose}/>):null} 
      <div className={isShow ? "popup-coupon active" : "popup-coupon"} style={{}}>

<div className="content">
  <div className="title">Thông tin voucher</div>
  <a onClick={handleClose} className="close-popup">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512.001 512.001"
      // style={{ enableBackground: "new 0 0 512.001 512.001" }}
      xmlSpace="preserve"
    >
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z" />{" "}
        </g>{" "}
      </g>{" "}
    </svg>{" "}
  </a>
  <ul>
    <li>
      <span>Mã giảm giá:</span>
      <span className="code">{voucher.code}</span>
    </li>
    <li>
      <span>Ngày hết hạn:</span>
      <span className="time">Vô thời hạn</span>
    </li>
    <li>
      <span>Mô tả:</span>
      <span className="dieukien">
        {voucher.moTa}
      </span>
    </li>
  </ul>
</div>
</div>
    </div>
 
  );
};

export default PopupCoupon
