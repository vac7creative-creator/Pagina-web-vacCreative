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
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-[#C5A059] dark:hover:text-[#ECC880] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Volver a todas las disciplinas</span>
          </Link>
        </div>

        {/* Category Header (Focused on Title, Description and Subservices) */}
        <div className="border-b border-neutral-200 dark:border-white/10 pb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] dark:text-[#ECC880] mb-3">
            <span className="tabular-nums font-semibold">{category.number}</span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <span>Disciplina Creativa</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-6 text-balance">
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
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
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
