import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-300 dark:border-white/10 bg-white/60 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun size={17} strokeWidth={1.75} className="transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={17} strokeWidth={1.75} className="transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
