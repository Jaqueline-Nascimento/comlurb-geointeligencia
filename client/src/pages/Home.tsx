import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe, Zap, Users, TrendingUp, MapPin, Brain, ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import React, { useState } from "react";

export default function Home() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="hidden md:flex items-center gap-8">
            <a href="https://jaqueline-nascimento.github.io/relatorioMundoGeo/?v=ae98227" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">RelatÃ³rio completo</a>
            <a href="https://comlurb-insight.lovable.app/cursos" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">HUB</a>
            <a href="/projetos" className="text-sm text-muted-foreground hover:text-foreground transition">Projetos</a>
            <a href="/apresentacao-presidencia" className="text-sm text-muted-foreground hover:text-foreground transition">ApresentaÃ§Ã£o para presidÃªncia</a>
            <a href="/benchmarking" className="text-sm text-muted-foreground hover:text-foreground transition">Benchmarking</a>
            <a href="/geoia" className="text-sm text-muted-foreground hover:text-foreground transition">SIURB</a>
            <a href="/insights" className="text-sm text-muted-foreground hover:text-foreground transition">PercepÃ§Ãµes</a>
            <a href="#participantes" className="text-sm text-muted-foreground hover:text-foreground transition">Participantes</a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4 p-4">
              <a href="https://jaqueline-nascimento.github.io/relatorioMundoGeo/?v=ae98227" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>RelatÃ³rio completo</a>
              <a href="https://comlurb-insight.lovable.app/cursos" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>HUB</a>
              <a href="/projetos" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
              <a href="/apresentacao-presidencia" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>ApresentaÃ§Ã£o para presidÃªncia</a>
              <a href="/benchmarking" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Benchmarking</a>
              <a href="/geoia" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>SIURB</a>
              <a href="/insights" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>PercepÃ§Ãµes</a>
              <a href="#participantes" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Participantes</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden text-white py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(assets/media/hero-geointeligencia_8fe6595f.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/15 to-slate-900/10"></div>
        
        {/* Logo Prefeitura RIO + COMLURB - Top Right */}
        <div className="absolute top-6 right-6 z-20 md:w-64 w-48">
          <img 
            src="assets/media/logo-rio-comlurb-dark_420b1041.jpg" 
            alt="Prefeitura RIO - COMLURB"
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">GeointeligÃªncia em ServiÃ§os e Limpeza Urbana</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A GeointeligÃªncia Urbana serve para transformar dados complexos em mapas e rotas operacionais, auxiliando governos e empresas na gestÃ£o do territÃ³rio, melhoria da infraestrutura e tomada de decisÃµes rÃ¡pidas e assertivas.
            </p>

          </div>
        </div>
      </section>

      {/* Bloco MundoGEO Connect 2026 - ContextualizaÃ§Ã£o */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-3 items-center">
            {/* VÃ­deo Ã  Esquerda */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <video
                  className="w-full h-auto rounded-lg shadow-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="assets/media/WhatsAppVideo2026-06-25at04.53.33_3a985b3d.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Texto no Centro */}
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">MundoGEO Connect 2026</h2>
              
              <div className="space-y-1.5 text-sm text-gray-700 leading-relaxed">
                <p>
                  A COMLURB marcou presenÃ§a na MundoGEO Connect 2026, o maior evento de tecnologia geoespacial da AmÃ©rica Latina, realizado em SÃ£o Paulo. A Companhia acompanhou de perto as principais tendÃªncias globais em inteligÃªncia geogrÃ¡fica, integraÃ§Ã£o de dados e o uso de InteligÃªncia Artificial (IA) aplicada ao setor pÃºblico.
                </p>
                
                <p>
                  A participaÃ§Ã£o no evento reforÃ§a o compromisso da COMLURB com a transformaÃ§Ã£o digital e a gestÃ£o baseada em evidÃªncias. Durante os trÃªs dias, nossa equipe pÃ´de conhecer soluÃ§Ãµes inovadoras de monitoramento, trocar experiÃªncias com grandes especialistas do setor e identificar oportunidades valiosas para aprimorar os sistemas que jÃ¡ utilizamos no dia a dia da nossa cidade.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-2 italic text-xs text-gray-800">
                  "A experiÃªncia nos permitiu vislumbrar novas ferramentas para fortalecer a integraÃ§Ã£o de dados geoespaciais, otimizar o planejamento operacional e garantir entregas cada vez mais eficientes e sustentÃ¡veis para a populaÃ§Ã£o do Rio de Janeiro."
                </div>
                
                <p>
                  Com os insights trazidos do evento, a COMLURB segue firme no propÃ³sito de usar a tecnologia como aliada estratÃ©gica, transformando dados em decisÃµes inteligentes que impactam diretamente a zeladoria e a limpeza urbana da nossa cidade.
                </p>
              </div>
            </div>

            {/* VÃ­deo Ã  Direita */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <video
                  className="w-full h-auto rounded-lg shadow-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="assets/media/WhatsAppVideo2026-06-25at05.23.42_ad550378.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o de Abertura - A Isca */}
      <section className="py-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto Ã  Esquerda */}
            <div className="space-y-4">
              <p className="text-base text-white leading-relaxed text-justify">
                Deixar de ter operaÃ§Ãµes reativas e dados dispersos para ter aÃ§Ãµes preditivas.
              </p>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <p className="text-base text-white leading-relaxed text-justify">
                  Fazer o carioca feliz e orgulhoso com a antecipaÃ§Ã£o dos problemas. AnÃ¡lises preditivas resultarÃ£o em uma cidade mais limpa, sendo reconhecida como a capital que analisa dados em tempo real e age cirurgicamente sem desperdÃ­cio de recursos.
                </p>
              </div>
            </div>
            
            {/* VÃ­deo Ã  Direita */}
            <div className="flex justify-center">
              <video 
                className="w-full h-auto rounded-lg" 
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source src="assets/media/Pippit_20260621_Cleaning_V2_d4df2970.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de NavegaÃ§Ã£o - MÃ³dulos Principais */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Card 1 - O que Ã© MundoGEO */}
            <div 
              onClick={() => navigate('/mundogeo')}
              className="relative overflow-hidden rounded-lg border-2 border-green-600 cursor-pointer group h-64"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028691309/9JRRkzoyMYLptPPRXBm35g/card-mundogeo-bg-8YBCdxM9ug5Lt4u5cMjUWr.webp)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-colors duration-300" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-3 text-white">O que Ã© MundoGEO</h3>
                <p className="text-slate-200 text-sm">ConheÃ§a o maior congresso de geotecnologia da AmÃ©rica Latina e sua relevÃ¢ncia para a COMLURB.</p>
              </div>
            </div>
            
            {/* Card 2 - Cursos que Participamos */}
            <div 
              onClick={() => navigate('/cursos')}
              className="relative overflow-hidden rounded-lg border-2 border-blue-600 cursor-pointer group h-64"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028691309/9JRRkzoyMYLptPPRXBm35g/card-cursos-bg-aqpJdF9QEFqaNZqQBBtSnW.webp)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-colors duration-300" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-3 text-white">Cursos que Participamos</h3>
                <p className="text-slate-200 text-sm">Explore os 4 cursos tÃ©cnicos realizados e o conhecimento estratÃ©gico adquirido.</p>
              </div>
            </div>
            
            {/* Card 3 - Palestras que Assistimos */}
            <div 
              onClick={() => navigate('/palestras')}
              className="relative overflow-hidden rounded-lg border-2 border-purple-600 cursor-pointer group h-64"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028691309/9JRRkzoyMYLptPPRXBm35g/card-palestras-bg-FMjAxJjEANvi9yznhcUAtE.webp)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-colors duration-300" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-3 text-white">Palestras que Assistimos</h3>
                <p className="text-slate-200 text-sm">Confira as 11 palestras e painÃ©is tÃ©cnicos que transformam a gestÃ£o urbana.</p>
              </div>
            </div>
            
            {/* Card 4 - GeointeligÃªncia em outras prefeituras */}
            <div 
              onClick={() => navigate('/geointeligencia')}
              className="relative overflow-hidden rounded-lg border-2 border-teal-600 cursor-pointer group h-64"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028691309/9JRRkzoyMYLptPPRXBm35g/card-geointeligencia-bg-a9Y7Gyr9jmQf2LoS2yA9tP.webp)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-colors duration-300" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-3 text-white">GeointeligÃªncia em outras Prefeituras</h3>
                <p className="text-slate-200 text-sm">Veja como outras cidades aplicam geointeligÃªncia e os resultados alcanÃ§ados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o O TripÃ© da GestÃ£o Inteligente */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              O TripÃ© da GestÃ£o Inteligente: CÃ©rebro, Corpo e Sentidos
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              A COMLURB tem conhecimento profundo do territÃ³rio, presenÃ§a diÃ¡ria nas ruas e equipes distribuÃ­das pela cidade. Conectar esses ativos com tecnologias complementares que funcionam como um sistema nervoso central. Essas trÃªs tecnologias sÃ£o a base para uma gestÃ£o urbana que antecipa problemas, reduz custos operacionais e entrega melhores resultados para a cidade.
            </p>
          </div>
          
          {/* 3 Cards do TripÃ© */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - GeoIA */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-green-500 rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl mb-4 text-green-400">ðŸ§ </div>
              <h3 className="text-2xl font-bold text-white mb-4">GeoIA (InteligÃªncia Artificial Geoespacial)</h3>
              <p className="text-slate-300 leading-relaxed">
                Ã‰ o "cÃ©rebro" que interpreta o mapa e devolve insights permitindo que a gestÃ£o da limpeza, das Ã¡reas verdes e qualquer outro serviÃ§o seja feita com precisÃ£o cirÃºrgica, otimizaÃ§Ã£o, tempo de equipe e recursos pÃºblicos.
              </p>
            </div>
            
            {/* Card 2 - GÃªmeos Digitais */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-blue-500 rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl mb-4 text-blue-400">ðŸŒ</div>
              <h3 className="text-2xl font-bold text-white mb-4">GÃªmeos Digitais</h3>
              <p className="text-slate-300 leading-relaxed">
                Se a GeoIA diz Ã  sua empresa quando e onde agir, o GÃªmeo Digital mostra como a aÃ§Ã£o vai impactar o mundo real.
              </p>
            </div>
            
            {/* Card 3 - IoT */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-purple-500 rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl mb-4 text-purple-400">âš¡</div>
              <h3 className="text-2xl font-bold text-white mb-4">IoT - Internet das Coisas</h3>
              <p className="text-slate-300 leading-relaxed">
                A IoT elimina a necessidade de "ir lÃ¡ ver", pois o objeto "avisa" ao sistema como ele estÃ¡. Se a GeoIA Ã© o "cÃ©rebro" e o GÃªmeo Digital Ã© o "corpo", a Internet das Coisas (IoT) representa os "sentidos" do sistema.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Cards Interativos - BenefÃ­cios EstratÃ©gicos */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">BenefÃ­cios EstratÃ©gicos da GeointeligÃªncia</h2>
          
          {/* Primeira Fileira - 4 Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {/* Card 1 - O Custo de NÃ£o Inovar */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">O Custo de NÃ£o Inovar</h3>
                <p className="text-sm leading-relaxed">Em limpeza urbana, a falta de geointeligÃªncia resulta em operaÃ§Ãµes sem visibilidade: rotas nÃ£o otimizadas geram congestionamento operacional, deslocamentos atÃ© vazadouro sem planejamento aumentam hora extra, e custos crescem sem controle. Prefeituras que implementam geointeligÃªncia conseguem previsibilidade orÃ§amentÃ¡ria e eficiÃªncia operacional. A pergunta nÃ£o Ã© se vocÃª pode inovar, mas quanto custa nÃ£o fazer isso.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-green-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">ðŸ’°</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">O Custo de NÃ£o Inovar</h3>
                <p className="text-sm text-muted-foreground mt-2">Qual o custo de nÃ£o ter o custo on time?</p>
              </div>
            </div>

            {/* Card 2 - EficiÃªncia Operacional */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">EficiÃªncia Operacional</h3>
                <p className="text-sm leading-relaxed">Transformar o invisÃ­vel em visÃ­vel: mapear densidade de resÃ­duos em tempo real, rastrear cada tonelada atÃ© destinaÃ§Ã£o final, mensura impacto ambiental. Resultado: operaÃ§Ãµes baseadas em dados, nÃ£o em intuiÃ§Ã£o.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-blue-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">âš¡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">EficiÃªncia Operacional</h3>
                <p className="text-sm text-muted-foreground mt-2">Do invisÃ­vel ao acionÃ¡vel</p>
              </div>
            </div>

            {/* Card 3 - FiscalizaÃ§Ã£o Inteligente */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">FiscalizaÃ§Ã£o Inteligente</h3>
                <p className="text-sm leading-relaxed">IA detecta descarte irregular 24/7. Sensores monitoram ativos sem vistoria humana. Resposta em tempo real.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-purple-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">ðŸ”</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">FiscalizaÃ§Ã£o Inteligente</h3>
                <p className="text-sm text-muted-foreground mt-2">Monitoramento 24/7</p>
              </div>
            </div>

            {/* Card 4 - Sustentabilidade */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Sustentabilidade</h3>
                <p className="text-sm leading-relaxed">GeointeligÃªncia transforma aterro de passivo ambiental em ativo produtivo: monitora biogÃ¡s em tempo real para geraÃ§Ã£o de energia limpa, reduz emissÃµes de metano, rastreia cada tonelada de resÃ­duo atÃ© reciclagem. Coleta seletiva inteligente com contentÃ³res conectados otimiza fluxo. Compostagem comunitÃ¡ria e biodiegestores convertem orgÃ¢nicos em recursos. Resultado: rumo a lixo zero com dados que comprovam impacto ambiental real.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-emerald-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">ðŸŒ±</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Sustentabilidade</h3>
                <p className="text-sm text-muted-foreground mt-2">De passivo a ativo ambiental</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* IntegraÃ§Ã£o de Dados Passa Primeiro Pela IntegraÃ§Ã£o de Pessoas */}
      <section className="py-8 bg-slate-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">IntegraÃ§Ã£o de dados passa primeiro pela integraÃ§Ã£o de pessoas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">O Pilar da IntegraÃ§Ã£o</h3>
              <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                A transformaÃ§Ã£o digital da COMLURB nÃ£o Ã© apenas sobre tecnologia, mas sobre integraÃ§Ã£o. Unificar SICO e SIURB, publicar dados abertos, e capacitar pessoas sÃ£o os pilares do sucesso.
              </p>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">ðŸ”—</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0 text-sm">IntegraÃ§Ã£o de Dados</h3>
                    <p className="text-slate-400 text-xs">Unificar sistemas legados em uma plataforma moderna e escalÃ¡vel.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">ðŸ“Š</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0 text-sm">Dados Abertos</h3>
                    <p className="text-slate-400 text-xs">Publicar dados para transparÃªncia e inovaÃ§Ã£o externa.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">ðŸ‘¥</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0 text-sm">CapacitaÃ§Ã£o</h3>
                    <p className="text-slate-400 text-xs">Treinar equipes para operar e inovar com as novas ferramentas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600">
              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-white">A capacitaÃ§Ã£o Ã© o pilar da transformaÃ§Ã£o digital</p>
              </div>
              
              {/* Timeline Vertical */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                        <span className="text-lg">ðŸŽ“</span>
                      </div>
                      <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 mt-1"></div>
                    </div>
                    <div className="pt-1 pb-2">
                      <h4 className="text-sm font-bold text-white mb-1">TransformaÃ§Ã£o de Talentos</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">Programas de treinamento em IA, GIS, anÃ¡lise de dados e operaÃ§Ã£o de sistemas inteligentes.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                        <span className="text-lg">ðŸ“Š</span>
                      </div>
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mt-1"></div>
                    </div>
                    <div className="pt-1 pb-2">
                      <h4 className="text-sm font-bold text-white mb-1">Mentalidade de Dados</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">Cultura organizacional orientada por dados, decisÃµes baseadas em evidÃªncias, inovaÃ§Ã£o contÃ­nua.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                        <span className="text-lg">ðŸš€</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-white mb-1">InovaÃ§Ã£o ContÃ­nua</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">Equipes empoderadas para experimentar, aprender e escalar soluÃ§Ãµes que funcionam.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* AnÃ¡lise Comparativa */}
      <section id="roadmap" className="py-20 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Caminho para Smart Sanitation Global</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">VisÃ£o estratÃ©gica de 5 anos para transformar a COMLURB em referÃªncia mundial em geointeligÃªncia urbana e saneamento inteligente.</p>
          </div>
          
          {/* Roadmap Timeline Horizontal */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"></div>
            
            {/* Roadmap Items */}
            <div className="grid md:grid-cols-5 gap-6 relative z-10">
              {/* Fase 1 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">ðŸ¤</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-green-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">IntegraÃ§Ã£o de Setores</h3>
                  <p className="text-sm text-muted-foreground mb-4">Troca de informaÃ§Ãµes entre departamentos e informaÃ§Ã£o de fÃ¡cil acesso</p>
                  <p className="text-xs font-semibold text-green-600">Ano 1</p>
                </div>
              </div>
              
              {/* Fase 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">ðŸŽ“</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-blue-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">CapacitaÃ§Ã£o</h3>
                  <p className="text-sm text-muted-foreground mb-4">Treinamento de equipes em IA, GIS, anÃ¡lise de dados</p>
                  <p className="text-xs font-semibold text-blue-600">Anos 1-2</p>
                </div>
              </div>
              
              {/* Fase 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">ðŸ—ºï¸</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-cyan-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">Camadas de Georreferenciamento</h3>
                  <p className="text-sm text-muted-foreground mb-4">Mapeamento e estruturaÃ§Ã£o de dados geoespaciais</p>
                  <p className="text-xs font-semibold text-cyan-600">Anos 2-3</p>
                </div>
              </div>
              
              {/* Fase 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">ðŸ”—</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">IntegraÃ§Ã£o SICO + SIURB</h3>
                  <p className="text-sm text-muted-foreground mb-4">UnificaÃ§Ã£o dos sistemas legados em plataforma moderna</p>
                  <p className="text-xs font-semibold text-purple-600">Anos 3-4</p>
                </div>
              </div>
              
              {/* Fase 5 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">ðŸŒ</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-amber-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">ReferÃªncia Global</h3>
                  <p className="text-sm text-muted-foreground mb-4">COMLURB como benchmark mundial em Smart Sanitation</p>
                  <p className="text-xs font-semibold text-amber-600">Ano 5</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Statement */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-500">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold">VisÃ£o 2031:</span> A COMLURB serÃ¡ a primeira empresa pÃºblica de limpeza urbana do mundo a implementar geointeligÃªncia plena em escala, transformando 14 mil funcionÃ¡rios em agentes de mudanÃ§a digital, gerando dados que informam decisÃµes em tempo real e estabelecendo o padrÃ£o global para saneamento inteligente e sustentÃ¡vel.
            </p>
          </div>
        </div>
      </section>

{/* Networking - Relacionamentos EstratÃ©gicos */}
      <section className="py-20 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Networking</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Um congresso tÃ©cnico transforma presenÃ§a institucional em relacionamento, relacionamento em aprendizado e aprendizado em oportunidade concreta para a organizaÃ§Ã£o.
            </p>
          </div>
          
          <div className="w-full">
            <Tabs defaultValue="fortaleza" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-transparent border-b border-slate-700">
                <TabsTrigger value="fortaleza" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Prefeitura de Fortaleza</TabsTrigger>
                <TabsTrigger value="belohorizonte" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Prefeitura de Belo Horizonte</TabsTrigger>
                <TabsTrigger value="topocart" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Topocart - Sistema de VarriÃ§Ã£o</TabsTrigger>
                <TabsTrigger value="geosampa" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">GeoSampa</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fortaleza" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Prefeitura de Fortaleza</h3>
                <div className="relative w-full">
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 snap-x snap-mandatory">
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150835_4146623e.webp" alt="O desafio dos MunicÃ­pios" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150906_baf2126a.webp" alt="Fortaleza: Da InformaÃ§Ã£o Territorial Ã  InteligÃªncia GeogrÃ¡fica" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151124_21c4e00c.webp" alt="Quando os dados comeÃ§am a conversar" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151319_95c3796f.webp" alt="InteligÃªncia GeogrÃ¡fica a ServiÃ§o dos MunicÃ­pios" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151543_e9da6b46.webp" alt="InteligÃªncia GeogrÃ¡fica Gera Resultados" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151725_b593595c.webp" alt="Os Desafios Continuam" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4 text-center">Deslize para ver mais imagens da apresentaÃ§Ã£o</p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-700">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                      <img src="assets/media/20260617_183344_99ae7c35.webp" alt="Equipe da COMLURB" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <p className="text-slate-300 leading-relaxed">A palestra partiu de uma ideia muito simples: toda decisÃ£o pÃºblica acontece em algum lugar. Quando os dados comeÃ§am a conversar, surge a inteligÃªncia geogrÃ¡fica. Isso significa conectar cadastro, cartografia, planejamento urbano, infraestrutura, informaÃ§Ãµes ambientais, mercado imobiliÃ¡rio, informaÃ§Ãµes tributÃ¡rias e dados operacionais. A partir dessa conexÃ£o, o municÃ­pio deixa de enxergar problemas isolados e passa a compreender padrÃµes.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="belohorizonte" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Prefeitura de Belo Horizonte</h3>
                <div className="relative w-full">
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 snap-x snap-mandatory">
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150706_2b5c74a2.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 1" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150807_e614fa06.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 2" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151954_d215d2c2.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 3" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_152228_c78f74f5.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 4" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150738_32774ba8.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 5" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150835_43bf239f.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 6" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_150906_42b13da9.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 7" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151124_312673dc.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 8" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151319_a8a52148.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 9" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151543_0cb1dd6f.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 10" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151725_7ca60b77.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 11" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_151921_179379aa.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 12" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_152135_e423a061.webp" alt="Belo Horizonte - ApresentaÃ§Ã£o 13" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4 text-center">Deslize para ver mais imagens da apresentaÃ§Ã£o</p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-700">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                      <img src="assets/media/20260617_150835_43bf239f.webp" alt="Equipe de Belo Horizonte" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <p className="text-slate-300 leading-relaxed">Belo Horizonte apresentou sua estratÃ©gia de transformaÃ§Ã£o digital em gestÃ£o urbana, com foco em integraÃ§Ã£o de dados geoespaciais para otimizaÃ§Ã£o de serviÃ§os pÃºblicos. A prefeitura compartilhou experiÃªncias em implementaÃ§Ã£o de sistemas de informaÃ§Ã£o geogrÃ¡fica para monitoramento de infraestrutura urbana, demonstrando como a geointeligÃªncia pode transformar a tomada de decisÃµes e melhorar a eficiÃªncia operacional.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="topocart" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Topocart - Sistema de VarriÃ§Ã£o</h3>
                
                <div className="relative w-full mb-8">
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 snap-x snap-mandatory">
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/IMG-20260617-WA0088_e2cc41c5.jpg" alt="Topocart - ApresentaÃ§Ã£o 1" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_161416_e8c57a3d.webp" alt="Topocart - ApresentaÃ§Ã£o 2" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_160927_a8cc08b6.webp" alt="Topocart - ApresentaÃ§Ã£o 3" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_161043_971109a4.webp" alt="Topocart - ApresentaÃ§Ã£o 4" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_161217_88b1d97c.webp" alt="Topocart - ApresentaÃ§Ã£o 5" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_161128_65005ca3.webp" alt="Topocart - ApresentaÃ§Ã£o 6" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_161145_b9e5a015.webp" alt="Topocart - ApresentaÃ§Ã£o 7" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_161408_db5bf3af.webp" alt="Topocart - ApresentaÃ§Ã£o 8" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260617_160945_b8e0d955.webp" alt="Topocart - ApresentaÃ§Ã£o 9" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4 text-center">Deslize para ver mais imagens da apresentaÃ§Ã£o</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    A Topocart apresentou sua soluÃ§Ã£o inovadora de rastreamento e otimizaÃ§Ã£o de operaÃ§Ãµes de varriÃ§Ã£o urbana. O sistema utiliza GPS de alta precisÃ£o e sensores IoT para monitorar a eficiÃªncia das equipes de limpeza em tempo real.
                  </p>
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-3">Funcionalidades principais</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>Rastreamento em tempo real de equipes de varriÃ§Ã£o</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>AnÃ¡lise de cobertura geogrÃ¡fica e eficiÃªncia operacional</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>IntegraÃ§Ã£o com sistemas de gestÃ£o de frota</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>RelatÃ³rios automatizados de desempenho por setor</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-slate-300 text-sm italic">
                    Potencial de aplicaÃ§Ã£o na COMLURB: OtimizaÃ§Ã£o de rotas de varriÃ§Ã£o, reduÃ§Ã£o de custos operacionais e melhoria da cobertura de serviÃ§os.
                  </p>
                </div>
              </TabsContent>
              

              <TabsContent value="geosampa" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">GeoSampa - Portal de Dados Geoespaciais de SÃ£o Paulo</h3>
                {/* Galeria de Fotos */}
                <div className="relative w-full mb-8">
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 snap-x snap-mandatory">
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260618_121755_6c32f7aa.webp" alt="GeoSampa 1" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260618_122344_15475f22.webp" alt="GeoSampa 2" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260618_120419_183620ab.webp" alt="GeoSampa 3" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260618_120422_fe781bb2.webp" alt="GeoSampa 4" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="assets/media/20260618_121826_9e9c167f.webp" alt="GeoSampa 5" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4 text-center">Deslize para ver mais imagens da apresentaÃ§Ã£o</p>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    O GeoSampa Ã© o portal de dados geoespaciais da Prefeitura de SÃ£o Paulo, que centraliza informaÃ§Ãµes cartogrÃ¡ficas, cadastrais e operacionais da cidade. O projeto demonstra como dados pÃºblicos podem ser disponibilizados de forma aberta e acessÃ­vel para melhorar a gestÃ£o urbana.
                  </p>
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-3">CaracterÃ­sticas principais</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>Acesso pÃºblico a dados cartogrÃ¡ficos e cadastrais da cidade</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>IntegraÃ§Ã£o de dados de mÃºltiplas secretarias municipais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>Ferramentas de visualizaÃ§Ã£o e anÃ¡lise de dados geoespaciais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">â€¢</span>
                        <span>APIs para integraÃ§Ã£o com aplicaÃ§Ãµes terceiras</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-slate-300 text-sm italic">
                    Aprendizado para COMLURB: Modelo de governanÃ§a de dados geoespaciais e transparÃªncia pÃºblica que pode ser adaptado para o Rio de Janeiro.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Participantes */}
      <section id="participantes" className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Participantes da Viagem</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            ConheÃ§a os profissionais da COMLURB que participaram do Congresso MundoGEO Connect 2026 e trouxeram os aprendizados que transformarÃ£o a empresa.
          </p>
          <ParticipantesGrupo />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Temos o Tamanho. Temos o Potencial.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agora precisamos da decisÃ£o. A COMLURB pode se tornar a maior referÃªncia mundial em inteligÃªncia urbana para limpeza pÃºblica. O futuro comeÃ§a agora.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100 font-semibold" onClick={() => navigate('/percepcoes')}>
            Vamos ComeÃ§ar
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">COMLURB</h4>
              <p className="text-sm text-slate-400">Transformando a gestÃ£o urbana atravÃ©s de inteligÃªncia geogrÃ¡fica.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Evento</h4>
              <p className="text-sm text-slate-400">MundoGEO Connect 2026</p>
              <p className="text-sm text-slate-400">15 a 18 de Junho</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 COMLURB. Todos os direitos reservados. | RelatÃ³rio de Viagem - Congresso MundoGEO Connect 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


interface NetworkingContact {
  numero: string;
  titulo: string;
  resumo: string;
  conteudo: string;
}

function NetworkingCard({ contact }: { contact: NetworkingContact }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const cores = ['bg-teal-600', 'bg-blue-600', 'bg-indigo-600', 'bg-purple-600', 'bg-pink-600', 'bg-rose-600', 'bg-orange-600', 'bg-amber-600'];
  const corAtual = cores[parseInt(contact.numero) % cores.length];

  return (
    <div className="flex-shrink-0 w-72 snap-center">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col">
        <div 
          className={`${corAtual} text-white p-6 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition min-h-48`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="text-5xl font-bold mb-2">{contact.numero}</div>
          <div className="text-xs text-center font-semibold flex items-center gap-1 justify-center">
            <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            Expandir
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-2 text-foreground line-clamp-2">{contact.titulo}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{contact.resumo}</p>
        </div>
        {isExpanded && (
          <div className="border-t border-border bg-slate-50 p-6 max-h-96 overflow-y-auto">
            <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {contact.conteudo}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function IoTCard() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card 
      className="p-8 border-l-4 border-l-purple-600 hover:shadow-lg transition cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Zap className="w-12 h-12 text-purple-600 mb-4" />
      <h3 className="text-xl font-bold mb-3 text-foreground">IoT - Internet das Coisas</h3>
      <p className="text-muted-foreground">A IoT elimina a necessidade de ir lÃ¡ ver, pois o objeto avisa ao sistema como ele estÃ¡. Se a GeoIA Ã© o cÃ©rebro e o GÃªmeo Digital Ã© o corpo, a Internet das Coisas (IoT) representa os sentidos do sistema. Ela Ã© a rede de dispositivos fÃ­sicos (sensores, rastreadores, cÃ¢meras) que coleta dados brutos do mundo real e os envia para o sistema em tempo real.</p>
      
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-lg font-bold mb-4 text-foreground">AplicaÃ§Ãµes PrÃ¡ticas na COMLURB</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Na Coleta</h5>
              <p className="text-sm text-muted-foreground">Sensores de peso e volume nos contÃ©ineres de lixo. O sistema recebe o sinal de que o setor X atingiu o limite de carga e despacha automaticamente o caminhÃ£o mais prÃ³ximo, otimizando a logÃ­stica de resÃ­duos.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Na VarriÃ§Ã£o</h5>
              <p className="text-sm text-muted-foreground">GPS de alta precisÃ£o nos carrinhos dos garis e sopradores. O gestor consegue ver no mapa quais ruas jÃ¡ foram varridas hoje e quais ficaram "buracos" na operaÃ§Ã£o, garantindo que 100% do logradouro foi atendido.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Na Poda</h5>
              <p className="text-sm text-muted-foreground">Sensores de estabilidade (acelerÃ´metros) fixados no tronco de Ã¡rvores histÃ³ricas ou de alto risco. Se a Ã¡rvore inclinar mais de 5 graus devido a ventos fortes, o IoT envia um alerta de emergÃªncia para o sistema, priorizando a equipe de poda para aquele local antes que ocorra um acidente.</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">Com a IoT, o seu sistema deixa de depender de relatÃ³rios manuais preenchidos por humanos (que podem ter erros) e passa a ler a realidade diretamente dos objetos, tornando a gestÃ£o da empresa Ã  prova de falhas.</p>
          </div>
        </div>
      )}
    </Card>
  );
}

function DigitalTwinsCard() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card 
      className="p-8 border-l-4 border-l-blue-600 hover:shadow-lg transition cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Globe className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-bold mb-3 text-foreground">GÃªmeos Digitais</h3>
      <p className="text-muted-foreground">Se a GeoIA diz Ã  sua empresa quando e onde agir, o GÃªmeo Digital mostra como a aÃ§Ã£o vai impactar o mundo real.</p>
      
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-lg font-bold mb-4 text-foreground">A IntegraÃ§Ã£o: Sentir, Pensar e Agir</h4>
          <p className="text-sm text-muted-foreground mb-6">A integraÃ§Ã£o da GeoIA e dos GÃªmeos Digitais como um ciclo de "Sentir, Pensar e Agir".</p>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Coleta de ResÃ­duos</h5>
              <p className="text-sm text-muted-foreground"><strong>Com GÃªmeo Digital:</strong> VocÃª pode simular no modelo 3D se um novo modelo de caminhÃ£o (maior ou elÃ©trico) consegue fazer as curvas em ruas estreitas de uma comunidade ou se a nova posiÃ§Ã£o de um contÃªiner vai bloquear o fluxo de pedestres na calÃ§ada.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">VarriÃ§Ã£o de Logradouros</h5>
              <p className="text-sm text-muted-foreground"><strong>Com GÃªmeo Digital:</strong> O gestor visualiza um mapa de calor (heatmap) de sujeira no modelo 3D da cidade. Se uma praÃ§a aparece sempre "vermelha" no GÃªmeo Digital, a empresa pode decidir, via simulaÃ§Ã£o, que Ã© mais barato instalar mais trÃªs lixeiras naquele ponto do que enviar o gari duas vezes ao dia.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Poda de Ãrvores (Manejo de PrecisÃ£o no ArboRio)</h5>
              <p className="text-sm text-muted-foreground"><strong>Com GÃªmeo Digital:</strong> Antes de enviar o cesto aÃ©reo, o engenheiro florestal abre o GÃªmeo Digital e faz uma poda virtual. Ele vÃª exatamente qual galho deve ser cortado e simula se a remoÃ§Ã£o daquela massa foliar vai deixar um prÃ©dio vizinho exposto a um calor excessivo (perda de sombra), permitindo um ajuste fino no plano de manejo.</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-lg font-bold mb-4 text-foreground">ComparaÃ§Ã£o: GeoIA vs GÃªmeo Digital</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Atividade</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">O que a GeoIA faz (InteligÃªncia)</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">O que o GÃªmeo Digital faz (VisualizaÃ§Ã£o/Teste)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Coleta</td>
                    <td className="py-2 px-3 text-muted-foreground">PrevÃ© o volume de lixo e cria a rota mais curta.</td>
                    <td className="py-2 px-3 text-muted-foreground">Testa se o caminhÃ£o cabe na rua e o impacto no trÃ¡nsito.</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">VarriÃ§Ã£o</td>
                    <td className="py-2 px-3 text-muted-foreground">Detecta lixo no chÃ£o via cÃ¢meras automaticamente.</td>
                    <td className="py-2 px-3 text-muted-foreground">Identifica visualmente onde o lixo mais se acumula no mapa.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Poda</td>
                    <td className="py-2 px-3 text-muted-foreground">Identifica conflitos com a rede elÃ©trica via laser.</td>
                    <td className="py-2 px-3 text-muted-foreground">Permite "ensaiar" o corte e ver o impacto na sombra da rua.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

function GeoIACard() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card 
      className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Brain className="w-12 h-12 text-green-600 mb-4" />
      <h3 className="text-xl font-bold mb-3 text-foreground">GeoIA (InteligÃªncia Artificial Geoespacial)</h3>
      <p className="text-muted-foreground">Ã‰ o "cÃ©rebro" que interpreta o mapa e devolve insights permitindo que a gestÃ£o da limpeza, das Ã¡reas verdes e qualquer outro serviÃ§o seja feita com precisÃ£o cirÃºrgica, otimizaÃ§Ã£o, tempo de equipe e recursos pÃºblicos.</p>
      
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-lg font-bold mb-4 text-foreground">GeoIA na Limpeza</h4>
          <p className="text-sm text-muted-foreground mb-4">Para a operaÃ§Ã£o de limpeza GeoIA foca em logÃ­stica e eficiÃªncia:</p>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-foreground mb-2">OtimizaÃ§Ã£o de Rotas DinÃ¢micas</h5>
              <p className="text-sm text-muted-foreground">Diferente de rotas fixas, a GeoIA pode recalcular o trajeto das equipes de limpeza em tempo real, baseando-se na densidade de resÃ­duos detectada por sensores ou frequÃªncia de chamados (como o 1746).</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">ManutenÃ§Ã£o Preditiva da ArborizaÃ§Ã£o</h5>
              <p className="text-sm text-muted-foreground">No caso do ArboRio, a GeoIA pode analisar o histÃ³rico de crescimento de certas espÃ©cies e condiÃ§Ãµes climÃ¡ticas para prever qual Ã¡rvore tem maior risco de queda ou necessidade de poda iminente, transformando a limpeza urbana de "reativa" em "preventiva".</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Monitoramento de Pontos CrÃ­ticos</h5>
              <p className="text-sm text-muted-foreground">IdentificaÃ§Ã£o de padrÃµes geogrÃ¡ficos de descarte irregular de lixo, permitindo que a empresa direcione aÃ§Ãµes de limpeza e fiscalizaÃ§Ã£o para os locais com maior probabilidade de reincidÃªncia.</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-lg font-bold mb-4 text-foreground">ComparaÃ§Ã£o: GIS Tradicional vs GeoIA</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Conceito</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Abordagem Tradicional (GIS)</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Abordagem com GeoIA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Coleta de Dados</td>
                    <td className="py-2 px-3 text-muted-foreground">Cadastro manual ponto a ponto.</td>
                    <td className="py-2 px-3 text-muted-foreground">DetecÃ§Ã£o automÃ¡tica via imagens e sensores.</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">AnÃ¡lise</td>
                    <td className="py-2 px-3 text-muted-foreground">VisualizaÃ§Ã£o do que aconteceu (passado).</td>
                    <td className="py-2 px-3 text-muted-foreground">PrediÃ§Ã£o do que vai acontecer (futuro).</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">OperaÃ§Ã£o</td>
                    <td className="py-2 px-3 text-muted-foreground">Equipes seguem cronogramas fixos.</td>
                    <td className="py-2 px-3 text-muted-foreground">Equipes sÃ£o enviadas por demanda preditiva.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">DecisÃ£o</td>
                    <td className="py-2 px-3 text-muted-foreground">Baseada em experiÃªncia e mapas estÃ¡ticos.</td>
                    <td className="py-2 px-3 text-muted-foreground">Baseada em algoritmos e dados em tempo real.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

function NetworkingCarousel() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center gap-4">
      <button
        onClick={() => scroll('left')}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition z-10"
      >
        â€¹
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto flex-1 scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {networkingContacts.map((contact, index) => (
          <NetworkingCard key={index} contact={contact} />
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition z-10"
      >
        â€º
      </button>
    </div>
  );
}

const networkingContacts: NetworkingContact[] = [
  {
    numero: "1",
    titulo: "Contato com especialistas em cidades inteligentes, maturidade digital e estruturaÃ§Ã£o de dados urbanos",
    resumo: "DiscussÃµes com especialistas sobre maturidade tecnolÃ³gica das cidades, WebGIS, dados abertos, IDE, CTM, BIM, CIM e inteligÃªncia geogrÃ¡fica.",
    conteudo: `Um dos contatos mais relevantes foi estabelecido a partir das discussÃµes conduzidas por especialistas que trataram da maturidade tecnolÃ³gica das cidades, do uso de WebGIS, dados abertos, IDE, CTM, BIM, CIM, gÃªmeos digitais e inteligÃªncia geogrÃ¡fica.

A mensagem central desse bloco foi simples, mas profunda: a cidade inteligente nÃ£o comeÃ§a pela tecnologia mais sofisticada. Ela comeÃ§a pela organizaÃ§Ã£o da informaÃ§Ã£o.

Foi apresentado o chamado "paradoxo brasileiro", no qual muitas cidades brasileiras avanÃ§aram em plataformas de visualizaÃ§Ã£o, como WebGIS, antes de consolidarem plenamente suas infraestruturas de dados, seus cadastros, suas bases territoriais e seus modelos de governanÃ§a.

Esse contato Ã© importante para a COMLURB porque a Companhia vive exatamente esse momento de transiÃ§Ã£o. O desafio nÃ£o Ã© apenas produzir mais dados, mas organizar os dados existentes em uma estrutura confiÃ¡vel, integrada e Ãºtil para a tomada de decisÃ£o.`
  },
  {
    numero: "2",
    titulo: "Contato com JÃºlio Ribeiro â€” FF Solutions / Symetri LATAM",
    resumo: "Profissional ligado Ã  transformaÃ§Ã£o digital, planejamento urbano e soluÃ§Ãµes voltadas Ã  modelagem de dados urbanos e integraÃ§Ã£o tecnolÃ³gica.",
    conteudo: `Entre os contatos registrados, destaca-se o de JÃºlio Ribeiro, profissional ligado Ã  Ã¡rea de transformaÃ§Ã£o digital, planejamento urbano, tecnologias aplicadas Ã  cidade e soluÃ§Ãµes voltadas Ã  modelagem, dados urbanos e integraÃ§Ã£o tecnolÃ³gica.

Sua apresentaÃ§Ã£o trouxe uma frase que sintetiza o espÃ­rito de todo o Congresso:
"A cidade do presente nÃ£o se improvisa, ela se mede, se planeja e se constrÃ³i sobre dados."

Essa frase deve ser lida como uma orientaÃ§Ã£o estratÃ©gica. Para a COMLURB, ela significa que a limpeza urbana moderna nÃ£o pode depender apenas da experiÃªncia empÃ­rica, da memÃ³ria das equipes ou da reaÃ§Ã£o a demandas pontuais.

O contato com esse perfil tÃ©cnico Ã© relevante porque permite aproximar a COMLURB de soluÃ§Ãµes e metodologias que conectam planejamento urbano, infraestrutura de dados, modelagem digital e transformaÃ§Ã£o institucional.`
  },
  {
    numero: "3",
    titulo: "Contato com representantes da PRODABEL e da Prefeitura de Belo Horizonte â€” Cadastro Territorial MultifinalitÃ¡rio",
    resumo: "ExperiÃªncia de Belo Horizonte na construÃ§Ã£o e utilizaÃ§Ã£o do Cadastro Territorial MultifinalitÃ¡rio com trajetÃ³ria de trÃªs dÃ©cadas de geotecnologias.",
    conteudo: `Outro contato de grande relevÃ¢ncia foi com a experiÃªncia de Belo Horizonte, apresentada por Karla Albuquerque de Vasconcelos Borges, da PRODABEL/PBH, sobre o Cadastro Territorial MultifinalitÃ¡rio de Belo Horizonte.

A apresentaÃ§Ã£o mostrou uma trajetÃ³ria longa e madura de estruturaÃ§Ã£o da informaÃ§Ã£o territorial. Belo Horizonte demonstrou que uma base geogrÃ¡fica Ãºnica nÃ£o nasce pronta. Ela Ã© construÃ­da ao longo do tempo, com diagnÃ³stico, governanÃ§a, definiÃ§Ã£o de padrÃµes, integraÃ§Ã£o entre Ã³rgÃ£os, regras de atualizaÃ§Ã£o, banco de dados geogrÃ¡ficos, geosserviÃ§os, portal de informaÃ§Ãµes e sistemas consumidores.

O ponto mais forte da experiÃªncia de Belo Horizonte foi a defesa de uma visÃ£o Ãºnica do territÃ³rio municipal. A cidade foi apresentada a partir de diferentes camadas: cidade aprovada, cidade real, cidade cartorial e cidade tributÃ¡ria.

Para a COMLURB, essa discussÃ£o tem aplicaÃ§Ã£o direta. A Companhia executa serviÃ§os na cidade real, em Ã¡reas formais, informais, consolidadas, em transformaÃ§Ã£o ou em conflito cadastral.`
  },
  {
    numero: "4",
    titulo: "Contato com Fernanda Farias â€” InteligÃªncia GeogrÃ¡fica e GestÃ£o Municipal",
    resumo: "Palestra didÃ¡tica sobre inteligÃªncia geogrÃ¡fica que conecta cadastro, cartografia, planejamento urbano e infraestrutura para compreender padrÃµes urbanos.",
    conteudo: `Outro bloco de contatos foi associado Ã  palestra sobre inteligÃªncia geogrÃ¡fica e gestÃ£o municipal, conduzida por Fernanda Farias. A abordagem foi especialmente didÃ¡tica e dialogou diretamente com a realidade dos municÃ­pios brasileiros.

A palestra partiu de uma ideia muito simples: toda decisÃ£o pÃºblica acontece em algum lugar. Uma escola estÃ¡ em algum lugar. Uma unidade de saÃºde estÃ¡ em algum lugar. Uma praÃ§a, uma rua, uma feira, um ponto de descarte irregular, uma Ã¡rea de risco tambÃ©m estÃ£o em algum lugar.

Quando os dados comeÃ§am a conversar, surge a inteligÃªncia geogrÃ¡fica. Isso significa conectar cadastro, cartografia, planejamento urbano, infraestrutura, informaÃ§Ãµes ambientais, mercado imobiliÃ¡rio, informaÃ§Ãµes tributÃ¡rias e dados operacionais.

Para a COMLURB, esse contato Ã© extremamente aderente. A limpeza urbana Ã© uma polÃ­tica pÃºblica espacial por natureza. Ela depende de localizaÃ§Ã£o, frequÃªncia, rota, acesso, tipo de resÃ­duo, densidade urbana, comportamento da populaÃ§Ã£o, uso do solo, sazonalidade, eventos, clima e turismo.`
  },
  {
    numero: "5",
    titulo: "Contato com Givanildo JosÃ© Silva â€” Topocart",
    resumo: "Engenheiro agrimensor com experiÃªncia em mapeamentos cartogrÃ¡ficos, cadastro tributÃ¡rio, SIG e iniciativas com inteligÃªncia geogrÃ¡fica, drones e gÃªmeos digitais.",
    conteudo: `TambÃ©m foi estabelecido contato com Givanildo JosÃ© Silva, engenheiro agrimensor e diretor tÃ©cnico da Topocart, empresa com experiÃªncia em mapeamentos cartogrÃ¡ficos multifinalitÃ¡rios, cadastro tributÃ¡rio, PGV, SIG, projetos em municÃ­pios brasileiros e iniciativas envolvendo inteligÃªncia geogrÃ¡fica, drones e gÃªmeos digitais.

A apresentaÃ§Ã£o abordou ganhos e desafios na implementaÃ§Ã£o de projetos de inteligÃªncia geogrÃ¡fica e gÃªmeos digitais nos municÃ­pios. O conteÃºdo deixou claro que nÃ£o existe inteligÃªncia geogrÃ¡fica sem base cartogrÃ¡fica confiÃ¡vel, cadastro estruturado, escolha adequada de plataformas tecnolÃ³gicas e capacitaÃ§Ã£o de pessoal.

Entre os ganhos apresentados, destacaram-se respostas rÃ¡pidas Ã s necessidades da gestÃ£o, transparÃªncia nos processos, processos mapeados, adequaÃ§Ã£o de equipes, rapidez no atendimento ao cidadÃ£o e maior conhecimento da cidade.

Para a COMLURB, o contato com a Topocart Ã© relevante porque a Companhia pode se beneficiar de tecnologias de mapeamento de alta precisÃ£o, aerolevantamento, drones, sensores, nuvem de pontos, modelos 3D e inventÃ¡rios territoriais.`
  },
  {
    numero: "6",
    titulo: "Contato com especialistas em InteligÃªncia Artificial aplicada Ã  Geotecnologia",
    resumo: "Palestras sobre machine learning, deep learning, redes neurais e uso de IA para mapeamento de Ã¡reas de risco e anÃ¡lise de imagens territoriais.",
    conteudo: `Outro grupo de contatos foi formado a partir das palestras sobre inteligÃªncia artificial aplicada Ã  geotecnologia. Os conteÃºdos apresentados abordaram machine learning, deep learning, redes neurais, modelos de classificaÃ§Ã£o, anÃ¡lise de imagens, sensoriamento remoto, identificaÃ§Ã£o de padrÃµes territoriais e uso de IA para apoio Ã  tomada de decisÃ£o.

Um dos exemplos apresentados tratou do uso de inteligÃªncia artificial para mapear Ã¡reas de risco de deslizamento em SÃ£o SebastiÃ£o. Esse exemplo demonstrou que a IA pode combinar variÃ¡veis ambientais, geogrÃ¡ficas e territoriais para identificar Ã¡reas suscetÃ­veis a eventos crÃ­ticos.

A principal liÃ§Ã£o desse bloco Ã© que a inteligÃªncia artificial nÃ£o substitui o conhecimento tÃ©cnico. Ela amplia a capacidade de anÃ¡lise quando hÃ¡ dados organizados, objetivos claros e validaÃ§Ã£o humana.

Para a COMLURB, esse contato Ã© importante porque abre caminho para aplicaÃ§Ãµes futuras em identificaÃ§Ã£o automÃ¡tica de Ã¡reas com acÃºmulo de resÃ­duos, anÃ¡lise de imagens para detectar descarte irregular e previsÃ£o de aumento de resÃ­duos em perÃ­odos especÃ­ficos.`
  },
  {
    numero: "7",
    titulo: "Contato com Helton Uchoa â€” Prefeitura Eficiente",
    resumo: "Estudo de caso sobre inteligÃªncia geogrÃ¡fica nos municÃ­pios e uso de IA em fiscalizaÃ§Ã£o de obras urbanas com metodologia clara e participaÃ§Ã£o humana.",
    conteudo: `A palestra de Helton Uchoa, associada Ã  iniciativa Prefeitura Eficiente, trouxe um estudo de caso sobre inteligÃªncia geogrÃ¡fica nos municÃ­pios e uso de inteligÃªncia artificial em fiscalizaÃ§Ã£o de obras urbanas de pavimentaÃ§Ã£o.

O caso apresentado envolveu um desafio do Tribunal de Contas da UniÃ£o relacionado Ã  fiscalizaÃ§Ã£o de obras de pequeno porte. A soluÃ§Ã£o combinou robÃ´s, inteligÃªncia artificial, documentos pÃºblicos, extraÃ§Ã£o de dados, revisÃ£o humana, coleta externa e anÃ¡lise especializada.

O ponto mais importante foi a clareza metodolÃ³gica: a expectativa era que a IA pudesse permear todas as etapas, mas a realidade mostrou que ela atua melhor quando aplicada a tarefas especÃ­ficas, bem definidas e integradas a um processo com participaÃ§Ã£o humana.

Essa liÃ§Ã£o Ã© extremamente importante para a COMLURB. A IA funciona melhor quando o processo estÃ¡ claro, os dados estÃ£o organizados e hÃ¡ especialistas validando os resultados. Pode inspirar projetos-piloto em anÃ¡lise automatizada de ordens de serviÃ§o, leitura de documentos e apoio Ã  fiscalizaÃ§Ã£o.`
  },
  {
    numero: "8",
    titulo: "Contato com desenvolvedores e soluÃ§Ãµes voltadas Ã  comunicaÃ§Ã£o com o cidadÃ£o â€” Lixo Hora Certa e Sico",
    resumo: "AproximaÃ§Ã£o com soluÃ§Ãµes voltadas Ã  comunicaÃ§Ã£o direta com o cidadÃ£o sobre horÃ¡rios de coleta, reduÃ§Ã£o de descartes irregulares e melhoria da relaÃ§Ã£o operaÃ§Ã£o-cidadÃ£o.",
    conteudo: `Entre os contatos realizados, tambÃ©m se destaca a aproximaÃ§Ã£o com soluÃ§Ãµes voltadas Ã  comunicaÃ§Ã£o direta com o cidadÃ£o, especialmente relacionadas ao aplicativo Lixo Hora Certa e ao Sico.

Esse contato Ã© relevante porque a limpeza urbana depende, em grande parte, da previsibilidade e da participaÃ§Ã£o da populaÃ§Ã£o. Quando o cidadÃ£o sabe o dia, o horÃ¡rio e a forma correta de dispor seus resÃ­duos, a cidade ganha em organizaÃ§Ã£o, eficiÃªncia e limpeza.

A ideia de um aplicativo ou soluÃ§Ã£o digital voltada ao horÃ¡rio correto da coleta dialoga diretamente com a missÃ£o da COMLURB. A Companhia jÃ¡ possui conhecimento tÃ©cnico sobre roteiros, frequÃªncia, Ã¡reas atendidas, tipos de coleta e especificidades territoriais.

Para a COMLURB, esse contato pode contribuir para comunicaÃ§Ã£o mais clara sobre dias e horÃ¡rios de coleta, reduÃ§Ã£o de resÃ­duos colocados fora do horÃ¡rio, melhoria da relaÃ§Ã£o entre operaÃ§Ã£o e cidadÃ£o, e envio de alertas sobre mudanÃ§as de rota, feriados e eventos. A importÃ¢ncia estÃ¡ em lembrar que tecnologia pÃºblica nÃ£o deve servir apenas Ã  gestÃ£o interna. Ela tambÃ©m deve facilitar a vida do cidadÃ£o.`
  }
];


// Componente de Participantes com Foto do Grupo
interface Participante {
  nome: string;
  cargo: string;
  departamento: string;
  curriculo: string;
  posicao: { left: string; top: string };
}

const participantes: Participante[] = [
  {
    nome: "FELIPE XAVIER",
    cargo: "Coordenador TÃ©cnico",
    departamento: "Diretoria de Limpeza Urbana (DLU)",
    curriculo: "Felipe Xavier Ã© Coordenador TÃ©cnico da Diretoria de Limpeza Urbana, responsÃ¡vel pela supervisÃ£o de projetos tÃ©cnicos e implementaÃ§Ã£o de soluÃ§Ãµes inovadoras em limpeza urbana. Com experiÃªncia em gestÃ£o operacional e tecnologia, Felipe liderou iniciativas de otimizaÃ§Ã£o de rotas e eficiÃªncia operacional na COMLURB.",
    posicao: { left: "44%", top: "30%" }
  },
  {
    nome: "ALEXANDRA ROBERTA DA SILVA",
    cargo: "Especialista em Dados | Business Intelligence | Indicadores e Performance",
    departamento: "Rio de Janeiro â€“ RJ | (21) 99964-5556 | alexa.roberta19@gmail.com | linkedin.com/in/alexandrarobertadasilva",
    curriculo: "Sou Especialista em Dados e InteligÃªncia de NegÃ³cios, com sÃ³lida experiÃªncia em anÃ¡lise de dados, Business Intelligence e indicadores de performance, atuando diretamente no suporte Ã  tomada de decisÃ£o estratÃ©gica. Ao longo da minha trajetÃ³ria, desenvolvi dashboards executivos, anÃ¡lises estratÃ©gicas e automaÃ§Ãµes de processos que apoiam lideranÃ§as na definiÃ§Ã£o de diretrizes e aÃ§Ãµes.\n\nAtualmente curso MBA em IA, Data Science e Big Data para NegÃ³cios, aprofundando minha atuaÃ§Ã£o em soluÃ§Ãµes analÃ­ticas orientadas a resultados e geraÃ§Ã£o de valor para o negÃ³cio.\n\nColoco-me Ã  disposiÃ§Ã£o para contribuir com minha experiÃªncia analÃ­tica, visÃ£o estratÃ©gica e forte orientaÃ§Ã£o a resultados.",
    posicao: { left: "55%", top: "52%" }
  },
  {
    nome: "RÃ”MULO GUIMARÃƒES GIÃCOMO",
    cargo: "Engenheiro SÃªnior | Geotecnologias e InovaÃ§Ã£o",
    departamento: "Diretoria de ServiÃ§os Urbanos (DSU)",
    curriculo: "Engenheiro Florestal, Mestre em CiÃªncias Ambientais e Florestais, Doutorados em Agronomia (UNESP) e CiÃªncia e Tecnologia Ambiental (Universidad da CoruÃ±a, Espanha). Engenheiro SÃªnior na COMLURB desde 2011. Representante titular e ponto focal da companhia junto ao Sistema Municipal de InformaÃ§Ãµes Urbanas - SIURB.\n\nCom larga experiÃªncia em projetos envolvendo geotecnologias aplicadas Ã  gestÃ£o pÃºblica, Ã© responsÃ¡vel pelo desenvolvimento de plataformas estratÃ©gicas da empresa. Entre suas criaÃ§Ãµes estÃ£o o ArboRio (Sistema Integrado de GestÃ£o da ArborizaÃ§Ã£o Urbana do MunicÃ­pio do Rio de Janeiro) e o sistema de gestÃ£o de grandes eventos da COMLURB, que otimizam a logÃ­stica de limpeza em operaÃ§Ãµes de alta complexidade como o Todo Mundo no Rio e o RÃ©veillon.\n\nHabilidades e ampla vivÃªncia no ecossistema ArcGIS, desenvolvendo soluÃ§Ãµes por meio de diversas aplicaÃ§Ãµes da plataforma (ArcGIS Pro, Survey123, Dashboards, Field Maps e Experience Builder). Uso de InteligÃªncia Artificial em fluxos de trabalho para realizaÃ§Ã£o de anÃ¡lises complexas de dados com objetivo de extrair novas potencialidades tecnolÃ³gicas e de inovaÃ§Ã£o.",
    posicao: { left: "61%", top: "25%" }
  },
  {
    nome: "JAQUELINE NASCIMENTO",
    cargo: "Analista de Dados e PÃ³s graduada em GestÃ£o de Pessoas",
    departamento: "Diretoria de ServiÃ§os Urbanos (DSU)",
    curriculo: "Minha trajetÃ³ria na COMLURB tem sido marcada pelo compromisso com a gestÃ£o pÃºblica, com a melhoria dos serviÃ§os urbanos e com a busca constante por soluÃ§Ãµes que tornem a operaÃ§Ã£o mais eficiente, integrada e transparente.\n\nTive a oportunidade de contribuir diretamente com Ã¡reas estratÃ©gicas da Companhia, passando pela gestÃ£o regional da limpeza urbana, pelo acompanhamento de metas operacionais, pela organizaÃ§Ã£o de processos internos e pela articulaÃ§Ã£o entre equipes, diretorias e Ã³rgÃ£os parceiros. Minha experiÃªncia na ponta da operaÃ§Ã£o me permitiu compreender, de forma prÃ¡tica, os desafios reais da cidade, das equipes em campo e da populaÃ§Ã£o que depende diariamente dos serviÃ§os prestados pela COMLURB.\n\nAtuei na anÃ¡lise de dados, no planejamento de serviÃ§os, no acompanhamento de indicadores, na melhoria de fluxos de trabalho e na construÃ§Ã£o de soluÃ§Ãµes voltadas Ã  modernizaÃ§Ã£o da gestÃ£o.\n\nTenho prazer em transformar problemas complexos em soluÃ§Ãµes fÃ¡ceis e acessÃ­vel para todos.\n\nSigo comprometida com a valorizaÃ§Ã£o das equipes e com a construÃ§Ã£o de uma gestÃ£o pÃºblica mais moderna, humana e eficiente. Minha trajetÃ³ria ainda estÃ¡ em construÃ§Ã£o, mas carrego a certeza de que meu potencial estÃ¡ justamente na capacidade de unir experiÃªncia prÃ¡tica, sensibilidade para ouvir as pessoas e coragem para propor mudanÃ§as e inovaÃ§Ãµes.",
    posicao: { left: "70%", top: "58%" }
  },
  {
    nome: "MARCELO DANTAS",
    cargo: "LÃ­der de Projetos e SoluÃ§Ãµes EstratÃ©gicas",
    departamento: "FGI - Tecnologia da InformaÃ§Ã£o",
    curriculo: "Profissional de Tecnologia da InformaÃ§Ã£o com 30 anos de experiÃªncia em anÃ¡lise, desenvolvimento e gestÃ£o de soluÃ§Ãµes digitais, sendo 26 anos dedicados Ã  Comlurb. Ingressou como estagiÃ¡rio, sendo posteriormente efetivado como Analista de Sistemas e assumindo posiÃ§Ãµes de lideranÃ§a tÃ©cnica e coordenaÃ§Ã£o de equipes. Atualmente atua como lÃ­der de projetos responsÃ¡vel por soluÃ§Ãµes estratÃ©gicas voltadas Ã  gestÃ£o operacional, com destaque para o Sistema Integrado de Controle Operacional (SICO), plataforma corporativa responsÃ¡vel pelo planejamento, monitoramento, controle e mediÃ§Ã£o dos serviÃ§os de limpeza urbana.\n\nPossui sÃ³lida experiÃªncia em levantamento e modelagem de processos de negÃ³cio, arquitetura de sistemas, desenvolvimento de aplicaÃ§Ãµes corporativas, bancos de dados, integraÃ§Ã£o de sistemas, automaÃ§Ã£o de regras operacionais e construÃ§Ã£o de indicadores gerenciais.\n\nParalelamente Ã  atuaÃ§Ã£o corporativa, exerce atividades de docÃªncia hÃ¡ mais de 25 anos em instituiÃ§Ãµes de ensino tÃ©cnico, ministrando disciplinas de programaÃ§Ã£o, desenvolvimento web, bancos de dados, engenharia de software e anÃ¡lise de sistemas. Combina visÃ£o tÃ©cnica e conhecimento de negÃ³cio na concepÃ§Ã£o e implementaÃ§Ã£o de soluÃ§Ãµes que contribuem para eficiÃªncia operacional, governanÃ§a de dados e tomada de decisÃ£o estratÃ©gica.",
    posicao: { left: "73%", top: "20%" }
  },
  {
    nome: "DIEGO DE FREITAS DIAS SARMANHO LOPES",
    cargo: "Desenvolvedor Full Stack | IA e Machine Learning",
    departamento: "FGI - Tecnologia da InformaÃ§Ã£o",
    curriculo: "TecnÃ³logo em AnÃ¡lise e Desenvolvimento de Sistemas e MBA em Engenharia de Software pela UFRJ. Desenvolvedor Full Stack com mais de 7 anos de experiÃªncia no desenvolvimento de sistemas web, desktop e soluÃ§Ãµes corporativas, atuando com foco em automaÃ§Ã£o de processos, integraÃ§Ã£o de sistemas, anÃ¡lise de dados e transformaÃ§Ã£o digital.\n\nAtualmente Ã© Desenvolvedor Full Stack na COMLURB, onde participa da concepÃ§Ã£o, desenvolvimento e manutenÃ§Ã£o de aplicaÃ§Ãµes estratÃ©gicas para apoio Ã  gestÃ£o operacional. Atua na criaÃ§Ã£o de soluÃ§Ãµes utilizando Python, PHP e bancos de dados relacionais, promovendo integraÃ§Ã£o entre sistemas, otimizaÃ§Ã£o de processos e disponibilizaÃ§Ã£o de informaÃ§Ãµes para suporte Ã  tomada de decisÃ£o.\n\nPossui experiÃªncia no desenvolvimento de APIs, aplicaÃ§Ãµes web e desktop, modelagem e otimizaÃ§Ã£o de bancos de dados, implantaÃ§Ã£o de sistemas em ambiente Linux e utilizaÃ§Ã£o de tecnologias de containerizaÃ§Ã£o. Desenvolve ainda soluÃ§Ãµes que incorporam tÃ©cnicas de InteligÃªncia Artificial e Machine Learning para anÃ¡lise de dados, automaÃ§Ã£o de atividades e geraÃ§Ã£o de conhecimento aplicado Ã  gestÃ£o pÃºblica.\n\nDomina tecnologias como Python, PHP, JavaScript, Flask, FastAPI, PostgreSQL, MySQL, Docker e Linux, combinando visÃ£o tÃ©cnica e capacidade analÃ­tica para entrega de soluÃ§Ãµes escalÃ¡veis, seguras e orientadas a resultados.",
    posicao: { left: "87%", top: "28%" }
  }
];

function ParticipantesGrupo() {
  const [selectedParticipant, setSelectedParticipant] = React.useState<Participante | null>(null);

  return (
    <>
      {/* Foto do Grupo - VisÃ­vel em ambas as versÃµes */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-8">
        <img 
          src="assets/media/grupo-mundogeo-2026_04b39992.png" 
          alt="Grupo de Participantes MundoGEO 2026"
          className="w-full h-auto object-cover"
        />
        
        {/* Desktop: Badges Flutuantes com Nomes */}
        <div className="hidden md:block">
          {participantes.map((participante, index) => (
            <button
              key={index}
              onClick={() => setSelectedParticipant(participante)}
              className="absolute transform -translate-x-1/2 cursor-pointer group"
              style={{
                left: participante.posicao.left,
                top: participante.posicao.top
              }}
            >
              {/* Badge Transparente */}
              <div className="bg-black/50 backdrop-blur-md px-3 py-2 rounded-lg text-white font-bold text-center hover:bg-black/70 transition-all duration-300 min-w-max whitespace-nowrap">
                <div className="text-xs font-bold uppercase tracking-wide leading-tight">{participante.nome}</div>
                <div className="text-xs font-normal lowercase mt-0.5 opacity-90 leading-tight">{participante.cargo}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: Lista de Nomes abaixo da Foto */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-3">
          {participantes.map((participante, index) => (
            <button
              key={index}
              onClick={() => setSelectedParticipant(participante)}
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white p-3 rounded-lg text-center transition-all duration-300 border border-slate-700 hover:border-green-600"
            >
              <div className="font-bold text-xs uppercase tracking-wide leading-tight">{participante.nome}</div>
              <div className="text-xs text-green-400 mt-1">{participante.cargo}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de CurrÃ­culo */}
      {selectedParticipant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedParticipant(null)}>
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedParticipant.nome}</h2>
                  <p className="text-lg text-green-600 font-semibold">{selectedParticipant.cargo}</p>
                  <p className="text-sm text-muted-foreground mt-1">{selectedParticipant.departamento}</p>
                </div>
                <button
                  onClick={() => setSelectedParticipant(null)}
                  className="text-muted-foreground hover:text-foreground transition text-2xl"
                >
                  âœ•
                </button>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">CurrÃ­culo e ExperiÃªncias</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedParticipant.curriculo}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
