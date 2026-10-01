import React from 'react';

interface SectionHeaderProps {
  number?: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  kicker,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {(number || kicker) && (
        <div className={`flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3 ${isCenter ? 'justify-center' : ''}`}>
          {number && <span className="tabular-nums font-semibold">{number}</span>}
          {number && kicker && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>}
          {kicker && <span>{kicker}</span>}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
