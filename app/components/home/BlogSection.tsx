import Link from "next/link";
import { getAllBlogPosts } from "../../data/blogPosts";

export default function BlogSection() {
  const blogPosts = getAllBlogPosts().slice(0, 9); // Show first 9 posts
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
            <div key={post.slug} className="col-md-4 mb-4">
              <div className="card border-0 mb-2">
                <img className="card-img-top" src={post.image} alt="" />
                <div className="card-body bg-white p-4">
                  <div className="d-flex align-items-center mb-3">
                    <Link
                      className="btn btn-primary"
                      href={`/blog/${post.slug}`}
                    >
                      <i className="fa fa-link"></i>
                    </Link>
                    <h5 className="m-0 ml-3 text-truncate">{post.title}</h5>
                  </div>
                  <p>{post.excerpt}</p>
                  <div className="d-flex">
                    <small className="mr-3">
                      <i className="fa fa-user text-primary"></i> {post.author}
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-folder text-primary"></i>{" "}
                      {post.category}
                    </small>
                    <small className="mr-3">
                      <i className="fa fa-comments text-primary"></i>{" "}
                      {post.comments}
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
