import React from "react";

type JobProps = {
  title: string;
  description: string;
};

const Jobs = ({ title, description }: JobProps) => {
  return (
    <div className="border border-secondary rounded-xl w-[1200px] h-[160px] flex flex-col items-start p-4 justify-start gap-y-2 sm:w-[310px] sm:h-[230px] md:w-[760px] md:h-[290px] xl:w-[1200px] lg:w-[970px]  sm:justify-center sm:items-center">
      <div className="xl:self-start lg:self-start md:self-start">
        <span className="text-secondary font-bold text-lg font-poppins sm:text-[0.8rem]">
          {title}
        </span>
      </div>
      <div className="xl:self-start lg:self-start md:self-start">
        <span className="text-secondary font-bold text-sm font-poppins sm:text-[0.8rem]">
          {description}
        </span>
      </div>
      <div className="self-end">
        <button className="border border-tertiary w-[100px] h:[80px] text-xs rounded-xl font-poppins text-secondary p-2 ">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Jobs;
