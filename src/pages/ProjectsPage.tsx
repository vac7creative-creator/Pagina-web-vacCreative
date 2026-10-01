import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { FEATURED_PROJECTS } from '../data/portfolio';
import { SERVICES_DATA } from '../data/services';
import { ExternalLink } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProjects =
    selectedFilter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.categorySlug === selectedFilter);

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16">
      <Container size="wide">
        <Breadcrumbs items={[{ label: 'Proyectos' }]} className="mb-8" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            kicker="Archivo de Trabajos"
            title="Proyectos & Producciones"
            description="Una cuidada selección de identidades visuales, piezas de video, animaciones y soluciones digitales creadas por el estudio."
            className="mb-0"
          />

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 self-start md:self-end">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Todos
            </button>
            {SERVICES_DATA.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.slug)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer ${
                  selectedFilter === cat.slug
                    ? 'bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Drive Archive Link Notice */}
        <div className="rounded-xl border border-neutral-200/90 dark:border-white/10 bg-neutral-50/60 dark:bg-[#12141C] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Archivos Adicionales en la Nube
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
            Explora las carpetas completas en Google Drive
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-normal">
            Contamos con repositorios oficiales ordenados por disciplina para clientes que deseen auditar muestras de imprenta, resoluciones y reels de postproducción.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            {SERVICES_DATA.filter((s) => s.driveLink !== '#').map((service) => (
              <a
                key={service.id}
                href={service.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-white/15 bg-white dark:bg-white/5 hover:border-sky-500 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <span>{service.shortTitle}</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
