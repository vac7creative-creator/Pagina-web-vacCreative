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
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`relative inline-flex items-center p-1 rounded-full border border-neutral-300 dark:border-white/10 bg-neutral-100/90 dark:bg-[#1A1C23] text-neutral-600 dark:text-neutral-300 transition-all duration-300 cursor-pointer select-none shadow-xs hover:border-[#C5A059]/60 ${className}`}
    >
      <div className="flex items-center gap-1.5 relative z-10 px-1">
        <span
          className={`p-1 rounded-full transition-colors duration-200 ${
            !isDark ? 'text-[#111215]' : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Sun size={14} strokeWidth={2} />
        </span>
        <span
          className={`p-1 rounded-full transition-colors duration-200 ${
            isDark ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'
          }`}
        >
          <Moon size={14} strokeWidth={2} />
        </span>
      </div>

      {/* Sliding pill indicator */}
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-6 rounded-full transition-all duration-300 ease-out shadow-xs ${
          isDark
            ? 'right-1 bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.3)]'
            : 'left-1 bg-white border border-neutral-200 shadow-sm'
        }`}
      />
    </button>
  );
};
