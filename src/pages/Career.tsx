import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";

const Career = () => {
  const [careerOne, setCareerOne] = useState(1);

  const handleCareerOne = () => {
    setCareerOne(1);
  };

  const handleCareerTwo = () => {
    setCareerOne(2);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero && Navigation */}
      <Hero
        title="JOIN THE CRUISERIMS TEAM"
        subtitle="DRIVE YOUR CAREER TO NEW HEIGHTS"
        imageLabel="bg-bgCareer"
      />

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[280px] sm:w-full flex flex-col items-center justify-center gap-y-4 mt-4 ">
        <div>
          <span className="font-montserrat text-xl text-secondary font-extrabold">
            WHY WORK WITH US?
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center  lg:w-[980px] md:w-[720px] sm:w-[320px] sm:h-[auto] sm:p-3">
          <span className="text-sm text-secondary font-montserrat">
            At Cruiserims, we believe that our success lies in the dedication
            and talent of our team members. As a fast-growing rim manufacturing
            company based in the USA, we offer an exciting and dynamic work
            environment where innovation and creativity thrive. Join us, and
            together, we'll shape the future of the automotive industry.
          </span>
        </div>
      </div>

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[438px] sm:w-full flex flex-col items-center justify-center gap-y-[6rem] mt-4 mb-5 sm:h-[560px]">
        <div className="mt-[-7rem] sm:mt-[-20rem] lg:mt-[-4rem] ">
          <span className="font-montserrat text-xl text-secondary font-extrabold">
            OUR VALUES
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center flex flex-col justify-start items-start md:justify-start gap-y-3 md:w-[500px] sm:w-[300px] lg:ml-[12rem] lg:h-[245px] xl:justify-start lg:justify-start xl:w-[1133px] lg:w-[1133px]">
          <span className="text-xs text-secondary font-poppins">
            At the core of our company culture are values that drive us to excel
            in everything we do:
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Passion:{" "}
            </span>
            reflects in the quality and craftsmanship of our products.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs font-extrabold font-poppins">
              Innovation:{" "}
            </span>
            Embracing new ideas and staying ahead of the curve is what fuels our
            innovative spirit.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Teamwork:{" "}
            </span>
            Collaboration is key to our success. We work together as a
            close-knit team to achieve our goals.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Sustainability:{" "}
            </span>
            We are committed to eco-friendly practices, ensuring our impact on
            the environment remains positive.
          </span>

          <span className="text-secondary text-xs   font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Quality:{" "}
            </span>
            Excellence is non-negotiable. Our commitment to quality sets us
            apart in the industry.
          </span>
        </div>
      </div>

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[438px] sm:w-full flex flex-col items-center justify-center gap-y-[6rem] mt-4 mb-5 sm:h-[560px]">
        <div className="mt-[-7rem] sm:mt-[-20rem] lg:mt-[-4rem] ">
          <span className="font-montserrat text-xl text-secondary font-extrabold">
            WHAT WE OFFER
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center flex flex-col justify-start items-start md:justify-start gap-y-3 md:w-[500px] sm:w-[300px] lg:ml-[12rem] lg:h-[245px] xl:justify-start lg:justify-start xl:w-[1133px] lg:w-[1133px]">
          <span className="text-xs text-secondary font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Professional Growth:
            </span>{" "}
            We invest in our employees' development, offering opportunities for
            skill enhancement and career advancement.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Passionate Team:
            </span>{" "}
            Join a team of automotive enthusiasts who share the same love for
            cars and craftsmanship.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs font-extrabold font-poppins">
              Challenging Projects:
            </span>{" "}
            Work on exciting projects that push the boundaries of rim
            manufacturing and design.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Competitive Benefits:
            </span>{" "}
            Enjoy competitive salary packages and benefits that reward your hard
            work.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              State-of-the-Art Facilities:
            </span>{" "}
            Our modern manufacturing facilities are equipped with cutting-edge
            technology.
          </span>

          <span className="text-secondary text-xs   font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Global Reach:
            </span>{" "}
            Be part of a company with a global presence and contribute to our
            international success.
          </span>
        </div>
      </div>

      {/* Career Page */}
      <div className="max-w-7xl mx-auto bg-primary rounded-md h-[780px] flex flex-col items-center justify-center gap-y-4 mb-4 p-3">
        <div className="">
          <span className="text-secondary font-poppins text-center text-2xl font-extra-bold">
            {" "}
            CURRENT OPEN POSITION
          </span>
        </div>
        {careerOne === 1 && (
          <>
            <Jobs
              title="RIM DESIGNER"
              description="Are you a creative designer with an eye for automotive aesthetics? Join us in crafting visually 
                        stunning and performance-driven rim designs."
            />
            <Jobs
              title="MANUFACTURING ENGINEER"
              description="Contribute your engineering expertise to optimize our manufacturing processes and enhance product quality."
            />
            <Jobs
              title="MARKETING SPECIALIST"
              description="Drive our brand awareness and market presence through innovative marketing strategies."
            />
          </>
        )}

        {careerOne === 2 && (
          <>
            <Jobs
              title="DATA ANALYST"
              description="Utilize data to uncover insights and support data-driven decision-making across the organization."
            />
            <Jobs
              title="SALES REPRESENTATIVE"
              description=" Join our sales team in building strong relationships with clients and driving business growth."
            />
          </>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-3">
          <div
            className={`${
              careerOne === 1
                ? "border border-tertiary rounded-full w-[30px] h-[30px] bg-tertiary text-primary flex items-center justify-center cursor-pointer"
                : "border border-secondary rounded-full w-[30px] h-[30px] bg-primary text-secondary flex items-center justify-center cursor-pointer"
            }`}
            onClick={handleCareerOne}
          >
            1
          </div>
          <div
            className={`${
              careerOne === 2
                ? "border border-tertiary rounded-full w-[30px] h-[30px] bg-tertiary text-primary flex items-center justify-center cursor-pointer"
                : "border border-secondary rounded-full w-[30px] h-[30px] bg-primary text-secondary flex items-center justify-center cursor-pointer"
            }`}
            onClick={handleCareerTwo}
          >
            2
          </div>
        </div>
      </div>

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[350px] flex flex-col items-center justify-center gap-y-4 mt-[2rem] mb-4 ">
        <div>
          <span className="font-poppins text-xl text-secondary font-extrabold">
            HOW TO APPLY?
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center  lg:w-[980px] md:w-[720px] sm:w-[320px] sm:h-[auto] sm:p-3">
          <span className="text-xs text-secondary font-poppins">
            Don't See Your Role? If you believe you have something exceptional
            to offer to Cruiserims, we'd love to hear from you. Send us your
            resume, and let's explore potential opportunities.
          </span>
          <br />
          <br />
          <span className="text-xs text-secondary font-poppins">
            To apply for a position or express your interest in joining the
            Cruiserims team, email your resume and a cover letter detailing your
            qualifications and passion for our industry to
            <span className="text-tertiary font-poppins">
              careers@cruiserims.com.
            </span>
          </span>
        </div>
      </div>

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[350px] flex flex-col items-center justify-center gap-y-4 mt-[2rem] mb-4 ">
        <div>
          <span className="font-poppins text-xl text-secondary font-extrabold">
            JOIN US TODAY
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center  lg:w-[980px] md:w-[720px] sm:w-[320px] sm:h-[auto] sm:p-3">
          <span className="text-xs text-secondary font-poppins">
            At Cruiserims, we offer more than just jobs; we provide a platform
            for individuals to thrive and grow. Join us on this exciting journey
            of innovation, craftsmanship, and automotive excellence. Together,
            let's elevate your career to new heights.
          </span>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;
