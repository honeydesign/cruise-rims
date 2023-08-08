import showrim1 from "../assets/show-rim1.png";
import showrim2 from "../assets/show-rim2.png";
import showrim3 from "../assets/show-rim3.png";
import showrim4 from "../assets/show-rim4.png";
import showrim5 from "../assets/show-rim5.png";

const ShowRoom = () => {
  return (
    <div className="snap-start">
      {/* Title & subTitle */}
      <div className="flex flex-col items-center justify-center space-y-3 max-w-8xl mx-auto mt-[6rem] xl:w-[1085px] xl:h-auto xl:text-center ">
        <div>
          <span className="font-extrabold text-2xl font-poppins text-center">
            VISIT OUR SHOWROOM
          </span>
        </div>

        <div className=" w-8/12 sm:w-full p-2 text-center">
          <span className="text-center font-normal text-xs font-poppins ">
            For an up-close and personal experience with our stunning rim
            collection, visit our state-of-the-art showroom. Discover the art of
            automotive elegance and witness firsthand why Cruiserims is the
            preferred choice of car enthusiasts across the USA.
          </span>
        </div>
      </div>

      {/* Show Room Gallery */}
      <div className="  flex flex-col space-y-3 items-center justify-center space-x-[-1rem] lg:space-x-1 md:space-x-1 mt-[4rem] mb-[9rem] py-3 md:flex md:flex-row xl:flex xl:flex-row lg:flex lg:flex-row">
        <div className="w-4/12">
          <img
            src={showrim1}
            className=" md:h-[354px] md:mt-4 lg:h-[490px] lg:mt-4 xl:h-[672px] xl:w-[505px]"
            alt=""
          />
        </div>
        <div className=" w-6/12 flex flex-col items-center justify-center  space-y-3  p-2">
          <div className="flex flex-col space-y-3 items-center justify-center space-x-3 md:flex md:flex-row md:space-x-3 md:space-y-0 xl:flex xl:flex-row lg:flex lg:flex-row ">
            <div>
              <img src={showrim2} alt="" />
            </div>
            <div>
              <img src={showrim3} alt="" />
            </div>
          </div>
          <div className="flex  flex-col space-y-3 marker:items-center justify-center space-x-3 md:flex md:flex-row md:space-y-0 xl:flex xl:flex-row lg:flex lg:flex-row">
            <div>
              <img src={showrim4} alt="" />
            </div>
            <div>
              <img src={showrim5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRoom;
