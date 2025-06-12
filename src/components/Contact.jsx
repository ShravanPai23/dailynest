import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6  text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#1DB954] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>
      <p className="text-gray-400 mb-8">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <motion.form
        className="max-w-xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-[#181818] border border-gray-700 rounded text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-[#181818] border border-gray-700 rounded text-white"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 bg-[#181818] border border-gray-700 rounded text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-[#1DB954] text-black font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
