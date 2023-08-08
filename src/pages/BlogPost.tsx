import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Hero title="CRUISERIMS BLOG" imageLabel="bg-bgBlog1" />

      <div className=" max-w-7xl mx-auto h-[280px] flex flex-col items-center justify-center sm:w-full  mt-4 lg:p-4 md:p-4">
        <div>
          <span className="font-poppins   md:text-2xl lg:text-2xl xl:text-2xl text-primary font-extrabold sm:text-center sm:text-sm">
            TITLE: THE ULTIMATE GUIDE TO CAR RIMS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start ">
        <div className="">
          <span className="font-poppins sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-primary font-extrabold sm:p-3">
            INTRODUCTION:
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            As a car enthusiast, you know that rims play a crucial role in
            transforming the overall look and performance of your vehicle. At
            Cruiserims, we are passionate about crafting high-quality rims that
            not only elevate the aesthetics but also enhance the driving
            experience. In this comprehensive guide, we will delve into the
            world of car rims, exploring various types and their unique uses.
            Let's embark on a journey of style, performance, and excellence with
            Cruiserims.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start ">
        <div className="sm:text-center">
          <span className="font-poppins md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-[1rem]  sm:p-3">
            ALLOY RIMS: The Perfect Balance of Style and Performance
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            Alloy rims are the go-to choice for many drivers seeking a blend of
            elegance and performance. Made from a combination of aluminum and
            other metals, alloy rims are lightweight, which reduces unsprung
            weight and improves handling and fuel efficiency. Cruiserims offers
            a diverse array of alloy rims, each with its own distinctive design,
            catering to various vehicle types and personal preferences. Whether
            you crave a sleek and modern look or a sporty and aggressive
            appearance, our alloy rims have you covered.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start ">
        <div className="sm:text-center">
          <span className="font-poppins  md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-xl sm:p-3">
            STEEL RIMS: Durability Meets Affordability
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            As a car enthusiast, you know that rims play a crucial role in
            transforming the overall look and performance of your vehicle. At
            Cruiserims, we are passionate about crafting high-quality rims that
            not only elevate the aesthetics but also enhance the driving
            experience. In this comprehensive guide, we will delve into the
            world of car rims, exploring various types and their unique uses.
            Let's embark on a journey of style, performance, and excellence with
            Cruiserims.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start  ">
        <div className="sm:text-center">
          <span className="font-poppins  md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-xl sm:p-3">
            FORGED RIMS: Precision Engineering at its Finest
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            If you demand the highest level of performance, our forged rims are
            the pinnacle of craftsmanship and engineering. Created by
            compressing aluminum under immense pressure, these rims boast
            exceptional strength-to-weight ratios, resulting in improved
            agility, cornering, and braking capabilities. Cruiserims' forged
            rims are meticulously designed to enhance both the aesthetics and
            performance of your vehicle, making them an ideal choice for
            performance-oriented drivers.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start  ">
        <div className="sm:text-center">
          <span className="font-poppins  md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-xl sm:p-3">
            SPINNING RIMS: Adding Flair To Your Wheels
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            For those who love making a bold statement, spinning rims are the
            epitome of flashiness. These attention-grabbing rims feature
            rotating hubcaps that keep spinning even when the vehicle is
            stationary, creating an eye-catching effect that turns heads
            wherever you go. If you seek to stand out from the crowd and add a
            touch of showmanship to your ride, our collection of spinning rims
            will undoubtedly impress.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start ">
        <div className="sm:text-center">
          <span className="font-poppins  md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-xl sm:p-3">
            CHROME PLATED RIMS: Embrace Elegance and Shine
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            For an elegant and timeless look, chrome plated rims are the way to
            go. At Cruiserims, our chrome plated rims undergo a meticulous
            process to coat them with a brilliant chrome finish, adding a touch
            of sophistication to any vehicle. With their mirror-like shine,
            these rims not only elevate your car's appearance but also draw
            attention and admiration wherever you drive.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[400px] sm:items-center sm:justify-center md:items-start md:justify-start  ">
        <div className="sm:text-center">
          <span className="font-poppins  md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-xl sm:p-3">
            CUSTOMIZED RIMS: Your Imagination, Our Expertise
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            At Cruiserims, we understand that every car enthusiast has a unique
            vision for their vehicle. Our team of skilled designers and
            engineers is dedicated to bringing your dream rims to life. Whether
            you desire personalized engravings, unique finishes, or custom
            sizing, our expertise and craftsmanship will ensure that your rims
            are a true reflection of your personality and style.
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-[150px] flex flex-col items-start justify-start gap-y-3 mt-1 lg:p-4 md:p-4 sm:h-[460px] sm:items-center sm:justify-center md:items-start md:justify-start  ">
        <div className="sm:text-center">
          <span className="font-poppins  md:text-xl lg:text-xl xl:text-2xl text-primary font-extrabold sm:text-xl sm:p-3">
            CONCLUSION
          </span>
        </div>
        <div className="w-[1133px] h-[63px]  lg:w-[980px] md:w-[720px] sm:w-[320px]  xl:w-full sm:h-[auto] sm:p-3">
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            Choosing the right car rims is not just about aesthetics; it's about
            enhancing your driving experience and unleashing the full potential
            of your vehicle. At Cruiserims, we take pride in offering a wide
            range of high-quality rims that cater to every driver's needs and
            desires. Whether you prefer the finesse of alloy rims, the
            durability of steel rims, the performance of forged rims, the flair
            of spinning rims, or the elegance of chrome plated rims, we have the
            perfect solution for you.
          </span>
          <br />
          <br />
          <span className="sm:text-sm md:text-sm lg:text-lg xl:text-2xl text-primary font-poppins">
            Explore our extensive collection of rims and let Cruiserims be your
            trusted partner in elevating your ride to new heights of style,
            performance, and excellence. Embrace the art of automotive elegance
            - Choose Cruiserims today!
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
