import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Percepcoes() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with Back Button */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>
          <h1 className="text-lg font-bold text-foreground">Percepções - Transformação Digital</h1>
          <div className="w-12" />
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl">
          {/* Video Section */}
          <div className="mb-12">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              autoPlay
              muted
            >
              <source src="/manus-storage/Cena_inicial_-_2026-06-24_202606240833_24981117.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>

          {/* Article Section */}
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-foreground">
              O Pilar da Transformação Digital: Decisão e Potencial
            </h1>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-500 mb-8">
              <p className="text-lg text-foreground font-semibold">
                "Temos o Tamanho. Temos o Potencial. Agora precisamos da decisão."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Este é o momento crítico para a COMLURB se posicionar como referência mundial em inteligência urbana para limpeza pública.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              A Realidade Atual
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              A COMLURB possui todos os elementos necessários para liderar a transformação digital no setor de limpeza urbana: uma estrutura organizacional robusta, 14 mil funcionários dedicados, operações em escala metropolitana e acesso a dados geoespaciais complexos. O que falta não é capacidade operacional, mas a decisão estratégica de implementar geointeligência em escala plena.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              O Pilar Fundamental: Decisão Estratégica
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              A transformação digital não é um processo técnico isolado. É uma decisão estratégica que permeia toda a organização. Para que a COMLURB se torne referência mundial, é necessário:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">1.</span>
                <div>
                  <strong className="text-foreground">Comprometimento Institucional</strong>
                  <p className="text-muted-foreground mt-1">A liderança deve reconhecer que geointeligência é fundamental para a eficiência operacional, não um projeto complementar.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">2.</span>
                <div>
                  <strong className="text-foreground">Integração de Dados</strong>
                  <p className="text-muted-foreground mt-1">Conectar cadastro, cartografia, planejamento urbano, infraestrutura e dados operacionais em uma plataforma única e acessível.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">3.</span>
                <div>
                  <strong className="text-foreground">Capacitação de Pessoas</strong>
                  <p className="text-muted-foreground mt-1">Transformar 14 mil funcionários em agentes de mudança digital, capacitando-os para usar inteligência geográfica em decisões diárias.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">4.</span>
                <div>
                  <strong className="text-foreground">Governança de Dados</strong>
                  <p className="text-muted-foreground mt-1">Estabelecer processos claros de coleta, validação, armazenamento e análise de dados em tempo real.</p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              O Impacto da Inteligência Geográfica
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Quando os dados começam a conversar, surge a inteligência geográfica. Isso significa que a COMLURB deixará de enxergar problemas isolados e passará a compreender padrões. Rotas de varrição otimizadas, alocação eficiente de recursos, prevenção de problemas antes que se tornem críticos e decisões baseadas em evidências passam a ser a norma.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Visão 2031
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 mb-8">
              <p className="text-foreground leading-relaxed">
                A COMLURB será a primeira empresa pública de limpeza urbana do mundo a implementar geointeligência plena em escala, transformando 14 mil funcionários em agentes de mudança digital, gerando dados que informam decisões em tempo real e estabelecendo o padrão global para saneamento inteligente e sustentável.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              O Futuro Começa Agora
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              A decisão é simples, mas transformadora. A COMLURB tem o tamanho, tem o potencial e tem a oportunidade. O que falta é apenas a decisão de começar. Cada dia de atraso é uma oportunidade perdida de se tornar referência mundial em inteligência urbana para limpeza pública.
            </p>

            <p className="text-lg text-green-600 font-semibold mt-8">
              O futuro começa agora. Vamos começar?
            </p>
          </article>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              onClick={() => navigate("/")}
            >
              Voltar à Página Inicial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
