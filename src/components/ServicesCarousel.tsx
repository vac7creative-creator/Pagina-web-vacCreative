import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Container } from './Container';
import { SERVICES_DATA, ServiceCategory, SubService } from '../data/services';
import { Link } from '../utils/router';
import { getGerenteCreativoQuoteUrl } from '../utils/quoteLinks';

export interface FlattenedServiceItem {
  id: string;
  subService: SubService;
  category: ServiceCategory;
  categorySlug: string;
  categoryTitle: string;
  categoryNumber: string;
  detailUrl: string;
  quoteUrl: string;
}

export const ServicesCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Flatten all subservices with their parent category context
  const allItems: FlattenedServiceItem[] = useMemo(() => {
    return SERVICES_DATA.flatMap((cat) =>
      cat.subServices.map((sub) => ({
        id: `${cat.slug}-${sub.slug}`,
        subService: sub,
        category: cat,
        categorySlug: cat.slug,
        categoryTitle: cat.shortTitle || cat.title,
        categoryNumber: cat.number,
        detailUrl: `/servicios/${cat.slug}/${sub.slug}`,
        quoteUrl: getGerenteCreativoQuoteUrl(sub.slug, cat.slug),
      }))
    );
  }, []);

  // Filter items based on active category tab
  const filteredItems = useMemo(() => {
    if (activeCategoryFilter === 'all') return allItems;
    return allItems.filter((item) => item.categorySlug === activeCategoryFilter);
  }, [allItems, activeCategoryFilter]);

  // Update scroll navigation buttons state
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

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategoryFilter]);

  // Manual scroll actions
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 320; // approximate card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Autoplay functionality: gentle advance every 4 seconds, pauses on hover/focus
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;
      // If reached the end, loop smoothly back to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused, filteredItems]);

  return (
    <section
      id="escaparate-servicios"
      aria-label="Escaparate de Servicios y Subservicios"
      className="relative scroll-mt-28 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Container size="wide">
        {/* ========================================================
            HEADER DEL CARRUSEL: Kicker, Título, Controles
            ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            {/* Kicker editorial */}
            <div className="flex items-center gap-2.5 font-mono text-[11px] font-bold text-[#C5A059] tracking-[0.22em] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>EXPLORACIÓN RÁPIDA</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                {allItems.length} ESPECIALIDADES
              </span>
            </div>

            {/* Título de sección */}
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              Escaparate de <span className="gold-gradient-text">Servicios</span>
            </h2>

            {/* Bajada explicativa */}
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Descubre nuestras soluciones creativas al instante. Conoce los detalles de cada subservicio o cotiza directamente con el servicio preseleccionado.
            </p>
          </div>

          {/* Botones de navegación y Ver Todo */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 dark:text-white hover:text-[#C5A059] dark:hover:text-[#ECC880] transition-colors py-2 px-3 rounded-lg border border-neutral-200 dark:border-white/10 hover:border-[#C5A059]/40 bg-white/50 dark:bg-white/5"
            >
              <span>Ver Todos</span>
              <ArrowUpRight size={13} className="text-[#C5A059]" />
            </Link>

            {/* Flechas de navegación del carrusel */}
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
              Todos ({allItems.length})
            </button>

            {SERVICES_DATA.map((cat) => {
              const count = cat.subServices.length;
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
            CONTENEDOR HORIZONTAL SCROLLABLE
            ======================================================== */}
        <div
          ref={scrollContainerRef}
          role="region"
          aria-label="Carrusel de servicios"
          tabIndex={0}
          className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pt-1 pb-4 -mx-4 sm:mx-0 px-4 sm:px-0 focus:outline-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => {
            const { subService, categorySlug, categoryTitle, categoryNumber, detailUrl, quoteUrl } =
              item;

            return (
              <article
                key={item.id}
                className="group snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[340px] flex flex-col justify-between rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] hover:border-[#C5A059]/70 dark:hover:border-[#C5A059]/70 transition-all duration-300 shadow-2xs hover:shadow-xl overflow-hidden"
              >
                {/* Parte Superior: Media + Badges */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={subService.image}
                      alt={subService.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Scrim gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Tag de Categoría en esquina superior izquierda */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-xs border border-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-[#ECC880]">{categoryNumber}</span>
                      <span>·</span>
                      <span className="truncate max-w-[130px]">{categoryTitle}</span>
                    </div>

                    {/* Badge de Precio en esquina inferior izquierda si existe */}
                    {subService.price && (
                      <div className="absolute bottom-3 left-3 bg-[#111215]/90 dark:bg-black/85 border border-white/10 text-[#ECC880] font-mono text-xs px-2.5 py-1 rounded-sm tracking-tight font-semibold">
                        {subService.price}
                      </div>
                    )}

                    {/* Enlace rápido a detalle sobre el thumbnail */}
                    <Link
                      href={detailUrl}
                      aria-label={`Ver detalles de ${subService.title}`}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-xs flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:bg-[#C5A059] group-hover:text-black group-hover:scale-105 transition-all shadow-sm"
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>

                  {/* Cuerpo de la Tarjeta */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <Link href={detailUrl} className="block group/title">
                      <h3 className="font-sans text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-950 dark:text-white group-hover/title:text-[#C5A059] dark:group-hover/title:text-[#ECC880] transition-colors line-clamp-1 leading-snug">
                        {subService.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal line-clamp-2">
                      {subService.description}
                    </p>

                    {/* Bullets o características destacadas */}
                    {subService.features && subService.features.length > 0 && (
                      <div className="pt-1 border-t border-neutral-100 dark:border-white/5 space-y-1">
                        {subService.features.slice(0, 2).map((feat, idx) => (
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
                    {/* Botón 1: Ver Más (Navegación interna en misma pestaña) */}
                    <Link
                      href={detailUrl}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-neutral-200 dark:border-white/10 hover:border-neutral-900 dark:hover:border-white/30 bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-900 dark:text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-all cursor-pointer text-center"
                    >
                      <span>Ver Más</span>
                      <ArrowUpRight size={13} className="text-[#C5A059] shrink-0" />
                    </Link>

                    {/* Botón 2: Cotizar (Deep link en MISMA PESTAÑA sin target='_blank') */}
                    <a
                      href={quoteUrl}
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-[#C5A059] dark:hover:bg-[#DDAF56] dark:text-[#0B0C0F] text-[11px] font-bold uppercase tracking-[0.14em] transition-all shadow-2xs hover:shadow-sm cursor-pointer text-center"
                    >
                      <span>Cotizar</span>
                      <ExternalLink size={12} className="shrink-0 opacity-80" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Indicador inferior sutil de navegación horizontal */}
        <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 px-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span className="uppercase tracking-wider">
              {filteredItems.length} opciones disponibles
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
