import { Link } from "wouter";
import { ChevronLeft, Zap, ExternalLink } from "lucide-react";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Chip na Vassoura",
      cor: "bg-gradient-to-br from-purple-500 to-blue-500",
      descricao: "Projeto principal de geointeligÃªncia urbana"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4">
            <ChevronLeft size={16} />
            Voltar
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">PortfÃ³lio de Projetos</h1>
          <p className="text-gray-600 mt-2">ConheÃ§a os projetos que estamos desenvolvendo em geointeligÃªncia urbana</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          {/* Imagem */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <img 
              src="assets/media/comlurb-layers-with-trees_026d898e.png" 
              alt="PortfÃ³lio de Projetos - Camadas de GeointeligÃªncia" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* TÃ­tulo e DescriÃ§Ã£o */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SoluÃ§Ãµes Integradas para Cidades Inteligentes</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa plataforma de geointeligÃªncia integra diversos projetos e soluÃ§Ãµes para transformar a gestÃ£o urbana. 
              Cada projeto foi cuidadosamente desenvolvido para resolver desafios especÃ­ficos da administraÃ§Ã£o municipal, 
              desde a coleta de resÃ­duos atÃ© o monitoramento de espaÃ§os pÃºblicos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Utilizando dados geoespaciais, inteligÃªncia artificial e anÃ¡lise preditiva, nossas soluÃ§Ãµes permitem 
              que gestores pÃºblicos tomem decisÃµes mais rÃ¡pidas, eficientes e baseadas em informaÃ§Ãµes precisas.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Quer saber mais sobre nossos projetos?</h3>
          <p className="mb-6">Entre em contato conosco para conhecer as soluÃ§Ãµes em detalhes</p>
          <Link href="/" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voltar Ã  PÃ¡gina Inicial
          </Link>
        </div>
      </main>
    </div>
  );
}
