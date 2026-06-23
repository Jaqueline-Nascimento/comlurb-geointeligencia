import { Link } from "wouter";
import { ChevronLeft, Zap, ExternalLink } from "lucide-react";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Chip na Vassoura",
      cor: "bg-gradient-to-br from-purple-500 to-blue-500",
      descricao: "Projeto principal de geointeligência urbana"
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
          <h1 className="text-4xl font-bold text-gray-900">Portfólio de Projetos</h1>
          <p className="text-gray-600 mt-2">Conheça os projetos que estamos desenvolvendo em geointeligência urbana</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
          {/* Imagem */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <img 
              src="/manus-storage/edited_image_b006e6ac.png" 
              alt="Portfólio de Projetos" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Título e Descrição */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluções Integradas para Cidades Inteligentes</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa plataforma de geointeligência integra diversos projetos e soluções para transformar a gestão urbana. 
              Cada projeto foi cuidadosamente desenvolvido para resolver desafios específicos da administração municipal, 
              desde a coleta de resíduos até o monitoramento de espaços públicos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Utilizando dados geoespaciais, inteligência artificial e análise preditiva, nossas soluções permitem 
              que gestores públicos tomem decisões mais rápidas, eficientes e baseadas em informações precisas.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Quer saber mais sobre nossos projetos?</h3>
          <p className="mb-6">Entre em contato conosco para conhecer as soluções em detalhes</p>
          <Link href="/" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voltar à Página Inicial
          </Link>
        </div>
      </main>
    </div>
  );
}
