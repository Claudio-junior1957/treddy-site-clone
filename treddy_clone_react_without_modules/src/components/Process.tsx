import React from 'react';

const Process = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">NOSSO PROCESSO</h2>
          <h3 className="text-2xl mb-6">Etapas de Desenvolvimento</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Em apenas quatro etapas simples e bem definidas, nós transformamos sua visão em um site profissional, com agilidade e excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 mt-4">Planejamento</h3>
            <p className="text-gray-600">
              Conversamos para entender seu negócio, objetivos e público. Definimos o plano e o estilo do site.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 mt-4">Desenvolvimento</h3>
            <p className="text-gray-600">
              Criamos o design e construímos o site, garantindo beleza, funcionalidade e responsividade.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 mt-4">Revisão</h3>
            <p className="text-gray-600">
              Testamos e ajustamos o site com você, otimizando SEO, velocidade e detalhes finais.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-5 -left-5 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3 mt-4">Lançamento</h3>
            <p className="text-gray-600">
              Lançamos o site, configuramos tudo. Seu site no ar, atraindo clientes!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Suporte Contínuo</h3>
            <p className="text-gray-600">
              Estamos ao seu lado 24/7 dedicados para resolver suas dúvidas e garantir o funcionamento perfeito do seu site.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Manutenção Constante</h3>
            <p className="text-gray-600">
              Realizamos atualizações e otimizações regulares para manter seu site seguro, rápido e alinhado às tendências.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Satisfação Garantida</h3>
            <p className="text-gray-600">
              Seu sucesso é nossa meta: oferecemos ajustes e melhorias pós-venda para que seu site atenda às suas expectativas.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl mb-6">
            Seu site dos sonhos está a um clique de distância. Fale com nossa equipe e comece agora!
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
      </div>
    </section>
  );
};

export default Process;
