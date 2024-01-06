import FlashSale from "./component/FlashSale/FlashSale"
import About from "./component/about"
import Banner from "./component/banner"
import Brand from "./component/brand"
import Coupon from "./component/coupon"
import Poster from "./component/poster/Poster"
import ProductMen from "./component/product_men"
import ProductTab from "./component/product_tab"
import ProductWomen from "./component/product_women"

const Home = ()=>{
    return(
        <>
            <Poster/>
            <FlashSale/>
            <Coupon/>
            <ProductTab/>
            <About/>
            <ProductMen/>
            <Banner />
            <ProductWomen/>
            <Brand/>
         </>
    )
}

export default Home