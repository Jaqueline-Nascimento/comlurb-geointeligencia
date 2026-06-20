import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Palestras() {
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

      {/* Header Section with Full-Width Image */}
      <section className="w-full">
        <div className="w-full h-auto">
          <img
            src="/manus-storage/pasted_file_HN6pVF_image_8478aebe.png"
            alt="Palestras do Congresso MundoGEO"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-foreground leading-tight">
              Palestras e Conhecimentos Estratégicos do Congresso MundoGEO Connect 2026
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                As palestras assistidas no Congresso MundoGEO Connect 2026 apresentaram uma visão abrangente sobre o futuro da gestão urbana, com foco na integração entre geotecnologias, inteligência artificial e inteligência geográfica.
              </p>

              <p>
                Os palestrantes destacaram que as organizações que dominarem a inteligência espacial liderarão as próximas décadas. A mensagem central foi que o investimento em dados de qualidade, adoção de plataformas de IA espacial e capacitação de equipes multidisciplinares são os pilares para a transformação digital.
              </p>

              <p>
                Nesta seção, são apresentadas as principais palestras acompanhadas, com destaque para os temas mais relevantes e sua aplicabilidade na COMLURB.
              </p>
            </div>

            <div className="pt-8">
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
      </section>
    </div>
  );
}
