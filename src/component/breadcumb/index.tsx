import { useNavigate } from "react-router-dom";

const BreadCrumb = ({content}:{content:string})=>{
  const navigation = useNavigate();
    return(
        <section
  className="bread-crumb"
  style={{
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3)),  url(//bizweb.dktcdn.net/100/487/743/themes/912230/assets/breadcrumb.jpg?1696125396195) no-repeat center"
  }}
>
  <div className="container">
    <div className="title-bread-crumb">{content}</div>
    <ul className="breadcrumb" style={{backgroundColor:"transparent",display:"block"}}>
      <li className="home">
        <a onClick={()=>navigation('/')}>
          <span>Trang chủ</span>
        </a>
        <span className="mr_lr">
          &nbsp;
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="svg-inline--fa fa-chevron-right fa-w-10"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              className=""
            />
          </svg>
          &nbsp;
        </span>
      </li>
      <li>
        <strong>
          <span>{content}</span>
        </strong>
      </li>
    </ul>
  </div>
</section>

    )
}

export default BreadCrumb