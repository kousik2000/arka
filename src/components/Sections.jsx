import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

export default function Sections() {
  return (
    <div className="relative size-full">
      {/* Fixed background https://i.ibb.co/8L6PH9Hc/Leonardo-Phoenix-A-serene-and-modern-landscaping-architecture-3.jpg */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(24, 20, 17, 0.6), rgba(24, 20, 17, 0.6)), url("https://res-console.cloudinary.com/dve1e9rx3/media_explorer_thumbnails/a11d4bcd7adf5f63573951c7285874dc/detailed")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Scrollable content */}
      <main className="flex flex-col bg-transparent">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="services" className="flex items-center justify-center">
          <Services />
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center">
          <Portfolio />
        </section>

        {/* <section id="services2" className="min-h-screen flex items-center justify-center bg-yellow-100">
          <h2 className="text-4xl font-bold">Services Section</h2>
        </section> */}

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}