import React from "react";
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useDarkMode } from "../contexts/AppThemeProvider";

const Footer = ({ year }: { year: string }) => {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/maheshmnj" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/maheshjamdade" },
    { icon: FaTwitter, url: "https://twitter.com/maheshmnj" },
    { icon: FaCode, url: "https://leetcode.com/maheshjamdade/" }
  ];

  return (
    <footer className={`py-6 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h5 className="text-xl font-semibold">Mahesh Jamdade</h5>
            <p className="text-sm">Full Stack Developer</p>
          </div>
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-sm">&copy; {year} All rights reserved</p>
          </div>
          <div className="flex justify-center md:justify-end">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none me-3"
                >
                  <Icon size={24} />
                </a>
              );
            })
            }
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;