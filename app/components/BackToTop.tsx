"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className="btn btn-lg btn-primary back-to-top"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="fa fa-angle-double-up"></i>
    </a>
  );
}
