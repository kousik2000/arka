import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

export default function Sections() {
  return (
    <div className="relative size-full scroll-smooth">
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(24, 20, 17, 0.6), rgba(24, 20, 17, 0.6)), url("https://i.ibb.co/99ngPDG8/background-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Scrollable content */}
      <main className="flex flex-col bg-transparent">
        <section id="home" className="min-h-screen flex items-center justify-center scroll-smooth">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center scroll-smooth">
          <About />
        </section>

        <section id="services" className="flex items-center justify-center scroll-smooth">
          <Services />
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center scroll-smooth">
          <Portfolio />
        </section>

        {/* <section id="services2" className="min-h-screen flex items-center justify-center scroll-smooth bg-yellow-100">
          <h2 className="text-4xl font-bold">Services Section</h2>
        </section> */}

        <section id="contact" className="min-h-screen flex items-center justify-center scroll-smooth">
          <Contact />
        </section>
      </main>
    </div>
  );
}