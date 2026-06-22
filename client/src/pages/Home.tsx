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
            <img src="/manus-storage/broom-icon_0293fe4d.png" alt="Broom Icon" className="w-10 h-10" />
            <div className="border-l-2 border-gray-400 h-8"></div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-foreground">RELATÓRIO DE VIAGEM - Congresso MundoGeo SP</span>
              <span className="text-xs text-muted-foreground">15 a 18 de Junho de 2026</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="https://jaqueline-nascimento.github.io/relatorioMundoGeo/?v=ae98227" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">Relatório completo</a>
            <a href="/projetos" className="text-sm text-muted-foreground hover:text-foreground transition">Projetos</a>
            <a href="/apresentacao-presidencia" className="text-sm text-muted-foreground hover:text-foreground transition">Apresentação para presidência</a>
            <a href="/insights" className="text-sm text-muted-foreground hover:text-foreground transition">Insights</a>
            <a href="#participantes" className="text-sm text-muted-foreground hover:text-foreground transition">Participantes</a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4 p-4">
              <a href="https://jaqueline-nascimento.github.io/relatorioMundoGeo/?v=ae98227" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Relatório completo</a>
              <a href="/projetos" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
              <a href="/apresentacao-presidencia" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Apresentação para presidência</a>
              <a href="/insights" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Insights</a>
              <a href="#participantes" className="text-sm text-muted-foreground hover:text-foreground transition py-2" onClick={() => setMobileMenuOpen(false)}>Participantes</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden text-white py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/manus-storage/hero-geointeligencia_8fe6595f.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-900/15 to-slate-900/10"></div>
        
        {/* Logo Prefeitura RIO + COMLURB - Top Right */}
        <div className="absolute top-6 right-6 z-20 md:w-64 w-48">
          <img 
            src="/manus-storage/logo-rio-comlurb-dark_420b1041.jpg" 
            alt="Prefeitura RIO - COMLURB"
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Geointeligência na </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Limpeza Urbana</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A Geointeligência Urbana serve para transformar dados complexos em mapas e rotas operacionais, auxiliando governos e empresas na gestão do território, melhoria da infraestrutura e tomada de decisões rápidas e assertivas.
            </p>

          </div>
        </div>
      </section>

      {/* Seção de Abertura - A Isca */}
      <section className="py-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto à Esquerda */}
            <div className="space-y-4">
              <p className="text-base text-white leading-relaxed text-justify">
                Deixar de ter operações reativas e dados dispersos para ter ações preditivas.
              </p>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <p className="text-base text-white leading-relaxed text-justify">
                  Fazer o carioca feliz e orgulhoso com a antecipação dos problemas. Análises preditivas resultarão em uma cidade mais limpa, sendo reconhecida como a capital que analisa dados em tempo real e age cirurgicamente sem desperdício de recursos.
                </p>
              </div>
            </div>
            
            {/* Vídeo à Direita */}
            <div className="flex justify-center">
              <video 
                className="w-full h-auto rounded-lg" 
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source src="/manus-storage/Pippit_20260621_Cleaning_V2_d4df2970.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>



      {/* Cards de Navegação - Módulos Principais */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Card 1 - O que é MundoGEO */}
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
                <h3 className="text-xl font-bold mb-3 text-white">O que é MundoGEO</h3>
                <p className="text-slate-200 text-sm">Conheça o maior congresso de geotecnologia da América Latina e sua relevância para a COMLURB.</p>
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
                <p className="text-slate-200 text-sm">Explore os 4 cursos técnicos realizados e o conhecimento estratégico adquirido.</p>
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
                <p className="text-slate-200 text-sm">Confira as 11 palestras e painéis técnicos que transformam a gestão urbana.</p>
              </div>
            </div>
            
            {/* Card 4 - Geointeligência em outras prefeituras */}
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
                <h3 className="text-xl font-bold mb-3 text-white">Geointeligência em outras Prefeituras</h3>
                <p className="text-slate-200 text-sm">Veja como outras cidades aplicam geointeligência e os resultados alcançados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção O Tripé da Gestão Inteligente */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              O Tripé da Gestão Inteligente: Cérebro, Corpo e Sentidos
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              A COMLURB tem conhecimento profundo do território, presença diária nas ruas e equipes distribuídas pela cidade. Conectar esses ativos com tecnologias complementares que funcionam como um sistema nervoso central. Essas três tecnologias são a base para uma gestão urbana que antecipa problemas, reduz custos operacionais e entrega melhores resultados para a cidade.
            </p>
          </div>
          
          {/* 3 Cards do Tripé */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - GeoIA */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-green-500 rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl mb-4 text-green-400">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">GeoIA (Inteligência Artificial Geoespacial)</h3>
              <p className="text-slate-300 leading-relaxed">
                É o "cérebro" que interpreta o mapa e devolve insights permitindo que a gestão da limpeza, das áreas verdes e qualquer outro serviço seja feita com precisão cirúrgica, otimização, tempo de equipe e recursos públicos.
              </p>
            </div>
            
            {/* Card 2 - Gêmeos Digitais */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-blue-500 rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl mb-4 text-blue-400">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gêmeos Digitais</h3>
              <p className="text-slate-300 leading-relaxed">
                Se a GeoIA diz à sua empresa quando e onde agir, o Gêmeo Digital mostra como a ação vai impactar o mundo real.
              </p>
            </div>
            
            {/* Card 3 - IoT */}
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-purple-500 rounded-lg p-8 hover:bg-white/15 transition-colors duration-300">
              <div className="text-4xl mb-4 text-purple-400">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">IoT - Internet das Coisas</h3>
              <p className="text-slate-300 leading-relaxed">
                A IoT elimina a necessidade de "ir lá ver", pois o objeto "avisa" ao sistema como ele está. Se a GeoIA é o "cérebro" e o Gêmeo Digital é o "corpo", a Internet das Coisas (IoT) representa os "sentidos" do sistema.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Cards Interativos - Benefícios Estratégicos */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Benefícios Estratégicos da Geointeligência</h2>
          
          {/* Primeira Fileira - 4 Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {/* Card 1 - O Custo de Não Inovar */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">O Custo de Não Inovar</h3>
                <p className="text-sm leading-relaxed">Em limpeza urbana, a falta de geointeligência resulta em operações sem visibilidade: rotas não otimizadas geram congestionamento operacional, deslocamentos até vazadouro sem planejamento aumentam hora extra, e custos crescem sem controle. Prefeituras que implementam geointeligência conseguem previsibilidade orçamentária e eficiência operacional. A pergunta não é se você pode inovar, mas quanto custa não fazer isso.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-green-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">O Custo de Não Inovar</h3>
                <p className="text-sm text-muted-foreground mt-2">Qual o custo de não ter o custo on time?</p>
              </div>
            </div>

            {/* Card 2 - Eficiência Operacional */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Eficiência Operacional</h3>
                <p className="text-sm leading-relaxed">Transformar o invisível em visível: mapear densidade de resíduos em tempo real, rastrear cada tonelada até destinação final, mensura impacto ambiental. Resultado: operações baseadas em dados, não em intuição.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-blue-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Eficiência Operacional</h3>
                <p className="text-sm text-muted-foreground mt-2">Do invisível ao acionável</p>
              </div>
            </div>

            {/* Card 3 - Fiscalização Inteligente */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Fiscalização Inteligente</h3>
                <p className="text-sm leading-relaxed">IA detecta descarte irregular 24/7. Sensores monitoram ativos sem vistoria humana. Resposta em tempo real.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-purple-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Fiscalização Inteligente</h3>
                <p className="text-sm text-muted-foreground mt-2">Monitoramento 24/7</p>
              </div>
            </div>

            {/* Card 4 - Sustentabilidade */}
            <div className="group relative h-80 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg p-8 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-xl font-bold mb-4">Sustentabilidade</h3>
                <p className="text-sm leading-relaxed">Geointeligência transforma aterro de passivo ambiental em ativo produtivo: monitora biogás em tempo real para geração de energia limpa, reduz emissões de metano, rastreia cada tonelada de resíduo até reciclagem. Coleta seletiva inteligente com contentóres conectados otimiza fluxo. Compostagem comunitária e biodiegestores convertem orgânicos em recursos. Resultado: rumo a lixo zero com dados que comprovam impacto ambiental real.</p>
              </div>
              <div className="absolute inset-0 bg-white rounded-lg p-8 border-2 border-emerald-600 flex flex-col items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Sustentabilidade</h3>
                <p className="text-sm text-muted-foreground mt-2">De passivo a ativo ambiental</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Integração de Dados Passa Primeiro Pela Integração de Pessoas */}
      <section className="py-8 bg-slate-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Integração de dados passa primeiro pela integração de pessoas</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">O Pilar da Integração</h3>
              <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                A transformação digital da COMLURB não é apenas sobre tecnologia, mas sobre integração. Unificar SICO e SIURB, publicar dados abertos, e capacitar pessoas são os pilares do sucesso.
              </p>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0 text-sm">Integração de Dados</h3>
                    <p className="text-slate-400 text-xs">Unificar sistemas legados em uma plataforma moderna e escalável.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0 text-sm">Dados Abertos</h3>
                    <p className="text-slate-400 text-xs">Publicar dados para transparência e inovação externa.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">👥</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0 text-sm">Capacitação</h3>
                    <p className="text-slate-400 text-xs">Treinar equipes para operar e inovar com as novas ferramentas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600">
              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-white">A capacitação é o pilar da transformação digital</p>
              </div>
              
              {/* Timeline Vertical */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                        <span className="text-lg">🎓</span>
                      </div>
                      <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 mt-1"></div>
                    </div>
                    <div className="pt-1 pb-2">
                      <h4 className="text-sm font-bold text-white mb-1">Transformação de Talentos</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">Programas de treinamento em IA, GIS, análise de dados e operação de sistemas inteligentes.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                        <span className="text-lg">📊</span>
                      </div>
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mt-1"></div>
                    </div>
                    <div className="pt-1 pb-2">
                      <h4 className="text-sm font-bold text-white mb-1">Mentalidade de Dados</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">Cultura organizacional orientada por dados, decisões baseadas em evidências, inovação contínua.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                        <span className="text-lg">🚀</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-bold text-white mb-1">Inovação Contínua</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">Equipes empoderadas para experimentar, aprender e escalar soluções que funcionam.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Análise Comparativa */}
      <section id="roadmap" className="py-20 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Caminho para Smart Sanitation Global</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">Visão estratégica de 5 anos para transformar a COMLURB em referência mundial em geointeligência urbana e saneamento inteligente.</p>
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
                  <span className="text-2xl">🤝</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-green-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">Integração de Setores</h3>
                  <p className="text-sm text-muted-foreground mb-4">Troca de informações entre departamentos e informação de fácil acesso</p>
                  <p className="text-xs font-semibold text-green-600">Ano 1</p>
                </div>
              </div>
              
              {/* Fase 2 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-blue-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">Capacitação</h3>
                  <p className="text-sm text-muted-foreground mb-4">Treinamento de equipes em IA, GIS, análise de dados</p>
                  <p className="text-xs font-semibold text-blue-600">Anos 1-2</p>
                </div>
              </div>
              
              {/* Fase 3 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">🗺️</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-cyan-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">Camadas de Georreferenciamento</h3>
                  <p className="text-sm text-muted-foreground mb-4">Mapeamento e estruturação de dados geoespaciais</p>
                  <p className="text-xs font-semibold text-cyan-600">Anos 2-3</p>
                </div>
              </div>
              
              {/* Fase 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">🔗</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">Integração SICO + SIURB</h3>
                  <p className="text-sm text-muted-foreground mb-4">Unificação dos sistemas legados em plataforma moderna</p>
                  <p className="text-xs font-semibold text-purple-600">Anos 3-4</p>
                </div>
              </div>
              
              {/* Fase 5 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-amber-200 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">Referência Global</h3>
                  <p className="text-sm text-muted-foreground mb-4">COMLURB como benchmark mundial em Smart Sanitation</p>
                  <p className="text-xs font-semibold text-amber-600">Ano 5</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vision Statement */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-500">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold">Visão 2031:</span> A COMLURB será a primeira empresa pública de limpeza urbana do mundo a implementar geointeligência plena em escala, transformando 14 mil funcionários em agentes de mudança digital, gerando dados que informam decisões em tempo real e estabelecendo o padrão global para saneamento inteligente e sustentável.
            </p>
          </div>
        </div>
      </section>

{/* Networking - Relacionamentos Estratégicos */}
      <section className="py-20 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Networking</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Um congresso técnico transforma presença institucional em relacionamento, relacionamento em aprendizado e aprendizado em oportunidade concreta para a organização.
            </p>
          </div>
          
          <div className="w-full">
            <Tabs defaultValue="fortaleza" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent border-b border-slate-700">
                <TabsTrigger value="fortaleza" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Prefeitura de Fortaleza</TabsTrigger>
                <TabsTrigger value="belohorizonte" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Prefeitura de Belo Horizonte</TabsTrigger>
                <TabsTrigger value="topocart" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Topocart - Sistema de Varrição</TabsTrigger>
                <TabsTrigger value="esri" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">Esri - Imagem</TabsTrigger>
                <TabsTrigger value="geosampa" className="text-white data-[state=active]:text-white data-[state=active]:bg-slate-800 data-[state=active]:border-b-2 data-[state=active]:border-green-500 transition-all duration-200 hover:bg-slate-800/50">GeoSampa</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fortaleza" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Prefeitura de Fortaleza</h3>
                <div className="relative w-full">
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 snap-x snap-mandatory">
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="/manus-storage/20260617_150835_4146623e.webp" alt="O desafio dos Municípios" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="/manus-storage/20260617_150906_baf2126a.webp" alt="Fortaleza: Da Informação Territorial à Inteligência Geográfica" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="/manus-storage/20260617_151124_21c4e00c.webp" alt="Quando os dados começam a conversar" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="/manus-storage/20260617_151319_95c3796f.webp" alt="Inteligência Geográfica a Serviço dos Municípios" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="/manus-storage/20260617_151543_e9da6b46.webp" alt="Inteligência Geográfica Gera Resultados" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center">
                        <img src="/manus-storage/20260617_151725_b593595c.webp" alt="Os Desafios Continuam" className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mt-4 text-center">Deslize para ver mais imagens da apresentação</p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-700">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                      <img src="/manus-storage/20260617_183344_99ae7c35.webp" alt="Equipe da COMLURB" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full lg:w-2/3">
                      <p className="text-slate-300 leading-relaxed">Aqui você pode adicionar um texto descritivo sobre a imagem e a experiência da Prefeitura de Fortaleza com geointeligência.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="belohorizonte" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Prefeitura de Belo Horizonte</h3>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Belo Horizonte apresentou sua estratégia de transformação digital em gestão urbana, com foco em integração de dados geoespaciais para otimização de serviços públicos. A prefeitura compartilhou experiências em implementação de sistemas de informação geográfica para monitoramento de infraestrutura urbana.
                  </p>
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-3">Pontos-chave da apresentação</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Integração de dados de múltiplas secretarias em plataforma única</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Uso de geointeligência para planejamento de investimentos urbanos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Parcerias com universidades para pesquisa em soluções geoespaciais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Transparência de dados públicos através de portais abertos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="topocart" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Topocart - Sistema de Varrição</h3>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    A Topocart apresentou sua solução inovadora de rastreamento e otimização de operações de varrição urbana. O sistema utiliza GPS de alta precisão e sensores IoT para monitorar a eficiência das equipes de limpeza em tempo real.
                  </p>
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-3">Funcionalidades principais</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Rastreamento em tempo real de equipes de varrição</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Análise de cobertura geográfica e eficiência operacional</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Integração com sistemas de gestão de frota</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Relatórios automatizados de desempenho por setor</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-slate-300 text-sm italic">
                    Potencial de aplicação na COMLURB: Otimização de rotas de varrição, redução de custos operacionais e melhoria da cobertura de serviços.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="esri" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Esri - Imagem</h3>
                <p className="text-slate-300">Conteúdo será adicionado em breve...</p>
              </TabsContent>
              
              <TabsContent value="geosampa" className="bg-slate-800 p-8 rounded-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">GeoSampa - Portal de Dados Geoespaciais de São Paulo</h3>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    O GeoSampa é o portal de dados geoespaciais da Prefeitura de São Paulo, que centraliza informações cartográficas, cadastrais e operacionais da cidade. O projeto demonstra como dados públicos podem ser disponibilizados de forma aberta e acessível para melhorar a gestão urbana.
                  </p>
                  <div className="bg-slate-700 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-3">Características principais</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Acesso público a dados cartográficos e cadastrais da cidade</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Integração de dados de múltiplas secretarias municipais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>Ferramentas de visualização e análise de dados geoespaciais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-400 font-bold mt-1">•</span>
                        <span>APIs para integração com aplicações terceiras</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-slate-300 text-sm italic">
                    Aprendizado para COMLURB: Modelo de governança de dados geoespaciais e transparência pública que pode ser adaptado para o Rio de Janeiro.
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
            Conheça os profissionais da COMLURB que participaram do Congresso MundoGEO Connect 2026 e trouxeram os aprendizados que transformarão a empresa.
          </p>
          <ParticipantesGrupo />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Temos o Tamanho. Temos o Potencial.</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agora precisamos da decisão. A COMLURB pode se tornar a maior referência mundial em inteligência urbana para limpeza pública. O futuro começa agora.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100 font-semibold">
            Vamos Começar
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">COMLURB</h4>
              <p className="text-sm text-slate-400">Transformando a gestão urbana através de inteligência geográfica.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Evento</h4>
              <p className="text-sm text-slate-400">MundoGEO Connect 2026</p>
              <p className="text-sm text-slate-400">15 a 18 de Junho</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 COMLURB. Todos os direitos reservados. | Relatório de Viagem - Congresso MundoGEO Connect 2026</p>
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
      <p className="text-muted-foreground">A IoT elimina a necessidade de ir lá ver, pois o objeto avisa ao sistema como ele está. Se a GeoIA é o cérebro e o Gêmeo Digital é o corpo, a Internet das Coisas (IoT) representa os sentidos do sistema. Ela é a rede de dispositivos físicos (sensores, rastreadores, câmeras) que coleta dados brutos do mundo real e os envia para o sistema em tempo real.</p>
      
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-lg font-bold mb-4 text-foreground">Aplicações Práticas na COMLURB</h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Na Coleta</h5>
              <p className="text-sm text-muted-foreground">Sensores de peso e volume nos contéineres de lixo. O sistema recebe o sinal de que o setor X atingiu o limite de carga e despacha automaticamente o caminhão mais próximo, otimizando a logística de resíduos.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Na Varrição</h5>
              <p className="text-sm text-muted-foreground">GPS de alta precisão nos carrinhos dos garis e sopradores. O gestor consegue ver no mapa quais ruas já foram varridas hoje e quais ficaram "buracos" na operação, garantindo que 100% do logradouro foi atendido.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Na Poda</h5>
              <p className="text-sm text-muted-foreground">Sensores de estabilidade (acelerômetros) fixados no tronco de árvores históricas ou de alto risco. Se a árvore inclinar mais de 5 graus devido a ventos fortes, o IoT envia um alerta de emergência para o sistema, priorizando a equipe de poda para aquele local antes que ocorra um acidente.</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground italic">Com a IoT, o seu sistema deixa de depender de relatórios manuais preenchidos por humanos (que podem ter erros) e passa a ler a realidade diretamente dos objetos, tornando a gestão da empresa à prova de falhas.</p>
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
      <h3 className="text-xl font-bold mb-3 text-foreground">Gêmeos Digitais</h3>
      <p className="text-muted-foreground">Se a GeoIA diz à sua empresa quando e onde agir, o Gêmeo Digital mostra como a ação vai impactar o mundo real.</p>
      
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-lg font-bold mb-4 text-foreground">A Integração: Sentir, Pensar e Agir</h4>
          <p className="text-sm text-muted-foreground mb-6">A integração da GeoIA e dos Gêmeos Digitais como um ciclo de "Sentir, Pensar e Agir".</p>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Coleta de Resíduos</h5>
              <p className="text-sm text-muted-foreground"><strong>Com Gêmeo Digital:</strong> Você pode simular no modelo 3D se um novo modelo de caminhão (maior ou elétrico) consegue fazer as curvas em ruas estreitas de uma comunidade ou se a nova posição de um contêiner vai bloquear o fluxo de pedestres na calçada.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Varrição de Logradouros</h5>
              <p className="text-sm text-muted-foreground"><strong>Com Gêmeo Digital:</strong> O gestor visualiza um mapa de calor (heatmap) de sujeira no modelo 3D da cidade. Se uma praça aparece sempre "vermelha" no Gêmeo Digital, a empresa pode decidir, via simulação, que é mais barato instalar mais três lixeiras naquele ponto do que enviar o gari duas vezes ao dia.</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Poda de Árvores (Manejo de Precisão no ArboRio)</h5>
              <p className="text-sm text-muted-foreground"><strong>Com Gêmeo Digital:</strong> Antes de enviar o cesto aéreo, o engenheiro florestal abre o Gêmeo Digital e faz uma poda virtual. Ele vê exatamente qual galho deve ser cortado e simula se a remoção daquela massa foliar vai deixar um prédio vizinho exposto a um calor excessivo (perda de sombra), permitindo um ajuste fino no plano de manejo.</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-lg font-bold mb-4 text-foreground">Comparação: GeoIA vs Gêmeo Digital</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-semibold text-foreground">Atividade</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">O que a GeoIA faz (Inteligência)</th>
                    <th className="text-left py-2 px-3 font-semibold text-foreground">O que o Gêmeo Digital faz (Visualização/Teste)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Coleta</td>
                    <td className="py-2 px-3 text-muted-foreground">Prevé o volume de lixo e cria a rota mais curta.</td>
                    <td className="py-2 px-3 text-muted-foreground">Testa se o caminhão cabe na rua e o impacto no tránsito.</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Varrição</td>
                    <td className="py-2 px-3 text-muted-foreground">Detecta lixo no chão via câmeras automaticamente.</td>
                    <td className="py-2 px-3 text-muted-foreground">Identifica visualmente onde o lixo mais se acumula no mapa.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Poda</td>
                    <td className="py-2 px-3 text-muted-foreground">Identifica conflitos com a rede elétrica via laser.</td>
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
      <h3 className="text-xl font-bold mb-3 text-foreground">GeoIA (Inteligência Artificial Geoespacial)</h3>
      <p className="text-muted-foreground">É o "cérebro" que interpreta o mapa e devolve insights permitindo que a gestão da limpeza, das áreas verdes e qualquer outro serviço seja feita com precisão cirúrgica, otimização, tempo de equipe e recursos públicos.</p>
      
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-lg font-bold mb-4 text-foreground">GeoIA na Limpeza</h4>
          <p className="text-sm text-muted-foreground mb-4">Para a operação de limpeza GeoIA foca em logística e eficiência:</p>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-foreground mb-2">Otimização de Rotas Dinâmicas</h5>
              <p className="text-sm text-muted-foreground">Diferente de rotas fixas, a GeoIA pode recalcular o trajeto das equipes de limpeza em tempo real, baseando-se na densidade de resíduos detectada por sensores ou frequência de chamados (como o 1746).</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Manutenção Preditiva da Arborização</h5>
              <p className="text-sm text-muted-foreground">No caso do ArboRio, a GeoIA pode analisar o histórico de crescimento de certas espécies e condições climáticas para prever qual árvore tem maior risco de queda ou necessidade de poda iminente, transformando a limpeza urbana de "reativa" em "preventiva".</p>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-2">Monitoramento de Pontos Críticos</h5>
              <p className="text-sm text-muted-foreground">Identificação de padrões geográficos de descarte irregular de lixo, permitindo que a empresa direcione ações de limpeza e fiscalização para os locais com maior probabilidade de reincidência.</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-lg font-bold mb-4 text-foreground">Comparação: GIS Tradicional vs GeoIA</h4>
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
                    <td className="py-2 px-3 text-muted-foreground">Detecção automática via imagens e sensores.</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Análise</td>
                    <td className="py-2 px-3 text-muted-foreground">Visualização do que aconteceu (passado).</td>
                    <td className="py-2 px-3 text-muted-foreground">Predição do que vai acontecer (futuro).</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Operação</td>
                    <td className="py-2 px-3 text-muted-foreground">Equipes seguem cronogramas fixos.</td>
                    <td className="py-2 px-3 text-muted-foreground">Equipes são enviadas por demanda preditiva.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-semibold text-foreground">Decisão</td>
                    <td className="py-2 px-3 text-muted-foreground">Baseada em experiência e mapas estáticos.</td>
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
        ‹
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
        ›
      </button>
    </div>
  );
}

const networkingContacts: NetworkingContact[] = [
  {
    numero: "1",
    titulo: "Contato com especialistas em cidades inteligentes, maturidade digital e estruturação de dados urbanos",
    resumo: "Discussões com especialistas sobre maturidade tecnológica das cidades, WebGIS, dados abertos, IDE, CTM, BIM, CIM e inteligência geográfica.",
    conteudo: `Um dos contatos mais relevantes foi estabelecido a partir das discussões conduzidas por especialistas que trataram da maturidade tecnológica das cidades, do uso de WebGIS, dados abertos, IDE, CTM, BIM, CIM, gêmeos digitais e inteligência geográfica.

A mensagem central desse bloco foi simples, mas profunda: a cidade inteligente não começa pela tecnologia mais sofisticada. Ela começa pela organização da informação.

Foi apresentado o chamado "paradoxo brasileiro", no qual muitas cidades brasileiras avançaram em plataformas de visualização, como WebGIS, antes de consolidarem plenamente suas infraestruturas de dados, seus cadastros, suas bases territoriais e seus modelos de governança.

Esse contato é importante para a COMLURB porque a Companhia vive exatamente esse momento de transição. O desafio não é apenas produzir mais dados, mas organizar os dados existentes em uma estrutura confiável, integrada e útil para a tomada de decisão.`
  },
  {
    numero: "2",
    titulo: "Contato com Júlio Ribeiro — FF Solutions / Symetri LATAM",
    resumo: "Profissional ligado à transformação digital, planejamento urbano e soluções voltadas à modelagem de dados urbanos e integração tecnológica.",
    conteudo: `Entre os contatos registrados, destaca-se o de Júlio Ribeiro, profissional ligado à área de transformação digital, planejamento urbano, tecnologias aplicadas à cidade e soluções voltadas à modelagem, dados urbanos e integração tecnológica.

Sua apresentação trouxe uma frase que sintetiza o espírito de todo o Congresso:
"A cidade do presente não se improvisa, ela se mede, se planeja e se constrói sobre dados."

Essa frase deve ser lida como uma orientação estratégica. Para a COMLURB, ela significa que a limpeza urbana moderna não pode depender apenas da experiência empírica, da memória das equipes ou da reação a demandas pontuais.

O contato com esse perfil técnico é relevante porque permite aproximar a COMLURB de soluções e metodologias que conectam planejamento urbano, infraestrutura de dados, modelagem digital e transformação institucional.`
  },
  {
    numero: "3",
    titulo: "Contato com representantes da PRODABEL e da Prefeitura de Belo Horizonte — Cadastro Territorial Multifinalitário",
    resumo: "Experiência de Belo Horizonte na construção e utilização do Cadastro Territorial Multifinalitário com trajetória de três décadas de geotecnologias.",
    conteudo: `Outro contato de grande relevância foi com a experiência de Belo Horizonte, apresentada por Karla Albuquerque de Vasconcelos Borges, da PRODABEL/PBH, sobre o Cadastro Territorial Multifinalitário de Belo Horizonte.

A apresentação mostrou uma trajetória longa e madura de estruturação da informação territorial. Belo Horizonte demonstrou que uma base geográfica única não nasce pronta. Ela é construída ao longo do tempo, com diagnóstico, governança, definição de padrões, integração entre órgãos, regras de atualização, banco de dados geográficos, geosserviços, portal de informações e sistemas consumidores.

O ponto mais forte da experiência de Belo Horizonte foi a defesa de uma visão única do território municipal. A cidade foi apresentada a partir de diferentes camadas: cidade aprovada, cidade real, cidade cartorial e cidade tributária.

Para a COMLURB, essa discussão tem aplicação direta. A Companhia executa serviços na cidade real, em áreas formais, informais, consolidadas, em transformação ou em conflito cadastral.`
  },
  {
    numero: "4",
    titulo: "Contato com Fernanda Farias — Inteligência Geográfica e Gestão Municipal",
    resumo: "Palestra didática sobre inteligência geográfica que conecta cadastro, cartografia, planejamento urbano e infraestrutura para compreender padrões urbanos.",
    conteudo: `Outro bloco de contatos foi associado à palestra sobre inteligência geográfica e gestão municipal, conduzida por Fernanda Farias. A abordagem foi especialmente didática e dialogou diretamente com a realidade dos municípios brasileiros.

A palestra partiu de uma ideia muito simples: toda decisão pública acontece em algum lugar. Uma escola está em algum lugar. Uma unidade de saúde está em algum lugar. Uma praça, uma rua, uma feira, um ponto de descarte irregular, uma área de risco também estão em algum lugar.

Quando os dados começam a conversar, surge a inteligência geográfica. Isso significa conectar cadastro, cartografia, planejamento urbano, infraestrutura, informações ambientais, mercado imobiliário, informações tributárias e dados operacionais.

Para a COMLURB, esse contato é extremamente aderente. A limpeza urbana é uma política pública espacial por natureza. Ela depende de localização, frequência, rota, acesso, tipo de resíduo, densidade urbana, comportamento da população, uso do solo, sazonalidade, eventos, clima e turismo.`
  },
  {
    numero: "5",
    titulo: "Contato com Givanildo José Silva — Topocart",
    resumo: "Engenheiro agrimensor com experiência em mapeamentos cartográficos, cadastro tributário, SIG e iniciativas com inteligência geográfica, drones e gêmeos digitais.",
    conteudo: `Também foi estabelecido contato com Givanildo José Silva, engenheiro agrimensor e diretor técnico da Topocart, empresa com experiência em mapeamentos cartográficos multifinalitários, cadastro tributário, PGV, SIG, projetos em municípios brasileiros e iniciativas envolvendo inteligência geográfica, drones e gêmeos digitais.

A apresentação abordou ganhos e desafios na implementação de projetos de inteligência geográfica e gêmeos digitais nos municípios. O conteúdo deixou claro que não existe inteligência geográfica sem base cartográfica confiável, cadastro estruturado, escolha adequada de plataformas tecnológicas e capacitação de pessoal.

Entre os ganhos apresentados, destacaram-se respostas rápidas às necessidades da gestão, transparência nos processos, processos mapeados, adequação de equipes, rapidez no atendimento ao cidadão e maior conhecimento da cidade.

Para a COMLURB, o contato com a Topocart é relevante porque a Companhia pode se beneficiar de tecnologias de mapeamento de alta precisão, aerolevantamento, drones, sensores, nuvem de pontos, modelos 3D e inventários territoriais.`
  },
  {
    numero: "6",
    titulo: "Contato com especialistas em Inteligência Artificial aplicada à Geotecnologia",
    resumo: "Palestras sobre machine learning, deep learning, redes neurais e uso de IA para mapeamento de áreas de risco e análise de imagens territoriais.",
    conteudo: `Outro grupo de contatos foi formado a partir das palestras sobre inteligência artificial aplicada à geotecnologia. Os conteúdos apresentados abordaram machine learning, deep learning, redes neurais, modelos de classificação, análise de imagens, sensoriamento remoto, identificação de padrões territoriais e uso de IA para apoio à tomada de decisão.

Um dos exemplos apresentados tratou do uso de inteligência artificial para mapear áreas de risco de deslizamento em São Sebastião. Esse exemplo demonstrou que a IA pode combinar variáveis ambientais, geográficas e territoriais para identificar áreas suscetíveis a eventos críticos.

A principal lição desse bloco é que a inteligência artificial não substitui o conhecimento técnico. Ela amplia a capacidade de análise quando há dados organizados, objetivos claros e validação humana.

Para a COMLURB, esse contato é importante porque abre caminho para aplicações futuras em identificação automática de áreas com acúmulo de resíduos, análise de imagens para detectar descarte irregular e previsão de aumento de resíduos em períodos específicos.`
  },
  {
    numero: "7",
    titulo: "Contato com Helton Uchoa — Prefeitura Eficiente",
    resumo: "Estudo de caso sobre inteligência geográfica nos municípios e uso de IA em fiscalização de obras urbanas com metodologia clara e participação humana.",
    conteudo: `A palestra de Helton Uchoa, associada à iniciativa Prefeitura Eficiente, trouxe um estudo de caso sobre inteligência geográfica nos municípios e uso de inteligência artificial em fiscalização de obras urbanas de pavimentação.

O caso apresentado envolveu um desafio do Tribunal de Contas da União relacionado à fiscalização de obras de pequeno porte. A solução combinou robôs, inteligência artificial, documentos públicos, extração de dados, revisão humana, coleta externa e análise especializada.

O ponto mais importante foi a clareza metodológica: a expectativa era que a IA pudesse permear todas as etapas, mas a realidade mostrou que ela atua melhor quando aplicada a tarefas específicas, bem definidas e integradas a um processo com participação humana.

Essa lição é extremamente importante para a COMLURB. A IA funciona melhor quando o processo está claro, os dados estão organizados e há especialistas validando os resultados. Pode inspirar projetos-piloto em análise automatizada de ordens de serviço, leitura de documentos e apoio à fiscalização.`
  },
  {
    numero: "8",
    titulo: "Contato com desenvolvedores e soluções voltadas à comunicação com o cidadão — Lixo Hora Certa e Sico",
    resumo: "Aproximação com soluções voltadas à comunicação direta com o cidadão sobre horários de coleta, redução de descartes irregulares e melhoria da relação operação-cidadão.",
    conteudo: `Entre os contatos realizados, também se destaca a aproximação com soluções voltadas à comunicação direta com o cidadão, especialmente relacionadas ao aplicativo Lixo Hora Certa e ao Sico.

Esse contato é relevante porque a limpeza urbana depende, em grande parte, da previsibilidade e da participação da população. Quando o cidadão sabe o dia, o horário e a forma correta de dispor seus resíduos, a cidade ganha em organização, eficiência e limpeza.

A ideia de um aplicativo ou solução digital voltada ao horário correto da coleta dialoga diretamente com a missão da COMLURB. A Companhia já possui conhecimento técnico sobre roteiros, frequência, áreas atendidas, tipos de coleta e especificidades territoriais.

Para a COMLURB, esse contato pode contribuir para comunicação mais clara sobre dias e horários de coleta, redução de resíduos colocados fora do horário, melhoria da relação entre operação e cidadão, e envio de alertas sobre mudanças de rota, feriados e eventos. A importância está em lembrar que tecnologia pública não deve servir apenas à gestão interna. Ela também deve facilitar a vida do cidadão.`
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
    cargo: "Coordenador Técnico",
    departamento: "Diretoria de Limpeza Urbana (DLU)",
    curriculo: "Felipe Xavier é Coordenador Técnico da Diretoria de Limpeza Urbana, responsável pela supervisão de projetos técnicos e implementação de soluções inovadoras em limpeza urbana. Com experiência em gestão operacional e tecnologia, Felipe liderou iniciativas de otimização de rotas e eficiência operacional na COMLURB.",
    posicao: { left: "44%", top: "30%" }
  },
  {
    nome: "ALEXANDRA ROBERTA DA SILVA",
    cargo: "Especialista em Dados | Business Intelligence | Indicadores e Performance",
    departamento: "Rio de Janeiro – RJ | (21) 99964-5556 | alexa.roberta19@gmail.com | linkedin.com/in/alexandrarobertadasilva",
    curriculo: "Sou Especialista em Dados e Inteligência de Negócios, com sólida experiência em análise de dados, Business Intelligence e indicadores de performance, atuando diretamente no suporte à tomada de decisão estratégica. Ao longo da minha trajetória, desenvolvi dashboards executivos, análises estratégicas e automações de processos que apoiam lideranças na definição de diretrizes e ações.\n\nAtualmente curso MBA em IA, Data Science e Big Data para Negócios, aprofundando minha atuação em soluções analíticas orientadas a resultados e geração de valor para o negócio.\n\nColoco-me à disposição para contribuir com minha experiência analítica, visão estratégica e forte orientação a resultados.",
    posicao: { left: "55%", top: "52%" }
  },
  {
    nome: "RÔMULO GUIMARÃES GIÁCOMO",
    cargo: "Engenheiro Sênior",
    departamento: "Diretoria de Serviços Urbanos (DSU)",
    curriculo: "Rômulo Guimarães Giácomo é Engenheiro Sênior da Diretoria de Serviços Urbanos, especialista em infraestrutura urbana e soluções de engenharia. Com vasta experiência em projetos de grande escala, Rômulo contribui para a otimização de processos e implementação de tecnologias avançadas.",
    posicao: { left: "61%", top: "25%" }
  },
  {
    nome: "JAQUELINE NASCIMENTO",
    cargo: "Coordenadora Geral da Assessoria",
    departamento: "Diretoria de Serviços Urbanos (DSU)",
    curriculo: "Minha trajetória na COMLURB tem sido marcada pelo compromisso com a gestão pública, com a melhoria dos serviços urbanos e com a busca constante por soluções que tornem a operação mais eficiente, integrada e transparente.\n\nTive a oportunidade de contribuir diretamente com áreas estratégicas da Companhia, passando pela gestão regional da limpeza urbana, pelo acompanhamento de metas operacionais, pela organização de processos internos e pela articulação entre equipes, diretorias e órgãos parceiros. Minha experiência na ponta da operação me permitiu compreender, de forma prática, os desafios reais da cidade, das equipes em campo e da população que depende diariamente dos serviços prestados pela COMLURB.\n\nAtuei na análise de dados, no planejamento de serviços, no acompanhamento de indicadores, na melhoria de fluxos de trabalho e na construção de soluções voltadas à modernização da gestão.\n\nTenho prazer em transformar problemas complexos em soluções fáceis e acessível para todos.\n\nSigo comprometida com a valorização das equipes e com a construção de uma gestão pública mais moderna, humana e eficiente. Minha trajetória ainda está em construção, mas carrego a certeza de que meu potencial está justamente na capacidade de unir experiência prática, sensibilidade para ouvir as pessoas e coragem para propor mudanças e inovações.",
    posicao: { left: "70%", top: "58%" }
  },
  {
    nome: "MARCELO DANTAS",
    cargo: "Desenvolvedor Web Fullstack",
    departamento: "FGI",
    curriculo: "Marcelo Dantas é Desenvolvedor Web Fullstack, especialista em desenvolvimento de aplicações web modernas e integração de sistemas. Com experiência em arquitetura de software e implementação de soluções escaláveis, Marcelo é fundamental na transformação digital da COMLURB.",
    posicao: { left: "73%", top: "20%" }
  },
  {
    nome: "DIEGO DE FREITAS DIAS SARMANHO LOPES",
    cargo: "Desenvolvedor Web Fullstack",
    departamento: "FGI",
    curriculo: "Diego de Freitas Dias Sarmanho Lopes é Desenvolvedor Web Fullstack, especialista em desenvolvimento full-stack e implementação de plataformas integradas. Com experiência em tecnologias modernas e metodologias ágeis, Diego contribui para a construção de soluções inovadoras em geointeligência urbana.",
    posicao: { left: "87%", top: "28%" }
  }
];

function ParticipantesGrupo() {
  const [selectedParticipant, setSelectedParticipant] = React.useState<Participante | null>(null);

  return (
    <>
      {/* Foto do Grupo - Visível em ambas as versões */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-8">
        <img 
          src="/manus-storage/grupo-mundogeo-2026_04b39992.png" 
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

      {/* Modal de Currículo */}
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
                  ✕
                </button>
              </div>
              
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Currículo e Experiências</h3>
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
