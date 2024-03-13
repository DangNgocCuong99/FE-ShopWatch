import './index.css'
const Poster = ()=>{
    return (
        <>
        <section className="section_slider" style={{display:"flex"}}>
            <div className="home-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
            <div
        className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
        data-swiper-slide-index={1}
        style={{ width: "auto"}}
      >
        <a className="clearfix" title="Slider" href="#">
          <picture>
            <source
              media="(min-width: 1200px)"
              srcSet="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/slider_2.jpg?1696125396195"
            />
            <source
              media="(min-width: 992px)"
              srcSet="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/slider_2.jpg?1696125396195"
            />
            <source
              media="(min-width: 569px)"
              srcSet="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/slider_2.jpg?1696125396195"
            />
            <source
              media="(max-width: 567px)"
              srcSet="//bizweb.dktcdn.net/thumb/large/100/487/743/themes/912230/assets/slider_2.jpg?1696125396195"
            />
            <img
              width={1519}
              height={580}
              src="//bizweb.dktcdn.net/thumb/grande/100/487/743/themes/912230/assets/slider_2.jpg?1696125396195"
              alt="Slider"
              className="img-responsive"
            />
          </picture>
          <div className="image-child">
            <picture>
              <source
                media="(max-width: 567px)"
                srcSet="//bizweb.dktcdn.net/thumb/large/100/487/743/themes/912230/assets/slider_image_2.png?1696125396195"
              />
              <img
                width={377}
                height={638}
                src="//bizweb.dktcdn.net/100/487/743/themes/912230/assets/slider_image_2.png?1696125396195"
                title="Slider"
              />
            </picture>
          </div>
        </a>
      </div>
            </div>

</section>
        </>
    )
}

export default Poster