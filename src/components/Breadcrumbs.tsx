import React from 'react';
import { Link } from '../utils/router';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Ruta de navegación" className={`text-xs text-neutral-500 dark:text-neutral-400 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-neutral-400 dark:text-neutral-600 select-none">
                /
              </li>
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-neutral-900 dark:text-neutral-200 font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
