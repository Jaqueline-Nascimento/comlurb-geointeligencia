import { ChevronLeft, Play } from 'lucide-react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';

interface VideoItem {
  title: string;
  description: string;
  url: string;
  color: string;
  type: 'link' | 'video';
  videoSrc?: string;
}

export default function GeoIA() {
  const [, setLocation] = useLocation();

  const videos: VideoItem[] = [
    {
      title: 'Radar de Solicitação de Poda',
      description: 'Monitoramento geoespacial em tempo real das operações de poda em toda a cidade.',
      url: 'https://drive.google.com/file/d/1cvzGTDnFLuSZca5HVivQ9gnenzxqpOwU/view?usp=drivesdk',
      color: 'from-purple-500 to-purple-600',
      type: 'video',
      videoSrc: '/manus-storage/radar_da_poda_42a39195.mp4'
    },
    {
      title: 'Performance de Poda',
      description: 'Análise de desempenho e eficiência das operações de poda urbana em tempo real.',
      url: 'https://drive.google.com/file/d/19f1KYdJQFu5c75T7f2nW25CeAoT98k4M/view?usp=drivesdk',
      color: 'from-green-500 to-green-600',
      type: 'video',
      videoSrc: '/manus-storage/performance_poda_7a070d53.mp4'
    },
    {
      title: 'ArboRio',
      description: 'O ArboRio é o sistema operacional voltado para a gestão da arborização urbana e a construção do censo arbóreo do município do Rio. A plataforma otimiza a programação de serviços com roteiros eficientes e gera relatórios e laudos técnicos inteligentes. Através de painéis operacionais acessíveis em smartphones e ambiente web, o sistema exibe informações em tempo real e o histórico das atividades, garantindo o controle total da operação em poucos cliques.',
      url: 'https://drive.google.com/file/d/1CiJnBNoqRsIny3SrVQyNQMHlpMVzaisz/view?usp=drivesdk',
      color: 'from-emerald-500 to-emerald-600',
      type: 'video',
      videoSrc: '/manus-storage/arborio_operacional_3c5a1a53.mp4'
    },
    {
      title: 'Ordem de Serviço de Poda',
      description: 'Sistema de gestão de ordens de serviço para operações de manejo e poda arbórea urbana.',
      url: 'https://drive.google.com/file/d/1Xcijf75bu705Gw7TNGD0cDHd5X5guMTH/view?usp=drivesdk',
      color: 'from-orange-500 to-orange-600',
      type: 'video',
      videoSrc: '/manus-storage/uso_os_Ucv_677b7916.mp4'
    },
    {
      title: 'Ache seu Ecoponto',
      description: 'Localização inteligente de ecopontos e pontos de coleta seletiva próximos ao usuário.',
      url: 'https://drive.google.com/file/d/1KM03R8mmCR0zSo2X8mj3v8CjbQnva1hQ/view?usp=drivesdk',
      color: 'from-blue-500 to-blue-600',
      type: 'video',
      videoSrc: '/manus-storage/ache_seu_ecoponto_c3b1ba80.mp4'
    },
    {
      title: 'Ache Seu Ecoponto',
      description: 'Localização inteligente de ecopontos e pontos de coleta seletiva próximos ao usuário.',
      url: 'https://drive.google.com/file/d/1KM03R8mmCR0zSo2X8mj3v8CjbQnva1hQ/view?usp=drivesdk',
      color: 'from-blue-500 to-blue-600',
      type: 'link'
    },
    {
      title: 'Arbório Operacional',
      description: 'Sistema operacional integrado para gestão de árvores e manejo arbóreo urbano.',
      url: 'https://drive.google.com/file/d/1CiJnBNoqRsIny3SrVQyNQMHlpMVzaisz/view?usp=drivesdk',
      color: 'from-emerald-500 to-emerald-600',
      type: 'link'
    },
    {
      title: 'Ordem de Serviço de Manejo Arbóreo',
      description: 'Sistema de gestão de ordens de serviço para operações de manejo e poda arbórea urbana.',
      url: 'https://drive.google.com/file/d/1Xcijf75bu705Gw7TNGD0cDHd5X5guMTH/view?usp=drivesdk',
      color: 'from-orange-500 to-orange-600',
      type: 'link'
    }
  ];

  const getEmbedUrl = (driveUrl: string) => {
    // Extrai o ID do arquivo do link do Google Drive
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return driveUrl;
  };

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
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">GeoIA na Comlurb</h1>
          <p className="text-blue-200 text-lg">
            Soluções Inteligentes de Geointeligência para Limpeza Urbana
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introdução */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">
            Conheça as principais soluções de geointeligência e IA desenvolvidas para otimizar as operações de limpeza urbana e gestão de resíduos no Rio de Janeiro.
          </p>
        </section>

        {/* Grid de Vídeos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Soluções em Ação</h2>
          
          {/* Grid de Vídeos - 2 colunas */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {videos.slice(0, 5).map((video, index) => (
              <div key={index} className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* Vídeo */}
                  <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                  </div>

                  {/* Título e Descrição */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                        {video.description}
                      </p>
                    </div>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2"
                    >
                      <span>Acessar</span>
                      <Play className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </div>
            ))}
          </div>


        </section>

        {/* Seção de Informação */}
        <section className="mt-12 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre as Soluções</h2>
          <p className="text-gray-700 leading-relaxed">
            Estas soluções representam a integração de geointeligência urbana com inteligência artificial para transformar a gestão de limpeza urbana no Rio de Janeiro. Cada solução foi desenvolvida para resolver desafios operacionais específicos, melhorando eficiência, sustentabilidade e qualidade de vida dos cariocas.
          </p>
        </section>
      </div>
    </main>
  );
}
