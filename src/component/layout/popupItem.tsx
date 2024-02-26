import { useEffect, useState } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { selectProductPopup } from "/@/stores/popupItem/popupReduce";
import { IProduct } from "/@/apis/productApi/types";
import { selectCart } from "/@/stores/cart/cartReduce";
const PopupItem = ()=>{
    const [mode,setMode] = useState(false)
    const [product, setProduct] = useState<IProduct>()
    const popupStore = useSelector(selectProductPopup)
    const cartStore = useSelector(selectCart)
    useEffect(()=>{
        if(popupStore.product){
            setProduct(popupStore.product)
            setMode(true)
        }
    },[popupStore])
    return (
        <>
        {mode && (
                   <div>
                   <div className={`backdrop__body-backdrop___1rvky ${mode ? "active" :null}`}></div>
                     <div id="popup-cart-mobile" className={`popup-cart-mobile ${mode ? "active" :null}`}>
                 <div className="header-popcart">
                   <div className="top-cart-header">
                     <span>
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         height="682.66669pt"
                         viewBox="-21 -21 682.66669 682.66669"
                         width="682.66669pt"
                       >
                         <path d="m322.820312 387.933594 279.949219-307.273438 36.957031 33.671875-314.339843 345.023438-171.363281-162.902344 34.453124-36.238281zm297.492188-178.867188-38.988281 42.929688c5.660156 21.734375 8.675781 44.523437 8.675781 68.003906 0 148.875-121.125 270-270 270s-270-121.125-270-270 121.125-270 270-270c68.96875 0 131.96875 26.007812 179.746094 68.710938l33.707031-37.113282c-58.761719-52.738281-133.886719-81.597656-213.453125-81.597656-85.472656 0-165.835938 33.285156-226.273438 93.726562-60.441406 60.4375-93.726562 140.800782-93.726562 226.273438s33.285156 165.835938 93.726562 226.273438c60.4375 60.441406 140.800782 93.726562 226.273438 93.726562s165.835938-33.285156 226.273438-93.726562c60.441406-60.4375 93.726562-140.800782 93.726562-226.273438 0-38.46875-6.761719-75.890625-19.6875-110.933594zm0 0" />
                       </svg>
                       Mua hàng thành công
                     </span>
                   </div>
                   <div className="media-content bodycart-mobile">
                     <div className="thumb-1x1">
                       <img
                         src={product?.images[0]}
                         alt="G-SHOCK GA-2000-1A2DR – NAM – KÍNH CỨNG – QUARTZ (PIN) – MẶT SỐ 51.2MM, BỘ BẤM GIỜ, CHỐNG NƯỚC 20ATM"
                       />
                     </div>
                     <div className="body_content">
                       <h4 className="product-title">
                         {product?.name}
                       </h4>
                       <div className="product-new-price">
                         <b>{product?.discountedPrice}</b>
                         <span />
                       </div>
                     </div>
                   </div>
                   <a className="noti-cart-count" href="/cart" title="Giỏ hàng">
                     {" "}
                     Giỏ hàng của bạn hiện có <span className="count_item_pr">{cartStore.listProduct?.length || 0}</span> sản
                     phẩm{" "}
                   </a>
                   <a title="Đóng" className="cart_btn-close iconclose" onClick={()=>setMode(false)}>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink"
                       version="1.1"
                       x="0px"
                       y="0px"
                       viewBox="0 0 512.001 512.001"
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
                     </svg>
                   </a>
                   <div className="bottom-action">
                     <div className="cart_btn-close tocontinued">Tiếp tục mua hàng</div>
                     <a href="/checkout" className="checkout">
                       Thanh toán ngay
                     </a>
                   </div>
                 </div>
               </div>
               
                       </div>
        )}
        </>
 
    )
}

export default PopupItem