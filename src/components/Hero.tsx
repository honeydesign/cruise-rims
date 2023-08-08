import { useCallback, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

type heroProps = {
  title: string;
  subtitle?: string;
  imageLabel: string;
};

function Hero({ title, subtitle, imageLabel }: heroProps) {
  // state for the hamburger using the mobile
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // function that switches the hamburger to the nav links
  const showMobileNavLinks = useCallback(() => {
    setIsMobile(!isMobile);

    return () => {
      setIsMobile(false);
    };
  }, [isMobile]);

  return (
    <div
      className={`w-full h-[452px] bg-no-repeat bg-cover bg-center ${imageLabel} `}
    >
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

      <div className=" flex flex-col space-y-6 items-center justify-center w-full h-[395px] z-10 ">
        {!isMobile && (
          <span className="text-white font-jost text-[2rem] font-bold text-center xl:text-[5rem] lg:text-[4rem] md:text-[3rem]">
            {title}
          </span>
        )}

        {!isMobile && (
          <span className="text-white font-poppins text-xs text-center font-bold">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export default Hero;
