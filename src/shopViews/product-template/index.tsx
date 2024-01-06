export const renderProduct = (column: 4|5, showSolded ?: boolean)=>{
const data = [1,2,3,4,5,6,7,8,9,0,2,2,2,2,2]
 return data.map((i)=>(
 <div className={column === 5 ? "col-xl-20 col-lg-3 col-sm-4 col-6 col-fix":"col-6 col-md-4 col-xl-3 col-fix"}>
 <form
   action="/cart/add"
   method="post"
   className="variants product-action"
   data-cart-form=""
   data-id="product-actions-31449180"
   encType="multipart/form-data"
 >
   <div className="product-thumbnail">
     <a
       className="image_thumb scale_hover"
       href="/chi-tiet-san-pham/asdasd"
       title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
     >
       <img
         width={234}
         height={234}
         className="lazyload image1 loaded"
         src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
         data-src="//bizweb.dktcdn.net/thumb/large/100/487/743/products/t063-617-36-037-00-699x699.png?v=1687058742513"
         alt="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
         data-was-processed="true"
       />
     </a>
     <span className="smart">
       Giảm
       <br />
       20%
     </span>
     <div className="vendoritem">
       <img
         width={60}
         height={60}
         className="lazyload loaded"
         src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
         data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/vendorimg_15.jpg?1696125396195"
         alt="TISSOT"
         data-was-processed="true"
       />
     </div>
     <input
       className="hidden"
       type="hidden"
       name="variantId"
       defaultValue={91048217}
     />
     <div className="action">
       <button
         className="btn-cart btn-views add_to_cart "
         title="Mua ngay"
       >
         Mua ngay
       </button>
       <a
         title="Xem nhanh"
         href="/chi-tiet-san-pham/asdasd"
         data-handle="tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
         className="quick-view btn-views"
       >
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512"
         >
           <path
             fill="#fff"
             d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
           />
         </svg>
       </a>
       <a
         href="javascript:void(0)"
         className="setWishlist btn-wishlist btn-views"
         data-wish="tissot-tradition-t063-617-36-037-00-nam-quartz-pin-mat-so-42-mm-chronograph-kinh-sapphire"
         tabIndex={0}
         title="Thêm vào yêu thích"
       >
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512"
         >
           <path
             fill="#ffffff"
             d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
           />
         </svg>
       </a>
     </div>
     <div className="tag-km">
       <span>
         <img
           alt="Mới"
           width={60}
           height={60}
           className="lazyload loaded"
           src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
           data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_tag.png?1696125396195"
           data-was-processed="true"
         />{" "}
         Mới
       </span>
       <span>
         <img
           alt="Bán chạy"
           width={60}
           height={60}
           className="lazyload loaded"
           src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
           data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_tag.png?1696125396195"
           data-was-processed="true"
         />{" "}
         Bán chạy
       </span>
     </div>
   </div>
   <div className="product-info">
    {showSolded && (
   <div className="elio-productcount">
   <div className="countdown">
     <div className="line">
       <span style={{ width: "50%" }}> </span>
     </div>
     <span className="title">Đã bán 10</span>
   </div>
 </div>

    )}


     <h3 className="product-name">
       <a
         className="line-clamp line-clamp-2"
         href="/chi-tiet-san-pham/asdasd"
         title="TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN) – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE"
       >
         TISSOT TRADITION T063.617.36.037.00 – NAM – QUARTZ (PIN)
         – MẶT SỐ 42 MM, CHRONOGRAPH, KÍNH SAPPHIRE
       </a>
     </h3>
     <div className="price-box">
       14.700.000₫
       <span className="compare-price">18.300.000₫</span>
     </div>
     <div className="pro-promo line-clamp line-clamp-2">
       Miễn phí thay pin trọn đời cho tất cả khách hàng
     </div>
   </div>
 </form>
</div>))
    
}