type ContactProps = {
  image?: string;
  title: string;
  subtitle: string;
  className?: string;
  children?: any;
};

const ContactComp = ({
  image,
  title,
  subtitle,
  className,
  children = <div></div>,
}: ContactProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-8 mt-[9rem] h-auto p-4 w-full
         md:flex md:flex-row md:space-x-[3rem] md:mt-[5rem] lg:flex lg:flex-row lg:space-x-[9rem] xl:flex xl:flex-row xl:space-x-[9rem] 
         "
    >
      <div className="md:px-4">
        <img
          src={image}
          className="w-[250px] h-[230px] md:w-[310px] md:h-[230px] lg:w-[360px] lg:h-[350px] xl:w-[360px] xl:h-[350px]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 h-[200px]">
        <div className="text-center">
          <span className="text-sm text-center font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
            {title}
          </span>
        </div>
        <div className="w-[300px] text-center">
          <span className={"text-center text-xs font-poppins"}>
            <span className={className}>{subtitle}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
