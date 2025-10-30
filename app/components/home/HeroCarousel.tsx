"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroCarousel() {
  return (
    <div className="container-fluid p-0">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".carousel-control-next",
          prevEl: ".carousel-control-prev",
        }}
        id="header-carousel"
        className="carousel slide"
      >
        <SwiperSlide className="carousel-item active">
          <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "800px" }}>
              <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                Creative Interior Design
              </h4>
              <h3 className="display-3 text-white mb-md-4">
                Make Your Home Better
              </h3>
              <a
                href=""
                className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-item">
          <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "800px" }}>
              <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                Creative Interior Design
              </h4>
              <h3 className="display-3 text-white mb-md-4">
                Stay At Home In Peace
              </h3>
              <a
                href=""
                className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <a className="carousel-control-prev" href="#header-carousel">
          <div
            className="btn btn-primary"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-prev-icon mb-n2"></span>
          </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel">
          <div
            className="btn btn-primary"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-next-icon mb-n2"></span>
          </div>
        </a>
      </Swiper>
    </div>
  );
}
