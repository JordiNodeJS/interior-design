"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container position-relative" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
          <Link href="/" className="navbar-brand">
            <h1 className="m-0 display-5 text-white">
              <span className="text-primary">i</span>DESIGN
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-between px-3 ${
              isOpen ? "show" : ""
            }`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link href="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link href="/about" className="nav-item nav-link">
                About
              </Link>
              <Link href="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link href="/project" className="nav-item nav-link">
                Project
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link href="/blog" className="dropdown-item">
                    Blog Grid
                  </Link>
                  <Link href="/blog/single" className="dropdown-item">
                    Blog Detail
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
