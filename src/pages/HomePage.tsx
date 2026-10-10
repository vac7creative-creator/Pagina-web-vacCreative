import React from 'react';
import { ArrowUpRight, MessageCircle, Phone, Mail, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '../components/Container';
import { Hero3DMoodboard } from '../components/hero/Hero3DMoodboard';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import { SERVICES_DATA } from '../data/services';
import { getFeaturedProjects } from '../data/portfolio';
import { CONTACT_DATA } from '../data/contact';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Link } from '../utils/router';
import { GERENTE_CREATIVO_QUOTE_BASE_URL } from '../utils/quoteLinks';

export const HomePage: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="space-y-24 sm:space-y-36 pb-20 overflow-x-hidden">
      {/* ========================================================
          HERO SECTION (Reference: Visual Art Direction, Split 48/52)
          ======================================================== */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle Luxury Ambient Brush Accent */}
        <div
          aria-hidden="true"
          className="absolute top-12 left-0 w-96 h-96 bg-gradient-to-br from-[#ECC880]/10 via-[#C5A059]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />

        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Lead (48% width) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8">
              {/* Micro Kicker (Reference: IDEAS · DISEÑO · PRODUCCIÓN · EXPERIENCIAS) */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  IDEAS · DISEÑO · PRODUCCIÓN · EXPERIENCIAS
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                  ESTUDIO CREATIVO CONTEMPORÁNEO
                </span>
              </div>

              {/* Master Headline (Exact Current Words, Styled Like Reference) */}
              <div className="relative">
                <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.02] text-balance">
                  Diseño, <br />
                  <span className="gold-gradient-text tracking-tight">audiovisual</span> <br />
                  y experiencias digitales.
                </h1>

                {/* Reference Circular Callout Floating Accent */}
                <div className="hidden xl:flex absolute -top-4 right-0 items-center gap-2.5 max-w-[170px] text-right">
                  <div className="w-8 h-8 rounded-full border border-[#C5A059]/60 text-[#C5A059] flex items-center justify-center shrink-0">
                    <ArrowUpRight size={14} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold leading-tight">
                    TRANSFORMAMOS IDEAS EN EXPERIENCIAS REALES
                  </span>
                </div>
              </div>

              {/* Subtitle / Description (Exact Current Text) */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl text-pretty">
                Desarrollamos identidades de marca memorables, producción audiovisual con narrativa cinematográfica y soluciones interactivas adaptadas al ritmo del mundo actual.
              </p>

              {/* Action Buttons (Reference: Pill Black/Gold + Outline) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-neutral-900 text-white hover:bg-black dark:bg-[#C5A059] dark:text-[#0B0C0F] dark:hover:bg-[#DDAF56] text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <span>Explorar Especialidades</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl border border-neutral-300 dark:border-white/15 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle size={15} className="text-[#C5A059]" />
                  <span>Hablemos por WhatsApp</span>
                </a>
              </div>

              {/* Minimal Trust Metadata (Reference bottom left metrics) */}
              <div className="pt-6 sm:pt-8 border-t border-[#E7E1D4] dark:border-white/10 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tabular-nums tracking-tight">
                    5
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Disciplinas integradas
                  </div>
                </div>
                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tabular-nums tracking-tight">
                    100<span className="text-[#C5A059]">%</span>
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Dedicación personalizada
                  </div>
                </div>
                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tabular-nums tracking-tight">
                    4K
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Estándar de producción
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Moodboard Layered Composition (52% width) */}
            <div className="lg:col-span-6 xl:col-span-6">
              <Hero3DMoodboard />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          ROW 02: ECOSISTEMA CREATIVO (Integrated Creative Band)
          ======================================================== */}
      <section id="servicios" className="scroll-mt-28">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Section Lead Banner (Left Card, Reference: 02 ECOSISTEMA CREATIVO) */}
            <div className="lg:col-span-4 rounded-2xl p-8 sm:p-10 border border-[#E7E1D4] dark:border-white/10 bg-white dark:bg-[#121318] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C5A059] tracking-widest uppercase mb-4">
                  <span>02</span>
                  <span aria-hidden="true">—</span>
                  <span>ECOSISTEMA CREATIVO</span>
                </div>

                <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-5">
                  Disciplinas & Soluciones
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-8">
                  Nuestros cinco pilares abarcan desde la conceptualización de marca hasta la entrega de experiencias interactivas. Soluciones creativas para un mundo en constante cambio.
                </p>
              </div>

              <div>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-950 dark:text-white hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors group"
                >
                  <span>Conocer Más</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#C5A059]" />
                </Link>
              </div>
            </div>

            {/* Categories Integrated Creative Strip (Right Cards) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {SERVICES_DATA.map((category) => {
                const previewImg = category.subServices[0]?.image || category.heroImage;
                return (
                  <Link
                    key={category.id}
                    href={`/servicios/${category.slug}`}
                    className="group flex flex-col justify-between p-6 rounded-2xl border border-[#E7E1D4] dark:border-white/10 bg-white dark:bg-[#13141A] hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer overflow-hidden min-h-[340px]"
                  >
                    <div>
                      {/* Top Bar: Number and Kicker */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-[#C5A059] tracking-widest tabular-nums">
                          {category.number}
                        </span>
                        <div className="w-7 h-7 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059] transition-all duration-300">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-[#C5A059] transition-colors leading-tight">
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-4 line-clamp-2">
                        {category.description}
                      </p>
                    </div>

                    {/* Bottom: Image Preview & Subservice tags */}
                    <div className="space-y-3 pt-2">
                      {previewImg && (
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-100 dark:bg-black/50 border border-neutral-100 dark:border-white/5">
                          <img
                            src={previewImg}
                            alt={category.title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                        </div>
                      )}

                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
                        <span>{category.subServices.length} ESPECIALIDADES</span>
                        <span className="text-[#C5A059] font-bold group-hover:translate-x-0.5 transition-transform">
                          EXPLORAR →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          ROW 03: PORTAFOLIO CURADO (Dark Cinema Zone, Reference: 03)
          ======================================================== */}
      <section id="proyectos" className="scroll-mt-28 py-16 sm:py-20 bg-[#0C0D10] text-white relative">
        {/* Subtle Decorative Golden Hairlines */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container size="wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C5A059] tracking-widest uppercase mb-3">
                <span>03</span>
                <span aria-hidden="true">·</span>
                <span>PORTAFOLIO CURADO</span>
              </div>
              <h2 className="font-sans text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05] text-balance">
                Trabajos Seleccionados
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                Proyectos interactivos reales diseñados y desplegados por V.A.C. Creative. Una visión integrada que refleja nuestra forma de pensar, diseñar y construir marcas.
              </p>
            </div>

            <div className="flex items-center gap-4 self-start lg:self-end">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-[#C5A059] text-xs font-bold uppercase tracking-[0.16em] text-white hover:text-[#C5A059] transition-all group"
              >
                <span>Ver todos los proyectos</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </Link>
            </div>
          </div>

          {/* Real Featured Projects Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          {/* Reference: Right Side Floating Vertical Studio Signature */}
          <div className="pt-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500 border-t border-white/10 mt-12">
            <span>V.A.C. CREATIVE · SHOWCASE</span>
            <span>IDEAS QUE CONECTAN</span>
          </div>
        </Container>
      </section>

      {/* ========================================================
          FILOSOFÍA Y MÉTODO (Studio Manifesto Presentation)
          ======================================================== */}
      <section id="nosotros" className="scroll-mt-28 py-10 sm:py-16">
        <Container size="wide">
          <div className="rounded-3xl border border-[#E7E1D4] dark:border-white/10 bg-white dark:bg-[#121318] p-8 sm:p-14 lg:p-18 shadow-sm">
            <div className="max-w-4xl space-y-8">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                <Sparkles size={13} />
                <span>FILOSOFÍA & MÉTODO DE ESTUDIO</span>
              </div>

              {/* Headline */}
              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08] text-balance">
                Un estudio multidisciplinario con vocación por la claridad y el detalle.
              </h2>

              {/* Manifesto Description */}
              <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                En V.A.C. Creative no creemos en fórmulas prefabricadas ni en estéticas vacías. Abordamos cada encargo como una oportunidad de articulación visual auténtica: combinamos criterio gráfico tradicional, técnicas audiovisuales contemporáneas y herramientas digitales para construir piezas con trascendencia.
              </p>

              {/* 4 Pillars with Gold Numbers & Hairlines */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t border-[#E7E1D4] dark:border-white/10">
                <div className="space-y-2 p-5 rounded-xl border border-neutral-200/60 dark:border-white/5 bg-[#FAF8F5]/60 dark:bg-white/[0.02]">
                  <span className="font-mono text-sm font-bold text-[#C5A059]">01.</span>
                  <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                    Dirección artística integral de principio a fin
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Supervisión conceptual continua para que cada pieza respete la personalidad de marca.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-neutral-200/60 dark:border-white/5 bg-[#FAF8F5]/60 dark:bg-white/[0.02]">
                  <span className="font-mono text-sm font-bold text-[#C5A059]">02.</span>
                  <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                    Adaptabilidad para formatos físicos y digitales
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Composiciones preparadas para imprenta offset, pantallas táctiles y formatos de video vertical.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-neutral-200/60 dark:border-white/5 bg-[#FAF8F5]/60 dark:bg-white/[0.02]">
                  <span className="font-mono text-sm font-bold text-[#C5A059]">03.</span>
                  <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                    Comunicación fluida y entrega puntual
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Canales de atención directa para resolver dudas, revisar versiones y coordinar entregas.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-neutral-200/60 dark:border-white/5 bg-[#FAF8F5]/60 dark:bg-white/[0.02]">
                  <span className="font-mono text-sm font-bold text-[#C5A059]">04.</span>
                  <p className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                    Asesoría y acompañamiento de marca
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Orientación profesional para potenciar la presencia de tu negocio y optimizar la inversión.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 dark:text-white hover:text-[#C5A059] transition-colors group"
                >
                  <span>Conocer más del estudio</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#C5A059]" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          ROW 04: CONTACTO (Contraportada Editorial, Reference: 04)
          ======================================================== */}
      <section id="contacto" className="scroll-mt-28">
        <Container size="wide">
          <div className="rounded-3xl border border-[#E7E1D4] dark:border-white/10 bg-white dark:bg-[#121318] p-8 sm:p-14 lg:p-20 shadow-sm relative overflow-hidden">
            {/* Background Warm Gold Glow */}
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column (Reference: 04 HAGAMOS ALGO INCREÍBLE) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C5A059] tracking-widest uppercase">
                  <span>04</span>
                  <span aria-hidden="true">—</span>
                  <span>CONTACTO DIRECTO</span>
                </div>

                <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.04] text-balance">
                  ¿Tienes un proyecto en mente? <br />
                  <span className="gold-gradient-text">Hablemos.</span>
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-xl">
                  Tu proyecto también puede estar aquí. Cuéntame tu idea y la hacemos realidad. Evaluamos requerimientos técnicos y te proponemos la solución visual más adecuada.
                </p>

                {/* Heroic CTA Buttons (Gerente Creativo Cotizador + WhatsApp) */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={GERENTE_CREATIVO_QUOTE_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-4 rounded-xl bg-neutral-950 text-white hover:bg-black dark:bg-[#C5A059] dark:text-[#0B0C0F] dark:hover:bg-[#DDAF56] text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
                  >
                    <span>Cotizar Proyecto</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl border border-neutral-300 dark:border-white/15 bg-white/40 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-900 dark:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer"
                  >
                    <MessageCircle size={16} className="text-[#C5A059]" />
                    <span>Iniciar Conversación</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Studio Coordinates & Channels */}
              <div className="lg:col-span-5 space-y-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E7E1D4] dark:border-white/10 lg:pl-12">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                    ESTUDIO
                  </span>
                  <h3 className="font-sans text-xl font-black tracking-tight text-neutral-900 dark:text-white">
                    {CONTACT_DATA.studioName}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    Diseño · Audiovisual · Digital
                  </p>
                </div>

                {/* Telephones */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    LÍNEAS DIRECTAS
                  </span>
                  <div className="space-y-1 font-mono text-sm">
                    {CONTACT_DATA.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.value}`}
                        className="block text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059] dark:hover:text-[#C5A059] font-bold transition-colors"
                      >
                        {phone.display} <span className="text-xs text-neutral-400 font-sans font-normal">({phone.label})</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    CORREO CORPORATIVO
                  </span>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="block font-mono text-sm text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059] dark:hover:text-[#C5A059] font-bold transition-colors truncate"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>

                {/* Social Networks List (Reference bottom-right icons) */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                    CANALES OFICIALES
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {CONTACT_DATA.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7E1D4] dark:border-white/10 hover:border-[#C5A059] text-xs text-neutral-700 dark:text-neutral-300 hover:text-[#C5A059] font-mono transition-colors"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight size={11} className="opacity-60" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
