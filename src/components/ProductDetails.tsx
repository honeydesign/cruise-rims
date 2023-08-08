import React from "react";

type ProductDetailsProps = {
  title: string;
  subtitle: string;
  image: string;
  mainDescription: string;
};

const ProductDetails = ({
  title,
  subtitle,
  image,
  mainDescription,
}: ProductDetailsProps) => {
  return (
    <div className="">
      <span className="text-primary text-[3rem] border-solid border-b-2 py-2 border-[#F9A602]">
        {title}
      </span>
      <div className="w-full flex flex-col items-center justify-center gap-y-2 md:flex-col md:gap-y-3  lg:flex-row lg:gap-x-4 xl:flex-row xl:gap-x-5 mt-9">
        <div className=" w-[200px] h-[280px] xl:w-[806px] xl:h-[405px] lg:w-[806px] lg:h-[505px] xl:mt-[-5rem]">
          <img
            src={image}
            className="w-[900px] h-[440px] sm:h-[320px] md:h-[310px] lg:h-[440px] xl:h-[440px]"
            alt=""
          />
        </div>
        <div className="  mt-[4rem] xl:self-start lg:self-start xl:w-[600px] lg:w-[690px] lg:h-[550px] md:h-[550px]">
          <span className="text-md font-poppins text-center p-3">
            {mainDescription}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
