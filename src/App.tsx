// creating routing through the application
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the index page */}
        <Route path="/" element={<Home />} />

        {/* Route for the products page */}
        <Route path="/products" element={<Products />} />

        {/* Route for the about page */}
        <Route path="/about" element={<About />} />

        {/* Route for the contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Route for the career page */}
        <Route path="/career" element={<Career />} />

        {/* Route for the blog page */}
        <Route path="/blog" element={<Blog />} />

        {/* Route for the blog post*/}
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
