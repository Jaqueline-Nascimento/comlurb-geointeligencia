import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "LOGRADOUROS",
      cor: "bg-green-500",
      descricao: "Mapeamento e gestão inteligente de logradouros urbanos"
    },
    {
      id: 2,
      nome: "RALOS",
      cor: "bg-blue-500",
      descricao: "Sistema de monitoramento e manutenção de ralos"
    },
    {
      id: 3,
      nome: "VARRIÇÃO",
      cor: "bg-orange-500",
      descricao: "Otimização de rotas e operações de varrição"
    },
    {
      id: 4,
      nome: "COLETA DOMICILIAR",
      cor: "bg-purple-500",
      descricao: "Gestão eficiente da coleta de resíduos domiciliares"
    },
    {
      id: 5,
      nome: "LIXO PÚBLICO",
      cor: "bg-yellow-600",
      descricao: "Monitoramento de lixeiras públicas e pontos de descarte"
    },
    {
      id: 6,
      nome: "FAVELAS",
      cor: "bg-red-800",
      descricao: "Soluções de limpeza e gestão em áreas de favela"
    },
    {
      id: 7,
      nome: "ATERRO SANITÁRIO",
      cor: "bg-amber-700",
      descricao: "Monitoramento e gestão de aterros sanitários"
    },
    {
      id: 8,
      nome: "DESCARTE IRREGULAR",
      cor: "bg-pink-500",
      descricao: "Identificação e combate a descartes irregulares"
    },
    {
      id: 9,
      nome: "ESCOLAS C/ COLETA",
      cor: "bg-cyan-500",
      descricao: "Programa de coleta seletiva em instituições educacionais"
    },
    {
      id: 10,
      nome: "HOSPITAIS C/ COLETA HOSP.",
      cor: "bg-red-500",
      descricao: "Gestão de resíduos hospitalares com segurança"
    },
    {
      id: 11,
      nome: "COLETA SELETIVA",
      cor: "bg-teal-500",
      descricao: "Programa de coleta seletiva e reciclagem"
    },
    {
      id: 12,
      nome: "PRAÇAS DO RIO",
      cor: "bg-green-600",
      descricao: "Limpeza e manutenção de praças e espaços públicos"
    },
    {
      id: 13,
      nome: "SOLICITAÇÕES 1746",
      cor: "bg-orange-700",
      descricao: "Sistema de gestão de solicitações de limpeza"
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

        {/* Grid de Projetos */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Projetos em Desenvolvimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((projeto) => (
              <div 
                key={projeto.id} 
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${projeto.cor} w-12 h-12 rounded-lg flex-shrink-0`}></div>
                  <h4 className="text-lg font-bold text-gray-900">{projeto.nome}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{projeto.descricao}</p>
              </div>
            ))}
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
