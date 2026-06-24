import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function GeoIA() {
  const [, setLocation] = useLocation();

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
          <h1 className="text-4xl font-bold mb-4">GeoIA na Comlurb</h1>
          <p className="text-blue-200 text-lg">
            Conteúdo em desenvolvimento
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center text-gray-600">
          <p className="text-lg">Conteúdo será adicionado em breve...</p>
        </div>
      </div>
    </main>
  );
}
