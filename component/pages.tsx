'use client'
import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Share2, FileText, Code, Users, Award, BarChart3, Shield, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';

const DigitalMarketingAgency = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Thanks! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Boost your organic rankings and drive qualified traffic with data-driven SEO strategies that deliver measurable results.'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and amplify your brand voice across all major social platforms with compelling content.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Paid Ads & Performance Marketing',
      description: 'Maximize ROI with precision-targeted campaigns across Google, Facebook, Instagram, and LinkedIn advertising platforms.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content & Branding',
      description: 'Create memorable brand experiences with strategic content that resonates with your audience and drives conversions.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Design & Development',
      description: 'Build stunning, high-performance websites that convert visitors into customers with seamless user experiences.'
    }
  ];

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Driven Results',
      description: 'Every strategy backed by analytics and performance metrics'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Transparent Reporting',
      description: 'Clear insights into your campaigns and ROI in real-time'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Agile Execution',
      description: 'Fast implementation with continuous optimization'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Expertise',
      description: 'Award-winning team with 100+ successful campaigns'
    }
  ];

  const portfolio = [
    {
      client: 'TechStart Inc',
      metric: '+340%',
      label: 'Organic Traffic Growth',
      period: '6 months'
    },
    {
      client: 'EcoWear Fashion',
      metric: '2.5M',
      label: 'Social Media Reach',
      period: '3 months'
    },
    {
      client: 'HealthHub Pro',
      metric: '4.8x',
      label: 'ROAS on Paid Ads',
      period: 'Q4 2024'
    }
  ];

  const testimonials = [
    {
      text: 'Working with this team transformed our digital presence. Our lead generation increased by 250% within the first quarter. Their strategic approach and transparency set them apart.',
      author: 'Sarah Mitchell',
      role: 'CEO, GrowthLabs',
      image: '👩‍💼'
    },
    {
      text: 'The ROI we achieved through their paid advertising campaigns exceeded all expectations. They truly understand performance marketing and know how to scale results efficiently.',
      author: 'David Chen',
      role: 'Marketing Director, VentureScale',
      image: '👨‍💼'
    },
    {
      text: 'From strategy to execution, they delivered excellence at every step. Our brand visibility skyrocketed, and engagement rates tripled across all social channels.',
      author: 'Emily Rodriguez',
      role: 'Founder, Spark Innovations',
      image: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] bg-clip-text text-transparent">
              Catalyst Digital
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#1D9B89] transition-colors duration-300">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#1D9B89] transition-colors duration-300">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#1D9B89] transition-colors duration-300">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1D9B89] transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D9B89]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B91BE]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Grow Your Brand with
              <span className="bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] bg-clip-text text-transparent"> Digital Excellence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              We craft data-driven marketing strategies that transform businesses into industry leaders. From SEO to social media, we deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Start Your Growth Journey
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-[#1D9B89] text-[#1D9B89] rounded-lg font-semibold hover:bg-[#1D9B89] hover:text-white transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section-about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                We Turn Vision Into
                <span className="text-[#1D9B89]"> Digital Victory</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by digital innovators and performance marketers, Catalyst Digital is more than an agency. We're your growth partner, combining creative excellence with analytical precision to deliver campaigns that don't just look good but perform exceptionally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: accelerate your business growth through strategic digital marketing that delivers measurable ROI. We believe in transparency, innovation, and results that speak for themselves.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-90">Clients Served</div>
              </div>
              <div className="bg-gray-900 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 mt-8">
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-sm opacity-90">Ad Spend Managed</div>
              </div>
              <div className="bg-gray-900 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">320%</div>
                <div className="text-sm opacity-90">Avg ROI Increase</div>
              </div>
              <div className="bg-gradient-to-br from-[#1B91BE] to-[#1D9B89] p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 mt-8">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="section-services" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${isVisible['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#1D9B89] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="section-why" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Catalyst Digital</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine strategic thinking with tactical execution to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D9B89]/10 to-[#1B91BE]/10 rounded-full flex items-center justify-center text-[#1D9B89] mb-6 mx-auto group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="section-portfolio" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${isVisible['section-portfolio'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real campaigns that drove exceptional business growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1D9B89]/10 to-[#1B91BE]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="text-sm text-[#1D9B89] font-semibold mb-2">{item.client}</div>
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                  <div className="text-gray-900 font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="section-testimonials" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our clients say about their experience working with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="section-cta" className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] text-white transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how we can accelerate your growth with data-driven digital marketing strategies that deliver real ROI.
          </p>
          <button className="px-10 py-5 bg-white text-[#1D9B89] rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl">
            Schedule a Free Consultation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Start your digital transformation journey today
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-gray-600">hello@catalystdigital.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office</div>
                    <div className="text-gray-600">123 Innovation Drive, San Francisco, CA 94102</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9B89] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9B89] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9B89] focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
                {formStatus && (
                  <div className="text-center text-[#1D9B89] font-semibold">
                    {formStatus}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] bg-clip-text text-transparent mb-4">
                Catalyst Digital
              </div>
              <p className="text-gray-400">
                Transforming businesses through strategic digital marketing excellence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">About Us</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">Portfolio</a>
                <a href="#contact" className="block text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1D9B89] transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1D9B89] transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1D9B89] transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1D9B89] transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Catalyst Digital. All rights reserved. Built with passion for performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalMarketingAgency;