"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    profession: "Profession",
    img: "/img/testimonial-1.jpg",
    text: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.",
  },
  {
    id: 2,
    name: "Client Name",
    profession: "Profession",
    img: "/img/testimonial-2.jpg",
    text: "Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-7 py-5 pr-md-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">
              Testimonial
            </h6>
            <h1 className="mb-4 section-title">What Our Clients Say</h1>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              navigation={true}
              className="testimonial-carousel position-relative pb-5 mb-md-5"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid rounded-circle"
                        src={testimonial.img}
                        style={{ width: "60px", height: "60px" }}
                        alt=""
                      />
                      <div className="ml-3">
                        <h5>{testimonial.name}</h5>
                        <i>{testimonial.profession}</i>
                      </div>
                    </div>
                    <p>{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
              <img className="h-100" src="/img/testimonial.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
