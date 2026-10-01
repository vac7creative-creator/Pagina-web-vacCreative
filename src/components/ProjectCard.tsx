import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FeaturedProject } from '../data/portfolio';
import { Link } from '../utils/router';

interface ProjectCardProps {
  project: FeaturedProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isExternal = Boolean(project.externalUrl && !project.externalUrl.startsWith('/'));

  const content = (
    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] hover:border-neutral-400 dark:hover:border-white/30 transition-all duration-300 shadow-xs hover:shadow-lg">
      {/* Media Frame */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xs flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          <ArrowUpRight size={15} />
        </div>
      </div>

      {/* Info Frame */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata clean unboxed */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-mono">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {project.client && (
          <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-white/5 text-xs text-neutral-400">
            Cliente: <span className="text-neutral-600 dark:text-neutral-300">{project.client}</span>
          </div>
        )}
      </div>
    </div>
  );

  if (isExternal && project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={`/servicios/${project.categorySlug}/${project.subServiceSlug}`}
      className="block cursor-pointer"
    >
      {content}
    </Link>
  );
};
