import { ChevronLeft, ExternalLink, MapPin, Zap } from 'lucide-react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';

export default function Benchmarking() {
  const [, setLocation] = useLocation();

  const benchmarkingResources = [
    {
      id: 1,
      title: 'Benchmarking Global de Geointeligência Urbana',
      description: 'Análise comparativa de práticas e indicadores de geointeligência urbana em cidades líderes mundiais. Explore dados de coleta seletiva, eficiência operacional e inovação em gestão de resíduos de cidades como Curitiba, São Paulo, Estocolmo, Copenhague e Singapura.',
      icon: MapPin,
      url: 'https://storymaps.arcgis.com/stories/02ee7a55e3244a6ca3bb71522813b65c',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 2,
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
        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benchmarkingResources.map((resource) => {
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
