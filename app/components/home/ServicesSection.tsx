export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: "flaticon-bedroom",
      title: "Bedroom Design",
      description:
        "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos",
    },
    {
      id: 2,
      icon: "flaticon-kitchen",
      title: "Kitchen Design",
      description:
        "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos",
    },
    {
      id: 3,
      icon: "flaticon-bathroom",
      title: "Bathroom Design",
      description:
        "Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos",
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
              Awesome Interior Designing Services For Your Home
            </h1>
            <p>
              Invidunt lorem justo clita. Erat lorem labore ea, justo dolor
              lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
              justo sed sed diam. Ea et erat ut sed diam sea ipsum
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
