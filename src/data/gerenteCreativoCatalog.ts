/**
 * Fichas comerciales principales de Gerente Creativo de V.A.C.
 * Referencia oficial sincronizada con el catálogo comercial de Gerente Creativo.
 *
 * Cada ficha incluye su imagen oficial en Cloudinary, tiempo de entrega,
 * precio base comercial, categoría, ruta de detalle interno y deep link al cotizador.
 */

export interface GerenteCreativoServiceItem {
  id: string;
  serviceKey: string;
  title: string;
  subtitle: string;
  deliveryTime: string;
  image: string;
  minPrice: string;
  categorySlug: 'diseno-digital' | 'spots-publicitarios' | 'audiovisual' | 'diseno-grafico' | 'animacion';
  categoryTitle: string;
  categoryNumber: string;
  badge: string;
  features: string[];
  detailUrl: string;
  quoteUrl: string;
}

export const GERENTE_CREATIVO_COMMERCIAL_CARDS: GerenteCreativoServiceItem[] = [
  {
    id: 'gc-boda',
    serviceKey: 'boda',
    title: 'Invitación Virtual de Bodas',
    subtitle: 'Maquetación premium con confirmación RSVP inteligente, música personalizada, mapas y paleta de alta costura.',
    deliveryTime: '2-4 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791559267/BODA_-_BASICO.png',
    minPrice: 'Desde S/ 100',
    categorySlug: 'diseno-digital',
    categoryTitle: 'Diseño Digital & Web',
    categoryNumber: '05',
    badge: 'Invitación Virtual',
    features: [
      'Confirmación RSVP directa a WhatsApp',
      'Música personalizada & fotos premium',
      'Mapas interactivos e itinerario'
    ],
    detailUrl: '/servicios/diseno-digital/invitaciones-digitales',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=boda'
  },
  {
    id: 'gc-xv-anos',
    serviceKey: 'xv-anos',
    title: 'Invitación de XV Años Princesa',
    subtitle: 'Animaciones mágicas, lluvia de destellos, cronómetro y dress code para una fiesta inolvidable.',
    deliveryTime: '2-4 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791557513/XV_A%C3%91OS_-BASICO.png',
    minPrice: 'Desde S/ 90',
    categorySlug: 'diseno-digital',
    categoryTitle: 'Diseño Digital & Web',
    categoryNumber: '05',
    badge: '15 Años',
    features: [
      'Cuenta regresiva mágica & animaciones',
      'Dress code & galería de recuerdos',
      'Control de pases y confirmación'
    ],
    detailUrl: '/servicios/diseno-digital/invitaciones-digitales',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=xv-anos'
  },
  {
    id: 'gc-cumpleanos',
    serviceKey: 'cumpleanos',
    title: 'Invitación de Cumpleaños Express',
    subtitle: 'Formato ágil de alta energía con botón de ubicación y confirmación.',
    deliveryTime: '24-48 Horas',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791559607/EXPRESS.png',
    minPrice: 'Desde S/ 60',
    categorySlug: 'diseno-digital',
    categoryTitle: 'Diseño Digital & Web',
    categoryNumber: '05',
    badge: 'Cumpleaños',
    features: [
      'Enlace web optimizado para móviles',
      'Confirmación directa por WhatsApp',
      'Entrega express en 24-48 horas'
    ],
    detailUrl: '/servicios/diseno-digital/invitaciones-digitales',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=cumpleanos'
  },
  {
    id: 'gc-carta-digital',
    serviceKey: 'carta-digital',
    title: 'Carta & Menú Digital Gourmet',
    subtitle: 'Catálogo de platillos con categorías, fotos y envío de comanda a WhatsApp.',
    deliveryTime: '2-4 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791559998/Carta_Y_Men%C3%BA_-_BASICO.png',
    minPrice: 'Desde S/ 90',
    categorySlug: 'diseno-digital',
    categoryTitle: 'Diseño Digital & Web',
    categoryNumber: '05',
    badge: 'Carta / Menú',
    features: [
      'Código QR listo para mesas y barras',
      'Comanda instantánea enviada a WhatsApp',
      'Filtro dinámico de platillos y precios'
    ],
    detailUrl: '/servicios/diseno-digital/menus-digitales',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=carta-digital'
  },
  {
    id: 'gc-landing-page',
    serviceKey: 'landing-page',
    title: 'Landing Page Comercial',
    subtitle: 'Página web de alta conversión para venta o captación de prospectos.',
    deliveryTime: '3-5 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791513927/ECENCIAL.png',
    minPrice: 'Desde S/ 300',
    categorySlug: 'diseno-digital',
    categoryTitle: 'Diseño Digital & Web',
    categoryNumber: '05',
    badge: 'Página Web',
    features: [
      'Estructura persuasiva de alta conversión',
      'Adaptación móvil impecable y SEO base',
      'Llamados a la acción & WhatsApp integrados'
    ],
    detailUrl: '/servicios/diseno-digital/landing-pages',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=landing-page'
  },
  {
    id: 'gc-spot-publicitario',
    serviceKey: 'spot-publicitario',
    title: 'Spot Publicitario / Locución',
    subtitle: 'Audio comercial con locución profesional y masterización de sonido.',
    deliveryTime: '2-4 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791513923/Simple.png',
    minPrice: 'Desde S/ 80',
    categorySlug: 'spots-publicitarios',
    categoryTitle: 'Spots y Audio',
    categoryNumber: '03',
    badge: 'Spot Comercial',
    features: [
      'Locución profesional en estudio acústico',
      'Masterización de audio estándar radial',
      'Entrega en archivos WAV y MP3 en alta fidelidad'
    ],
    detailUrl: '/servicios/spots-publicitarios/spots-radiales',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=spot-publicitario'
  },
  {
    id: 'gc-produccion-audiovisual',
    serviceKey: 'produccion-audiovisual',
    title: 'Producción Audiovisual / Video',
    subtitle: 'Edición cinemática, corrección de color y formato vertical para redes.',
    deliveryTime: '3-5 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791557403/Producci%C3%B3n_Audiovisual_Video_-Express.png',
    minPrice: 'Desde S/ 100',
    categorySlug: 'audiovisual',
    categoryTitle: 'Audiovisual y Video',
    categoryNumber: '02',
    badge: 'Video & Edición',
    features: [
      'Edición con narrativa comercial ágil',
      'Tratamiento de color y diseño sonoro',
      'Formatos optimizados para TikTok, Reels y YouTube'
    ],
    detailUrl: '/servicios/audiovisual/edicion-video',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=produccion-audiovisual'
  },
  {
    id: 'gc-branding',
    serviceKey: 'branding',
    title: 'Identidad Gráfica & Branding',
    subtitle: 'Diseño de logotipos vectoriales originales y paletas cromáticas.',
    deliveryTime: '2-4 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791513924/Logo.png',
    minPrice: 'Desde S/ 150',
    categorySlug: 'diseno-grafico',
    categoryTitle: 'Diseño Gráfico',
    categoryNumber: '01',
    badge: 'Branding & Logo',
    features: [
      'Logotipo vectorial original y escalable',
      'Paleta cromática y tipografías sugeridas',
      'Archivos editables y derechos de uso comercial'
    ],
    detailUrl: '/servicios/diseno-grafico/logos',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=branding&package=logo'
  },
  {
    id: 'gc-artes-multimedia',
    serviceKey: 'artes-multimedia',
    title: 'Diseño / Artes Multimedia',
    subtitle: 'Diseño de flyers, posts, afiches, banners, historias y fotomontajes de alto impacto visual.',
    deliveryTime: '24-48 Horas',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791513930/Arte_Esencial.png',
    minPrice: 'Desde S/ 40',
    categorySlug: 'diseno-grafico',
    categoryTitle: 'Diseño Gráfico',
    categoryNumber: '01',
    badge: 'Flyer & Arte',
    features: [
      'Piezas de autor no genéricas para redes',
      'Jerarquía comercial y balance tipográfico',
      'Formatos optimizados para Instagram y WhatsApp'
    ],
    detailUrl: '/servicios/diseno-grafico/flyers',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=artes-multimedia'
  },
  {
    id: 'gc-animacion-motion',
    serviceKey: 'animacion-motion',
    title: 'Animación & Motion',
    subtitle: 'Gráficos en movimiento, animación 2D y motion design de autor para marcas.',
    deliveryTime: '3-5 Días',
    image: 'https://res.cloudinary.com/yzpbyhox/image/upload/v1791563016/Motion_Esencial.png',
    minPrice: 'Desde S/ 90',
    categorySlug: 'animacion',
    categoryTitle: 'Animación & Motion',
    categoryNumber: '04',
    badge: 'Motion Graphics',
    features: [
      'Animación 2D fluida y dinámica',
      'Formatos optimizados para redes y pantallas',
      'Archivos en MP4 Full HD y GIF transparente'
    ],
    detailUrl: '/servicios/animacion/logos-animados',
    quoteUrl: 'https://gerente-creativo-de-vac.vercel.app/?tab=quote&service=animacion-motion'
  }
];
