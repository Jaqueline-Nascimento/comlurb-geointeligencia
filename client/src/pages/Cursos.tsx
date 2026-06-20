import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Cursos() {
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
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <div className="flex justify-center">
              <img
                src="/manus-storage/geointeligencia_limpeza_urbana_83763dcd.png"
                alt="Geointeligência na Limpeza Urbana"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Text Column */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Cursos e Conhecimentos Estratégicos Adquiridos no Congresso MundoGEO Connect 2026
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A participação da COMLURB no Congresso MundoGEO Connect 2026 teve como objetivo ampliar a compreensão institucional sobre o uso das geotecnologias, da inteligência artificial, da automação e da inteligência geográfica como instrumentos de modernização da gestão pública.
                </p>

                <p>
                  Os conteúdos acompanhados demonstraram que a tecnologia, isoladamente, não resolve os desafios urbanos. A principal mensagem extraída dos cursos e palestras é que a transformação digital depende da integração entre pessoas, processos, dados e sistemas. A cidade contemporânea muda todos os dias, e, para administrá-la com eficiência, é necessário conhecer o território, atualizar informações continuamente e transformar dados em decisões melhores.
                </p>

                <p>
                  Neste primeiro módulo, são apresentados os cursos custeados pela COMLURB, com a descrição objetiva dos conteúdos abordados e a indicação de como esse conhecimento pode ser aplicado na Companhia.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => navigate("/")}
                >
                  Voltar para Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
