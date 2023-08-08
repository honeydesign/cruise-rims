import React from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const ContactUs = () => {
  return (
    <div className="w-full bg-primary h-[auto] p-7 mt-[5rem] snap-start">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div>
          <span className="font-extrabold text-2xl text-white font-poppins text-center">
            CONTACT US TODAY
          </span>
        </div>
        <div className="text-center">
          <span className='className="text-center text-white font-normal text-xs font-poppins'>
            Have questions or ready to get started on your customized rims? Our
            friendly customer support team is here to assist you. <br /> Get in
            touch with us today by filling out the form and let's embark on this
            exciting journey together.
          </span>
        </div>
      </div>

      {/* Form */}
      <form action="">
        <div className="flex flex-col items-center justify-center space-y-[0.8rem] mt-[3rem] md:space-y-[0.8rem] xl:space-y-[2rem] lg:space-y-[2rem]">
          <div className="flex flex-col items-center space-y-2  lg:flex-row lg:justify-evenly xl:flex-row xl:justify-evenly  w-full">
            <div>
              <Input
                placeholder="Your full Name"
                className="outline-none w-[298px] h-[47px] xl:w-[498px] lg:w-[398px]  font-poppins "
                divClassName=""
              />
            </div>
            <div>
              <Input
                placeholder="Your email address"
                className="outline-none w-[298px] h-[47px] xl:w-[498px] xl:mt-[-1.1rem] lg:w-[398px] lg:mt-[-1.0rem]  font-poppins"
                divClassName=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2  lg:flex-row lg:justify-evenly xl:flex-row xl:justify-evenly w-full">
            <div>
              <Input
                placeholder="Your Phone Number"
                className="outline-none w-[298px] h-[47px] xl:w-[498px] lg:w-[398px]   font-poppins"
                divClassName=""
              />
            </div>
            <div>
              <Input
                placeholder="Year/Make/Model"
                className="outline-none w-[298px] h-[47px]  xl:mt-[-1.3rem] xl:w-[498px] lg:w-[398px] lg:mt-[-1.0rem]  font-poppins"
                divClassName=""
              />
            </div>
          </div>
          <div>
            <TextArea
              placeholder="Your Message"
              className="outline-none w-[298px] h-[229px]  xl:w-[1149px] xl:h-[229px] lg:w-[857px] lg:h-[229px] lg:mt-[-1.0rem] xx:w-[920px]  font-poppins"
              divClassName=""
            />
          </div>
          <div className="">
            <Button
              type="submit"
              className="w-[500px] h-[50px] px-5  bg-tertiary rounded-lg"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
