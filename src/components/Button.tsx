import React from 'react';
import { Link } from '../utils/router';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 shadow-sm active:scale-[0.98]',
    secondary:
      'bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400 active:scale-[0.98]',
    outline:
      'border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-white hover:bg-neutral-50 dark:hover:bg-white/5 active:scale-[0.98]',
    ghost:
      'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-white/5',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target={target} rel={rel} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
