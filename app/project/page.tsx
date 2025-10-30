import type { Metadata } from "next";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import UnderNav from "../components/home/UnderNav";
import ProjectsSection from "../components/home/ProjectsSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: "Our Projects - iDESIGN Interior Design",
  description: "View our interior design projects",
};

export default function ProjectPage() {
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
                Our Projects
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <span className="btn btn-outline-primary disabled">
                  Our Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectsSection />
      <Footer />
      <BackToTop />
    </>
  );
}
