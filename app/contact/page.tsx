"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import UnderNav from "../components/home/UnderNav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitMessage(
        result.message ||
          "Thank you for contacting us! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitMessage(
        error instanceof Error
          ? `Error: ${error.message}`
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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
                Contact Us
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <span className="btn btn-outline-primary disabled">
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                <div className="d-inline-flex border border-secondary p-4 mb-4">
                  <h1 className="flaticon-office font-weight-normal text-secondary m-0 mr-3"></h1>
                  <div className="d-flex flex-column">
                    <h4>Our Office</h4>
                    <p className="m-0 text-white">
                      Carrer de Provença 385, Barcelona 08025
                    </p>
                  </div>
                </div>
                <div className="d-inline-flex border border-secondary p-4 mb-4">
                  <h1 className="flaticon-email font-weight-normal text-secondary m-0 mr-3"></h1>
                  <div className="d-flex flex-column">
                    <h4>Email Us</h4>
                    <p className="m-0 text-white">info@webcode.es</p>
                  </div>
                </div>
                <div className="d-inline-flex border border-secondary p-4">
                  <h1 className="flaticon-telephone font-weight-normal text-secondary m-0 mr-3"></h1>
                  <div className="d-flex flex-column">
                    <h4>Call Us</h4>
                    <p className="m-0 text-white">+34 912 345 678</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mb-5 my-lg-5 py-5 pl-lg-5">
              <div className="contact-form">
                {submitMessage && (
                  <div className="alert alert-success" role="alert">
                    {submitMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="control-group mb-3">
                    <input
                      type="email"
                      className="form-control p-4"
                      id="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="control-group mb-3">
                    <textarea
                      className="form-control p-4"
                      rows={6}
                      id="message"
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-3 px-5"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
