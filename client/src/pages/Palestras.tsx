import { ArrowLeft, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Palestras() {
  const [, navigate] = useLocation();

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

      {/* Header Section with Full-Width Image */}
      <section className="w-full">
        <div className="w-full h-auto">
          <img
            src="assets/media/pasted_file_HN6pVF_image_8478aebe.png"
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
              Palestras Livres e PainÃ©is TÃ©cnicos do Congresso MundoGEO Connect 2026
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                AlÃ©m dos cursos tÃ©cnicos realizados pela equipe da COMLURB, a participaÃ§Ã£o no Congresso MundoGEO Connect 2026 possibilitou o acompanhamento de palestras e painÃ©is voltados Ã  aplicaÃ§Ã£o prÃ¡tica das geotecnologias na gestÃ£o pÃºblica.
              </p>

              <p>
                Essas apresentaÃ§Ãµes trouxeram experiÃªncias de diferentes cidades, instituiÃ§Ãµes e especialistas, demonstrando que a modernizaÃ§Ã£o da gestÃ£o urbana nÃ£o depende apenas da aquisiÃ§Ã£o de ferramentas tecnolÃ³gicas. O ponto central apresentado foi a necessidade de estruturar dados, integrar sistemas, capacitar pessoas, criar governanÃ§a e transformar a informaÃ§Ã£o territorial em inteligÃªncia para a tomada de decisÃ£o.
              </p>

              <p>
                A seguir, sÃ£o listadas as principais palestras livres e painÃ©is acompanhados, com resumo dos assuntos abordados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Palestras Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Palestras e PainÃ©is Acompanhados</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {palestras.map((palestra, index) => (
              <PalestraCard key={index} palestra={palestra} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-8 text-foreground">SÃ­ntese das Palestras e PainÃ©is</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Os temas apresentados convergiram para uma mesma conclusÃ£o: a cidade precisa ser compreendida por meio de dados territoriais confiÃ¡veis, integrados e atualizados. A inovaÃ§Ã£o nÃ£o estÃ¡ apenas no uso de drones, inteligÃªncia artificial, WebGIS, gÃªmeos digitais ou painÃ©is de controle. A inovaÃ§Ã£o estÃ¡ em transformar essas ferramentas em capacidade real de gestÃ£o.
              </p>

              <p>
                No caso especÃ­fico da COMLURB, a palestra sobre resÃ­duos sÃ³lidos merece destaque especial, pois dialoga diretamente com a missÃ£o institucional da Companhia. Ela demonstra que a limpeza urbana do futuro deve ser planejada com base em dados, integraÃ§Ã£o territorial, indicadores operacionais, economia circular, rastreabilidade e inteligÃªncia geogrÃ¡fica.
              </p>

              <p>
                A COMLURB possui uma vantagem estratÃ©gica: seus serviÃ§os acontecem diariamente em todo o territÃ³rio da cidade. Isso significa que a Companhia nÃ£o apenas executa polÃ­ticas pÃºblicas; ela tambÃ©m observa, registra e conhece a cidade em movimento. Quando essas informaÃ§Ãµes sÃ£o organizadas, integradas e analisadas, deixam de ser apenas dados operacionais e passam a formar uma base de inteligÃªncia urbana.
              </p>

              <p className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded">
                <span className="font-semibold text-foreground">Assim, o aprendizado central deste mÃ³dulo Ã© que a tecnologia deve servir Ã  gestÃ£o, e a gestÃ£o deve servir melhor ao cidadÃ£o.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
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

interface Palestra {
  numero: string;
  titulo: string;
  resumo: string;
  conteudo: string;
}

function PalestraCard({ palestra, index }: { palestra: Palestra; index: number }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const cores = ['bg-green-600', 'bg-blue-600', 'bg-purple-600', 'bg-orange-600', 'bg-red-600', 'bg-indigo-600', 'bg-cyan-600', 'bg-pink-600', 'bg-teal-600'];
  const corAtual = cores[index % cores.length];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="flex gap-6 p-8">
        <div 
          className={`${corAtual} text-white rounded-lg p-6 flex flex-col items-center justify-center min-w-32 cursor-pointer hover:opacity-90 transition`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="text-4xl font-bold">{palestra.numero}</div>
          <div className="text-xs text-center mt-2 font-semibold flex items-center gap-1">
            <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            Expandir
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-foreground">{palestra.titulo}</h3>
          <p className="text-muted-foreground leading-relaxed">{palestra.resumo}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="border-t border-border bg-slate-50 p-8">
          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {palestra.conteudo}
          </div>
        </div>
      )}
    </div>
  );
}

const palestras: Palestra[] = [
  {
    numero: "01",
    titulo: "O Paradoxo Brasileiro e a Hierarquia de AdoÃ§Ã£o TecnolÃ³gica Urbana",
    resumo: "AnÃ¡lise comparativa sobre o estÃ¡gio de maturidade das cidades brasileiras em relaÃ§Ã£o Ã  adoÃ§Ã£o de tecnologias urbanas, demonstrando uma inversÃ£o na ordem tradicional de adoÃ§Ã£o tecnolÃ³gica.",
    conteudo: `A palestra apresentou uma anÃ¡lise comparativa sobre o estÃ¡gio de maturidade das cidades brasileiras em relaÃ§Ã£o Ã  adoÃ§Ã£o de tecnologias urbanas, como Dados Abertos, WebGIS, Cadastro Territorial MultifinalitÃ¡rio, Infraestrutura de Dados Espaciais, BIM, CIM, GÃªmeos Digitais Urbanos e Citiverse.

O palestrante demonstrou que existe, no Brasil, uma inversÃ£o na ordem tradicional de adoÃ§Ã£o tecnolÃ³gica. Enquanto cidades consideradas referÃªncia internacional tendem a consolidar primeiro dados abertos e infraestrutura de dados para depois avanÃ§ar em WebGIS, BIM, CIM e gÃªmeos digitais, muitas cidades brasileiras desenvolveram plataformas de visualizaÃ§Ã£o antes de estruturarem plenamente suas bases de dados.

Essa inversÃ£o foi chamada de "paradoxo brasileiro". A anÃ¡lise indicou que o Brasil nÃ£o estÃ¡ apenas atrasado em relaÃ§Ã£o Ã s cidades mais avanÃ§adas do mundo; em muitos casos, estÃ¡ seguindo uma trajetÃ³ria diferente, com forte desenvolvimento de visualizaÃ§Ã£o, mas ainda com fragilidades na consolidaÃ§Ã£o da infraestrutura de dados.

A palestra apresentou exemplos de cidades de referÃªncia, como Singapura, Nova York e SÃ£o Paulo. Singapura foi destacada pelo alto nÃ­vel de maturidade em dados abertos, APIs, integraÃ§Ã£o institucional e uso de informaÃ§Ãµes para polÃ­ticas urbanas. Nova York foi apresentada como referÃªncia em dados abertos e transparÃªncia, com milhares de bases pÃºblicas e forte cultura de disponibilizaÃ§Ã£o de informaÃ§Ãµes. SÃ£o Paulo foi mencionada como referÃªncia brasileira em WebGIS, especialmente por meio do GeoSampa, que reÃºne centenas de camadas e se tornou uma plataforma importante para outras capitais.

A principal conclusÃ£o foi que as cidades brasileiras precisam consolidar suas bases de dados antes de avanÃ§ar para tecnologias mais sofisticadas. O investimento em BIM, CIM, gÃªmeos digitais ou Citiverse deve estar apoiado em dados confiÃ¡veis, integrados e atualizados.`
  },
  {
    numero: "02",
    titulo: "Painel: Consulta a Especialistas Brasileiros sobre GeoBIM, GÃªmeos Digitais e CIM",
    resumo: "Consulta a especialistas brasileiros utilizando metodologia Delphi para avaliar os impactos futuros da incorporaÃ§Ã£o de novas tecnologias de anÃ¡lise espacial no planejamento urbano.",
    conteudo: `Outro bloco apresentado tratou de uma consulta realizada a especialistas brasileiros, utilizando metodologia inspirada no mÃ©todo Delphi. A dinÃ¢mica envolveu especialistas de diferentes Ã¡reas â€” universo acadÃªmico, tecnolÃ³gico e de gestÃ£o pÃºblica â€” para avaliar os impactos futuros da incorporaÃ§Ã£o de novas tecnologias de anÃ¡lise espacial no planejamento urbano.

O painel buscou compreender quais seriam os principais impactos, nos prÃ³ximos cinco a dez anos, da adoÃ§Ã£o de tecnologias como GeoBIM, GÃªmeos Digitais e CIM. Entre os impactos mais apontados apareceram a melhoria da eficiÃªncia processual, a governanÃ§a e integraÃ§Ã£o de dados, a inclusÃ£o e o acesso tecnolÃ³gico, os desafios de capacitaÃ§Ã£o e recursos humanos, alÃ©m da sustentabilidade e dos impactos ambientais.

TambÃ©m foi discutida a possibilidade de desenvolver sinergia entre novas tecnologias e os instrumentos legais que orientam as polÃ­ticas pÃºblicas urbanas. Nesse ponto, ganharam destaque a integraÃ§Ã£o e interoperabilidade, a otimizaÃ§Ã£o de processos, a gestÃ£o pÃºblica, a participaÃ§Ã£o social, a inovaÃ§Ã£o institucional e a qualidade ambiental e urbana.

O painel reforÃ§ou que o avanÃ§o tecnolÃ³gico nÃ£o se limita Ã  compra de softwares. Ele exige mudanÃ§a institucional, reorganizaÃ§Ã£o de processos, integraÃ§Ã£o entre Ã³rgÃ£os, padronizaÃ§Ã£o de dados e capacitaÃ§Ã£o permanente das equipes.

A mensagem mais relevante foi que as tecnologias emergentes podem apoiar a gestÃ£o urbana, mas somente produzirÃ£o resultados se estiverem conectadas Ã  realidade administrativa, legal e operacional dos municÃ­pios.`
  },
  {
    numero: "03",
    titulo: "Cadastro Territorial MultifinalitÃ¡rio de Belo Horizonte â€” ConcepÃ§Ã£o e UtilizaÃ§Ã£o",
    resumo: "ExperiÃªncia de Belo Horizonte na construÃ§Ã£o e utilizaÃ§Ã£o do Cadastro Territorial MultifinalitÃ¡rio, demonstrando uma trajetÃ³ria de trÃªs dÃ©cadas de uso de geotecnologias na gestÃ£o municipal.",
    conteudo: `A palestra sobre Belo Horizonte apresentou a experiÃªncia da Prefeitura de Belo Horizonte na construÃ§Ã£o e utilizaÃ§Ã£o do Cadastro Territorial MultifinalitÃ¡rio. O conteÃºdo mostrou que a cidade desenvolveu, ao longo de mais de trÃªs dÃ©cadas, uma trajetÃ³ria de uso de geotecnologias aplicada Ã  gestÃ£o municipal.

A apresentaÃ§Ã£o explicou que Belo Horizonte avanÃ§ou em fases: primeiro com a consolidaÃ§Ã£o do uso de SIG, depois com a disseminaÃ§Ã£o do SIG desktop, em seguida com a estruturaÃ§Ã£o de uma base corporativa de dados geogrÃ¡ficos e, posteriormente, com a criaÃ§Ã£o de uma Infraestrutura de Dados Espaciais municipal.

Foi apresentada a importÃ¢ncia de uma base geogrÃ¡fica Ãºnica como ativo estratÃ©gico para a gestÃ£o pÃºblica. Essa base permite que diferentes Ã³rgÃ£os municipais trabalhem sobre uma mesma referÃªncia territorial, reduzindo duplicidade de informaÃ§Ãµes, melhorando a seguranÃ§a dos dados, diminuindo divergÃªncias e aumentando a confiabilidade das anÃ¡lises.

A palestra tambÃ©m abordou a diferenÃ§a entre vÃ¡rias dimensÃµes da cidade: a cidade aprovada, baseada em plantas de parcelamento do solo; a cidade real, baseada na ocupaÃ§Ã£o de fato; a cidade cartorial, baseada em matrÃ­culas e registros de imÃ³veis; e a cidade tributÃ¡ria, baseada na existÃªncia de inscriÃ§Ã£o municipal. Essa distinÃ§Ã£o Ã© fundamental para compreender que o territÃ³rio administrativo nem sempre coincide perfeitamente com o territÃ³rio real ocupado pela populaÃ§Ã£o.

TambÃ©m foram apresentadas aplicaÃ§Ãµes prÃ¡ticas do sistema, como integraÃ§Ã£o com cartÃ³rios, regulaÃ§Ã£o urbana, cadastro de plantas de parcelamento e lotes aprovados, sistemas tributÃ¡rios, planejamento urbano, habitaÃ§Ã£o, obras, patrimÃ´nio imobiliÃ¡rio e apoio a eventos, como o Carnaval.

A conclusÃ£o da palestra foi clara: o maior desafio nÃ£o Ã© tecnolÃ³gico, mas institucional. O que garante o sucesso de uma base geogrÃ¡fica Ãºnica Ã© a integraÃ§Ã£o de pessoas, processos e dados em torno de uma visÃ£o Ãºnica do territÃ³rio municipal.`
  },
  {
    numero: "04",
    titulo: "InteligÃªncia GeogrÃ¡fica e a GestÃ£o Municipal",
    resumo: "Palestra que demonstra como a inteligÃªncia geogrÃ¡fica emerge quando dados comeÃ§am a se conectar, transformando o cadastro em infraestrutura estratÃ©gica de governo.",
    conteudo: `A palestra sobre inteligÃªncia geogrÃ¡fica na gestÃ£o municipal partiu de uma ideia simples e poderosa: toda decisÃ£o pÃºblica acontece em algum lugar.

A apresentaÃ§Ã£o mostrou que, quando os dados comeÃ§am a se conectar, surge a inteligÃªncia geogrÃ¡fica.

Foi destacada a mudanÃ§a de entendimento sobre o cadastro. Historicamente, o cadastro era visto principalmente como instrumento de arrecadaÃ§Ã£o. A palestra mostrou que esse conceito Ã© limitado. O cadastro deve ser entendido como infraestrutura estratÃ©gica de governo, capaz de apoiar habitaÃ§Ã£o, mobilidade urbana, regularizaÃ§Ã£o fundiÃ¡ria, defesa civil, meio ambiente, planejamento territorial, tributaÃ§Ã£o e integraÃ§Ã£o de dados.

A apresentaÃ§Ã£o tambÃ©m trouxe a experiÃªncia de Fortaleza, mostrando a evoluÃ§Ã£o da informaÃ§Ã£o territorial atÃ© a inteligÃªncia geogrÃ¡fica. A trajetÃ³ria foi organizada em etapas: conhecer, mapear, integrar, conectar e decidir. Essa sequÃªncia demonstrou que a inteligÃªncia geogrÃ¡fica nÃ£o surge de forma imediata. Ela Ã© resultado de um processo contÃ­nuo de construÃ§Ã£o institucional.

O bloco reforÃ§ou que compreender o territÃ³rio nÃ£o garante todas as respostas, mas torna possÃ­vel construir decisÃµes melhores. A inteligÃªncia geogrÃ¡fica nÃ£o oferece respostas prontas; ela amplia a capacidade do municÃ­pio de compreender problemas, formular melhores perguntas e tomar decisÃµes mais consistentes.`
  },
  {
    numero: "05",
    titulo: "Ganhos e Desafios na ImplementaÃ§Ã£o de Projetos de InteligÃªncia GeogrÃ¡fica e GÃªmeos Digitais",
    resumo: "ApresentaÃ§Ã£o sobre implementaÃ§Ã£o de projetos de inteligÃªncia geogrÃ¡fica e gÃªmeos digitais em municÃ­pios, destacando ganhos operacionais e desafios de implementaÃ§Ã£o.",
    conteudo: `A palestra conduzida por representante da Topocart abordou a implementaÃ§Ã£o de projetos de inteligÃªncia geogrÃ¡fica e gÃªmeos digitais em municÃ­pios. O conteÃºdo apresentou experiÃªncias em mapeamentos cartogrÃ¡ficos multifinalitÃ¡rios, cadastro tributÃ¡rio, plantas genÃ©ricas de valores, sistemas de informaÃ§Ã£o geogrÃ¡fica e aplicaÃ§Ãµes em diferentes municÃ­pios.

Foi explicado o conceito de georreferenciamento cadastral territorial, entendido como a definiÃ§Ã£o da forma, dimensÃ£o e localizaÃ§Ã£o de uma parcela territorial, com precisÃ£o posicional e referÃªncia ao Sistema GeodÃ©sico Brasileiro. Esse ponto foi apresentado como base fundamental para qualquer projeto confiÃ¡vel de cadastro e inteligÃªncia territorial.

A palestra mostrou que a construÃ§Ã£o de inteligÃªncia geogrÃ¡fica depende de uma cartografia confiÃ¡vel e de um cadastro estruturado. Sem essa base, os projetos mais avanÃ§ados perdem consistÃªncia. TambÃ©m foram apresentados recursos tecnolÃ³gicos como drones, aeronaves, sensores, cÃ¢meras, imageamento, modelagem tridimensional, levantamento de logradouros, inventÃ¡rio urbano e leitura de elementos do territÃ³rio.

Entre os desafios destacados estavam a necessidade de vender a ideia dentro da organizaÃ§Ã£o, a existÃªncia de cartografia confiÃ¡vel, a escolha adequada das plataformas tecnolÃ³gicas, a capacitaÃ§Ã£o de pessoal e a evoluÃ§Ã£o gradual dos gÃªmeos digitais.

Entre os ganhos apresentados, destacaram-se respostas mais rÃ¡pidas Ã s necessidades da gestÃ£o, maior transparÃªncia nos processos das secretarias, processos melhor mapeados, rapidez no atendimento ao cidadÃ£o e maior conhecimento da cidade em Ã¡reas como tributaÃ§Ã£o, planejamento, obras e legislaÃ§Ã£o.

A palestra tambÃ©m apresentou o gÃªmeo digital como uma rÃ©plica virtual de objeto, processo ou sistema fÃ­sico, com possibilidade de sincronizaÃ§Ã£o com o mundo real e integraÃ§Ã£o com sensores, IoT e inteligÃªncia artificial para coleta e anÃ¡lise de dados.

A principal mensagem foi que gÃªmeos digitais nÃ£o devem ser tratados como produto isolado, mas como resultado de uma evoluÃ§Ã£o institucional baseada em cartografia, cadastro, integraÃ§Ã£o, dados confiÃ¡veis e equipes capacitadas.`
  },
  {
    numero: "06",
    titulo: "InformaÃ§Ã£o Territorial, FragmentaÃ§Ã£o Cadastral e InteligÃªncia GeogrÃ¡fica",
    resumo: "DiscussÃ£o sobre os desafios de fragmentaÃ§Ã£o cadastral territorial e como a inteligÃªncia geogrÃ¡fica permite transformar dados dispersos em conhecimento aplicado.",
    conteudo: `Outro bloco abordou os desafios enfrentados pelos municÃ­pios na organizaÃ§Ã£o de cadastros, mapas, processos, bases de dados e sistemas corporativos. A apresentaÃ§Ã£o mostrou a existÃªncia de Ã¡reas cadastradas e Ã¡reas nÃ£o cadastradas, evidenciando como a fragmentaÃ§Ã£o cadastral territorial dificulta o planejamento, a gestÃ£o e a oferta de polÃ­ticas pÃºblicas.

O conteÃºdo destacou que a cidade real nem sempre estÃ¡ completamente representada nas bases oficiais. Essa lacuna compromete a capacidade do poder pÃºblico de compreender o territÃ³rio, planejar serviÃ§os, organizar recursos e responder Ã s necessidades da populaÃ§Ã£o.

A apresentaÃ§Ã£o reforÃ§ou que a inteligÃªncia geogrÃ¡fica permite transformar dados dispersos em conhecimento aplicado. Para isso, Ã© necessÃ¡rio conectar informaÃ§Ãµes ambientais, tributÃ¡rias, cartogrÃ¡ficas, cadastrais, urbanÃ­sticas, imobiliÃ¡rias e de infraestrutura.

TambÃ©m foi destacada a ideia de que a tecnologia Ã© meio, e a gestÃ£o Ã© finalidade. Drones, inteligÃªncia artificial, GeoBIM, gÃªmeos digitais e interoperabilidade sÃ£o recursos importantes, mas sÃ³ geram valor quando estÃ£o a serviÃ§o de uma gestÃ£o pÃºblica mais eficiente, integrada e transparente.

A palestra concluiu que os desafios continuam. Manter a cidade atualizada, garantir qualidade da informaÃ§Ã£o, enfrentar barreiras institucionais e transformar projetos em polÃ­ticas permanentes sÃ£o condiÃ§Ãµes essenciais para consolidar a inteligÃªncia geogrÃ¡fica como instrumento de governo.`
  },
  {
    numero: "07",
    titulo: "ExperiÃªncias de Uso de Geotecnologias em AplicaÃ§Ãµes Municipais",
    resumo: "ApresentaÃ§Ã£o de aplicaÃ§Ãµes prÃ¡ticas de geotecnologias voltadas ao cotidiano da gestÃ£o municipal, desde planejamento operacional atÃ© limpeza urbana.",
    conteudo: `TambÃ©m foi apresentado um conjunto de aplicaÃ§Ãµes prÃ¡ticas de geotecnologias voltadas ao cotidiano da gestÃ£o municipal. Os slides demonstraram usos relacionados a planejamento operacional, seguranÃ§a, trÃ¡fego, mobilidade, limpeza urbana, rotas de blocos de Carnaval, infraestrutura urbana, zoneamento, cadastro imobiliÃ¡rio e apoio Ã  arrecadaÃ§Ã£o.

Um dos exemplos apresentados envolveu o planejamento de eventos, com destaque para o Carnaval, contemplando planejamento de seguranÃ§a, rotas de blocos, planejamento de trÃ¡fego e mobilidade e planejamento de limpeza das ruas. Esse exemplo demonstrou como o uso de mapas e dados territoriais permite organizar melhor operaÃ§Ãµes complexas que envolvem grande pÃºblico, deslocamentos, interdiÃ§Ãµes, resÃ­duos e necessidade de resposta rÃ¡pida.

TambÃ©m foram demonstradas aplicaÃ§Ãµes de integraÃ§Ã£o com sistemas tributÃ¡rios, associando lote cadastral, zona homogÃªnea, infraestrutura urbana, zoneamento e frequÃªncia da coleta de lixo. Esse tipo de integraÃ§Ã£o mostra como a informaÃ§Ã£o territorial pode apoiar tanto a gestÃ£o fiscal quanto o planejamento de serviÃ§os urbanos.

A relevÃ¢ncia dessa palestra estÃ¡ em mostrar que a geotecnologia nÃ£o Ã© um tema abstrato. Ela tem aplicaÃ§Ã£o direta em problemas concretos da administraÃ§Ã£o municipal, desde a arrecadaÃ§Ã£o atÃ© a limpeza urbana, desde a mobilidade atÃ© a organizaÃ§Ã£o de grandes eventos.`
  },
  {
    numero: "08",
    titulo: "InteligÃªncia Artificial Aplicada Ã  InformaÃ§Ã£o GeogrÃ¡fica e Ã s Geotecnologias",
    resumo: "ApresentaÃ§Ã£o de exemplos de inteligÃªncia artificial aplicada ao mapeamento de Ã¡reas de risco, classificaÃ§Ã£o de Ã¡reas Ãºmidas e anÃ¡lise de imagens territoriais.",
    conteudo: `Embora a inteligÃªncia artificial tambÃ©m tenha sido tratada nos cursos tÃ©cnicos, houve palestras e apresentaÃ§Ãµes complementares sobre o contexto das geotecnologias e o uso de modelos de IA em anÃ¡lises territoriais.

Os slides mostraram exemplos de pesquisas com inteligÃªncia artificial aplicadas ao mapeamento de Ã¡reas de risco, classificaÃ§Ã£o de Ã¡reas Ãºmidas, anÃ¡lise de imagens e identificaÃ§Ã£o de padrÃµes ambientais e territoriais. Foram citados estudos envolvendo universidades e centros de pesquisa, com uso de machine learning para mapear Ã¡reas suscetÃ­veis a deslizamentos e apoiar a gestÃ£o de riscos.

A palestra tambÃ©m apresentou uma introduÃ§Ã£o sobre inteligÃªncia artificial, machine learning, deep learning, redes neurais e inteligÃªncia artificial generativa. A estrutura demonstrada indicou que os modelos dependem de dados de entrada, camadas de processamento e resultados de saÃ­da.

A principal ideia apresentada foi que a inteligÃªncia artificial Ã© fortalecida pela quantidade e qualidade dos dados. Quanto mais estruturados e confiÃ¡veis forem os dados territoriais, maior serÃ¡ a capacidade dos modelos de identificar padrÃµes e apoiar decisÃµes.

Esse conteÃºdo reforÃ§a que a IA deve ser compreendida como instrumento de apoio Ã  anÃ¡lise, e nÃ£o como substituta do conhecimento tÃ©cnico. A inteligÃªncia artificial pode acelerar diagnÃ³sticos, reconhecer padrÃµes e ampliar a capacidade de anÃ¡lise, mas depende de dados consistentes, objetivos claros e interpretaÃ§Ã£o humana qualificada.`
  },
  {
    numero: "09",
    titulo: "InovaÃ§Ã£o na GestÃ£o de ResÃ­duos SÃ³lidos â€” Modelos, Tecnologias e Caminhos para ImplementaÃ§Ã£o",
    resumo: "Palestra sobre modernizaÃ§Ã£o da gestÃ£o de resÃ­duos sÃ³lidos urbanos, abordando modelos operacionais, tecnologias e regulaÃ§Ã£o pÃºblica para a limpeza urbana.",
    conteudo: `A palestra abordou um tema diretamente relacionado Ã  atividade-fim da COMLURB: a gestÃ£o de resÃ­duos sÃ³lidos urbanos. O debate tratou da necessidade de modernizar a forma como os municÃ­pios planejam, executam, monitoram e avaliam os serviÃ§os de limpeza urbana, coleta, tratamento, destinaÃ§Ã£o final e integraÃ§Ã£o com cadeias associadas Ã  economia circular.

O conteÃºdo discutiu a inovaÃ§Ã£o na gestÃ£o de resÃ­duos sob trÃªs dimensÃµes principais: modelos operacionais, uso de tecnologias e regulaÃ§Ã£o pÃºblica. A palestra destacou que os municÃ­pios precisam superar uma visÃ£o limitada da coleta como simples retirada de resÃ­duos das ruas. A gestÃ£o moderna exige planejamento territorial, rastreabilidade, indicadores, integraÃ§Ã£o de dados, controle operacional e alinhamento com as diretrizes da PolÃ­tica Nacional de ResÃ­duos SÃ³lidos e do Plano Nacional de ResÃ­duos SÃ³lidos.

TambÃ©m foi enfatizada a importÃ¢ncia de tecnologias para otimizar rotas, acompanhar a execuÃ§Ã£o dos serviÃ§os, integrar informaÃ§Ãµes de campo, melhorar a destinaÃ§Ã£o final e apoiar decisÃµes sobre reciclagem, logÃ­stica reversa e economia circular.

Essa palestra foi particularmente relevante para a COMLURB, pois demonstrou que a modernizaÃ§Ã£o da limpeza urbana passa necessariamente pela integraÃ§Ã£o de dados territoriais, planejamento inteligente de rotas, acompanhamento em tempo real e alinhamento com polÃ­ticas pÃºblicas de sustentabilidade.`
  },
  {
    numero: "10",
    titulo: "TransformaÃ§Ã£o da MÃ¡quina PÃºblica â€” Como redesenhar processos, estruturas e cultura para viabilizar cidades inteligentes",
    resumo: "Palestra sobre transformaÃ§Ã£o institucional necessÃ¡ria para que a tecnologia produza resultados concretos na gestÃ£o pÃºblica, abordando mudanÃ§as em processos, estrutura organizacional e cultura.",
    conteudo: `Essa palestra tratou da transformaÃ§Ã£o institucional necessÃ¡ria para que a tecnologia produza resultados concretos na gestÃ£o pÃºblica. O eixo central foi a ideia de que cidades inteligentes nÃ£o nascem apenas da implantaÃ§Ã£o de sistemas, painÃ©is, aplicativos ou sensores. Elas dependem de mudanÃ§as nos processos administrativos, na estrutura organizacional e na cultura de trabalho dos Ã³rgÃ£os pÃºblicos.

O conteÃºdo reforÃ§ou que a tecnologia, isoladamente, nÃ£o resolve problemas estruturais. Para que uma cidade avance, Ã© necessÃ¡rio redesenhar fluxos internos, eliminar duplicidades, integrar Ã¡reas, definir responsabilidades, estabelecer governanÃ§a de dados e criar rotinas de acompanhamento. A inovaÃ§Ã£o precisa estar conectada Ã  gestÃ£o real, aos servidores, aos processos de trabalho e Ã s necessidades da populaÃ§Ã£o.

Para a COMLURB, essa reflexÃ£o Ã© essencial. A Companhia possui grande volume de informaÃ§Ãµes operacionais, equipes em campo, serviÃ§os distribuÃ­dos por todo o territÃ³rio e diversas interfaces com outros Ã³rgÃ£os municipais. A transformaÃ§Ã£o digital sÃ³ terÃ¡ impacto se estiver acompanhada de revisÃ£o de processos, integraÃ§Ã£o entre Ã¡reas, qualificaÃ§Ã£o das bases de dados, capacitaÃ§Ã£o de equipes e construÃ§Ã£o de uma cultura de decisÃ£o baseada em evidÃªncias.

Essa palestra reforÃ§a que a modernizaÃ§Ã£o da COMLURB nÃ£o deve ser entendida apenas como adoÃ§Ã£o de novas ferramentas, mas como uma mudanÃ§a progressiva na forma de planejar, executar, medir e melhorar os serviÃ§os urbanos.`
  },
  {
    numero: "11",
    titulo: "Iniciativas para otimizar a produÃ§Ã£o de GeoinformaÃ§Ã£o com uso de IA no ServiÃ§o GeogrÃ¡fico",
    resumo: "Palestra sobre uso de inteligÃªncia artificial para ampliar a produÃ§Ã£o, anÃ¡lise e qualificaÃ§Ã£o da geoinformaÃ§Ã£o e dados espaciais.",
    conteudo: `A palestra apresentou iniciativas voltadas ao uso de inteligÃªncia artificial para ampliar a produÃ§Ã£o, anÃ¡lise e qualificaÃ§Ã£o da geoinformaÃ§Ã£o. O tema dialoga diretamente com os desafios atuais dos Ã³rgÃ£os pÃºblicos, que precisam lidar com grande volume de dados espaciais, imagens, mapas, bases cadastrais e informaÃ§Ãµes territoriais em constante atualizaÃ§Ã£o.

O conteÃºdo demonstrou que a inteligÃªncia artificial pode apoiar a identificaÃ§Ã£o de padrÃµes, a classificaÃ§Ã£o de imagens, a interpretaÃ§Ã£o de dados espaciais, a detecÃ§Ã£o de mudanÃ§as no territÃ³rio e a produÃ§Ã£o mais rÃ¡pida de informaÃ§Ãµes geogrÃ¡ficas qualificadas.

A palestra tambÃ©m reforÃ§ou que a IA depende de bases organizadas, dados confiÃ¡veis e objetivos bem definidos. Sem uma boa estrutura de dados, os modelos de inteligÃªncia artificial perdem precisÃ£o e podem gerar resultados pouco Ãºteis para a gestÃ£o pÃºblica.

Para a COMLURB, esse conhecimento pode ser aplicado em temas como identificaÃ§Ã£o de pontos de descarte irregular, monitoramento de Ã¡reas crÃ­ticas, anÃ¡lise de imagens de drones, apoio Ã  fiscalizaÃ§Ã£o, leitura territorial de grandes eventos, acompanhamento de Ã¡reas verdes, suporte Ã  poda urbana e melhoria da inteligÃªncia operacional da limpeza urbana.

A principal contribuiÃ§Ã£o da palestra foi mostrar que a inteligÃªncia artificial pode acelerar a produÃ§Ã£o de geoinformaÃ§Ã£o, mas seu valor depende da qualidade da base territorial e da capacidade institucional de transformar anÃ¡lise em decisÃ£o.`
  }
];
