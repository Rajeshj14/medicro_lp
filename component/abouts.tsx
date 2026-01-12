import { Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#1D9B89] font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              We Turn Digital Strategies Into
              <span className="block text-[#1D9B89]">Measurable Growth</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2018, we're a team of creative marketers, data analysts, and growth strategists
              dedicated to helping businesses thrive in the digital landscape. We don't just run campaigns
              — we build sustainable growth engines.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach combines creativity with analytics, ensuring every dollar spent delivers
              maximum impact. From startups to enterprises, we've helped hundreds of brands achieve
              their ambitious growth goals.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-[#1D9B89] rounded-full"></div>
                <span className="font-medium">Performance-Focused</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-[#1B91BE] rounded-full"></div>
                <span className="font-medium">Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-2 h-2 bg-[#1D9B89] rounded-full"></div>
                <span className="font-medium">ROI-Driven</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1D9B89] to-[#1B91BE] rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Target className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Strategic</h3>
                  <p className="text-white/90">Every campaign is backed by data and aligned with your business goals.</p>
                </div>

                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 transform hover:scale-105 hover:border-[#1D9B89] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <Users className="w-10 h-10 mb-4 text-[#1D9B89]" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Collaborative</h3>
                  <p className="text-gray-600">We work as an extension of your team, not just a vendor.</p>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 transform hover:scale-105 hover:border-[#1B91BE] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <TrendingUp className="w-10 h-10 mb-4 text-[#1B91BE]" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Growth-Focused</h3>
                  <p className="text-gray-600">We obsess over metrics that matter to your bottom line.</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <p className="text-white/90">Years of proven excellence in digital marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
