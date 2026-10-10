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
  // Use category's subservice image or dedicated preview
  const previewImage = category.subServices[0]?.image || category.heroImage;

  return (
    <Link
      href={categoryUrl}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#E7E1D4] dark:border-white/10 bg-white dark:bg-[#13141A] hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer overflow-hidden min-h-[380px]"
    >
      {/* Top Header: Number and Title */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-bold text-[#C5A059] tabular-nums tracking-widest">
            {category.number}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
            DISCIPLINA
          </span>
        </div>

        <h3 className="font-sans text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white mb-3 group-hover:text-[#C5A059] transition-colors leading-tight">
          {category.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-5 line-clamp-3">
          {category.description}
        </p>
      </div>

      {/* Middle/Bottom: Visual Thumbnail & Subservices preview */}
      <div className="space-y-4 pt-2">
        {previewImage && (
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-100 dark:bg-black/40 border border-neutral-100 dark:border-white/5">
            <img
              src={previewImage}
              alt={category.title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
          </div>
        )}

        <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs">
          <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            {category.subServices.length} especialidades
          </span>

          <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059] transition-all duration-300">
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
};
