
"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // show when scrolling up, hide when scrolling down
      if (currentScroll < lastScroll) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`
        hidden md:flex
        fixed top-0 left-0 w-full
        justify-between items-center
        bg-[#fbf8f5]
        px-12 py-4
        z-50
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Logo */}
      <h1 className="font-semibold text-3xl lg:text-4xl text-[#223614]">
        Lilac Template
      </h1>

      {/* Nav */}
      <nav className="flex gap-10 text-[#223614] text-lg lg:text-xl">
        <a href="#" className="hover:opacity-70 transition">Blog</a>
        <a href="#" className="hover:opacity-70 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
