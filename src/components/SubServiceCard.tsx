import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../utils/router';
import { SubService } from '../data/services';

interface SubServiceCardProps {
  subService: SubService;
  categorySlug: string;
}

export const SubServiceCard: React.FC<SubServiceCardProps> = ({ subService, categorySlug }) => {
  const detailUrl = `/servicios/${categorySlug}/${subService.slug}`;

  return (
    <Link
      href={detailUrl}
      className="group flex flex-col justify-between rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] hover:border-sky-500/50 dark:hover:border-sky-400/40 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer overflow-hidden"
    >
      <div>
        {/* Media Thumbnail Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <img
            src={subService.image}
            alt={subService.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Price Badge if existing */}
          {subService.price && (
            <div className="absolute bottom-3 left-3 bg-neutral-900/85 dark:bg-black/80 backdrop-blur-xs text-white font-mono text-xs px-2.5 py-1 rounded-sm tracking-tight">
              {subService.price}
            </div>
          )}

          {/* Top-Right Arrow Indicator */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xs flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {subService.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-5 line-clamp-2">
            {subService.description}
          </p>

          {/* Features Preview if available */}
          {subService.features && subService.features.length > 0 && (
            <ul className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400">
              {subService.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-600 dark:text-sky-400 text-sm leading-none font-bold">·</span>
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer: Discreet Metadata info with only subtle arrow */}
      <div className="px-6 pb-5 pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500">
        <span>Especificaciones y portafolio</span>
        <ArrowUpRight size={14} className="text-neutral-400 dark:text-neutral-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
    </Link>
  );
};
