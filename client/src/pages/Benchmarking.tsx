import { ChevronLeft, ExternalLink, MapPin, Zap, Shield } from 'lucide-react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';

export default function Benchmarking() {
  const [, setLocation] = useLocation();

  const benchmarkingResources = [
    {
      id: 1,
      title: 'Segurança no Trabalho',
      description: 'Conjunto de normas e práticas para assegurar condições dignas e seguras aos trabalhadores, prevenindo acidentes e doenças ocupacionais.',
      icon: Shield,
      url: 'https://storymaps.arcgis.com/stories/02ee7a55e3244a6ca3bb71522813b65c',
      color: 'from-red-600 to-red-400',
      image: '/manus-storage/pasted_file_dSZZye_image_f9e0371d.png',
      isFeatured: true
    },
    {
      id: 3,
      title: 'Visão de Governança - Geointeligência na COMLURB',
      description: 'Estrutura de governança e implementação de geointeligência urbana. Conheça os pilares estratégicos, responsabilidades, tecnologias e roadmap para transformação digital da COMLURB em limpeza urbana inteligente.',
      icon: Zap,
      url: 'https://experience.arcgis.com/experience/7a291b6ceb2a40d784da77b455639966/page/Vis%C3%A3o-Governan%C3%A7a',
      color: 'from-green-600 to-green-400'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Botão Voltar - Topo Esquerdo */}
      <button
        onClick={() => setLocation('/')}
        className="fixed top-4 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-md hover:shadow-lg text-gray-700 font-medium"
      >
        <ChevronLeft size={20} />
        <span>Voltar</span>
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Benchmarking Global</h1>
          <p className="text-blue-200 text-lg">
            Análise comparativa e governança de geointeligência urbana em cidades líderes mundiais
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Card em Destaque - Segurança no Trabalho */}
        <div className="mb-12">
          <a
            href={benchmarkingResources[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={benchmarkingResources[0].image}
                  alt={benchmarkingResources[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`bg-gradient-to-r ${benchmarkingResources[0].color} rounded-lg p-3`}>
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{benchmarkingResources[0].title}</h2>
                  <p className="text-white/90 mb-4">{benchmarkingResources[0].description}</p>
                  <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    <span>Acessar</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          </a>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benchmarkingResources.slice(1).map((resource) => {
            const IconComponent = resource.icon;
            return (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300">
                  {/* Ícone e Gradient */}
                  <div className={`bg-gradient-to-r ${resource.color} rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h2>

                  {/* Descrição */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {/* Link Externo */}
                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                    <span>Acessar</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Seção de Contexto */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre o Benchmarking</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              O benchmarking global de geointeligência urbana permite que a COMLURB se posicione estrategicamente no contexto de cidades líderes mundiais em gestão de resíduos e limpeza urbana.
            </p>
            
            <p>
              <strong>Objetivos:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Identificar melhores práticas internacionais em geointeligência urbana</li>
              <li>Comparar indicadores de eficiência operacional e sustentabilidade</li>
              <li>Definir roadmap de implementação tecnológica</li>
              <li>Estabelecer estrutura de governança para dados geoespaciais</li>
              <li>Capacitar equipes para transformação digital</li>
            </ul>

            <p className="pt-4">
              <strong>Cidades Analisadas:</strong> Curitiba, São Paulo, Belo Horizonte, Fortaleza, Estocolmo, Copenhague, Zurique, Barcelona, Singapura e Rio de Janeiro.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
