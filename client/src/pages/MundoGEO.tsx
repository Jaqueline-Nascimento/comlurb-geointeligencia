import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

export default function MundoGEO() {
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
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              O que é <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">MundoGEO</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Conheça o principal evento de geotecnologias do Brasil e como ele transforma a gestão urbana através da inteligência geográfica.
            </p>
            <a
              href="https://mundogeoconnect.com/2026/evento/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition font-medium"
            >
              Visite o Site Oficial <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">A Essência do MundoGEO</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A feira reúne profissionais, empresas, órgãos públicos, universidades, especialistas, gestores e desenvolvedores que trabalham com tecnologias capazes de transformar informações sobre o território em conhecimento útil para a tomada de decisão.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Em Termos Simples</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O MundoGEO é um espaço onde se discute como mapas, imagens, dados, sensores, sistemas digitais e inteligência artificial podem ajudar governos e empresas a compreender melhor a cidade, planejar serviços, acompanhar operações, fiscalizar atividades, reduzir custos e melhorar a entrega de resultados à população.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Importância para a Gestão Pública</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Para a gestão pública, o evento tem grande importância porque apresenta soluções aplicáveis a problemas reais dos municípios, como:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Planejamento urbano</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Cadastro territorial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Limpeza urbana</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Coleta de resíduos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Mobilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Meio ambiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Defesa civil</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Infraestrutura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Fiscalização</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Obras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Regularização fundiária</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Monitoramento de áreas críticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span>Atendimento ao cidadão</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Um Dos Principais Eventos do Brasil</h2>
              <p className="text-muted-foreground leading-relaxed">
                O MundoGEO Connect é um dos principais eventos do Brasil voltados às geotecnologias, à inteligência geográfica, ao georreferenciamento, ao uso de drones, ao sensoriamento remoto, aos Sistemas de Informação Geográfica — GIS, à cartografia digital, à inteligência artificial aplicada ao território e às soluções para cidades inteligentes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Uma Vitrine Técnica e Estratégica</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O MundoGEO serve, portanto, como uma vitrine técnica e estratégica. Ele mostra o que já está sendo feito no Brasil e no mundo, aproxima instituições de especialistas, apresenta soluções de mercado, estimula parcerias e ajuda os órgãos públicos a enxergarem novas possibilidades para seus próprios desafios.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Transformar o Território em Inteligência</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mais do que uma feira de tecnologia, o MundoGEO é um ambiente de aprendizado sobre como transformar o território em inteligência. Para a COMLURB, essa visão é essencial: a cidade precisa ser compreendida para ser bem cuidada, e os dados geográficos são uma das principais ferramentas para alcançar esse objetivo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A feira permitiu observar experiências, tecnologias e métodos que podem apoiar a COMLURB na construção de uma gestão mais integrada, moderna e orientada por dados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Os conteúdos apresentados mostraram que a transformação digital não começa apenas com a compra de sistemas, mas com a organização das informações, a integração das áreas, a padronização dos dados e a capacitação das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Quer Saber Mais?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visite o site oficial do MundoGEO Connect 2026 para conhecer mais sobre o evento, programação, palestrantes e oportunidades de participação.
          </p>
          <a
            href="https://mundogeoconnect.com/2026/evento/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition font-medium text-lg"
          >
            Acesse MundoGEO Connect 2026 <ExternalLink className="w-5 h-5" />
          </a>
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
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#oportunidades" className="hover:text-white transition">
                    Oportunidades
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Referência</h4>
              <a
                href="https://mundogeoconnect.com/2026/evento/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition flex items-center gap-2"
              >
                MundoGEO Connect <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 COMLURB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
