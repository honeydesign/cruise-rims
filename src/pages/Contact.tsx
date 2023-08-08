import Hero from "../components/Hero";
import ContactComp from "../components/Contact";
import contactType1 from "../assets/contactType1.png";
import productContact1 from "../assets/product-contact.png";
import productContact2 from "../assets/product-contact2.png";
import productContact3 from "../assets/product-contact3.png";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero && Navigation */}
      <Hero
        title="CONTACT CRUISERIMS"
        subtitle="LET’S CONNECT AND ELEVATE YOUR DRIVING EXPERIENCE"
        imageLabel="bg-bgContact"
      />

      {/* Contact types */}
      <ContactComp
        image={contactType1}
        title="GENERAL INQUIRIES"
        subtitle="For general questions about our products, services, or any other
                  information, please email us at info@cruiserims.com. We aim to 
                  respond promptly and provide you with all the details you need.
                  "
      />

      <ContactComp
        image={productContact1}
        title="CUSTOMIZATION REQUESTS"
        subtitle="Looking for personalized rims that match your unique style?
                Our expert design team is eager to turn your vision into reality. 
                Send us an email at customization@cruiserims.com, 
                and we'll work closely with you to create your dream set 
                of rims."
      />

      <ContactComp
        image={productContact2}
        title="TECHNICAL SUPPORT"
        subtitle="If you need technical assistance or have questions about rim 
                    compatibility with your vehicle, our skilled support team is 
                    here to help. Email us at techsupport@cruiserims.com, and 
                    we'll provide you with the guidance you need for a smooth and 
                    successful installation."
      />

      <ContactComp
        image={productContact3}
        title="CUSTOMER SUPPORT"
        subtitle="Need to speak with a representative directly? Our friendly customer support team is just a phone call away. Dial +1 (800) CRUISE-RIMS to talk to us during our business hours, and we'll gladly address your queries and concerns."
      />

      {/* Contact Details */}
      <div className="bg-black max-w-6xl mx-auto lg:h-[768px] xl:h-[700px] flex flex-col items-center justify-center gap-y-3 p-1 mb-[4rem] md:h-[1100px] sm:h-[1300px]">
        <div className="text-center">
          <span className="text-xl font-bold font-poppins text-secondary">
            CONTACT DETAILS
          </span>
        </div>

        <div className="text-center ">
          <span className="text-sm font-poppins text-secondary">
            At Cruiserims, we are committed to providing you with the
            best-in-class rims that redefine style, performance, and elegance.
            Contact us now, and let's embark on a journey to elevate your
            driving experience to new heights. Trust Cruiserims for exceptional
            products and unparalleled customer service.
          </span>
        </div>

        <div className="flex items-start justify-start gap-x-[12rem] mt-[3rem]  md:flex-col sm:flex-col md:gap-y-2 sm:md:gap-y-2 lg:flex-row xl:flex-row ">
          <div className="flex flex-col items-start justify-start space-y-4 h-[200px] md:items-center md:justify-center sm:items-center sm:justify-center  lg:justify-start lg:items-start xl:justify-start xl:items-start sm:mt-3">
            <div className="">
              <span className="text-sm text-secondary  font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                CRUISERIMS SHOWROOM
              </span>
            </div>
            <div className="w-[329px] h-[175px] text-center lg:text-left xl:text-left">
              <span className="text-xs font-poppins text-secondary">
                [Your Address Here] <br />
                [City, State, Zip Code] <br /> <br />
                Our showroom is open MON-FRI: 9AM - 5PM. Drop by, and our team
                will be thrilled to provide you with a personalized tour and
                answer any questions you may have.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-4 h-[200px] md:items-center md:justify-center sm:items-center sm:justify-center lg:justify-start lg:items-start xl:justify-start xl:items-start sm:mt-6">
            <div className="">
              <span className="text-sm text-secondary  font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                CONNECT WITH US ONLINE
              </span>
            </div>
            <div className="w-[329px] h-[175px] text-center lg:text-left xl:text-left">
              <span className="text-xs font-poppins text-secondary">
                Stay updated on the latest Cruiserims news, product launches,
                and automotive trends by following us on social media:
                <br /> <br />
                Facebook: [Link] <br />
                Instagram: [Link]
                <br />
                Twitter: [Link]
                <br />
                LinkedIn:[Link]
                <br />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start gap-x-[12rem] mt-[3rem] md:flex-col sm:flex-col lg:flex-row xl:flex-row ">
          <div className="flex flex-col items-start justify-start space-y-4 h-[200px] md:justify-center sm:items-center sm:justify-center  lg:justify-start lg:items-start xl:justify-start xl:items-start ">
            <div className="">
              <span className="text-sm text-secondary  font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                COLLABORATION OPPORTUNITIES
              </span>
            </div>
            <div className="w-[329px] h-[175px] text-center lg:text-left xl:text-left">
              <span className="text-xs font-poppins text-secondary">
                At Cruiserims, we value partnerships and collabo- rations with
                industry professionals and businesses. If you're interested in
                working together or becoming a distributor of our premium rims,
                please email us at{" "}
                <span className="text-tertiary">
                  {" "}
                  partnerships@cruiserims.com
                </span>
                We're excited to explore new possibilities together!
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-4 h-[200px] md:items-center md:justify-center sm:items-center sm:justify-center  lg:justify-start lg:items-start xl:justify-start xl:items-start ">
            <div className="">
              <span className="text-sm text-secondary  font-semibold font-poppins border-solid border-b-2 py-2 border-[#F9A602]">
                CONTACT FORM
              </span>
            </div>
            <div className="w-[329px] h-[175px] text-center lg:text-left xl:text-left">
              <span className="text-xs font-poppins text-secondary">
                Alternatively, you can fill out the contact form on our website
                <span className="text-tertiary">
                  (www.cruiserims.com/contact)
                </span>{" "}
                to share your inquiries, suggestions, or feedback. We read every
                message and ensure a timely response.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
