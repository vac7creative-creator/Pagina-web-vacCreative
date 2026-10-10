/**
 * Mapeo central de deep links hacia Gerente Creativo de V.A.C.
 * Base URL: https://gerente-creativo-de-vac.vercel.app/?tab=quote
 *
 * Conecta los botones de "Solicitar Cotización" con el catálogo real
 * de Gerente Creativo, preseleccionando únicamente los parámetros (servicio, paquete,
 * o variante) explícitamente autorizados por la especificación.
 */

export const GERENTE_CREATIVO_BASE_URL = 'https://gerente-creativo-de-vac.vercel.app/';
export const GERENTE_CREATIVO_QUOTE_BASE_URL = 'https://gerente-creativo-de-vac.vercel.app/?tab=quote';
export const GERENTE_CREATIVO_CATALOG_BASE_URL = 'https://gerente-creativo-de-vac.vercel.app/?tab=catalog';

export interface QuoteDeepLinkParams {
  service?: string;
  package?: string;
  variant?: string;
}

/**
 * Tabla de equivalencias estricta entre slugs/IDs de subservicios de V.A.C. Creative
 * y los parámetros reales permitidos para Gerente Creativo.
 *
 * REGLA: No se preselecciona ningún paquete salvo indicación expresa (logos -> logo, reels -> express).
 * El cliente elige el paquete dentro del cotizador de Gerente Creativo.
 */
export const SUB_SERVICE_QUOTE_MAPPING: Record<string, QuoteDeepLinkParams> = {
  // ==========================================
  // 1. DISEÑO GRÁFICO (diseno-grafico)
  // ==========================================
  // Logos e Identidad (caso explícito con package=logo)
  'logos': {
    service: 'branding',
    package: 'logo',
  },
  'dg-logos': {
    service: 'branding',
    package: 'logo',
  },

  // Flyers y Afiches (sin paquete)
  'flyers': {
    service: 'artes-multimedia',
  },
  'dg-flyers': {
    service: 'artes-multimedia',
  },

  // Anuarios Escolares (sin paquete)
  'anuarios-escolares': {
    service: 'artes-multimedia',
  },
  'dg-anuarios': {
    service: 'artes-multimedia',
  },

  // Brochure Corporativo (artes-multimedia, sin paquete)
  'brochure-corporativo': {
    service: 'artes-multimedia',
  },
  'dg-broucher': {
    service: 'artes-multimedia',
  },

  // Tarjetas y Etiquetas (artes-multimedia, sin paquete)
  'tarjetas-y-etiquetas': {
    service: 'artes-multimedia',
  },
  'dg-tarjetas': {
    service: 'artes-multimedia',
  },

  // Mockups Publicitarios (artes-multimedia, sin paquete)
  'mockups': {
    service: 'artes-multimedia',
  },
  'dg-mockups': {
    service: 'artes-multimedia',
  },

  // Banners y Gigantografías (sin paquete)
  'banners': {
    service: 'artes-multimedia',
  },
  'dg-banners': {
    service: 'artes-multimedia',
  },

  // ==========================================
  // 2. AUDIOVISUAL Y VIDEO (audiovisual)
  // ==========================================
  // Edición de Video (sin paquete)
  'edicion-video': {
    service: 'produccion-audiovisual',
  },
  'av-edicion': {
    service: 'produccion-audiovisual',
  },

  // Reels y TikTok (caso explícito con package=express)
  'reels-tiktok': {
    service: 'produccion-audiovisual',
    package: 'express',
  },
  'av-reels': {
    service: 'produccion-audiovisual',
    package: 'express',
  },

  // Videoclips Musicales (sin paquete)
  'videoclips': {
    service: 'produccion-audiovisual',
  },
  'av-videoclips': {
    service: 'produccion-audiovisual',
  },

  // Spots Visuales (caso explícito con variant=audiovisual, sin paquete)
  'spots-visuales': {
    service: 'spot-publicitario',
    variant: 'audiovisual',
  },
  'av-spots': {
    service: 'spot-publicitario',
    variant: 'audiovisual',
  },

  // ==========================================
  // 3. SPOTS PUBLICITARIOS Y AUDIO (spots-publicitarios)
  // ==========================================
  // Spots Radiales (caso explícito con variant=radial, sin paquete)
  'spots-radiales': {
    service: 'spot-publicitario',
    variant: 'radial',
  },
  'sp-radiales': {
    service: 'spot-publicitario',
    variant: 'radial',
  },

  // Musicalización y Audio Branding (service=otro, sin paquete)
  'musicalizacion': {
    service: 'otro',
  },
  'sp-musicalizacion': {
    service: 'otro',
  },

  // ==========================================
  // 4. ANIMACIÓN & MOTION (animacion)
  // ==========================================
  // Logos Animados (sin paquete)
  'logos-animados': {
    service: 'animacion-motion',
  },
  'am-logos': {
    service: 'animacion-motion',
  },

  // Intros y Openers (sin paquete)
  'intros': {
    service: 'animacion-motion',
  },
  'am-intros': {
    service: 'animacion-motion',
  },

  // Animación 2D / 3D (sin paquete)
  '2d-a-3d': {
    service: 'animacion-motion',
  },
  'am-2d3d': {
    service: 'animacion-motion',
  },

  // ==========================================
  // 5. DISEÑO DIGITAL & EXPERIENCIAS WEB (diseno-digital)
  // ==========================================
  // Landing Pages (sin paquete)
  'landing-pages': {
    service: 'landing-page',
  },

  // Menús Digitales QR (sin paquete)
  'menus-digitales': {
    service: 'carta-digital',
  },
  'menus': {
    service: 'carta-digital',
  },

  // Catálogos Virtuales (service=otro, sin paquete)
  'catalogos-virtuales': {
    service: 'otro',
  },
  'catalogos': {
    service: 'otro',
  },

  // Portafolios Digitales (service=otro, sin paquete)
  'portfolios-digitales': {
    service: 'otro',
  },
  'portfolios': {
    service: 'otro',
  },

  // ==========================================
  // 6. INVITACIONES DIGITALES (Gerente Creativo & Catálogo)
  // ==========================================
  'boda': {
    service: 'boda',
  },
  'xv-anos': {
    service: 'xv-anos',
  },
  'cumpleanos': {
    service: 'cumpleanos',
  },
  // Página general con múltiples tipos de eventos -> solo ?tab=quote sin service ni paquete
  'invitaciones-digitales': {},
  'invitaciones': {},
};

