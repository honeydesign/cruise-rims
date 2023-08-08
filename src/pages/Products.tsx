import { useEffect } from "react";
import Hero from "../components/Hero";
import ProductsComp from "../components/Products";
import productImage1 from "../assets/product-img1.png";
import productImage2 from "../assets/product-img2.png";
import productImage3 from "../assets/product-img3.png";
import productImage4 from "../assets/product-img4.png";
import productImage5 from "../assets/product-img5.png";
import productImage6 from "../assets/product-img6.png";
import productImage7 from "../assets/product-img7.png";
import productImage8 from "../assets/product-img8.png";
import productImage9 from "../assets/product-img9.png";
import productImage10 from "../assets/product-img10.png";
import productImage11 from "../assets/product-img11.png";
import productImage12 from "../assets/product-img12.png";
import productImage13 from "../assets/product-img13.png";
import productImage14 from "../assets/product-img14.png";
import productImage15 from "../assets/product-img15.png";
import productImage16 from "../assets/product-img16.png";
import productImage17 from "../assets/product-img17.png";
import productImage18 from "../assets/product-img18.png";
import productImage19 from "../assets/productImage19.png";
import productImage20 from "../assets/productImage20.png";
import productImage21 from "../assets/productImage21.png";
import productImage22 from "../assets/productImage22.png";
import productImage23 from "../assets/productImage23.png";
import productImage24 from "../assets/productImage24.png";
import productImage25 from "../assets/productImage25.png";
import productImage26 from "../assets/productImage26.png";
import productImage27 from "../assets/productImage27.png";
import productImage28 from "../assets/productImage28.png";
import productImage29 from "../assets/productImage29.png";
import productImage30 from "../assets/productImage30.png";
import productImage31 from "../assets/productImage31.png";
import productImage32 from "../assets/productImage32.png";
import productImage33 from "../assets/productImage33.png";
import productImage34 from "../assets/productImage34.png";
import productImage35 from "../assets/productImage35.png";
import productImage36 from "../assets/productImage36.png";

import Qualities from "../components/Qualities";
import qualityImg from "../assets/quality-img1.png";
import qualityPro2 from "../assets/quality-pro2.png";
import qualityPro from "../assets/quality-pro.png";
import qualityPro1 from "../assets/quality-pro1.png";
import qualityPro3 from "../assets/quality-pro3.png";
import qualityPro4 from "../assets/quality-pro4.png";
import qualityPro5 from "../assets/quality-pro5.png";
import qualityImg8 from "../assets/quality-img8.png";
import qualityImg9 from "../assets/quality-img9.png";
import Footer from "../components/Footer";

const Products = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero && Navbar */}
      <Hero
        title="CRUISERIMS PRODUCT PAGE"
        subtitle="ELEVATE YOUR RIDE WITH EXCEPTIONAL RIMS"
        imageLabel="bg-bgProduct"
      />

      {/* Products */}
      <div className="flex flex-col gap-y-2 w-full">
        <ProductsComp
          title="CR+104 MB"
          description="Monoblock
        18 Starts at $2,250 Per Wheel
        Size available from 18 inches to 24 inches
        Width available from 8 inches to 13 inches
        Custom Made in USA"
          imageA={productImage1}
          imageB={productImage2}
          imageC={productImage3}
          imageD={productImage19}
          imageE={productImage20}
          imageF={productImage21}
          mainDescription="Monoblock
18 inches Starts at $2,250 Per Wheel
Size available from 18 inches to 24 inches
Width available from 8 inches to 13 inches
Custom Made in USA
Custom size, PCD, and centre bore
Center Lock conversion for OE equipped center lock systems
Each set of wheels are individually designed and machined for each car
Machined from aerospace-grade forged 6061-T6 aluminum alloy
Lightweight construction with back pocketing as standard to reduce weight
Max concavity designed for each vehicle's brake clearances
Custom finishes are available
FEA tested to VIA, SAE and TUV safety standard"
        />

        <ProductsComp
          title="CR+220 3P"
          description="Duo Block
        18 inches Starts at $2,100 Per Wheel
        Size available from 18 inches to 24 inches
        Width available from 8 inches to 16 inches
        Custom Made in USA"
          imageA={productImage4}
          imageB={productImage5}
          imageC={productImage6}
          imageD={productImage22}
          imageE={productImage23}
          imageF={productImage24}
          mainDescription="Three-piece
