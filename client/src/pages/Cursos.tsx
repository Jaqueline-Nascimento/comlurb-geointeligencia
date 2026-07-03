import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const coursesData = [
  {
    id: 1,
    number: "01",
    title: "AutomaÃ§Ã£o e IA no ArcGIS",
    color: "from-green-500 to-green-600",
    textColor: "text-green-600",
    fullText: `O curso "AutomaÃ§Ã£o e IA no ArcGIS" apresentou formas de utilizar recursos de automaÃ§Ã£o e inteligÃªncia artificial dentro do ambiente ArcGIS, com foco na melhoria dos fluxos de trabalho tÃ©cnicos e operacionais.

O conteÃºdo abordou o uso de assistentes de inteligÃªncia artificial como apoio Ã  construÃ§Ã£o de expressÃµes e rotinas dentro do ArcGIS Pro e de aplicaÃ§Ãµes web. TambÃ©m foi apresentado o uso da linguagem Arcade, que permite criar regras, cÃ¡lculos, validaÃ§Ãµes, expressÃµes condicionais e automatizaÃ§Ãµes dentro dos mapas, formulÃ¡rios, painÃ©is e relatÃ³rios.

Outro ponto relevante foi a introduÃ§Ã£o ao uso de Python e tÃ©cnicas de Deep Learning para classificaÃ§Ã£o de imagens. Essa abordagem permite que imagens obtidas por sensores remotos, drones ou outras fontes sejam analisadas por modelos computacionais capazes de reconhecer padrÃµes, classificar Ã¡reas e apoiar diagnÃ³sticos territoriais.

Em sÃ­ntese, o curso demonstrou que o ArcGIS pode deixar de ser apenas uma ferramenta de visualizaÃ§Ã£o de mapas e passar a funcionar como uma plataforma de automaÃ§Ã£o de processos, anÃ¡lise territorial e apoio Ã  decisÃ£o.

Na COMLURB, esse conhecimento pode ser aplicado diretamente na automaÃ§Ã£o de atividades que hoje dependem de conferÃªncias manuais, planilhas paralelas ou produÃ§Ã£o repetitiva de relatÃ³rios.

A linguagem Arcade e os recursos de automaÃ§Ã£o podem ser utilizados para melhorar formulÃ¡rios de campo, validar preenchimentos, gerar campos calculados, classificar automaticamente tipos de ocorrÃªncia, organizar painÃ©is de acompanhamento e produzir relatÃ³rios tÃ©cnicos de forma mais padronizada.

Esse aprendizado tem aplicaÃ§Ã£o direta em processos como poda urbana, coleta seletiva, limpeza de escolas e unidades de saÃºde, apoio a eventos, manutenÃ§Ã£o de praÃ§as, controle de ordens de serviÃ§o e acompanhamento de demandas oriundas do 1746.

A inteligÃªncia artificial e o Deep Learning tambÃ©m podem apoiar a anÃ¡lise de imagens aÃ©reas, imagens de drones ou registros fotogrÃ¡ficos de campo, permitindo identificar padrÃµes relacionados a vegetaÃ§Ã£o, Ã¡reas com acÃºmulo de resÃ­duos, alteraÃ§Ãµes no territÃ³rio, pontos crÃ­ticos de descarte irregular e locais que exigem maior atenÃ§Ã£o operacional.

Para a Companhia, o principal ganho estÃ¡ em reduzir retrabalho, aumentar a velocidade de resposta, melhorar a qualidade dos dados e transformar o ArcGIS em uma ferramenta ativa de gestÃ£o, e nÃ£o apenas em um repositÃ³rio de mapas.

PrincÃ­pios: SeguranÃ§a, Privacidade, TransparÃªncia, JustiÃ§a, Confiabilidade e Responsabilidade. ImportÃ¢ncia da auditabilidade no setor pÃºblico.

Assistentes de IA:
â€¢ Assistente Arcade: geraÃ§Ã£o de expressÃµes para mapas, rÃ³tulos e simbologia.
â€¢ Assistente Notebooks: geraÃ§Ã£o de cÃ³digo Python usando linguagem natural.
â€¢ Survey123: criaÃ§Ã£o automÃ¡tica de formulÃ¡rios e interpretaÃ§Ã£o de imagens.
â€¢ StoryMaps: criaÃ§Ã£o de narrativas geogrÃ¡ficas interativas.
â€¢ Business Analyst: anÃ¡lises territoriais e recomendaÃ§Ãµes.
â€¢ Teams: integraÃ§Ã£o do ArcGIS ao Microsoft Teams.
â€¢ DocumentaÃ§Ã£o: geraÃ§Ã£o de metadados.
â€¢ Solutions: descoberta de soluÃ§Ãµes prontas.

Data Explorer:
â€¢ CriaÃ§Ã£o automÃ¡tica de aplicaÃ§Ãµes geogrÃ¡ficas baseadas em dados.
â€¢ InteraÃ§Ã£o via linguagem natural.
â€¢ Chat de chamada Ãºnica.

AplicaÃ§Ãµes potenciais na COMLURB:
â€¢ Coleta inteligente em campo com Survey123.
â€¢ AutomaÃ§Ã£o com Notebooks.
â€¢ ExploraÃ§Ã£o de dados do SICO por gestores.
â€¢ Dashboards e StoryMaps para comunicaÃ§Ã£o.
â€¢ Planejamento territorial baseado em dados.`
  },
  {
    id: 2,
    number: "02",
    title: "GIS e InteligÃªncia Artificial",
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-600",
    fullText: `O curso "GIS e InteligÃªncia Artificial" apresentou a relaÃ§Ã£o entre os Sistemas de InformaÃ§Ã£o GeogrÃ¡fica e os diferentes nÃ­veis de inteligÃªncia artificial aplicados ao territÃ³rio.

Foi possÃ­vel observar uma introduÃ§Ã£o conceitual sobre inteligÃªncia artificial, machine learning, deep learning, redes neurais e inteligÃªncia artificial generativa. O curso mostrou que a inteligÃªncia artificial nÃ£o Ã© uma tecnologia Ãºnica, mas um conjunto de mÃ©todos capazes de aprender padrÃµes a partir de dados.

TambÃ©m foi demonstrado que o desempenho dos modelos de inteligÃªncia artificial depende diretamente da quantidade, da qualidade e da organizaÃ§Ã£o dos dados disponÃ­veis. Em outras palavras, quanto melhor estruturada for a base de informaÃ§Ãµes, maior serÃ¡ a capacidade da tecnologia de produzir anÃ¡lises confiÃ¡veis.

Os exemplos apresentados envolveram aplicaÃ§Ãµes de machine learning em estudos ambientais e territoriais, como mapeamento de Ã¡reas de risco de deslizamento em SÃ£o SebastiÃ£o, classificaÃ§Ã£o de Ã¡reas Ãºmidas no Rio Grande do Sul e anÃ¡lise de imagens e variÃ¡veis geogrÃ¡ficas para identificaÃ§Ã£o de padrÃµes.

O curso reforÃ§ou uma ideia central: a inteligÃªncia artificial sÃ³ gera bons resultados quando estÃ¡ apoiada em dados consistentes, bem georreferenciados e corretamente interpretados por equipes capacitadas.

Na COMLURB, o uso combinado de GIS e inteligÃªncia artificial pode apoiar uma mudanÃ§a importante: sair de uma gestÃ£o predominantemente reativa para uma gestÃ£o mais preventiva e estratÃ©gica.

Com bases histÃ³ricas de atendimento, registros do 1746, ordens de serviÃ§o, dados de campo, imagens, rotas operacionais e informaÃ§Ãµes territoriais, a Companhia poderÃ¡ desenvolver anÃ¡lises para identificar padrÃµes de ocorrÃªncia, prever Ã¡reas de maior demanda e orientar melhor a distribuiÃ§Ã£o de equipes e recursos.

Esse conhecimento pode ser aplicado, por exemplo, na identificaÃ§Ã£o de locais com maior recorrÃªncia de descarte irregular, na previsÃ£o de aumento de resÃ­duos em determinadas Ã©pocas, no apoio ao planejamento da limpeza urbana em eventos, na anÃ¡lise de Ã¡reas com maior necessidade de poda, na priorizaÃ§Ã£o de serviÃ§os por criticidade e na definiÃ§Ã£o de rotas mais eficientes.

A inteligÃªncia artificial tambÃ©m pode apoiar a leitura de imagens e fotografias, classificando situaÃ§Ãµes operacionais, reconhecendo elementos urbanos e auxiliando na organizaÃ§Ã£o de evidÃªncias para relatÃ³rios tÃ©cnicos.

O principal aprendizado para a COMLURB Ã© que a inteligÃªncia artificial nÃ£o substitui o conhecimento operacional dos empregados. Ao contrÃ¡rio, ela depende desse conhecimento para interpretar corretamente o territÃ³rio. A tecnologia deve ser vista como uma ferramenta de apoio, capaz de ampliar a capacidade de anÃ¡lise da Companhia e tornar as decisÃµes mais rÃ¡pidas, precisas e baseadas em evidÃªncias.`
  },
  {
    id: 3,
    number: "03",
    title: "InteligÃªncia GeogrÃ¡fica nos MunicÃ­pios",
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-600",
    fullText: `O curso "InteligÃªncia GeogrÃ¡fica nos MunicÃ­pios" trouxe uma visÃ£o ampla sobre o papel da informaÃ§Ã£o territorial na administraÃ§Ã£o pÃºblica. A mensagem central apresentada foi que toda decisÃ£o pÃºblica acontece em algum lugar. Escolas, unidades de saÃºde, equipamentos pÃºblicos, atividades econÃ´micas, Ã¡reas residenciais, infraestrutura urbana e serviÃ§os municipais estÃ£o todos localizados no territÃ³rio.

Quando os dados comeÃ§am a se conectar, surge a inteligÃªncia geogrÃ¡fica. Essa inteligÃªncia nasce da integraÃ§Ã£o entre cadastro, cartografia, planejamento urbano, mercado imobiliÃ¡rio, informaÃ§Ãµes tributÃ¡rias, infraestrutura urbana e dados ambientais.

Foram apresentados exemplos de municÃ­pios que utilizam a informaÃ§Ã£o territorial como infraestrutura estratÃ©gica de governo, com destaque para experiÃªncias de Belo Horizonte e Fortaleza.

No caso de Belo Horizonte, foi apresentado o Cadastro Territorial MultifinalitÃ¡rio, a construÃ§Ã£o de uma Base de Dados GeogrÃ¡fica Ãºnica, o papel da IDE-BHGEO, o SisCTM, o SIURBE e a integraÃ§Ã£o de diferentes Ã³rgÃ£os municipais em torno de uma visÃ£o Ãºnica do territÃ³rio. A palestra mostrou que o maior desafio nÃ£o Ã© tecnolÃ³gico, mas institucional: integrar pessoas, processos e dados.

TambÃ©m foi destacada a experiÃªncia de Fortaleza, com uma trajetÃ³ria de evoluÃ§Ã£o da informaÃ§Ã£o territorial Ã  inteligÃªncia geogrÃ¡fica. O percurso apresentado passou por etapas como conhecer, mapear, integrar, conectar e decidir. Essa lÃ³gica demonstra que os municÃ­pios precisam primeiro estruturar sua base de dados para, depois, avanÃ§ar em inteligÃªncia artificial, GeoBIM, gÃªmeos digitais e modelos mais sofisticados de tomada de decisÃ£o.

O cadastro deixou de ser apenas um instrumento ligado Ã  arrecadaÃ§Ã£o. Ele passou a ser compreendido como uma infraestrutura estratÃ©gica de governo, capaz de apoiar habitaÃ§Ã£o, mobilidade urbana, regularizaÃ§Ã£o fundiÃ¡ria, defesa civil, meio ambiente, planejamento territorial, Limpeza Urbana, tributaÃ§Ã£o e integraÃ§Ã£o de dados.

Para a COMLURB, esse curso tem aplicaÃ§Ã£o direta na construÃ§Ã£o de uma visÃ£o integrada do territÃ³rio operacional da limpeza urbana.

A Companhia atua diariamente em toda a cidade: ruas, praÃ§as, escolas, unidades de saÃºde, Ã¡reas de lazer, comunidades, grandes eventos, praias, parques, logradouros e Ã¡reas de descarte irregular. Cada serviÃ§o executado ocorre em um ponto do territÃ³rio e produz uma informaÃ§Ã£o que pode ser utilizada para melhorar o planejamento.

A inteligÃªncia geogrÃ¡fica pode apoiar a COMLURB na criaÃ§Ã£o de uma base Ãºnica e confiÃ¡vel de informaÃ§Ãµes operacionais, reunindo dados de coleta, varriÃ§Ã£o, poda, coleta seletiva, remoÃ§Ã£o, limpeza hospitalar, limpeza escolar, eventos, praÃ§as, equipamentos urbanos e atendimento ao cidadÃ£o.

Esse conhecimento tambÃ©m reforÃ§a a necessidade de integraÃ§Ã£o com bases municipais jÃ¡ existentes, como logradouros, bairros, Ã¡reas de planejamento, equipamentos pÃºblicos, dados do 1746, bases do IPP, SIURB, sistemas internos e demais informaÃ§Ãµes produzidas pela Prefeitura.

A aplicaÃ§Ã£o prÃ¡tica estÃ¡ em permitir que a COMLURB enxergue a cidade de forma mais precisa, evitando decisÃµes baseadas apenas em percepÃ§Ã£o ou demanda isolada. Com inteligÃªncia geogrÃ¡fica, serÃ¡ possÃ­vel identificar onde estÃ£o os maiores problemas, quais Ã¡reas demandam mais recursos, onde hÃ¡ repetiÃ§Ã£o de ocorrÃªncias, onde a operaÃ§Ã£o precisa ser reforÃ§ada e quais serviÃ§os podem ser planejados de forma integrada.

O aprendizado mais importante Ã© que a cidade nÃ£o pode ser administrada por bases fragmentadas. Para uma empresa como a COMLURB, que atua diretamente no territÃ³rio, a informaÃ§Ã£o geogrÃ¡fica integrada Ã© uma condiÃ§Ã£o para melhorar a eficiÃªncia operacional, a transparÃªncia, o planejamento e a qualidade dos serviÃ§os prestados Ã  populaÃ§Ã£o.`
  },
  {
    id: 4,
    number: "04",
    title: "InformaÃ§Ã£o GeogrÃ¡fica e IA",
    color: "from-orange-500 to-orange-600",
    textColor: "text-orange-600",
    fullText: `O curso "InformaÃ§Ã£o GeogrÃ¡fica e InteligÃªncia Artificial" aprofundou a relaÃ§Ã£o entre dados territoriais, modelos computacionais e apoio Ã  tomada de decisÃ£o.

A partir dos slides enviados, observou-se que o curso destacou o papel das geotecnologias no tratamento de imagens, mapas, variÃ¡veis ambientais, bases territoriais e informaÃ§Ãµes espaciais. Foram apresentados exemplos de uso de inteligÃªncia artificial para classificaÃ§Ã£o de Ã¡reas, identificaÃ§Ã£o de padrÃµes e produÃ§Ã£o de diagnÃ³sticos sobre o territÃ³rio.

O curso tambÃ©m apresentou a importÃ¢ncia dos dados de entrada para os modelos de inteligÃªncia artificial. Nas lÃ¢minas sobre redes neurais, foi possÃ­vel observar a lÃ³gica de funcionamento com camadas de entrada, camadas ocultas e camadas de saÃ­da. Essa estrutura demonstra que a inteligÃªncia artificial processa diferentes variÃ¡veis e procura padrÃµes que possam gerar uma resposta ou classificaÃ§Ã£o.

Outro ponto destacado foi a evoluÃ§Ã£o da inteligÃªncia artificial, do machine learning e do deep learning ao longo do tempo. O material mostrou que os mÃ©todos mais recentes tÃªm maior capacidade de desempenho quando alimentados por grandes volumes de dados.

A palestra tambÃ©m abordou aplicaÃ§Ãµes prÃ¡ticas em geotecnologias, como anÃ¡lise de imagens, mapeamento de riscos, classificaÃ§Ã£o de Ã¡reas, reconhecimento de padrÃµes ambientais e apoio ao planejamento urbano.

A principal mensagem Ã© que a inteligÃªncia artificial aplicada Ã  informaÃ§Ã£o geogrÃ¡fica permite transformar grandes quantidades de dados espaciais em conhecimento Ãºtil para a gestÃ£o pÃºblica.

Na COMLURB, a informaÃ§Ã£o geogrÃ¡fica combinada com inteligÃªncia artificial pode apoiar a transformaÃ§Ã£o dos dados operacionais em conhecimento estratÃ©gico.

A Companhia possui grande potencial de produÃ§Ã£o de dados territoriais: registros de equipes, roteiros, ordens de serviÃ§o, demandas do cidadÃ£o, imagens de campo, localizaÃ§Ã£o de pontos crÃ­ticos, serviÃ§os executados, Ã¡reas atendidas, periodicidade operacional e indicadores de produtividade.

Com esse conhecimento, a COMLURB poderÃ¡ avanÃ§ar na criaÃ§Ã£o de modelos de anÃ¡lise capazes de indicar prioridades, identificar padrÃµes e auxiliar na previsÃ£o de demandas. Isso pode apoiar o planejamento de serviÃ§os como coleta seletiva, poda urbana, limpeza de praias, remoÃ§Ã£o de resÃ­duos, manutenÃ§Ã£o de praÃ§as, limpeza de escolas e unidades de saÃºde, alÃ©m do planejamento de grandes eventos.

A inteligÃªncia artificial tambÃ©m pode auxiliar na classificaÃ§Ã£o de imagens de campo, permitindo reconhecer situaÃ§Ãµes como acÃºmulo de resÃ­duos, presenÃ§a de vegetaÃ§Ã£o, obstruÃ§Ãµes, necessidade de limpeza, descarte irregular ou alteraÃ§Ãµes no espaÃ§o urbano.

No entanto, o curso reforÃ§a um cuidado essencial: a inteligÃªncia artificial nÃ£o deve ser usada sobre bases desorganizadas ou inconsistentes. Antes de avanÃ§ar para modelos mais sofisticados, Ã© necessÃ¡rio estruturar os dados, padronizar informaÃ§Ãµes, garantir qualidade, definir regras de governanÃ§a e integrar sistemas.

Para a COMLURB, esse curso evidencia que o caminho da inovaÃ§Ã£o passa por uma sequÃªncia lÃ³gica: primeiro organizar os dados, capacitar as pessoas, depois integrar os sistemas, em seguida automatizar processos e, por fim, aplicar inteligÃªncia artificial para apoiar decisÃµes mais qualificadas.`
  }
];

