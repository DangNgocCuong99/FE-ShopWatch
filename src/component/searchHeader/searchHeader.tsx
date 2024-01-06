import { useCallback, useEffect, useState } from "react";

import "./index.css";

const SearchHeader = ()=>{
    const [placeholder, setPlaceholder] = useState("");
    const delay = 50;
    const pause = 1000;


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


    return(
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
                                        />
                                        <input type="hidden" name="type" value="product" />
                                        <button
                                            type="submit"
                                            className="btn icon-fallback-text"
                                            aria-label="Tìm kiếm"
                                            title="Tìm kiếm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
                                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                        </button>

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
    )
}
export default SearchHeader