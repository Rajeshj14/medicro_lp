import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function AsproCTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-text-fade">
                WANT TO TAKE YOUR{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  BUSINESS
                </span>{' '}
                TO THE NEXT LEVEL?
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 animate-text-fade">
                CONTACT US TODAY!
              </h3>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="bg-white border-2 border-teal-400 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </button>
            </div>
          </div>

          {/* Right Image - 3D Character */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative Circle Background */}
            <div className="absolute w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
            
            {/* Character Placeholder - You can replace this with your actual 3D character image */}
            <div className="relative z-10 w-full max-w-md">
              {/* 3D Character Image */}
              <img 
                src="/contact.webp" 
                alt="Business Professional" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg shadow-xl flex items-center justify-center animate-bounce">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-4 left-24 w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-xl flex items-center justify-center animate-pulse">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C240 20 480 0 720 0C960 0 1200 20 1440 50V100H0V50Z" className="fill-gradient-to-r from-teal-400/10 to-cyan-400/10"/>
        </svg>
      </div>
    </section>
  );
}