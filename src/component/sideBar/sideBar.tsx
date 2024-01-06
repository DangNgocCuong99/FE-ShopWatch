import { useNavigate } from "react-router-dom";
import { headerMenuItems } from "./dataConfig";
import { useState } from "react";
import { RouteType } from "/@/router/config";

const SideBar = () => {
  const navigation = useNavigate();
    const [, setReRender] = useState(false);
    const listItemsDetail=(child: RouteType[],open:boolean, sideBar: boolean) =>{
        if (Array.isArray(child)) {
          if (sideBar === false) {
            return child.map((item,key) => (
              <li className="leve12" key={key}>
                <a onClick={()=>navigation(item.path)} title={item.displayText}>
                  {item.displayText}
                </a>
              </li>
            ));
          } else {
            return open ? child.map((item,key) => (
                <li key={key}>
                  <a  title={item.displayText} className="a3" onClick={()=>navigation(item.path)}>
                    {item.displayText}
                  </a>
                </li>
              )) : null
          }
        }
      }
    
    
      const detailsNav = (child: RouteType[],open:boolean, sideBar: boolean)=> {
        if (Array.isArray(child)) {
          if (sideBar === false) {
            return child.map((item,key) => (
              <li
                className="level1 parent item fix-navs"
                data-title={item.displayText}
                data-link={item.path}
                key={key}
              >
                <a className="hmega" onClick={()=>navigation(item.path)} title={item.displayText}>
                  {item.displayText}
                </a>
                <ul className="level1">
                  {listItemsDetail(item.child!,sideBar, sideBar)}
                </ul>
              </li>
            ));
          } else {
            return open ?
               child.map((item,key) => (
                <li className="current" key={key}>
                  <a className="caret-down" onClick={()=>navigation(item.path)} title={item.displayText}>
                    {item.displayText}
                  </a>
                  <i className="fa fa-caret-down current" onClick={()=>{item.isOpen = !item.isOpen ; setReRender((render)=>!render)
                  }}></i>
                  <ul>{listItemsDetail(item.child!, item.isOpen!,sideBar)}</ul>
                </li>
              )) :null;
            // }
          }
        }
      }
    
      const headerMenuElements = headerMenuItems.map((item,key) => {
        if (!item?.child?.length && !item.hiddenMenu) {
          return (
            <li className="nav-item" key={key}>
              <a  onClick={()=>navigation(item.path)} className="a-img" title={item.displayText}>
                {item.displayText}
              </a>
            </li>
          );
        } else if (item.child?.length && !item.hiddenMenu) {
          return (
            <li className="nav-item has-mega current" key={key}>
              <a  onClick={()=>navigation(item.path)} className="a-img caret-down" title={item.displayText}>
                {item.displayText}
              </a>
              <i className="fa fa-caret-down current" onClick={()=> {setReRender((reRender)=> !reRender);item.isOpen = !item.isOpen}}></i>
              <div className="mega-content d-lg-block d-none">
                <div className="row">
                  <div className="col-lg-9">
                    <ul className="leve10">{detailsNav(item.child,false, false)}</ul>
                  </div>
                  {/* Image */}
                  <div className="col-lg-3">
                    <a className=" image-effect" title={item.displayText} onClick={()=>navigation(item.path)}>
                      <img
                        width={item!.img?.width || 400}
                        height={item!.img?.height || 500}
                        className="lazyload loaded"
                        src={item.img?.src}
                        alt={item.displayText}
                      />
                    </a>
                  </div>
                  {/* Image */}
                </div>
              </div>
              <div className="item_small d-lg-none d-blog">
                {detailsNav(item.child,item.isOpen!, true)}
              </div>
            </li>
          );
        }
      });
    
    return (
        <>        {headerMenuElements}</>
    )
}
export default SideBar