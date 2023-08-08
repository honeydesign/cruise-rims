/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "330px",
      md: "768px",
      lg: "1024px",
      xx: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#F9A602",
      },
      backgroundImage: {
        bgHero: "url('./assets/home_hero.png')",
        bgProduct: "url('./assets/product-hero.png')",
        bgProductImg1: "url('./assets/product-img1.png')",
        bgProductImg2: "url('./assets/product-img2.png')",
        bgProductImg3: "url('./assets/product-img3.png')",
        bgProductImg4: "url('./assets/product-img4.png')",
        bgAbout: "url('./assets/about-us.png')",
        bgContact: "url('./assets/contact-us.png')",
        bgCareer: "url('./assets/careerPage.png')",
        bgBlog1: "url('./assets/blogFrame.png')",
        bgBlog2: "url('./assets/blogFrame.png')",
        bgSlider1: "url('./assets/carousel1.png')",
        bgSlider2: "url('./assets/carousel2.png')",
        bgSlider3: "url('./assets/carousel3.png')",
      },
      fontFamily: {
        poppins: "Poppins",
        jost: "Jost",
      },
    },
  },
  plugins: [],
};
