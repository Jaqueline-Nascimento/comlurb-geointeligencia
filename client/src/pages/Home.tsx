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
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-lg text-foreground">COMLURB</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#oportunidades" className="text-sm text-muted-foreground hover:text-foreground transition">Oportunidades</a>
            <a href="#comparativo" className="text-sm text-muted-foreground hover:text-foreground transition">Comparativo</a>
            <a href="#capacitacao" className="text-sm text-muted-foreground hover:text-foreground transition">Capacitação</a>
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
              A COMLURB está pronta para transformar a gestão urbana através de inteligência artificial, dados geoespaciais e inovação operacional. Somos a maior empresa de limpeza pública da América Latina. Agora, nos tornaremos a primeira a operar com geointeligência plena.
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
