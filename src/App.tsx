/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Founder from "./components/Founder";
import Facilities from "./components/Facilities";
import BMICalculator from "./components/BMICalculator";
import Membership from "./components/Membership";


import Reviews from "./components/Reviews";
import InstagramGrid from "./components/InstagramGrid";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Headquarters from "./components/Headquarters";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home", 
        "about", 
        "founder",
        "membership", 
        "facilities", 

        "reviews", 
        "contact"
      ];
      // Offset matches navbar heights snugly
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        let elementId = section;
        if (section === "contact") {
          const isDesktop = window.innerWidth >= 1024;
          if (!isDesktop) {
            elementId = "contact-mobile";
          }
        }
        const element = document.getElementById(elementId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0c0c0e] min-h-screen font-sans antialiased text-white selection:bg-red-650 selection:text-white overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Layout Compartments */}
      <main>
        {/* Hero motivation and landing entrance with background video style photo */}
        <Hero />

        {/* Professional details, local stats numbers counters, why choose us highlights */}
        <About />

        {/* Dedicated high-end visual showcase of the founder and lead trainer */}
        <Founder />

        {/* Membership Monthly, Quarterly, and Yearly rates matrix */}
        <Membership />

        {/* Facilities style grids specifying treadmills, steel dumbbells stack, changing cabinets */}
        <Facilities />

        {/* Dedicated interactive BMI dimension checker */}
        <BMICalculator />





        {/* Verified ratings metrics star board with custom glassy testimonials cards */}
        <Reviews />

        {/* Simulated instagram posts grid linking followers quotes and counts */}
        <InstagramGrid />

        {/* Toggable collapsible accordion FAQs addressing timings and women hygiene */}
        <FAQ />

        {/* Mobile-only section for headquarters details and map */}
        <Headquarters />

        {/* Contact info, physical location address, and secure submission success modal */}
        <Contact />
      </main>

      {/* Structured detailed multi links branding footer */}
      <Footer />

      {/* Floating high-reactive continuous WhatsApp messaging assistant */}
      <WhatsAppButton />
    </div>
  );
}
