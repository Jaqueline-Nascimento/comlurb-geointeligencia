import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Search, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface LevantamentoRow {
  "Órgão": string;
  "UF": string;
  "Localização": string;
  "Projeto/Sistema": string;
  "Área de aplicação": string;
  "Finalidade/Como utiliza o georreferenciamento": string;
  "Tecnologia/Plataforma": string;
  "Potencial COMLURB": string;
  "Como pode inspirar a COMLURB": string;
  "Fonte oficial / URL": string;
}

// Dados extraídos da aba Levantamento
const levantamentoData: LevantamentoRow[] = [
  {
    "Órgão": "Prefeitura de São Paulo",
    "UF": "SP",
    "Localização": "São Paulo",
    "Projeto/Sistema": "GeoSampa",
    "Área de aplicação": "Cadastro imobiliário / planejamento urbano / transparência",
    "Finalidade/Como utiliza o georreferenciamento": "Portal de informações geográficas e geoespaciais com camadas de lotes, zoneamento, equipamentos públicos, áreas ambientais, acessibilidade, imagens históricas e cadastro fiscal imobiliário.",
    "Tecnologia/Plataforma": "GeoSampa / SIG web",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Modelo de IDE urbana para integrar lotes, áreas públicas, praças, equipamentos, poda, coleta e chamados 1746.",
    "Fonte oficial / URL": "https://prefeitura.sp.gov.br/w/noticia/geosampa-completa-7-anos-e-se-consolida-como-o-maior-portal-de-dados-georreferenciados-do-pais"
  },
  {
    "Órgão": "Prefeitura de São Paulo",
    "UF": "SP",
    "Localização": "São Paulo",
    "Projeto/Sistema": "GeoSampa - camada de lotes",
    "Área de aplicação": "IPTU / cadastro fiscal imobiliário",
    "Finalidade/Como utiliza o georreferenciamento": "Disponibilização de lotes associados a SQL/SQCd, base para lançamento de IPTU e localização de edificações, hospitais, escolas e outras tipologias.",
    "Tecnologia/Plataforma": "GeoSampa",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Referência para cadastro territorial e identificação oficial de imóveis/equipamentos urbanos.",
    "Fonte oficial / URL": "https://prefeitura.sp.gov.br/web/fazenda/w/noticias/26982"
  },
  {
    "Órgão": "Prefeitura de Belo Horizonte",
    "UF": "MG",
    "Localização": "Belo Horizonte",
    "Projeto/Sistema": "BHGEO / IDE-BHGEO",
    "Área de aplicação": "Infraestrutura de Dados Espaciais municipal",
    "Finalidade/Como utiliza o georreferenciamento": "Acesso centralizado a dados geográficos: equipamentos públicos, imagens de satélite georreferenciadas, ortofotos, lotes, quarteirões e outras feições.",
    "Tecnologia/Plataforma": "IDE-BHGEO / Prodabel",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Modelo de governança geoespacial corporativa para padronizar dados da COMLURB com SIURB.RIO.",
    "Fonte oficial / URL": "https://prefeitura.pbh.gov.br/prodabel/bhgeo"
  },
  {
    "Órgão": "Prefeitura de Belo Horizonte",
    "UF": "MG",
    "Localização": "Belo Horizonte",
    "Projeto/Sistema": "API Geocoder e Geocoder Reverso",
    "Área de aplicação": "Endereçamento oficial / integração de sistemas",
    "Finalidade/Como utiliza o georreferenciamento": "Serviço REST de consulta de endereços oficiais com retorno de coordenada geográfica em SIRGAS 2000.",
    "Tecnologia/Plataforma": "API REST / SIRGAS 2000",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Útil para converter chamados, OS e endereços em coordenadas para dashboards operacionais.",
    "Fonte oficial / URL": "https://geocoder.pbh.gov.br/geocoder/"
  },
  {
    "Órgão": "Prefeitura de Salvador",
    "UF": "BA",
    "Localização": "Salvador",
    "Projeto/Sistema": "GeoSalvador",
    "Área de aplicação": "Planejamento urbano / cadastro multifinalitário",
    "Finalidade/Como utiliza o georreferenciamento": "Portal oficial de geotecnologia com cadastro multifinalitário, ortofotos, dados vetoriais, geosserviços, mapa digital, zoneamento e urbanismo.",
    "Tecnologia/Plataforma": "ArcGIS / GeoSalvador",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Referência para cadastro multifinalitário integrado a secretarias e defesa civil municipal.",
    "Fonte oficial / URL": "https://geo.salvador.ba.gov.br/"
  },
  {
    "Órgão": "Prefeitura de Recife",
    "UF": "PE",
    "Localização": "Recife",
    "Projeto/Sistema": "Portal de Dados Abertos - GeoJSON",
    "Área de aplicação": "Mobilidade, meio ambiente, saúde, educação, praças e planejamento",
    "Finalidade/Como utiliza o georreferenciamento": "Dados georreferenciados em GeoJSON de malha cicloviária, urbanismo tático, unidades protegidas, zoneamento, saúde, educação, parques e praças.",
    "Tecnologia/Plataforma": "CKAN / GeoJSON / dados abertos",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Exemplo de abertura de dados operacionais e territoriais para análise pública e integração com SIG.",
    "Fonte oficial / URL": "https://dados.recife.pe.gov.br/dataset/?res_format=GeoJSON"
  },
  {
    "Órgão": "Prefeitura de Recife",
    "UF": "PE",
    "Localização": "Recife",
    "Projeto/Sistema": "Dados abertos - Malha cicloviária",
    "Área de aplicação": "Mobilidade urbana",
    "Finalidade/Como utiliza o georreferenciamento": "Publicação de dados georreferenciados da malha cicloviária, incluindo ciclovias, ciclofaixas e ciclorrotas.",
    "Tecnologia/Plataforma": "GeoJSON / CSV / JSON",
    "Potencial COMLURB": "Baixa",
    "Como pode inspirar a COMLURB": "Mostra como publicar bases georreferenciadas temáticas em formatos abertos.",
    "Fonte oficial / URL": "https://dados.recife.pe.gov.br/pt_PT/dataset"
  },
  {
    "Órgão": "Prefeitura de Fortaleza",
    "UF": "CE",
    "Localização": "Fortaleza",
    "Projeto/Sistema": "Fortaleza em Mapas",
    "Área de aplicação": "Planejamento urbano / infraestrutura / limpeza pública",
    "Finalidade/Como utiliza o georreferenciamento": "Plataforma com informações georreferenciadas produzidas pelo poder público, com mais de 535 mapas, sobreposição de camadas, downloads em GeoJSON, Shapefile, CSV e KMZ.",
    "Tecnologia/Plataforma": "Fortaleza em Mapas / GeoJSON / SHP",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Referência direta para limpeza pública, infraestrutura, praças, meio ambiente, tributário e mobilidade.",
    "Fonte oficial / URL": "https://mapas.fortaleza.ce.gov.br/sobre"
  },
  {
    "Órgão": "Prefeitura de Fortaleza",
    "UF": "CE",
    "Localização": "Fortaleza",
    "Projeto/Sistema": "Fortaleza em Mapas - catálogo",
    "Área de aplicação": "Limpeza pública / infraestrutura urbana",
    "Finalidade/Como utiliza o georreferenciamento": "Catálogo inclui mapas de limpeza pública, associações e grupos de catadores, biodigestores, microterritórios e demais camadas urbanas.",
    "Tecnologia/Plataforma": "GeoJSON / SHP / CSV / KMZ",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Aplicável à coleta seletiva, cooperativas, ecopontos, roteiros e fiscalização territorial.",
    "Fonte oficial / URL": "https://mapas.fortaleza.ce.gov.br/catalogo"
  },
  {
    "Órgão": "Prefeitura de Joinville",
    "UF": "SC",
    "Localização": "Joinville",
    "Projeto/Sistema": "SIMGeo",
    "Área de aplicação": "Planejamento urbano / consultas espaciais",
    "Finalidade/Como utiliza o georreferenciamento": "Sistema de Informações Municipais Georreferenciadas com pesquisas por inscrição imobiliária, logradouros, bairros e coordenadas; camadas cartográficas e ortofotos.",
    "Tecnologia/Plataforma": "SIMGeo / SIG web",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Referência para consulta de ativos por coordenada, logradouro ou inscrição territorial.",
    "Fonte oficial / URL": "https://www.joinville.sc.gov.br/servicos/acessar-sistema-de-informacoes-municipais-georreferenciadas-simgeo/"
  },
  {
    "Órgão": "Prefeitura de Joinville",
    "UF": "SC",
    "Localização": "Joinville",
    "Projeto/Sistema": "Unidade de Geoprocessamento - SEPUR.UGP",
    "Área de aplicação": "Governança geoespacial / urbanismo",
    "Finalidade/Como utiliza o georreferenciamento": "Unidade responsável por coordenar o SIMGeo, supervisionar metodologias de coleta/processamento e publicizar planos, leis, diretrizes e instrumentos urbanísticos.",
    "Tecnologia/Plataforma": "SIMGeo / unidade de geoprocessamento",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Modelo de unidade interna de governança geoespacial com atribuições claras.",
    "Fonte oficial / URL": "https://www.joinville.sc.gov.br/institucional/sepur/upd/"
  },
  {
    "Órgão": "Prefeitura de Joinville",
    "UF": "SC",
    "Localização": "Joinville",
    "Projeto/Sistema": "Downloads SIMGeo",
    "Área de aplicação": "Base cartográfica / meio ambiente / mapas temáticos",
    "Finalidade/Como utiliza o georreferenciamento": "Disponibilização de produtos georreferenciados, aerofotogrametria, mapas, shapefiles e cartas temáticas para download.",
    "Tecnologia/Plataforma": "Shapefile / PDF / DWG",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Modelo para disponibilizar bases da COMLURB em camadas padronizadas e reaproveitáveis.",
    "Fonte oficial / URL": "https://www.joinville.sc.gov.br/publicacoes/downloads-sistema-de-informacoes-municipais-georreferenciadas-simgeo/"
  },
  {
    "Órgão": "Prefeitura de Londrina",
    "UF": "PR",
    "Localização": "Londrina",
    "Projeto/Sistema": "SIGLON",
    "Área de aplicação": "Banco de dados geográfico municipal",
    "Finalidade/Como utiliza o georreferenciamento": "Portal de informações físicas e socioeconômicas em banco de dados geográfico, permitindo georreferenciar dados em qualquer ponto do município.",
    "Tecnologia/Plataforma": "SIGLON / SIG web",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Exemplo de banco geográfico municipal para integração multiárea.",
    "Fonte oficial / URL": "https://portal.londrina.pr.gov.br/o-que-e-siglon"
  },
  {
    "Órgão": "Prefeitura de Londrina",
    "UF": "PR",
    "Localização": "Londrina",
    "Projeto/Sistema": "Plano Diretor de Geoprocessamento - PDGeo",
    "Área de aplicação": "Governança / normatização de dados geoespaciais",
    "Finalidade/Como utiliza o georreferenciamento": "Plano para implementar e consolidar cultura de inteligência geográfica e normatizar dados produzidos por secretarias e órgãos municipais.",
    "Tecnologia/Plataforma": "PDGeo / INDE",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Muito aplicável para criar diretriz interna COMLURB/SIURB sobre padrões, camadas e responsabilidades.",
    "Fonte oficial / URL": "https://portal.londrina.pr.gov.br/plano-diretor-de-geoprocessamento-siglon"
  },
  {
    "Órgão": "Prefeitura de Goiânia",
    "UF": "GO",
    "Localização": "Goiânia",
    "Projeto/Sistema": "Mapa Geo 360° Goiânia",
    "Área de aplicação": "Cadastro urbano / loteamentos / áreas públicas",
    "Finalidade/Como utiliza o georreferenciamento": "Serviço de geoprocessamento para atualização de mapa, inserção de loteamentos, cadastro de bairros, logradouros e áreas públicas; exige plantas georreferenciadas.",
    "Tecnologia/Plataforma": "Mapa Geo 360° / SIGGO",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Referência para atualização cadastral de áreas públicas, praças e logradouros.",
    "Fonte oficial / URL": "https://www.goiania.go.gov.br/sing_servicos/geoprocessamento/"
  },
  {
    "Órgão": "Prefeitura de Goiânia",
    "UF": "GO",
    "Localização": "Goiânia",
    "Projeto/Sistema": "Gerência de Geoprocessamento - SEFAZ",
    "Área de aplicação": "Cadastro imobiliário / vistoria fiscal",
    "Finalidade/Como utiliza o georreferenciamento": "Competência para base cartográfica digital, mapas temáticos, interfaces de consulta/análise, imagens geográficas e apoio ao cadastro imobiliário e vistoria fiscal.",
    "Tecnologia/Plataforma": "SIGGO / imagens geográficas",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Aplicável à fiscalização de campo, validação de ativos urbanos e apoio a vistorias.",
    "Fonte oficial / URL": "https://www.goiania.go.gov.br/sefaz/departamentos/gerencia-de-geoprocessamento/"
  },
  {
    "Órgão": "Prefeitura de São José dos Campos",
    "UF": "SP",
    "Localização": "São José dos Campos",
    "Projeto/Sistema": "GeoSanja",
    "Área de aplicação": "Banco de dados geográficos / dados abertos",
    "Finalidade/Como utiliza o georreferenciamento": "Portal de dados geográficos do município, com desenvolvimento interno, software livre, acesso aberto, múltiplos formatos e acervo histórico de imagens.",
    "Tecnologia/Plataforma": "GeoSanja / software livre",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Exemplo forte para plataforma municipal de dados geográficos com baixo custo e alto acesso público.",
    "Fonte oficial / URL": "https://www.sjc.sp.gov.br/noticias/2025/agosto/14/geosanja-alcanca-1-milhao-de-acessos-e-se-destaca-no-brasil/"
  },
  {
    "Órgão": "Prefeitura de São José dos Campos",
    "UF": "SP",
    "Localização": "São José dos Campos",
    "Projeto/Sistema": "GeoSanja - fiscalização",
    "Área de aplicação": "Fiscalização urbana / terrenos / resíduos",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de imagens georreferenciadas e informações de imóveis para fiscalizar mato alto, sujeira e despejo irregular de entulhos/lixo em terrenos particulares, reduzindo vistorias in loco.",
    "Tecnologia/Plataforma": "GeoSanja / imagens georreferenciadas",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Muito aderente à fiscalização de descarte irregular, lixo em terrenos e apoio ao 1746.",
    "Fonte oficial / URL": "https://www.sjc.sp.gov.br/noticias/2021/abril/22/fiscalizacao-inova-com-uso-da-ferramenta-geosanja/"
  },
  {
    "Órgão": "Prefeitura de São José dos Campos",
    "UF": "SP",
    "Localização": "São José dos Campos",
    "Projeto/Sistema": "Georreferenciamento de bocas de lobo",
    "Área de aplicação": "Drenagem urbana / manutenção preventiva",
    "Finalidade/Como utiliza o georreferenciamento": "Registro georreferenciado de bocas de lobo e limpeza de galerias para mapear equipamentos, medir necessidade de retorno e criar cronograma preventivo contra alagamentos.",
    "Tecnologia/Plataforma": "Georreferenciamento de campo / SIG municipal",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Caso quase idêntico à lógica de OS digitais, manutenção preventiva e produtividade por território.",
    "Fonte oficial / URL": "https://www.sjc.sp.gov.br/noticias/2025/setembro/18/geoprocessamento-ja-cadastrou-mais-de-1500-bocas-de-lobo/"
  },
  {
    "Órgão": "Prefeitura de São José dos Campos",
    "UF": "SP",
    "Localização": "São José dos Campos",
    "Projeto/Sistema": "Geoprocessamento urbano",
    "Área de aplicação": "Mapas, plantas, cartas topográficas e aerofotogrametria",
    "Finalidade/Como utiliza o georreferenciamento": "Processamento de dados georreferenciados, manipulação e geração de informações associadas a coordenadas em base cartográfica e SIG.",
    "Tecnologia/Plataforma": "SIG / aerofotogrametria",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Referência técnica para estruturação de base cartográfica e camadas operacionais.",
    "Fonte oficial / URL": "https://siteprefeitura.sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/planejamento-urbano/mapas-cartas-plantas-e-aerofotogrametria/geoprocessamento/"
  },
  {
    "Órgão": "Prefeitura de Niterói",
    "UF": "RJ",
    "Localização": "Niterói",
    "Projeto/Sistema": "SIGeo / Data Lake / Gêmeo Digital",
    "Área de aplicação": "Transformação digital / planejamento urbano",
    "Finalidade/Como utiliza o georreferenciamento": "Integra bases georreferenciadas para apoiar políticas públicas; desenvolvimento de Data Lake municipal e projeto de Gêmeo Digital.",
    "Tecnologia/Plataforma": "SIGeo / Data Lake / Gêmeo Digital",
    "Potencial COMLURB": "Muito alta",
    "Como pode inspirar a COMLURB": "Fortemente alinhado ao SIURB, CICO e visão de gêmeo digital da operação COMLURB.",
    "Fonte oficial / URL": "https://www.fazenda.niteroi.rj.gov.br/site/dtec-e-serec-da-smf-marcam-presenca-no-geo-dados-evento-sobre-gestao-digital-e-geoinformacao/"
  },
  {
    "Órgão": "Prefeitura de Niterói",
    "UF": "RJ",
    "Localização": "Niterói",
    "Projeto/Sistema": "EGP Nit - gestão do SIGEO",
    "Área de aplicação": "Gestão de projetos / geoprocessamento",
    "Finalidade/Como utiliza o georreferenciamento": "Estrutura municipal com equipe de geoprocessamento que efetua a gestão do SIGEO - Sistema de Geoinformações de Niterói.",
    "Tecnologia/Plataforma": "SIGEO",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Modelo de governança institucional vinculada a projetos estratégicos e gabinete.",
    "Fonte oficial / URL": "https://www.egp.niteroi.rj.gov.br/o-egp/"
  },
  {
    "Órgão": "Governo do Estado de São Paulo - SEMIL",
    "UF": "SP",
    "Localização": "Estado de São Paulo",
    "Projeto/Sistema": "MAIS - Monitoramento Ambiental por Imagens de Satélite",
    "Área de aplicação": "Fiscalização ambiental / vegetação nativa",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de imagens de satélite e análise de dados geoespaciais para identificar alterações na vegetação nativa e orientar fiscalização ambiental em todo o estado.",
    "Tecnologia/Plataforma": "Sensoriamento remoto / dados geoespaciais",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Inspira monitoramento de áreas verdes, supressão vegetal e apoio à poda/arborização.",
    "Fonte oficial / URL": "https://semil.sp.gov.br/2026/03/estado-amplia-monitoramento-ambiental-por-satelite-e-reforca-fiscalizacao-em-todo-o-territorio-paulista/"
  },
  {
    "Órgão": "Governo do Estado de São Paulo - CETESB/SEMIL",
    "UF": "SP",
    "Localização": "Estado de São Paulo",
    "Projeto/Sistema": "Monitoramento por satélite e IA dos rios Tietê e Pinheiros",
    "Área de aplicação": "Qualidade da água / fiscalização ambiental",
    "Finalidade/Como utiliza o georreferenciamento": "Imagens de satélite de alta resolução e IA para monitorar cerca de 1.000 km de rios, identificar alterações e gerar alertas automáticos.",
    "Tecnologia/Plataforma": "Satélite / IA / alertas automáticos",
    "Potencial COMLURB": "Baixa",
    "Como pode inspirar a COMLURB": "Exemplo de monitoramento automatizado para geração de alertas territoriais.",
    "Fonte oficial / URL": "https://semil.sp.gov.br/2026/06/tiete-e-pinheiros-passam-a-ser-monitorados-por-satelite-e-ia/"
  },
  {
    "Órgão": "Governo de Mato Grosso do Sul - IMASUL",
    "UF": "MS",
    "Localização": "Estado de Mato Grosso do Sul",
    "Projeto/Sistema": "UNIGEO / Sala de Situação",
    "Área de aplicação": "Monitoramento ambiental / desmatamento / queimadas",
    "Finalidade/Como utiliza o georreferenciamento": "Unidade de Geoprocessamento com inteligência geoespacial para detecção automatizada de desmatamentos e queimadas em todo o território estadual.",
    "Tecnologia/Plataforma": "UNIGEO / satélite / automação",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Modelo de sala de situação para monitoramento territorial e tomada de decisão operacional.",
    "Fonte oficial / URL": "https://agenciadenoticias.ms.gov.br/com-tecnologia-inedita-ms-tem-monitoramento-ambiental-para-identificar-desmatamento-e-queimadas/"
  },
  {
    "Órgão": "Governo de Mato Grosso do Sul - IMASUL",
    "UF": "MS",
    "Localização": "Estado de Mato Grosso do Sul",
    "Projeto/Sistema": "MADES e MAQUES",
    "Área de aplicação": "Alertas de desmatamento e queimadas",
    "Finalidade/Como utiliza o georreferenciamento": "Plataformas com inteligência geoespacial, sensoriamento remoto, imagens de satélite de alta resolução e integração de bases para fiscalização ambiental.",
    "Tecnologia/Plataforma": "MADES / MAQUES / sensoriamento remoto",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Inspira alertas automáticos para descarte irregular, podas emergenciais e áreas críticas.",
    "Fonte oficial / URL": "https://agenciadenoticias.ms.gov.br/para-reforcar-monitoramento-ambiental-em-ms-governo-do-estado-lanca-novas-plataformas-tecnologicas/"
  },
  {
    "Órgão": "FEPAM - Governo do Rio Grande do Sul",
    "UF": "RS",
    "Localização": "Estado do Rio Grande do Sul",
    "Projeto/Sistema": "Serviço de Inteligência Geoespacial / SIG",
    "Área de aplicação": "Licenciamento e monitoramento ambiental",
    "Finalidade/Como utiliza o georreferenciamento": "Coordena padrões, processamento e análise de dados geoespaciais; apoia licenciamento, monitoramento ambiental, bases web e dados para download em shapefile.",
    "Tecnologia/Plataforma": "SIG / Shapefile / dados geoespaciais",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Referência para normatização, capacitação e suporte geoespacial institucional.",
    "Fonte oficial / URL": "https://www.fepam.rs.gov.br/geoprocessamento"
  },
  {
    "Órgão": "IBGE",
    "UF": "Brasil",
    "Localização": "Nacional",
    "Projeto/Sistema": "Entorno dos domicílios / características urbanísticas",
    "Área de aplicação": "Infraestrutura urbana / estatísticas territoriais",
    "Finalidade/Como utiliza o georreferenciamento": "Mapeamento de arborização, iluminação pública, calçadas, drenagem, acessibilidade e demais características urbanísticas do entorno dos domicílios.",
    "Tecnologia/Plataforma": "Geociências / estatísticas georreferenciadas",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Base comparativa para indicadores territoriais de limpeza urbana, calçadas, arborização e infraestrutura.",
    "Fonte oficial / URL": "https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html"
  },
  {
    "Órgão": "Governo Federal",
    "UF": "Brasil",
    "Localização": "Nacional",
    "Projeto/Sistema": "INDE / Geoinformação",
    "Área de aplicação": "Infraestrutura Nacional de Dados Espaciais",
    "Finalidade/Como utiliza o georreferenciamento": "Diretrizes para facilitar e ordenar geração, armazenamento, acesso, compartilhamento, disseminação e uso de dados geoespaciais oficiais.",
    "Tecnologia/Plataforma": "INDE / geoinformação",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Base normativa para justificar padronização de dados geoespaciais na COMLURB e integração ao SIURB.",
    "Fonte oficial / URL": "https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/geoinformacao"
  },
  {
    "Órgão": "Prefeitura do Rio de Janeiro",
    "UF": "RJ",
    "Localização": "Rio de Janeiro",
    "Projeto/Sistema": "DATA.Rio / SIURB.RIO",
    "Área de aplicação": "Planejamento, integração e disseminação de informações municipais",
    "Finalidade/Como utiliza o georreferenciamento": "Portal DATA.Rio integra modelo de planejamento, gestão e disseminação de informações da Prefeitura; SIURB.RIO é a infraestrutura urbana municipal de dados espaciais.",
    "Tecnologia/Plataforma": "DATA.Rio / SIURB.RIO",
    "Potencial COMLURB": "Muito alta",
    "Como pode inspirar a COMLURB": "É o ecossistema natural para integrar COMLURB, ArcGIS, CICO, 1746 e dashboards territoriais.",
    "Fonte oficial / URL": "https://www.rio.rj.gov.br/"
  },
  {
    "Órgão": "Prefeitura de Campinas",
    "UF": "SP",
    "Localização": "Campinas",
    "Projeto/Sistema": "Geoportal / geoprocessamento municipal",
    "Área de aplicação": "Planejamento urbano / cadastro territorial",
    "Finalidade/Como utiliza o georreferenciamento": "Uso municipal de geotecnologias para mapas, bases cartográficas e planejamento territorial. Necessita validação complementar em fonte oficial específica para detalhamento de sistema.",
    "Tecnologia/Plataforma": "SIG municipal",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Potencial de comparação com gestão urbana de cidade grande; item marcado para validação adicional.",
    "Fonte oficial / URL": "https://campinas.sp.gov.br/"
  },
  {
    "Órgão": "Prefeitura de Curitiba",
    "UF": "PR",
    "Localização": "Curitiba",
    "Projeto/Sistema": "Geoprocessamento municipal / IPPUC",
    "Área de aplicação": "Planejamento urbano / mobilidade / infraestrutura",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de bases geográficas e planejamento urbano pelo município; item incluído por relevância histórica em planejamento urbano, com validação complementar recomendada em portal específico.",
    "Tecnologia/Plataforma": "SIG / planejamento urbano",
    "Potencial COMLURB": "Média",
    "Como pode inspirar a COMLURB": "Referência para urbanismo, roteirização e indicadores territoriais, com necessidade de aprofundar fonte oficial.",
    "Fonte oficial / URL": "https://www.curitiba.pr.gov.br/"
  },
  {
    "Órgão": "Prefeitura de Porto Alegre",
    "UF": "RS",
    "Localização": "Porto Alegre",
    "Projeto/Sistema": "Geoprocessamento municipal",
    "Área de aplicação": "Planejamento urbano / dados espaciais municipais",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de informações geográficas para planejamento e gestão municipal; item incluído para continuidade da varredura em capitais brasileiras.",
    "Tecnologia/Plataforma": "SIG municipal",
    "Potencial COMLURB": "Baixa",
    "Como pode inspirar a COMLURB": "Pode servir como benchmark de capital.",
    "Fonte oficial / URL": "https://www.portoalegre.rs.gov.br/"
  }
];

