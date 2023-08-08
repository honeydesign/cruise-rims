import { images } from "../utils/data";

const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[3rem] mt-[6rem] mb-5 w-full snap-start ">
      {/* Title */}
      <div>
        <span className="font-poppins text-2xl text-primary font-extrabold text-center">
          PARTNERSHIP COMPANY
        </span>
      </div>

      {/* Images */}
      <div className="flex items-center justify-center space-x-[2rem] w-full p-2 md:space-x-[3.5rem] lg:space-x-[4rem] xl:space-x-[5rem]">
        {images.map((ime: any) => (
          <div>
            <img
              src={ime.image}
              alt=""
              className="sm:w-[70px] sm:h-[50.35px] xl:w-[74px] xl:h-[60.35px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
