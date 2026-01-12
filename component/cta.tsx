import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1D9B89] via-[#1B91BE] to-[#1D9B89] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Digital Presence?
        </h2>

        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of successful brands that trust us to accelerate their growth.
          Let's build a marketing strategy that delivers real, measurable results.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group px-10 py-5 bg-white text-[#1D9B89] font-bold text-lg rounded-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-3">
            Start Your Free Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white hover:text-[#1D9B89] transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
            View Pricing Plans
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            'Free Strategy Session',
            'No Long-Term Contracts',
            'ROI Guarantee',
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 text-white transform hover:scale-110 transition-transform duration-300"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/20">
          <p className="text-white/80 text-sm mb-4">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {['TechStartup', 'EcoLife', 'FinanceHub', 'StreamFlow', 'BrightPath'].map((brand, index) => (
              <div
                key={index}
                className="text-white font-bold text-lg px-6 py-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
