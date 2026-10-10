import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useRouter } from '../utils/router';
import { ThemeToggle } from './ThemeToggle';
import { CONTACT_DATA } from '../data/contact';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'INICIO', href: '/' },
    { label: 'SERVICIOS', href: '/servicios' },
    { label: 'PROYECTOS', href: '/proyectos' },
    { label: 'NOSOTROS', href: '/nosotros' },
    { label: 'CONTACTO', href: '/contacto' },
  ];

  const isCurrent = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    if (href === '/servicios') return pathname.startsWith('/servicios');
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 dark:bg-[#0B0C0F]/90 backdrop-blur-md border-b border-[#E7E1D4] dark:border-white/10 py-3.5 shadow-xs'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:ring-2 rounded-md">
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

          {/* Zone 2: Navigation Links (Reference: Centered, uppercase, luxury tracking with gold underline) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-semibold tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => {
              const active = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    active
                      ? 'text-neutral-950 dark:text-white font-bold'
                      : 'hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Theme Toggle & CTA) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FAF8F5] dark:bg-[#12141A] p-6 sm:p-8 shadow-2xl transition-transform duration-300 flex flex-col justify-between border-l border-[#E7E1D4] dark:border-white/10 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
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
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const active = isCurrent(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-bold tracking-[0.15em] py-2 flex items-center justify-between transition-colors ${
                      active
                        ? 'text-[#C5A059]'
                        : 'text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E7E1D4] dark:border-white/10 space-y-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 text-white dark:bg-[#C5A059] dark:text-[#0B0C0F] font-bold text-xs uppercase tracking-[0.15em] hover:bg-black dark:hover:bg-[#DDAF56] transition-colors"
            >
              <span>Escribir por WhatsApp</span>
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
