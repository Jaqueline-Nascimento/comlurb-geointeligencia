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
          
          <div className="w-full">
            <Tabs defaultValue="mundogeo" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-200">
                <TabsTrigger value="mundogeo" className="data-[state=active]:bg-white data-[state=active]:text-foreground">MundoGEO Connect 2026</TabsTrigger>
                <TabsTrigger value="conteudo" className="data-[state=active]:bg-white data-[state=active]:text-foreground">Conteúdos Aplicados</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mundogeo" className="bg-white p-8 rounded-lg border border-slate-200 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-foreground">MundoGEO Connect 2026</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-bold text-foreground mb-3">Evento</h4>
                    <div className="space-y-2 text-slate-700">
                      <p><span className="font-semibold">Data:</span> 15 a 18 de Junho de 2026</p>
                      <p><span className="font-semibold">Local:</span> Expo Center Norte - São Paulo/SP</p>
                      <p><span className="font-semibold">Tema:</span> Inteligência Geográfica nos Municípios</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="text-lg font-bold text-foreground mb-4">Mensagem Central</h4>
                    <p className="text-slate-700 italic text-lg leading-relaxed">
                      "Tecnologia com propósito é aquela que inclui todo mundo."
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-bold text-foreground mb-4">Representação COMLURB</h4>
                    <p className="text-slate-700 leading-relaxed">
                      A COMLURB participou como representante da Prefeitura do Rio de Janeiro, apresentando iniciativas em geointeligência urbana aplicada à limpeza urbana, demonstrando como dados geoespaciais e inteligência artificial transformam a gestão de serviços públicos.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="conteudo" className="bg-white p-8 rounded-lg border border-slate-200 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Conteúdos Aplicados Apresentados</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🤖</div>
                    <h4 className="text-lg font-bold text-foreground mb-3">Automação e IA no ArcGIS</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Demonstração de como ferramentas de automação e inteligência artificial integradas ao ArcGIS potencializam análises geoespaciais, reduzem tempo de processamento e permitem decisões mais rápidas e precisas em gestão urbana.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🗺️</div>
                    <h4 className="text-lg font-bold text-foreground mb-3">GIS e Inteligência Artificial</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Integração de Sistemas de Informação Geográfica com algoritmos de IA para análise preditiva, detecção de padrões em dados urbanos e otimização de recursos operacionais.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🏙️</div>
                    <h4 className="text-lg font-bold text-foreground mb-3">Inteligência Geográfica nos Municípios</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Aplicação prática de geointeligência em prefeituras para otimização de serviços urbanos, planejamento territorial, monitoramento ambiental e melhoria da qualidade de vida nas cidades.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">💡</div>
                    <h4 className="text-lg font-bold text-foreground mb-3">Informação Geográfica e IA</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Sinergia entre dados geográficos estruturados e modelos de inteligência artificial para gerar insights estratégicos, suportar políticas públicas e criar valor para a sociedade.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Separador */}
        <div className="my-16 border-t-2 border-slate-200"></div>

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
