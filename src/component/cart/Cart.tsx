import { useEffect, useState } from "react";
import "./index.css";
import { selectCart, setListProduct } from "/@/stores/cart/cartReduce";
import { useDispatch ,useSelector} from "react-redux";
import { useCartApi } from "/@/apis";
import { formattedNumber } from "/@/utils/stringUtil";

const Cart = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector(selectCart)
  const {cartApi} = useCartApi()
  const token = localStorage.getItem("token");
  const [infoCart , setInfoCart] = useState({price:0,quantity:0})

    useEffect(()=>{
      handleGetDataCart()
    },[token])

    useEffect(()=>{
      if(
        cartStore.listProduct?.length > 0 
      ){
        handleSumCart()
      }
    },[cartStore])

    const handleGetDataCart =async () => {
      const res = await cartApi.getAll()
      dispatch(setListProduct(res.data as unknown as any[]))
    }

    const handleSumCart = () =>{
      let price = 0
      let quantity = 0 
      for (let index = 0; index < cartStore.listProduct.length; index++) {
        price += cartStore.listProduct[index].discountedPrice * cartStore.listProduct[index].quantity   
        quantity += cartStore.listProduct[index].quantity    
      }
      setInfoCart({price:price,quantity:quantity})
    }

    const handleAddToCart = async(id:string)=>{
          try {
              await cartApi.create({productId:id, quantity:1})
              handleGetDataCart()
          } catch (error) {
            
          }
    }

    const handleRemoveCart = async(id:string)=>{
      try {
        await cartApi.removeOneProduct(id)
        handleGetDataCart()
      
      } catch (error) {
        
      }
    }

    const handleRemoveAllCart = async(id:string)=>{
      try {
        await cartApi.removeAllProduct(id)
        handleGetDataCart()
      
      } catch (error) {
        
      }
    }
  const handleMapCart = () => {
    // lay du lieu tu store
    const result = cartStore.listProduct?.map((i,key)=>{
        return(
            <div className="ajaxcart__row" key={key}>
          <div className="ajaxcart__product cart_product" data-line="1">
            <a
              href="/chi-tiet-san-pham/asdasd"
              className="ajaxcart__product-image cart_image"
              title={i.name}
            >
              <img
                width="80"
                height="80"
                src={i.images[0]}
                alt={i.name}
              />
            </a>
            <div className="grid__item cart_info">
              <div className="ajaxcart__product-name-wrapper cart_name">
                <a
                  href="/chi-tiet-san-pham/asdasd"
                  className="ajaxcart__product-name h4"
                  title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
                >
                  {i.name}
                </a>
                <a
                  onClick={()=>handleRemoveAllCart(i._id)}
                  className="cart__btn-remove remove-item-cart ajaxifyCart--remove"
                  href="javascript:;"
                  data-line="1"
                >
                  Xóa
                </a>
              </div>
              <div className="grid">
                <div className="grid__item one-half cart_select cart_item_name">
                  <label className="cart_quantity">Số lượng</label>
                  <div className="ajaxcart__qty input-group-btn">
                    <button
                      type="button"
                      className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count"
                      data-id=""
                      data-qty="0"
                      data-line="1"
                      aria-label="-"
                      onClick={()=>handleRemoveCart(i._id)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name="updates[]"
                      className="ajaxcart__qty-num number-sidebar"
                      maxLength={3}
                      value={i.quantity}
                      min="0"
                      data-id=""
                      data-line="1"
                      aria-label="quantity"
                      pattern="[0-9]*"
                      disabled
                    />
                    <button
                      type="button"
                      className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"
                      data-id=""
                      data-line="1"
                      data-qty="2"
                      aria-label="+"
                      onClick={()=>handleAddToCart(i._id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="grid__item one-half text-right cart_prices">
                  <span className="cart-price">{formattedNumber(i.discountedPrice)}₫</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    })
    return result
  };

  return (
    <>
      <li className="header-cart block-cart">
        <a className="icon" title="Giỏ hàng">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 40 40"
          >
            <defs></defs>
            <g id="ic-cart">
              <path
                id="shopping-bag"
                className="cls-1"
                d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z"
              ></path>
            </g>
          </svg>
          <span style={{ whiteSpace: "nowrap"}} className="count count_item_pr">{infoCart.quantity> 99 ? "99+" : infoCart.quantity}</span>
        </a>
        <div className="top-cart-content">
          <div className="CartHeaderContainer">
            <form
              action="/cart"
              method="post"
              noValidate={undefined}
              className="cart ajaxcart cartheader"
            >
              <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">
                {handleMapCart()}
              </div>

              <div className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                <div className="ajaxcart__subtotal">
                  <div className="cart__subtotal">
                    <div className="cart__col-6">Tổng tiền:</div>
                    <div className="text-right cart__totle">
                      <span className="total-price">{formattedNumber(infoCart.price)}₫</span>
                    </div>
                  </div>
                </div>
                <div className="cart__btn-proceed-checkout-dt">
                  <button
                    onClick={() => {window.location.href="/check-out"}}
                    type="button"
                    className="button btn btn-default cart__btn-proceed-checkout"
                    id="btn-proceed-checkout"
                    title="Thanh toán"
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </li>
    </>
  );
};

export default Cart;
