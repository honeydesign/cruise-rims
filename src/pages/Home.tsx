import rim_one from "../assets/rim_one.png";
import rim_two from "../assets/rim_two.png";
import rim_three from "../assets/rim_three.png";
import rim_four from "../assets/rim_four.png";
import rim_five from "../assets/rim_five.png";
import rim_six from "../assets/rim_six.png";
import rim_seven from "../assets/rim_seven.png";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel1Mobile from "../assets/carouselMobile1.png";
import carousel2Mobile from "../assets/carouselMobile2.png";
import carousel3Mobile from "../assets/carouselMobile3.png";
import CompanyDetails from "../components/CompanyDetails";
import Partners from "../components/Partners";
import ShowRoom from "../components/ShowRoom";
import ContactUs from "../components/ContactUs";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // state for the hamburger using the mobile
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // function that switches the hamburger to the nav links
  const showMobileNavLinks = useCallback(() => {
    setIsMobile(!isMobile);

    return () => {
      setIsMobile(false);
    };
  }, [isMobile]);

  const slides = [
    {
      url: carousel1,
    },
    {
      url: carousel2,
    },
    {
      url: carousel3,
    },
  ];

  const slidesMobile = [
    {
      url: carousel1Mobile,
    },
    {
      url: carousel2Mobile,
    },
    {
      url: carousel3Mobile,
    },
  ];

  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);

  const prevSlideMobile = () => {
    const isFirstSlide = currentIndexMobile === 0;
    const newIndex = isFirstSlide
      ? slidesMobile.length - 1
      : currentIndexMobile - 1;
    setCurrentIndexMobile(newIndex);
  };

  const nextSlideMobile = () => {
    const isLastSlide = currentIndexMobile === slidesMobile.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndexMobile + 1;
    setCurrentIndexMobile(newIndex);
  };

  // const goToSlideMobile = (slideIndex: number) => {
  //   setCurrentIndexMobile(slideIndex);
  // };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex: number) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    <div className="snap-y snap-mandatory">
      {/* Navbar + Hero  Section */}
      <div className="w-full h-[452px] relative group">
        <Navbar isMobile={isMobile} showMobileNavLinks={showMobileNavLinks} />
        {/* Mobile view navigation links */}
        {isMobile && (
          <div className="w-full h-full bg-black z-10 flex flex-col space-y-9 items-center justify-center">
            <div>
              <Link to="/">
                <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
                  HOME
                </span>
              </Link>
            </div>
            <div>
              <Link to="/products">
                <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
                  PRODUCTS
                </span>
              </Link>
            </div>
            <div>
              <Link to="/about">
                <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
                  ABOUT
                </span>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
                  CONTACT
                </span>
              </Link>
            </div>
            <div>
              <Link to="/career">
                <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
                  CAREER
                </span>
              </Link>
            </div>
            <div>
              <Link to="/blog">
                <span className="text-sm text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
                  BLOG
                </span>
              </Link>
            </div>
          </div>
        )}

        {!isMobile && (
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full bg-center bg-cover duration-500 sm:hidden md:hidden lg:block xl:block "
          ></div>
        )}
        {!isMobile && (
          <div
            style={{
              backgroundImage: `url(${slidesMobile[currentIndexMobile].url})`,
            }}
            className="w-full h-full bg-center bg-cover duration-500 sm:block md:block lg:hidden xl:hidden"
          ></div>
        )}

        {/* Left Arrow */}
        {!isMobile && (
          <div className=" sm:hidden sm:hover:hidden  md:hidden  md:hover:hidden lg:hidden lg:hover:block xl:hidden xl:group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
        )}
        {/* Right Arrow */}
        {!isMobile && (
          <div className="sm:hidden sm:hover:hidden  md:hidden  md:hover:hidden lg:hidden lg:hover:block xl:hidden xl:group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        )}

        {/* Left Arrow Mobile*/}
        {!isMobile && (
          <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl xl:rounded-none lg:rounded-none rounded-full  p-2 bg-black/20 text-white lg:text-primary xl:text-primary cursor-pointer lg:bg-transparent xl:bg-transparent lg:cursor-none xl:cursor-none">
            <BsChevronCompactLeft
              onClick={prevSlideMobile}
              size={30}
              className="sm:block md:block lg:hidden xl:hidden"
            />
          </div>
        )}
        {/* Right Arrow Mobile*/}
        {!isMobile && (
          <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white xl:rounded-none lg:rounded-none lg:text-primary xl:text-primary cursor-pointer lg:bg-transparent xl:bg-transparent lg:cursor-none xl:cursor-none">
            <BsChevronCompactRight
              onClick={nextSlideMobile}
              size={30}
              className="sm:block md:block lg:hidden xl:hidden"
            />
          </div>
        )}

        {/* {!isMobile && (
          <div className="flex top-4 justify-center py-2 sm:hidden md:hidden lg:block xl:block">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        )} */}

        {/* {!isMobile && (
          <div className="flex  items-center  justify-center py-2 sm:block md:block lg:hidden xl:hidden">
            {slidesMobile.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlideMobile(slideIndex)}
                className="text-2xl flex text-white cursor-pointer bg-blue-500 self-center"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        )} */}
      </div>

      {/* Company Uniqueness */}
      <CompanyDetails>
        {/* one */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[9rem] h-auto p-4 w-full snap-start
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem] 
         "
        >
          <div className="flex flex-col items-center justify-center space-y-4 h-[200px]">
            <div className="text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                UNMATCHED RIM CRAFTMANSHIP
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                At Cruiserims, we take pride in our exceptional craftsmanship,
                delivering top-quality rims that elevate the style and
                performance of your vehicles. Each rim is meticulously
                engineered to withstand the toughest road conditions while
                adding a touch of sophistication to your ride.
              </span>
            </div>
          </div>
          <div className="md:px-4">
            <img
              src={rim_one}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
        </div>

        {/* Two */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[3rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem]"
        >
          <div className="">
            <img
              src={rim_two}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 w-[300px] h-[200px]">
            <div className="text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                CUSTOMIZED SOLUTION
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                We understand that every vehicle deserves a unique touch. Our
                team of skilled designers and engineers can create custom-made
                rims tailored to your exact specifications, making your dream
                wheels a reality. Let us turn your vision into a masterpiece on
                wheels!
              </span>
            </div>
          </div>
        </div>

        {/* Three */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[3rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem]"
        >
          <div className="flex flex-col items-center justify-center space-y-4 w-[300px] h-[200px]">
            <div className="w-[408px] text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                SUPERIOR QUALITY AND DURABILITY
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                Our commitment to excellence drives us to use only the finest
                materials and manufacturing techniques. Rest assured that
                Cruiserims' products are built to last, providing unmatched
                durability and strength for an extended lifespan.
              </span>
            </div>
          </div>
          <div className="">
            <img
              src={rim_three}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
        </div>

        {/* Four */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[3rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem]"
        >
          <div className="">
            <img
              src={rim_four}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 w-[300px] h-[200px]">
            <div className="text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                INNOVATION AT ITS CORE
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                We stay ahead of the curve with cutting-edge technology and
                innovative design concepts. Embrace the latest trends and
                industry advancements with Cruiserims, and experience the thrill
                of driving on the forefront of style and performance.
              </span>
            </div>
          </div>
        </div>

        {/* Five */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[3rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem]"
        >
          <div className="flex flex-col items-center justify-center space-y-4 w-[300px] h-[200px]">
            <div className="w-[408px] text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                ECO-FRIENDLY PRACTICES
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                As a responsible manufacturer, we prioritize sustainability and
                eco-friendliness in our production process. Our environmentally
                conscious practices ensure that your love for cars goes hand in
                hand with a love for the planet.
              </span>
            </div>
          </div>
          <div className="">
            <img
              src={rim_five}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
        </div>

        {/* Six */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[3rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem]"
        >
          <div className="">
            <img
              src={rim_six}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 w-[300px] h-[200px]">
            <div className="text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                EASY INSTALLATION AND MAINTENANCE
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                Effortless installation and hassle-free maintenance are crucial
                when it comes to rims. Cruiserims' products are engineered to
                simplify your life, ensuring that you spend more time on the
                road and less time in the garage.
              </span>
            </div>
          </div>
        </div>

        {/* Seven */}
        <div
          className="flex flex-col items-center justify-center space-y-8 mt-[3rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem]"
        >
          <div className="flex flex-col items-center justify-center space-y-4 w-[300px] h-[200px]">
            <div className="w-[408px] text-center">
              <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                SATISFACTION GUARANTEED
              </span>
            </div>
            <div className="w-[300px] text-center">
              <span className="text-center text-xs font-poppins">
                Your satisfaction is our top priority. We strive to exceed your
                expectations with every purchase, offering a 100% satisfaction
                guarantee on all Cruiserims products. Drive with confidence,
                knowing you've chosen the best for your vehicle
              </span>
            </div>
          </div>
          <div className="">
            <img
              src={rim_seven}
              className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
              alt=""
            />
          </div>
        </div>
      </CompanyDetails>

      {/* Partners */}
      <Partners />

      {/* ShowRoom */}
      <ShowRoom />

      {/* Contact Us Page */}
      <ContactUs />

      {/* Newsletter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
