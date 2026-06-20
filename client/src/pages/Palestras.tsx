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
              Palestras Livres e Painéis Técnicos do Congresso MundoGEO Connect 2026
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Além dos cursos técnicos realizados pela equipe da COMLURB, a participação no Congresso MundoGEO Connect 2026 possibilitou o acompanhamento de palestras e painéis voltados à aplicação prática das geotecnologias na gestão pública.
              </p>

              <p>
                Essas apresentações trouxeram experiências de diferentes cidades, instituições e especialistas, demonstrando que a modernização da gestão urbana não depende apenas da aquisição de ferramentas tecnológicas. O ponto central apresentado foi a necessidade de estruturar dados, integrar sistemas, capacitar pessoas, criar governança e transformar a informação territorial em inteligência para a tomada de decisão.
              </p>

              <p>
                A seguir, são listadas as principais palestras livres e painéis acompanhados, com resumo dos assuntos abordados.
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
