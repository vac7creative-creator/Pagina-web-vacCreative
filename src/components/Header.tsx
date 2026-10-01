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
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ];

  const isCurrent = (href: string) => {
    if (href === '/servicios') return pathname.startsWith('/servicios');
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#090A0D]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-white/10 py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:ring-2 rounded-md">
            <img
              src={CONTACT_DATA.logoUrl}
              alt="V.A.C. Creative Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              V.A.C. <span className="font-sans font-light text-sky-600 dark:text-sky-400 text-base sm:text-lg tracking-normal">Creative</span>
            </span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => {
              const active = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`editorial-link transition-colors py-1 ${
                    active
                      ? 'text-neutral-950 dark:text-white font-semibold'
                      : 'hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Theme Toggle & CTA) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-200"
            >
              <span>Cotizar</span>
              <ArrowUpRight size={14} className="opacity-75" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white dark:bg-[#12141C] p-6 shadow-2xl transition-transform duration-300 flex flex-col justify-between ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10 mb-6">
              <span className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                Navegación
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 py-1"
              >
                Inicio
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-neutral-200 dark:border-white/10 space-y-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-sky-600 text-white font-medium text-sm hover:bg-sky-700 transition-colors"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
            <p className="text-xs text-neutral-500 text-center">
              {CONTACT_DATA.phones[0].display} · {CONTACT_DATA.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
