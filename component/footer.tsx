import { Facebook, Twitter, Instagram, Linkedin, Mail, TrendingUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">GrowthFlow</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner in digital marketing excellence. We help brands achieve
              sustainable growth through data-driven strategies.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-[#1D9B89] hover:to-[#1B91BE] transform hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'SEO Optimization',
                'Social Media Marketing',
                'Paid Advertising',
                'Content Marketing',
                'Web Development',
                'Brand Strategy',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#1D9B89] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#1D9B89] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Portfolio', href: '#portfolio' },
                { label: 'Case Studies', href: '#portfolio' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Careers', href: '#' },
                { label: 'Blog', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#1D9B89] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#1D9B89] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#1D9B89] flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@digitalagency.com" className="hover:text-[#1D9B89] transition-colors duration-300">
                  hello@digitalagency.com
                </a>
              </li>
              <li className="text-gray-400">
                123 Marketing Street<br />
                San Francisco, CA 94102<br />
                United States
              </li>
            </ul>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:border-[#1D9B89] transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] rounded hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} GrowthFlow Digital Marketing Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1D9B89] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
