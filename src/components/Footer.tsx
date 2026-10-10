import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../utils/router';
import { CONTACT_DATA } from '../data/contact';
import { SERVICES_DATA } from '../data/services';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E7E1D4] dark:border-white/10 bg-[#FAF8F5] dark:bg-[#0B0C0F] text-neutral-600 dark:text-neutral-400 transition-colors">
      <Container size="wide" className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-14 border-b border-[#E7E1D4] dark:border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src={CONTACT_DATA.logoUrl}
                alt="V.A.C. Creative Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-black tracking-tight text-neutral-900 dark:text-white leading-none">
                  V.A.C<span className="text-[#C5A059]">.</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#C5A059] font-bold mt-0.5">
                  CREATIVE
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-md font-normal">
              {CONTACT_DATA.description}
            </p>
            <div className="text-xs text-neutral-500 font-mono pt-1">
              Horario de atención: {CONTACT_DATA.workingHours}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-900 dark:text-white mb-4">
              Disciplinas
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-900 dark:text-white mb-4">
              Estudio
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors">
                  Todos los Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors">
                  Proyectos Seleccionados
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-900 dark:text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {CONTACT_DATA.phones.map((phone, i) => (
                <li key={i}>
                  <a
                    href={`tel:${phone.value}`}
                    className="font-mono hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors block"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors block truncate font-mono text-xs"
                >
                  {CONTACT_DATA.email}
                </a>
              </li>
              <li className="pt-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-900 dark:text-white block mb-2">
                  Redes Sociales
                </span>
                <div className="flex flex-wrap gap-3">
                  {CONTACT_DATA.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors"
                    >
                      <span>{social.name}</span>
                      <ArrowUpRight size={12} className="opacity-60" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            &copy; {currentYear} {CONTACT_DATA.studioName}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Diseño gráfico · Producción audiovisual · Experiencias web</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
