import SiteNavbar from "@/components/shared/SiteNavbar";
import ScrollProgress from "@/components/shared/ScrollProgress";
import MobileCTA from "@/components/shared/MobileCTA";
import Hero from "@/components/sections/Hero";
import TrustTicker from "@/components/sections/TrustTicker";
import About from "@/components/sections/About";
import Innovation from "@/components/sections/Innovation";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/shared/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <MobileCTA />
      <SiteNavbar />
      <Hero />
      <TrustTicker />
      <About />
      <div className="section-divider-top">
        <Innovation />
      </div>
      <Services />
      <div className="section-divider-top">
        <Portfolio />
      </div>
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}
