export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  subServiceSlug: string;
  subServiceTitle: string;
  description: string;
  thumbnail: string;
  previewUrl: string;
  previewType: 'live' | 'image' | 'video';
  tags?: string[];
  year?: string;
  isFeatured?: boolean;
}

/**
 * Proyectos reales existentes en la plataforma V.A.C. Creative.
 * No se inventan clientes ni marcas de relleno.
 */
export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "proj-cat-muebles",
    title: "Catálogo Digital de Muebles",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "catalogos-virtuales",
    subServiceTitle: "Catálogos Virtuales",
    description: "Catálogo interactivo con catálogo de productos, especificaciones de acabados y enlace de pedido directo a WhatsApp.",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    previewUrl: "https://catalogo-digital-de-muebles.vercel.app/",
    previewType: "live",
    tags: ["Muebles", "Comercio", "WhatsApp"],
    year: "2025",
    isFeatured: true,
  },
  {
    id: "proj-cat-ferreteria",
    title: "Catálogo Digital de Ferretería",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "catalogos-virtuales",
    subServiceTitle: "Catálogos Virtuales",
    description: "Plataforma digital para exhibición de herramientas y materiales de ferretería con diseño optimizado para celulares.",
    thumbnail: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800",
    previewUrl: "https://catalogo-digital-de-ferreteria.vercel.app/",
    previewType: "live",
    tags: ["Ferretería", "Distribución", "Móvil"],
    year: "2025",
    isFeatured: true,
  },
  {
    id: "proj-inv-boda",
    title: "Invitación Digital de Boda",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "invitaciones-digitales",
    subServiceTitle: "Invitaciones Digitales",
    description: "Invitación online elegante con cuenta regresiva, confirmación de asistencia, mapa de ubicación y galería de fotos.",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    previewUrl: "https://invitacion-de-boda-v3.vercel.app/",
    previewType: "live",
    tags: ["Boda", "Animaciones", "Ubicación"],
    year: "2025",
    isFeatured: true,
  },
  {
    id: "proj-inv-15-anos",
    title: "Invitación 15 Años · Laila Fernanda",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "invitaciones-digitales",
    subServiceTitle: "Invitaciones Digitales",
    description: "Diseño conmemorativo personalizado con música, confirmación vía WhatsApp y cronograma del evento.",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    previewUrl: "https://15-a-os-laila-fernanda.vercel.app/",
    previewType: "live",
    tags: ["15 Años", "Fiesta", "Interactiva"],
    year: "2025",
    isFeatured: true,
  },
  {
    id: "proj-inv-cumpleanos-1",
    title: "Invitación Cumpleaños · 1 Año",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "invitaciones-digitales",
    subServiceTitle: "Invitaciones Digitales",
    description: "Invitación virtual festiva adaptada a celulares para celebración familiar de primer año.",
    thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
    previewUrl: "https://cumplea-os-1-a-o.vercel.app/",
    previewType: "live",
    tags: ["Cumpleaños", "Infantil"],
    year: "2025",
    isFeatured: false,
  },
  {
    id: "proj-inv-50-anos",
    title: "Invitación 50 Años · Néstor Chipana",
    category: "Diseño Digital & Experiencias Web",
    categorySlug: "diseno-digital",
    subServiceSlug: "invitaciones-digitales",
    subServiceTitle: "Invitaciones Digitales",
    description: "Invitación digital conmemorativa con recepción de mensajes, galería histórica y mapa para invitados.",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
    previewUrl: "https://50-a-os-n-stor-chipana-mendoza.vercel.app/",
    previewType: "live",
    tags: ["50 Años", "Conmemorativa"],
    year: "2025",
    isFeatured: false,
  }
];

// Helper methods
export function getFeaturedProjects(): ProjectItem[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.isFeatured);
}

export function getAllProjects(): ProjectItem[] {
  return PORTFOLIO_PROJECTS;
}

export function getProjectsBySubService(subServiceSlug: string): ProjectItem[] {
  return PORTFOLIO_PROJECTS.filter(
    (p) => p.subServiceSlug === subServiceSlug
  );
}

export function getProjectsByCategory(categorySlug: string): ProjectItem[] {
  return PORTFOLIO_PROJECTS.filter(
    (p) => p.categorySlug === categorySlug
  );
}

/**
 * Genera dinámicamente únicamente las categorías que tienen proyectos reales existentes.
 * Evita mostrar filtros con 0 proyectos.
 */
export function getAvailableCategoryFilters(): { slug: string; name: string; count: number }[] {
  const categoryMap = new Map<string, { slug: string; name: string; count: number }>();

  PORTFOLIO_PROJECTS.forEach((p) => {
    const existing = categoryMap.get(p.categorySlug);
    if (existing) {
      existing.count += 1;
    } else {
      categoryMap.set(p.categorySlug, {
        slug: p.categorySlug,
        name: p.category,
        count: 1,
      });
    }
  });

  return Array.from(categoryMap.values());
}
