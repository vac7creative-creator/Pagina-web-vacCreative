import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../data/portfolio';

interface ImagePortfolioCardProps {
  project: ProjectItem;
  className?: string;
}

export const ImagePortfolioCard: React.FC<ImagePortfolioCardProps> = ({ project, className = '' }) => {
  return (
    <div className={`group flex flex-col rounded-xl overflow-hidden border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] shadow-xs hover:shadow-md transition-all ${className}`}>
      {/* Media Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

        {project.previewUrl && (
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir imagen o archivo"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xs flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {/* Info Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-mono">
            <span>{project.subServiceTitle}</span>
            {project.year && <span className="tabular-nums">{project.year}</span>}
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-4">
            {project.description}
          </p>
        </div>

        {project.previewUrl && (
          <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-end text-xs">
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors"
            >
              <span>Ver muestra</span>
              <ExternalLink size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
