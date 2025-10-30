import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Get In Touch</h4>
          <p>
            <i className="fa fa-map-marker-alt mr-2"></i>456 Interior Design
            Ave, New York, NY 10001
          </p>
          <p>
            <i className="fa fa-phone-alt mr-2"></i>+1 (212) 555-0123
          </p>
          <p>
            <i className="fa fa-envelope mr-2"></i>hello@idesign.studio
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Quick Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-white mb-2" href="/">
              <i className="fa fa-angle-right mr-2"></i>Home
            </Link>
            <Link className="text-white mb-2" href="/about">
              <i className="fa fa-angle-right mr-2"></i>About Us
            </Link>
            <Link className="text-white mb-2" href="/service">
              <i className="fa fa-angle-right mr-2"></i>Our Services
            </Link>
            <Link className="text-white mb-2" href="/project">
              <i className="fa fa-angle-right mr-2"></i>Our Projects
            </Link>
            <Link className="text-white" href="/contact">
              <i className="fa fa-angle-right mr-2"></i>Contact Us
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Popular Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-white mb-2" href="/">
              <i className="fa fa-angle-right mr-2"></i>Home
            </Link>
            <Link className="text-white mb-2" href="/about">
              <i className="fa fa-angle-right mr-2"></i>About Us
            </Link>
            <Link className="text-white mb-2" href="/service">
              <i className="fa fa-angle-right mr-2"></i>Our Services
            </Link>
            <Link className="text-white mb-2" href="/project">
              <i className="fa fa-angle-right mr-2"></i>Our Projects
            </Link>
            <Link className="text-white" href="/contact">
              <i className="fa fa-angle-right mr-2"></i>Contact Us
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Newsletter</h4>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control border-0"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <button
                className="btn btn-lg btn-primary btn-block border-0"
                type="submit"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container border-top border-secondary pt-5">
        <p className="m-0 text-center text-white">
          &copy; {new Date().getFullYear()}{" "}
          <a className="text-white font-weight-bold" href="#">
            iDESIGN Interior Studio
          </a>
          . All Rights Reserved. Crafted with excellence.
        </p>
      </div>
    </div>
  );
}
