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
              25+ Years Experience In The Interior Design Industry
            </h1>
            <p className="mb-4">
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. And elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
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
                  <i className="far fa-check-square text-primary mr-3"></i>Best
                  Interior Design
                </h5>
              </li>
              <li>
                <h5>
                  <i className="far fa-check-square text-primary mr-3"></i>
                  Customer Satisfaction
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
