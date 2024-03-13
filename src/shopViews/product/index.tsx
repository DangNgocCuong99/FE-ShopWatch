import { useEffect, useState } from "react";
import { renderProduct } from "../product-template";
import "./index.css";
import { useProductApi } from "/@/apis";
import { renderProductTest } from "../product-template/index_test";

const Product = ()=>{
  const { productApi } = useProductApi();
  const [listProduct, setListProduct] = useState<any[]>();

  const handleFetchProduct = async () => {
    try {
      const res = await productApi.getAll({ page: 1, pageSize: 10000 });
      setListProduct(res.data.items);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchProduct();
  }, []);
    return(
        <div className="container">
  <div className="row">
    <aside className="dqdt-sidebar sidebar col-lg-3 col-12">
      <div className="aside-content aside-content-menu">
        <div className="title-head-col">
          <img
            alt="title"
            src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/wristwatch.png?1696125396195"
          />
          <span>Danh mục sản phẩm</span>
        </div>
        <nav className="nav-category" style={{display:"block"}}>
          <ul className="nav navbar-pills">
            <li className="nav-item  relative">
              <a
                title="Thương hiệu nổi bật"
                className="nav-link"
                href="/thuong-hieu"
              >
                Thương hiệu nổi bật
              </a>
            </li>
            <li className="nav-item active relative">
              <a title="Đồng hồ nam" className="nav-link" href="/dong-ho-nam">
                Đồng hồ nam
              </a>
            </li>
            <li className="nav-item  relative">
              <a title="Đồng hồ nữ" className="nav-link" href="/dong-ho-nu">
                Đồng hồ nữ
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="filter-content">
        <div className="title-head-col">
          Bộ lọc sản phẩm
          <span>Giúp bạn tìm sản phẩm nhanh hơn</span>
        </div>
        <div className="filter-container">
          <div className="col_title">
            {/* <div
              className="filter-container__selected-filter"
              style={{ display: "block" }}
            >
              <div className="filter-container__selected-filter-header clearfix">
                <span className="filter-container__selected-filter-header-title">
                  Bạn chọn
                </span>
              </div>
              <div className="filter-container__selected-filter-list">
                <a
                  href="javascript:void(0)"
                  // onclick="clearAllFiltered()"
                  className="filter-container__clear-all"
                >
                  Bỏ hết{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width={10}
                    height={10}
                    x={0}
                    y={0}
                    viewBox="0 0 365.696 365.696"
                    // style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                    className=""
                  >
                    <g>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
                        fill="#ffffff"
                        data-original="#fff"
                        style={{}}
                        className=""
                      />
                    </g>
                  </svg>
                </a>
                <ul>
                  <li
                    className="filter-container__selected-filter-item"
                    // htmlFor="filter-orient"
                  >
                    <a
                      href="javascript:void(0)"
                      // onclick="removeFilteredItem('filter-orient')"
                    >
                      <i className="fa fa-close" />
                      Orient
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* Lọc giá */}
          <aside className="aside-item filter-price">
            <div className="title-head">Chọn mức giá</div>
            <div className="aside-content filter-group content_price">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="1-000-000d"
                      htmlFor="filter-duoi-1-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-duoi-1-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="Dưới 1.000.000đ"
                        defaultValue="(<1000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Dưới 1 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="2-000-000d"
                      htmlFor="filter-1-000-000d-2-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-1-000-000d-2-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="1.000.000đ - 2.000.000đ"
                        defaultValue="(>=1000000 AND <=2000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Từ 1 triệu - 2 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="3-000-000d"
                      htmlFor="filter-2-000-000d-3-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-2-000-000d-3-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="2.000.000đ - 3.000.000đ"
                        defaultValue="(>=2000000 AND <=3000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Từ 2 triệu - 3 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="5-000-000d"
                      htmlFor="filter-3-000-000d-5-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-3-000-000d-5-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="3.000.000đ - 5.000.000đ"
                        defaultValue="(>=3000000 AND <=5000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Từ 3 triệu - 5 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="10-000-000d"
                      htmlFor="filter-5-000-000d-10-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-5-000-000d-10-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="5.000.000đ - 10.000.000đ"
                        defaultValue="(>=5000000 AND <=10000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Từ 5 triệu - 10 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="20-000-000d"
                      htmlFor="filter-10-000-000d-20-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-10-000-000d-20-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="10.000.000đ - 20.000.000đ"
                        defaultValue="(>=10000000 AND <=20000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Từ 10 triệu - 20 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="50-000-000d"
                      htmlFor="filter-20-000-000d-50-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-20-000-000d-50-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="20.000.000đ - 50.000.000đ"
                        defaultValue="(>=20000000 AND <=50000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Từ 20 triệu - 50 triệu
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label
                      data-filter="50-000-000d"
                      htmlFor="filter-tren50-000-000d"
                    >
                      <input
                        type="checkbox"
                        id="filter-tren50-000-000d"
                        data-group="Khoảng giá"
                        data-field="price_min"
                        data-text="Trên 50.000.000đ"
                        defaultValue="(>50000000)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Trên 50 triệu
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* End Lọc giá */}
          {/* Lọc Loại */}
          {/* End Lọc Loại */}
          {/* Lọc Thương hiệu */}
          <aside className="aside-item filter-vendor f-left">
            <div className="aside-title">
              <h2 className="title-filter title-head margin-top-0">
                <span>Thương hiệu</span>
              </h2>
            </div>
            <div className="aside-content margin-top-0 filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-casio">
                      <input
                        type="checkbox"
                        id="filter-casio"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="Casio"
                        defaultValue="(Casio)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Casio
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-citizen">
                      <input
                        type="checkbox"
                        id="filter-citizen"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="Citizen"
                        defaultValue="(Citizen)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Citizen
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-doxa">
                      <input
                        type="checkbox"
                        id="filter-doxa"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="Doxa"
                        defaultValue="(Doxa)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Doxa
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-g-shock">
                      <input
                        type="checkbox"
                        id="filter-g-shock"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="G-Shock"
                        defaultValue="(G-Shock)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      G-Shock
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-orient">
                      <input
                        type="checkbox"
                        id="filter-orient"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="Orient"
                        defaultValue="(Orient)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Orient
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-seiko">
                      <input
                        type="checkbox"
                        id="filter-seiko"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="Seiko"
                        defaultValue="(Seiko)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Seiko
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green ">
                  <span>
                    <label htmlFor="filter-tissot">
                      <input
                        type="checkbox"
                        id="filter-tissot"
                        data-group="Hãng"
                        data-field="vendor"
                        data-text="TISSOT"
                        defaultValue="(TISSOT)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      TISSOT
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* End Lọc Thương hiệu */}
          <aside className="aside-item filter-tag">
            <div className="title-head">Giới tính</div>
            <div className="aside-content filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-nam">
                      <input
                        type="checkbox"
                        id="filter-nam"
                        data-group="tag2"
                        data-field="tags"
                        data-text="Nam"
                        defaultValue="(Nam)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Nam
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-nu">
                      <input
                        type="checkbox"
                        id="filter-nu"
                        data-group="tag2"
                        data-field="tags"
                        data-text="Nữ"
                        defaultValue="(Nữ)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Nữ
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* Lọc theo chất liệu */}
          <aside className="aside-item filter-tag">
            <div className="title-head">Trọng lượng</div>
            <div className="aside-content filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-90g">
                      <input
                        type="checkbox"
                        id="filter-90g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="90g"
                        defaultValue="(90g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      90g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-100g">
                      <input
                        type="checkbox"
                        id="filter-100g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="100g"
                        defaultValue="(100g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      100g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-107g">
                      <input
                        type="checkbox"
                        id="filter-107g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="107g"
                        defaultValue="(107g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      107g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-120g">
                      <input
                        type="checkbox"
                        id="filter-120g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="120g"
                        defaultValue="(120g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      120g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-200g">
                      <input
                        type="checkbox"
                        id="filter-200g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="200g"
                        defaultValue="(200g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      200g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-220g">
                      <input
                        type="checkbox"
                        id="filter-220g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="220g"
                        defaultValue="(220g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      220g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-250g">
                      <input
                        type="checkbox"
                        id="filter-250g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="250g"
                        defaultValue="(250g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      250g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-400g">
                      <input
                        type="checkbox"
                        id="filter-400g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="400g"
                        defaultValue="(400g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      400g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-500g">
                      <input
                        type="checkbox"
                        id="filter-500g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="500g"
                        defaultValue="(500g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      500g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-700g">
                      <input
                        type="checkbox"
                        id="filter-700g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="700g"
                        defaultValue="(700g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      700g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-900g">
                      <input
                        type="checkbox"
                        id="filter-900g"
                        data-group="tag2"
                        data-field="tags"
                        data-text="900g"
                        defaultValue="(900g)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      900g
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-1-4kg">
                      <input
                        type="checkbox"
                        id="filter-1-4kg"
                        data-group="tag2"
                        data-field="tags"
                        data-text="1.4kg"
                        defaultValue="(1.4kg)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      1.4kg
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* End lọc theo chất liệu */}
          {/* Lọc kích thước màn hình */}
          <aside className="aside-item filter-tag">
            <div className="title-head">Chất liệu dây</div>
            <div className="aside-content filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-day-da">
                      <input
                        type="checkbox"
                        id="filter-day-da"
                        data-group="tag3"
                        data-field="tags"
                        data-text="Dây da"
                        defaultValue="(Dây da)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Dây da
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-day-kim-loai">
                      <input
                        type="checkbox"
                        id="filter-day-kim-loai"
                        data-group="tag3"
                        data-field="tags"
                        data-text="Dây kim loại"
                        defaultValue="(Dây kim loại)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Dây kim loại
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-day-nhua">
                      <input
                        type="checkbox"
                        id="filter-day-nhua"
                        data-group="tag3"
                        data-field="tags"
                        data-text="Dây nhựa"
                        defaultValue="(Dây nhựa)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Dây nhựa
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* End lọc theo kích thước màn hình */}
          <div className="border_filter"></div>
          {/* Lọc tính năng camera */}
          <aside className="aside-item filter-tag">
            <div className="title-head">Chất liệu mặt kính</div>
            <div className="aside-content filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-kinh-cung">
                      <input
                        type="checkbox"
                        id="filter-kinh-cung"
                        data-group="tag4"
                        data-field="tags"
                        data-text="Kính cứng"
                        defaultValue="(Kính cứng)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Kính cứng
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-kinh-sapphie">
                      <input
                        type="checkbox"
                        id="filter-kinh-sapphie"
                        data-group="tag4"
                        data-field="tags"
                        data-text="Kính Sapphỉe"
                        defaultValue="(Kính Sapphỉe)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Kính Sapphỉe
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* End lọc theo tính nắng camera */}
          {/* Lọc theo tính năng đặc biệt */}
          <aside className="aside-item filter-tag">
            <div className="title-head">Bộ máy và năng lượng</div>
            <div className="aside-content filter-group">
              <ul>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-pin">
                      <input
                        type="checkbox"
                        id="filter-pin"
                        data-group="tag5"
                        data-field="tags"
                        data-text="Pin"
                        defaultValue="(Pin)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Pin
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-co">
                      <input
                        type="checkbox"
                        id="filter-co"
                        data-group="tag5"
                        data-field="tags"
                        data-text="Cơ"
                        defaultValue="(Cơ)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Cơ
                    </label>
                  </span>
                </li>
                <li className="filter-item filter-item--check-box filter-item--green">
                  <span>
                    <label htmlFor="filter-nang-luong-anh-sang">
                      <input
                        type="checkbox"
                        id="filter-nang-luong-anh-sang"
                        data-group="tag5"
                        data-field="tags"
                        data-text="Năng lượng ánh sáng"
                        defaultValue="(Năng lượng ánh sáng)"
                        data-operator="OR"
                      />
                      <i className="fa" />
                      Năng lượng ánh sáng
                    </label>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          {/* End lọc theo tính năng đặc biệt */}
        </div>
      </div>{" "}
    </aside>
    <div className="block-collection col-lg-9 col-12">
      <section className="section_banner_col">
        <div className="banner-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
          <div
            className="swiper-wrapper"
            style={{
            display:"inline-flex",
              transform: "translate3d(-2460px, 0px, 0px)",
              transitionDuration: "0ms"
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={1}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_2.png?1696125396195"
                  alt="Dola Watch"
                />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={2}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/lazy.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_3.png?1696125396195"
                  alt="Dola Watch"
                />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-active"
              data-swiper-slide-index={0}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_1.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_1.png?1696125396195"
                  alt="Dola Watch"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-next"
              data-swiper-slide-index={1}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_2.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_2.png?1696125396195"
                  alt="Dola Watch"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={2}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_3.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_3.png?1696125396195"
                  alt="Dola Watch"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-active"
              data-swiper-slide-index={0}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_1.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_1.png?1696125396195"
                  alt="Dola Watch"
                  data-was-processed="true"
                />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-next"
              data-swiper-slide-index={1}
              style={{ width: 472, marginRight: 20 }}
            >
              <a
                href="/collections/all"
                className="image-effect"
                title="Dola Watch"
              >
                <img
                  width={800}
                  height={300}
                  className="lazyload loaded"
                  src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_2.png?1696125396195"
                  data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/banner_col_2.png?1696125396195"
                  alt="Dola Watch"
                  data-was-processed="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <h1 className="title-page d-none">
        <span>Đồng hồ nam</span>
      </h1>
      <div className="category-products block-background">
        <div className="sort-cate clearfix margin-bottom-10 hidden-xs">
          <div className="sort-cate-left hidden-xs">
            <h3>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="12px"
                height="12px"
                viewBox="0 0 97.761 97.762"
                // style={{ enableBackground: "new 0 0 97.761 97.762" }}
                xmlSpace="preserve"
              >
                <path
                  d="M42.761,65.596H34.75V2c0-1.105-0.896-2-2-2H16.62c-1.104,0-2,0.895-2,2v63.596H6.609c-0.77,0-1.472,0.443-1.804,1.137
					 c-0.333,0.695-0.237,1.519,0.246,2.117l18.076,26.955c0.38,0.473,0.953,0.746,1.558,0.746s1.178-0.273,1.558-0.746L44.319,68.85
					 c0.482-0.6,0.578-1.422,0.246-2.117C44.233,66.039,43.531,65.596,42.761,65.596z"
                />
                <path
                  d="M93.04,95.098L79.71,57.324c-0.282-0.799-1.038-1.334-1.887-1.334h-3.86c-0.107,0-0.213,0.008-0.318,0.024
					 c-0.104-0.018-0.21-0.024-0.318-0.024h-3.76c-0.849,0-1.604,0.535-1.887,1.336L54.403,95.1c-0.215,0.611-0.12,1.289,0.255,1.818
					 s0.983,0.844,1.633,0.844h5.773c0.88,0,1.657-0.574,1.913-1.416l2.536-8.324h14.419l2.536,8.324
					 c0.256,0.842,1.033,1.416,1.913,1.416h5.771c0.649,0,1.258-0.314,1.633-0.844C93.16,96.387,93.255,95.709,93.04,95.098z
					 M68.905,80.066c2.398-7.77,4.021-13.166,4.82-16.041l4.928,16.041H68.905z"
                />
                <path
                  d="M87.297,34.053H69.479L88.407,6.848c0.233-0.336,0.358-0.734,0.358-1.143V2.289c0-1.104-0.896-2-2-2H60.694
					 c-1.104,0-2,0.896-2,2v3.844c0,1.105,0.896,2,2,2h16.782L58.522,35.309c-0.233,0.336-0.358,0.734-0.358,1.146v3.441
					 c0,1.105,0.896,2,2,2h27.135c1.104,0,2-0.895,2-2v-3.842C89.297,34.947,88.402,34.053,87.297,34.053z"
                />
              </svg>
              Xếp theo:
            </h3>
            <ul>
              <li className="btn-quick-sort alpha-asc">
                <a
                  href="javascript:;"
                  // onclick="sortby('alpha-asc')"
                  title="Tên A-Z"
                >
                  <i />
                  Tên A-Z
                </a>
              </li>
              <li className="btn-quick-sort alpha-desc">
                <a
                  href="javascript:;"
                  // onclick="sortby('alpha-desc')"
                  title="Tên Z-A"
                >
                  <i />
                  Tên Z-A
                </a>
              </li>
              <li className="btn-quick-sort position-desc">
                <a
                  href="javascript:;"
                  // onclick="sortby('created-desc')"
                  title="Hàng mới"
                >
                  <i />
                  Hàng mới
                </a>
              </li>
              <li className="btn-quick-sort price-asc">
                <a
                  href="javascript:;"
                  // onclick="sortby('price-asc')"
                  title="Giá thấp đến cao"
                >
                  <i />
                  Giá thấp đến cao
                </a>
              </li>
              <li className="btn-quick-sort price-desc">
                <a
                  href="javascript:;"
                  // onclick="sortby('price-desc')"
                  title="Giá cao xuống thấp"
                >
                  <i />
                  Giá cao xuống thấp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className="products-view products-view-grid list_hover_pro">
          <div className="row row-fix">
          {listProduct && renderProductTest(listProduct,4)}
          </div>
        </section>
      </div>
    </div>
  </div>
  <div id="open-filters" className="open-filters d-lg-none d-xl-none"></div>
</div>

    )
}

export default Product