18 inches Starts at $2,360 Per Wheel
Size available from 18 inches to  
Width available from 8 inches to 16inches
Custom Made in USA
Custom size, PCD, and centre bore
Center Lock conversion for OE equipped center lock systems
Each set of wheels are individually designed and machined for each car
Machined from aerospace-grade forged 6061-T6 aluminum alloy
Offered with Exposed, 50/50, or Hidden hardware
Titanium hardware is available
Lightweight construction with back pocketing as standard to reduce weight
Max concavity designed for each vehicle's brake clearances
Custom finishes are available
FEA tested to VIA, SAE and TUV safety standards"
        />
        <ProductsComp
          title="CR G45 00B"
          description="
        18 Starts at $2,360 Per Wheel
        Size available from 18 inches to 24 inches
        Width available from 8 inches to 16 inches
        Custom Made in USA"
          imageA={productImage7}
          imageB={productImage8}
          imageC={productImage9}
          imageD={productImage25}
          imageE={productImage26}
          imageF={productImage27}
          mainDescription="Duo Block
18 inches Starts at $2,100 Per Wheel
Size available from 18 inches to 24inches
Width available from 8inches to 16 inches
Custom Made in USA
Custom size, PCD, and centre bore
Center Lock conversion for OE equipped center lock systems
Each set of wheels are individually designed and machined for each car
Machined from aerospace-grade forged 6061-T6 aluminum alloy
Offered with Exposed, 50/50, or Hidden hardware
Titanium hardware is available
Lightweight construction with back pocketing as standard to reduce weight
Max concavity designed for each vehicle's brake clearances
Custom finishes are available
FEA tested to VIA, SAE and TUV safety standards"
        />

        <ProductsComp
          title="CR G0DL77"
          description="
        18 Starts at $2,100 Per Wheel
        Size available from 18 inches to 24 inches
        Width available from 8 inches to 16 inches
        Custom Made in USA"
          imageA={productImage10}
          imageB={productImage11}
          imageC={productImage12}
          imageD={productImage28}
          imageE={productImage29}
          imageF={productImage30}
          mainDescription="18 inches Starts at $2,360 Per Wheel
Size available from 18 inches to 24 inches
Width available from 8 inches to 16 inches
Custom Made in USA
Custom size, PCD, and centre bore
Center Lock conversion for OE equipped center lock systems
Each set of wheels are individually designed and machined for each car
Machined from aerospace-grade forged 6061-T6 aluminum alloy
Offered with Exposed, 50/50, or Hidden hardware
Titanium hardware is available
Lightweight construction with back pocketing as standard to reduce weight
Max concavity designed for each vehicle's brake clearances
Custom finishes are available
FEA tested to VIA, SAE and TUV safety standards"
        />

        <ProductsComp
          title="CR ESDBB34 SOV"
          description="Monoblock
        18 Starts at $2,360 Per Wheel
        Size available from 18 inches to 24 inches
        Width available from 8 inches to 13 inches
        Custom Made in USA"
          imageA={productImage13}
          imageB={productImage14}
          imageC={productImage15}
          imageD={productImage31}
          imageE={productImage32}
          imageF={productImage33}
          mainDescription="18 inches Starts at $2,100 Per Wheel
Size available from 18 inches to 24 inches
Width available from 8 inches to 16 inches
Custom Made in USA
Custom size, PCD, and centre bore
Center Lock conversion for OE equipped center lock systems
Each set of wheels are individually designed and machined for each car
Machined from aerospace-grade forged 6061-T6 aluminum alloy
Offered with Exposed, 50/50, or Hidden hardware
Titanium hardware is available
Lightweight construction with back pocketing as standard to reduce weight
Max concavity designed for each vehicle's brake clearances
Custom finishes are available
FEA tested to VIA, SAE and TUV safety standards"
        />

        <ProductsComp
          title="CR VKLP229 KOL"
          description="Monoblock
        18 Starts at $2,250 Per Wheel
        Size available from 18 inches to 24 inches
        Width available from 8 inches to 13 inches
        Custom Made in USA"
          imageA={productImage16}
          imageB={productImage17}
          imageC={productImage18}
          imageD={productImage34}
          imageE={productImage35}
          imageF={productImage36}
          mainDescription="18 inches Starts at $2,360 Per Wheel
