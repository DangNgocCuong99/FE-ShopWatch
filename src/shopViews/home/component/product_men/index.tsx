import { useEffect, useState } from "react";
import { useProductApi } from "/@/apis";
import { transformRoute } from "/@/router/hook"
import { renderProduct } from "/@/shopViews/product-template"
import { renderProductTest } from "/@/shopViews/product-template/index_test";
import './index.scss'

const ProductMen = () => {
  const { productApi } = useProductApi();
  const [listProduct, setListProduct] = useState<any[]>();

  const handleFetchProduct = async () => {
    try {
      const res = await productApi.getAll({ page: 1, pageSize: 12 ,gioiTinh:"nam"});
      setListProduct(res.data.items);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);

    return (
        <div id="product-men">
<section className="section_product section_product1">
  <div className="container">
    <div className="block-background">
      <div className="group_title_index">
        <h3 className="title">
          <img
            title="title"
            width={60}
            height={60}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
            data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
            data-was-processed="true"
          />
          <a className="title-name" href="dong-ho-nam" title="Đồng hồ nam">
            Đồng hồ nam
          </a>
        </h3>

      </div>
      <div className="row">
        <div className="col-lg-4 col-xl-3 col-sm-4 col-12 order-2 order-md-1">
          <a className="image-effect" href="/collections/all" title="Banner">
            <img
              width={667}
              height={1000}
              className="lazyload loaded"
              src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/image_product1.png?1696125396195"
              data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/image_product1.png?1696125396195"
              alt="Banner"
              data-was-processed="true"
            />
          </a>
          <div className="trending">
            <div className="title-treding">Thương hiệu ưa chuộng nhất</div>
            <div className="thumb-treding">
              <a title="Citizen" href="/search/?query=vendor:Citizen">
                Citizen
              </a>
              <a title="Orien" href="/search/?query=vendor:Orien">
                Orien
              </a>
              <a title="Casio" href="/search/?query=vendor:Casio">
                Casio
              </a>
              <a title="Doxa" href="/search/?query=vendor:Doxa">
                Doxa
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-9 col-sm-8 order-1 order-md-2">
          <div
            className="product-block product-swiper1 swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-multirow"
            style={{ cursor: "grab" }}
          >
            <div
              className="swiper-wrapper"
              style={{display:"inline-flex", transform: "translate3d(0px, 0px, 0px)" }}
            >
                <div className="row row-fix">
              {listProduct && renderProductTest(listProduct,setListProduct,4)}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default ProductMen