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
          </div>
        </div>
      </section>

      {/* Palestras Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Palestras e Painéis Acompanhados</h2>
          
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
            <h2 className="text-3xl font-bold mb-8 text-foreground">Síntese das Palestras e Painéis</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                As palestras e painéis apresentados no Congresso MundoGEO Connect 2026 reforçaram uma mensagem central: a transformação digital das cidades não é apenas sobre tecnologia, mas sobre integração de dados, pessoas e processos.
              </p>

              <p>
                Para a COMLURB, as principais lições extraídas foram: (1) a necessidade de consolidar bases de dados confiáveis antes de avançar para tecnologias mais sofisticadas; (2) a importância de integração institucional e interoperabilidade entre sistemas; (3) a capacitação permanente de equipes como fator crítico de sucesso; e (4) o uso de geotecnologias como instrumento de apoio à gestão operacional, planejamento e tomada de decisão.
              </p>

              <p>
                O exemplo de Belo Horizonte com seu Cadastro Territorial Multifinalitário, a experiência de Fortaleza com inteligência geográfica, e as aplicações práticas apresentadas demonstraram que a gestão inteligente de cidades é possível quando há visão estratégica, investimento em infraestrutura de dados e comprometimento institucional.
              </p>

              <p className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded">
                <span className="font-semibold text-foreground">A COMLURB possui oportunidade única de aplicar esses conhecimentos em sua operação de limpeza urbana, transformando dados dispersos em inteligência para rotas mais eficientes, alocação melhor de recursos, previsibilidade de demandas e resposta mais rápida às necessidades da população carioca.</span>
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
    titulo: "O Paradoxo Brasileiro e a Hierarquia de Adoção Tecnológica Urbana",
    resumo: "Análise comparativa sobre o estágio de maturidade das cidades brasileiras em relação à adoção de tecnologias urbanas, demonstrando uma inversão na ordem tradicional de adoção tecnológica.",
    conteudo: `A palestra apresentou uma análise comparativa sobre o estágio de maturidade das cidades brasileiras em relação à adoção de tecnologias urbanas, como Dados Abertos, WebGIS, Cadastro Territorial Multifinalitário, Infraestrutura de Dados Espaciais, BIM, CIM, Gêmeos Digitais Urbanos e Citiverse.

O palestrante demonstrou que existe, no Brasil, uma inversão na ordem tradicional de adoção tecnológica. Enquanto cidades consideradas referência internacional tendem a consolidar primeiro dados abertos e infraestrutura de dados para depois avançar em WebGIS, BIM, CIM e gêmeos digitais, muitas cidades brasileiras desenvolveram plataformas de visualização antes de estruturarem plenamente suas bases de dados.

Essa inversão foi chamada de "paradoxo brasileiro". A análise indicou que o Brasil não está apenas atrasado em relação às cidades mais avançadas do mundo; em muitos casos, está seguindo uma trajetória diferente, com forte desenvolvimento de visualização, mas ainda com fragilidades na consolidação da infraestrutura de dados.

A palestra apresentou exemplos de cidades de referência, como Singapura, Nova York e São Paulo. Singapura foi destacada pelo alto nível de maturidade em dados abertos, APIs, integração institucional e uso de informações para políticas urbanas. Nova York foi apresentada como referência em dados abertos e transparência, com milhares de bases públicas e forte cultura de disponibilização de informações. São Paulo foi mencionada como referência brasileira em WebGIS, especialmente por meio do GeoSampa, que reúne centenas de camadas e se tornou uma plataforma importante para outras capitais.

A principal conclusão foi que as cidades brasileiras precisam consolidar suas bases de dados antes de avançar para tecnologias mais sofisticadas. O investimento em BIM, CIM, gêmeos digitais ou Citiverse deve estar apoiado em dados confiáveis, integrados e atualizados.`
  },
  {
    numero: "02",
    titulo: "Painel: Consulta a Especialistas Brasileiros sobre GeoBIM, Gêmeos Digitais e CIM",
    resumo: "Consulta a especialistas brasileiros utilizando metodologia Delphi para avaliar os impactos futuros da incorporação de novas tecnologias de análise espacial no planejamento urbano.",
    conteudo: `Outro bloco apresentado tratou de uma consulta realizada a especialistas brasileiros, utilizando metodologia inspirada no método Delphi. A dinâmica envolveu especialistas de diferentes áreas — universo acadêmico, tecnológico e de gestão pública — para avaliar os impactos futuros da incorporação de novas tecnologias de análise espacial no planejamento urbano.

O painel buscou compreender quais seriam os principais impactos, nos próximos cinco a dez anos, da adoção de tecnologias como GeoBIM, Gêmeos Digitais e CIM. Entre os impactos mais apontados apareceram a melhoria da eficiência processual, a governança e integração de dados, a inclusão e o acesso tecnológico, os desafios de capacitação e recursos humanos, além da sustentabilidade e dos impactos ambientais.

Também foi discutida a possibilidade de desenvolver sinergia entre novas tecnologias e os instrumentos legais que orientam as políticas públicas urbanas. Nesse ponto, ganharam destaque a integração e interoperabilidade, a otimização de processos, a gestão pública, a participação social, a inovação institucional e a qualidade ambiental e urbana.

O painel reforçou que o avanço tecnológico não se limita à compra de softwares. Ele exige mudança institucional, reorganização de processos, integração entre órgãos, padronização de dados e capacitação permanente das equipes.

A mensagem mais relevante foi que as tecnologias emergentes podem apoiar a gestão urbana, mas somente produzirão resultados se estiverem conectadas à realidade administrativa, legal e operacional dos municípios.`
  },
  {
    numero: "03",
    titulo: "Cadastro Territorial Multifinalitário de Belo Horizonte — Concepção e Utilização",
    resumo: "Experiência de Belo Horizonte na construção e utilização do Cadastro Territorial Multifinalitário, demonstrando uma trajetória de três décadas de uso de geotecnologias na gestão municipal.",
    conteudo: `A palestra sobre Belo Horizonte apresentou a experiência da Prefeitura de Belo Horizonte na construção e utilização do Cadastro Territorial Multifinalitário. O conteúdo mostrou que a cidade desenvolveu, ao longo de mais de três décadas, uma trajetória de uso de geotecnologias aplicada à gestão municipal.

A apresentação explicou que Belo Horizonte avançou em fases: primeiro com a consolidação do uso de SIG, depois com a disseminação do SIG desktop, em seguida com a estruturação de uma base corporativa de dados geográficos e, posteriormente, com a criação de uma Infraestrutura de Dados Espaciais municipal.

Foi apresentada a importância de uma base geográfica única como ativo estratégico para a gestão pública. Essa base permite que diferentes órgãos municipais trabalhem sobre uma mesma referência territorial, reduzindo duplicidade de informações, melhorando a segurança dos dados, diminuindo divergências e aumentando a confiabilidade das análises.

A palestra também abordou a diferença entre várias dimensões da cidade: a cidade aprovada, baseada em plantas de parcelamento do solo; a cidade real, baseada na ocupação de fato; a cidade cartorial, baseada em matrículas e registros de imóveis; e a cidade tributária, baseada na existência de inscrição municipal. Essa distinção é fundamental para compreender que o território administrativo nem sempre coincide perfeitamente com o território real ocupado pela população.

Também foram apresentadas aplicações práticas do sistema, como integração com cartórios, regulação urbana, cadastro de plantas de parcelamento e lotes aprovados, sistemas tributários, planejamento urbano, habitação, obras, patrimônio imobiliário e apoio a eventos, como o Carnaval.

A conclusão da palestra foi clara: o maior desafio não é tecnológico, mas institucional. O que garante o sucesso de uma base geográfica única é a integração de pessoas, processos e dados em torno de uma visão única do território municipal.`
  },
  {
    numero: "04",
    titulo: "Inteligência Geográfica e a Gestão Municipal",
    resumo: "Palestra que demonstra como a inteligência geográfica emerge quando dados começam a se conectar, transformando o cadastro em infraestrutura estratégica de governo.",
    conteudo: `A palestra sobre inteligência geográfica na gestão municipal partiu de uma ideia simples e poderosa: toda decisão pública acontece em algum lugar.

A apresentação mostrou que, quando os dados começam a se conectar, surge a inteligência geográfica.

Foi destacada a mudança de entendimento sobre o cadastro. Historicamente, o cadastro era visto principalmente como instrumento de arrecadação. A palestra mostrou que esse conceito é limitado. O cadastro deve ser entendido como infraestrutura estratégica de governo, capaz de apoiar habitação, mobilidade urbana, regularização fundiária, defesa civil, meio ambiente, planejamento territorial, tributação e integração de dados.

A apresentação também trouxe a experiência de Fortaleza, mostrando a evolução da informação territorial até a inteligência geográfica. A trajetória foi organizada em etapas: conhecer, mapear, integrar, conectar e decidir. Essa sequência demonstrou que a inteligência geográfica não surge de forma imediata. Ela é resultado de um processo contínuo de construção institucional.

O bloco reforçou que compreender o território não garante todas as respostas, mas torna possível construir decisões melhores. A inteligência geográfica não oferece respostas prontas; ela amplia a capacidade do município de compreender problemas, formular melhores perguntas e tomar decisões mais consistentes.`
  },
  {
    numero: "05",
    titulo: "Ganhos e Desafios na Implementação de Projetos de Inteligência Geográfica e Gêmeos Digitais",
    resumo: "Apresentação sobre implementação de projetos de inteligência geográfica e gêmeos digitais em municípios, destacando ganhos operacionais e desafios de implementação.",
    conteudo: `A palestra conduzida por representante da Topocart abordou a implementação de projetos de inteligência geográfica e gêmeos digitais em municípios. O conteúdo apresentou experiências em mapeamentos cartográficos multifinalitários, cadastro tributário, plantas genéricas de valores, sistemas de informação geográfica e aplicações em diferentes municípios.

Foi explicado o conceito de georreferenciamento cadastral territorial, entendido como a definição da forma, dimensão e localização de uma parcela territorial, com precisão posicional e referência ao Sistema Geodésico Brasileiro. Esse ponto foi apresentado como base fundamental para qualquer projeto confiável de cadastro e inteligência territorial.

A palestra mostrou que a construção de inteligência geográfica depende de uma cartografia confiável e de um cadastro estruturado. Sem essa base, os projetos mais avançados perdem consistência. Também foram apresentados recursos tecnológicos como drones, aeronaves, sensores, câmeras, imageamento, modelagem tridimensional, levantamento de logradouros, inventário urbano e leitura de elementos do território.

Entre os desafios destacados estavam a necessidade de vender a ideia dentro da organização, a existência de cartografia confiável, a escolha adequada das plataformas tecnológicas, a capacitação de pessoal e a evolução gradual dos gêmeos digitais.

Entre os ganhos apresentados, destacaram-se respostas mais rápidas às necessidades da gestão, maior transparência nos processos das secretarias, processos melhor mapeados, rapidez no atendimento ao cidadão e maior conhecimento da cidade em áreas como tributação, planejamento, obras e legislação.

A palestra também apresentou o gêmeo digital como uma réplica virtual de objeto, processo ou sistema físico, com possibilidade de sincronização com o mundo real e integração com sensores, IoT e inteligência artificial para coleta e análise de dados.

A principal mensagem foi que gêmeos digitais não devem ser tratados como produto isolado, mas como resultado de uma evolução institucional baseada em cartografia, cadastro, integração, dados confiáveis e equipes capacitadas.`
  },
  {
    numero: "06",
    titulo: "Informação Territorial, Fragmentação Cadastral e Inteligência Geográfica",
    resumo: "Discussão sobre os desafios de fragmentação cadastral territorial e como a inteligência geográfica permite transformar dados dispersos em conhecimento aplicado.",
    conteudo: `Outro bloco abordou os desafios enfrentados pelos municípios na organização de cadastros, mapas, processos, bases de dados e sistemas corporativos. A apresentação mostrou a existência de áreas cadastradas e áreas não cadastradas, evidenciando como a fragmentação cadastral territorial dificulta o planejamento, a gestão e a oferta de políticas públicas.

O conteúdo destacou que a cidade real nem sempre está completamente representada nas bases oficiais. Essa lacuna compromete a capacidade do poder público de compreender o território, planejar serviços, organizar recursos e responder às necessidades da população.

A apresentação reforçou que a inteligência geográfica permite transformar dados dispersos em conhecimento aplicado. Para isso, é necessário conectar informações ambientais, tributárias, cartográficas, cadastrais, urbanísticas, imobiliárias e de infraestrutura.

Também foi destacada a ideia de que a tecnologia é meio, e a gestão é finalidade. Drones, inteligência artificial, GeoBIM, gêmeos digitais e interoperabilidade são recursos importantes, mas só geram valor quando estão a serviço de uma gestão pública mais eficiente, integrada e transparente.

A palestra concluiu que os desafios continuam. Manter a cidade atualizada, garantir qualidade da informação, enfrentar barreiras institucionais e transformar projetos em políticas permanentes são condições essenciais para consolidar a inteligência geográfica como instrumento de governo.`
  },
  {
    numero: "07",
    titulo: "Experiências de Uso de Geotecnologias em Aplicações Municipais",
    resumo: "Apresentação de aplicações práticas de geotecnologias voltadas ao cotidiano da gestão municipal, desde planejamento operacional até limpeza urbana.",
    conteudo: `Também foi apresentado um conjunto de aplicações práticas de geotecnologias voltadas ao cotidiano da gestão municipal. Os slides demonstraram usos relacionados a planejamento operacional, segurança, tráfego, mobilidade, limpeza urbana, rotas de blocos de Carnaval, infraestrutura urbana, zoneamento, cadastro imobiliário e apoio à arrecadação.

Um dos exemplos apresentados envolveu o planejamento de eventos, com destaque para o Carnaval, contemplando planejamento de segurança, rotas de blocos, planejamento de tráfego e mobilidade e planejamento de limpeza das ruas. Esse exemplo demonstrou como o uso de mapas e dados territoriais permite organizar melhor operações complexas que envolvem grande público, deslocamentos, interdições, resíduos e necessidade de resposta rápida.

Também foram demonstradas aplicações de integração com sistemas tributários, associando lote cadastral, zona homogênea, infraestrutura urbana, zoneamento e frequência da coleta de lixo. Esse tipo de integração mostra como a informação territorial pode apoiar tanto a gestão fiscal quanto o planejamento de serviços urbanos.

A relevância dessa palestra está em mostrar que a geotecnologia não é um tema abstrato. Ela tem aplicação direta em problemas concretos da administração municipal, desde a arrecadação até a limpeza urbana, desde a mobilidade até a organização de grandes eventos.`
  },
  {
    numero: "08",
    titulo: "Inteligência Artificial Aplicada à Informação Geográfica e às Geotecnologias",
    resumo: "Apresentação de exemplos de inteligência artificial aplicada ao mapeamento de áreas de risco, classificação de áreas úmidas e análise de imagens territoriais.",
    conteudo: `Embora a inteligência artificial também tenha sido tratada nos cursos técnicos, houve palestras e apresentações complementares sobre o contexto das geotecnologias e o uso de modelos de IA em análises territoriais.

Os slides mostraram exemplos de pesquisas com inteligência artificial aplicadas ao mapeamento de áreas de risco, classificação de áreas úmidas, análise de imagens e identificação de padrões ambientais e territoriais. Foram citados estudos envolvendo universidades e centros de pesquisa, com uso de machine learning para mapear áreas suscetíveis a deslizamentos e apoiar a gestão de riscos.

A palestra também apresentou uma introdução sobre inteligência artificial, machine learning, deep learning, redes neurais e inteligência artificial generativa. A estrutura demonstrada indicou que os modelos dependem de dados de entrada, camadas de processamento e resultados de saída.

A principal ideia apresentada foi que a inteligência artificial é fortalecida pela quantidade e qualidade dos dados. Quanto mais estruturados e confiáveis forem os dados territoriais, maior será a capacidade dos modelos de identificar padrões e apoiar decisões.

Esse conteúdo reforça que a IA deve ser compreendida como instrumento de apoio à análise, e não como substituta do conhecimento técnico. A inteligência artificial pode acelerar diagnósticos, reconhecer padrões e ampliar a capacidade de análise, mas depende de dados consistentes, objetivos claros e interpretação humana qualificada.`
  },
  {
    numero: "09",
    titulo: "Inovação na Gestão de Resíduos Sólidos — Modelos, Tecnologias e Caminhos para Implementação",
    resumo: "Palestra sobre modernização da gestão de resíduos sólidos urbanos, abordando modelos operacionais, tecnologias e regulação pública para a limpeza urbana.",
    conteudo: `A palestra abordou um tema diretamente relacionado à atividade-fim da COMLURB: a gestão de resíduos sólidos urbanos. O debate tratou da necessidade de modernizar a forma como os municípios planejam, executam, monitoram e avaliam os serviços de limpeza urbana, coleta, tratamento, destinação final e integração com cadeias associadas à economia circular.

O conteúdo discutiu a inovação na gestão de resíduos sob três dimensões principais: modelos operacionais, uso de tecnologias e regulação pública. A palestra destacou que os municípios precisam superar uma visão limitada da coleta como simples retirada de resíduos das ruas. A gestão moderna exige planejamento territorial, rastreabilidade, indicadores, integração de dados, controle operacional e alinhamento com as diretrizes da Política Nacional de Resíduos Sólidos e do Plano Nacional de Resíduos Sólidos.

Também foi enfatizada a importância de tecnologias para otimizar rotas, acompanhar a execução dos serviços, integrar informações de campo, melhorar a destinação final e apoiar decisões sobre reciclagem, logística reversa e economia circular.

Essa palestra foi particularmente relevante para a COMLURB, pois demonstrou que a modernização da limpeza urbana passa necessariamente pela integração de dados territoriais, planejamento inteligente de rotas, acompanhamento em tempo real e alinhamento com políticas públicas de sustentabilidade.`
  }
];