Size available from 18 inches to 24 inches
Width available from 8 inches to 16 inches
Custom Made in USA
Custom size, PCD, and centre bore
Center Lock conversion for OE equipped center lock systems
Each set of wheels are individually designed and machined for each car
Machined from aerospace-grade forged 6061-T6 aluminum alloy
Offered with Exposed, 50/50, or Hidden hardware
Titanium hardware is available
Lightweight construction with back pocketing as standard to reduce weight
Max concavity designed for each vehicle's brake clearances
Custom finishes are available
FEA tested to VIA, SAE and TUV safety standards"
        />
      </div>

      {/* Uniqueness */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <Qualities
          title="EXPLORE OUR PREMIUM RIM COLLECTION"
          subtitle="At Cruiserims, we take great pride in offering a diverse range of top-quality 
          rims that blend exquisite design with unmatched performance. Whether you're 
          a car enthusiast or looking to upgrade your vehicle, our product lineup has 
          something for everyone."
          image={qualityImg}
        />

        <Qualities
          title="THE PERFECT RIM FOR EVERY VEHICLE"
          subtitle="Discover the ideal rim that complements your vehicle's aesthetics and enhances 
its driving dynamics. From sleek and sporty designs to classic and elegant styles
, our collection caters to various preferences, making sure you find the perfect 
fit for your ride.."
          image={qualityPro2}
        />

        <Qualities
          title="UNPARALLELED CRAFTSMANSHIP"
          subtitle="Each Cruiserims product is a testament to our commitment to excellence. 
Crafted with precision and care, our rims are engineered using premium 
materials, cutting-edge technology, and a keen eye for detail. Experience the 
difference of superior craftsmanship on every journey.
"
          image={qualityPro1}
        />

        <Qualities
          title="CUSTOMIZATION OPTIONS"
          subtitle="Each Cruiserims product is a testament to our commitment to excellence. 
Crafted with precision and care, our rims are engineered using premium 
materials, cutting-edge technology, and a keen eye for detail. Experience the 
difference of superior craftsmanship on every journey.
"
          image={qualityPro}
        />

        <Qualities
          title="PERFORMANCE-DRIVEN ENGINEERING"
          subtitle="Not only do our rims look stunning, but they also deliver exceptional performance. 
We focus on optimizing strength, weight, and aerodynamics to ensure that our 
rims provide the best driving experience, be it on city streets or challenging
 terrains."
          image={qualityPro3}
        />

        <Qualities
          title="SUSTAINABILITY MATTERS"
          subtitle="Cruiserims is committed to environmentally friendly practices. We employ 
eco-conscious manufacturing processes, ensuring that our rims are not 
only great for your car but also for the planet."
          image={qualityPro4}
        />

        <Qualities
          title="QUALITY AND DURABILITY GUARANTEED"
          subtitle="Cruiserims is committed to environmentally friendly practices. We employ 
eco-conscious manufacturing processes, ensuring that our rims are not 
only great for your car but also for the planet."
          image={qualityPro5}
        />

        <Qualities
          title="EXPERT SUPPORT"
          subtitle="Have questions about our products or need assistance with choosing the 
right rims for your vehicle? Our expert customer support team is just a phone 
call or email away. We're here to provide you with all the information and 
guidance you need.
"
          image={qualityImg9}
        />

        <Qualities
          title="GET READY TO ELEVATE YOUR RIDE"
          subtitle="Upgrade your vehicle with the finest rims in the market. Browse our product 
collection now and experience the Cruiserims difference. Unleash the true 
potential of your car and embrace the road with style, performance, and 
elegance like never before."
          image={qualityImg8}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
