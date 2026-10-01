import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BrowserFrameProps {
  url?: string;
  title: string;
  children: React.ReactNode;
  onOpenExternal?: () => void;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url,
  title,
  children,
  onOpenExternal,
  className = '',
}) => {
  let displayUrl = '';
  if (url) {
    try {
      const parsed = new URL(url);
      displayUrl = parsed.hostname;
    } catch {
      displayUrl = url;
    }
  }

  return (
    <div className={`rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] shadow-sm overflow-hidden flex flex-col ${className}`}>
      {/* Browser Top Bar */}
      <div className="px-4 py-2.5 bg-neutral-100/90 dark:bg-white/5 border-b border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs select-none">
        {/* Window controls (dots) */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600 block"></span>
        </div>

        {/* Address pill */}
        <div className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 bg-white dark:bg-black/30 border border-neutral-200/80 dark:border-white/5 px-3 py-0.5 rounded-md truncate max-w-[220px] sm:max-w-xs text-center">
          {displayUrl || title}
        </div>

        {/* Action: Open in new tab */}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir en pestaña nueva"
            aria-label="Abrir en pestaña nueva"
            className="text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors p-1 rounded"
          >
            <ExternalLink size={13} />
          </a>
        ) : onOpenExternal ? (
          <button
            type="button"
            onClick={onOpenExternal}
            title="Abrir en pestaña nueva"
            aria-label="Abrir en pestaña nueva"
            className="text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors p-1 rounded cursor-pointer"
          >
            <ExternalLink size={13} />
          </button>
        ) : (
          <div className="w-4" />
        )}
      </div>

      {/* Frame Content */}
      <div className="relative flex-grow">
        {children}
      </div>
    </div>
  );
};