const getPotentialColor = (potential: string) => {
  switch (potential) {
    case "Muito alta":
      return "bg-emerald-100 text-emerald-800 border-emerald-300";
    case "Alta":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "Média":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Baixa":
      return "bg-gray-100 text-gray-800 border-gray-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

export default function Geointeligencia() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<"potential" | "state" | "name">("potential");

  const filteredData = useMemo(() => {
    let filtered = levantamentoData.filter((row) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        row["Órgão"].toLowerCase().includes(searchLower) ||
        row["Projeto/Sistema"].toLowerCase().includes(searchLower) ||
        row["Localização"].toLowerCase().includes(searchLower) ||
        row["Área de aplicação"].toLowerCase().includes(searchLower)
      );
    });

    // Ordenar por potencial (Muito alta > Alta > Média > Baixa)
    const potentialOrder = { "Muito alta": 0, "Alta": 1, "Média": 2, "Baixa": 3 };
    filtered.sort((a, b) => {
      if (sortBy === "potential") {
        return (potentialOrder[a["Potencial COMLURB"] as keyof typeof potentialOrder] ?? 4) -
               (potentialOrder[b["Potencial COMLURB"] as keyof typeof potentialOrder] ?? 4);
      } else if (sortBy === "state") {
        return a["UF"].localeCompare(b["UF"]);
      } else {
        return a["Órgão"].localeCompare(b["Órgão"]);
      }
    });

    return filtered;
  }, [searchTerm, sortBy]);

  const toggleRow = (index: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Botão Voltar - Topo Esquerdo */}
      <button
        onClick={() => setLocation('/')}
        className="fixed top-4 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-md hover:shadow-lg text-gray-700 font-medium"
      >
        <ChevronLeft size={20} />
        <span>Voltar</span>
      </button>

      {/* Header com vídeo */}
      <div className="relative h-96 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="assets/media/geointeligencia-banner_0811f1bc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Geointeligência em outras Prefeituras</h1>
            <p className="text-xl opacity-90">
              Veja como outras cidades aplicam geointeligência e os resultados alcançados.
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Seção de busca e filtros */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar por prefeitura, projeto, localização ou área de aplicação..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-2 w-full border-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy("potential")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  sortBy === "potential"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Potencial
              </button>
              <button
                onClick={() => setSortBy("state")}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  sortBy === "state"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Estado
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {filteredData.length} resultado{filteredData.length !== 1 ? "s" : ""} encontrado{filteredData.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Tabela interativa - agrupada por prefeitura */}
        <div className="space-y-3">
          {(() => {
            // Agrupar dados por prefeitura
            const groupedByOrgao = filteredData.reduce((acc, row, index) => {
              const key = row["Órgão"];
              if (!acc[key]) {
                acc[key] = { prefeitura: row, projetos: [], indices: [] };
              }
              acc[key].projetos.push(row);
              acc[key].indices.push(index);
              return acc;
            }, {} as Record<string, any>);

            // Renderizar cada prefeitura com seus projetos
            return Object.entries(groupedByOrgao).map(([orgaoKey, data]) => {
              const mainIndex = data.indices[0];
              const isExpanded = expandedRows.has(mainIndex);

              return (
                <div
                  key={orgaoKey}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Linha principal - clicável */}
                  <button
                    onClick={() => toggleRow(mainIndex)}
                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{data.prefeitura["Órgão"]}</h3>
                        <p className="text-sm text-gray-600">{data.prefeitura["Localização"]}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{data.projetos.length} projeto{data.projetos.length > 1 ? "s" : ""}</p>
                        <p className="text-sm text-gray-600">{data.projetos.map((p: LevantamentoRow) => p["Projeto/Sistema"]).join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{data.projetos.map((p: LevantamentoRow) => p["Tecnologia/Plataforma"]).join(", ")}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className={`${getPotentialColor(data.prefeitura["Potencial COMLURB"])} border`}>
                          {data.prefeitura["Potencial COMLURB"]}
                        </Badge>
                      </div>
                    </div>
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Conteúdo expandido - lista de projetos */}
                  {isExpanded && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-4">
                      {data.projetos.map((projeto: LevantamentoRow, projIndex: number) => (
                        <div key={projIndex} className={projIndex > 0 ? "pt-4 border-t border-gray-300" : ""}>
                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900">{projeto["Projeto/Sistema"]}</h4>
                            <p className="text-sm text-gray-600 mt-1">{projeto["Área de aplicação"]}</p>
                          </div>

                          <div>
                            <h5 className="font-medium text-gray-900 mb-2 text-sm">Finalidade</h5>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {projeto["Finalidade/Como utiliza o georreferenciamento"]}
                            </p>
                          </div>

                          <div className="mt-3">
                            <h5 className="font-medium text-gray-900 mb-2 text-sm">Como pode inspirar a COMLURB</h5>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {projeto["Como pode inspirar a COMLURB"]}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200">
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Tecnologia:</span> {projeto["Tecnologia/Plataforma"]}
                            </div>
                            <a
                              href={projeto["Fonte oficial / URL"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Link
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            });
          })()}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nenhum resultado encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
}
