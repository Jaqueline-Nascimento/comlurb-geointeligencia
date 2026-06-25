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
            {videos.slice(0, 2).map((video, index) => (
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
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
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

          {/* Grid de Vídeos Secundários - 2x2 */}
          <div className="grid md:grid-cols-2 gap-6">
            {videos.slice(2).map((video, index) => (
              <a
                key={index + 2}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Cabeçalho com Gradient */}
                  <div className={`bg-gradient-to-r ${video.color} p-6 relative overflow-hidden min-h-[120px] flex items-end`}>
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                    </div>
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <h3 className="text-xl font-bold text-white">{video.title}</h3>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-all">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Descrição */}
                  <div className="p-6 flex-1 flex items-center">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </Card>
              </a>
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
