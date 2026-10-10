/**
 * Mapeo central de deep links hacia Gerente Creativo de V.A.C.
 * Base URL: https://gerente-creativo-de-vac.vercel.app/?tab=quote
 *
 * Permite preseleccionar automáticamente el servicio, paquete y variante
 * en el cotizador interactivo de Gerente Creativo según la especialidad
 * que el usuario esté consultando en V.A.C. Creative.
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
 * y los parámetros que consume Gerente Creativo en ?tab=quote
 */
export const SUB_SERVICE_QUOTE_MAPPING: Record<string, QuoteDeepLinkParams> = {
  // ==========================================
  // 01. DISEÑO GRÁFICO (diseno-grafico)
  // ==========================================
  'logos': {
    service: 'diseno-grafico',
    package: 'logos',
    variant: 'identidad-visual',
  },
  'dg-logos': {
    service: 'diseno-grafico',
    package: 'logos',
    variant: 'identidad-visual',
  },
  'flyers': {
    service: 'diseno-grafico',
    package: 'flyers',
    variant: 'publicitario',
  },
  'dg-flyers': {
    service: 'diseno-grafico',
    package: 'flyers',
    variant: 'publicitario',
  },
  'anuarios-escolares': {
    service: 'diseno-grafico',
    package: 'editorial',
    variant: 'anuarios',
  },
  'dg-anuarios': {
    service: 'diseno-grafico',
    package: 'editorial',
    variant: 'anuarios',
  },
  'brochure-corporativo': {
    service: 'diseno-grafico',
    package: 'editorial',
    variant: 'brochure',
  },
  'dg-broucher': {
    service: 'diseno-grafico',
    package: 'editorial',
    variant: 'brochure',
  },
  'tarjetas-y-etiquetas': {
    service: 'diseno-grafico',
    package: 'papeleria',
    variant: 'tarjetas-etiquetas',
  },
  'dg-tarjetas': {
    service: 'diseno-grafico',
    package: 'papeleria',
    variant: 'tarjetas-etiquetas',
  },
  'mockups': {
    service: 'diseno-grafico',
    package: 'mockups',
    variant: 'producto',
  },
  'dg-mockups': {
    service: 'diseno-grafico',
    package: 'mockups',
    variant: 'producto',
  },
  'banners': {
    service: 'diseno-grafico',
    package: 'gran-formato',
    variant: 'banners',
  },
  'dg-banners': {
    service: 'diseno-grafico',
    package: 'gran-formato',
    variant: 'banners',
  },

  // ==========================================
  // 02. AUDIOVISUAL Y VIDEO (audiovisual)
  // ==========================================
  'edicion-video': {
    service: 'audiovisual',
    package: 'edicion',
    variant: 'post-produccion',
  },
  'av-edicion': {
    service: 'audiovisual',
    package: 'edicion',
    variant: 'post-produccion',
  },
  'reels-tiktok': {
    service: 'audiovisual',
    package: 'vertical',
    variant: 'reels-tiktok',
  },
  'av-reels': {
    service: 'audiovisual',
    package: 'vertical',
    variant: 'reels-tiktok',
  },
  'videoclips': {
    service: 'audiovisual',
    package: 'musical',
    variant: 'videoclip',
  },
  'av-videoclips': {
    service: 'audiovisual',
    package: 'musical',
    variant: 'videoclip',
  },
  'spots-visuales': {
    service: 'audiovisual',
    package: 'comercial',
    variant: 'spot-tv-digital',
  },
  'av-spots': {
    service: 'audiovisual',
    package: 'comercial',
    variant: 'spot-tv-digital',
  },

  // ==========================================
  // 03. SPOTS PUBLICITARIOS Y AUDIO (spots-publicitarios)
  // ==========================================
  'spots-radiales': {
    service: 'spots-publicitarios',
    package: 'audio',
    variant: 'spot-radial',
  },
  'sp-radiales': {
    service: 'spots-publicitarios',
    package: 'audio',
    variant: 'spot-radial',
  },
  'musicalizacion': {
    service: 'spots-publicitarios',
    package: 'audio-branding',
    variant: 'musicalizacion',
  },
  'sp-musicalizacion': {
    service: 'spots-publicitarios',
    package: 'audio-branding',
    variant: 'musicalizacion',
  },

  // ==========================================
  // 04. ANIMACIÓN & MOTION (animacion)
  // ==========================================
  'logos-animados': {
    service: 'animacion',
    package: 'motion',
    variant: 'logo-animado',
  },
  'am-logos': {
    service: 'animacion',
    package: 'motion',
    variant: 'logo-animado',
  },
  'intros': {
    service: 'animacion',
    package: 'motion',
    variant: 'intros-openers',
  },
  'am-intros': {
    service: 'animacion',
    package: 'motion',
    variant: 'intros-openers',
  },
  '2d-a-3d': {
    service: 'animacion',
    package: '3d-motion',
    variant: 'animacion-2d-3d',
  },
  'am-2d3d': {
    service: 'animacion',
    package: '3d-motion',
    variant: 'animacion-2d-3d',
  },

  // ==========================================
  // 05. EXPERIENCIAS WEB & DIGITAL (diseno-digital)
  // ==========================================
  'catalogos-virtuales': {
    service: 'diseno-digital',
    package: 'catalogos',
    variant: 'catalogo-virtual',
  },
  'catalogos': {
    service: 'diseno-digital',
    package: 'catalogos',
    variant: 'catalogo-virtual',
  },
  'invitaciones-digitales': {
    service: 'diseno-digital',
    package: 'invitaciones',
    variant: 'invitacion-interactiva',
  },
  'invitaciones': {
    service: 'diseno-digital',
    package: 'invitaciones',
    variant: 'invitacion-interactiva',
  },
  'landing-pages': {
    service: 'diseno-digital',
    package: 'web',
    variant: 'landing-page',
  },
  'menus-digitales': {
    service: 'diseno-digital',
    package: 'qr-gastronomico',
    variant: 'menu-digital',
  },
  'menus': {
    service: 'diseno-digital',
    package: 'qr-gastronomico',
    variant: 'menu-digital',
  },
  'portfolios-digitales': {
    service: 'diseno-digital',
    package: 'web',
    variant: 'portafolio-digital',
  },
  'portfolios': {
    service: 'diseno-digital',
    package: 'web',
    variant: 'portafolio-digital',
  },
};

/**
 * Tabla de equivalencia para categorías generales en caso de que solo se disponga de la categoría.
 */
export const CATEGORY_QUOTE_MAPPING: Record<string, string> = {
  'diseno-grafico': 'diseno-grafico',
  'audiovisual': 'audiovisual',
  'spots-publicitarios': 'spots-publicitarios',
  'animacion': 'animacion',
  'diseno-digital': 'diseno-digital',
};

/**
 * Genera la URL con deep link hacia Gerente Creativo.
 * Si subServiceSlug o categorySlug no coinciden, devuelve la URL base del cotizador.
 *
 * @param subServiceSlug Slug o ID del subservicio (ej. "catalogos-virtuales", "logos")
 * @param categorySlug Slug de la categoría padre opcional (ej. "diseno-digital")
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
