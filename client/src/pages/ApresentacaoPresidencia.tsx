'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ApresentacaoPresidencia() {
  const [, setLocation] = useLocation();

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
            <h1 className="text-4xl font-bold mb-2">Apresentação para Presidência</h1>
            <p className="text-blue-200">Geointeligência Urbana - Pitch Deck Executivo</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* MundoGEO Connect 2026 */}
        <section className="mb-16">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Conteúdo Estratégico - MundoGEO Connect 2026</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conteúdo apresentado no MundoGEO Connect 2026, estruturado para comunicar a visão de geointeligência urbana e as oportunidades de inovação na gestão pública.
            </p>
          </div>
          
          <div className="w-full bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Apresentação MundoGEO Connect 2026</h3>
            <div className="w-full" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                src="https://www.canva.com/design/DAHNAz9u1Do/2hAYOENm0nb9GUpfGg_kZg/view?embed"
                allowFullScreen
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px'
                }}
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Apresentação atualizada automaticamente. Clique no link para visualizar em tela cheia: <a href="https://canva.link/4ul24fslj4qi6fw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MundoGEO Connect 2026</a>
            </p>
          </div>
        </section>

        {/* Separador */}
        <div className="my-16 border-t-2 border-slate-200"></div>

        {/* Infográficos - Grid de 2 colunas */}
        <section className="py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Infográfico Pitch Deck */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 rounded-lg">
              <div className="px-4">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Geointeligência Urbana - Pitch Deck</h3>
                  <p className="text-slate-300 text-sm">Clique na imagem para ampliar</p>
                </div>
                <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
                  modal.innerHTML = `
                    <div class="max-w-7xl w-full">
                      <img src="/manus-storage/pitch_deck_infografico_v3_92a85670.webp" alt="Pitch Deck" class="w-full h-auto rounded-lg" />
                    </div>
                  `;
                  modal.addEventListener('click', () => modal.remove());
                  document.body.appendChild(modal);
                }}>
                  <img 
                    src="/manus-storage/pitch_deck_infografico_v3_92a85670.webp" 
                    alt="Pitch Deck Infográfico" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <p className="text-slate-300 text-sm mt-4 italic">Estratégia executiva de geointeligência urbana para limpeza inteligente e sustentável.</p>
              </div>
            </div>

            {/* Infográfico MundoGEO Sistemas Inteligentes */}
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
                      <img src="/manus-storage/mundogeo-sistemas-inteligentes_9100901a.jpeg" alt="MundoGEO Sistemas Inteligentes" class="w-full h-auto rounded-lg" />
                    </div>
                  `;
                  modal.addEventListener('click', () => modal.remove());
                  document.body.appendChild(modal);
                }}>
                  <img 
                    src="/manus-storage/mundogeo-sistemas-inteligentes_9100901a.jpeg" 
                    alt="MundoGEO Sistemas Inteligentes Infográfico" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <p className="text-slate-300 text-sm mt-4 italic">Integração de geointeligência, mobilidade e inteligência artificial para transformar dados em decisões.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

