import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BenchmarkData {
  city: string;
  country: string;
  metric: string;
  value: string;
  status: 'leader' | 'competitive' | 'developing';
  description: string;
}

const benchmarkingData: BenchmarkData[] = [
  {
    city: 'Rio de Janeiro',
    country: 'Brasil',
    metric: 'Cobertura de Coleta Seletiva',
    value: '45%',
    status: 'developing',
    description: 'Programa de coleta seletiva em expansão com foco em cooperativas de catadores.'
  },
  {
    city: 'São Paulo',
    country: 'Brasil',
    metric: 'Cobertura de Coleta Seletiva',
    value: '62%',
    status: 'competitive',
    description: 'Programa consolidado com infraestrutura de pontos de coleta e parcerias com cooperativas.'
  },
  {
    city: 'Curitiba',
    country: 'Brasil',
    metric: 'Cobertura de Coleta Seletiva',
    value: '78%',
    status: 'leader',
    description: 'Referência nacional em coleta seletiva com programa pioneiro desde 1989.'
  },
  {
    city: 'Estocolmo',
    country: 'Suécia',
    metric: 'Taxa de Reciclagem',
    value: '99%',
    status: 'leader',
    description: 'Líder global em gestão de resíduos com tecnologia de ponta e conscientização cidadã.'
  },
  {
    city: 'Copenhague',
    country: 'Dinamarca',
    metric: 'Resíduos para Aterro',
    value: '2%',
    status: 'leader',
    description: 'Economia circular avançada com incineração energética e compostagem em larga escala.'
  },
  {
    city: 'Zurique',
    country: 'Suíça',
    metric: 'Eficiência de Coleta',
    value: '95%',
    status: 'leader',
    description: 'Sistema integrado de coleta com rotas otimizadas e geointeligência avançada.'
  },
  {
    city: 'Barcelona',
    country: 'Espanha',
    metric: 'Cobertura de Limpeza Urbana',
    value: '98%',
    status: 'leader',
    description: 'Tecnologia de sensores e IA para otimização de rotas e frequência de coleta.'
  },
  {
    city: 'Singapura',
    country: 'Singapura',
    metric: 'Inovação em Gestão de Resíduos',
    value: 'Avançada',
    status: 'leader',
    description: 'Integração de IoT, big data e machine learning para gestão de resíduos em tempo real.'
  },
  {
    city: 'Belo Horizonte',
    country: 'Brasil',
    metric: 'Cobertura de Limpeza Urbana',
    value: '88%',
    status: 'competitive',
    description: 'Programa de limpeza urbana com tecnologia geoespacial e monitoramento contínuo.'
  },
  {
    city: 'Fortaleza',
    country: 'Brasil',
    metric: 'Inovação em Geointeligência',
    value: 'Em Crescimento',
    status: 'developing',
    description: 'Implementação de plataforma geoespacial para limpeza pública e infraestrutura urbana.'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'leader':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    case 'competitive':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'developing':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'leader':
      return 'Líder Global';
    case 'competitive':
      return 'Competitivo';
    case 'developing':
      return 'Em Desenvolvimento';
    default:
      return 'Não Classificado';
  }
};

export default function Benchmarking() {
  const [, setLocation] = useLocation();
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const filteredData = filterStatus
    ? benchmarkingData.filter(item => item.status === filterStatus)
    : benchmarkingData;

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
          <h1 className="text-4xl font-bold mb-4">Benchmarking Global</h1>
          <p className="text-blue-200 text-lg">
            Análise comparativa de práticas e indicadores de geointeligência urbana em cidades líderes mundiais
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtrar por Status</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilterStatus(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === null
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({benchmarkingData.length})
            </button>
            <button
              onClick={() => setFilterStatus('leader')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === 'leader'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              Líderes Globais ({benchmarkingData.filter(d => d.status === 'leader').length})
            </button>
            <button
              onClick={() => setFilterStatus('competitive')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === 'competitive'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              Competitivos ({benchmarkingData.filter(d => d.status === 'competitive').length})
            </button>
            <button
              onClick={() => setFilterStatus('developing')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === 'developing'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              Em Desenvolvimento ({benchmarkingData.filter(d => d.status === 'developing').length})
            </button>
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{item.city}</h3>
                <p className="text-sm text-gray-600">{item.country}</p>
              </div>

              <div className="mb-4">
                <Badge className={`${getStatusColor(item.status)} border`}>
                  {getStatusLabel(item.status)}
                </Badge>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">{item.metric}</p>
                <p className="text-3xl font-bold text-blue-600">{item.value}</p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nenhum resultado encontrado para o filtro selecionado.</p>
          </div>
        )}

        {/* Seção de Insights */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Insights para COMLURB</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Liderança em Coleta Seletiva:</strong> Cidades como Curitiba (78%) e São Paulo (62%) demonstram que programas consolidados com parcerias com cooperativas geram resultados significativos. Rio pode expandir de 45% para 60%+ em 3 anos.
            </p>
            <p>
              <strong>Tecnologia Geoespacial:</strong> Zurique e Barcelona utilizam geointeligência para otimizar rotas e frequência de coleta, reduzindo custos operacionais em até 25%.
            </p>
            <p>
              <strong>Economia Circular:</strong> Copenhague (2% para aterro) e Estocolmo (99% reciclagem) mostram que integração de coleta, compostagem e incineração energética é o caminho.
            </p>
            <p>
              <strong>IoT e Big Data:</strong> Singapura lidera com integração de sensores IoT e machine learning para gestão em tempo real, modelo replicável para Rio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
