const blogPosts = [
  {
    id: 1,
    img: "/img/blog-1.jpg",
    title: "2025 Interior Design Trends",
    excerpt:
      "Discover the hottest interior design trends shaping luxury homes this year, from sustainable materials to biophilic design elements and smart home integration.",
  },
  {
    id: 2,
    img: "/img/blog-2.jpg",
    title: "Maximizing Small Spaces",
    excerpt:
      "Expert tips on transforming compact living areas into functional, stylish spaces through clever storage solutions, multi-purpose furniture, and strategic design.",
  },
  {
    id: 3,
    img: "/img/blog-3.jpg",
    title: "Choosing the Perfect Color Palette",
    excerpt:
      "A comprehensive guide to selecting harmonious color schemes that reflect your personality while enhancing natural light and creating the perfect ambiance.",
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
                      <i className="fa fa-user text-primary"></i> Sarah Mitchell
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i> Interior
                      Design
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i> 24
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
