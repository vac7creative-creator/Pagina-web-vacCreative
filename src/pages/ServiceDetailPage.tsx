import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { ServiceCategory, SubService } from '../data/services';
import { getProjectsBySubService } from '../data/portfolio';
import { PortfolioCard } from '../components/portfolio/PortfolioCard';
import {
  CheckCircle2,
  Users,
  ExternalLink,
  MessageCircle,
  ArrowLeft,
  Sparkles,
  FolderArchive,
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
  const specificProjects = getProjectsBySubService(subService.slug);

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16">
      <Container size="wide">
        {/* 1. Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Servicios', href: '/servicios' },
            { label: category.title, href: `/servicios/${category.slug}` },
            { label: subService.title },
          ]}
          className="mb-6"
        />

        {/* Back Link to Parent Category */}
        <div className="mb-8">
          <Link
            href={`/servicios/${category.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Volver a {category.title}</span>
          </Link>
        </div>

        {/* 2. Service Header (Title, Description, Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-14 border-b border-neutral-200 dark:border-white/10">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
                {category.title}
              </span>
              {subService.price && (
                <>
                  <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                  <span className="font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-2.5 py-0.5 rounded-sm">
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
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-md bg-neutral-100 dark:bg-neutral-900 group">
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

        {/* 3. Características / Qué incluye */}
        {subService.features && subService.features.length > 0 && (
          <section className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5">
                <Sparkles size={20} className="text-sky-600 dark:text-sky-400" />
                <span>Qué incluye / Características</span>
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Aspectos técnicos y entregables contemplados en este servicio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#12141C] flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Ideal para */}
        {subService.idealFor && subService.idealFor.length > 0 && (
          <section className="space-y-4 pt-4">
            <div className="flex items-center gap-2.5">
              <Users size={18} className="text-sky-600 dark:text-sky-400" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                Recomendado para
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {subService.idealFor.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-3.5 py-1.5 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 5. Portafolio Específico del Servicio */}
        <section className="pt-8 space-y-8 border-t border-neutral-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              <span>Portafolio</span>
              <span aria-hidden="true">·</span>
              <span>{subService.title}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Trabajos & Muestras Realizadas
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Visualiza proyectos reales desarrollados específicamente en esta disciplina.
            </p>
          </div>

          {specificProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specificProjects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-3">
              <p className="font-serif text-lg font-medium text-neutral-800 dark:text-neutral-200">
                Portafolio en integración
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md mx-auto">
                Estamos digitalizando muestras adicionales para esta especialidad. Puedes consultar directamente vía WhatsApp para recibir ejemplos personalizados de proyectos recientes.
              </p>
            </div>
          )}
        </section>

        {/* 6. CTA Final (Único y no repetitivo) */}
        <section className="pt-8">
          <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-neutral-50/70 dark:bg-[#12141C] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                ¿Deseas iniciar tu proyecto de {subService.title}?
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal">
                Escríbenos directamente para asesorarte sobre formatos, tiempos de entrega y cotizaciones personalizadas.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="gap-2.5 shadow-sm"
              >
                <MessageCircle size={18} />
                <span>Solicitar Cotización</span>
              </Button>
            </div>
          </div>
        </section>

        {/* 7. Archivo Secundario en Google Drive (Al final, sin competir visualmente) */}
        {hasDriveLink && (
          <div className="pt-6 flex justify-center text-center">
            <a
              href={category.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <FolderArchive size={14} className="opacity-70" />
              <span>Explorar archivo completo en Google Drive</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};
