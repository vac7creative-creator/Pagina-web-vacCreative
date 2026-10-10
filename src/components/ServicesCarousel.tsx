import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { Container } from './Container';
import { SERVICES_DATA, ServiceCategory, SubService } from '../data/services';
import {
  GERENTE_CREATIVO_COMMERCIAL_CARDS,
  GerenteCreativoServiceItem,
} from '../data/gerenteCreativoCatalog';
import { Link } from '../utils/router';
import { getGerenteCreativoQuoteUrl } from '../utils/quoteLinks';

export type HybridCardOrigin = 'gerente-creativo' | 'vac-creative';

export interface HybridServiceCard {
  id: string;
  origin: HybridCardOrigin;
  title: string;
  subtitle: string;
  image: string;
  deliveryTime?: string;
  price?: string;
  categorySlug: string;
  categoryTitle: string;
  categoryNumber: string;
  badgeTag: string;
  features: string[];
  detailUrl: string;
  quoteUrl: string;
}

// Slugs de subservicios cubiertos directamente por las fichas comerciales de Gerente Creativo
const REPRESENTED_SLUGS_SET = new Set<string>([
  'logos',
  'dg-logos',
  'flyers',
  'dg-flyers',
  'edicion-video',
  'av-edicion',
  'logos-animados',
  'am-logos',
  'landing-pages',
  'menus-digitales',
  'menus',
  'invitaciones-digitales',
  'invitaciones',
]);