/**
 * Mapeo de categorías generales hacia IDs canónicos de servicio en Gerente Creativo.
 * Nota: 'diseno-digital' no tiene servicio único asignado, por lo que hace fallback a ?tab=quote.
 */
export const CATEGORY_QUOTE_MAPPING: Record<string, string> = {
  'diseno-grafico': 'branding',
  'audiovisual': 'produccion-audiovisual',
  'spots-publicitarios': 'spot-publicitario',
  'animacion': 'animacion-motion',
};

/**
 * Genera la URL con deep link hacia Gerente Creativo preseleccionando
 * exclusivamente los parámetros autorizados en la especificación.
 *
 * @param subServiceSlug Slug o ID del subservicio (ej. "logos", "reels-tiktok", "landing-pages")
 * @param categorySlug Slug de la categoría padre opcional (ej. "diseno-grafico")
 */
export function getGerenteCreativoQuoteUrl(subServiceSlug?: string, categorySlug?: string): string {
  const url = new URL(GERENTE_CREATIVO_CATALOG_BASE_URL);

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

  return GERENTE_CREATIVO_CATALOG_BASE_URL;
}

/**
 * Genera la URL con deep link hacia el Catálogo de Paquetes de Gerente Creativo
 * preseleccionando el servicio para visualizar directamente sus fichas y paquetes.
 *
 * @param serviceId ID del servicio o subservicio en Gerente Creativo (ej. "boda", "landing-page", "branding")
 */
export function getGerenteCreativoCatalogUrl(serviceId?: string): string {
  if (!serviceId) {
    return GERENTE_CREATIVO_CATALOG_BASE_URL;
  }
  const url = new URL(GERENTE_CREATIVO_CATALOG_BASE_URL);
  url.searchParams.set('service', serviceId);
  return url.toString();
}
