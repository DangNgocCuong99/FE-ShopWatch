import './index.css'
const About = ()=> {
    return (
        <>
        <section className="section_about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6 thump-content">
        <div className="thump">
          <a href="/" className="logo" title="Logo">
            <img
              width={220}
              height={27}
              className="lazyload loaded"
              src="/logo.png"
              // data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/logo-about.png?1696125396195"
              alt="Nam Dung Watch"
              data-was-processed="true"
            />
          </a>
          <h2>Nam Dung Watch - Đồng hồ chính hãng</h2>
          <span className="content">
            Được thành lập vào năm 2019, trải qua nhiều năm hoạt động và phát
            triển, Nam Dung Watch trở thành đại lý ủy quyền cho rất nhiều thương
            hiệu trên thế giới, chuyên bán đồng hồ chính hãng.
            <br />
            <br />
            Chính sách bảo hành 5 năm cùng với các chương trình giảm giá tốt sẽ
            giúp bạn mua sắm dễ dàng. Với đội ngũ nhân viên tận tình, am hiểu về
            đồng hồ, Nam Dung Watch rất vui được phục vụ quý khách
          </span>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <a href="#" title="Nam Dung Watch" className="thump-image image-effect">
          <img
            width={845}
            height={621}
            className="lazyload loaded"
            src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/about_image.png?1696125396195"
            data-src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/about_image.png?1696125396195"
            alt="Nam Dung Watch"
            data-was-processed="true"
          />
        </a>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default About