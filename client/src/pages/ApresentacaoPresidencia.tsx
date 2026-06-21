import { Link } from "wouter";
import { ChevronLeft, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function ApresentacaoPresidencia() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4">
            <ChevronLeft size={16} />
            Voltar
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Apresentação para Presidência</h1>
          <p className="text-gray-600 mt-2">Chip na Vassoura - Projeto de Geointeligência Urbana</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Infográfico com Zoom */}
        <div className="flex justify-center">
          <div className="relative max-w-2xl w-full">
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsZoomed(true)}
            >
              <img 
                src="/manus-storage/chip-infografico_0dc8ebe0.png" 
                alt="Chip na Vassoura - Infográfico" 
                className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={24} className="text-gray-900" />
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Clique na imagem para ampliar</p>
          </div>
        </div>

        {/* Modal de Zoom */}
        {isZoomed && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
              >
                <X size={24} className="text-gray-900" />
              </button>
              <img 
                src="/manus-storage/chip-infografico_0dc8ebe0.png" 
                alt="Chip na Vassoura - Infográfico Ampliado" 
                className="w-full h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
