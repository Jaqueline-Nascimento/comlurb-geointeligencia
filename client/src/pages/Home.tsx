import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Zap, Users, TrendingUp, MapPin, Brain } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/manus-storage/broom-icon_0293fe4d.png" alt="Broom Icon" className="w-10 h-10" />
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-foreground">RELATÓRIO DE VIAGEM - Congresso MundoGeo SP</span>
              <span className="text-xs text-muted-foreground">15 a 18 de Junho de 2026</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#oportunidades" className="text-sm text-muted-foreground hover:text-foreground transition">Oportunidades</a>
            <a href="#comparativo" className="text-sm text-muted-foreground hover:text-foreground transition">Comparativo</a>
            <a href="#capacitacao" className="text-sm text-muted-foreground hover:text-foreground transition">Capacitação</a>
            <a href="#participantes" className="text-sm text-muted-foreground hover:text-foreground transition">Participantes</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden text-white py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/manus-storage/hero-geointeligencia_8fe6595f.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/15 to-slate-900/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Geointeligência na Limpeza Urbana</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A Geointeligência Urbana serve para transformar dados complexos em mapas e rotas operacionais, auxiliando governos e empresas na gestão do território, melhoria da infraestrutura e tomada de decisões rápidas e assertivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => navigate("/mundogeo")}
              >
                O que é MundoGEO <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold">
                Cursos que participamos
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold">
                Palestras que assistimos
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold">
                Geointeligência em outras prefeituras
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Saw at MundoGEO */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">O que vimos no MundoGEO Connect 2026</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O futuro da gestão urbana é geoespacial e automatizado. Vimos soluções maduras de IA, Gêmeos Digitais e IoT prontas para escala. A tecnologia não é mais uma promessa, mas uma ferramenta de prateleira pronta para transformar cidades.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition">
              <Brain className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Inteligência Artificial</h3>
              <p className="text-muted-foreground">Classificação de imagens, análise de padrões e automação de processos para decisões mais rápidas e precisas.</p>
            </Card>
            <Card className="p-8 border-l-4 border-l-blue-600 hover:shadow-lg transition">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Gêmeos Digitais</h3>
              <p className="text-muted-foreground">Simulação operacional em tempo real para otimizar rotas, recursos e resposta a emergências urbanas.</p>
            </Card>
            <Card className="p-8 border-l-4 border-l-purple-600 hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Internet das Coisas</h3>
              <p className="text-muted-foreground">Sensores para rastreamento de ativos, monitoramento ambiental e gestão inteligente de resíduos.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Oportunidades */}
      <section id="oportunidades" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-foreground">Oportunidades Estratégicas para a COMLURB</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border hover:border-green-600 transition">
              <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Eficiência Radical</h3>
              <p className="text-muted-foreground mb-4">Automação de roteiros de coleta e varrição, reduzindo custos de combustível e tempo de deslocamento.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Roteirização inteligente</li>
                <li>✓ Alocação eficiente de equipes</li>
                <li>✓ Manutenção preditiva de ativos</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border hover:border-blue-600 transition">
              <MapPin className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Fiscalização Inteligente</h3>
              <p className="text-muted-foreground mb-4">IA e sensores para identificar descarte irregular e monitorar ativos sem vistoria humana constante.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Detecção automática de anomalias</li>
                <li>✓ Monitoramento em tempo real</li>
                <li>✓ Resposta ágil a problemas</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border hover:border-purple-600 transition">
              <Brain className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Gestão Preditiva</h3>
              <p className="text-muted-foreground mb-4">Antecipar demandas de manejo arbóreo e limpeza pós-eventos através de modelagem de dados.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Previsão de demandas</li>
                <li>✓ Planejamento estratégico</li>
                <li>✓ Decisões baseadas em dados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Interativos - Benefícios Estratégicos */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Benefícios Estratégicos da Geointeligência</h2>
          
          {/* Primeira Fileira - 4 Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {/* Card 1 - Redução de Custos */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Redução de Custos</h3>
                <p className="text-sm leading-relaxed">Otimização de rotas reduz combustível em até 30%. Manutenção preditiva evita falhas custosas. ROI em 18 meses.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-green-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Redução de Custos</h3>
                <p className="text-sm text-muted-foreground mt-2">Até 30% em combustível</p>
              </div>
            </div>

            {/* Card 2 - Eficiência Operacional */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Eficiência Operacional</h3>
                <p className="text-sm leading-relaxed">Automação de roteiros aumenta produtividade em 40%. Equipes trabalham com dados em tempo real. Menos desperdício.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-blue-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Eficiência Operacional</h3>
                <p className="text-sm text-muted-foreground mt-2">+40% de produtividade</p>
              </div>
            </div>

            {/* Card 3 - Fiscalização Inteligente */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Fiscalização Inteligente</h3>
                <p className="text-sm leading-relaxed">IA detecta descarte irregular 24/7. Sensores monitoram ativos sem vistoria humana. Resposta em tempo real.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-purple-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Fiscalização Inteligente</h3>
                <p className="text-sm text-muted-foreground mt-2">Monitoramento 24/7</p>
              </div>
            </div>

            {/* Card 4 - Sustentabilidade */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Sustentabilidade</h3>
                <p className="text-sm leading-relaxed">Redução de emissões de carbono. Otimização de recursos. Cidades mais limpas e verdes. Impacto ambiental mensurável.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-emerald-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Sustentabilidade</h3>
                <p className="text-sm text-muted-foreground mt-2">Redução de carbono</p>
              </div>
            </div>
          </div>

          {/* Segunda Fileira - 4 Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Card 5 - ROI Garantido */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">ROI Garantido</h3>
                  <p className="text-sm leading-relaxed mb-4">Retorno do investimento em 18 meses. Economia anual de R$ 50 milhões. Financiamento com payback rápido.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-orange-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">ROI Garantido</h3>
                <p className="text-sm text-muted-foreground mt-2">18 meses de payback</p>
              </div>
            </div>

            {/* Card 6 - Liderança de Mercado */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Liderança de Mercado</h3>
                  <p className="text-sm leading-relaxed mb-4">Referência global em geointeligência urbana. Modelo para outras cidades. Atração de talentos e parcerias.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-red-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">👑</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Liderança de Mercado</h3>
                <p className="text-sm text-muted-foreground mt-2">Referência global</p>
              </div>
            </div>

            {/* Card 7 - Inovação Tecnológica */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Inovação Tecnológica</h3>
                  <p className="text-sm leading-relaxed mb-4">Adoção de IA, IoT e Gêmeos Digitais. Infraestrutura moderna. Preparação para o futuro.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-cyan-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Inovação Tecnológica</h3>
                <p className="text-sm text-muted-foreground mt-2">IA, IoT e Gêmeos Digitais</p>
              </div>
            </div>

            {/* Card 8 - Transformação Digital */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Transformação Digital</h3>
                  <p className="text-sm leading-relaxed mb-4">Mudança cultural e operacional. Equipes capacitadas. Processos otimizados. Futuro garantido.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-indigo-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Transformação Digital</h3>
                <p className="text-sm text-muted-foreground mt-2">Mudança cultural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Pilar da Integração */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">O Pilar da Integração</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A transformação digital da COMLURB não é apenas sobre tecnologia, mas sobre integração. Unificar SICO e SIURB, publicar dados abertos, e capacitar pessoas são os pilares do sucesso.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Integração de Dados</h3>
                    <p className="text-muted-foreground">Unificar sistemas legados em uma plataforma moderna e escalável.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Dados Abertos</h3>
                    <p className="text-muted-foreground">Publicar dados para transparência e inovação externa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Capacitação</h3>
                    <p className="text-muted-foreground">Treinar equipes para operar e inovar com as novas ferramentas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-lg border border-green-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                  100%
                </div>
                <p className="text-xl font-semibold text-foreground mb-2">Integração Completa</p>
                <p className="text-muted-foreground">Dados unificados, processos otimizados, pessoas capacitadas.</p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-foreground">SICO + SIURB Integrados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-foreground">API de Dados Abertos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-foreground">Programa de Capacitação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Análise Comparativa */}
      <section id="comparativo" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Análise Comparativa: A COMLURB no Cenário Global</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Escala Incomparável</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">COMLURB</p>
                  <p className="text-3xl font-bold text-green-600">14 mil funcionários</p>
                  <p className="text-sm text-muted-foreground">Maior empresa de limpeza pública da América Latina</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Comparação Global</p>
                  <p className="text-lg text-foreground">Nenhuma empresa pública de limpeza urbana no mundo implementou geointeligência plena nesta escala.</p>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Potencial de Mercado</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Oportunidade</p>
                  <p className="text-3xl font-bold text-blue-600">Pioneirismo Global</p>
                  <p className="text-sm text-muted-foreground">COMLURB pode se tornar a referência mundial em Smart Sanitation.</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Diferencial</p>
                  <p className="text-lg text-foreground">Primeira empresa pública a integrar IA, IoT e Geointeligência em escala urbana.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* O Fator Crítico: Capacitação */}
      <section id="capacitacao" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">O Fator Crítico: Capacitação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Transformação de Talentos</h3>
              <p className="text-muted-foreground">Programas de treinamento em IA, GIS, análise de dados e operação de sistemas inteligentes.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Mentalidade de Dados</h3>
              <p className="text-muted-foreground">Cultura organizacional orientada por dados, decisões baseadas em evidências, inovação contínua.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Inovação Contínua</h3>
              <p className="text-muted-foreground">Equipes empoderadas para experimentar, aprender e escalar soluções que funcionam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participantes */}
      <section id="participantes" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Participantes da Viagem</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Conheça os profissionais da COMLURB que participaram do Congresso MundoGEO Connect 2026 e trouxeram os aprendizados que transformarão a empresa.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Participante 1</h3>
              <p className="text-sm text-muted-foreground mb-4">Cargo e Departamento</p>
              <p className="text-sm text-muted-foreground italic">Currículo e experiências profissionais</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Participante 2</h3>
              <p className="text-sm text-muted-foreground mb-4">Cargo e Departamento</p>
              <p className="text-sm text-muted-foreground italic">Currículo e experiências profissionais</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Participante 3</h3>
              <p className="text-sm text-muted-foreground mb-4">Cargo e Departamento</p>
              <p className="text-sm text-muted-foreground italic">Currículo e experiências profissionais</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Temos o Tamanho. Temos o Potencial.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agora precisamos da decisão. A COMLURB pode se tornar a maior referência mundial em inteligência urbana para limpeza pública. O futuro começa agora.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100 font-semibold">
            Vamos Começar <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">COMLURB</h4>
              <p className="text-sm text-slate-400">Transformando a gestão urbana através de inteligência geográfica.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#oportunidades" className="hover:text-white transition">Oportunidades</a></li>
                <li><a href="#comparativo" className="hover:text-white transition">Comparativo</a></li>
                <li><a href="#capacitacao" className="hover:text-white transition">Capacitação</a></li>
                <li><a href="#participantes" className="hover:text-white transition">Participantes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-sm text-slate-400">contato@comlurb.rio</p>
              <p className="text-sm text-slate-400">+55 21 2131-1234</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Evento</h4>
              <p className="text-sm text-slate-400">MundoGEO Connect 2026</p>
              <p className="text-sm text-slate-400">15 a 18 de Junho</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 COMLURB. Todos os direitos reservados. | Relatório de Viagem - Congresso MundoGEO Connect 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
