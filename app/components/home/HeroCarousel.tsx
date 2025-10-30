"use client";

export default function HeroCarousel() {
  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "800px" }}>
                <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                  Award-Winning Interior Design
                </h4>
                <h3 className="display-3 text-white mb-md-4">
                  Transform Your Space Into Art
                </h3>
                <a
                  href=""
                  className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
                >
                  Explore Our Work
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "800px" }}>
                <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                  Luxury Residential Design
                </h4>
                <h3 className="display-3 text-white mb-md-4">
                  Where Elegance Meets Comfort
                </h3>
                <a
                  href=""
                  className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          role="button"
          data-slide="prev"
        >
          <div
            className="btn btn-primary"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-prev-icon mb-n2"></span>
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          role="button"
          data-slide="next"
        >
          <div
            className="btn btn-primary"
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-next-icon mb-n2"></span>
          </div>
        </a>
      </div>
    </div>
  );
}
