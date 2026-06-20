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
            <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Redução de Custos</h3>
                  <p className="text-sm leading-relaxed mb-4">Otimização de rotas reduz combustível em até 30%. Manutenção preditiva evita falhas custosas. ROI em 18 meses.</p>
                </div>
                <div className="flex gap-2 flex-col">
                  <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition text-sm">
                    Cursos que participamos
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition text-sm">
                    Palestras que assistimos
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition text-sm">
                    Geointeligência em outras prefeituras
                  </button>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Eficiência Operacional</h3>
                  <p className="text-sm leading-relaxed mb-4">Automação de roteiros aumenta produtividade em 40%. Equipes trabalham com dados em tempo real. Menos desperdício.</p>
                </div>
                <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Fiscalização Inteligente</h3>
                  <p className="text-sm leading-relaxed mb-4">IA detecta descarte irregular 24/7. Sensores monitoram ativos sem vistoria humana. Resposta em tempo real.</p>
                </div>
                <button className="bg-white text-purple-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Sustentabilidade</h3>
                  <p className="text-sm leading-relaxed mb-4">Redução de emissões de carbono. Otimização de recursos. Cidades mais limpas e verdes. Impacto ambiental mensurável.</p>
                </div>
                <button className="bg-white text-emerald-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
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
                  <p className="text-sm leading-relaxed mb-4">Retorno do investimento em 18 meses. Economia anual de milhões. Modelo financeiro comprovado em outras cidades.</p>
                </div>
                <button className="bg-white text-orange-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-orange-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">ROI Garantido</h3>
                <p className="text-sm text-muted-foreground mt-2">18 meses de retorno</p>
              </div>
            </div>

            {/* Card 6 - Liderança de Mercado */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Liderança de Mercado</h3>
                  <p className="text-sm leading-relaxed mb-4">COMLURB se torna referência global. Modelo exportável para outras cidades. Oportunidades de consultoria e parcerias.</p>
                </div>
                <button className="bg-white text-red-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
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
                  <p className="text-sm leading-relaxed mb-4">Integração com IA, IoT e Drones. Plataformas de última geração. Atração de talentos tech. Parcerias com startups.</p>
                </div>
                <button className="bg-white text-cyan-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-cyan-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Inovação Tecnológica</h3>
                <p className="text-sm text-muted-foreground mt-2">IA, IoT e Drones</p>
              </div>
            </div>

            {/* Card 8 - Transformação Digital */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg p-8 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Transformação Digital</h3>
                  <p className="text-sm leading-relaxed mb-4">Modernização completa da operação. Cultura data-driven. Equipes capacitadas e motivadas. Futuro garantido.</p>
                </div>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded font-semibold hover:bg-slate-100 transition text-sm">
                  Saiba Mais
                </button>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-indigo-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Transformação Digital</h3>
                <p className="text-sm text-muted-foreground mt-2">Modernização completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integração e Dados Abertos */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">O Pilar da Integração</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A verdadeira transformação não está na ferramenta isolada, mas na <strong>integração total dos dados</strong>. A COMLURB precisa conectar seus sistemas internos (SICO, SIURB) a uma plataforma única.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Unificação de Sistemas</h4>
                    <p className="text-muted-foreground">Conectar SICO, SIURB e outras plataformas em um único ecossistema de dados.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Dados Abertos</h4>
                    <p className="text-muted-foreground">Publicidade de dados georreferenciados para transparência e inovação colaborativa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Ecossistema de Inovação</h4>
                    <p className="text-muted-foreground">Permitir que startups e cidadãos criem soluções complementares para a cidade.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-12 border border-green-200">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-muted-foreground">Integração de dados</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-foreground">SICO</p>
                    <p className="text-muted-foreground">Sistema de Coleta</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">SIURB</p>
                    <p className="text-muted-foreground">Sistema Urbano</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">IoT</p>
                    <p className="text-muted-foreground">Sensores Urbanos</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">IA</p>
                    <p className="text-muted-foreground">Análise Inteligente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo Global */}
      <section id="comparativo" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Análise Comparativa: A COMLURB no Cenário Global</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">A COMLURB é um gigante. Enquanto outras cidades operam em escalas menores, nós gerenciamos a complexidade de uma metrópole global com o porte de uma multinacional.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Escala Inigualável</h3>
              <p className="text-muted-foreground mb-6">Não existe no Brasil ou América Latina uma empresa pública de limpeza urbana com o efetivo e capilaridade da COMLURB.</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Funcionários</span>
                  <span className="font-bold text-foreground">~14.000+</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Área de Atuação</span>
                  <span className="font-bold text-foreground">Megacidade</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Serviços</span>
                  <span className="font-bold text-foreground">Multisserviços</span>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Potencial de Mercado</h3>
              <p className="text-muted-foreground mb-6">A COMLURB pode deixar de ser apenas prestadora de serviço para se tornar uma empresa de inteligência urbana global.</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Posicionamento</span>
                  <span className="font-bold text-foreground">Liderança</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Modelo</span>
                  <span className="font-bold text-foreground">Inovação</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Alcance</span>
                  <span className="font-bold text-foreground">Global</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 border-l-4 border-l-green-600">
            <h4 className="text-xl font-bold text-foreground mb-3">O Diferencial da COMLURB</h4>
            <p className="text-muted-foreground leading-relaxed">
              Empresas privadas como a Waste Management utilizam as tecnologias que vimos para dominar o mercado global. A COMLURB tem o mesmo porte de uma multinacional. Se adotarmos a inteligência geográfica com a mesma intensidade, nos tornaremos a <strong>primeira empresa pública do mundo</strong> a operar com geointeligência plena em uma gama tão vasta de serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Capacitação */}
      <section id="capacitacao" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6 text-foreground">O Fator Crítico: Capacitação</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Nenhuma tecnologia funciona sem pessoas preparadas. A modernização da COMLURB exige um plano agressivo de capacitação. Precisamos transformar nossos técnicos em analistas de dados espaciais e nossos gestores em tomadores de decisão orientados por evidências.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Transformação de Talentos</h3>
              <p className="text-muted-foreground">Desenvolver competências em análise de dados, geoespacialização e inteligência urbana.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Mentalidade de Dados</h3>
              <p className="text-muted-foreground">Criar uma cultura onde decisões são baseadas em evidências e análises, não em suposições.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Inovação Contínua</h3>
              <p className="text-muted-foreground">Manter as equipes atualizadas com as tecnologias e práticas mais recentes do mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participantes */}
      <section id="participantes" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Participantes da Viagem</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Conheça os profissionais da COMLURB que participaram do MundoGEO Connect 2026 e trouxeram conhecimento estratégico para a transformação digital da empresa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder para participantes */}
            <Card className="p-8 bg-slate-50 border-2 border-dashed border-border hover:border-green-600 transition">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-2">Participante 1</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Cargo/Função</p>
              <p className="text-sm text-muted-foreground text-center italic">Currículo e experiência a ser preenchido</p>
            </Card>
            <Card className="p-8 bg-slate-50 border-2 border-dashed border-border hover:border-green-600 transition">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-2">Participante 2</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Cargo/Função</p>
              <p className="text-sm text-muted-foreground text-center italic">Currículo e experiência a ser preenchido</p>
            </Card>
            <Card className="p-8 bg-slate-50 border-2 border-dashed border-border hover:border-green-600 transition">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-center text-foreground mb-2">Participante 3</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">Cargo/Função</p>
              <p className="text-sm text-muted-foreground text-center italic">Currículo e experiência a ser preenchido</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Temos o Tamanho, Temos o Potencial</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
            Agora conhecemos o caminho tecnológico. O próximo passo é integrar, capacitar e liderar. A COMLURB está pronta para se tornar a maior referência mundial em Smart Sanitation.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100">
            Iniciar a Transformação <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">COMLURB</h4>
              <p className="text-sm">Liderança em Geointeligência Urbana</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#oportunidades" className="hover:text-white transition">Oportunidades</a></li>
                <li><a href="#comparativo" className="hover:text-white transition">Comparativo</a></li>
                <li><a href="#capacitacao" className="hover:text-white transition">Capacitação</a></li>
                <li><a href="#participantes" className="hover:text-white transition">Participantes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <p className="text-sm">Rio de Janeiro, Brasil</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 COMLURB. Todos os direitos reservados. | Desenvolvido com visão de futuro.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
