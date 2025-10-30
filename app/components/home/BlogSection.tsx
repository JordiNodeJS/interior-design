const blogPosts = [
  {
    id: 1,
    img: "/img/blog-1.jpg",
    title: "Diam amet eos at no eos",
    excerpt:
      "Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo",
  },
  {
    id: 2,
    img: "/img/blog-2.jpg",
    title: "Diam amet eos at no eos",
    excerpt:
      "Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo",
  },
  {
    id: 3,
    img: "/img/blog-3.jpg",
    title: "Diam amet eos at no eos",
    excerpt:
      "Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo",
  },
];

export default function BlogSection() {
  return (
    <div className="container-fluid bg-light pt-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col text-center mb-4">
            <h6 className="text-primary font-weight-normal text-uppercase mb-3">
              Our Blog
            </h6>
            <h1 className="mb-4">
              Read The Latest News & Articles From Our Blog
            </h1>
          </div>
        </div>
        <div className="row pb-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="card border-0 mb-2">
                <img className="card-img-top" src={post.img} alt="" />
                <div className="card-body bg-white p-4">
                  <div className="d-flex align-items-center mb-3">
                    <a className="btn btn-primary" href="">
                      <i className="fa fa-link"></i>
                    </a>
                    <h5 className="m-0 ml-3 text-truncate">{post.title}</h5>
                  </div>
                  <p>{post.excerpt}</p>
                  <div className="d-flex">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary"></i> Admin
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i> Web Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i> 15
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
