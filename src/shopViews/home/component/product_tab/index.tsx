import { renderProduct } from "/@/shopViews/product-template"
import './index.css'

const ProductTab = ()=>{
    return (
        <>
        <section className="section_product_tab ">
  <div className="container">
    <div className="block-product block-background">
      <div className="row">
        <div
          className="col-12 e-tabs not-dqtab ajax-tab-1"
          data-section="ajax-tab-1"
          data-view="grid_4"
        >
          <ul className="tabs tabs-title tab-desktop ajax clearfix">
            <li
              className="tab-link has-content current"
              data-tab="tab-1"
              data-url="san-pham-moi"
            >
              <span title="Sản phẩm mới">
                <img
                  width={60}
                  height={60}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_allpro1.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_1_allpro1.png?1696125396195"
                  alt="Sản phẩm mới"
                  data-was-processed="true"
                />
                Sản phẩm mới
              </span>
            </li>
            <li
              className="tab-link has-content"
              data-tab="tab-2"
              data-url="san-pham-noi-bat"
            >
              <span title="Sản phẩm nổi bật">
                <img
                  width={60}
                  height={60}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_allpro1.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_2_allpro1.png?1696125396195"
                  alt="Sản phẩm nổi bật"
                  data-was-processed="true"
                />
                Sản phẩm nổi bật
              </span>
            </li>
            <li
              className="tab-link has-content"
              data-tab="tab-3"
              data-url="san-pham-ban-chay"
            >
              <span title="Sản phẩm bán chạy">
                <img
                  width={60}
                  height={60}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_allpro1.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/title_image_3_allpro1.png?1696125396195"
                  alt="Sản phẩm bán chạy"
                  data-was-processed="true"
                />
                Sản phẩm bán chạy
              </span>
            </li>
          </ul>
          <div className="tab-1 tab-content current">
            <div className="row row-fix">
              {renderProduct(5)}
            </div>
            <div className="text-center no-padding">
              <a className="see-more" title="Xem tất cả" href="/san-pham-moi">
                Xem tất cả
              </a>
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

export default ProductTab