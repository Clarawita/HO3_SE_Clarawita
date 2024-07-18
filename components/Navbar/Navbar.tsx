import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`z-10 fixed flex flex-row justify-between w-full items-center py-8 px-6 lg:px-20 md:px-12 sm:px-12 transition-colors duration-200 ${scrolled ? 'bg-[#f5efff]' : 'bg-transparent'}`}>
      <a className="w-5\/6">
        <Image
          src="/images/logo.png"
          alt="Landscape picture"
          width={150}
          height={400}
        />
      </a>
      <ul className={`flex flex-row gap-10 list-none ${menuOpen ? 'flex-col fixed top-20 right-0 bg-white p-8 w-40 rounded-lg shadow-lg transition-transform duration-300 transform translate-x-0' : 'hidden md:flex'}`}>
        {[
          ['Home', '/'],
          ['About', '/'],
          ['Course', '/course'],
          ['Contact', '/'],
        ].map(([title, url, index]) => (
          <li key={index}><a href={url} className="alist">{title}</a></li>
        ))}
      </ul>

      <a className="hidden button1 md:flex" href="#">Login</a>
      <div className={`hamburger md:hidden ${menuOpen ? 'active' : ''}`} onClick={mobileMenu}>
        <span className={`bar block w-6 h-0.5 my-1 mx-auto transition-all duration-300 bg-black ${menuOpen ? 'transform translate-y-2 rotate-45' : ''}`}></span>
        <span className={`bar block w-6 h-0.5 my-1 mx-auto transition-all duration-300 bg-black ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`bar block w-6 h-0.5 my-1 mx-auto transition-all duration-300 bg-black ${menuOpen ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>
      </div>
    </nav>
  );
};
