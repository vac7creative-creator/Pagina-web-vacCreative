export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  subServiceSlug: string;
  description: string;
  image: string;
  year: string;
  externalUrl?: string;
  client?: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "fp-1",
    title: "Identidad Editorial & Sistema Visual",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    subServiceSlug: "logos",
    description: "Desarrollo de lenguaje de marca minimalista, papelería y aplicaciones para estudio de arquitectura contemporánea.",
    image: "/src/assets/images/editorial_branding_showcase_1790817285088.jpg",
    year: "2026",
    externalUrl: "https://drive.google.com/drive/folders/1yLnIZuOUncGMituKVjMny_3ZKiyCam4X?usp=sharing",
    client: "Arquitectura & Espacios"
  },
  {
    id: "fp-2",
    title: "Producción Audiovisual & Cinematografía",
    category: "Audiovisual y Video",
    categorySlug: "audiovisual",
    subServiceSlug: "videoclips",
    description: "Dirección de fotografía y post-producción con corrección de color para narrativa visual en alta resolución.",
    image: "/src/assets/images/editorial_audiovisual_production_1790817294196.jpg",
    year: "2026",
    externalUrl: "https://drive.google.com/drive/folders/1HpDu1Nu_FP8Lt-ASb6fN7L1CPZaC7mSx?usp=sharing",
    client: "Producción Independiente"
  },
  {
    id: "fp-3",
    title: "Catálogo Virtual de Muebles",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "catalogos-virtuales",
    description: "Plataforma digital interactiva optimizada para móviles con catálogo de productos y cotización por WhatsApp.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    year: "2025",
    externalUrl: "https://catalogo-digital-de-muebles.vercel.app/",
    client: "Muebles de Diseño"
  },
  {
    id: "fp-4",
    title: "Invitación Digital Interactiva de Boda",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "invitaciones-digitales",
    description: "Experiencia editorial interactiva con cuenta regresiva, confirmación de asistencia, mapa de locación y galería.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    year: "2025",
    externalUrl: "https://invitacion-de-boda-v3.vercel.app/",
    client: "Celebración Privada"
  }
];
