import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Padrão de Excelência</h2>
            <p className="text-gray-700 mb-8">
              Na Treddy Sites, cada projeto é desenvolvido com precisão e cuidado para entregar resultados que superam expectativas. A satisfação dos nossos clientes é o nosso compromisso.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">MISSÃO</h3>
            <p className="text-gray-700 mb-8">
              Nossa missão é impulsionar o sucesso digital de empresas de todos os tamanhos, proporcionando soluções web personalizadas que refletem a essência de cada marca.
            </p>
            
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-flex items-center"
            >
              Contate-nos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Por que Nos Escolher?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expertise Comprovada</h3>
                  <p className="text-gray-600">Nossa equipe possui anos de experiência no desenvolvimento de sites de alta qualidade para diversos segmentos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resultados Mensuráveis</h3>
                  <p className="text-gray-600">Nossos sites são projetados para converter visitantes em clientes, com foco em resultados tangíveis para o seu negócio.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suporte Contínuo</h3>
                  <p className="text-gray-600">Oferecemos suporte técnico e atualizações constantes para garantir que seu site esteja sempre funcionando perfeitamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
