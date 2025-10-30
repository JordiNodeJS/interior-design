export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "flaticon-bedroom",
      title: "Bedroom Design",
      description:
        "Create your perfect sanctuary with custom bedroom designs that combine luxury, comfort, and personal style.",
    },
    {
      id: 2,
      icon: "flaticon-kitchen",
      title: "Kitchen Design",
      description:
        "Modern, functional kitchens where culinary excellence meets stunning design and innovative storage solutions.",
    },
    {
      id: 3,
      icon: "flaticon-bathroom",
      title: "Bathroom Design",
      description:
        "Spa-inspired bathrooms featuring premium fixtures, elegant finishes, and meticulous attention to detail.",
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 pr-lg-5">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Our Awesome Services
            </h6>
            <h1 className="mb-4 section-title">
              Comprehensive Design Services Tailored To Your Vision
            </h1>
            <p>
              From concept to completion, our full-service interior design
              approach ensures every detail reflects your unique lifestyle and
              aesthetic preferences. We specialize in residential and commercial
              spaces, offering personalized solutions that maximize
              functionality while elevating beauty and sophistication in every
              room.
            </p>
            <a href="" className="btn btn-primary mt-3 py-2 px-4">
              View More
            </a>
          </div>
          <div className="col-lg-6 p-0 pt-5 pt-lg-0">
            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-md-4 mb-4">
                  <div className="d-flex flex-column text-center bg-light p-4">
                    <h3
                      className={`${service.icon} display-3 font-weight-normal text-primary mb-3`}
                    ></h3>
                    <h5 className="mb-3">{service.title}</h5>
                    <p className="m-0">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
