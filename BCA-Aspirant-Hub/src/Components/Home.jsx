import React from "react";
import './Home.css'
import TypingAnimatedText from "./TypingEffect";
import { motion } from "framer-motion";
import 'remixicon/fonts/remixicon.css';


function Home() {
  const content = [
    { text: "Notes, Syllabus, and More for BCA Students", type: "heading" },
    { text: "BCA Aspirant – A platform for BCA students to access notes, syllabus, and essential learning resources.", type: "paragraph" },
  ];

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2, // 1s delay for each item
      },
    }),
  };

  return (
    <div
      id="home-outer"
      className="relative w-screen h-screen flex justify-center items-center flex-col gap-5 text-black"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-[url('/pic02.jpg')] bg-cover bg-center blur-[1px] -z-0"></div>

      {/* Content */}
      <div className="sm:h-[20%] sm:w-full">empty</div>

      <div className="w-[90%] h-full flex flex-col justify-end items-center gap-5 sm:gap-2">
        {content.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className={`${
              item.type === "heading"
                ? "font-bold sm:text-5xl text-3xl z-10 text-white"
                : "text-lg sm:w-6/12 sm:h-[50px] mt-5 text-white z-10"
            }`}
          >
            {item.type === "heading" ? (
              <>
                {item.text}
                {/* Typing Animation placed here */}
                <div className="mt-6">
                  <TypingAnimatedText />
                </div>
              </>
            ) : (
              item.text
            )}
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="w-[45%] sm:h-[67%] h-[40%]  sm:flex flex justify-center items-center sm:justify-start sm:items-start sm:mt-10 gap-5 flex-col sm:flex-row z-10">
        <a href="https://www.facebook.com/sravana.kumvara/about/">
          <button className="sm:w-[200px] w-[200px] bg-blue-500 text-white font-bold border-0 sm:h-[40px] h-[45px] rounded-[7px] hover:border-1 hover:bg-blue-400/5 hover:text-white hover:shadow-[0px_0px_6px_1px_white] transition-all">
            Connect
          </button>
        </a>
        <a href="https://sharwankunwar.github.io/My-Portfolio-07/?fbclid=IwZXh0bgNhZW0CMTEAYnJpZBExdW4yQXVaQ2FZZDZGc245bQEeI2m7WQEI96Npw49oLsSBMWxaa3-G6yTTRNtCkFY22z22hIvvgg6_N7Oloak_aem_rOUNPFnReZ5uANrkleTKLA#">
          <button className="sm:w-[200px] w-[150px] border-1 text-white h-[40px] rounded-[5px] hover:bg-blue-500 hover:text-white hover:shadow-[0px_0px_5px_1px_white] transition-all">
            Learn More
          </button>
        </a>
      </div>


      <section className=" w-[90%] sm:h-[40%] h-[20%] flex justify-center sm:items-center items-start gap-10 sm:hidden z-10">
  <a href="https://www.facebook.com/messenger" target="_blank" rel="noopener noreferrer">
    <button className="w-[40px] h-[40px] bg-blue-600 text-white rounded-full p-3 flex items-center justify-center">
      <i className="ri-facebook-circle-fill text-2xl"></i>
    </button>
  </a>

  <a href="https://github.com/SharwanKunwar" target="_blank" rel="noopener noreferrer">
    <button className="w-[40px] h-[40px] bg-gray-800 text-white rounded-full p-3 flex items-center justify-center">
      <i className="ri-github-fill text-2xl"></i>
    </button>
  </a>

  <a href="https://www.instagram.com" target="_self" rel="noopener noreferrer">
    <button className="w-[40px] h-[40px] bg-pink-500 text-white rounded-full p-3 flex items-center justify-center">
      <i className="ri-instagram-fill text-2xl"></i>
    </button>
  </a>
</section>



      {/* Floating Divs */}
      <div className="bg-white/20 backdrop-blur-sm text-red-600 w-[90%] sm:h-[22%] hidden rounded-t-2xl sm:flex justify-around items-center z-10 shadow-lg border border-white/20">
        <section className="flex justify-around absolute bottom-10 w-[90%]">
          <div id="floating-1" className="flex justify-center items-center"></div>
          <div id="floating-2" className="flex justify-center items-center"></div>
          <div id="floating-3" className="flex justify-center items-center"></div>
          <div id="floating-4" className="flex justify-center items-center"></div>
          <div id="floating-5" className="flex justify-center items-center"></div>
          <div id="floating-6" className="flex justify-center items-center"></div>
        </section>
      </div>
    </div>
  );
}

export default Home;
