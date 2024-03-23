import { useEffect, useState } from "react";
import { useProductApi , useFavoriteApi} from "/@/apis";
import { renderProductTest } from "../product-template/index_test";

const Favorite = ()=>{

  const { favoriteApi } = useFavoriteApi();
  const [listProduct, setListProduct] = useState<any[]>();

  const handleFetchProduct = async () => {
    try {
      const res = await favoriteApi.getAll({ page: 1, pageSize: 15 });
      setListProduct(res.data.items);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);
    return(
        <>
        <section className="page">
  <div className="container container--wishlist">
    <div className="content-page rte ">
      <h1 className="title-page d-none">
        <span>Sản phẩm yêu thích</span>
      </h1>
      <div id="list-favorite">
        <div className="list-favorite-right" data-type="wishlist">
          <div className="list-favorite-main">
            <div className="list-favorite-list row row-fix">
            {listProduct && renderProductTest(listProduct,setListProduct,5)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default Favorite