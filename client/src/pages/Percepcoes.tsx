import { ArrowLeft, ZoomIn } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Percepcoes() {
  const [, navigate] = useLocation();
  const [isImageOpen, setIsImageOpen] = useState(false);

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
          <h1 className="text-lg font-bold text-foreground">PercepÃ§Ãµes - TransformaÃ§Ã£o Digital</h1>
          <div className="w-12" />
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl">
          {/* Video and Infographic Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Video Section */}
            <div>
              <video
                className="w-full h-auto rounded-lg shadow-lg"
                controls
                autoPlay
                muted
              >
                <source src="assets/media/Cena_inicial_-_2026-06-24_202606240833_24981117.mp4" type="video/mp4" />
                Seu navegador nÃ£o suporta o elemento de vÃ­deo.
              </video>
            </div>
            
            {/* Infographic Section */}
            <div>
              <div className="relative group cursor-pointer" onClick={() => setIsImageOpen(true)}>
                <img
                  src="assets/media/infografico_por_que_transformacao_v2_b88bbafc.png"
                  alt="Por quÃª estamos fazendo isso - InfogrÃ¡fico"
                  className="w-full h-auto rounded-lg shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={24} className="text-foreground" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Clique para ampliar</p>
            </div>
          </div>

          {/* Article Section */}
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-foreground">
              O Pilar da TransformaÃ§Ã£o Digital: DecisÃ£o e Potencial
            </h1>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-500 mb-8">
              <p className="text-lg text-foreground font-semibold">
                "Temos o Tamanho. Temos o Potencial. Agora precisamos da decisÃ£o."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Este Ã© o momento crÃ­tico para a COMLURB se posicionar como referÃªncia mundial em inteligÃªncia urbana para limpeza pÃºblica.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              A Realidade Atual
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              A COMLURB possui todos os elementos necessÃ¡rios para liderar a transformaÃ§Ã£o digital no setor de limpeza urbana: uma estrutura organizacional robusta, 14 mil funcionÃ¡rios dedicados, operaÃ§Ãµes em escala metropolitana e acesso a dados geoespaciais complexos. O que falta nÃ£o Ã© capacidade operacional, mas a decisÃ£o estratÃ©gica de implementar geointeligÃªncia em escala plena.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              O Pilar Fundamental: DecisÃ£o EstratÃ©gica
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              A transformaÃ§Ã£o digital nÃ£o Ã© um processo tÃ©cnico isolado. Ã‰ uma decisÃ£o estratÃ©gica que permeia toda a organizaÃ§Ã£o. Para que a COMLURB se torne referÃªncia mundial, Ã© necessÃ¡rio:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">1.</span>
                <div>
                  <strong className="text-foreground">Comprometimento Institucional</strong>
                  <p className="text-muted-foreground mt-1">A lideranÃ§a deve reconhecer que geointeligÃªncia Ã© fundamental para a eficiÃªncia operacional, nÃ£o um projeto complementar.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">2.</span>
                <div>
                  <strong className="text-foreground">IntegraÃ§Ã£o de Dados</strong>
                  <p className="text-muted-foreground mt-1">Conectar cadastro, cartografia, planejamento urbano, infraestrutura e dados operacionais em uma plataforma Ãºnica e acessÃ­vel.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">3.</span>
                <div>
                  <strong className="text-foreground">CapacitaÃ§Ã£o de Pessoas</strong>
                  <p className="text-muted-foreground mt-1">Transformar 14 mil funcionÃ¡rios em agentes de mudanÃ§a digital, capacitando-os para usar inteligÃªncia geogrÃ¡fica em decisÃµes diÃ¡rias.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">4.</span>
                <div>
                  <strong className="text-foreground">GovernanÃ§a de Dados</strong>
                  <p className="text-muted-foreground mt-1">Estabelecer processos claros de coleta, validaÃ§Ã£o, armazenamento e anÃ¡lise de dados em tempo real.</p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              O Impacto da InteligÃªncia GeogrÃ¡fica
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Quando os dados comeÃ§am a conversar, surge a inteligÃªncia geogrÃ¡fica. Isso significa que a COMLURB deixarÃ¡ de enxergar problemas isolados e passarÃ¡ a compreender padrÃµes. Rotas de varriÃ§Ã£o otimizadas, alocaÃ§Ã£o eficiente de recursos, prevenÃ§Ã£o de problemas antes que se tornem crÃ­ticos e decisÃµes baseadas em evidÃªncias passam a ser a norma.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              VisÃ£o 2031
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 mb-8">
              <p className="text-foreground leading-relaxed">
                A COMLURB serÃ¡ a primeira empresa pÃºblica de limpeza urbana do mundo a implementar geointeligÃªncia plena em escala, transformando 14 mil funcionÃ¡rios em agentes de mudanÃ§a digital, gerando dados que informam decisÃµes em tempo real e estabelecendo o padrÃ£o global para saneamento inteligente e sustentÃ¡vel.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              O Futuro ComeÃ§a Agora
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              A decisÃ£o Ã© simples, mas transformadora. A COMLURB tem o tamanho, tem o potencial e tem a oportunidade. O que falta Ã© apenas a decisÃ£o de comeÃ§ar. Cada dia de atraso Ã© uma oportunidade perdida de se tornar referÃªncia mundial em inteligÃªncia urbana para limpeza pÃºblica.
            </p>

            <p className="text-lg text-green-600 font-semibold mt-8">
              O futuro comeÃ§a agora. Vamos comeÃ§ar?
            </p>
          </article>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              onClick={() => navigate("/")}
            >
              Voltar Ã  PÃ¡gina Inicial
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src="assets/media/infografico_por_que_transformacao_v2_b88bbafc.png"
              alt="Por quÃª estamos fazendo isso - InfogrÃ¡fico Ampliado"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
