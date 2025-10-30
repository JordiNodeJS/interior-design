const testimonials = [
  {
    id: 1,
    name: "Jennifer Parker",
    profession: "Luxury Home Owner",
    img: "/img/testimonial-1.jpg",
    text: "Working with iDESIGN transformed our penthouse beyond imagination. Sarah and her team captured our vision perfectly, blending modern elegance with timeless sophistication. The attention to detail, from custom millwork to curated furnishings, exceeded all expectations. Our home is now a true reflection of our lifestyle.",
  },
  {
    id: 2,
    name: "David Thompson",
    profession: "Boutique Hotel Owner",
    img: "/img/testimonial-2.jpg",
    text: "The iDESIGN team delivered a stunning redesign for our boutique hotel that has dramatically increased guest satisfaction and bookings. Their ability to balance aesthetic beauty with functional requirements is unmatched. From concept to completion, the process was seamless and professional.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-7 py-5 pr-md-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">
              Testimonial
            </h6>
            <h1 className="mb-4 section-title">What Our Clients Say</h1>
            <div className="row">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="col-12 mb-4">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid rounded-circle"
                        src={testimonial.img}
                        style={{ width: "60px", height: "60px" }}
                        alt=""
                      />
                      <div className="ml-3">
                        <h5>{testimonial.name}</h5>
                        <i>{testimonial.profession}</i>
                      </div>
                    </div>
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
              <img className="h-100" src="/img/testimonial.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
