export interface ExampleProject {
  label: string;
  url: string;
  category?: string;
  type?: string;
}

export interface SubService {
  id: string;
  slug: string;
  title: string;
  description: string;
  price?: string;
  image: string;
  heroImage?: string;
  idealFor?: string[];
  features?: string[];
  examples?: ExampleProject[];
  whatsappNumber?: string;
  whatsappMessage?: string;
  styleType?: 'tech' | 'elegant' | 'corporate' | 'food' | 'minimal';
  themeColor?: string;
  secondaryColor?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  heroImage?: string;
  driveLink: string;
  subServices: SubService[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "diseno-grafico",
    slug: "diseno-grafico",
    number: "01",
    title: "Diseño Gráfico",
    shortTitle: "Diseño Gráfico",
    description: "Identidad visual disruptiva, conceptualización editorial y comunicación visual de alto impacto que consolida marcas.",
    driveLink: "https://drive.google.com/drive/folders/1yLnIZuOUncGMituKVjMny_3ZKiyCam4X?usp=sharing",
    subServices: [
      {
        id: "dg-logos",
        slug: "logos",
        title: "Logos e Identidad",
        description: "Creación de marca única y memorable que comunica la esencia y valores de tu negocio.",
        price: "Desde $50",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Emprendedores", "Nuevas empresas", "Marcas personales", "Rebranding integral"],
        features: [
          "Diseño vectorial original y adaptable",
          "3 propuestas conceptuales iniciales",
          "Manual de uso básico de marca",
          "Entrega de formatos para web e imprenta (AI, SVG, PDF, PNG)"
        ]
      },
      {
        id: "dg-flyers",
        slug: "flyers",
        title: "Flyers y Afiches",
        description: "Diseño publicitario de alto impacto visual para eventos, promociones y lanzamientos comerciales.",
        price: "Desde $30",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Eventos y conciertos", "Discotecas y clubes", "Campañas y ofertas", "Negocios locales"],
        features: [
          "Composición visual atractiva y contemporánea",
          "Jerarquía clara de información",
          "Optimización para redes sociales e historias",
          "Archivo de alta resolución listo para impresión"
        ]
      },
      {
        id: "dg-anuarios",
        slug: "anuarios-escolares",
        title: "Anuarios Escolares",
        description: "Diseño editorial creativo para capturar con elegancia los mejores recuerdos de la etapa estudiantil.",
        price: "Desde $120",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Colegios e institutos", "Promociones escolares", "Universidades", "Grupos conmemorativos"],
        features: [
          "Diagramación y maquetación profesional",
          "Retoque fotográfico avanzado",
          "Diseño de portadas personalizadas",
          "Preparación técnica para imprenta offset o digital"
        ]
      },
      {
        id: "dg-broucher",
        slug: "brochure-corporativo",
        title: "Brochure Corporativo",
        description: "Presentación profesional de tu empresa, productos o catálogo de servicios en formato editorial de alta gama.",
        price: "Desde $80",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Empresas B2B", "Servicios profesionales", "Presentaciones de ventas", "Rondas comerciales"],
        features: [
          "Diseño de dípticos, trípticos y dossiers multipágina",
          "Infografías integradas y gráficos claros",
          "Estética corporativa refinada",
          "Archivos digitales interactivos e imprimibles"
        ]
      },
      {
        id: "dg-tarjetas",
        slug: "tarjetas-y-etiquetas",
        title: "Tarjetas y Etiquetas",
        description: "Papelería corporativa y packaging que elevan la percepción de calidad y detalle en cada entrega.",
        price: "Desde $25",
        image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Profesionales independientes", "Tiendas y boutiques", "Marcas de ropa", "Productos artesanales"],
        features: [
          "Diseño sobrio y elegante acorde a la marca",
          "Preparación técnica con guías de corte y sangrado",
          "Recomendaciones de acabados especiales (barniz, foil, textura)"
        ]
      },
      {
        id: "dg-mockups",
        slug: "mockups",
        title: "Mockups Publicitarios",
        description: "Visualización fotorrealista de tu marca aplicada a productos, packaging, indumentaria o entornos reales.",
        price: "Desde $40",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Presentaciones de marca", "Tiendas virtuales e e-commerce", "Marketing de producto", "Publicidad"],
        features: [
          "Renders fotorrealistas de alta fidelidad",
          "Múltiples perspectivas e iluminaciones",
          "Alta resolución para impresión y digital",
          "Listos para campañas y redes sociales"
        ]
      },
      {
        id: "dg-banners",
        slug: "banners",
        title: "Banners y Gigantografías",
        description: "Formatos digitales y físicos de gran escala diseñados para captar atención y generar máxima visibilidad.",
        price: "Desde $40",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Cabeceras web y pauta digital", "Ferias y stands", "Locales comerciales", "Publicidad exterior en vía pública"],
        features: [
          "Diseño responsivo para plataformas web",
          "Archivos en alta resolución para imprenta a gran formato",
          "Llamados a la acción visuales y directos"
        ]
      }
    ]
  },
  {
    id: "audiovisual",
    slug: "audiovisual",
    number: "02",
    title: "Audiovisual y Video",
    shortTitle: "Audiovisual",
    description: "Producción cinemática y post-producción de alta gama para narrativas visuales que cautivan a tu audiencia.",
    driveLink: "https://drive.google.com/drive/folders/1HpDu1Nu_FP8Lt-ASb6fN7L1CPZaC7mSx?usp=sharing",
    subServices: [
      {
        id: "av-edicion",
        slug: "edicion-video",
        title: "Edición de Video",
        description: "Post-producción profesional con corte rítmico, corrección de color y diseño sonoro para proyectos cinematográficos y corporativos.",
        price: "Desde $80",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Creadores de contenido", "Empresas e instituciones", "Productoras", "Cineastas y documentalistas"],
        features: [
          "Corrección de color y color grading cinematográfico",
          "Diseño sonoro y mezcla estéreo",
          "Cortes dinámicos adaptados a la narrativa",
          "Efectos visuales e inserción de gráficos"
        ]
      },
      {
        id: "av-reels",
        slug: "reels-tiktok",
        title: "Reels y TikTok",
        description: "Contenido vertical dinámico optimizado para captar atención en los primeros segundos y maximizar retención.",
        price: "Desde $40",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Marcas en crecimiento", "Emprendedores", "Influencers y creadores", "Estrategias de pauta publicitaria"],
        features: [
          "Edición rítmica y ganchos visuales",
          "Subtítulos dinámicos integrados",
          "Transiciones creativas sin saturación",
          "Formatos optimizados para algoritmos 9:16"
        ]
      },
      {
        id: "av-videoclips",
        slug: "videoclips",
        title: "Videoclips Musicales",
        description: "Producción audiovisual completa que potencia la visión y personalidad del artista con estética cinematográfica.",
        price: "Desde $300",
        image: "https://images.unsplash.com/photo-1492691523567-69b9a01a7051?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Músicos solistas", "Bandas y orquestas", "Artistas urbanos", "Sellos discográficos"],
        features: [
          "Guion conceptual y plan de rodaje",
          "Dirección de fotografía y cámaras profesionales",
          "Post-producción avanzada y masterización de imagen",
          "Estética artística contemporánea"
        ]
      },
      {
        id: "av-spots",
        slug: "spots-visuales",
        title: "Spots Visuales",
        description: "Comerciales publicitarios diseñados con impacto cinematográfico para televisión y medios digitales.",
        price: "Desde $150",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Marcas corporativas", "Lanzamiento de productos", "Campañas estacionales", "Servicios de alto valor"],
        features: [
          "Storytelling comercial enfocado en resultados",
          "Calidad 4K con iluminación cinematográfica",
          "Locución profesional y derechos musicales",
          "Integración de branding y llamadas a la acción"
        ]
      }
    ]
  },
  {
    id: "spots-publicitarios",
    slug: "spots-publicitarios",
    number: "03",
    title: "Spots Publicitarios y Audio",
    shortTitle: "Spots Publicitarios",
    description: "Estrategias de producción sonora y locución profesional orientadas a posicionamiento de mercado y recordación.",
    driveLink: "https://drive.google.com/drive/folders/1vgyke9tKHhFlmMdQOpjL-BlphCVb66sI?usp=sharing",
    subServices: [
      {
        id: "sp-radiales",
        slug: "spots-radiales",
        title: "Spots Radiales",
        description: "Locución y producción de audio de alto impacto para emisoras radiales, perifoneo y plataformas de audio.",
        price: "Desde $60",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Campañas comerciales", "Eventos masivos y ferias", "Campañas de concientización", "Negocios locales"],
        features: [
          "Locutores profesionales de amplio registro",
          "Diseño de efectos de sonido persuasivos",
          "Mezcla y masterización con compresión para radio",
          "Redacción de guiones comerciales de alta conversión"
        ]
      },
      {
        id: "sp-musicalizacion",
        slug: "musicalizacion",
        title: "Musicalización y Audio Branding",
        description: "Composición sonora, jingles y diseño de audio a medida para dotar de identidad acústica a tus producciones.",
        price: "Desde $100",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Videos corporativos", "Podcasts y shows", "Videojuegos y aplicaciones", "Identidades de marca sonora"],
        features: [
          "Composición musical original",
          "Librerías sonoras premium con licencias",
          "Mezcla y masterización con estándares de broadcast",
          "Sincronización milimétrica con elementos visuales"
        ]
      }
    ]
  },
  {
    id: "animacion",
    slug: "animacion",
    number: "04",
    title: "Animación & Motion",
    shortTitle: "Animación",
    description: "Motion graphics, animación 2D y modelado 3D para dar vida, dinamismo y claridad conceptual a tus ideas.",
    driveLink: "https://drive.google.com/drive/folders/11Xb0rcw4bXdB7INXBalw4INRstZ5XYTG?usp=sharing",
    subServices: [
      {
        id: "am-logos",
        slug: "logos-animados",
        title: "Logos Animados",
        description: "Tu marca cobra vida con movimiento fluido que refuerza la percepción de modernidad y excelencia técnica.",
        price: "Desde $70",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Intros de video y cabeceras", "Sitios web y aplicaciones", "Presentaciones ejecutivas", "Branding digital"],
        features: [
          "Animación con fluidez cinética natural",
          "Formatos de entrega múltiple (MP4, GIF, WebM, Lottie)",
          "Fondo transparente para superposición",
          "Diseño de sonido complementario opcional"
        ]
      },
      {
        id: "am-intros",
        slug: "intros",
        title: "Intros y Openers",
        description: "Aperturas audiovisuales memorables que marcan el tono profesional de cada una de tus emisiones o contenidos.",
        price: "Desde $50",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Canales de YouTube", "Webinars y masterclasses", "Cursos online y academias", "Series y podcasts"],
        features: [
          "Impacto visual en los primeros 3 segundos",
          "Branding dinámico personalizado",
          "Versiones cortas (3s) y estándar (8s)",
          "Música sincronizada libre de derechos"
        ]
      },
      {
        id: "am-2d3d",
        slug: "2d-a-3d",
        title: "Animación 2D y 3D",
        description: "Modelado dimensional y motion design para ilustrar productos complejos, flujos de trabajo o conceptos abstractos.",
        price: "Desde $200",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
        idealFor: ["Presentación de productos de tecnología", "Videos explicativos y tutorials", "Arquitectura e ingeniería", "Startups"],
        features: [
          "Modelado de objetos y escenarios en 3D",
          "Animación de cámaras con iluminación de estudio",
          "Renderizado en alta definición",
          "Etapa de storyboard y bocetado previo"
        ]
      }
    ]
  },
  {
    id: "diseno-digital",
    slug: "diseno-digital",
    number: "05",
    title: "Diseño Digital & Experiencias Web",
    shortTitle: "Experiencias Web",
    description: "Desarrollo de soluciones digitales interactivas diseñadas para mostrar productos, servicios o eventos mediante enlaces profesionales compatibles con celular.",
    driveLink: "#",
    subServices: [
      {
        id: "catalogos",
        slug: "catalogos-virtuales",
        title: "Catálogos Virtuales",
        description: "Solución moderna para mostrar productos o servicios mediante un enlace profesional optimizado para celular, facilitando que los clientes visualicen información de forma clara y ordenada.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200",
        styleType: 'tech',
        themeColor: '#0284C7',
        secondaryColor: '#0EA5E9',
        idealFor: [
          "Tiendas y comercios",
          "Clínicas y centros médicos",
          "Empresas e instituciones",
          "Profesionales independientes",
          "Ópticas y farmacias",
          "Ferreterías y distribuidoras",
          "Boutiques y moda",
          "Negocios locales"
        ],
        features: [
          "Galería visual ordenada de productos o servicios",
          "Precios y descripciones actualizadas",
          "Diseño responsivo optimizado para pantallas móviles",
          "Estructura tipo mini página web de carga instantánea",
          "Optimizado para compartir directamente por WhatsApp",
          "Fácil acceso con enlace directo o código QR",
          "Elevación de la imagen profesional de la marca"
        ],
        examples: [
          { category: "Muebles", label: "Catálogo de Muebles", url: "https://catalogo-digital-de-muebles.vercel.app/" },
          { category: "Ferretería", label: "Catálogo de Ferretería", url: "https://catalogo-digital-de-ferreteria.vercel.app/" },
          { category: "Boutique", label: "Catálogo de Ropa", url: "https://wa.me/51932350348?text=Hola,%20quisiera%20ver%20la%20demo%20del%20Catálogo%20para%20Boutique" },
          { category: "Óptica", label: "Catálogo para Óptica", url: "https://wa.me/51932350348?text=Hola,%20quisiera%20ver%20la%20demo%20del%20Catálogo%20para%20Óptica" }
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre un CATÁLOGO VIRTUAL para mi negocio."
      },
      {
        id: "invitaciones",
        slug: "invitaciones-digitales",
        title: "Invitaciones Digitales",
        description: "Invitaciones interactivas modernas y elegantes que permiten compartir toda la información de celebraciones mediante un enlace estético y fácil de utilizar.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
        styleType: 'elegant',
        themeColor: '#D97706',
        secondaryColor: '#F59E0B',
        idealFor: [
          "Bodas y matrimonios",
          "Fiestas de 15 años",
          "Cumpleaños y aniversarios",
          "Eventos familiares y baby showers",
          "Galas corporativas"
        ],
        features: [
          "Animaciones y transiciones elegantes",
          "Cuenta regresiva en tiempo real del evento",
          "Galería fotográfica de los agasajados",
          "Ubicación con integración a Google Maps y Waze",
          "Botón de confirmación de asistencia vía WhatsApp",
          "Enlace seguro y ligero para enviar a invitados"
        ],
        examples: [
          { category: "Boda", label: "Invitación de Boda", url: "https://invitacion-de-boda-v3.vercel.app/" },
          { category: "15 Años", label: "15 Años Laila Fernanda", url: "https://15-a-os-laila-fernanda.vercel.app/" },
          { category: "1 Año", label: "Cumpleaños 1 Año", url: "https://cumplea-os-1-a-o.vercel.app/" },
          { category: "50 Años", label: "50 Años Néstor Chipana", url: "https://50-a-os-n-stor-chipana-mendoza.vercel.app/" }
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre una INVITACIÓN DIGITAL para mi evento."
      },
      {
        id: "landing-pages",
        slug: "landing-pages",
        title: "Landing Pages",
        description: "Páginas web modernas diseñadas para promocionar servicios o negocios de manera clara, persuasiva y optimizada para captar clientes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
        styleType: 'corporate',
        themeColor: '#0284C7',
        secondaryColor: '#0369A1',
        idealFor: [
          "Negocios en expansión",
          "Emprendedores y startups",
          "Marcas personales",
          "Promociones y lanzamientos",
          "Servicios profesionales (abogados, consultores, médicos)",
          "Campañas publicitarias de pago"
        ],
        features: [
          "Estructura orientada a la conversión de clientes",
          "Diseño visual contemporáneo y limpio",
          "Velocidad de carga ultrarrápida",
          "Integración de botones directos a WhatsApp y llamadas",
          "Formularios de contacto y captura de leads",
          "Imagen de máxima confianza comercial"
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre una LANDING PAGE para mi negocio."
      },
      {
        id: "menus",
        slug: "menus-digitales",
        title: "Menús Digitales QR",
        description: "Menús interactivos diseñados para restaurantes que desean exhibir su carta culinaria de forma apetitosa y accesible mediante enlace o código QR en mesa.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        styleType: 'food',
        themeColor: '#EA580C',
        secondaryColor: '#C2410C',
        idealFor: [
          "Restaurantes y bistrots",
          "Pollerías y parrillas",
          "Cafeterías y panaderías",
          "Cevicherías y marisquerías",
          "Pizzerías y bares",
          "Negocios gastronómicos con delivery"
        ],
        features: [
          "Organización visual por categorías de platos y bebidas",
          "Fotografías destacadas de platillos",
          "Adaptabilidad total a cualquier smartphone sin instalar apps",
          "Compatible con códigos QR impresos en mesa",
          "Opción para pedidos directos vía WhatsApp"
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre un MENÚ DIGITAL para mi restaurante."
      },
      {
        id: "portfolios",
        slug: "portfolios-digitales",
        title: "Portafolios Digitales",
        description: "Páginas diseñadas para exhibir proyectos, credenciales y trabajos con una presentación editorial atractiva y profesional.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200",
        styleType: 'minimal',
        themeColor: '#0F172A',
        secondaryColor: '#334155',
        idealFor: [
          "Fotógrafos y videógrafos",
          "Arquitectos y diseñadores de interiores",
          "Diseñadores y directores de arte",
          "Ingenieros y desarrolladores",
          "Artistas y creadores independientes"
        ],
        features: [
          "Galería visual moderna con visualización a pantalla completa",
          "Secciones de biografía, experiencia y clientes",
          "Fácil de compartir con clientes potenciales en un solo enlace",
          "Elevación del prestigio y tarifas de servicios"
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre un PORTAFOLIO DIGITAL para mostrar mis trabajos."
      }
    ]
  }
];

// Helper methods
export function getServiceCategory(idOrSlug: string): ServiceCategory | undefined {
  return SERVICES_DATA.find(
    (s) => s.id === idOrSlug || s.slug === idOrSlug
  );
}

export function getSubService(categoryIdentifier: string, subIdentifier: string): { category: ServiceCategory; subService: SubService } | undefined {
  const category = getServiceCategory(categoryIdentifier);
  if (!category) return undefined;
  
  const subService = category.subServices.find(
    (sub) => sub.id === subIdentifier || sub.slug === subIdentifier
  );
  if (!subService) return undefined;

  return { category, subService };
}