const carouselImages = [
  "assets/media/20260616_090656_0fb4a5f5.webp",
  "assets/media/20260616_091553_87335347.webp",
  "assets/media/20260616_092655_4ecff374.webp",
  "assets/media/20260616_091448_bd6c52aa.webp",
  "assets/media/20260616_141601_bf1ebec1.webp",
  "assets/media/20260616_142455_d089d76c.webp",
  "assets/media/20260616_142609_4a256e0b.webp",
  "assets/media/20260616_143121_2c174835.webp",
  "assets/media/20260616_142925_7f408d31.webp",
  "assets/media/20260616_143630_a7e593ec.webp",
  "assets/media/20260616_143653_7cf33545.webp",
  "assets/media/20260616_142747_3b5503bc.webp",
  "assets/media/20260617_151921_6ed563ab.webp",
  "assets/media/20260616_102733_cb473748.webp",
  "assets/media/20260617_152228_f0671281.webp"
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
            <img src="assets/media/broom-icon_0293fe4d.png" alt="Broom Icon" className="w-10 h-10" />
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-foreground">RELATÃ“RIO DE VIAGEM - Congresso MundoGeo SP</span>
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
                src="assets/media/geointeligencia_limpeza_urbana_83763dcd.png"
                alt="GeointeligÃªncia na Limpeza Urbana"
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>

            {/* Text Column */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Cursos e Conhecimentos EstratÃ©gicos Adquiridos no Congresso MundoGEO Connect 2026
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A participaÃ§Ã£o da COMLURB no Congresso MundoGEO Connect 2026 teve como objetivo ampliar a compreensÃ£o institucional sobre o uso das geotecnologias, da inteligÃªncia artificial, da automaÃ§Ã£o e da inteligÃªncia geogrÃ¡fica como instrumentos de modernizaÃ§Ã£o da gestÃ£o pÃºblica.
                </p>

                <p>
                  Os conteÃºdos acompanhados demonstraram que a tecnologia, isoladamente, nÃ£o resolve os desafios urbanos. A principal mensagem extraÃ­da dos cursos e palestras Ã© que a transformaÃ§Ã£o digital depende da integraÃ§Ã£o entre pessoas, processos, dados e sistemas. A cidade contemporÃ¢nea muda todos os dias, e, para administrÃ¡-la com eficiÃªncia, Ã© necessÃ¡rio conhecer o territÃ³rio, atualizar informaÃ§Ãµes continuamente e transformar dados em decisÃµes melhores.
                </p>

                <p>
                  Neste primeiro mÃ³dulo, sÃ£o apresentados os cursos custeados pela COMLURB, com a descriÃ§Ã£o objetiva dos conteÃºdos abordados e a indicaÃ§Ã£o de como esse conhecimento pode ser aplicado na Companhia.
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
                        {course.id === 1 && "Recursos de automaÃ§Ã£o e inteligÃªncia artificial dentro do ambiente ArcGIS, com foco na melhoria dos fluxos de trabalho tÃ©cnicos e operacionais. Uso de assistentes de IA para construÃ§Ã£o de expressÃµes, linguagem Arcade para automatizaÃ§Ãµes, e Python com Deep Learning para classificaÃ§Ã£o de imagens de sensores remotos e drones."}
                        {course.id === 2 && "RelaÃ§Ã£o entre Sistemas de InformaÃ§Ã£o GeogrÃ¡fica e diferentes nÃ­veis de inteligÃªncia artificial. Conceitos de machine learning, deep learning, redes neurais e IA generativa. DemonstraÃ§Ã£o de que o desempenho dos modelos depende da quantidade, qualidade e organizaÃ§Ã£o dos dados."}
                        {course.id === 3 && "Papel da informaÃ§Ã£o territorial na administraÃ§Ã£o pÃºblica. IntegraÃ§Ã£o entre cadastro, cartografia, planejamento urbano e dados ambientais. ExperiÃªncias de municÃ­pios como Belo Horizonte e Fortaleza na construÃ§Ã£o de bases de dados geogrÃ¡ficas Ãºnicas."}
                        {course.id === 4 && "RelaÃ§Ã£o entre dados territoriais, modelos computacionais e apoio Ã  tomada de decisÃ£o. Papel das geotecnologias no tratamento de imagens, mapas e variÃ¡veis ambientais. ImportÃ¢ncia dos dados de entrada para modelos de IA."}
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className={`text-lg font-bold ${course.textColor} mb-3`}>Aplicabilidade na COMLURB</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {course.id === 1 && (
                          <>
                            <li className="flex gap-3">
                              <span className="text-green-600 font-bold">âœ“</span>
                              <span>AutomaÃ§Ã£o de atividades que dependem de conferÃªncias manuais e relatÃ³rios repetitivos</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-green-600 font-bold">âœ“</span>
                              <span>Melhoria de formulÃ¡rios de campo e validaÃ§Ã£o automÃ¡tica de preenchimentos</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-green-600 font-bold">âœ“</span>
                              <span>AnÃ¡lise de imagens aÃ©reas e fotografias para identificar padrÃµes de resÃ­duos e vegetaÃ§Ã£o</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-green-600 font-bold">âœ“</span>
                              <span>AplicaÃ§Ã£o em poda urbana, coleta seletiva, limpeza de escolas e controle de ordens de serviÃ§o</span>
                            </li>
                          </>
                        )}
                        {course.id === 2 && (
                          <>
                            <li className="flex gap-3">
                              <span className="text-blue-600 font-bold">âœ“</span>
                              <span>TransiÃ§Ã£o de gestÃ£o reativa para gestÃ£o preventiva e estratÃ©gica</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-blue-600 font-bold">âœ“</span>
                              <span>IdentificaÃ§Ã£o de padrÃµes de ocorrÃªncia e previsÃ£o de Ã¡reas de maior demanda</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-blue-600 font-bold">âœ“</span>
                              <span>AnÃ¡lise de imagens para classificar situaÃ§Ãµes operacionais e reconhecer elementos urbanos</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-blue-600 font-bold">âœ“</span>
                              <span>Melhor distribuiÃ§Ã£o de equipes e recursos baseada em dados histÃ³ricos</span>
                            </li>
                          </>
                        )}
                        {course.id === 3 && (
                          <>
                            <li className="flex gap-3">
                              <span className="text-purple-600 font-bold">âœ“</span>
                              <span>CriaÃ§Ã£o de visÃ£o integrada do territÃ³rio operacional da limpeza urbana</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-purple-600 font-bold">âœ“</span>
                              <span>Base Ãºnica e confiÃ¡vel de informaÃ§Ãµes operacionais reunindo todos os serviÃ§os</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-purple-600 font-bold">âœ“</span>
                              <span>IntegraÃ§Ã£o com bases municipais existentes (logradouros, bairros, equipamentos pÃºblicos)</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-purple-600 font-bold">âœ“</span>
                              <span>IdentificaÃ§Ã£o de Ã¡reas crÃ­ticas e melhor planejamento de recursos</span>
                            </li>
                          </>
                        )}
                        {course.id === 4 && (
                          <>
                            <li className="flex gap-3">
                              <span className="text-orange-600 font-bold">âœ“</span>
                              <span>TransformaÃ§Ã£o de dados operacionais em conhecimento estratÃ©gico</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-orange-600 font-bold">âœ“</span>
                              <span>CriaÃ§Ã£o de modelos de anÃ¡lise para indicar prioridades e identificar padrÃµes</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-orange-600 font-bold">âœ“</span>
                              <span>ClassificaÃ§Ã£o de imagens para reconhecer acÃºmulo de resÃ­duos e alteraÃ§Ãµes urbanas</span>
                            </li>
                            <li className="flex gap-3">
                              <span className="text-orange-600 font-bold">âœ“</span>
                              <span>SequÃªncia lÃ³gica: organizar dados â†’ capacitar pessoas â†’ integrar sistemas â†’ automatizar â†’ aplicar IA</span>
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">ConvergÃªncia e Oportunidades</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Os quatro cursos convergem para uma mesma conclusÃ£o: a COMLURB tem a oportunidade de transformar sua grande capacidade operacional em uma gestÃ£o cada vez mais orientada por dados e preditiva, com capacidade de se antecipar aos fatos.
              </p>

              <p>
                A Companhia jÃ¡ possui conhecimento de territÃ³rio, presenÃ§a diÃ¡ria nas ruas, equipes distribuÃ­das pela cidade e grande volume de informaÃ§Ãµes produzidas em campo. O desafio Ã© organizar esse conhecimento em bases geogrÃ¡ficas integradas, confiÃ¡veis e atualizadas.
              </p>

              <p>
                A automaÃ§Ã£o no ArcGIS pode reduzir tarefas repetitivas. A inteligÃªncia artificial pode identificar padrÃµes e apoiar previsÃµes. A inteligÃªncia geogrÃ¡fica pode conectar diferentes Ã¡reas da Companhia em torno de uma mesma visÃ£o territorial. E a informaÃ§Ã£o geogrÃ¡fica estruturada pode transformar dados dispersos em decisÃµes mais rÃ¡pidas, transparentes e eficientes.
              </p>

              <p>
                A principal liÃ§Ã£o extraÃ­da do Congresso MundoGEO Ã© que tecnologia nÃ£o Ã© o fim. Tecnologia Ã© o meio. A finalidade Ã© melhorar a gestÃ£o pÃºblica, apoiar os trabalhadores, qualificar o planejamento e entregar melhores serviÃ§os Ã  cidade.
              </p>

              <p className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded">
                <span className="font-semibold text-foreground">Para a COMLURB, isso significa avanÃ§ar para uma operaÃ§Ã£o mais inteligente, integrada e preventiva, capaz de compreender melhor o territÃ³rio e responder com mais eficiÃªncia Ã s necessidades da populaÃ§Ã£o carioca.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
