import React, { useState } from 'react';
import { ExternalLink, Play, RotateCcw, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../data/portfolio';
import { BrowserFrame } from './BrowserFrame';
import { useIsDesktop } from '../../hooks/useMediaQuery';

interface LivePreviewCardProps {
  project: ProjectItem;
  className?: string;
}

export const LivePreviewCard: React.FC<LivePreviewCardProps> = ({ project, className = '' }) => {
  const isDesktop = useIsDesktop();
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleActivate = () => {
    setIsLiveActive(true);
    setIframeLoaded(false);
    setIframeError(false);
  };

  const handleReset = () => {
    setIsLiveActive(false);
    setIframeLoaded(false);
    setIframeError(false);
  };

  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] shadow-xs hover:shadow-md transition-all ${className}`}
    >
      {/* Browser Viewport with Frame */}
      <BrowserFrame url={project.previewUrl} title={project.title}>
        <div className="relative aspect-[16/10] sm:aspect-[16/11] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          {isDesktop ? (
            /* ========================================================
               DESKTOP (>= 768px): Previsualización interactiva bajo demanda
               ======================================================== */
            !isLiveActive ? (
              /* Poster / Thumbnail view with Preview activation button */
              <div className="relative w-full h-full group">
                <img
                  src={project.thumbnail}
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-950/40 dark:bg-black/50 backdrop-blur-[1px] transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <button
                    type="button"
                    onClick={handleActivate}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/95 text-neutral-900 font-medium text-xs sm:text-sm hover:bg-white shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
                  >
                    <Play size={14} className="fill-neutral-900" />
                    <span>Previsualizar en vivo</span>
                  </button>
                  <p className="text-[11px] text-white/80 mt-2.5 max-w-xs">
                    Carga la versión web interactiva dentro de este contenedor
                  </p>
                </div>
              </div>
            ) : (
              /* Live Iframe View with Lazy Loading and Fallback */
              <div className="relative w-full h-full">
                {!iframeLoaded && !iframeError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs text-neutral-500 font-mono">Cargando sitio...</span>
                    </div>
                  </div>
                )}

                {iframeError ? (
                  /* Fallback if site restricts iframe embedding */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-neutral-100 dark:bg-neutral-900">
                    <AlertCircle size={28} className="text-amber-500 mb-2" />
                    <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                      Vista previa restringida por el servidor
                    </p>
                    <p className="text-[11px] text-neutral-500 max-w-xs mb-4">
                      Este proyecto cuenta con directivas de seguridad para visualizarse directamente en su dominio.
                    </p>
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 text-white text-xs font-medium hover:bg-sky-700 transition-colors"
                    >
                      <span>Abrir en pestaña nueva</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={project.previewUrl}
                    title={`Previsualización en vivo de ${project.title}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    onLoad={() => setIframeLoaded(true)}
                    onError={() => setIframeError(true)}
                    className="w-full h-full border-0 bg-white"
                  />
                )}

                {/* Floating control bar to close preview and return to poster */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white shadow-sm">
                  <button
                    type="button"
                    onClick={handleReset}
                    title="Volver a la portada"
                    className="hover:text-sky-400 p-1 cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw size={11} />
                    <span>Cerrar preview</span>
                  </button>
                </div>
              </div>
            )
          ) : (
            /* ========================================================
               MOBILE (< 768px): Captura real clicable, sin iframe invasivo
               ======================================================== */
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-full block group cursor-pointer"
            >
              <img
                src={project.thumbnail}
                alt={`Captura del proyecto ${project.title}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Mobile overlay prompt */}
              <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-neutral-900/85 text-white font-mono text-[11px] px-2.5 py-1 rounded-md backdrop-blur-xs">
                <span>Ver proyecto</span>
                <ArrowUpRight size={13} />
              </div>
            </a>
          )}
        </div>
      </BrowserFrame>

      {/* Info & Action Links */}
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

        {/* Bottom bar with tags & direct open button */}
        <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] text-neutral-500 bg-neutral-100 dark:bg-white/5 px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors"
          >
            <span>{isDesktop ? 'Abrir proyecto' : 'Ver proyecto completo'}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
