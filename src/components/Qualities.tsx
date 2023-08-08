import React from "react";

type qualitiesProps = {
  title: string;
  subtitle: string;
  image: string;
};

const Qualities = ({ title, subtitle, image }: qualitiesProps) => {
  return (
    <div className="bg-primary max-w-9xl h-[740px] mt-9 mb-4 mx-auto  flex flex-col items-center space-x-3 md:w-full md:flex-row md:items-center md:justify-center md:h-[650px]  lg:flex-row lg:h-auto xl:flex-row xl:h-auto cursor-pointer">
      <div className="p-9 sm:self-start md:self-center">
        <img
          className="w-[590px] h-[230px] lg:w-[590px] lg:h-[298px] xl:w-[790px] xl:h-[298px]"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full space-y-[1.0rem] md:space-y-6 lg:space-y-3 xl:space-y-3">
        <div className="self-center ml-4 sm:w-[250px]  sm:h-[36px] lg:self-start md:self-center  lg:w-[520px] lg:h-[36px] xl:w-[520px] xl:h-[36px] xl:self-start xl:ml-[9.6rem]">
          <span className="text-secondary font-bold sm:text-sm lg:text-2xl xl:text-2xl  lg:border-solid lg:border-b-2 lg:py-2 lg:border-[#F9A602] xl:border-solid xl:border-b-2 xl:py-2 xl:border-[#F9A602]">
            {title}
          </span>
        </div>
        <br />
        <div className="w-[300px] h-[156px] ml-[2rem] md:mt-[5rem] lg:ml-0 lg:w-[672px] lg:h-[156px] xl:w-[672px] xl:h-[156px] xl:ml-0  p-4">
          <span className="text-secondary font-normal text-normal">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
