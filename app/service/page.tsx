import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import UnderNav from "../components/home/UnderNav";
import ServicesSection from "../components/home/ServicesSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: "Our Services - iDESIGN Interior Design",
  description: "Explore our interior design services",
};

export default function ServicePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <UnderNav />

      {/* Page Header */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-primary text-uppercase">
                Our Services
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <span className="btn btn-outline-primary disabled">
                  Our Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesSection />
      <Footer />
      <BackToTop />
    </>
  );
}
