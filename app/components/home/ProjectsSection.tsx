"use client";

import { useState } from "react";

const portfolioItems = [
  { id: 1, img: "/img/portfolio-1.jpg", category: "first" },
  { id: 2, img: "/img/portfolio-2.jpg", category: "second" },
  { id: 3, img: "/img/portfolio-3.jpg", category: "third" },
  { id: 4, img: "/img/portfolio-4.jpg", category: "first" },
  { id: 5, img: "/img/portfolio-5.jpg", category: "second" },
  { id: 6, img: "/img/portfolio-6.jpg", category: "third" },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col text-center mb-4">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Our Projects
            </h6>
            <h1 className="mb-4">
              Some Of Our Awesome Interior Designing Projects
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className={`btn btn-outline-primary m-1 ${
                  filter === "*" ? "active" : ""
                }`}
                onClick={() => setFilter("*")}
              >
                All
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  filter === "first" ? "active" : ""
                }`}
                onClick={() => setFilter("first")}
              >
                Complete
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  filter === "second" ? "active" : ""
                }`}
                onClick={() => setFilter("second")}
              >
                Running
              </li>
              <li
                className={`btn btn-outline-primary m-1 ${
                  filter === "third" ? "active" : ""
                }`}
                onClick={() => setFilter("third")}
              >
                Upcoming
              </li>
            </ul>
          </div>
        </div>
        <div className="row mx-1 portfolio-container">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item ${item.category}`}
            >
              <div className="position-relative overflow-hidden">
                <div className="portfolio-img d-flex align-items-center justify-content-center">
                  <img className="img-fluid" src={item.img} alt="" />
                </div>
                <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-white mb-4">Project Name</h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-outline-primary m-1" href="">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary m-1"
                      href={item.img}
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
