import Button from "./Button";
import Input from "./Input";

const NewsLetter = () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center w-full bg-secondary my-11 p-5 snap-start">
      <div className="text-center">
        <span className="font-extrabold text-2xl text-primary font-poppins text-center">
          JOIN THE CRUISERIMS FAMILY
        </span>
      </div>
      <div className="text-center">
        <span className='className="text-center text-primary font-normal text-xs font-poppins'>
          Become a part of our ever-growing family of satisfied customers and
          elevate your driving experience to new heights. Trust Cruiserims for{" "}
          <br />
          unparalleled craftsmanship, innovation, and customer service that sets
          the standard in the rim manufacturing industry.
        </span>
      </div>

      {/* Form */}
      <div className="h-[209px]">
        <div className="flex flex-col items-center justify-center space-x-4 space-y-4  mt-5 w-full md:flex-row lg:flex-row xl:flex-row">
          <div>
            <Input
              placeholder="Enter your Email"
              className="w-[320px] h-[80px] outline-none border border-7 border-primary rounded-lg font-poppins  md:w-[500px] md:h-[80px] lg:w-[500px] lg:h-[80px] xl:w-[1088px] xl:h-[80px] "
              divClassName=""
            />
          </div>
          <div className="">
            <Button
              type="submit"
              className="w-[500px] h-[50px] px-5  bg-tertiary rounded-lg"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
