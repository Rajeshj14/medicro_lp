import { BarChart3, Shield, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Every strategy is backed by comprehensive analytics and market research. We let the numbers guide us to optimize your campaigns for maximum performance.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Results',
    description: 'We move quickly without sacrificing quality. Our agile approach means faster implementation and quicker time-to-value for your marketing investments.',
  },
  {
    icon: Shield,
    title: 'Full Transparency',
    description: 'No hidden costs, no confusing jargon. You get detailed reports, clear communication, and complete visibility into where every dollar goes.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'With 500+ successful campaigns and 98% client satisfaction rate, we have the experience and expertise to deliver consistent results.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#1D9B89] font-semibold text-sm uppercase tracking-wide">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Your Success Is Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your growth partner, committed to
            delivering measurable results that impact your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1D9B89] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] rounded-3xl p-12 text-center text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Scale Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful brands that trust us with their digital growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1D9B89] font-semibold rounded-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Schedule a Free Consultation
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#1D9B89] transition-all duration-300">
              See Our Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
