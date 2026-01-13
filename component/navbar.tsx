"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact us", path: "/contact" },
  ];

  const handleTalkToUs = () => {
    router.push("/contact");
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-gray-900/50 backdrop-blur-md border-b border-teal-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/medico_logo.webp"
              alt="Company Logo"
              width={160}
              height={40}
              priority
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-teal-400 font-semibold"
                    : "text-gray-300 hover:text-teal-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="hidden lg:block">
              <button
                onClick={handleTalkToUs}
                className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Talk to Us
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-teal-400 bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-teal-500/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors duration-200 py-2 ${
                    isActive(item.path)
                      ? "text-teal-400 font-semibold"
                      : "text-gray-300 hover:text-teal-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleTalkToUs}
                className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-lg w-full mt-4"
              >
                Talk to Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
