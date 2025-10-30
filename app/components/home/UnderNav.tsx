export default function UnderNav() {
  return (
    <div className="container-fluid bg-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-left mb-3 mb-lg-0">
            <div className="d-inline-flex text-left">
              <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3"></h1>
              <div className="d-flex flex-column">
                <h5>Our Office</h5>
                <p className="m-0">456 Interior Design Ave, NY 10001</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
            <div className="d-inline-flex text-left">
              <h1 className="flaticon-email font-weight-normal text-primary m-0 mr-3"></h1>
              <div className="d-flex flex-column">
                <h5>Email Us</h5>
                <p className="m-0">hello@idesign.studio</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
            <div className="d-inline-flex text-left">
              <h1 className="flaticon-telephone font-weight-normal text-primary m-0 mr-3"></h1>
              <div className="d-flex flex-column">
                <h5>Call Us</h5>
                <p className="m-0">+1 (212) 555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
