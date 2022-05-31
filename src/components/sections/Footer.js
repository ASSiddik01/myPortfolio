import React from "react";

const Footer = () => {
  // Generate dynamic date
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-gray-400 text-center">
          Copyright @ {date}. All rights reserved. Designed and Developed by
          <a
            target="blank"
            className="text-primary"
            href="https://imshama.com/"
            rel="nofollow"
          >
            {" "}
            Abu Shama
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
