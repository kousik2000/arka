import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Services from '../sections/Services';

export default function Sections() {
  return (
    <main>
      <section id="home" className="h-screen flex items-center justify-center bg-blue-100">
        <Home />
      </section>

      <section id="about" className="flex items-center justify-center">
        <About />
      </section>

      <section id="services" className="h-screen flex items-center justify-center bg-yellow-100">
        <Services />
      </section>

      <section id="services" className="h-screen flex items-center justify-center bg-yellow-100">
        <h2 className="text-4xl font-bold">Services Section</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-pink-100">
        <h2 className="text-4xl font-bold">Contact Section</h2>
      </section>
    </main>
  );
}
