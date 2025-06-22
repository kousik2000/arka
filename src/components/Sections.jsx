import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

export default function Sections() {
  return (
    <div className="relative w-full h-full scroll-smooth overflow-hidden">
      {/* Fixed background image - mobile friendly */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://i.ibb.co/99ngPDG8/background-2.jpg"
          alt="background"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.6) contrast(1.1)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(24, 20, 17, 0.6), rgba(24, 20, 17, 0.6))',
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* Scrollable content */}
      <main className="flex flex-col bg-transparent">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center">
          <Services />
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center">
          <Portfolio />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}