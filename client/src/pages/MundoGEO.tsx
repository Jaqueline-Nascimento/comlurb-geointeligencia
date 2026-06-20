import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Map, Satellite, Zap, Database, Compass, Layers, Building2, Wifi } from "lucide-react";
import { useLocation } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MundoGEO() {
  const [, navigate] = useLocation();
  const essenciaRef = useScrollAnimation();
  const termosRef = useScrollAnimation();
  const importanciaRef = useScrollAnimation();
  const tecnologiasRef = useScrollAnimation();
  const vitrinaRef = useScrollAnimation();
  const transformarRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

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

      {/* Hero Section with Background Image */}
      <section 
        className="relative overflow-hidden text-white py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        
        <div className="container relative z-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6 animate-slide-left">
              <Map className="w-8 h-8 text-green-400" />
              <span className="text-green-400 font-semibold">Geotecnologias & Inteligência Geográfica</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              O que é <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">MundoGEO</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Conheça o principal evento de geotecnologias do Brasil e como ele transforma a gestão urbana através da inteligência geográfica.
            </p>
            <a
              href="https://mundogeoconnect.com/2026/evento/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition font-medium animate-scale"
              style={{ animationDelay: '0.2s' }}
            >
              Visite o Site Oficial <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-12 text-foreground">
            {/* A Essência do MundoGEO */}
            <div ref={essenciaRef as any} className="border-l-4 border-l-green-600 pl-8 animate-slide-up">
              <div className="flex items-start gap-4 mb-4">
                <Compass className="w-8 h-8 text-green-600 flex-shrink-0 mt-1 animate-scale" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">A Essência do MundoGEO</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A feira reúne profissionais, empresas, órgãos públicos, universidades, especialistas, gestores e desenvolvedores que trabalham com tecnologias capazes de transformar informações sobre o território em conhecimento útil para a tomada de decisão.
                  </p>
                </div>
              </div>
            </div>

            {/* Em Termos Simples */}
            <div ref={termosRef as any} className="border-l-4 border-l-blue-600 pl-8 animate-slide-up">
              <div className="flex items-start gap-4 mb-4">
                <Layers className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1 animate-scale" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Em Termos Simples</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O MundoGEO é um espaço onde se discute como mapas, imagens, dados, sensores, sistemas digitais e inteligência artificial podem ajudar governos e empresas a compreender melhor a cidade, planejar serviços, acompanhar operações, fiscalizar atividades, reduzir custos e melhorar a entrega de resultados à população.
                  </p>
                </div>
              </div>
            </div>

            {/* Importância para a Gestão Pública */}
            <div ref={importanciaRef as any} className="border-l-4 border-l-purple-600 pl-8 animate-slide-up">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1 animate-scale" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Importância para a Gestão Pública</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Para a gestão pública, o evento tem grande importância porque apresenta soluções aplicáveis a problemas reais dos municípios, como:
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground ml-12">
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Planejamento urbano</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Cadastro territorial</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Limpeza urbana</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Coleta de resíduos</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Mobilidade</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Meio ambiente</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Defesa civil</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Infraestrutura</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Fiscalização</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Obras</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Regularização fundiária</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Monitoramento de áreas críticas</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Atendimento ao cidadão</span>
                </li>
              </ul>
            </div>

            {/* Tecnologias Principais */}
            <div ref={tecnologiasRef as any} className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200 animate-scale">
              <div className="flex items-start gap-4 mb-6">
                <Satellite className="w-8 h-8 text-green-600 flex-shrink-0 animate-scale" />
                <h2 className="text-2xl font-bold text-foreground">Um Dos Principais Eventos do Brasil</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                O MundoGEO Connect é um dos principais eventos do Brasil voltados às geotecnologias, à inteligência geográfica, ao georreferenciamento, ao uso de drones, ao sensoriamento remoto, aos Sistemas de Informação Geográfica — GIS, à cartografia digital, à inteligência artificial aplicada ao território e às soluções para cidades inteligentes.
              </p>
            </div>

            {/* Tecnologias Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3 animate-slide-left">
                <Wifi className="w-6 h-6 text-blue-600" />
                Tecnologias em Destaque
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 animate-slide-up hover:shadow-lg transition">
                  <Database className="w-8 h-8 text-blue-600 mb-3 animate-scale" />
                  <h3 className="font-bold text-foreground mb-2">Dados Geoespaciais</h3>
                  <p className="text-sm text-muted-foreground">Informações territoriais estruturadas para análise e tomada de decisão</p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg border border-green-200 animate-slide-up hover:shadow-lg transition" style={{ animationDelay: '0.1s' }}>
                  <Satellite className="w-8 h-8 text-green-600 mb-3 animate-scale" />
                  <h3 className="font-bold text-foreground mb-2">Sensoriamento Remoto</h3>
                  <p className="text-sm text-muted-foreground">Imagens de satélite e drones para monitoramento urbano</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200 animate-slide-up hover:shadow-lg transition" style={{ animationDelay: '0.2s' }}>
                  <Zap className="w-8 h-8 text-purple-600 mb-3 animate-scale" />
                  <h3 className="font-bold text-foreground mb-2">Inteligência Artificial</h3>
                  <p className="text-sm text-muted-foreground">Análise automática de dados para insights estratégicos</p>
                </div>
                <div className="p-6 bg-orange-50 rounded-lg border border-orange-200 animate-slide-up hover:shadow-lg transition" style={{ animationDelay: '0.3s' }}>
                  <Map className="w-8 h-8 text-orange-600 mb-3 animate-scale" />
                  <h3 className="font-bold text-foreground mb-2">Sistemas GIS</h3>
                  <p className="text-sm text-muted-foreground">Plataformas integradas para gestão de informações territoriais</p>
                </div>
              </div>
            </div>

            {/* Uma Vitrine Técnica e Estratégica */}
            <div ref={vitrinaRef as any} className="border-l-4 border-l-orange-600 pl-8 animate-slide-up">
              <div className="flex items-start gap-4 mb-4">
                <Compass className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1 animate-scale" />
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Uma Vitrine Técnica e Estratégica</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O MundoGEO serve, portanto, como uma vitrine técnica e estratégica. Ele mostra o que já está sendo feito no Brasil e no mundo, aproxima instituições de especialistas, apresenta soluções de mercado, estimula parcerias e ajuda os órgãos públicos a enxergarem novas possibilidades para seus próprios desafios.
                  </p>
                </div>
              </div>
            </div>

            {/* Transformar o Território em Inteligência */}
            <div ref={transformarRef as any} className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-lg animate-scale">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-green-400 animate-scale" />
                Transformar o Território em Inteligência
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed animate-fade-in">
                  Mais do que uma feira de tecnologia, o MundoGEO é um ambiente de aprendizado sobre como transformar o território em inteligência. Para a COMLURB, essa visão é essencial: a cidade precisa ser compreendida para ser bem cuidada, e os dados geográficos são uma das principais ferramentas para alcançar esse objetivo.
                </p>
                <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  A feira permitiu observar experiências, tecnologias e métodos que podem apoiar a COMLURB na construção de uma gestão mais integrada, moderna e orientada por dados.
                </p>
                <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Os conteúdos apresentados mostraram que a transformação digital não começa apenas com a compra de sistemas, mas com a organização das informações, a integração das áreas, a padronização dos dados e a capacitação das pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef as any} className="py-20 bg-gradient-to-r from-green-50 to-blue-50 animate-fade-in">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground animate-slide-up">Quer Saber Mais?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Visite o site oficial do MundoGEO Connect 2026 para conhecer mais sobre o evento, programação, palestrantes e oportunidades de participação.
          </p>
          <a
            href="https://mundogeoconnect.com/2026/evento/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition font-medium text-lg animate-scale"
            style={{ animationDelay: '0.2s' }}
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
