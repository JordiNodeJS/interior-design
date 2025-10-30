"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    id: 1,
    img: "/img/team-1.jpg",
    name: "Name Goes Here",
    role: "Designation",
  },
  {
    id: 2,
    img: "/img/team-2.jpg",
    name: "Name Goes Here",
    role: "Designation",
  },
  {
    id: 3,
    img: "/img/team-3.jpg",
    name: "Name Goes Here",
    role: "Designation",
  },
  {
    id: 4,
    img: "/img/team-4.jpg",
    name: "Name Goes Here",
    role: "Designation",
  },
];

export default function TeamSection() {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
              <h6 className="text-white font-weight-normal text-uppercase mb-3">
                Our Team
              </h6>
              <h1 className="mb-0 text-center">Meet Our Team Members</h1>
            </div>
          </div>
          <div className="col-md-8 col-sm-6 p-0 py-sm-5">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              className="team-carousel position-relative p-0 py-sm-5"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="team d-flex flex-column text-center mx-3">
                    <div className="position-relative">
                      <img
                        className="img-fluid w-100"
                        src={member.img}
                        alt=""
                      />
                      <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        <a
                          className="btn btn-outline-primary text-center mr-2 px-0"
                          style={{ width: "38px", height: "38px" }}
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-outline-primary text-center mr-2 px-0"
                          style={{ width: "38px", height: "38px" }}
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-outline-primary text-center px-0"
                          style={{ width: "38px", height: "38px" }}
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex flex-column bg-secondary text-center py-3">
                      <h5 className="text-white">{member.name}</h5>
                      <p className="m-0">{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
