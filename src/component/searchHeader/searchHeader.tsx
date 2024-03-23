import { useCallback, useEffect, useState } from "react";

import { useProductApi } from "/@/apis";
import "./index.css";
import { IProduct } from "/@/apis/productApi/types";
import { formattedNumber } from "/@/utils/stringUtil";

const SearchHeader = () => {
  const [textSearch, setTextSearch] = useState<string>();

  const { productApi } = useProductApi();
  const [listProduct, setListProduct] = useState<IProduct[]>();

  const handleGetProduct = async (name: string) => {
    try {
      const res = (await productApi.getAll({
        page: 1,
        pageSize: 5,
        name,
      })) as { data: { items: IProduct[] } };
      setListProduct(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-header">
        <div className="search-smart">
          <form
            action="/search"
            method="get"
            className="header-search-form input-group search-bar"
            role="search"
          >
            <input
              className="input-group-field auto-search search-auto form-control"
              placeholder="ban muon tim gi?"
              autoComplete="off"
              value={textSearch}
              onChange={(e) => {
                setTextSearch(e.target.value), handleGetProduct(e.target.value);
              }}
            />
            {/* <input type="hidden" name="type" value="product" /> */}
            <button
              // type="submit"
              className="btn icon-fallback-text"
              aria-label="Tìm kiếm"
              title="Tìm kiếm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>

            {textSearch &&  listProduct?.length && (
              <div className="search-suggest open">
                <div className="list-search-suggest">
                  <div
                    className="list-search list-search-style active"
                    id="tab-search-1"
                  >
                    {listProduct?.length &&
                      listProduct.map((product, index) => (
                        <div className="product-smart" key={index}>
                          <a
                            className="image_thumb"
                            href={"/chi-tiet-san-pham/" + product._id}
                          >
                            <img
                              width={370}
                              height={480}
                              className="lazyload loaded"
                              src={product.images[0]}
                            />
                          </a>
                          <div className="product-info">
                            <h3 className="product-name line-clamp line-clamp-1">
                              <a
                                href={"/chi-tiet-san-pham/" + product._id}
                              >
                                {product?.name} – {product?.gioiTinh} –{" "}
                                {product?.may}– MẶT SỐ {product?.duongKinhMatSo}{" "}
                                MM, KÍNH {product?.kinh}
                              </a>
                            </h3>
                            <div className="price-box">
                              <span className="price">
                                {formattedNumber(product.discountedPrice)}₫
                              </span>
                              <span className="compare-price">
                                {formattedNumber(product.originalPrice)}₫
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                    <a
                      className="see-more"
                      // href="/search?q=name:(*ag*)&type=product"
                      title="Xem tất cả"
                    >
                      Xem tất cả
                    </a>
                  </div>
                  <div
                    className="list-search2 list-search-style"
                    id="tab-search-2"
                  >
                    <span />
                  </div>
                </div>
              </div>
            )}

            <div className="search-suggest">
              <ul className="smart-search-title">
                <li data-tab="#tab-search-1" className="active">
                  <a href="javascript:void(0)" title="Sản phẩm">
                    Sản phẩm
                  </a>
                </li>
                <li data-tab="#tab-search-2">
                  <a href="javascript:void(0)" title="Tin tức">
                    Tin tức
                  </a>
                </li>
              </ul>
              <div className="list-search-suggest">
                <div
                  className="list-search list-search-style active"
                  id="tab-search-1"
                ></div>
                <div
                  className="list-search2 list-search-style"
                  id="tab-search-2"
                ></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchHeader;
