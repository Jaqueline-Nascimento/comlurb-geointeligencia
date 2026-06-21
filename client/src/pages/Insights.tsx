'use client';

import { useState } from 'react';
import { ChevronLeft, TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Insights() {
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
            <h1 className="text-4xl font-bold mb-2">Insights & Análises</h1>
            <p className="text-blue-200">Descobertas e aprendizados do MundoGeo 2026</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Section 1: Key Insights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <TrendingUp className="text-green-600" size={32} />
            Principais Insights do MundoGeo 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Tendência 1: Geointeligência em Tempo Real</h3>
              <p className="text-slate-700 leading-relaxed">
                As cidades estão cada vez mais adotando sistemas de geointeligência em tempo real para monitoramento operacional, permitindo tomadas de decisão mais rápidas e precisas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-3">Tendência 2: Dados Georreferenciados</h3>
              <p className="text-slate-700 leading-relaxed">
                A integração de dados georreferenciados é fundamental para criar uma visão holística da cidade e otimizar operações de limpeza urbana e infraestrutura.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Tendência 3: Transparência Operacional</h3>
              <p className="text-slate-700 leading-relaxed">
                Cidades que compartilham dados abertos sobre operações urbanas ganham maior confiança da população e conseguem melhorar a qualidade dos serviços públicos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Tendência 4: Análise Preditiva</h3>
              <p className="text-slate-700 leading-relaxed">
                O uso de machine learning e análise preditiva permite que as cidades antecipem problemas e aloquem recursos de forma mais eficiente, reduzindo custos operacionais.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Oportunidades Identificadas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={32} />
            Oportunidades Identificadas para COMLURB
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Otimização de Rotas</h3>
              <p className="text-slate-700">Implementar geointeligência para otimizar rotas de coleta, reduzindo tempo de operação e custos de combustível em até 30%.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Monitoramento em Tempo Real</h3>
              <p className="text-slate-700">Usar GPS e dados georreferenciados para monitorar operações em tempo real, permitindo ajustes rápidos e resposta a incidentes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Análise de Cobertura</h3>
              <p className="text-slate-700">Mapear áreas com baixa cobertura de limpeza e identificar padrões de acúmulo de resíduos para planejamento estratégico.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Saúde do Trabalhador</h3>
              <p className="text-slate-700">Usar dados para identificar áreas de risco e implementar medidas de proteção, melhorando a segurança e bem-estar da equipe.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Benchmarking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <PieChart className="text-green-600" size={32} />
            Benchmarking: Como Outros Estão Usando Geointeligência
          </h2>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Prefeituras Brasileiras</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Monitoramento de limpeza urbana</li>
                  <li>✓ Gestão de resíduos</li>
                  <li>✓ Planejamento de infraestrutura</li>
                  <li>✓ Transparência pública</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Órgãos Municipais</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Gestão de recursos hídricos</li>
                  <li>✓ Planejamento urbano</li>
                  <li>✓ Análise de mobilidade</li>
                  <li>✓ Prevenção de desastres</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Empresas Privadas</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ Logística e distribuição</li>
                  <li>✓ Gestão de frotas</li>
                  <li>✓ Análise de mercado</li>
                  <li>✓ Planejamento estratégico</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Próximos Passos */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <LineChart className="text-orange-600" size={32} />
            Próximos Passos para COMLURB
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-600">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-bold text-slate-900">Expandir Piloto Chip na Vassoura</h4>
                  <p className="text-slate-700">Escalar o projeto de 1 gerência para múltiplas gerências, validando efetividade e ROI.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-bold text-slate-900">Integrar Dados Operacionais</h4>
                  <p className="text-slate-700">Centralizar todos os dados de operação em uma plataforma única georreferenciada.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-bold text-slate-900">Implementar Análise Preditiva</h4>
                  <p className="text-slate-700">Desenvolver modelos de previsão para otimizar alocação de recursos e antecipação de problemas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-bold text-slate-900">Publicar Dados Abertos</h4>
                  <p className="text-slate-700">Compartilhar dados de operação de forma transparente, aumentando confiança pública e possibilitando inovação externa.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
