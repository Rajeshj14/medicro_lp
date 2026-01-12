'use client'

import React, { useState, ChangeEvent } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

export default function GrowMedicoContact() {
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    website: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    pincode: '',
    source: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">

      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Got a Medical Practice to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Grow?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Can't wait to work with you! Shoot us an email with your info and what you need
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-teal-500/20 p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-teal-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                      placeholder="Dr. John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-400 mb-2">Clinic/Hospital Name *</label>
                    <input
                      type="text"
                      name="clinic"
                      value={formData.clinic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                      placeholder="Your Clinic Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-400 mb-2">Website/Social Media Link</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                    placeholder="https://your-website.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-teal-400 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-400 mb-2">Which services are you interested in? *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="practice-management">Practice Management</option>
                    <option value="patient-engagement">Patient Engagement</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-400 mb-2">What's on your mind? *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your practice and how we can help..."
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-teal-400 mb-2">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white placeholder-gray-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                      placeholder="600001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-400 mb-2">How did you hear about us?</label>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-teal-500/30 rounded-lg text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/30"
                >
                  <Send className="w-5 h-5" />
                  <span>Book An Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl border border-teal-500/30 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all">
                  <Mail className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Us</p>
                    <a href="mailto:Contact@growmedico.in" className="text-white hover:text-teal-400 transition-colors">
                      Contact@growmedico.in
                    </a>
                    <br />
                    <a href="mailto:Support@growmedico.com" className="text-white hover:text-teal-400 transition-colors">
                      Support@growmedico.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all">
                  <Phone className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Call Us</p>
                    <a href="tel:+917558772126" className="text-white hover:text-teal-400 transition-colors text-lg font-semibold">
                      +91 75587 72126
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Working Hours: 11am to 7pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all">
                  <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Nagpur Office</p>
                    <p className="text-white text-sm">
                      Plot no.213, Shree Sai Niwas, In front of NMC Corporation Office, Dharampeth, Gokulpeth, Nagpur, Maharashtra 440010
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all">
                  <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Chennai Office</p>
                    <p className="text-white text-sm">
                      Perumal Nagar, near Little Star Nursery and Primary School, Perumal Nagar, J J Nagar, Mogappair East, Chennai, Tamil Nadu 600037
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-teal-500/20 p-6 shadow-2xl">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'facebook', label: 'Facebook' },
                  { icon: 'instagram', label: 'Instagram' },
                  { icon: 'youtube', label: 'YouTube' },
                  { icon: 'linkedin', label: 'LinkedIn' }
                ].map((social) => (
                  <a
                    key={social.icon}
                    href="#"
                    className="w-12 h-12 bg-gray-900/50 border border-teal-500/30 rounded-lg flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-teal-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">GROW MEDICO</h4>
              <p className="text-gray-400 text-sm">Empowering medical practices to reach their full potential</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Contact us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Legal</h5>
              <ul className="space-y-2">
                {['Terms and Conditions', 'Privacy Policy', 'Refund Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2026 Grow Medico | Powered by Grow Medico
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}