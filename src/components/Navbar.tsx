import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

type NavProps = {
  isMobile: boolean;
  showMobileNavLinks: () => void;
};

function Navbar({ isMobile, showMobileNavLinks }: NavProps) {
  return (
    <div className=" flex items-center justify-between w-full bg-[#030300] opacity-[77%] h-[57px]">
      <div className="px-4">
        <img src={logo} alt="" className="w-20 h-20" />
      </div>
      <div
        className="
          xl:flex xl:items-center xl:space-x-6 xl:px-12 
          sm:hidden
          md:flex md:items-center md:space-x-6 md:px-12 
          lg:flex lg:items-center lg:space-x-6 lg:px-12"
      >
        <div>
          <Link to="/">
            <span className="text-xs text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              HOME
            </span>
          </Link>
        </div>
        <div>
          <Link to="/products">
            <span className="text-xs text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              PRODUCTS
            </span>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <span className="text-xs text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              ABOUT
            </span>
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/contact">
            <span className="text-xs text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              CONTACT
            </span>
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/career">
            <span className="text-xs text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              CAREER
            </span>
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/blog">
            <span className="text-xs text-white font-bold font-poppins hover:border-solid hover:border-b-2 hover:border-[#F9A602] hover:p-4 hover:pointer-cursor">
              BLOG
            </span>
          </Link>
        </div>
      </div>
      {!isMobile && (
        <div className="xl:hidden lg:hidden md:hidden sm:block sm:px-4">
          <GiHamburgerMenu
            className="w-8 h-8"
            color={"white"}
            onClick={showMobileNavLinks}
          />
        </div>
      )}
      {isMobile && (
        <div className="xl:hidden lg:hidden md:hidden sm:block sm:px-4">
          <ImCancelCircle
            className="w-8 h-8"
            color={"white"}
            onClick={showMobileNavLinks}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
