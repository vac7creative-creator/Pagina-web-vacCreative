import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../utils/router';
import { ServiceCategory } from '../data/services';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  index: number;
}

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category }) => {
  const categoryUrl = `/servicios/${category.slug}`;

  return (
    <Link
      href={categoryUrl}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] hover:border-sky-500/50 dark:hover:border-sky-400/40 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer overflow-hidden"
    >
      {/* Top Header: Number and Arrow */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
            {category.number}
          </span>
          <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 dark:text-neutral-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:border-sky-500/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={16} />
          </div>
        </div>

        <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {category.title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-6">
          {category.description}
        </p>
      </div>

      {/* Bottom Subservices Preview List */}
      <div className="pt-4 border-t border-neutral-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2">
          Especialidades ({category.subServices.length})
        </span>
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400">
          {category.subServices.slice(0, 4).map((sub, idx) => (
            <span key={sub.id} className="inline-flex items-center">
              <span>{sub.title}</span>
              {idx < Math.min(category.subServices.length - 1, 3) && (
                <span className="ml-2 text-neutral-300 dark:text-neutral-700" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
          {category.subServices.length > 4 && (
            <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[11px]">
              +{category.subServices.length - 4} más
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
