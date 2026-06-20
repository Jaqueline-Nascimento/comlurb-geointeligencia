import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const coursesData = [
  {
    id: 1,
    number: "01",
    title: "Automação e IA no ArcGIS",
    color: "from-green-500 to-green-600",
    textColor: "text-green-600",
    fullText: `O curso "Automação e IA no ArcGIS" apresentou formas de utilizar recursos de automação e inteligência artificial dentro do ambiente ArcGIS, com foco na melhoria dos fluxos de trabalho técnicos e operacionais.

O conteúdo abordou o uso de assistentes de inteligência artificial como apoio à construção de expressões e rotinas dentro do ArcGIS Pro e de aplicações web. Também foi apresentado o uso da linguagem Arcade, que permite criar regras, cálculos, validações, expressões condicionais e automatizações dentro dos mapas, formulários, painéis e relatórios.

Outro ponto relevante foi a introdução ao uso de Python e técnicas de Deep Learning para classificação de imagens. Essa abordagem permite que imagens obtidas por sensores remotos, drones ou outras fontes sejam analisadas por modelos computacionais capazes de reconhecer padrões, classificar áreas e apoiar diagnósticos territoriais.

Em síntese, o curso demonstrou que o ArcGIS pode deixar de ser apenas uma ferramenta de visualização de mapas e passar a funcionar como uma plataforma de automação de processos, análise territorial e apoio à decisão.

Na COMLURB, esse conhecimento pode ser aplicado diretamente na automação de atividades que hoje dependem de conferências manuais, planilhas paralelas ou produção repetitiva de relatórios.

A linguagem Arcade e os recursos de automação podem ser utilizados para melhorar formulários de campo, validar preenchimentos, gerar campos calculados, classificar automaticamente tipos de ocorrência, organizar painéis de acompanhamento e produzir relatórios técnicos de forma mais padronizada.

Esse aprendizado tem aplicação direta em processos como poda urbana, coleta seletiva, limpeza de escolas e unidades de saúde, apoio a eventos, manutenção de praças, controle de ordens de serviço e acompanhamento de demandas oriundas do 1746.

A inteligência artificial e o Deep Learning também podem apoiar a análise de imagens aéreas, imagens de drones ou registros fotográficos de campo, permitindo identificar padrões relacionados a vegetação, áreas com acúmulo de resíduos, alterações no território, pontos críticos de descarte irregular e locais que exigem maior atenção operacional.

Para a Companhia, o principal ganho está em reduzir retrabalho, aumentar a velocidade de resposta, melhorar a qualidade dos dados e transformar o ArcGIS em uma ferramenta ativa de gestão, e não apenas em um repositório de mapas.

Princípios: Segurança, Privacidade, Transparência, Justiça, Confiabilidade e Responsabilidade. Importância da auditabilidade no setor público.

Assistentes de IA:
• Assistente Arcade: geração de expressões para mapas, rótulos e simbologia.
• Assistente Notebooks: geração de código Python usando linguagem natural.
• Survey123: criação automática de formulários e interpretação de imagens.
• StoryMaps: criação de narrativas geográficas interativas.
• Business Analyst: análises territoriais e recomendações.
• Teams: integração do ArcGIS ao Microsoft Teams.
• Documentação: geração de metadados.
• Solutions: descoberta de soluções prontas.

Data Explorer:
• Criação automática de aplicações geográficas baseadas em dados.
• Interação via linguagem natural.
• Chat de chamada única.

Aplicações potenciais na COMLURB:
• Coleta inteligente em campo com Survey123.
• Automação com Notebooks.
• Exploração de dados do SICO por gestores.
• Dashboards e StoryMaps para comunicação.
• Planejamento territorial baseado em dados.`
  },
  {
    id: 2,
    number: "02",
    title: "GIS e Inteligência Artificial",
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    fullText: `O curso "GIS e Inteligência Artificial" apresentou a relação entre os Sistemas de Informação Geográfica e os diferentes níveis de inteligência artificial aplicados ao território.

Foi possível observar uma introdução conceitual sobre inteligência artificial, machine learning, deep learning, redes neurais e inteligência artificial generativa. O curso mostrou que a inteligência artificial não é uma tecnologia única, mas um conjunto de métodos capazes de aprender padrões a partir de dados.

Também foi demonstrado que o desempenho dos modelos de inteligência artificial depende diretamente da quantidade, da qualidade e da organização dos dados disponíveis. Em outras palavras, quanto melhor estruturada for a base de informações, maior será a capacidade da tecnologia de produzir análises confiáveis.

Os exemplos apresentados envolveram aplicações de machine learning em estudos ambientais e territoriais, como mapeamento de áreas de risco de deslizamento em São Sebastião, classificação de áreas úmidas no Rio Grande do Sul e análise de imagens e variáveis geográficas para identificação de padrões.

O curso reforçou uma ideia central: a inteligência artificial só gera bons resultados quando está apoiada em dados consistentes, bem georreferenciados e corretamente interpretados por equipes capacitadas.

Na COMLURB, o uso combinado de GIS e inteligência artificial pode apoiar uma mudança importante: sair de uma gestão predominantemente reativa para uma gestão mais preventiva e estratégica.

Com bases históricas de atendimento, registros do 1746, ordens de serviço, dados de campo, imagens, rotas operacionais e informações territoriais, a Companhia poderá desenvolver análises para identificar padrões de ocorrência, prever áreas de maior demanda e orientar melhor a distribuição de equipes e recursos.

Esse conhecimento pode ser aplicado, por exemplo, na identificação de locais com maior recorrência de descarte irregular, na previsão de aumento de resíduos em determinadas épocas, no apoio ao planejamento da limpeza urbana em eventos, na análise de áreas com maior necessidade de poda, na priorização de serviços por criticidade e na definição de rotas mais eficientes.

A inteligência artificial também pode apoiar a leitura de imagens e fotografias, classificando situações operacionais, reconhecendo elementos urbanos e auxiliando na organização de evidências para relatórios técnicos.

O principal aprendizado para a COMLURB é que a inteligência artificial não substitui o conhecimento operacional dos empregados. Ao contrário, ela depende desse conhecimento para interpretar corretamente o território. A tecnologia deve ser vista como uma ferramenta de apoio, capaz de ampliar a capacidade de análise da Companhia e tornar as decisões mais rápidas, precisas e baseadas em evidências.`
  },
  {
    id: 3,
    number: "03",
    title: "Inteligência Geográfica nos Municípios",
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    fullText: `O curso "Inteligência Geográfica nos Municípios" trouxe uma visão ampla sobre o papel da informação territorial na administração pública. A mensagem central apresentada foi que toda decisão pública acontece em algum lugar. Escolas, unidades de saúde, equipamentos públicos, atividades econômicas, áreas residenciais, infraestrutura urbana e serviços municipais estão todos localizados no território.

Quando os dados começam a se conectar, surge a inteligência geográfica. Essa inteligência nasce da integração entre cadastro, cartografia, planejamento urbano, mercado imobiliário, informações tributárias, infraestrutura urbana e dados ambientais.

Foram apresentados exemplos de municípios que utilizam a informação territorial como infraestrutura estratégica de governo, com destaque para experiências de Belo Horizonte e Fortaleza.

No caso de Belo Horizonte, foi apresentado o Cadastro Territorial Multifinalitário, a construção de uma Base de Dados Geográfica única, o papel da IDE-BHGEO, o SisCTM, o SIURBE e a integração de diferentes órgãos municipais em torno de uma visão única do território. A palestra mostrou que o maior desafio não é tecnológico, mas institucional: integrar pessoas, processos e dados.

Também foi destacada a experiência de Fortaleza, com uma trajetória de evolução da informação territorial à inteligência geográfica. O percurso apresentado passou por etapas como conhecer, mapear, integrar, conectar e decidir. Essa lógica demonstra que os municípios precisam primeiro estruturar sua base de dados para, depois, avançar em inteligência artificial, GeoBIM, gêmeos digitais e modelos mais sofisticados de tomada de decisão.

O cadastro deixou de ser apenas um instrumento ligado à arrecadação. Ele passou a ser compreendido como uma infraestrutura estratégica de governo, capaz de apoiar habitação, mobilidade urbana, regularização fundiária, defesa civil, meio ambiente, planejamento territorial, Limpeza Urbana, tributação e integração de dados.

Para a COMLURB, esse curso tem aplicação direta na construção de uma visão integrada do território operacional da limpeza urbana.

A Companhia atua diariamente em toda a cidade: ruas, praças, escolas, unidades de saúde, áreas de lazer, comunidades, grandes eventos, praias, parques, logradouros e áreas de descarte irregular. Cada serviço executado ocorre em um ponto do território e produz uma informação que pode ser utilizada para melhorar o planejamento.

A inteligência geográfica pode apoiar a COMLURB na criação de uma base única e confiável de informações operacionais, reunindo dados de coleta, varrição, poda, coleta seletiva, remoção, limpeza hospitalar, limpeza escolar, eventos, praças, equipamentos urbanos e atendimento ao cidadão.

Esse conhecimento também reforça a necessidade de integração com bases municipais já existentes, como logradouros, bairros, áreas de planejamento, equipamentos públicos, dados do 1746, bases do IPP, SIURB, sistemas internos e demais informações produzidas pela Prefeitura.

A aplicação prática está em permitir que a COMLURB enxergue a cidade de forma mais precisa, evitando decisões baseadas apenas em percepção ou demanda isolada. Com inteligência geográfica, será possível identificar onde estão os maiores problemas, quais áreas demandam mais recursos, onde há repetição de ocorrências, onde a operação precisa ser reforçada e quais serviços podem ser planejados de forma integrada.

O aprendizado mais importante é que a cidade não pode ser administrada por bases fragmentadas. Para uma empresa como a COMLURB, que atua diretamente no território, a informação geográfica integrada é uma condição para melhorar a eficiência operacional, a transparência, o planejamento e a qualidade dos serviços prestados à população.`
  },
  {
    id: 4,
    number: "04",
    title: "Informação Geográfica e IA",
    color: "from-orange-500 to-orange-600",
    textColor: "text-orange-600",
    fullText: `O curso "Informação Geográfica e Inteligência Artificial" aprofundou a relação entre dados territoriais, modelos computacionais e apoio à tomada de decisão.

A partir dos slides enviados, observou-se que o curso destacou o papel das geotecnologias no tratamento de imagens, mapas, variáveis ambientais, bases territoriais e informações espaciais. Foram apresentados exemplos de uso de inteligência artificial para classificação de áreas, identificação de padrões e produção de diagnósticos sobre o território.

O curso também apresentou a importância dos dados de entrada para os modelos de inteligência artificial. Nas lâminas sobre redes neurais, foi possível observar a lógica de funcionamento com camadas de entrada, camadas ocultas e camadas de saída. Essa estrutura demonstra que a inteligência artificial processa diferentes variáveis e procura padrões que possam gerar uma resposta ou classificação.

Outro ponto destacado foi a evolução da inteligência artificial, do machine learning e do deep learning ao longo do tempo. O material mostrou que os métodos mais recentes têm maior capacidade de desempenho quando alimentados por grandes volumes de dados.

A palestra também abordou aplicações práticas em geotecnologias, como análise de imagens, mapeamento de riscos, classificação de áreas, reconhecimento de padrões ambientais e apoio ao planejamento urbano.

A principal mensagem é que a inteligência artificial aplicada à informação geográfica permite transformar grandes quantidades de dados espaciais em conhecimento útil para a gestão pública.

Na COMLURB, a informação geográfica combinada com inteligência artificial pode apoiar a transformação dos dados operacionais em conhecimento estratégico.

A Companhia possui grande potencial de produção de dados territoriais: registros de equipes, roteiros, ordens de serviço, demandas do cidadão, imagens de campo, localização de pontos críticos, serviços executados, áreas atendidas, periodicidade operacional e indicadores de produtividade.

Com esse conhecimento, a COMLURB poderá avançar na criação de modelos de análise capazes de indicar prioridades, identificar padrões e auxiliar na previsão de demandas. Isso pode apoiar o planejamento de serviços como coleta seletiva, poda urbana, limpeza de praias, remoção de resíduos, manutenção de praças, limpeza de escolas e unidades de saúde, além do planejamento de grandes eventos.

A inteligência artificial também pode auxiliar na classificação de imagens de campo, permitindo reconhecer situações como acúmulo de resíduos, presença de vegetação, obstruções, necessidade de limpeza, descarte irregular ou alterações no espaço urbano.

No entanto, o curso reforça um cuidado essencial: a inteligência artificial não deve ser usada sobre bases desorganizadas ou inconsistentes. Antes de avançar para modelos mais sofisticados, é necessário estruturar os dados, padronizar informações, garantir qualidade, definir regras de governança e integrar sistemas.

Para a COMLURB, esse curso evidencia que o caminho da inovação passa por uma sequência lógica: primeiro organizar os dados, capacitar as pessoas, depois integrar os sistemas, em seguida automatizar processos e, por fim, aplicar inteligência artificial para apoiar decisões mais qualificadas.`
  }
];

