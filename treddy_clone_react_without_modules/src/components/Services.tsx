import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">SOBRE NOSSO SERVIÇO</h2>
          <p className="text-gray-600">
            This is the space to introduce the Services section. Briefly describe the types of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3">Design Personalizado</h3>
            <p className="text-gray-600">
              Cada negócio é único, por isso desenvolvemos sites que refletem a essência da sua marca, capturam a atenção dos seus clientes e impulsionam a sua credibilidade online.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3">Performance Garantida</h3>
            <p className="text-gray-600">
              Utilizamos as melhores práticas de SEO e técnicas avançadas de desenvolvimento para garantir que sua página carregue em segundos, proporcionando uma experiência perfeita para seus visitantes.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3">Experiência Otimizada</h3>
            <p className="text-gray-600">
              Criamos sites que oferecem uma navegação intuitiva e fluida em qualquer tela, garantindo que seu site seja visualmente atraente e funcional em todos os dispositivos, desde computadores até smartphones.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-3">Suporte Dedicado</h3>
            <p className="text-gray-600">
              Oferecemos suporte dedicado para garantir que seu site funcione perfeitamente e que você esteja sempre satisfeito com os resultados.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Seu Site Pronto Em Tempo Recorde.</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
