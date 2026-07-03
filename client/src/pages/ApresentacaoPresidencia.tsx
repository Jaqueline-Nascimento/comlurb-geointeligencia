'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, Maximize2 } from 'lucide-react';
import { useLocation } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ApresentacaoPresidencia() {
  const [, setLocation] = useLocation();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen().catch(() => {
          window.open('https://geointel-presentation-9f86qdbs.manus.space/', '_blank');
        });
      } else if ((iframeRef.current as any).webkitRequestFullscreen) {
        (iframeRef.current as any).webkitRequestFullscreen();
      } else if ((iframeRef.current as any).mozRequestFullScreen) {
        (iframeRef.current as any).mozRequestFullScreen();
      } else if ((iframeRef.current as any).msRequestFullscreen) {
        (iframeRef.current as any).msRequestFullscreen();
      } else {
        window.open('https://geointel-presentation-9f86qdbs.manus.space/', '_blank');
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ChevronLeft size={20} />
            <span>Voltar</span>
          </button>
          <div>
            <h1 className="text-4xl font-bold mb-2">ApresentaÃ§Ã£o para PresidÃªncia</h1>
            <p className="text-blue-200">GeointeligÃªncia Urbana - Pitch Deck Executivo</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* ApresentaÃ§Ã£o em Slides */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 rounded-lg">
            <div className="px-4">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">ApresentaÃ§Ã£o Executiva - GeointeligÃªncia Urbana</h3>
                <p className="text-slate-300 text-sm">Navegue pelos slides usando os controles ou clique para ampliar</p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black">
                <button
                  onClick={handleFullscreen}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-lg transition flex items-center gap-2 text-sm font-medium text-slate-900"
                  title="Ampliar em tela cheia"
                >
                  <Maximize2 size={18} />
                  Tela Cheia
                </button>
                <iframe
                  ref={iframeRef}
                  src="https://geointel-presentation-9f86qdbs.manus.space/"
                  className="w-full h-[600px] border-0"
                  allowFullScreen
                  title="ApresentaÃ§Ã£o GeointeligÃªncia Urbana"
                />
              </div>
              <p className="text-slate-300 text-sm mt-4 italic">Clique no botÃ£o "Tela Cheia" para ampliar a apresentaÃ§Ã£o. Use os controles de navegaÃ§Ã£o para passar os slides.</p>
            </div>
          </div>
        </section>

        {/* InfogrÃ¡ficos - Grid de 2 colunas */}
        <section className="py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* InfogrÃ¡fico Pitch Deck */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 rounded-lg">
              <div className="px-4">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">GeointeligÃªncia Urbana - Pitch Deck</h3>
                  <p className="text-slate-300 text-sm">InfogrÃ¡fico - Clique na imagem para ampliar</p>
                </div>
                <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
                  modal.innerHTML = `
                    <div class="max-w-7xl w-full">
                      <img src="assets/media/pitch_deck_infografico_v3_92a85670.webp" alt="Pitch Deck" class="w-full h-auto rounded-lg" />
                    </div>
                  `;
                  modal.addEventListener('click', () => modal.remove());
                  document.body.appendChild(modal);
                }}>
                  <img 
                    src="assets/media/pitch_deck_infografico_v3_92a85670.webp" 
                    alt="Pitch Deck InfogrÃ¡fico" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <p className="text-slate-300 text-sm mt-4 italic">EstratÃ©gia executiva de geointeligÃªncia urbana para limpeza inteligente e sustentÃ¡vel.</p>
              </div>
            </div>

            {/* InfogrÃ¡fico MundoGEO Sistemas Inteligentes */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 rounded-lg">
              <div className="px-4">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">MundoGEO Connect 2026 - Sistemas Inteligentes</h3>
                  <p className="text-slate-300 text-sm">Clique na imagem para ampliar</p>
                </div>
                <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
                  modal.innerHTML = `
                    <div class="max-w-7xl w-full">
                      <img src="assets/media/mundogeo-sistemas-inteligentes_9100901a.jpeg" alt="MundoGEO Sistemas Inteligentes" class="w-full h-auto rounded-lg" />
                    </div>
                  `;
                  modal.addEventListener('click', () => modal.remove());
                  document.body.appendChild(modal);
                }}>
                  <img 
                    src="assets/media/mundogeo-sistemas-inteligentes_9100901a.jpeg" 
                    alt="MundoGEO Sistemas Inteligentes InfogrÃ¡fico" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <p className="text-slate-300 text-sm mt-4 italic">IntegraÃ§Ã£o de geointeligÃªncia, mobilidade e inteligÃªncia artificial para transformar dados em decisÃµes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