const carouselImages = [
  "/manus-storage/20260616_090656_0fb4a5f5.webp",
  "/manus-storage/20260616_091553_87335347.webp",
  "/manus-storage/20260616_092655_4ecff374.webp",
  "/manus-storage/20260616_091448_bd6c52aa.webp",
  "/manus-storage/20260616_141601_bf1ebec1.webp",
  "/manus-storage/20260616_142455_d089d76c.webp",
  "/manus-storage/20260616_142609_4a256e0b.webp",
  "/manus-storage/20260616_143121_2c174835.webp",
  "/manus-storage/20260616_142925_7f408d31.webp",
  "/manus-storage/20260616_143630_a7e593ec.webp",
  "/manus-storage/20260616_143653_7cf33545.webp",
  "/manus-storage/20260616_142747_3b5503bc.webp",
  "/manus-storage/20260617_151921_6ed563ab.webp",
  "/manus-storage/20260616_102733_cb473748.webp",
  "/manus-storage/20260617_152228_f0671281.webp"
];

export default function Cursos() {
  const [, navigate] = useLocation();
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleCourse = (id: number) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

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
          
          {coursesData.map((course) => (
            <div key={course.id} className="mb-6 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Color Section with Number */}
                <button
                  onClick={() => toggleCourse(course.id)}
                  className={`bg-gradient-to-br ${course.color} p-8 text-white flex flex-col justify-center cursor-pointer hover:opacity-90 transition`}
                >
                  <div className="text-5xl font-bold mb-4">{course.number}</div>
                  <h3 className="text-2xl font-bold text-left">{course.title}</h3>
                  <div className="mt-4 flex items-center gap-2">
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${expandedCourse === course.id ? 'rotate-180' : ''}`}
                    />
                    <span className="text-sm">{expandedCourse === course.id ? 'Recolher' : 'Expandir'}</span>
                  </div>
                </button>

                {/* Content Section */}
                <div className="md:col-span-2 p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-green-600 mb-3">O que foi abordado</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {course.id === 1 && "Recursos de automação e inteligência artificial dentro do ambiente ArcGIS, com foco na melhoria dos fluxos de trabalho técnicos e operacionais. Uso de assistentes de IA para construção de expressões, linguagem Arcade para automatizações, e Python com Deep Learning para classificação de imagens de sensores remotos e drones."}
                        {course.id === 2 && "Relação entre Sistemas de Informação Geográfica e diferentes níveis de inteligência artificial. Conceitos de machine learning, deep learning, redes neurais e IA generativa. Demonstração de que o desempenho dos modelos depende da quantidade, qualidade e organização dos dados."}
                        {course.id === 3 && "Papel da informação territorial na administração pública. Integração entre cadastro, cartografia, planejamento urbano e dados ambientais. Experiências de municípios como Belo Horizonte e Fortaleza na construção de bases de dados geográficas únicas."}
                        {course.id === 4 && "Relação entre dados territoriais, modelos computacionais e apoio à tomada de decisão. Papel das geotecnologias no tratamento de imagens, mapas e variáveis ambientais. Importância dos dados de entrada para modelos de IA."}
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className={`text-lg font-bold ${course.textColor} mb-3`}>Aplicabilidade na COMLURB</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {course.id === 1 && (
                          <>
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
                          </>
                        )}
                        {course.id === 2 && (
                          <>
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
                          </>
                        )}
                        {course.id === 3 && (
                          <>
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
                          </>
                        )}
                        {course.id === 4 && (
                          <>
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
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Full Text */}
              {expandedCourse === course.id && (
                <div className="border-t bg-slate-50 p-8">
                  <div className="prose prose-sm max-w-none">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {course.fullText}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Momentos do Congresso</h2>
          
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden shadow-2xl">
            {/* Main Image */}
            <div className="relative w-full h-auto md:h-auto overflow-hidden">
              <img
                src={carouselImages[currentImageIndex]}
                alt={`Imagem ${currentImageIndex + 1}`}
                className="w-full h-auto object-contain transition-opacity duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentImageIndex + 1} / {carouselImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="bg-slate-50 p-6 overflow-x-auto">
              <div className="flex gap-3 justify-center md:justify-start">
                {carouselImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      index === currentImageIndex
                        ? 'border-green-600 shadow-lg'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Convergência e Oportunidades</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Os quatro cursos convergem para uma mesma conclusão: a COMLURB tem a oportunidade de transformar sua grande capacidade operacional em uma gestão cada vez mais orientada por dados e preditiva, com capacidade de se antecipar aos fatos.
              </p>

              <p>
                A Companhia já possui conhecimento de território, presença diária nas ruas, equipes distribuídas pela cidade e grande volume de informações produzidas em campo. O desafio é organizar esse conhecimento em bases geográficas integradas, confiáveis e atualizadas.
              </p>

              <p>
                A automação no ArcGIS pode reduzir tarefas repetitivas. A inteligência artificial pode identificar padrões e apoiar previsões. A inteligência geográfica pode conectar diferentes áreas da Companhia em torno de uma mesma visão territorial. E a informação geográfica estruturada pode transformar dados dispersos em decisões mais rápidas, transparentes e eficientes.
              </p>

              <p>
                A principal lição extraída do Congresso MundoGEO é que tecnologia não é o fim. Tecnologia é o meio. A finalidade é melhorar a gestão pública, apoiar os trabalhadores, qualificar o planejamento e entregar melhores serviços à cidade.
              </p>

              <p className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded">
                <span className="font-semibold text-foreground">Para a COMLURB, isso significa avançar para uma operação mais inteligente, integrada e preventiva, capaz de compreender melhor o território e responder com mais eficiência às necessidades da população carioca.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
