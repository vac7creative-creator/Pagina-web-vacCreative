import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { SubServiceCard } from '../components/SubServiceCard';
import { SERVICES_DATA } from '../data/services';
import { Link } from '../utils/router';
import { ArrowUpRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16">
      <Container size="wide">
        <Breadcrumbs items={[{ label: 'Servicios' }]} className="mb-8" />

        <SectionHeader
          kicker="Catálogo de Especialidades"
          title="Todos los Servicios Creativos"
          description="Explora nuestras disciplinas de diseño, producción audiovisual, animación publicitaria y desarrollo web interactivo."
          className="mb-14"
        />

        {/* Categories Breakdown */}
        <div className="space-y-20">
          {SERVICES_DATA.map((category) => (
            <div
              key={category.id}
              id={category.slug}
              className="pt-10 border-t border-neutral-200 dark:border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 mb-2">
                    <span className="tabular-nums font-semibold">{category.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>Categoría</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                    {category.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl mt-1">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={`/servicios/${category.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors self-start shrink-0"
                >
                  <span>Ver categoría completa</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* SubServices Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.subServices.map((sub) => (
                  <SubServiceCard key={sub.id} subService={sub} categorySlug={category.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
