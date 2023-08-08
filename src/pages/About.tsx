import { useEffect } from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero & Navbar  */}
      <Hero
        title="ABOUT CRUISERIMS"
        subtitle="ELEVATING DRIVING EXPERIENCE WITH EXQUISITE RIMS"
        imageLabel="bg-bgAbout"
      />

      {/* About Us */}
      <div className="max-w-7xl bg-black mt-9 mx-auto flex flex-col space-y-9 items-center justify-center lg:w-[1010px] lg:mx-auto lg:p-5 p-8 sm:w-[320px] md:w-[750px] xl:w-full xl:mx-auto">
        <div className="text-center mt-4">
          <span className="text-secondary text-xl border-solid border-b-2 py-2 border-[#F9A602]">
            Our Story
          </span>
        </div>
        <div className="text-center">
          <span className="text-sm font-poppins text-secondary">
            Welcome to Cruiserims, a leading rim manufacturing company based in
            the USA. We are passionate about crafting high-quality rims that not
            only elevate the appearance of vehicles but also enhance their
            performance on the road. Allow us to share our story and our
            dedication to the art of automotive elegance.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:space-x-2 p-1 md:max-w-7xl md:mx-auto  lg:w-full ml-1 ">
        {/* Features */}

        <Features
          title="OUR JOURNEY"
          subtitle="Cruiserims was founded by a team of 
              automotive enthusiasts with a shared love
              for cars and a vision to revolutionize the 
              rim industry. Our journey began with a 
              simple yet powerful idea - to create rims 
              that combine stunning design, unparalleled 
              craftsmanship, and exceptional performance."
        />

        <Features
          title="CRAFTSMANSHIP"
          subtitle="At Cruiserims, we believe that every rim is 
            a masterpiece. Our skilled craftsmen blend 
            artistry with engineering precision, 
            meticulously creating each rim to exacting 
            standards. From the initial design concept 
            to the final product, our passion for 
            perfection drives us to deliver rims that 
            exceed expectations."
        />

        <Features
          title="INNOVATION"
          subtitle="At Cruiserims, we believe that every rim is 
            a masterpiece. Our skilled craftsmen blend 
            artistry with engineering precision, 
            meticulously creating each rim to exacting 
            standards. From the initial design concept 
            to the final product, our passion for 
            perfection drives us to deliver rims that 
            exceed expectations."
        />

        <Features
          title="QUALITY & DURABILITY"
          subtitle="We take pride in the durability of our rims. 
              Each Cruiserims product undergoes 
              rigorous testing to ensure it meets the 
              highest standards of quality and reliability.
              When you choose Cruiserims, you're 
              investing in rims that are built to last, 
              no matter the road conditions."
        />

        <Features
          title="CUSTOMIZATION"
          subtitle="We understand that every vehicle and 
              owner is unique. That's why we offer a 
              wide range of customization options, 
              allowing you to personalize your rims
              to match your style and preferences. 
              Let us bring your vision to life and create 
              a set of rims that are as distinct as you are."
        />

        <Features
          title="SUBSTAINABILITY"
          subtitle="As a responsible manufacturer, we are 
                committed to sustainability. Our eco-
                conscious practices prioritize resource efficiency and environmentally-friendly 
                materials, reducing our ecological 
                footprint and contributing to a cleaner,
                greener world."
        />
      </div>

      {/*NewsLetter*/}
      <div className="p-6">
        <NewsLetter />
      </div>

      {/*Footer*/}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
