import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Search, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface LevantamentoRow {
  "Ã“rgÃ£o": string;
  "UF": string;
  "LocalizaÃ§Ã£o": string;
  "Projeto/Sistema": string;
  "Ãrea de aplicaÃ§Ã£o": string;
  "Finalidade/Como utiliza o georreferenciamento": string;
  "Tecnologia/Plataforma": string;
  "Potencial COMLURB": string;
  "Como pode inspirar a COMLURB": string;
  "Fonte oficial / URL": string;
}

// Dados extraÃ­dos da aba Levantamento
const levantamentoData: LevantamentoRow[] = [
  {
    "Ã“rgÃ£o": "Prefeitura de SÃ£o Paulo",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "SÃ£o Paulo",
    "Projeto/Sistema": "GeoSampa",
    "Ãrea de aplicaÃ§Ã£o": "Cadastro imobiliÃ¡rio / planejamento urbano / transparÃªncia",
    "Finalidade/Como utiliza o georreferenciamento": "Portal de informaÃ§Ãµes geogrÃ¡ficas e geoespaciais com camadas de lotes, zoneamento, equipamentos pÃºblicos, Ã¡reas ambientais, acessibilidade, imagens histÃ³ricas e cadastro fiscal imobiliÃ¡rio.",
    "Tecnologia/Plataforma": "GeoSampa / SIG web",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Modelo de IDE urbana para integrar lotes, Ã¡reas pÃºblicas, praÃ§as, equipamentos, poda, coleta e chamados 1746.",
    "Fonte oficial / URL": "https://prefeitura.sp.gov.br/w/noticia/geosampa-completa-7-anos-e-se-consolida-como-o-maior-portal-de-dados-georreferenciados-do-pais"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de SÃ£o Paulo",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "SÃ£o Paulo",
    "Projeto/Sistema": "GeoSampa - camada de lotes",
    "Ãrea de aplicaÃ§Ã£o": "IPTU / cadastro fiscal imobiliÃ¡rio",
    "Finalidade/Como utiliza o georreferenciamento": "DisponibilizaÃ§Ã£o de lotes associados a SQL/SQCd, base para lanÃ§amento de IPTU e localizaÃ§Ã£o de edificaÃ§Ãµes, hospitais, escolas e outras tipologias.",
    "Tecnologia/Plataforma": "GeoSampa",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "ReferÃªncia para cadastro territorial e identificaÃ§Ã£o oficial de imÃ³veis/equipamentos urbanos.",
    "Fonte oficial / URL": "https://prefeitura.sp.gov.br/web/fazenda/w/noticias/26982"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Belo Horizonte",
    "UF": "MG",
    "LocalizaÃ§Ã£o": "Belo Horizonte",
    "Projeto/Sistema": "BHGEO / IDE-BHGEO",
    "Ãrea de aplicaÃ§Ã£o": "Infraestrutura de Dados Espaciais municipal",
    "Finalidade/Como utiliza o georreferenciamento": "Acesso centralizado a dados geogrÃ¡ficos: equipamentos pÃºblicos, imagens de satÃ©lite georreferenciadas, ortofotos, lotes, quarteirÃµes e outras feiÃ§Ãµes.",
    "Tecnologia/Plataforma": "IDE-BHGEO / Prodabel",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Modelo de governanÃ§a geoespacial corporativa para padronizar dados da COMLURB com SIURB.RIO.",
    "Fonte oficial / URL": "https://prefeitura.pbh.gov.br/prodabel/bhgeo"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Belo Horizonte",
    "UF": "MG",
    "LocalizaÃ§Ã£o": "Belo Horizonte",
    "Projeto/Sistema": "API Geocoder e Geocoder Reverso",
    "Ãrea de aplicaÃ§Ã£o": "EndereÃ§amento oficial / integraÃ§Ã£o de sistemas",
    "Finalidade/Como utiliza o georreferenciamento": "ServiÃ§o REST de consulta de endereÃ§os oficiais com retorno de coordenada geogrÃ¡fica em SIRGAS 2000.",
    "Tecnologia/Plataforma": "API REST / SIRGAS 2000",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Ãštil para converter chamados, OS e endereÃ§os em coordenadas para dashboards operacionais.",
    "Fonte oficial / URL": "https://geocoder.pbh.gov.br/geocoder/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Salvador",
    "UF": "BA",
    "LocalizaÃ§Ã£o": "Salvador",
    "Projeto/Sistema": "GeoSalvador",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento urbano / cadastro multifinalitÃ¡rio",
    "Finalidade/Como utiliza o georreferenciamento": "Portal oficial de geotecnologia com cadastro multifinalitÃ¡rio, ortofotos, dados vetoriais, geosserviÃ§os, mapa digital, zoneamento e urbanismo.",
    "Tecnologia/Plataforma": "ArcGIS / GeoSalvador",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "ReferÃªncia para cadastro multifinalitÃ¡rio integrado a secretarias e defesa civil municipal.",
    "Fonte oficial / URL": "https://geo.salvador.ba.gov.br/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Recife",
    "UF": "PE",
    "LocalizaÃ§Ã£o": "Recife",
    "Projeto/Sistema": "Portal de Dados Abertos - GeoJSON",
    "Ãrea de aplicaÃ§Ã£o": "Mobilidade, meio ambiente, saÃºde, educaÃ§Ã£o, praÃ§as e planejamento",
    "Finalidade/Como utiliza o georreferenciamento": "Dados georreferenciados em GeoJSON de malha cicloviÃ¡ria, urbanismo tÃ¡tico, unidades protegidas, zoneamento, saÃºde, educaÃ§Ã£o, parques e praÃ§as.",
    "Tecnologia/Plataforma": "CKAN / GeoJSON / dados abertos",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Exemplo de abertura de dados operacionais e territoriais para anÃ¡lise pÃºblica e integraÃ§Ã£o com SIG.",
    "Fonte oficial / URL": "https://dados.recife.pe.gov.br/dataset/?res_format=GeoJSON"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Recife",
    "UF": "PE",
    "LocalizaÃ§Ã£o": "Recife",
    "Projeto/Sistema": "Dados abertos - Malha cicloviÃ¡ria",
    "Ãrea de aplicaÃ§Ã£o": "Mobilidade urbana",
    "Finalidade/Como utiliza o georreferenciamento": "PublicaÃ§Ã£o de dados georreferenciados da malha cicloviÃ¡ria, incluindo ciclovias, ciclofaixas e ciclorrotas.",
    "Tecnologia/Plataforma": "GeoJSON / CSV / JSON",
    "Potencial COMLURB": "Baixa",
    "Como pode inspirar a COMLURB": "Mostra como publicar bases georreferenciadas temÃ¡ticas em formatos abertos.",
    "Fonte oficial / URL": "https://dados.recife.pe.gov.br/pt_PT/dataset"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Fortaleza",
    "UF": "CE",
    "LocalizaÃ§Ã£o": "Fortaleza",
    "Projeto/Sistema": "Fortaleza em Mapas",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento urbano / infraestrutura / limpeza pÃºblica",
    "Finalidade/Como utiliza o georreferenciamento": "Plataforma com informaÃ§Ãµes georreferenciadas produzidas pelo poder pÃºblico, com mais de 535 mapas, sobreposiÃ§Ã£o de camadas, downloads em GeoJSON, Shapefile, CSV e KMZ.",
    "Tecnologia/Plataforma": "Fortaleza em Mapas / GeoJSON / SHP",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "ReferÃªncia direta para limpeza pÃºblica, infraestrutura, praÃ§as, meio ambiente, tributÃ¡rio e mobilidade.",
    "Fonte oficial / URL": "https://mapas.fortaleza.ce.gov.br/sobre"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Fortaleza",
    "UF": "CE",
    "LocalizaÃ§Ã£o": "Fortaleza",
    "Projeto/Sistema": "Fortaleza em Mapas - catÃ¡logo",
    "Ãrea de aplicaÃ§Ã£o": "Limpeza pÃºblica / infraestrutura urbana",
    "Finalidade/Como utiliza o georreferenciamento": "CatÃ¡logo inclui mapas de limpeza pÃºblica, associaÃ§Ãµes e grupos de catadores, biodigestores, microterritÃ³rios e demais camadas urbanas.",
    "Tecnologia/Plataforma": "GeoJSON / SHP / CSV / KMZ",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "AplicÃ¡vel Ã  coleta seletiva, cooperativas, ecopontos, roteiros e fiscalizaÃ§Ã£o territorial.",
    "Fonte oficial / URL": "https://mapas.fortaleza.ce.gov.br/catalogo"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Joinville",
    "UF": "SC",
    "LocalizaÃ§Ã£o": "Joinville",
    "Projeto/Sistema": "SIMGeo",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento urbano / consultas espaciais",
    "Finalidade/Como utiliza o georreferenciamento": "Sistema de InformaÃ§Ãµes Municipais Georreferenciadas com pesquisas por inscriÃ§Ã£o imobiliÃ¡ria, logradouros, bairros e coordenadas; camadas cartogrÃ¡ficas e ortofotos.",
    "Tecnologia/Plataforma": "SIMGeo / SIG web",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "ReferÃªncia para consulta de ativos por coordenada, logradouro ou inscriÃ§Ã£o territorial.",
    "Fonte oficial / URL": "https://www.joinville.sc.gov.br/servicos/acessar-sistema-de-informacoes-municipais-georreferenciadas-simgeo/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Joinville",
    "UF": "SC",
    "LocalizaÃ§Ã£o": "Joinville",
    "Projeto/Sistema": "Unidade de Geoprocessamento - SEPUR.UGP",
    "Ãrea de aplicaÃ§Ã£o": "GovernanÃ§a geoespacial / urbanismo",
    "Finalidade/Como utiliza o georreferenciamento": "Unidade responsÃ¡vel por coordenar o SIMGeo, supervisionar metodologias de coleta/processamento e publicizar planos, leis, diretrizes e instrumentos urbanÃ­sticos.",
    "Tecnologia/Plataforma": "SIMGeo / unidade de geoprocessamento",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Modelo de unidade interna de governanÃ§a geoespacial com atribuiÃ§Ãµes claras.",
    "Fonte oficial / URL": "https://www.joinville.sc.gov.br/institucional/sepur/upd/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Joinville",
    "UF": "SC",
    "LocalizaÃ§Ã£o": "Joinville",
    "Projeto/Sistema": "Downloads SIMGeo",
    "Ãrea de aplicaÃ§Ã£o": "Base cartogrÃ¡fica / meio ambiente / mapas temÃ¡ticos",
    "Finalidade/Como utiliza o georreferenciamento": "DisponibilizaÃ§Ã£o de produtos georreferenciados, aerofotogrametria, mapas, shapefiles e cartas temÃ¡ticas para download.",
    "Tecnologia/Plataforma": "Shapefile / PDF / DWG",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Modelo para disponibilizar bases da COMLURB em camadas padronizadas e reaproveitÃ¡veis.",
    "Fonte oficial / URL": "https://www.joinville.sc.gov.br/publicacoes/downloads-sistema-de-informacoes-municipais-georreferenciadas-simgeo/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Londrina",
    "UF": "PR",
    "LocalizaÃ§Ã£o": "Londrina",
    "Projeto/Sistema": "SIGLON",
    "Ãrea de aplicaÃ§Ã£o": "Banco de dados geogrÃ¡fico municipal",
    "Finalidade/Como utiliza o georreferenciamento": "Portal de informaÃ§Ãµes fÃ­sicas e socioeconÃ´micas em banco de dados geogrÃ¡fico, permitindo georreferenciar dados em qualquer ponto do municÃ­pio.",
    "Tecnologia/Plataforma": "SIGLON / SIG web",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Exemplo de banco geogrÃ¡fico municipal para integraÃ§Ã£o multiÃ¡rea.",
    "Fonte oficial / URL": "https://portal.londrina.pr.gov.br/o-que-e-siglon"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Londrina",
    "UF": "PR",
    "LocalizaÃ§Ã£o": "Londrina",
    "Projeto/Sistema": "Plano Diretor de Geoprocessamento - PDGeo",
    "Ãrea de aplicaÃ§Ã£o": "GovernanÃ§a / normatizaÃ§Ã£o de dados geoespaciais",
    "Finalidade/Como utiliza o georreferenciamento": "Plano para implementar e consolidar cultura de inteligÃªncia geogrÃ¡fica e normatizar dados produzidos por secretarias e Ã³rgÃ£os municipais.",
    "Tecnologia/Plataforma": "PDGeo / INDE",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Muito aplicÃ¡vel para criar diretriz interna COMLURB/SIURB sobre padrÃµes, camadas e responsabilidades.",
    "Fonte oficial / URL": "https://portal.londrina.pr.gov.br/plano-diretor-de-geoprocessamento-siglon"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de GoiÃ¢nia",
    "UF": "GO",
    "LocalizaÃ§Ã£o": "GoiÃ¢nia",
    "Projeto/Sistema": "Mapa Geo 360Â° GoiÃ¢nia",
    "Ãrea de aplicaÃ§Ã£o": "Cadastro urbano / loteamentos / Ã¡reas pÃºblicas",
    "Finalidade/Como utiliza o georreferenciamento": "ServiÃ§o de geoprocessamento para atualizaÃ§Ã£o de mapa, inserÃ§Ã£o de loteamentos, cadastro de bairros, logradouros e Ã¡reas pÃºblicas; exige plantas georreferenciadas.",
    "Tecnologia/Plataforma": "Mapa Geo 360Â° / SIGGO",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "ReferÃªncia para atualizaÃ§Ã£o cadastral de Ã¡reas pÃºblicas, praÃ§as e logradouros.",
    "Fonte oficial / URL": "https://www.goiania.go.gov.br/sing_servicos/geoprocessamento/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de GoiÃ¢nia",
    "UF": "GO",
    "LocalizaÃ§Ã£o": "GoiÃ¢nia",
    "Projeto/Sistema": "GerÃªncia de Geoprocessamento - SEFAZ",
    "Ãrea de aplicaÃ§Ã£o": "Cadastro imobiliÃ¡rio / vistoria fiscal",
    "Finalidade/Como utiliza o georreferenciamento": "CompetÃªncia para base cartogrÃ¡fica digital, mapas temÃ¡ticos, interfaces de consulta/anÃ¡lise, imagens geogrÃ¡ficas e apoio ao cadastro imobiliÃ¡rio e vistoria fiscal.",
    "Tecnologia/Plataforma": "SIGGO / imagens geogrÃ¡ficas",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "AplicÃ¡vel Ã  fiscalizaÃ§Ã£o de campo, validaÃ§Ã£o de ativos urbanos e apoio a vistorias.",
    "Fonte oficial / URL": "https://www.goiania.go.gov.br/sefaz/departamentos/gerencia-de-geoprocessamento/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de SÃ£o JosÃ© dos Campos",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "SÃ£o JosÃ© dos Campos",
    "Projeto/Sistema": "GeoSanja",
    "Ãrea de aplicaÃ§Ã£o": "Banco de dados geogrÃ¡ficos / dados abertos",
    "Finalidade/Como utiliza o georreferenciamento": "Portal de dados geogrÃ¡ficos do municÃ­pio, com desenvolvimento interno, software livre, acesso aberto, mÃºltiplos formatos e acervo histÃ³rico de imagens.",
    "Tecnologia/Plataforma": "GeoSanja / software livre",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Exemplo forte para plataforma municipal de dados geogrÃ¡ficos com baixo custo e alto acesso pÃºblico.",
    "Fonte oficial / URL": "https://www.sjc.sp.gov.br/noticias/2025/agosto/14/geosanja-alcanca-1-milhao-de-acessos-e-se-destaca-no-brasil/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de SÃ£o JosÃ© dos Campos",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "SÃ£o JosÃ© dos Campos",
    "Projeto/Sistema": "GeoSanja - fiscalizaÃ§Ã£o",
    "Ãrea de aplicaÃ§Ã£o": "FiscalizaÃ§Ã£o urbana / terrenos / resÃ­duos",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de imagens georreferenciadas e informaÃ§Ãµes de imÃ³veis para fiscalizar mato alto, sujeira e despejo irregular de entulhos/lixo em terrenos particulares, reduzindo vistorias in loco.",
    "Tecnologia/Plataforma": "GeoSanja / imagens georreferenciadas",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Muito aderente Ã  fiscalizaÃ§Ã£o de descarte irregular, lixo em terrenos e apoio ao 1746.",
    "Fonte oficial / URL": "https://www.sjc.sp.gov.br/noticias/2021/abril/22/fiscalizacao-inova-com-uso-da-ferramenta-geosanja/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de SÃ£o JosÃ© dos Campos",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "SÃ£o JosÃ© dos Campos",
    "Projeto/Sistema": "Georreferenciamento de bocas de lobo",
    "Ãrea de aplicaÃ§Ã£o": "Drenagem urbana / manutenÃ§Ã£o preventiva",
    "Finalidade/Como utiliza o georreferenciamento": "Registro georreferenciado de bocas de lobo e limpeza de galerias para mapear equipamentos, medir necessidade de retorno e criar cronograma preventivo contra alagamentos.",
    "Tecnologia/Plataforma": "Georreferenciamento de campo / SIG municipal",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Caso quase idÃªntico Ã  lÃ³gica de OS digitais, manutenÃ§Ã£o preventiva e produtividade por territÃ³rio.",
    "Fonte oficial / URL": "https://www.sjc.sp.gov.br/noticias/2025/setembro/18/geoprocessamento-ja-cadastrou-mais-de-1500-bocas-de-lobo/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de SÃ£o JosÃ© dos Campos",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "SÃ£o JosÃ© dos Campos",
    "Projeto/Sistema": "Geoprocessamento urbano",
    "Ãrea de aplicaÃ§Ã£o": "Mapas, plantas, cartas topogrÃ¡ficas e aerofotogrametria",
    "Finalidade/Como utiliza o georreferenciamento": "Processamento de dados georreferenciados, manipulaÃ§Ã£o e geraÃ§Ã£o de informaÃ§Ãµes associadas a coordenadas em base cartogrÃ¡fica e SIG.",
    "Tecnologia/Plataforma": "SIG / aerofotogrametria",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "ReferÃªncia tÃ©cnica para estruturaÃ§Ã£o de base cartogrÃ¡fica e camadas operacionais.",
    "Fonte oficial / URL": "https://siteprefeitura.sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/planejamento-urbano/mapas-cartas-plantas-e-aerofotogrametria/geoprocessamento/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de NiterÃ³i",
    "UF": "RJ",
    "LocalizaÃ§Ã£o": "NiterÃ³i",
    "Projeto/Sistema": "SIGeo / Data Lake / GÃªmeo Digital",
    "Ãrea de aplicaÃ§Ã£o": "TransformaÃ§Ã£o digital / planejamento urbano",
    "Finalidade/Como utiliza o georreferenciamento": "Integra bases georreferenciadas para apoiar polÃ­ticas pÃºblicas; desenvolvimento de Data Lake municipal e projeto de GÃªmeo Digital.",
    "Tecnologia/Plataforma": "SIGeo / Data Lake / GÃªmeo Digital",
    "Potencial COMLURB": "Muito alta",
    "Como pode inspirar a COMLURB": "Fortemente alinhado ao SIURB, CICO e visÃ£o de gÃªmeo digital da operaÃ§Ã£o COMLURB.",
    "Fonte oficial / URL": "https://www.fazenda.niteroi.rj.gov.br/site/dtec-e-serec-da-smf-marcam-presenca-no-geo-dados-evento-sobre-gestao-digital-e-geoinformacao/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de NiterÃ³i",
    "UF": "RJ",
    "LocalizaÃ§Ã£o": "NiterÃ³i",
    "Projeto/Sistema": "EGP Nit - gestÃ£o do SIGEO",
    "Ãrea de aplicaÃ§Ã£o": "GestÃ£o de projetos / geoprocessamento",
    "Finalidade/Como utiliza o georreferenciamento": "Estrutura municipal com equipe de geoprocessamento que efetua a gestÃ£o do SIGEO - Sistema de GeoinformaÃ§Ãµes de NiterÃ³i.",
    "Tecnologia/Plataforma": "SIGEO",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Modelo de governanÃ§a institucional vinculada a projetos estratÃ©gicos e gabinete.",
    "Fonte oficial / URL": "https://www.egp.niteroi.rj.gov.br/o-egp/"
  },
  {
    "Ã“rgÃ£o": "Governo do Estado de SÃ£o Paulo - SEMIL",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "Estado de SÃ£o Paulo",
    "Projeto/Sistema": "MAIS - Monitoramento Ambiental por Imagens de SatÃ©lite",
    "Ãrea de aplicaÃ§Ã£o": "FiscalizaÃ§Ã£o ambiental / vegetaÃ§Ã£o nativa",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de imagens de satÃ©lite e anÃ¡lise de dados geoespaciais para identificar alteraÃ§Ãµes na vegetaÃ§Ã£o nativa e orientar fiscalizaÃ§Ã£o ambiental em todo o estado.",
    "Tecnologia/Plataforma": "Sensoriamento remoto / dados geoespaciais",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Inspira monitoramento de Ã¡reas verdes, supressÃ£o vegetal e apoio Ã  poda/arborizaÃ§Ã£o.",
    "Fonte oficial / URL": "https://semil.sp.gov.br/2026/03/estado-amplia-monitoramento-ambiental-por-satelite-e-reforca-fiscalizacao-em-todo-o-territorio-paulista/"
  },
  {
    "Ã“rgÃ£o": "Governo do Estado de SÃ£o Paulo - CETESB/SEMIL",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "Estado de SÃ£o Paulo",
    "Projeto/Sistema": "Monitoramento por satÃ©lite e IA dos rios TietÃª e Pinheiros",
    "Ãrea de aplicaÃ§Ã£o": "Qualidade da Ã¡gua / fiscalizaÃ§Ã£o ambiental",
    "Finalidade/Como utiliza o georreferenciamento": "Imagens de satÃ©lite de alta resoluÃ§Ã£o e IA para monitorar cerca de 1.000 km de rios, identificar alteraÃ§Ãµes e gerar alertas automÃ¡ticos.",
    "Tecnologia/Plataforma": "SatÃ©lite / IA / alertas automÃ¡ticos",
    "Potencial COMLURB": "Baixa",
    "Como pode inspirar a COMLURB": "Exemplo de monitoramento automatizado para geraÃ§Ã£o de alertas territoriais.",
    "Fonte oficial / URL": "https://semil.sp.gov.br/2026/06/tiete-e-pinheiros-passam-a-ser-monitorados-por-satelite-e-ia/"
  },
  {
    "Ã“rgÃ£o": "Governo de Mato Grosso do Sul - IMASUL",
    "UF": "MS",
    "LocalizaÃ§Ã£o": "Estado de Mato Grosso do Sul",
    "Projeto/Sistema": "UNIGEO / Sala de SituaÃ§Ã£o",
    "Ãrea de aplicaÃ§Ã£o": "Monitoramento ambiental / desmatamento / queimadas",
    "Finalidade/Como utiliza o georreferenciamento": "Unidade de Geoprocessamento com inteligÃªncia geoespacial para detecÃ§Ã£o automatizada de desmatamentos e queimadas em todo o territÃ³rio estadual.",
    "Tecnologia/Plataforma": "UNIGEO / satÃ©lite / automaÃ§Ã£o",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Modelo de sala de situaÃ§Ã£o para monitoramento territorial e tomada de decisÃ£o operacional.",
    "Fonte oficial / URL": "https://agenciadenoticias.ms.gov.br/com-tecnologia-inedita-ms-tem-monitoramento-ambiental-para-identificar-desmatamento-e-queimadas/"
  },
  {
    "Ã“rgÃ£o": "Governo de Mato Grosso do Sul - IMASUL",
    "UF": "MS",
    "LocalizaÃ§Ã£o": "Estado de Mato Grosso do Sul",
    "Projeto/Sistema": "MADES e MAQUES",
    "Ãrea de aplicaÃ§Ã£o": "Alertas de desmatamento e queimadas",
    "Finalidade/Como utiliza o georreferenciamento": "Plataformas com inteligÃªncia geoespacial, sensoriamento remoto, imagens de satÃ©lite de alta resoluÃ§Ã£o e integraÃ§Ã£o de bases para fiscalizaÃ§Ã£o ambiental.",
    "Tecnologia/Plataforma": "MADES / MAQUES / sensoriamento remoto",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Inspira alertas automÃ¡ticos para descarte irregular, podas emergenciais e Ã¡reas crÃ­ticas.",
    "Fonte oficial / URL": "https://agenciadenoticias.ms.gov.br/para-reforcar-monitoramento-ambiental-em-ms-governo-do-estado-lanca-novas-plataformas-tecnologicas/"
  },
  {
    "Ã“rgÃ£o": "FEPAM - Governo do Rio Grande do Sul",
    "UF": "RS",
    "LocalizaÃ§Ã£o": "Estado do Rio Grande do Sul",
    "Projeto/Sistema": "ServiÃ§o de InteligÃªncia Geoespacial / SIG",
    "Ãrea de aplicaÃ§Ã£o": "Licenciamento e monitoramento ambiental",
    "Finalidade/Como utiliza o georreferenciamento": "Coordena padrÃµes, processamento e anÃ¡lise de dados geoespaciais; apoia licenciamento, monitoramento ambiental, bases web e dados para download em shapefile.",
    "Tecnologia/Plataforma": "SIG / Shapefile / dados geoespaciais",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "ReferÃªncia para normatizaÃ§Ã£o, capacitaÃ§Ã£o e suporte geoespacial institucional.",
    "Fonte oficial / URL": "https://www.fepam.rs.gov.br/geoprocessamento"
  },
  {
    "Ã“rgÃ£o": "IBGE",
    "UF": "Brasil",
    "LocalizaÃ§Ã£o": "Nacional",
    "Projeto/Sistema": "Entorno dos domicÃ­lios / caracterÃ­sticas urbanÃ­sticas",
    "Ãrea de aplicaÃ§Ã£o": "Infraestrutura urbana / estatÃ­sticas territoriais",
    "Finalidade/Como utiliza o georreferenciamento": "Mapeamento de arborizaÃ§Ã£o, iluminaÃ§Ã£o pÃºblica, calÃ§adas, drenagem, acessibilidade e demais caracterÃ­sticas urbanÃ­sticas do entorno dos domicÃ­lios.",
    "Tecnologia/Plataforma": "GeociÃªncias / estatÃ­sticas georreferenciadas",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Base comparativa para indicadores territoriais de limpeza urbana, calÃ§adas, arborizaÃ§Ã£o e infraestrutura.",
    "Fonte oficial / URL": "https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html"
  },
  {
    "Ã“rgÃ£o": "Governo Federal",
    "UF": "Brasil",
    "LocalizaÃ§Ã£o": "Nacional",
    "Projeto/Sistema": "INDE / GeoinformaÃ§Ã£o",
    "Ãrea de aplicaÃ§Ã£o": "Infraestrutura Nacional de Dados Espaciais",
    "Finalidade/Como utiliza o georreferenciamento": "Diretrizes para facilitar e ordenar geraÃ§Ã£o, armazenamento, acesso, compartilhamento, disseminaÃ§Ã£o e uso de dados geoespaciais oficiais.",
    "Tecnologia/Plataforma": "INDE / geoinformaÃ§Ã£o",
    "Potencial COMLURB": "Alta",
    "Como pode inspirar a COMLURB": "Base normativa para justificar padronizaÃ§Ã£o de dados geoespaciais na COMLURB e integraÃ§Ã£o ao SIURB.",
    "Fonte oficial / URL": "https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/geoinformacao"
  },
  {
    "Ã“rgÃ£o": "Prefeitura do Rio de Janeiro",
    "UF": "RJ",
    "LocalizaÃ§Ã£o": "Rio de Janeiro",
    "Projeto/Sistema": "DATA.Rio / SIURB.RIO",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento, integraÃ§Ã£o e disseminaÃ§Ã£o de informaÃ§Ãµes municipais",
    "Finalidade/Como utiliza o georreferenciamento": "Portal DATA.Rio integra modelo de planejamento, gestÃ£o e disseminaÃ§Ã£o de informaÃ§Ãµes da Prefeitura; SIURB.RIO Ã© a infraestrutura urbana municipal de dados espaciais.",
    "Tecnologia/Plataforma": "DATA.Rio / SIURB.RIO",
    "Potencial COMLURB": "Muito alta",
    "Como pode inspirar a COMLURB": "Ã‰ o ecossistema natural para integrar COMLURB, ArcGIS, CICO, 1746 e dashboards territoriais.",
    "Fonte oficial / URL": "https://www.rio.rj.gov.br/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Campinas",
    "UF": "SP",
    "LocalizaÃ§Ã£o": "Campinas",
    "Projeto/Sistema": "Geoportal / geoprocessamento municipal",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento urbano / cadastro territorial",
    "Finalidade/Como utiliza o georreferenciamento": "Uso municipal de geotecnologias para mapas, bases cartogrÃ¡ficas e planejamento territorial. Necessita validaÃ§Ã£o complementar em fonte oficial especÃ­fica para detalhamento de sistema.",
    "Tecnologia/Plataforma": "SIG municipal",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "Potencial de comparaÃ§Ã£o com gestÃ£o urbana de cidade grande; item marcado para validaÃ§Ã£o adicional.",
    "Fonte oficial / URL": "https://campinas.sp.gov.br/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Curitiba",
    "UF": "PR",
    "LocalizaÃ§Ã£o": "Curitiba",
    "Projeto/Sistema": "Geoprocessamento municipal / IPPUC",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento urbano / mobilidade / infraestrutura",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de bases geogrÃ¡ficas e planejamento urbano pelo municÃ­pio; item incluÃ­do por relevÃ¢ncia histÃ³rica em planejamento urbano, com validaÃ§Ã£o complementar recomendada em portal especÃ­fico.",
    "Tecnologia/Plataforma": "SIG / planejamento urbano",
    "Potencial COMLURB": "MÃ©dia",
    "Como pode inspirar a COMLURB": "ReferÃªncia para urbanismo, roteirizaÃ§Ã£o e indicadores territoriais, com necessidade de aprofundar fonte oficial.",
    "Fonte oficial / URL": "https://www.curitiba.pr.gov.br/"
  },
  {
    "Ã“rgÃ£o": "Prefeitura de Porto Alegre",
    "UF": "RS",
    "LocalizaÃ§Ã£o": "Porto Alegre",
    "Projeto/Sistema": "Geoprocessamento municipal",
    "Ãrea de aplicaÃ§Ã£o": "Planejamento urbano / dados espaciais municipais",
    "Finalidade/Como utiliza o georreferenciamento": "Uso de informaÃ§Ãµes geogrÃ¡ficas para planejamento e gestÃ£o municipal; item incluÃ­do para continuidade da varredura em capitais brasileiras.",
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
    case "MÃ©dia":
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
        row["Ã“rgÃ£o"].toLowerCase().includes(searchLower) ||
        row["Projeto/Sistema"].toLowerCase().includes(searchLower) ||
        row["LocalizaÃ§Ã£o"].toLowerCase().includes(searchLower) ||
        row["Ãrea de aplicaÃ§Ã£o"].toLowerCase().includes(searchLower)
      );
    });

    // Ordenar por potencial (Muito alta > Alta > MÃ©dia > Baixa)
    const potentialOrder = { "Muito alta": 0, "Alta": 1, "MÃ©dia": 2, "Baixa": 3 };
    filtered.sort((a, b) => {
      if (sortBy === "potential") {
        return (potentialOrder[a["Potencial COMLURB"] as keyof typeof potentialOrder] ?? 4) -
               (potentialOrder[b["Potencial COMLURB"] as keyof typeof potentialOrder] ?? 4);
      } else if (sortBy === "state") {
        return a["UF"].localeCompare(b["UF"]);
      } else {
        return a["Ã“rgÃ£o"].localeCompare(b["Ã“rgÃ£o"]);
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
      {/* BotÃ£o Voltar - Topo Esquerdo */}
      <button
        onClick={() => setLocation('/')}
        className="fixed top-4 left-4 z-40 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-md hover:shadow-lg text-gray-700 font-medium"
      >
        <ChevronLeft size={20} />
        <span>Voltar</span>
      </button>

      {/* Header com vÃ­deo */}
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
            <h1 className="text-5xl font-bold mb-4">GeointeligÃªncia em outras Prefeituras</h1>
            <p className="text-xl opacity-90">
              Veja como outras cidades aplicam geointeligÃªncia e os resultados alcanÃ§ados.
            </p>
          </div>
        </div>
      </div>

      {/* ConteÃºdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* SeÃ§Ã£o de busca e filtros */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar por prefeitura, projeto, localizaÃ§Ã£o ou Ã¡rea de aplicaÃ§Ã£o..."
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
              const key = row["Ã“rgÃ£o"];
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
                  {/* Linha principal - clicÃ¡vel */}
                  <button
                    onClick={() => toggleRow(mainIndex)}
                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{data.prefeitura["Ã“rgÃ£o"]}</h3>
                        <p className="text-sm text-gray-600">{data.prefeitura["LocalizaÃ§Ã£o"]}</p>
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

                  {/* ConteÃºdo expandido - lista de projetos */}
                  {isExpanded && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-4">
                      {data.projetos.map((projeto: LevantamentoRow, projIndex: number) => (
                        <div key={projIndex} className={projIndex > 0 ? "pt-4 border-t border-gray-300" : ""}>
                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900">{projeto["Projeto/Sistema"]}</h4>
                            <p className="text-sm text-gray-600 mt-1">{projeto["Ãrea de aplicaÃ§Ã£o"]}</p>
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
