export default function FeaturesSection() {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mt-5 py-5 pr-lg-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Why Choose Us?
            </h6>
            <h1 className="mb-4 section-title">
              Industry-Leading Expertise & Award-Winning Design Excellence
            </h1>
            <p className="mb-4">
              Our distinguished portfolio spans luxury residences, boutique
              hotels, and prestigious commercial spaces. With a team of
              internationally recognized designers and architects, we deliver
              innovative solutions that exceed expectations. Every project
              benefits from our meticulous process, premium partnerships with
              leading brands, and unwavering commitment to transforming your
              vision into reality.
            </p>
            <ul className="list-inline">
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>25+
                  Years Experience
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>
                  Award-Winning Designs
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>
                  100% Client Satisfaction
                </h5>
              </li>
            </ul>
            <a href="" className="btn btn-primary mt-3 py-2 px-4">
              View More
            </a>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
              <img className="h-100" src="/img/feature.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
