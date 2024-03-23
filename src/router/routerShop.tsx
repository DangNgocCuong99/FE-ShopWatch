import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { transformRouteShop } from "./hook"
import Layout from "../component/layout/Layout";
import { useEffect } from "react";




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