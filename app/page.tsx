import About from "@/component/abouts";
import GrowMedicoContact from "@/component/Contact";
import CTA from "@/component/cta";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Navbar from "@/component/navbar";
import AsproNavbar from "@/component/navbar";
import DigitalMarketingAgency from "@/component/pages";
import Services from "@/component/sevrice";
import WhyChooseUs from "@/component/whychooseus";
import Image from "next/image";

export default function Home() {
  return (
     <>
     <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <CTA />
      {/* <Contact /> */}
      <Footer />
     </>
  );
}
