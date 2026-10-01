import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { ServiceCategory, SubService } from '../data/services';
import {
  CheckCircle2,
  Users,
  ExternalLink,
  MessageCircle,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Link } from '../utils/router';

interface ServiceDetailPageProps {
  category: ServiceCategory;
  subService: SubService;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ category, subService }) => {
  const whatsappUrl = getWhatsAppUrl({
    customNumber: subService.whatsappNumber,
    customMessage: subService.whatsappMessage,
    categoryTitle: category.title,
    subServiceTitle: subService.title,
  });

  const hasDriveLink = category.driveLink && category.driveLink !== '#';

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16">
      <Container size="wide">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Servicios', href: '/servicios' },
            { label: category.title, href: `/servicios/${category.slug}` },
            { label: subService.title },
          ]}
          className="mb-6"
        />

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href={`/servicios/${category.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Volver a {category.title}</span>
          </Link>
        </div>

        {/* Hero Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start pb-16 border-b border-neutral-200 dark:border-white/10">
          {/* Left Column: Descriptions & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
                {category.title}
              </span>
              {subService.price && (
                <>
                  <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                  <span className="font-mono text-xs text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 px-2.5 py-0.5 rounded-sm">
                    {subService.price}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08] text-balance">
              {subService.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {subService.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="gap-2.5"
              >
                <MessageCircle size={18} />
                <span>Solicitar Cotización</span>
              </Button>

              {hasDriveLink && (
                <Button
                  href={category.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <span>Ver Trabajos en Drive</span>
                  <ExternalLink size={16} />
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-lg bg-neutral-100 dark:bg-neutral-900 group">
              <img
                src={subService.heroImage || subService.image}
                alt={subService.title}
                loading="eager"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Specifications & Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Features & Ideal For */}
          <div className="lg:col-span-7 space-y-12">
            {/* Features list */}
            {subService.features && subService.features.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2.5">
                  <Sparkles size={20} className="text-sky-600 dark:text-sky-400" />
                  <span>Qué incluye / Características</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#12141C] flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ideal For section */}
            {subService.idealFor && subService.idealFor.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2.5">
                  <Users size={20} className="text-sky-600 dark:text-sky-400" />
                  <span>Recomendado para</span>
                </h2>

                <div className="flex flex-wrap gap-2 pt-1">
                  {subService.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-3.5 py-1.5 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Examples & Interactive Showcase */}
            {subService.examples && subService.examples.length > 0 && (
              <div className="pt-4">
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                    Ejemplos en Vivo & Demos
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    Visualiza proyectos interactivos desarrollados para diferentes industrias.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subService.examples.map((ex, idx) => (
                    <a
                      key={idx}
                      href={ex.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-5 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] hover:border-sky-500/50 dark:hover:border-sky-400/40 transition-all duration-200 flex items-center justify-between shadow-xs hover:shadow-md"
                    >
                      <div>
                        {ex.category && (
                          <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
                            {ex.category}
                          </span>
                        )}
                        <span className="font-medium text-sm text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {ex.label}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:border-sky-500/40 transition-colors">
                        <ExternalLink size={14} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Summary & Consultation Box */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-neutral-50/70 dark:bg-[#12141C] p-6 sm:p-8 space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block">
                Resumen del Servicio
              </span>

              <div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  {subService.title}
                </h3>
                {subService.price && (
                  <div className="font-mono text-lg font-bold text-sky-600 dark:text-sky-400 mb-3">
                    {subService.price}
                  </div>
                )}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  Diseñado para adaptarse a las necesidades específicas de tu proyecto o empresa. Consúltanos para una cotización formal sin compromiso.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-white/10 space-y-3">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  className="w-full gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Consultar por WhatsApp</span>
                </Button>

                {hasDriveLink && (
                  <Button
                    href={category.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                    className="w-full gap-2"
                  >
                    <span>Ver Carpeta de Muestras</span>
                    <ExternalLink size={14} />
                  </Button>
                )}
              </div>

              <div className="text-xs text-neutral-400 dark:text-neutral-500 text-center leading-relaxed">
                Asesoría personalizada · Entrega puntual · Formatos profesionales
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
