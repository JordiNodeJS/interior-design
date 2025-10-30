"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useParams } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "../../data/blogPosts";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import UnderNav from "../../components/home/UnderNav";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";

const categories = [
  { name: "Residential Design", count: 145 },
  { name: "Commercial Spaces", count: 98 },
  { name: "Sustainable Design", count: 76 },
  { name: "Color Theory", count: 64 },
  { name: "Modern Interiors", count: 112 },
];

interface CommentFormData {
  name: string;
  email: string;
  website: string;
  message: string;
}

export default function BlogSinglePage() {
  const [formData, setFormData] = useState<CommentFormData>({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const params = useParams();
  const slug = params.slug as string;
  const currentPost = getBlogPostBySlug(slug);
  const allPosts = getAllBlogPosts();

  // Get related posts (3 random posts excluding current)
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  // Get recent posts (5 most recent excluding current)
  const recentPosts = allPosts.filter((post) => post.slug !== slug).slice(0, 5);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
    // Handle comment submission
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  if (!currentPost) {
    return (
      <>
        <Topbar />
        <Navbar />
        <UnderNav />
        <div className="container py-5">
          <div className="text-center">
            <h1>Blog Post Not Found</h1>
            <Link href="/blog" className="btn btn-primary mt-3">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
        <BackToTop />
      </>
    );
  }

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
                Blog Detail
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <Link className="btn btn-outline-primary" href="/">
                  Home
                </Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <Link className="btn btn-outline-primary" href="/blog">
                  Blog
                </Link>
                <i className="fas fa-angle-double-right text-primary mx-2"></i>
                <span className="btn btn-outline-primary disabled">
                  Blog Detail
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Detail Start */}
      <div className="container py-5">
        <div className="row pt-5">
          <div className="col-lg-8">
            <div className="d-flex flex-column text-left mb-4">
              <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                Interior Design Insights
              </h6>
              <h1 className="mb-4 section-title">
                The Art of Creating Timeless Interior Spaces
              </h1>
              <div className="d-index-flex mb-2">
                <span className="mr-3">
                  <i className="fa fa-user text-primary"></i> Sarah Mitchell
                </span>
                <span className="mr-3">
                  <i className="fa fa-folder text-primary"></i> Interior Design
                </span>
                <span className="mr-3">
                  <i className="fa fa-comments text-primary"></i> 42
                </span>
              </div>
            </div>

            <div className="mb-5">
              <img
                className="img-fluid w-100 mb-4"
                src="/img/carousel-1.jpg"
                alt="Timeless Interior Design"
              />
              <p>
                Creating a timeless interior design is about more than following
                current trends—it&apos;s about understanding fundamental
                principles that transcend fleeting fashions. At iDESIGN,
                we&apos;ve spent over 25 years mastering the art of creating
                spaces that remain elegant and relevant for decades. The key
                lies in balancing classic elements with personal touches that
                reflect your unique lifestyle and aesthetic preferences.
              </p>
              <p>
                Quality craftsmanship and attention to detail are the
                cornerstones of enduring design. Whether it&apos;s selecting the
                perfect marble for a kitchen countertop or choosing custom
                millwork that adds architectural interest, every decision
                contributes to the overall longevity of the design. We believe
                in investing in pieces that not only look beautiful today but
                will continue to inspire and serve you for years to come.
              </p>

              <h2 className="mb-4">Foundation of Timeless Design</h2>
              <img
                className="img-fluid w-50 float-left mr-4 mb-3"
                src="/img/blog-1.jpg"
                alt="Classic Design Elements"
              />
              <p>
                The foundation of any timeless interior begins with a neutral
                color palette that serves as a versatile backdrop. Soft whites,
                warm grays, and earth tones create a sophisticated canvas that
                allows you to layer in personality through textiles, artwork,
                and accessories. This approach ensures your space never feels
                dated, as you can easily refresh the look by updating accent
                pieces while maintaining the core design integrity.
              </p>
              <p>
                Natural materials play a crucial role in achieving timelessness.
                Hardwood floors, stone surfaces, and quality textiles age
                gracefully, developing a patina that adds character over time.
                We carefully source materials that not only look stunning when
                installed but will continue to improve with age, telling the
                story of your home&apos;s evolution.
              </p>

              <h3 className="mb-4">Balancing Function and Aesthetics</h3>
              <img
                className="img-fluid w-50 float-right ml-4 mb-3"
                src="/img/blog-2.jpg"
                alt="Functional Design"
              />
              <p>
                True timeless design seamlessly integrates functionality with
                beauty. Every element in a well-designed space serves a purpose,
                whether practical or aesthetic. Custom built-ins maximize
                storage while maintaining clean lines, lighting schemes adapt to
                different activities and moods, and furniture arrangements
                facilitate both conversation and circulation.
              </p>
              <p>
                We approach each project by first understanding how you live in
                your space. A family with young children requires different
                solutions than empty nesters or professionals who frequently
                entertain. By designing with your lifestyle in mind, we create
                spaces that not only look exceptional but truly work for your
                daily needs—a key factor in ensuring the design stands the test
                of time.
              </p>
              <p>
                The interplay of proportion and scale is another critical
                element. Furniture and fixtures sized appropriately for the room
                create harmony and balance. Oversized pieces in small spaces or
                tiny furniture in grand rooms disrupt the visual flow and can
                quickly date a design. Our team carefully considers these
                relationships to ensure every element feels perfectly placed.
              </p>
            </div>

            <div className="mb-5 mx-n3">
              <h3 className="mb-4 ml-3 section-title">Related Posts</h3>
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                }}
                loop={true}
                className="service-carousel position-relative"
              >
                {relatedPosts.map((post) => (
                  <SwiperSlide key={post.slug}>
                    <div className="card border-0 mx-3">
                      <img className="card-img-top" src={post.image} alt="" />
                      <div className="card-body bg-light p-4">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            className="btn btn-primary"
                            href={`/blog/${post.slug}`}
                          >
                            <i className="fa fa-link"></i>
                          </Link>
                          <h5 className="m-0 ml-3 text-truncate">
                            {post.title}
                          </h5>
                        </div>
                        <p>{post.excerpt}</p>
                        <div className="d-flex">
                          <small className="mr-3">
                            <i className="fa fa-user text-primary"></i>{" "}
                            {post.author}
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mb-5">
              <h3 className="mb-4 section-title">3 Comments</h3>
              <div className="media mb-4">
                <img
                  src="/img/testimonial-1.jpg"
                  alt="Jennifer Parker"
                  className="img-fluid rounded-circle mr-3 mt-1"
                  style={{ width: "45px", height: "45px" }}
                />
                <div className="media-body">
                  <h6>
                    Jennifer Parker{" "}
                    <small>
                      <i>January 15, 2025 at 10:30am</i>
                    </small>
                  </h6>
                  <p>
                    This article perfectly captures what we experienced working
                    with iDESIGN. The timeless design principles you applied to
                    our penthouse have created a space that feels as fresh and
                    elegant today as it did when we first moved in. Thank you
                    for your expertise!
                  </p>
                  <button className="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
              <div className="media mb-4">
                <img
                  src="/img/testimonial-2.jpg"
                  alt="David Thompson"
                  className="img-fluid rounded-circle mr-3 mt-1"
                  style={{ width: "45px", height: "45px" }}
                />
                <div className="media-body">
                  <h6>
                    David Thompson{" "}
                    <small>
                      <i>January 16, 2025 at 2:15pm</i>
                    </small>
                  </h6>
                  <p>
                    As a boutique hotel owner, I appreciate the emphasis on
                    quality materials and craftsmanship. These principles have
                    served our renovation project incredibly well. Our guests
                    consistently comment on the sophisticated yet welcoming
                    atmosphere.
                  </p>
                  <button className="btn btn-sm btn-light">Reply</button>
                  <div className="media mt-4">
                    <img
                      src="/img/user.jpg"
                      alt="Sarah Mitchell"
                      className="img-fluid rounded-circle mr-3 mt-1"
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div className="media-body">
                      <h6>
                        Sarah Mitchell{" "}
                        <small>
                          <i>January 16, 2025 at 4:30pm</i>
                        </small>
                      </h6>
                      <p>
                        Thank you, David! It was a pleasure working on your
                        hotel project. Creating spaces that resonate with both
                        owners and guests is exactly what timeless design is
                        about. I&apos;m thrilled to hear the positive feedback!
                      </p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light p-5">
              <h3 className="mb-4 section-title">Leave a comment</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="url"
                    className="form-control"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group mb-0">
                  <input
                    type="submit"
                    value="Leave Comment"
                    className="btn btn-primary px-3"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="d-flex flex-column text-center bg-secondary mb-5 py-5 px-4">
              <img
                src="/img/team-1.jpg"
                className="img-fluid rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px" }}
                alt="Sarah Mitchell"
              />
              <h3 className="text-primary mb-3">Sarah Mitchell</h3>
              <p className="text-white m-0">
                Lead designer at iDESIGN with over 15 years of experience
                creating timeless interiors. Passionate about blending classic
                principles with contemporary living.
              </p>
            </div>

            <div className="mb-5">
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search articles..."
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <div className="mb-5">
              <h3 className="mb-4 section-title">Categories</h3>
              <ul className="list-group">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {category.name}
                    <span className="badge badge-primary badge-pill">
                      {category.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <img src="/img/blog-1.jpg" alt="" className="img-fluid" />
            </div>

            <div className="mb-5">
              <h3 className="mb-4 section-title">Recent Posts</h3>
              {recentPosts.map((post) => (
                <div
                  key={post.slug}
                  className="d-flex align-items-center border-bottom mb-3 pb-3"
                >
                  <img
                    className="img-fluid"
                    src={post.image}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />
                  <div className="d-flex flex-column pl-3">
                    <Link
                      className="text-dark mb-2"
                      href={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                    <div className="d-flex">
                      <small className="mr-3">
                        <i className="fa fa-user text-primary"></i>{" "}
                        {post.author}
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
              ))}
            </div>

            <div className="mb-5">
              <img src="/img/blog-2.jpg" alt="" className="img-fluid" />
            </div>

            <div>
              <h3 className="mb-4 section-title">Tag Cloud</h3>
              <div className="d-flex flex-wrap m-n1">
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Design
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Interior
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Modern
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Luxury
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Residential
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Commercial
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Sustainable
                </Link>
                <Link href="/blog" className="btn btn-outline-primary m-1">
                  Colors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Detail End */}

      <Footer />
      <BackToTop />
    </>
  );
}
