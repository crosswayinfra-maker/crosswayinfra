"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/companylogo.png"
            alt="Crossway Infra"
            width={55}
            height={55}
          />

          <div>
            <h1 className="text-white font-bold text-2xl">
              Crossway Infra
            </h1>

            <p className="text-gray-300 text-sm">
              Projects Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white">

          <a href="#home" className="block px-6 py-4 border-b border-gray-700">
            Home
          </a>

          <a href="#about" className="block px-6 py-4 border-b border-gray-700">
            About
          </a>

          <a href="#services" className="block px-6 py-4 border-b border-gray-700">
            Services
          </a>

          <a href="#projects" className="block px-6 py-4 border-b border-gray-700">
            Projects
          </a>

          <a href="#contact" className="block px-6 py-4">
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}