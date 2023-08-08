type HeaderProps = {
  title: string;
  subTitle: string;
};

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <div>
          <span className="font-extrabold text-2xl text-white font-poppins text-center">
            {title}
          </span>
        </div>
        <div>
          <span className='className="text-center text-white font-extrabold text-xs font-poppins'>
            {subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
