import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SubServiceCard } from '../components/SubServiceCard';
import { ServiceCategory } from '../data/services';
import { ArrowLeft } from 'lucide-react';
import { Link } from '../utils/router';

interface ServiceCategoryPageProps {
  category: ServiceCategory;
}

export const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ category }) => {
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

        {/* Back Link to All Services */}
        <div className="mb-6">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Volver a todas las disciplinas</span>
          </Link>
        </div>

        {/* Category Header (Focused on Title, Description and Subservices) */}
        <div className="border-b border-neutral-200 dark:border-white/10 pb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 mb-3">
            <span className="tabular-nums font-semibold">{category.number}</span>
            <span aria-hidden="true">·</span>
            <span>Disciplina Creativa</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6 text-balance">
            {category.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl font-normal">
            {category.description}
          </p>
        </div>

        {/* SubServices Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                Servicios Disponibles
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Selecciona cualquier especialidad para ver características, aplicaciones y portafolio específico.
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
