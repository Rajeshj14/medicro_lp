"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact us", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms and Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund Policy", path: "/refund" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, name: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, name: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, name: "Twitter", href: "#" },
    { icon: <Youtube size={20} />, name: "YouTube", href: "#" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", href: "#" },
  ];

  // Google Maps locations
  const locations = [
    {
      title: "Nagpur Office",
      address:
        "Plot no.213, Shree Sai Niwas, Dharampeth, Nagpur, Maharashtra 440010",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.782848846956!2d79.09156317594794!3d21.16154828051644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c7e3e8e4c7%3A0x4e5f5c5b5b5b5b5b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
    {
      title: "Chennai Office",
      address:
        "Perumal Nagar, near Little Star Nursery, Mogappair East, Chennai, Tamil Nadu 600037",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.008073278068!2d80.16151007595042!3d13.082500713870285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d4d5f5f5f5%3A0x4e5f5c5b5b5b5b5b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-teal-500/30">
      {/* Top Section with Maps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-teal-500/20 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-teal-400" />
                <h3 className="text-xl font-bold text-white">
                  {location.title}
                </h3>
              </div>

              {/* Map Container */}
              <div className="mb-4 rounded-lg overflow-hidden border border-teal-500/30">
                <div className="relative h-48">
                  {/* Google Maps Iframe */}
                  <iframe
                    src={location.iframeSrc}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Maps - ${location.title}`}
                  />
                  {/* Fallback for iframe */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent pointer-events-none" />
                </div>
              </div>

              <p className="text-gray-300 text-sm">{location.address}</p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div>
            <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span>GROW MEDICO</span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Empowering medical practices to reach their full potential through
              innovative solutions.
            </p>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <a
                  href="tel:+917558772126"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  +91 75587 72126
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <a
                  href="mailto:Contact@growmedico.in"
                  className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  Contact@growmedico.in
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 border border-teal-500/30 rounded-lg flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <div className="w-1 h-4 bg-teal-400 rounded-full" />
              <span>Quick Links</span>
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400/50 rounded-full group-hover:bg-teal-400 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <div className="w-1 h-4 bg-teal-400 rounded-full" />
              <span>Legal</span>
            </h5>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400/50 rounded-full group-hover:bg-teal-400 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl border border-teal-500/30 p-6 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h5 className="text-white font-semibold mb-2">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for latest updates and offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-gray-900/50 border border-teal-500/30 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 w-35"
                />
                <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-2 rounded-r-lg transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              Copyright © {new Date().getFullYear()} Grow Medico. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.slice(0, 3).map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-500 hover:text-teal-400 transition-colors"
                    aria-label={social.name}
                  >
                    {React.cloneElement(social.icon, { size: 16 })}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-4">
            Designed and developed with ❤️ by Grow Medico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
