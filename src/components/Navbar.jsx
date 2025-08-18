import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const navLinks = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />{" "}
            <img src="/logo.png" alt="logo" className="w-9 h-9" />
          </picture>
          <span className="text-xl font-mono font-semibold text-green-900 tracking-wide select-none">
            KD_PORTFOLIO
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active-link"
              className="cursor-pointer text-gray-700 hover:text-[#3ac28e] font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 border border-black text-black hover:bg-[#00ff9f] hover:text-black rounded-full text-sm transition-all"
          >
            <div className="flex items-center gap-2">
              <FaDownload className="text-xs" />
              Resume
            </div>
          </a>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-red-500 text-red-600 hover:bg-red-100 rounded-full text-sm transition-all"
          >
            Leave Matrix
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-gray-800 z-50 relative"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`transition-all duration-300 ease-in-out origin-top md:hidden absolute top-15 left-0 w-full bg-white/95 backdrop-blur-md px-4 py-6 space-y-4 z-40 border-t border-gray-200
        ${
          isMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }
        `}
        style={{ transformOrigin: "top" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active-link"
            onClick={() => setIsMenuOpen(false)}
            className="block text-gray-700 hover:text-[#3ac28e] font-medium tracking-wide transition"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="/resume.pdf"
          download
          className="block w-full text-center mt-2 px-4 py-2 bg-[#00ff9f] text-black rounded-md hover:bg-green-400 transition"
        >
          <div className="flex justify-center gap-3">
            <FaDownload className="text-xs mt-1.5" />
            Resume
          </div>
        </a>

        <button
          onClick={() => {
            navigate("/");
            setIsMenuOpen(false);
          }}
          className="block w-full text-center mt-2 px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-100 transition"
        >
          <div className="flex justify-center gap-3">
            <IoExitOutline className="mt-1" />
            Leave Matrix
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
