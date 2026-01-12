import { Search, Share2, Target, FileText, Palette } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your organic visibility and climb search rankings with technical SEO, content optimization, and strategic link building.',
    color: 'from-[#1D9B89] to-[#1B91BE]',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and drive conversions across Instagram, Facebook, LinkedIn, and TikTok with compelling content.',
    color: 'from-[#1B91BE] to-[#1D9B89]',
  },
  {
    icon: Target,
    title: 'Paid Ads & Performance Marketing',
    description: 'Maximize ROI with data-driven Google Ads, Facebook Ads, and LinkedIn campaigns optimized for conversions.',
    color: 'from-[#1D9B89] to-[#1B91BE]',
  },
  {
    icon: FileText,
    title: 'Content & Branding',
    description: 'Tell your brand story with strategic content marketing, copywriting, and brand identity that resonates with your audience.',
    color: 'from-[#1B91BE] to-[#1D9B89]',
  },
  {
    icon: Palette,
    title: 'Web Design & Development',
    description: 'Create stunning, conversion-focused websites that deliver exceptional user experiences and drive business results.',
    color: 'from-[#1D9B89] to-[#1B91BE]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#1D9B89] font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end marketing services designed to
            accelerate your growth and maximize your return on investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1D9B89] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="text-[#1D9B89] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
