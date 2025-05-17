import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white py-32 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="text-white text-8xl font-bold">T</div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Seu Negócio Merece Um<br />Site Profissional.
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Atraia mais clientes, destaque sua marca e impulsione seus resultados com a solução que o seu negócio precisa.
        </p>
        <a 
          href="#contact" 
          className="bg-white text-black hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-flex items-center"
        >
          Contate-nos
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="mx-4 text-2xl">DESIGN INTELIGENTE $</span>
            <span className="mx-4 text-2xl">INTERFACES QUE CONVERTEM $</span>
            <span className="mx-4 text-2xl">DESIGN INTELIGENTE $</span>
            <span className="mx-4 text-2xl">INTERFACES QUE CONVERTEM $</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
