import { ChevronLeft, ExternalLink, MapPin, Zap, Shield } from 'lucide-react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';

export default function Benchmarking() {
  const [, setLocation] = useLocation();

  const benchmarkingResources = [
    {
      id: 1,
      title: 'GEO LOGOS - Sistema de Gestão de Limpeza Urbana',
      description: 'Desenvolvida para otimizar a gestão da limpeza pública e dos serviços urbanos. Focado operação e planejamento, o sistema permite criar e gerenciar planos de coleta, varrição e roteirização com alto nível de precisão e integração.',
      icon: MapPin,
      url: 'https://www.geologosbr.com.br/sistema-geosvclixo-e-seus-modulos',
      color: 'from-green-600 to-green-400',
      image: '/manus-storage/pasted_file_xbj7Wp_image_76c29c22.png',
      isFeatured: true
    },
    {
      id: 2,
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
        {/* Cards em Destaque - Grid 2 colunas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benchmarkingResources.slice(0, 2).map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`bg-gradient-to-r ${resource.color} rounded-lg p-2`}>
                        {resource.icon === MapPin ? (
                          <MapPin className="w-5 h-5 text-white" />
                        ) : (
                          <Shield className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{resource.title}</h2>
                    <p className="text-white/90 text-sm mb-3 line-clamp-3">{resource.description}</p>
                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      <span>Acessar</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Card com Vídeo - Emergency Debris Management */}
        <div className="mb-12">
          <a
            href="https://www.arcgis.com/apps/solutions/emergency-debris-management"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.kaltura.com//p/3057483/embedPlaykitJs/uiconf_id/49806163?iframeembed=true&entry_id=1_og3741ll&kalturaStartTime=7"
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer *; autoplay *; encrypted-media *; gyroscope *; picture-in-picture *"
                />
              </div>
              <div className="p-6 bg-white group-hover:bg-gray-50 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Emergency Debris Management</h3>
                <p className="text-gray-700 mb-4">Solução ArcGIS para gestão de resíduos em situações de emergência com mapeamento e análise em tempo real.</p>
                <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                  <span>Acessar</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </a>
        </div>

        {/* Card Simples - Visão de Governança */}
        <div className="mb-12">
          <a
            href={benchmarkingResources[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-300">
              {/* Ícone e Gradient */}
              <div className={`bg-gradient-to-r ${benchmarkingResources[2].color} rounded-lg p-4 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                <Zap className="w-8 h-8 text-white" />
              </div>

              {/* Título */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {benchmarkingResources[2].title}
              </h2>

              {/* Descrição */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {benchmarkingResources[2].description}
              </p>

              {/* Link Externo */}
              <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                <span>Acessar</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </Card>
          </a>
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
