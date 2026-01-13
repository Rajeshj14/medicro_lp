'use client'

import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Award, Play, Sparkles, Zap } from 'lucide-react';

export default function EnhancedHeroSection() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [chartData] = useState([45, 65, 52, 78, 70, 88, 95]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { icon: TrendingUp, value: '300%', label: 'Avg Growth Rate', color: 'from-teal-400 to-cyan-400' },
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-cyan-400 to-teal-400' },
    { icon: Award, value: '98%', label: 'Satisfaction Score', color: 'from-teal-500 to-cyan-500' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/50 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a620_1px,transparent_1px),linear-gradient(to_bottom,#14b8a620_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Enhanced Badge with Animation */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 border border-teal-500/30 rounded-full px-6 py-3 backdrop-blur-md shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span className="text-teal-400 text-sm font-semibold tracking-wide">Trusted by 500+ Healthcare Providers</span>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                We Help Clinics &
                <br />
                Hospitals Build
              </h1>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 blur-2xl opacity-50 animate-pulse"></div>
                <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 animate-gradient">
                  Predictable
                </h2>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Compounding Growth.
              </h1>
            </div>

            {/* Enhanced Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Get New Patients | Improve Retention | and Grow Referrals.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/50 transform hover:scale-105 active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-3 text-base sm:text-lg">
                  <Zap className="w-5 h-5" />
                  <span>Book A Strategy Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                </span>
              </button>
              
              <button className="group bg-gray-800/50 backdrop-blur-md border-2 border-teal-500/30 text-white hover:bg-gray-700/50 hover:border-teal-400/50 font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center space-x-3 text-base sm:text-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                  <span>Watch Demo</span>
                </span>
              </button>
            </div>

            {/* Enhanced Stats with Animation */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6">
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                const isActive = activeMetric === i;
                return (
                  <div 
                    key={i}
                    className={`relative space-y-2 p-3 sm:p-4 rounded-xl border transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/50 scale-105' 
                        : 'bg-gray-800/30 border-gray-700/30 hover:border-teal-500/30'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-xl blur-xl"></div>
                    )}
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${metric.color}`}>
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                      <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{metric.value}</p>
                      <p className="text-xs text-gray-400 font-medium mt-1">{metric.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Enhanced Dashboard */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-l from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
            
            {/* Main Dashboard Card */}
            <div className="relative z-10 w-full max-w-lg transform hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-2xl border-2 border-teal-500/30 rounded-3xl p-8 shadow-2xl shadow-teal-500/20">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Growth Dashboard</h3>
                      <p className="text-xs text-gray-400">Real-time Analytics</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>

                {/* Enhanced Chart */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 mb-6 border border-teal-500/20">
                  <div className="flex items-end justify-between h-48 gap-2">
                    {chartData.map((height, i) => (
                      <div key={i} className="flex flex-col items-center flex-1 group">
                        <div 
                          className="w-full bg-gradient-to-t from-teal-500 via-cyan-400 to-teal-400 rounded-t-xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20"></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 font-medium group-hover:text-teal-400 transition-colors">W{i+1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-700/50">
                    <span className="text-xs text-gray-500">Last 7 Weeks</span>
                    <span className="text-xs text-teal-400 font-semibold">↑ 47% Growth</span>
                  </div>
                </div>

                {/* Enhanced Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-teal-500/20 to-transparent border border-teal-500/40 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-gray-300 font-medium">New Patients</p>
                      <div className="w-8 h-8 bg-teal-500/30 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-teal-400" />
                      </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">+247</p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-teal-400" />
                      <p className="text-xs text-teal-400 font-semibold">+32% this month</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/40 rounded-2xl p-5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-gray-300 font-medium">Retention Rate</p>
                      <div className="w-8 h-8 bg-cyan-500/30 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <p className="text-3xl font-black text-white mb-1">94%</p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-cyan-400" />
                      <p className="text-xs text-cyan-400 font-semibold">+12% improvement</p>
                    </div>
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">System Active</p>
                      <p className="text-xs text-gray-400">Real-time AI tracking</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-teal-400 font-semibold">LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute top-24 -left-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-5 shadow-2xl animate-float-slow border-2 border-teal-300/50">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-40 -right-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl p-5 shadow-2xl animate-float-slow border-2 border-cyan-300/50" style={{animationDelay: '1.5s'}}>
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 -left-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl p-4 shadow-2xl animate-float-slow border-2 border-teal-300/50" style={{animationDelay: '3s'}}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80C240 30 480 10 720 10C960 10 1200 30 1440 80V160H0V80Z" fill="url(#wave-gradient)" fillOpacity="0.3"/>
          <path d="M0 100C320 60 640 40 960 40C1120 40 1280 60 1440 100V160H0V100Z" fill="url(#wave-gradient)" fillOpacity="0.2"/>
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#14b8a6"/>
              <stop offset="50%" stopColor="#06b6d4"/>
              <stop offset="100%" stopColor="#14b8a6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}