export const ServicesCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Fichas comerciales directas de Gerente Creativo (PRIMERA PRIORIDAD VISUAL)
  const gerenteCreativoCards: HybridServiceCard[] = useMemo(() => {
    return GERENTE_CREATIVO_COMMERCIAL_CARDS.map((gc) => ({
      id: gc.id,
      origin: 'gerente-creativo',
      title: gc.title,
      subtitle: gc.subtitle,
      image: gc.image,
      deliveryTime: gc.deliveryTime,
      price: gc.minPrice,
      categorySlug: gc.categorySlug,
      categoryTitle: gc.categoryTitle,
      categoryNumber: gc.categoryNumber,
      badgeTag: gc.badge,
      features: gc.features,
      detailUrl: gc.detailUrl,
      quoteUrl: gc.quoteUrl,
    }));
  }, []);

  // 2. Subservicios restantes de V.A.C. Creative no representados en las fichas anteriores (SEGUNDA PARTE)
  const vacRemainingCards: HybridServiceCard[] = useMemo(() => {
    const list: HybridServiceCard[] = [];

    SERVICES_DATA.forEach((cat) => {
      cat.subServices.forEach((sub) => {
        // Excluir subservicios que ya tienen una ficha comercial dedicada en Gerente Creativo
        if (REPRESENTED_SLUGS_SET.has(sub.slug) || REPRESENTED_SLUGS_SET.has(sub.id)) {
          return;
        }

        list.push({
          id: `vac-${cat.slug}-${sub.slug}`,
          origin: 'vac-creative',
          title: sub.title,
          subtitle: sub.description,
          image: sub.image,
          deliveryTime: undefined,
          price: sub.price,
          categorySlug: cat.slug,
          categoryTitle: cat.shortTitle || cat.title,
          categoryNumber: cat.number,
          badgeTag: cat.shortTitle || cat.title,
          features: sub.features || [],
          detailUrl: `/servicios/${cat.slug}/${sub.slug}`,
          quoteUrl: getGerenteCreativoQuoteUrl(sub.slug, cat.slug),
        });
      });
    });

    return list;
  }, []);

  // Catálogo híbrido combinado:
  // Fichas comerciales de Gerente Creativo PRIMERO, seguidas de los subservicios restantes de V.A.C. Creative
  const allHybridItems: HybridServiceCard[] = useMemo(() => {
    return [...gerenteCreativoCards, ...vacRemainingCards];
  }, [gerenteCreativoCards, vacRemainingCards]);

  // Filtrado reactivo por categoría preservando el orden híbrido
  const filteredItems: HybridServiceCard[] = useMemo(() => {
    if (activeCategoryFilter === 'all') {
      return allHybridItems;
    }
    // Para una categoría seleccionada: primero las comerciales de esa categoría, luego las de V.A.C.
    const gcOfCategory = gerenteCreativoCards.filter(
      (item) => item.categorySlug === activeCategoryFilter
    );
    const vacOfCategory = vacRemainingCards.filter(
      (item) => item.categorySlug === activeCategoryFilter
    );
    return [...gcOfCategory, ...vacOfCategory];
  }, [allHybridItems, gerenteCreativoCards, vacRemainingCards, activeCategoryFilter]);

  // Contadores dinámicos por categoría para la barra de pestañas
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    SERVICES_DATA.forEach((cat) => {
      const gcCount = gerenteCreativoCards.filter((i) => i.categorySlug === cat.slug).length;
      const vacCount = vacRemainingCards.filter((i) => i.categorySlug === cat.slug).length;
      counts[cat.slug] = gcCount + vacCount;
    });
    return counts;
  }, [gerenteCreativoCards, vacRemainingCards]);

  // Comprobar estado de scroll horizontal para habilitar/deshabilitar flechas
  const checkScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
  }, []);

  useEffect(() => {
    checkScrollState();
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);
    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState, filteredItems]);

  // Reiniciar scroll al cambiar filtro
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategoryFilter]);

  // Manejo de botones de scroll manual
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 340;
    const scrollAmount = direction === 'left' ? -cardWidth * 1.4 : cardWidth * 1.4;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Autoplay suave cada 4.5 segundos (se pausa en hover o si prefers-reduced-motion)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft + clientWidth >= scrollWidth - 12) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, filteredItems]);

  return (
    <section
      id="escaparate-servicios"
      aria-label="Escaparate Comercial y de Servicios V.A.C."
      className="relative scroll-mt-28 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Container size="wide">
        {/* ========================================================
            CABECERA DEL ESCAPARATE: Kicker, Título, Controles
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            {/* Kicker editorial */}
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-bold text-[#C5A059] tracking-[0.22em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span>CATÁLOGO COMERCIAL & SERVICIOS</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                {allHybridItems.length} OPCIONES DISPONIBLES
              </span>
            </div>

            {/* Título de sección */}
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              Escaparate de <span className="gold-gradient-text">Servicios & Fichas Comerciales</span>
            </h2>

            {/* Bajada explicativa */}
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
              Descubre las soluciones insignia de Gerente Creativo y nuestros subservicios especializados. Cotiza al instante con tu servicio preseleccionado o conoce sus especificaciones técnicas.
            </p>
          </div>

          {/* Botones de navegación y Ver Todo */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 dark:text-white hover:text-[#C5A059] dark:hover:text-[#ECC880] transition-colors py-2 px-3 rounded-lg border border-neutral-200 dark:border-white/10 hover:border-[#C5A059]/40 bg-white/50 dark:bg-white/5 cursor-pointer"
            >
              <span>Ver Todos</span>
              <ArrowUpRight size={13} className="text-[#C5A059]" />
            </Link>

            {/* Flechas de desplazamiento */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-[#121318] p-1 rounded-xl border border-neutral-200 dark:border-white/10 shadow-2xs">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Desplazar servicios a la izquierda"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'text-neutral-800 dark:text-neutral-200 hover:bg-[#C5A059]/10 hover:text-[#C5A059] cursor-pointer'
                    : 'text-neutral-300 dark:text-neutral-700 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Desplazar servicios a la derecha"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'text-neutral-800 dark:text-neutral-200 hover:bg-[#C5A059]/10 hover:text-[#C5A059] cursor-pointer'
                    : 'text-neutral-300 dark:text-neutral-700 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            BARRA DE FILTROS POR CATEGORÍA
            ======================================================== */}
        <div className="relative mb-6 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max pb-2">
            <button
              type="button"
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategoryFilter === 'all'
                  ? 'bg-neutral-900 text-white dark:bg-[#C5A059] dark:text-[#0B0C0F] shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-white/5 border border-transparent hover:border-neutral-200 dark:hover:border-white/10'
              }`}
            >
              Todos ({allHybridItems.length})
            </button>

            {SERVICES_DATA.map((cat) => {
              const count = categoryCounts[cat.slug] || 0;
              const isActive = activeCategoryFilter === cat.slug;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategoryFilter(cat.slug)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-[#C5A059] dark:text-[#0B0C0F] shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-white/5 border border-transparent hover:border-neutral-200 dark:hover:border-white/10'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{cat.number}</span>
                  <span>{cat.shortTitle || cat.title}</span>
                  <span className="text-[10px] font-mono opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            CONTENEDOR HORIZONTAL SCROLLABLE DE TARJETAS HÍBRIDAS
            ======================================================== */}
        <div
          ref={scrollContainerRef}
          role="region"
          aria-label="Carrusel de servicios y fichas comerciales"
          tabIndex={0}
          className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pt-1 pb-4 -mx-4 sm:mx-0 px-4 sm:px-0 focus:outline-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => {
            const isGerenteCreativo = item.origin === 'gerente-creativo';

            return (
              <article
                key={item.id}
                className={`group snap-start shrink-0 w-[290px] sm:w-[330px] md:w-[350px] flex flex-col justify-between rounded-2xl border transition-all duration-300 shadow-2xs hover:shadow-xl overflow-hidden ${
                  isGerenteCreativo
                    ? 'border-[#C5A059]/30 dark:border-[#C5A059]/25 bg-white dark:bg-[#12141C] hover:border-[#C5A059]'
                    : 'border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] hover:border-[#C5A059]/70'
                }`}
              >
                {/* Parte Superior: Media + Badges */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Scrim gradiente sutil para legibilidad editorial */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                    {/* Tag de Categoría en esquina superior izquierda */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-[#ECC880]">{item.categoryNumber}</span>
                      <span>·</span>
                      <span className="truncate max-w-[130px]">{item.categoryTitle}</span>
                    </div>

                    {/* Tiempo de entrega en esquina superior derecha (fichas de Gerente Creativo) */}
                    {item.deliveryTime && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs border border-white/10 text-neutral-300 font-mono text-[10px]">
                        <Clock size={11} className="text-[#C5A059]" />
                        <span>{item.deliveryTime}</span>
                      </div>
                    )}

                    {/* Badge de Precio en esquina inferior izquierda */}
                    {item.price && (
                      <div className="absolute bottom-3 left-3 bg-[#111215]/95 dark:bg-black/90 border border-[#C5A059]/40 text-[#ECC880] font-mono text-xs px-2.5 py-1 rounded-sm tracking-tight font-semibold shadow-sm">
                        {item.price}
                      </div>
                    )}

                    {/* Badge de tipo de ficha comercial en esquina inferior derecha */}
                    {isGerenteCreativo && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-sm bg-[#C5A059]/90 text-black font-mono text-[9px] font-bold uppercase tracking-widest">
                        <Sparkles size={10} />
                        <span>Comercial</span>
                      </div>
                    )}
                  </div>

                  {/* Cuerpo de la Tarjeta */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <Link href={item.detailUrl} className="block group/title">
                      <h3 className="font-sans text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-950 dark:text-white group-hover/title:text-[#C5A059] dark:group-hover/title:text-[#ECC880] transition-colors line-clamp-1 leading-snug">
                        {item.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal line-clamp-2">
                      {item.subtitle}
                    </p>

                    {/* Bullets o características destacadas */}
                    {item.features && item.features.length > 0 && (
                      <div className="pt-2 border-t border-neutral-100 dark:border-white/5 space-y-1">
                        {item.features.slice(0, 2).map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 font-mono truncate"
                          >
                            <span className="text-[#C5A059] font-bold">·</span>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer de Acciones: "Ver Más" y "Cotizar" */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-100 dark:border-white/5">
                    {/* Botón 1: Ver Más (Navegación interna en la MISMA PESTAÑA) */}
                    <Link
                      href={item.detailUrl}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-white/30 bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-900 dark:text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-all cursor-pointer text-center"
                    >
                      <span>Ver Más</span>
                      <ArrowUpRight size={13} className="text-[#C5A059] shrink-0" />
                    </Link>

                    {/* Botón 2: Ver Paquetes (para fichas comerciales de Gerente Creativo) / Cotizar (para subservicios VAC) en la MISMA PESTAÑA */}
                    <a
                      href={item.quoteUrl}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-[#C5A059] dark:hover:bg-[#DDAF56] dark:text-[#0B0C0F] text-[11px] font-bold uppercase tracking-[0.14em] transition-all shadow-2xs hover:shadow-sm cursor-pointer text-center"
                    >
                      <span>{isGerenteCreativo ? 'Ver Paquetes' : 'Cotizar'}</span>
                      <ExternalLink size={12} className="shrink-0 opacity-80" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Indicador inferior de navegación y resumen */}
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 px-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="uppercase tracking-wider">
              {filteredItems.length} opciones en esta sección
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase">
              10 comerciales · {vacRemainingCards.length} especialidades
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500 text-[10px] uppercase tracking-wider">
            <span>Usa las flechas o desliza horizontalmente</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
