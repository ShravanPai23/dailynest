import React from "react";
import { motion } from "framer-motion";

const features = [
  "🗓️ Daily Task Manager",
  "📈 Habit Tracker with Analytics",
  "🎯 Weekly Goal Setting",
  "🔔 Smart Notifications",
  "📊 Productivity Reports",
  "💡 Motivational Quotes + Tips",
];

const floatVariants = {
  animate: {
    y: [0, -10, 0, 10, 0],
    rotate: [0, 1, -1, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-transparent text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#1DB954] mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What DailyNest Offers
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-[#181818] p-6 rounded-xl text-center shadow-xl border border-[#1DB954]/30 hover:border-[#1DB954] transition-all duration-300"
            variants={floatVariants}
            animate="animate"
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 20px #1DB954aa",
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            <p className="text-gray-300 text-lg font-medium">{feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
