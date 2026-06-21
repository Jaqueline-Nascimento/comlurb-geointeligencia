'use client';

import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PitchDeck() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 p-4">
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft size={20} />
          <span>Voltar</span>
        </button>
      </div>

      {/* Infographic Container */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 p-4">
        <div 
          className="w-full max-w-7xl aspect-video bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-lg shadow-2xl p-12 flex flex-col justify-between overflow-hidden relative"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%),
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)
            `
          }}
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-2">
              Geointeligência Urbana
            </h1>
            <p className="text-xl text-blue-200">
              Transformando dados em decisões inteligentes para a cidade
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6 flex-1">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* O Problema */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">!</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">O Problema</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Falta de mapas georreferenciados</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Falta de transparência nos dados</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Integração de dados fragmentada</span>
                  </li>
                </ul>
              </div>

              {/* A Solução */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">A Solução</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-200">
                    <strong className="text-green-300">Geointeligência</strong> integrada com dados em tempo real
                  </p>
                  <p className="text-xs text-gray-300">
                    Mapas georreferenciados, transparência total e integração de dados em uma única plataforma
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className="flex flex-col gap-6">
              {/* Nossos Pares */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🤝</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">Nossos Pares</h3>
                </div>
                <p className="text-xs text-gray-300 mb-3">
                  Prefeituras, órgãos municipais e empresas de utilidade pública já utilizam geointeligência para:
                </p>
                <ul className="space-y-1 text-xs text-gray-200">
                  <li className="flex gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Otimizar operações urbanas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Aumentar transparência</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Melhorar serviços públicos</span>
                  </li>
                </ul>
              </div>

              {/* MundoGeo */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🌍</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">MundoGeo</h3>
                </div>
                <p className="text-xs text-gray-300 mb-2">
                  <strong className="text-purple-300">Maior congresso de geotecnologia da América Latina</strong>
                </p>
                <p className="text-xs text-gray-200">
                  Aprendemos sobre tendências, inovações e melhores práticas em geointeligência urbana
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Potencial */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">Potencial</h3>
                </div>
                <ul className="space-y-1 text-xs text-gray-200">
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Otimizar rotas e operações</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Reduzir custos operacionais</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Melhorar saúde do trabalhador</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Aumentar transparência pública</span>
                  </li>
                </ul>
              </div>

              {/* Escalabilidade */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">📈</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">Escalabilidade</h3>
                </div>
                <p className="text-xs text-gray-300 mb-2">
                  <strong className="text-green-300">De piloto para cidade inteira</strong>
                </p>
                <p className="text-xs text-gray-200">
                  Bases georreferenciadas permitem visibilidade total de operações e decisões data-driven em toda a cidade
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Aplicação COMLURB */}
          <div className="mt-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <h3 className="text-white font-bold text-lg mb-4">Aplicação na COMLURB</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-orange-400 font-bold text-sm">📊 Gestão de Dados</div>
                <p className="text-xs text-gray-200">
                  Centralizar e integrar todos os dados operacionais em mapas georreferenciados para melhor controle e transparência
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-blue-400 font-bold text-sm">🔮 Previsibilidade</div>
                <p className="text-xs text-gray-200">
                  Usar dados históricos para prever demandas, otimizar alocação de recursos e antecipar problemas
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-green-400 font-bold text-sm">🏆 Benchmark</div>
                <p className="text-xs text-gray-200">
                  Tornar-se referência em geointeligência urbana para outras empresas e cidades do Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-xs text-gray-400">
            <p>COMLURB | Liderança em Geointeligência Urbana</p>
          </div>
        </div>
      </div>
    </main>
  );
}
