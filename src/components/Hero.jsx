import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/image.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-15  text-center md:text-left"
    >
      <motion.div
        className="md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#1DB954] mb-6">
          Boost Your Day with DailyNest
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          The smart habit tracker and task manager built to keep you consistent,
          productive, and inspired.
        </p>
        <a
          href="/register"
          className="bg-[#1DB954] hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
        >
          Start for Free
        </a>
      </motion.div>

      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <img
          src={heroImage}
          alt="Daily Productivity"
          className="w-[600px] h-[500px] mx-auto "
        />
      </motion.div>
    </section>
  );
};

export default Hero;
