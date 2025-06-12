import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-400 text-center py-6 mt-10 text-sm">
      <p>
        © {new Date().getFullYear()} DailyNest • Made with 💚 for dreamers,
        doers, and developers.
      </p>
      <p>Built by Shravan Pai • Inspired by Spotify • Powered by React</p>
    </footer>
  );
};

export default Footer;
