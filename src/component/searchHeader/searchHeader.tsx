import { useCallback, useEffect, useState } from "react";

import { useProductApi } from "/@/apis";
import "./index.css";
import { IProduct } from "/@/apis/productApi/types";
import { Select, message } from "antd";

const SearchHeader = () => {
  const [placeholder, setPlaceholder] = useState("");
  const delay = 50;
  const pause = 1000;

  const { productApi } = useProductApi();
  const [listProduct, setListProduct] =
    useState<{ label: string; value: string }[]>();

  const handleSetPlaceholder = useCallback(() => {
    const text = [
      "Bạn muốn tìm gì ?",
      "Đồng hồ sịn 18K",
      "Đồng hồ CASIO G-SHOCK",
    ];
    let cursorPosition = 0;
    let index = 0;

    let place = "";
    const typeString = () => {
      const currentText = text[index];

      if (cursorPosition < currentText.length) {
        place = place + currentText[cursorPosition];
        setPlaceholder(place);
        cursorPosition++;
        setTimeout(typeString, delay);
      } else {
        setTimeout(deleteString, pause);
      }
    };

    const deleteString = () => {
      if (place.length > 0) {
        place = place.slice(0, -1);
        setPlaceholder(place);
        setTimeout(deleteString, delay);
      } else {
        index = (index + 1) % text.length;
        cursorPosition = 0;
        setTimeout(typeString, delay);
      }
    };

    setTimeout(typeString, delay);

    return () => {
      clearTimeout(undefined);
    };
  }, []);

  useEffect(() => {
    handleSetPlaceholder();
  }, [handleSetPlaceholder]);

  const handleGetProduct = async (name: string) => {
    try {
      const res = (await productApi.getAll({
        page: 1,
        pageSize: 10,
        name,
      })) as { data: { items: IProduct[] } };
      setListProduct(
        res.data.items.map((val, i) => {
          return {
            label: val.name,
            value: val._id,
          };
        })
      );
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
              type="text"
              name="query"
              required={false}
              className="input-group-field auto-search search-auto form-control"
              placeholder={placeholder}
              autoComplete="off"
              onChange={(e) => handleGetProduct(e.target.value)}
            />
            <input type="hidden" name="type" value="product" />
            <button
              type="submit"
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

            <div className="search-suggest open">
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
    <div className="list-search list-search-style active" id="tab-search-1">
      <div className="title-search">Có 5 sản phẩm</div>
      <div className="product-smart">
        <a
          className="image_thumb"
          href="/fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
          title="FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
        >
          <img
            width={370}
            height={480}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/me3227-699x699.png?v=1687060277060"
            data-src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/me3227-699x699.png?v=1687060277060"
            alt="FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
            data-was-processed="true"
          />
        </a>
        <div className="product-info">
          <h3 className="product-name line-clamp line-clamp-1">
            <a
              href="/fossil-heritage-me3227-unisex-nam-nu-automatic-tu-dong-mat-so-38mm-kinh-cung-chong-nuoc-5atm"
              title="FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) – MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM"
            >
              FOSSIL HERITAGE ME3227 – UNISEX (NAM/NỮ) – AUTOMATIC (TỰ ĐỘNG) –
              MẶT SỐ 38MM, KÍNH CỨNG, CHỐNG NƯỚC 5ATM
            </a>
          </h3>
          <div className="price-box">
            <span className="price">8.590.000₫</span>
            <span className="compare-price">9.323.000₫</span>
          </div>
        </div>
      </div>
      <div className="product-smart">
        <a
          className="image_thumb"
          href="/fossil-heritage-me3228-unisex-nam-nu-automatic-co-mat-so-38mm-tru-cot-40-gio-chong-nuoc-5atm"
          title="FOSSIL HERITAGE ME3228 – UNISEX (NAM/NỮ) – AUTOMATIC (CƠ) – MẶT SỐ 38MM, TRỮ CÓT 40 GIỜ, CHỐNG NƯỚC 5ATM"
        >
          <img
            width={370}
            height={480}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/me3228-699x699.png?v=1687060397727"
            data-src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/me3228-699x699.png?v=1687060397727"
            alt="FOSSIL HERITAGE ME3228 – UNISEX (NAM/NỮ) – AUTOMATIC (CƠ) – MẶT SỐ 38MM, TRỮ CÓT 40 GIỜ, CHỐNG NƯỚC 5ATM"
            data-was-processed="true"
          />
        </a>
        <div className="product-info">
          <h3 className="product-name line-clamp line-clamp-1">
            <a
              href="/fossil-heritage-me3228-unisex-nam-nu-automatic-co-mat-so-38mm-tru-cot-40-gio-chong-nuoc-5atm"
              title="FOSSIL HERITAGE ME3228 – UNISEX (NAM/NỮ) – AUTOMATIC (CƠ) – MẶT SỐ 38MM, TRỮ CÓT 40 GIỜ, CHỐNG NƯỚC 5ATM"
            >
              FOSSIL HERITAGE ME3228 – UNISEX (NAM/NỮ) – AUTOMATIC (CƠ) – MẶT SỐ
              38MM, TRỮ CÓT 40 GIỜ, CHỐNG NƯỚC 5ATM
            </a>
          </h3>
          <div className="price-box">
            <span className="price">8.590.000₫</span>
          </div>
        </div>
      </div>
      <div className="product-smart">
        <a
          className="image_thumb"
          href="/saga-53442-rgbnrg-2a-nu-quartz-pin-day-kim-loai-mat-so-24mm"
          title="SAGA 53442-RGBNRG-2A – NỮ – QUARTZ (PIN) – DÂY KIM LOẠI – MẶT SỐ 24MM"
        >
          <img
            width={370}
            height={480}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/53442-rgbnrg-2a-699x699.png?v=1687060668267"
            data-src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/53442-rgbnrg-2a-699x699.png?v=1687060668267"
            alt="SAGA 53442-RGBNRG-2A – NỮ – QUARTZ (PIN) – DÂY KIM LOẠI – MẶT SỐ 24MM"
            data-was-processed="true"
          />
        </a>
        <div className="product-info">
          <h3 className="product-name line-clamp line-clamp-1">
            <a
              href="/saga-53442-rgbnrg-2a-nu-quartz-pin-day-kim-loai-mat-so-24mm"
              title="SAGA 53442-RGBNRG-2A – NỮ – QUARTZ (PIN) – DÂY KIM LOẠI – MẶT SỐ 24MM"
            >
              SAGA 53442-RGBNRG-2A – NỮ – QUARTZ (PIN) – DÂY KIM LOẠI – MẶT SỐ
              24MM
            </a>
          </h3>
          <div className="price-box">
            <span className="price">5.920.000₫</span>
            <span className="compare-price">7.300.000₫</span>
          </div>
        </div>
      </div>
      <div className="product-smart">
        <a
          className="image_thumb"
          href="/op-9908ags-d-88-nam-kinh-sapphire-automatic-tu-dong-day-kim-loai"
          title="OP 9908AGS-D-88 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG) – DÂY KIM LOẠI"
        >
          <img
            width={370}
            height={480}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/91-9908ags-d-88-699x699.png?v=1687062459220"
            data-src="//bizweb.dktcdn.net/thumb/compact/100/487/743/products/91-9908ags-d-88-699x699.png?v=1687062459220"
            alt="OP 9908AGS-D-88 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG) – DÂY KIM LOẠI"
            data-was-processed="true"
          />
        </a>
        <div className="product-info">
          <h3 className="product-name line-clamp line-clamp-1">
            <a
              href="/op-9908ags-d-88-nam-kinh-sapphire-automatic-tu-dong-day-kim-loai"
              title="OP 9908AGS-D-88 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG) – DÂY KIM LOẠI"
            >
              OP 9908AGS-D-88 – NAM – KÍNH SAPPHIRE – AUTOMATIC (TỰ ĐỘNG) – DÂY
              KIM LOẠI
            </a>
          </h3>
          <div className="price-box">
            <span className="price">6.870.000₫</span>
            <span className="compare-price">8.200.000₫</span>
          </div>
        </div>
      </div>
      <a
        className="see-more"
        href="/search?q=name:(*ag*)&type=product"
        title="Xem tất cả"
      >
        Xem tất cả
      </a>
    </div>
    <div className="list-search2 list-search-style" id="tab-search-2">
      <span />
    </div>
  </div>
</div>


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
