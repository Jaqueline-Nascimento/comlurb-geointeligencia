'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

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
        {/* Infográfico Pitch Deck */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 rounded-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Geointeligência Urbana - Pitch Deck</h2>
              <p className="text-slate-300">Clique na imagem para ampliar</p>
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
          </div>
        </section>
      </div>
    </main>
  );
}
