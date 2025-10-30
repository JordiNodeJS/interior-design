"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServicesSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 pr-lg-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Our Awesome Services
            </h6>
            <h1 className="mb-4 section-title">
              Awesome Interior Designing Services For Your Home
            </h1>
            <p>
              Invidunt lorem justo clita. Erat lorem labore ea, justo dolor
              lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
              justo sed sed diam. Ea et erat ut sed diam sea ipsum
            </p>
            <a href="" className="btn btn-primary mt-3 py-2 px-4">
              View More
            </a>
          </div>
          <div className="col-lg-6 p-0 pt-5 pt-lg-0">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              className="service-carousel position-relative"
            >
              <SwiperSlide>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Bedroom Design</h5>
                  <p className="m-0">
                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita
                    stet, diam sea est diam eos
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Kitchen Design</h5>
                  <p className="m-0">
                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita
                    stet, diam sea est diam eos
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                  <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3"></h3>
                  <h5 className="mb-3">Bathroom Design</h5>
                  <p className="m-0">
                    Diam amet eos at no eos sit lorem, amet rebum ipsum clita
                    stet, diam sea est diam eos
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
