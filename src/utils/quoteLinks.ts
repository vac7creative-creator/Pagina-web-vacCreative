/**
 * Mapeo central de deep links hacia Gerente Creativo de V.A.C.
 * Base URL: https://gerente-creativo-de-vac.vercel.app/?tab=quote
 *
 * Conecta los botones de "Solicitar Cotización" con el catálogo real
 * de Gerente Creativo (src/data/servicesCatalog.ts), garantizando que al hacer
 * clic se abra la pestaña "Cotizar en Vivo" (?tab=quote) con el servicio,
 * paquete y variante correspondientes exactamente preseleccionados.
 */

export const GERENTE_CREATIVO_BASE_URL = 'https://gerente-creativo-de-vac.vercel.app/';
export const GERENTE_CREATIVO_QUOTE_BASE_URL = 'https://gerente-creativo-de-vac.vercel.app/?tab=quote';

export interface QuoteDeepLinkParams {
  service?: string;
  package?: string;
  variant?: string;
}

/**
 * Tabla de equivalencias entre los slugs/ids de subservicios de V.A.C. Creative
 * y los parámetros reales verificados del catálogo de Gerente Creativo.
 *
 * Catálogo real en Gerente Creativo:
 * - branding: paquetes [logo, identidad, branding-completo]
 * - artes-multimedia: paquetes [arte-esencial, arte-profesional, arte-premium]
 * - produccion-audiovisual: paquetes [express, completo, premium]
 * - spot-publicitario: variantes [audiovisual, radial, locucion] | paquetes [simple, express, premium]
 * - animacion-motion: paquetes [motion-esencial, motion-profesional, motion-premium]
 * - carta-digital: paquetes [basico, completo, premium]
 * - landing-page: paquetes [esencial, comercial, pro]
 * - boda: paquetes [basico, intermedio, pro]
 * - xv-anos: paquetes [basico, intermedio, pro]
 * - cumpleanos: paquetes [express, interactivo, premium]
 * - otro: paquetes [a-medida]
 */
