'use client';

import { useState } from 'react';
import { ChevronLeft, Zap, AlertCircle, Lightbulb, Users, Target, Heart, TrendingUp, HelpCircle } from 'lucide-react';
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
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Zap size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Chip na Vassoura</h1>
              <p className="text-blue-200">Projeto de Geointeligência Urbana</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl">
            Protótipo de monitoramento georreferenciado da variação manual da COMLURB. Uma oportunidade de inovação aplicada para transformar a operação em dados, eficiência, saúde do trabalhador e inteligência territorial.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Seção 1: O Desafio */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">1</div>
            <h2 className="text-3xl font-bold text-slate-900">O Desafio</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <AlertCircle className="text-slate-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Baixa rastreabilidade da variação manual</h3>
                <p className="text-slate-600">Dificuldade em acompanhar e registrar as variações de rotas e operações em tempo real.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="text-slate-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Dificuldade de comprovar cobertura e execução</h3>
                <p className="text-slate-600">Falta de evidências documentadas sobre a execução real das operações.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="text-slate-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Pouca visibilidade sobre deslocamentos, paradas e produtividade</h3>
                <p className="text-slate-600">Falta de dados sobre movimentação de equipes e indicadores de desempenho.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <AlertCircle className="text-slate-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Necessidade de dados para planejamento, IPL e memória do serviço</h3>
                <p className="text-slate-600">Ausência de histórico e dados estruturados para análise e melhoria contínua.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: A Solução */}
        <section className="mb-16 bg-slate-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">2</div>
            <h2 className="text-3xl font-bold text-slate-900">A Solução</h2>
          </div>
          <p className="text-slate-700 mb-8 text-lg">
            O protótipo permitirá acompanhar rotas executadas, comparar planejado x realizado e gerar indicadores operacionais, de saúde e ergonomia para dimensionamento.
          </p>
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
              <div className="bg-slate-900 text-white p-4 rounded-full">
                <Zap size={24} />
              </div>
              <p className="text-sm font-semibold text-center text-slate-900">GPS leve e sob medida</p>
            </div>
            <div className="text-2xl text-slate-400">→</div>
            <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
              <div className="bg-orange-500 text-white p-4 rounded-full">
                <Target size={24} />
              </div>
              <p className="text-sm font-semibold text-center text-slate-900">Coleta de trajeto em campo</p>
            </div>
            <div className="text-2xl text-slate-400">→</div>
            <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
              <div className="bg-blue-600 text-white p-4 rounded-full">
                <Lightbulb size={24} />
              </div>
              <p className="text-sm font-semibold text-center text-slate-900">Painel geográfico em tempo real</p>
            </div>
            <div className="text-2xl text-slate-400">→</div>
            <div className="flex flex-col items-center gap-2 flex-1 min-w-[120px]">
              <div className="bg-green-600 text-white p-4 rounded-full">
                <TrendingUp size={24} />
              </div>
              <p className="text-sm font-semibold text-center text-slate-900">Análises para gestão e decisão</p>
            </div>
          </div>
        </section>

        {/* Seção 3: Ecossistema de Parceria */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">3</div>
            <h2 className="text-3xl font-bold text-slate-900">Ecossistema de Parceria</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-200 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">ESRI - ArcGIS Velocity</h3>
              <p className="text-slate-600 text-sm">Painel operacional, fluxo em tempo real, visualização geográfica e inteligência analítica.</p>
            </div>
            <div className="border border-slate-200 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Fornecedor de Tecnologia da China</h3>
              <p className="text-slate-600 text-sm">Desenvolvimento de GPS leve, resistente e customizado para a realidade da variação manual.</p>
            </div>
            <div className="border border-slate-200 p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">TOPOCART</h3>
              <p className="text-slate-600 text-sm">Experiência prática em solução semelhante e referência aplicada no projeto em Goiânia.</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-6 bg-slate-50 p-4 rounded">
            <strong>Modelo colaborativo</strong> para viabilizar inovação com baixo custo inicial para a COMLURB.
          </p>
        </section>

        {/* Seção 4: Como Funciona o Piloto */}
        <section className="mb-16 bg-slate-900 text-white p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">4</div>
            <h2 className="text-3xl font-bold">Como Funciona o Piloto</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {[
              { num: '1', label: 'Definição da área piloto' },
              { num: '2', label: 'Customização do dispositivo' },
              { num: '3', label: 'Instalação em campo' },
              { num: '4', label: 'Monitoramento' },
              { num: '5', label: 'Avaliação e escala' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.num}
                </div>
                <p className="text-sm">{step.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-800 p-6 rounded border border-slate-700">
            <h3 className="font-bold mb-4">Escopo Sugerido do Piloto</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>1 gerência piloto</strong></li>
              <li>• <strong>10 dispositivos</strong></li>
              <li>• <strong>45 dias de operação</strong></li>
              <li>• <strong>Painel MVP + relatório final</strong></li>
            </ul>
          </div>
        </section>

        {/* Seção 5: Saúde, Ergonomia e Dimensionamento */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">5</div>
            <h2 className="text-3xl font-bold text-slate-900">Saúde, Ergonomia e Dimensionamento</h2>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
            <h3 className="font-bold text-orange-900 mb-4">Foco em Saúde do Trabalhador e Ergonomia</h3>
            <p className="text-orange-800 mb-4">
              O critério de projeto é avaliação. Entender o que pode ser variado EFETIVAMENTE SEM PREJUDICAR A SAÚDE.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Medir o TEMPO EFETIVO DE VARIAÇÃO</strong> para entender a carga de trabalho por dia.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Considerar CLIMA E CONDIÇÕES DO TEMPO</strong> como variável de análise.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Analisar TIPO DE VIA E TERRENO:</strong> ladeira x terreno plano, asfalto x não asfalto.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Considerar SAZONALIDADE</strong> como época de queda de folhas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span><strong>Perfis operacionais</strong> (incluindo diferenças observadas entre homens e mulheres) como variáveis para dimensionamento.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção 6: Valor para Cada Parceiro */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">6</div>
            <h2 className="text-3xl font-bold text-slate-900">Valor para Cada Parceiro</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-orange-600 mb-4 text-lg">COMLURB</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Mais controle operacional</li>
                <li>✓ Dados para planejamento</li>
                <li>✓ Melhor cobertura transparência</li>
                <li>✓ Saúde do trabalhador e ergonomia</li>
              </ul>
            </div>
            <div className="border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-4 text-lg">PARCEIROS DE TECNOLOGIA</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Case real de inovação urbana</li>
                <li>✓ Ambiente de teste aplicado</li>
                <li>✓ Viabilidade institucional</li>
                <li>✓ Co-desenvolvimento de soluções</li>
              </ul>
            </div>
            <div className="border-2 border-green-600 p-6 rounded-lg">
              <h3 className="font-bold text-green-600 mb-4 text-lg">CIDADE</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Serviço mais eficiente</li>
                <li>✓ Melhor percepção da limpeza</li>
                <li>✓ Base para decisões públicas</li>
                <li>✓ Inteligência com foco em saúde</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 7: Resultados Esperados */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">7</div>
            <h2 className="text-3xl font-bold text-slate-900">Resultados Esperados</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="text-4xl">📍</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">% de cobertura do roteiro</h3>
                <p className="text-slate-600 text-sm">a medir / a acompanhar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">⏱️</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Tempo efetivo de variação</h3>
                <p className="text-slate-600 text-sm">a medir / a acompanhar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Produtividade por postoo operacional</h3>
                <p className="text-slate-600 text-sm">a medir / a acompanhar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">❤️</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Saúde do trabalhador, ergonomia, carga de trabalho e segurança</h3>
                <p className="text-slate-600 text-sm">a medir / a acompanhar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">⏸️</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Tempo parado</h3>
                <p className="text-slate-600 text-sm">a medir / a acompanhar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">📋</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Planejado x executado</h3>
                <p className="text-slate-600 text-sm">a medir / a acompanhar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 8: O que Estamos Buscando */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-400 text-slate-900 font-bold w-12 h-12 rounded-lg flex items-center justify-center text-xl">8</div>
            <h2 className="text-3xl font-bold text-slate-900">O que Estamos Buscando</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">💡</div>
              <p className="font-semibold text-slate-900 text-sm">Apoio tecnológico</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🔧</div>
              <p className="font-semibold text-slate-900 text-sm">Apoio para protótipo e hardware</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📈</div>
              <p className="font-semibold text-slate-900 text-sm">Apoio para estruturação do painel e validação</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🏥</div>
              <p className="font-semibold text-slate-900 text-sm">Apoio técnico em saúde ocupacional</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🤝</div>
              <p className="font-semibold text-slate-900 text-sm">Apoio institucional e viabilização operacional</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
          <p className="text-sm">
            <strong>COMLURB</strong> | Projeto em estruturação para piloto colaborativo.
          </p>
        </div>
      </div>

      {/* Infográfico Pitch Deck */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Geointeligência Urbana - Pitch Deck</h2>
            <p className="text-slate-300">Clique na imagem para ampliar</p>
          </div>
          <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
              <div className="max-w-7xl w-full">
                <img src="/manus-storage/pitch_deck_infografico_v3_92a85670.webp" alt="Pitch Deck" className="w-full h-auto rounded-lg" />
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
    </main>
  );
}
