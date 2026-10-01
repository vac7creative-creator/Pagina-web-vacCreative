import { useState, useEffect } from 'react';

/**
 * Hook ligero y nativo para detección responsive de media queries
 * sin dependencias externas.
 *
 * @param query Media query CSS, ej: '(min-width: 768px)'
 * @returns boolean indicando si la pantalla cumple la condición
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQueryList.matches);

    // Modern browsers support addEventListener on MediaQueryList
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    } else {
      // Fallback for older environments
      // @ts-ignore
      mediaQueryList.addListener(listener);
      // @ts-ignore
      return () => mediaQueryList.removeListener(listener);
    }
  }, [query]);

  return matches;
}

/**
 * Hook específico para determinar si el viewport actual es de escritorio (>= 768px)
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 768px)');
}
