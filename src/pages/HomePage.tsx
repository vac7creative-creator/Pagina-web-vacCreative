import React from 'react';
import { ArrowUpRight, MessageCircle, Phone, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCategoryCard } from '../components/ServiceCategoryCard';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import { Button } from '../components/Button';
import { SERVICES_DATA } from '../data/services';
import { getFeaturedProjects } from '../data/portfolio';
import { CONTACT_DATA } from '../data/contact';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* HERO SECTION */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 overflow-hidden">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Lead */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                <span>Estudio Creativo Contemporáneo</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.05] text-balance">
                Diseño, audiovisual y experiencias digitales.
              </h1>

              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl text-pretty">
                Desarrollamos identidades de marca memorables, producción audiovisual con narrativa cinematográfica y soluciones interactivas adaptadas al ritmo del mundo actual.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/servicios" variant="primary" size="lg">
                  Explorar Especialidades
                </Button>
                <Button
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Hablemos por WhatsApp</span>
                </Button>
              </div>

              {/* Minimal Trust Metadata unboxed */}
              <div className="pt-6 sm:pt-8 border-t border-neutral-200 dark:border-white/10 grid grid-cols-3 gap-6 max-w-lg text-left">
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tabular-nums">
                    5
                  </div>
                  <div className="text-xs text-neutral-500 font-normal mt-0.5">
                    Disciplinas integradas
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-neutral-500 font-normal mt-0.5">
                    Dedicación personalizada
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tabular-nums">
                    4K
                  </div>
                  <div className="text-xs text-neutral-500 font-normal mt-0.5">
                    Estándar de producción
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset using public/ image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-xl bg-neutral-100 dark:bg-neutral-900 group">
                <img
                  src="/images/editorial_studio_hero_1790817276666.jpg"
                  alt="V.A.C. Creative Studio Workstation"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
                    Arquitectura Visual
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
                    Donde la estética rigurosa converge con la función comunicativa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CREATIVE ECOSYSTEM (SERVICES CATEGORIES) */}
      <section id="servicios" className="scroll-mt-24">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              number="01"
              kicker="Ecosistema Creativo"
              title="Disciplinas & Soluciones"
              description="Nuestros cinco pilares abarcan desde la conceptualización de marca hasta la entrega de experiencias interactivas."
              className="mb-0"
            />
            <Button href="/servicios" variant="outline" size="sm" className="self-start md:self-end">
              <span>Ver todos los subservicios</span>
              <ArrowUpRight size={14} />
            </Button>
          </div>

          {/* Fully Clickable Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((category, idx) => (
              <ServiceCategoryCard key={category.id} category={category} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* SELECTED WORKS / TRABAJOS SELECCIONADOS (Real Projects Only, 3-4 items) */}
      <section id="proyectos" className="scroll-mt-24">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader
              number="02"
              kicker="Portafolio Curado"
              title="Trabajos Seleccionados"
              description="Proyectos interactivos reales diseñados y desplegados por V.A.C. Creative."
              className="mb-0"
            />
            <Button href="/proyectos" variant="outline" size="sm" className="self-start md:self-end">
              <span>Ver todos los proyectos</span>
              <ArrowUpRight size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* NOSOTROS / STUDIO PHILOSOPHY */}
      <section id="nosotros" className="scroll-mt-24 py-12">
        <Container size="wide">
          <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-neutral-50/70 dark:bg-[#12141C] p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  <Sparkles size={14} />
                  <span>Filosofía & Método</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] text-balance">
                  Un estudio multidisciplinario con vocación por la claridad y el detalle.
                </h2>

                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  En V.A.C. Creative no creemos en fórmulas prefabricadas ni en estéticas vacías. Abordamos cada encargo como una oportunidad de articulación visual auténtica: combinamos criterio gráfico tradicional, técnicas audiovisuales contemporáneas y herramientas digitales para construir piezas con trascendencia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      Dirección artística integral de principio a fin
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      Adaptabilidad para formatos físicos y digitales
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      Comunicación fluida y entrega puntual
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      Asesoría y acompañamiento de marca
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button href="/nosotros" variant="outline" size="md">
                    Conocer más del estudio
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
                    alt="Espacio de trabajo creativo V.A.C."
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="scroll-mt-24">
        <Container size="wide">
          <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] p-8 sm:p-14 lg:p-20 shadow-xs">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 block mb-3">
                04 · Contacto Directo
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-4">
                ¿Tienes un proyecto en mente? Hablemos.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Nos encantaría conocer tus objetivos, evaluar requerimientos técnicos y proponerte la solución creativa más adecuada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-neutral-100 dark:border-white/5">
              {/* WhatsApp Card */}
              <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <MessageCircle size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-1">
                    Atención Inmediata
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4">
                    Respuesta ágil vía WhatsApp para cotizaciones y dudas.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                >
                  <span>Iniciar conversación</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Phones Card */}
              <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                    <Phone size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-1">
                    Líneas Telefónicas
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4">
                    Contacto directo con nuestro equipo de producción.
                  </p>
                </div>
                <div className="space-y-1.5 pt-2">
                  {CONTACT_DATA.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.value}`}
                      className="block text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <Mail size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-1">
                    Correo Corporativo
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4">
                    Para briefs formales, licitaciones o alianzas.
                  </p>
                </div>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="block text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate pt-2"
                >
                  {CONTACT_DATA.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
