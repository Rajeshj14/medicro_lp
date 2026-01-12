import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1D9B89] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1B91BE] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-8 transform hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-4 h-4 text-[#1D9B89]" />
          <span className="text-sm font-medium text-gray-700">Trusted by 500+ Brands Worldwide</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Grow Your Brand with
          <span className="block mt-2 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] bg-clip-text text-transparent">
            Data-Driven Marketing
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We craft strategic digital campaigns that drive measurable results. From SEO to paid ads,
          we help businesses scale their online presence and achieve sustainable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-300 hover:border-[#1D9B89] hover:text-[#1D9B89] transform hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
            View Our Work
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Success Rate' },
            { value: '250%', label: 'Avg. ROI' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div
              key={index}
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#1D9B89] to-[#1B91BE] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
