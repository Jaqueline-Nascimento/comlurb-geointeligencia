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
      title: 'Radar de SolicitaÃ§Ã£o de Poda',
      description: 'Radar da Poda - Metas. Totalmente integrado ao CAS, o Radar da Poda foi projetado para cumprir as metas estipuladas no acordo de resultados. O aplicativo calcula mensalmente o volume de pedidos necessÃ¡rios para atingir os objetivos e classifica as demandas por prioridade de atendimento. Operando de forma responsiva em diferentes dispositivos, a soluÃ§Ã£o otimiza o fluxo de atendimento e melhora a eficiÃªncia operacional.',
      url: 'https://drive.google.com/file/d/1cvzGTDnFLuSZca5HVivQ9gnenzxqpOwU/view?usp=drivesdk',
      color: 'from-purple-500 to-purple-600',
      type: 'video',
      videoSrc: 'https://github.com/Jaqueline-Nascimento/comlurb-geointeligencia/releases/download/media-2026-07-03/radar_da_poda_42a39195.mp4'
    },
    {
      title: 'Performance de Poda',
      description: 'Painel de Performance da Poda Mecanizada. Esta ferramenta realiza cÃ¡lculos automatizados combinando dados de telemetria e a produÃ§Ã£o do SICO, fornecendo um verdadeiro "RX" de toda a operaÃ§Ã£o ao longo do turno de trabalho. Com o suporte da inteligÃªncia artificial, o painel gera relatÃ³rios inteligentes e define o Ã­ndice final de performance de cada equipe. O sistema atua como um facilitador estratÃ©gico, auxiliando o gestor a otimizar o uso de todos os recursos disponÃ­veis.',
      url: 'https://drive.google.com/file/d/19f1KYdJQFu5c75T7f2nW25CeAoT98k4M/view?usp=drivesdk',
      color: 'from-green-500 to-green-600',
      type: 'video',
      videoSrc: 'https://github.com/Jaqueline-Nascimento/comlurb-geointeligencia/releases/download/media-2026-07-03/performance_poda_7a070d53.mp4'
    },
    {
      title: 'ArboRio',
      description: 'O ArboRio Ã© o sistema operacional voltado para a gestÃ£o da arborizaÃ§Ã£o urbana e a construÃ§Ã£o do censo arbÃ³reo do municÃ­pio do Rio. A plataforma otimiza a programaÃ§Ã£o de serviÃ§os com roteiros eficientes e gera relatÃ³rios e laudos tÃ©cnicos inteligentes. AtravÃ©s de painÃ©is operacionais acessÃ­veis em smartphones e ambiente web, o sistema exibe informaÃ§Ãµes em tempo real e o histÃ³rico das atividades, garantindo o controle total da operaÃ§Ã£o em poucos cliques.',
      url: 'https://drive.google.com/file/d/1CiJnBNoqRsIny3SrVQyNQMHlpMVzaisz/view?usp=drivesdk',
      color: 'from-emerald-500 to-emerald-600',
      type: 'video',
      videoSrc: 'https://github.com/Jaqueline-Nascimento/comlurb-geointeligencia/releases/download/media-2026-07-03/arborio_operacional_3c5a1a53.mp4'
    },
    {
      title: 'Ordem de ServiÃ§o de Poda',
      description: 'Em fase de desenvolvimento, este sistema operarÃ¡ de forma 100% integrada ao ArboRio, ao Painel de Performance da Poda Mecanizada e ao SICO3. A aplicaÃ§Ã£o trarÃ¡ uma entrada de dados otimizada com cruzamento automatizado de informaÃ§Ãµes para sinalizar possÃ­veis dados contraditÃ³rios. AlÃ©m disso, contarÃ¡ com painÃ©is em tempo real para o monitoramento completo e detalhado de todas as operaÃ§Ãµes da Coordenadoria de Manejo ArbÃ³reo - UCV.',
      url: 'https://drive.google.com/file/d/1Xcijf75bu705Gw7TNGD0cDHd5X5guMTH/view?usp=drivesdk',
      color: 'from-orange-500 to-orange-600',
      type: 'video',
      videoSrc: 'https://github.com/Jaqueline-Nascimento/comlurb-geointeligencia/releases/download/media-2026-07-03/uso_os_Ucv_677b7916.mp4'
    },
    {
      title: 'Ache seu Ecoponto',
      description: 'Esta aplicaÃ§Ã£o de utilidade pÃºblica apresenta a distribuiÃ§Ã£o geogrÃ¡fica dos ecopontos pela cidade e detalha os tipos de resÃ­duos aceitos em cada local. Funciona como um localizador intuitivo para que o cidadÃ£o encontre a unidade mais prÃ³xima de sua residÃªncia. Para facilitar o acesso, o sistema traz um roteirizador integrado que traÃ§a o melhor caminho para o deslocamento seguro e rÃ¡pido do usuÃ¡rio atÃ© o ponto escolhido.',
      url: 'https://drive.google.com/file/d/1KM03R8mmCR0zSo2X8mj3v8CjbQnva1hQ/view?usp=drivesdk',
      color: 'from-blue-500 to-blue-600',
      type: 'video',
      videoSrc: 'https://github.com/Jaqueline-Nascimento/comlurb-geointeligencia/releases/download/media-2026-07-03/ache_seu_ecoponto_c3b1ba80.mp4'
    },
    {
      title: 'Ache Seu Ecoponto',
      description: 'Esta aplicaÃ§Ã£o de utilidade pÃºblica apresenta a distribuiÃ§Ã£o geogrÃ¡fica dos ecopontos pela cidade e detalha os tipos de resÃ­duos aceitos em cada local. Funciona como um localizador intuitivo para que o cidadÃ£o encontre a unidade mais prÃ³xima de sua residÃªncia. Para facilitar o acesso, o sistema traz um roteirizador integrado que traÃ§a o melhor caminho para o deslocamento seguro e rÃ¡pido do usuÃ¡rio atÃ© o ponto escolhido.',
      url: 'https://drive.google.com/file/d/1KM03R8mmCR0zSo2X8mj3v8CjbQnva1hQ/view?usp=drivesdk',
      color: 'from-blue-500 to-blue-600',
      type: 'link'
    },
    {
      title: 'ArbÃ³rio Operacional',
      description: 'Sistema operacional integrado para gestÃ£o de Ã¡rvores e manejo arbÃ³reo urbano.',
      url: 'https://drive.google.com/file/d/1CiJnBNoqRsIny3SrVQyNQMHlpMVzaisz/view?usp=drivesdk',
      color: 'from-emerald-500 to-emerald-600',
      type: 'link'
    },
    {
      title: 'Ordem de ServiÃ§o de Manejo ArbÃ³reo',
      description: 'Sistema de gestÃ£o de ordens de serviÃ§o para operaÃ§Ãµes de manejo e poda arbÃ³rea urbana.',
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
      {/* BotÃ£o Voltar - Topo Esquerdo */}
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
          <h1 className="text-4xl font-bold mb-4">SIURB</h1>

        </div>
      </div>

      {/* ConteÃºdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* VÃ­deo e InfogrÃ¡fico SIURB */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Entenda o que Ã© o SIURB</h3>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* VÃ­deo Ã  Esquerda */}
            <div>
              <div className="relative w-full bg-black rounded-lg shadow-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  playsInline
                >
                  <source src="https://github.com/Jaqueline-Nascimento/comlurb-geointeligencia/releases/download/media-2026-07-03/0629_0f74cfd0.mp4" type="video/mp4" />
                  Seu navegador nÃ£o suporta vÃ­deos HTML5.
                </video>
              </div>
            </div>

            {/* InfogrÃ¡fico Ã  Direita */}
            <div>
              <button
                onClick={(e) => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
                  modal.innerHTML = `
                    <div class="relative max-w-4xl w-full">
                      <button onclick="this.parentElement.parentElement.remove()" class="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl">âœ•</button>
                      <img src="assets/media/SIURB_Inteligencia_Urbana_Rio_eea528c0.webp" alt="SIURB InfogrÃ¡fico" class="w-full h-auto rounded-lg" />
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
                className="hover:opacity-90 transition-opacity cursor-pointer w-full"
              >
                <img
                  src="assets/media/SIURB_Inteligencia_Urbana_Rio_eea528c0.webp"
                  alt="SIURB: O CoraÃ§Ã£o da InteligÃªncia Urbana do Rio de Janeiro"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </button>
            </div>
          </div>
        </section>

        {/* IntroduÃ§Ã£o */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">
            ConheÃ§a as principais soluÃ§Ãµes de geotecnologias desenvolvidas para otimizar as operaÃ§Ãµes em ambiente do SIURB
          </p>
        </section>

        {/* Grid de VÃ­deos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">SoluÃ§Ãµes em AÃ§Ã£o</h2>
          
          {/* Grid de VÃ­deos - 2 colunas */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {videos.slice(0, 4).map((video, index) => (
              <div key={index} className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* VÃ­deo */}
                  <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Seu navegador nÃ£o suporta vÃ­deos HTML5.
                    </video>
                  </div>

                  {/* TÃ­tulo e DescriÃ§Ã£o */}
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

          {/* Ecoponto + App Centros de Custos - mesma linha */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ecoponto */}
            {videos.slice(4, 5).map((video, index) => (
              <div key={index} className="block group">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* VÃ­deo */}
                  <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Seu navegador nÃ£o suporta vÃ­deos HTML5.
                    </video>
                  </div>

                  {/* TÃ­tulo e DescriÃ§Ã£o */}
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

            {/* App Centros de Custos */}
            <div className="block group">
              <button
                onClick={(e) => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
                  modal.innerHTML = `
                    <div class="relative max-w-4xl w-full">
                      <button onclick="this.parentElement.parentElement.remove()" class="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl">âœ•</button>
                      <img src="assets/media/centros_custos_app_e99bbc69.jpg" alt="App Centros de Custos" class="w-full h-auto rounded-lg" />
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
                className="hover:opacity-90 transition-opacity cursor-pointer w-full text-left"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                    <img
                      src="assets/media/centros_custos_app_e99bbc69.jpg"
                      alt="App Centros de Custos"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">App Centros de Custos</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                        AplicaÃ§Ã£o para gestÃ£o e monitoramento de centros de custos da COMLURB com visualizaÃ§Ã£o geogrÃ¡fica e anÃ¡lise de dados em tempo real.
                      </p>
                    </div>
                    <span className="text-blue-600 font-medium flex items-center gap-2">Visualizar</span>
                  </div>
                </Card>
              </button>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
