import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SubServiceCard } from '../components/SubServiceCard';
import { Button } from '../components/Button';
import { ServiceCategory } from '../data/services';
import { ExternalLink, MessageCircle, ArrowLeft } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Link } from '../utils/router';

interface ServiceCategoryPageProps {
  category: ServiceCategory;
}

export const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ category }) => {
  const hasDriveLink = category.driveLink && category.driveLink !== '#';

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16">
      <Container size="wide">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Servicios', href: '/servicios' },
            { label: category.title },
          ]}
          className="mb-8"
        />

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Volver a todas las disciplinas</span>
          </Link>
        </div>

        {/* Category Header */}
        <div className="border-b border-neutral-200 dark:border-white/10 pb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 mb-3">
            <span className="tabular-nums font-semibold">{category.number}</span>
            <span aria-hidden="true">·</span>
            <span>Disciplina Creativa</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6 text-balance">
            {category.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl font-normal mb-8">
            {category.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {hasDriveLink && (
              <Button
                href={category.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="gap-2"
              >
                <span>Acceder a Carpeta de Portafolio</span>
                <ExternalLink size={15} />
              </Button>
            )}

            <Button
              href={getWhatsAppUrl({ categoryTitle: category.title })}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="gap-2"
            >
              <MessageCircle size={16} />
              <span>Cotizar en esta categoría</span>
            </Button>
          </div>
        </div>

        {/* SubServices Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                Servicios Disponibles
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Selecciona cualquier servicio para ver características, aplicaciones y ejemplos.
              </p>
            </div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
              {category.subServices.length} servicios
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {category.subServices.map((sub) => (
              <SubServiceCard key={sub.id} subService={sub} categorySlug={category.slug} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
