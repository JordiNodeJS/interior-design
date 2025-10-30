export default function AboutSection() {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
              <i className="flaticon-brickwall display-1 font-weight-normal text-secondary mb-3"></i>
              <h4 className="display-3 mb-3">25+</h4>
              <h1 className="m-0">Years Experience</h1>
            </div>
          </div>
          <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Learn About Us
            </h6>
            <h1 className="mb-4 section-title">
              We Are The Best Interior Designing Firm In Your City
            </h1>
            <p>
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <div className="row py-2">
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-4">
                  <h1 className="flaticon-house font-weight-normal text-primary m-0 mr-3"></h1>
                  <h5 className="text-truncate m-0">Project Planning</h5>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-4">
                  <h1 className="flaticon-stairs font-weight-normal text-primary m-0 mr-3"></h1>
                  <h5 className="text-truncate m-0">Exterior & Interior</h5>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-4">
                  <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3"></h1>
                  <h5 className="text-truncate m-0">Commercial Design</h5>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-4">
                  <h1 className="flaticon-living-room font-weight-normal text-primary m-0 mr-3"></h1>
                  <h5 className="text-truncate m-0">Residential Design</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
