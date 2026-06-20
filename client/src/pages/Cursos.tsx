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
                className="w-full max-w-2xl h-auto object-contain"
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

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-foreground text-center">Cursos e Conhecimentos Adquiridos</h2>
          
          {/* Course 1 */}
          <div className="mb-20 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 text-white flex flex-col justify-center">
                <div className="text-5xl font-bold mb-4">01</div>
                <h3 className="text-2xl font-bold">Automação e IA no ArcGIS</h3>
              </div>
              <div className="md:col-span-2 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-green-600 mb-3">O que foi abordado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Recursos de automação e inteligência artificial dentro do ambiente ArcGIS, com foco na melhoria dos fluxos de trabalho técnicos e operacionais. Uso de assistentes de IA para construção de expressões, linguagem Arcade para automatizações, e Python com Deep Learning para classificação de imagens de sensores remotos e drones.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">Aplicação na COMLURB</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Automação de atividades que dependem de conferências manuais e relatórios repetitivos</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Melhoria de formulários de campo e validação automática de preenchimentos</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Análise de imagens aéreas e fotografias para identificar padrões de resíduos e vegetação</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Aplicação em poda urbana, coleta seletiva, limpeza de escolas e controle de ordens de serviço</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="mb-20 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white flex flex-col justify-center">
                <div className="text-5xl font-bold mb-4">02</div>
                <h3 className="text-2xl font-bold">GIS e Inteligência Artificial</h3>
              </div>
              <div className="md:col-span-2 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-blue-600 mb-3">O que foi abordado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Relação entre Sistemas de Informação Geográfica e diferentes níveis de inteligência artificial. Conceitos de machine learning, deep learning, redes neurais e IA generativa. Demonstração de que o desempenho dos modelos depende da quantidade, qualidade e organização dos dados. Exemplos de aplicações em estudos ambientais e territoriais.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-lg font-bold text-green-600 mb-3">Aplicação na COMLURB</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Transição de gestão reativa para gestão preventiva e estratégica</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Identificação de padrões de ocorrência e previsão de áreas de maior demanda</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Análise de imagens para classificar situações operacionais e reconhecer elementos urbanos</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Melhor distribuição de equipes e recursos baseada em dados históricos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="mb-20 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white flex flex-col justify-center">
                <div className="text-5xl font-bold mb-4">03</div>
                <h3 className="text-2xl font-bold">Inteligência Geográfica nos Municípios</h3>
              </div>
              <div className="md:col-span-2 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-purple-600 mb-3">O que foi abordado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Papel da informação territorial na administração pública. Integração entre cadastro, cartografia, planejamento urbano e dados ambientais. Experiências de municípios como Belo Horizonte e Fortaleza na construção de bases de dados geográficas únicas. O cadastro como infraestrutura estratégica de governo.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-lg font-bold text-green-600 mb-3">Aplicação na COMLURB</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Criação de visão integrada do território operacional da limpeza urbana</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Base única e confiável de informações operacionais reunindo todos os serviços</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Integração com bases municipais existentes (logradouros, bairros, equipamentos públicos)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Identificação de áreas críticas e melhor planejamento de recursos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white flex flex-col justify-center">
                <div className="text-5xl font-bold mb-4">04</div>
                <h3 className="text-2xl font-bold">Informação Geográfica e IA</h3>
              </div>
              <div className="md:col-span-2 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-orange-600 mb-3">O que foi abordado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Relação entre dados territoriais, modelos computacionais e apoio à tomada de decisão. Papel das geotecnologias no tratamento de imagens, mapas e variáveis ambientais. Importância dos dados de entrada para modelos de IA e evolução dos métodos de machine learning e deep learning.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-lg font-bold text-green-600 mb-3">Aplicação na COMLURB</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-orange-600 font-bold">✓</span>
                        <span>Transformação de dados operacionais em conhecimento estratégico</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-orange-600 font-bold">✓</span>
                        <span>Criação de modelos de análise para indicar prioridades e identificar padrões</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-orange-600 font-bold">✓</span>
                        <span>Classificação de imagens para reconhecer acúmulo de resíduos e alterações urbanas</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-orange-600 font-bold">✓</span>
                        <span>Sequência lógica: organizar dados → capacitar pessoas → integrar sistemas → automatizar → aplicar IA</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
