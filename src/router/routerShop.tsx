import { Route, Routes } from "react-router-dom"
import { transformRouteShop } from "./hook"
import Layout from "../component/layout/Layout";

const ShopRouter  = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {transformRouteShop()}
            </Route> 
        </Routes>
    )
}

export default ShopRouter