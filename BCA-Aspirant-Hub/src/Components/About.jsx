import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-gray-50 w-screen sm:h-screen sm:flex">
      <motion.div
        className="sm:w-6/12 w-full sm:h-full h-6/12 p-7 relative sm:flex sm:flex-col sm:justify-center sm:items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <motion.div
  className="w-full sm:h-6/8 sm:w-6/8 h-[450px] flex justify-center items-center rounded-lg"
  initial={{ opacity: 0, x: -300 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.01 }}
  transition={{
    duration: 1,
    type: "tween",
    ease: "easeOut",
    hover: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  }}
  style={{
    backgroundImage: "linear-gradient(114.2deg, rgba(184,215,21,1) -15.3%, rgba(21,215,98,1) 14.5%, rgba(21,215,182,1) 38.7%, rgba(129,189,240,1) 58.8%, rgba(219,108,205,1) 77.3%, rgba(240,129,129,1) 88.5%)",
  }}
>
  <div className="bg-black w-[98%] h-[98%] rounded-lg">img</div>
</motion.div>


        <section className="sm:block hidden w-[90%] h-[100px]">
          <div className="w-full h-full flex justify-center items-center">
            <Link to="#">
              <motion.button
                className="bg-blue-500 rounded-lg w-[200px] h-[45px] flex justify-center items-center font-bold text-white hover:bg-blue-300 hover:text-black"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                Join our Community
              </motion.button>
            </Link>
          </div>
        </section>
      </motion.div>

      <div className="sm:w-6/12 w-full sm:h-full p-5">
        <motion.h1 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>About Us – BCA Aspirant</motion.h1>
        <motion.p className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Welcome to <strong>BCA Aspirant</strong>, your one-stop platform dedicated to empowering BCA students with comprehensive notes, syllabus, and study resources.
        </motion.p>

        <motion.h2 className="text-xl font-semibold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Our Mission</motion.h2>
        <motion.p className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Our mission is to provide high-quality educational content that simplifies complex concepts and helps BCA students excel academically.
        </motion.p>

        <motion.h2 className="text-xl font-semibold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>What We Offer</motion.h2>
        <motion.ul className="list-disc pl-5 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <li>Notes and Study Materials: Organized, easy-to-understand notes covering all major BCA subjects.</li>
          <li>Syllabus & Curriculum: Detailed syllabus breakdowns to keep you on track throughout your semester.</li>
          <li>Exam Preparation: Essential resources and tips to help you prepare effectively for your exams.</li>
          <li>Updates and Announcements: Stay informed about important academic updates and events.</li>
        </motion.ul>

        <motion.h2 className="text-xl font-semibold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>Why Choose BCA Aspirant?</motion.h2>
        <motion.p className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          Tailored content specifically for BCA students. Easy-to-navigate website with well-organized content.
        </motion.p>

        <motion.h2 className="text-xl font-semibold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>Join Our Community</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          Stay connected, stay motivated, and achieve your academic goals with us.
        </motion.p>
        <section className="sm:hidden w-[90%] h-[100px]">
          <div className="w-full h-full flex justify-center items-center">
            <Link to="#">
              <motion.button
                className="bg-blue-500 rounded-lg w-[200px] h-[45px] flex justify-center items-center font-bold text-white hover:bg-blue-300 hover:text-black"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Join our Community
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
