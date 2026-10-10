import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight, Sparkles, FolderArchive } from 'lucide-react';
import { Link, useRouter } from '../utils/router';
import { ThemeToggle } from './ThemeToggle';
import { CONTACT_DATA } from '../data/contact';
import { SERVICES_DATA } from '../data/services';
import { getDynamicProjectNavigation } from '../data/portfolio';

const GERENTE_CREATIVO_QUOTE_URL = 'https://gerente-creativo-de-vac.vercel.app/?tab=quote';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'projects' | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const { pathname } = useRouter();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Dynamic project navigation groups based purely on existing projects
  const dynamicProjectGroups = getDynamicProjectNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu: 'services' | 'projects') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isCurrent = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    if (href === '/servicios') return pathname.startsWith('/servicios');
    if (href === '/proyectos') return pathname.startsWith('/proyectos');
    return pathname === href;
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeDropdown
            ? 'bg-[#FAF8F5]/95 dark:bg-[#0B0C0F]/95 backdrop-blur-md border-b border-[#E7E1D4] dark:border-white/10 py-3.5 shadow-xs'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Logo */}
          <Link
            href="/"
            onClick={() => setActiveDropdown(null)}
            className="flex items-center gap-3 group focus-visible:ring-2 rounded-md"
          >
            <img
              src={CONTACT_DATA.logoUrl}
              alt="V.A.C. Creative Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white leading-none">
                V.A.C<span className="text-[#C5A059]">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400 font-semibold mt-0.5">
                CREATIVE
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links with Dropdowns */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
            {/* INICIO */}
            <Link
              href="/"
              className={`relative py-1 transition-colors duration-200 ${
                isCurrent('/')
                  ? 'text-neutral-950 dark:text-white font-bold'
                  : 'hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              <span>INICIO</span>
              {isCurrent('/') && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"
                />
              )}
            </Link>

            {/* SERVICIOS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/servicios"
                  className={`relative py-1 transition-colors duration-200 ${
                    isCurrent('/servicios') || activeDropdown === 'services'
                      ? 'text-neutral-950 dark:text-white font-bold'
                      : 'hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <span>SERVICIOS</span>
                  {isCurrent('/servicios') && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"
                    />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === 'services' ? null : 'services');
                  }}
                  aria-expanded={activeDropdown === 'services'}
                  aria-label="Desplegar menú de servicios"
                  className="p-1 rounded text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180 text-[#C5A059]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Panel: Servicios */}
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full -left-20 w-[440px] pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl border border-[#E7E1D4] dark:border-white/10 bg-[#FAF8F5]/98 dark:bg-[#121319]/98 backdrop-blur-xl shadow-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E7E1D4] dark:border-white/10">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                        DISCIPLINAS & ESPECIALIDADES
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400">
                        {SERVICES_DATA.length} ÁREAS
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
                      {SERVICES_DATA.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/servicios/${cat.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-start justify-between p-3 rounded-xl hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-all text-left"
                        >
                          <div className="space-y-0.5 max-w-[280px]">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] text-[#C5A059] font-bold">
                                {cat.number}
                              </span>
                              <h4 className="font-sans text-sm font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#C5A059] transition-colors">
                                {cat.title}
                              </h4>
                            </div>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 font-normal tracking-normal">
                              {cat.description}
                            </p>
                          </div>
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-[#C5A059] transition-colors mt-0.5">
                            {cat.subServices.length} esp. →
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom: Ver todos los servicios */}
                    <div className="pt-2 border-t border-[#E7E1D4] dark:border-white/10">
                      <Link
                        href="/servicios"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#C5A059] dark:hover:text-black transition-all group font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 dark:text-neutral-200"
                      >
                        <span>Ver todos los servicios</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PROYECTOS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/proyectos"
                  className={`relative py-1 transition-colors duration-200 ${
                    isCurrent('/proyectos') || activeDropdown === 'projects'
                      ? 'text-neutral-950 dark:text-white font-bold'
                      : 'hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <span>PROYECTOS</span>
                  {isCurrent('/proyectos') && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"
                    />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === 'projects' ? null : 'projects');
                  }}
                  aria-expanded={activeDropdown === 'projects'}
                  aria-label="Desplegar menú de proyectos"
                  className="p-1 rounded text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === 'projects' ? 'rotate-180 text-[#C5A059]' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Panel: Proyectos */}
              {activeDropdown === 'projects' && (
                <div
                  className="absolute top-full -left-20 w-[420px] pt-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200"
                  onMouseEnter={() => handleMouseEnter('projects')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl border border-[#E7E1D4] dark:border-white/10 bg-[#FAF8F5]/98 dark:bg-[#121319]/98 backdrop-blur-xl shadow-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E7E1D4] dark:border-white/10">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                        PORTAFOLIO EN LÍNEA
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400">
                        PROYECTOS ACTIVOS
                      </span>
                    </div>

                    <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                      {dynamicProjectGroups.map((group) => (
                        <div key={group.categorySlug} className="space-y-1.5">
                          <div className="flex items-center justify-between px-2 pt-1">
                            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                              {group.categoryName}
                            </span>
                            <span className="font-mono text-[10px] text-[#C5A059] font-semibold">
                              {group.count} proyectos
                            </span>
                          </div>

                          <div className="space-y-1">
                            {group.types.map((type) => (
                              <Link
                                key={type.subServiceSlug}
                                href={type.url}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-all text-left"
                              >
                                <div className="space-y-0.5">
                                  <div className="font-sans text-xs font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-[#C5A059] transition-colors">
                                    {type.title}
                                  </div>
                                  <div className="text-[10px] font-mono text-neutral-500 tracking-normal">
                                    {type.count} proyectos interactivos
                                  </div>
                                </div>
                                <span className="font-mono text-[10px] text-neutral-400 group-hover:text-[#C5A059] group-hover:translate-x-0.5 transition-transform">
                                  Ver →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom: Ver todos los proyectos */}
                    <div className="pt-2 border-t border-[#E7E1D4] dark:border-white/10">
                      <Link
                        href="/proyectos"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#C5A059] dark:hover:text-black transition-all group font-mono text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 dark:text-neutral-200"
                      >
                        <span>Ver todos los proyectos</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* NOSOTROS */}
            <Link
              href="/nosotros"
              className={`relative py-1 transition-colors duration-200 ${
                isCurrent('/nosotros')
                  ? 'text-neutral-950 dark:text-white font-bold'
                  : 'hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              <span>NOSOTROS</span>
              {isCurrent('/nosotros') && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"
                />
              )}
            </Link>

            {/* CONTACTO */}
            <Link
              href="/contacto"
              className={`relative py-1 transition-colors duration-200 ${
                isCurrent('/contacto')
                  ? 'text-neutral-950 dark:text-white font-bold'
                  : 'hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              <span>CONTACTO</span>
              {isCurrent('/contacto') && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"
                />
              )}
            </Link>
          </nav>

          {/* Zone 3: Actions (Theme Toggle & COTIZAR CTA) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            {/* Main "COTIZAR" Button: Directs to Gerente Creativo */}
            <a
              href={GERENTE_CREATIVO_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir cotizador interactivo con el Gerente Creativo"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] px-4 sm:px-5 py-2.5 rounded-lg bg-neutral-900 text-white hover:bg-black dark:bg-[#C5A059] dark:text-[#0B0C0F] dark:hover:bg-[#DDAF56] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Cotizar</span>
              <ArrowUpRight size={14} className="opacity-80" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer with Accordion Support */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FAF8F5] dark:bg-[#12141A] p-6 sm:p-8 shadow-2xl transition-transform duration-300 flex flex-col justify-between border-l border-[#E7E1D4] dark:border-white/10 overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Header Brand */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E7E1D4] dark:border-white/10 mb-6">
              <div className="flex flex-col">
                <span className="font-sans text-xl font-black tracking-tight text-neutral-900 dark:text-white leading-none">
                  V.A.C<span className="text-[#C5A059]">.</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400 font-semibold mt-0.5">
                  CREATIVE
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar navegación móvil"
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              {/* INICIO */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold tracking-[0.15em] py-2 flex items-center justify-between transition-colors ${
                  isCurrent('/')
                    ? 'text-[#C5A059]'
                    : 'text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059]'
                }`}
              >
                <span>INICIO</span>
                {isCurrent('/') && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
              </Link>

              {/* SERVICIOS Accordion */}
              <div className="border-y border-[#E7E1D4]/60 dark:border-white/5 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href="/servicios"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-bold tracking-[0.15em] py-2 transition-colors ${
                      isCurrent('/servicios')
                        ? 'text-[#C5A059]'
                        : 'text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059]'
                    }`}
                  >
                    <span>SERVICIOS</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-label="Alternar categorías de servicios"
                    className="p-2 text-neutral-500 hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180 text-[#C5A059]' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 pr-1 pb-3 space-y-2 animate-in fade-in duration-200">
                    {SERVICES_DATA.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/servicios/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors"
                      >
                        <span className="font-mono text-[10px] text-[#C5A059] mr-2">
                          {cat.number}
                        </span>
                        <span>{cat.title}</span>
                      </Link>
                    ))}
                    <Link
                      href="/servicios"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center gap-1.5 pt-2 text-[11px] font-mono uppercase tracking-wider text-[#C5A059] font-bold"
                    >
                      <span>Ver todos los servicios</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </div>

              {/* PROYECTOS Accordion */}
              <div className="border-b border-[#E7E1D4]/60 dark:border-white/5 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href="/proyectos"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-bold tracking-[0.15em] py-2 transition-colors ${
                      isCurrent('/proyectos')
                        ? 'text-[#C5A059]'
                        : 'text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059]'
                    }`}
                  >
                    <span>PROYECTOS</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    aria-label="Alternar categorías de proyectos"
                    className="p-2 text-neutral-500 hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileProjectsOpen ? 'rotate-180 text-[#C5A059]' : ''
                      }`}
                    />
                  </button>
                </div>

                {mobileProjectsOpen && (
                  <div className="pl-3 pr-1 pb-3 space-y-2 animate-in fade-in duration-200">
                    {dynamicProjectGroups.map((group) => (
                      <div key={group.categorySlug} className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block pt-1">
                          {group.categoryName} ({group.count})
                        </span>
                        {group.types.map((type) => (
                          <Link
                            key={type.subServiceSlug}
                            href={type.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors pl-2 border-l border-neutral-300 dark:border-white/10"
                          >
                            <span>{type.title}</span>
                            <span className="text-[10px] font-mono text-neutral-400 ml-1.5">
                              ({type.count})
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link
                      href="/proyectos"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-flex items-center gap-1.5 pt-2 text-[11px] font-mono uppercase tracking-wider text-[#C5A059] font-bold"
                    >
                      <span>Ver todos los proyectos</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </div>

              {/* NOSOTROS */}
              <Link
                href="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold tracking-[0.15em] py-2 flex items-center justify-between transition-colors ${
                  isCurrent('/nosotros')
                    ? 'text-[#C5A059]'
                    : 'text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059]'
                }`}
              >
                <span>NOSOTROS</span>
                {isCurrent('/nosotros') && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
              </Link>

              {/* CONTACTO */}
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold tracking-[0.15em] py-2 flex items-center justify-between transition-colors ${
                  isCurrent('/contacto')
                    ? 'text-[#C5A059]'
                    : 'text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059]'
                }`}
              >
                <span>CONTACTO</span>
                {isCurrent('/contacto') && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
              </Link>
            </nav>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-6 border-t border-[#E7E1D4] dark:border-white/10 space-y-3 mt-6">
            <a
              href={GERENTE_CREATIVO_QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 text-white dark:bg-[#C5A059] dark:text-[#0B0C0F] font-bold text-xs uppercase tracking-[0.15em] hover:bg-black dark:hover:bg-[#DDAF56] transition-colors"
            >
              <span>Cotizar con Gerente Creativo</span>
              <ArrowUpRight size={16} />
            </a>

            <p className="text-[11px] text-neutral-500 text-center font-mono">
              {CONTACT_DATA.phones[0].display} · {CONTACT_DATA.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
