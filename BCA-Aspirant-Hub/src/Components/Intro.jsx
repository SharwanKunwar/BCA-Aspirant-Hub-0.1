import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';


const Button = ({ variant, className, children }) => {
  const baseStyle = 'px-4 py-2 rounded-lg font-semibold ';
  const variants = {
    outline: 'border border-blue-600 text-blue-600',
    solid: 'bg-blue-600 text-white',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6">
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

// text effect function
const textEffect = (element, time) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&*()_+-";
  let interval = null;
  const originalText = element.textContent;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iteration) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, time);
};

const Intro = () => {
  const text01 = "Your Ultimate Resource  for BCA Notes, Syllabus, and More ...";
  const textRef = useRef(null);  

  useEffect(() => {
    if (textRef.current) {
      textEffect(textRef.current, 15);  
    }
  }, []);

  return (
    <div id='intro-outer' className="min-h-screen bg-gray-50 p-4 flex flex-col sm:flex-row sm:gap-0 sm:justify-center justify-center items-center">
      <header className="text-center py-8 sm:w-6/16">
        <h1 className="text-4xl font-bold text-blue-60 sm:flex">BCA Aspirant</h1>
        {/* Add the reference to the <p> tag */}
        <p ref={textRef} className="text-lg text-gray-700 mt-2 flex ">{text01}</p>
      </header>
      <main className="flex flex-col items-center">
        <motion.div
          className="mt-8 w-full max-w-xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold">Welcome to BCA Aspirant</h2>
              <p className="mt-2 text-gray-600">Access notes, syllabus, study materials, and stay updated on BCA topics.</p>
              <div className="mt-4 space-x-2 flex sm:justify-baseline sm:gap-0 gap-10">
                <Link to="home"><Button className="hover:bg-blue-400 hover:text-white" variant="outline">Get Started</Button></Link>
                <Button variant="solid">Explore More</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <section className=" w-[90%] sm:h-[40%] flex justify-center sm:items-center items-start gap-10 sm:hidden mt-10 ">
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

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <button className="w-[40px] h-[40px] bg-pink-500 text-white rounded-full p-3 flex items-center justify-center">
            <i className="ri-instagram-fill text-2xl"></i>
          </button>
        </a>
      </section>
    </div>
  );
};

export default Intro;
