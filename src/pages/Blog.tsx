import Hero from "../components/Hero";
import Qualities from "../components/Qualities";
import blogPost from "../assets/blogPost.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero title="CRUISERIMS BLOG" imageLabel="bg-bgBlog1" />

      <div className="flex flex-col items-center justify-center space-y-3">
        <Link to="/blog-post">
          <div>
            <Qualities
              title="THE ULTIMATE GUIDE TO CAR RIMS"
              subtitle="As a car enthusiast, you know that rims play a crucial role in transforming the overall look and performance of your vehicle. At Cruiserims, we are passionate about crafting high-quality rims that not only elevate the aesthetics but also enhance the driving experience. In this comprehensive guide, we will delve into the world of car rims, exploring various types and their unique uses. Let's embark on a journey of style, performance, and excellence with Cruiserims."
              image={blogPost}
            />
          </div>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