export const SUB_SERVICE_QUOTE_MAPPING: Record<string, QuoteDeepLinkParams> = {
  // ==========================================
  // 01. DISEÑO GRÁFICO (diseno-grafico)
  // ==========================================
  'logos': {
    service: 'branding',
    package: 'logo',
  },
  'dg-logos': {
    service: 'branding',
    package: 'logo',
  },
  'flyers': {
    service: 'artes-multimedia',
    package: 'arte-esencial',
  },
  'dg-flyers': {
    service: 'artes-multimedia',
    package: 'arte-esencial',
  },
  'anuarios-escolares': {
    service: 'artes-multimedia',
    package: 'arte-profesional',
  },
  'dg-anuarios': {
    service: 'artes-multimedia',
    package: 'arte-profesional',
  },
  'brochure-corporativo': {
    service: 'branding',
    package: 'identidad',
  },
  'dg-broucher': {
    service: 'branding',
    package: 'identidad',
  },
  'tarjetas-y-etiquetas': {
    service: 'branding',
    package: 'identidad',
  },
  'dg-tarjetas': {
    service: 'branding',
    package: 'identidad',
  },
  'mockups': {
    service: 'branding',
    package: 'identidad',
  },
  'dg-mockups': {
    service: 'branding',
    package: 'identidad',
  },
  'banners': {
    service: 'artes-multimedia',
    package: 'arte-profesional',
  },
  'dg-banners': {
    service: 'artes-multimedia',
    package: 'arte-profesional',
  },

  // ==========================================
  // 02. AUDIOVISUAL Y VIDEO (audiovisual)
  // ==========================================
  'edicion-video': {
    service: 'produccion-audiovisual',
    package: 'completo',
  },
  'av-edicion': {
    service: 'produccion-audiovisual',
    package: 'completo',
  },
  'reels-tiktok': {
    service: 'produccion-audiovisual',
    package: 'express',
  },
  'av-reels': {
    service: 'produccion-audiovisual',
    package: 'express',
  },
  'videoclips': {
    service: 'produccion-audiovisual',
    package: 'premium',
  },
  'av-videoclips': {
    service: 'produccion-audiovisual',
    package: 'premium',
  },
  'spots-visuales': {
    service: 'spot-publicitario',
    package: 'simple',
    variant: 'audiovisual',
  },
  'av-spots': {
    service: 'spot-publicitario',
    package: 'simple',
    variant: 'audiovisual',
  },

  // ==========================================
  // 03. SPOTS PUBLICITARIOS Y AUDIO (spots-publicitarios)
  // ==========================================
  'spots-radiales': {
    service: 'spot-publicitario',
    package: 'simple',
    variant: 'radial',
  },
  'sp-radiales': {
    service: 'spot-publicitario',
    package: 'simple',
    variant: 'radial',
  },
  'musicalizacion': {
    service: 'spot-publicitario',
    package: 'simple',
    variant: 'locucion',
  },
  'sp-musicalizacion': {
    service: 'spot-publicitario',
    package: 'simple',
    variant: 'locucion',
  },

  // ==========================================
  // 04. ANIMACIÓN & MOTION (animacion)
  // ==========================================
  'logos-animados': {
    service: 'animacion-motion',
    package: 'motion-esencial',
  },
  'am-logos': {
    service: 'animacion-motion',
    package: 'motion-esencial',
  },
  'intros': {
    service: 'animacion-motion',
    package: 'motion-profesional',
  },
  'am-intros': {
    service: 'animacion-motion',
    package: 'motion-profesional',
  },
  '2d-a-3d': {
    service: 'animacion-motion',
    package: 'motion-premium',
  },
  'am-2d3d': {
    service: 'animacion-motion',
    package: 'motion-premium',
  },

  // ==========================================
  // 05. EXPERIENCIAS WEB & DIGITAL (diseno-digital)
  // ==========================================
  'catalogos-virtuales': {
    service: 'carta-digital',
    package: 'completo',
  },
  'catalogos': {
    service: 'carta-digital',
    package: 'completo',
  },
  'invitaciones-digitales': {
    service: 'boda',
    package: 'intermedio',
  },
  'invitaciones': {
    service: 'boda',
    package: 'intermedio',
  },
  'invitacion-boda': {
    service: 'boda',
    package: 'intermedio',
  },
  'invitacion-xv': {
    service: 'xv-anos',
    package: 'intermedio',
  },
  'invitacion-cumpleanos': {
    service: 'cumpleanos',
    package: 'interactivo',
  },
  'landing-pages': {
    service: 'landing-page',
    package: 'esencial',
  },
  'menus-digitales': {
    service: 'carta-digital',
    package: 'basico',
  },
  'menus': {
    service: 'carta-digital',
    package: 'basico',
  },
  'portfolios-digitales': {
    service: 'landing-page',
    package: 'comercial',
  },
  'portfolios': {
    service: 'landing-page',
    package: 'comercial',
  },
};

/**
 * Tabla de equivalencia para categorías generales hacia los IDs canónicos
 * de servicios en Gerente Creativo cuando solo se dispone del slug de categoría.
 */
export const CATEGORY_QUOTE_MAPPING: Record<string, string> = {
  'diseno-grafico': 'branding',
  'audiovisual': 'produccion-audiovisual',
  'spots-publicitarios': 'spot-publicitario',
  'animacion': 'animacion-motion',
  'diseno-digital': 'landing-page',
};

/**
 * Genera la URL con deep link hacia Gerente Creativo preseleccionando
 * el servicio, paquete y variante exactos en el cotizador interactivo (?tab=quote).
 *
 * @param subServiceSlug Slug o ID del subservicio (ej. "logos", "reels-tiktok", "landing-pages")
 * @param categorySlug Slug de la categoría padre opcional (ej. "diseno-grafico")
 */
export function getGerenteCreativoQuoteUrl(subServiceSlug?: string, categorySlug?: string): string {
  const url = new URL(GERENTE_CREATIVO_QUOTE_BASE_URL);

  if (subServiceSlug && SUB_SERVICE_QUOTE_MAPPING[subServiceSlug]) {
    const params = SUB_SERVICE_QUOTE_MAPPING[subServiceSlug];
    if (params.service) url.searchParams.set('service', params.service);
    if (params.package) url.searchParams.set('package', params.package);
    if (params.variant) url.searchParams.set('variant', params.variant);
    return url.toString();
  }

  if (categorySlug && CATEGORY_QUOTE_MAPPING[categorySlug]) {
    url.searchParams.set('service', CATEGORY_QUOTE_MAPPING[categorySlug]);
    return url.toString();
  }

  return GERENTE_CREATIVO_QUOTE_BASE_URL;
}
