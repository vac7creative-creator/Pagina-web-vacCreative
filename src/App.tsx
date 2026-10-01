import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Video, 
  Tv, 
  Layers, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Youtube, 
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  ArrowLeft,
  Globe,
  Smartphone,
  QrCode,
  Briefcase,
  CheckCircle2,
  Users,
  Zap,
  Music,
  Calendar,
  MapPin,
  Clock,
  Heart,
  Star
} from 'lucide-react';

// --- Types & Interfaces ---
interface SubService {
  id?: string;
  title: string;
  description: string;
  price?: string;
  image: string;
  idealFor?: string[];
  features?: string[];
  examples?: { label: string; url: string; category?: string; type?: string }[];
  whatsappNumber?: string;
  whatsappMessage?: string;
  whatsappVariants?: { label: string; message: string }[];
  // Specialized Page Fields
  themeColor?: string;
  secondaryColor?: string;
  heroImage?: string;
  styleType?: 'tech' | 'elegant' | 'corporate' | 'food' | 'minimal';
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  driveLink: string;
  subServices: SubService[];
}

// --- Constants ---
const LOGO_URL = "https://res.cloudinary.com/dcnynnstm/image/upload/v1768607132/VAC_Creatuve_LOGO_fzyvbn.png";
const WHATSAPP_BASE = "https://wa.me/51932350348"; // Ajustado formato internacional sugerido

const SERVICES: Service[] = [
  {
    id: "diseno-grafico",
    title: "Diseño Gráfico",
    description: "Identidad visual disruptiva y comunicación de alto impacto que define marcas.",
    icon: <Layers className="w-12 h-12 text-cyan-400" />,
    url: "https://drive.google.com/drive/folders/1yLnIZuOUncGMituKVjMny_3ZKiyCam4X?usp=sharing",
    driveLink: "https://drive.google.com/drive/folders/1yLnIZuOUncGMituKVjMny_3ZKiyCam4X?usp=sharing",
    subServices: [
      { 
        id: "dg-logos",
        title: "Logos", 
        description: "Creación de marca única y memorable que comunica la esencia de tu negocio.", 
        price: "Desde $50", 
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400",
        idealFor: ["emprendedores", "nuevas empresas", "marcas personales", "rebranding"],
        features: ["diseño vectorial original", "3 propuestas iniciales", "manual de uso básico", "formatos para web e imprenta"]
      },
      { 
        id: "dg-flyers",
        title: "Flyers", 
        description: "Diseño publicitario de alto impacto para eventos, promociones y lanzamientos.", 
        price: "Desde $30", 
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=400",
        idealFor: ["eventos", "discotecas", "promociones", "negocios locales"],
        features: ["composición visual atractiva", "jerarquía de información", "optimizado para redes sociales", "listo para impresión"]
      },
      { 
        id: "dg-anuarios",
        title: "Anuarios Escolares", 
        description: "Diseño editorial creativo para capturar los mejores recuerdos de la etapa escolar.", 
        price: "Desde $120", 
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
        idealFor: ["colegios", "promociones", "institutos", "universidades"],
        features: ["diagramación profesional", "retoque fotográfico", "diseño de portadas únicas", "listo para imprenta"]
      },
      { 
        id: "dg-broucher",
        title: "Broucher Corporativo", 
        description: "Presentación profesional de tu empresa, productos o servicios en formato editorial.", 
        price: "Desde $80", 
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400",
        idealFor: ["empresas B2B", "servicios profesionales", "presentaciones de ventas"],
        features: ["diseño de trípticos/dípticos", "infografías integradas", "estética corporativa", "comunicación clara"]
      },
      { 
        id: "dg-tarjetas",
        title: "Tarjetas y Etiquetas", 
        description: "Papelería corporativa y packaging que eleva la percepción de tu producto.", 
        price: "Desde $25", 
        image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400",
        idealFor: ["profesionales", "tiendas", "marcas de ropa", "productos artesanales"],
        features: ["diseño elegante", "preparación técnica para imprenta", "variedad de acabados sugeridos"]
      },
      { 
        id: "dg-mockups",
        title: "Mockups", 
        description: "Visualización realista de tu marca aplicada a productos, empaques o entornos.", 
        price: "Desde $40", 
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
        idealFor: ["presentaciones de marca", "tiendas online", "marketing de producto"],
        features: ["renders fotorealistas", "múltiples perspectivas", "alta resolución", "ideal para redes sociales"]
      },
      { 
        id: "dg-banners",
        title: "Banners", 
        description: "Formatos digitales y físicos de gran escala para máxima visibilidad.", 
        price: "Desde $40", 
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400",
        idealFor: ["sitios web", "ferias", "locales comerciales", "publicidad exterior"],
        features: ["diseño responsivo digital", "alta resolución para impresión", "llamados a la acción claros"]
      }
    ]
  },
  {
    id: "audiovisual",
    title: "Audiovisual y Video",
    description: "Producción cinemática para narrativas visuales que cautivan a tu audiencia.",
    icon: <Video className="w-12 h-12 text-cyan-400" />,
    url: "https://drive.google.com/drive/folders/1HpDu1Nu_FP8Lt-ASb6fN7L1CPZaC7mSx?usp=sharing",
    driveLink: "https://drive.google.com/drive/folders/1HpDu1Nu_FP8Lt-ASb6fN7L1CPZaC7mSx?usp=sharing",
    subServices: [
      { 
        id: "av-edicion",
        title: "Edición de Video", 
        description: "Post-producción profesional de alta gama para todo tipo de proyectos.", 
        price: "Desde $80", 
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400",
        idealFor: ["youtubers", "empresas", "creadores de contenido", "cineastas"],
        features: ["corrección de color (color grading)", "diseño sonoro", "cortes dinámicos", "efectos visuales básicos"]
      },
      { 
        id: "av-reels",
        title: "Reels TikTok", 
        description: "Contenido vertical optimizado para viralidad y engagement rápido.", 
        price: "Desde $40", 
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400",
        idealFor: ["influencers", "marcas", "emprendedores", "marketing digital"],
        features: ["edición rítmica", "subtítulos dinámicos", "transiciones creativas", "optimizado para algoritmos"]
      },
      { 
        id: "av-videoclips",
        title: "Videoclips", 
        description: "Producción musical visual completa que potencia la imagen del artista.", 
        price: "Desde $300", 
        image: "https://images.unsplash.com/photo-1492691523567-69b9a01a7051?auto=format&fit=crop&q=80&w=400",
        idealFor: ["músicos", "bandas", "artistas urbanos"],
        features: ["guion creativo", "dirección de fotografía", "post-producción avanzada", "estética cinematográfica"]
      },
      { 
        id: "av-spots",
        title: "Spots Visuales", 
        description: "Publicidad cinemática diseñada para TV y plataformas digitales.", 
        price: "Desde $150", 
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400",
        idealFor: ["marcas corporativas", "lanzamiento de productos", "campañas publicitarias"],
        features: ["storytelling de impacto", "calidad 4K", "locución integrada", "branding visual"]
      }
    ]
  },
  {
    id: "audio-spots",
    title: "Spots Publicitarios",
    description: "Estrategias de audio orientadas a posicionamiento de mercado.",
    icon: <Tv className="w-12 h-12 text-cyan-400" />,
    url: "https://drive.google.com/drive/folders/1vgyke9tKHhFlmMdQOpjL-BlphCVb66sI?usp=sharing",
    driveLink: "https://drive.google.com/drive/folders/1vgyke9tKHhFlmMdQOpjL-BlphCVb66sI?usp=sharing",
    subServices: [
      { 
        id: "sp-radiales",
        title: "Spots Radiales", 
        description: "Locución y producción de audio de alto impacto para radio y perifoneo.", 
        price: "Desde $60", 
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400",
        idealFor: ["campañas políticas", "ofertas comerciales", "eventos masivos"],
        features: ["locución profesional", "efectos de sonido", "mezcla publicitaria", "guion persuasivo"]
      },
      { 
        id: "sp-musicalizacion",
        title: "Musicalización", 
        description: "Composición sonora y diseño de audio para tus proyectos visuales.", 
        price: "Desde $100", 
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=400",
        idealFor: ["videos corporativos", "podcasts", "videojuegos", "cine"],
        features: ["composición original", "librería de sonidos premium", "mezcla y masterización", "sincronización perfecta"]
      }
    ]
  },
  {
    id: "animacion",
    title: "Animación & Motion",
    description: "Gráficos en movimiento y animación 2D/3D para dar vida a tus ideas.",
    icon: <Monitor className="w-12 h-12 text-cyan-400" />,
    url: "https://drive.google.com/drive/folders/11Xb0rcw4bXdB7INXBalw4INRstZ5XYTG?usp=sharing",
    driveLink: "https://drive.google.com/drive/folders/11Xb0rcw4bXdB7INXBalw4INRstZ5XYTG?usp=sharing",
    subServices: [
      { 
        id: "am-logos",
        title: "Logos Animados", 
        description: "Tu marca cobra vida con movimiento fluido y profesional.", 
        price: "Desde $70", 
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400",
        idealFor: ["intros de video", "sitios web", "presentaciones", "branding digital"],
        features: ["animación fluida", "formatos MP4/GIF/Lottie", "diseño de sonido opcional"]
      },
      { 
        id: "am-intros",
        title: "Intros", 
        description: "Comienzos épicos que refuerzan tu identidad en cada video.", 
        price: "Desde $50", 
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400",
        idealFor: ["canales de youtube", "webinars", "cursos online", "series web"],
        features: ["impacto visual inmediato", "branding dinámico", "estilo personalizado"]
      },
      { 
        id: "am-2d3d",
        title: "2D a 3D", 
        description: "Modelado y animación dimensional para explicar conceptos o productos.", 
        price: "Desde $200", 
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400",
        idealFor: ["presentación de productos", "videos explicativos", "arquitectura", "ingeniería"],
        features: ["modelado detallado", "animación de cámara", "renderizado de alta calidad", "storyboard previo"]
      }
    ]
  },
  {
    id: "diseno-digital",
    title: "Diseño Digital & Experiencias Web",
    description: "Desarrollo de soluciones digitales interactivas diseñadas para mostrar productos, servicios o eventos mediante enlaces profesionales compatibles con celular.",
    icon: <Globe className="w-12 h-12 text-cyan-400" />,
    url: "#",
    driveLink: "#",
    subServices: [
      {
        id: "catalogos",
        title: "Catálogos Virtuales",
        description: "Solución moderna para mostrar productos o servicios mediante un enlace profesional optimizado para celular, facilitando que los clientes visualicen información de forma clara y ordenada.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200",
        styleType: 'tech',
        themeColor: '#00d2ff',
        secondaryColor: '#3a7bd5',
        idealFor: ["tiendas", "clínicas", "empresas", "instituciones", "profesionales independientes", "ópticas", "ferreterías", "boutiques", "negocios locales"],
        features: ["galería visual de productos o servicios", "precios organizados", "descripciones claras", "diseño moderno adaptable a celular", "imagen profesional de marca", "estructura tipo mini página web", "optimizado para compartir en WhatsApp", "mejora la presentación del negocio", "fácil acceso mediante enlace"],
        examples: [
          { category: "MUEBLES", label: "Ver Ejemplo", url: "https://catalogo-digital-de-muebles.vercel.app/" },
          { category: "BOUTIQUE", label: "Ver Ejemplo", url: "#" },
          { category: "ÓPTICA", label: "Ver Ejemplo", url: "#" },
          { category: "FERRETERÍA", label: "Ver Ejemplo", url: "https://catalogo-digital-de-ferreteria.vercel.app/" }
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre un CATÁLOGO VIRTUAL para mi negocio"
      },
      {
        id: "invitaciones",
        title: "Invitaciones Digitales",
        description: "Invitaciones online modernas y elegantes que permiten compartir toda la información del evento mediante un enlace atractivo y fácil de usar.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
        styleType: 'elegant',
        themeColor: '#d4af37',
        secondaryColor: '#f5f5dc',
        idealFor: ["bodas", "15 años", "cumpleaños", "anniversarios", "eventos familiares", "eventos corporativos"],
        features: ["animaciones modernas", "cuenta regresiva del evento", "galería de fotos", "mapa de ubicación", "confirmación de asistencia", "link fácil de compartir", "adaptado a celular", "diseño elegante personalizado"],
        examples: [
          { category: "BODA", label: "Ver Ejemplo", url: "https://invitacion-de-boda-v3.vercel.app/" },
          { category: "15 AÑOS", label: "Ver Ejemplo", url: "https://15-a-os-laila-fernanda.vercel.app/" },
          { category: "1 AÑO", label: "Ver Ejemplo", url: "https://cumplea-os-1-a-o.vercel.app/" },
          { category: "50 AÑOS", label: "Ver Ejemplo", url: "https://50-a-os-n-stor-chipana-mendoza.vercel.app/" }
        ],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre una INVITACIÓN DIGITAL para mi evento"
      },
      {
        id: "landing-pages",
        title: "Landing Pages",
        description: "Páginas web modernas diseñadas para promocionar servicios o negocios de manera clara, profesional y optimizada para captar clientes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
        styleType: 'corporate',
        themeColor: '#0ea5e9',
        secondaryColor: '#1e3a8a',
        idealFor: ["negocios", "emprendedores", "marca personal", "promociones", "servicios profesionales", "campañas publicitarias"],
        features: ["estructura optimizada para conversión", "diseño moderno profesional", "adaptado a celular", "carga rápida", "botón directo a WhatsApp", "imagen confiable del negocio"],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre una LANDING PAGE para mi negocio"
      },
      {
        id: "menus",
        title: "Menús Digitales",
        description: "Menús virtuales diseñados para restaurantes que desean mostrar sus productos de forma moderna y accesible desde cualquier celular mediante enlace o código QR.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        styleType: 'food',
        themeColor: '#ef4444',
        secondaryColor: '#f97316',
        idealFor: ["restaurantes", "pollerías", "cafeterías", "cevicherías", "pizzerías", "negocios gastronómicos"],
        features: ["organización por categorías", "visual atractivo", "adaptado a celular", "fácil de compartir", "compatible con código QR", "mejora la imagen del restaurante"],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre un MENÚ DIGITAL para mi restaurante"
      },
      {
        id: "portfolios",
        title: "Portfolios Digitales",
        description: "Páginas diseñadas para mostrar trabajos o proyectos de manera visualmente atractiva y profesional.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        heroImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200",
        styleType: 'minimal',
        themeColor: '#ffffff',
        secondaryColor: '#64748b',
        idealFor: ["fotógrafos", "arquitectos", "diseñadores", "videógrafos", "ingenieros", "artistas", "freelancers"],
        features: ["galería visual moderna", "presentación profesional", "adaptado a celular", "link fácil de compartir", "mejora la imagen profesional"],
        whatsappNumber: "51932350348",
        whatsappMessage: "Hola, deseo información sobre un PORTFOLIO DIGITAL para mostrar mis trabajos"
      }
    ]
  }
];

// --- Utilities ---
const getWhatsAppLink = (service?: string, subservice?: string, customNumber?: string, customMessage?: string) => {
  const baseNumber = customNumber || "51932350348";
  let text = customMessage || "Hola V.A.C. Creative! ";
  
  if (!customMessage) {
    if (subservice) {
      text += `Me interesa obtener información sobre el servicio de: ${subservice}.`;
    } else if (service) {
      text += `Me interesa el servicio de: ${service}.`;
    } else {
      text += "Quisiera solicitar una cotización para un proyecto.";
    }
  }
  
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(text)}`;
};

// --- Subcomponents ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-cyan-500/20' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="V.A.C. Creative Logo" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-110" />
          <div className="font-display text-xl md:text-2xl font-black text-white glow-text tracking-tighter hidden sm:block uppercase">
            V.A.C. <span className="text-cyan-400">CREATIVE</span>
          </div>
        </a>
        
        <div className="hidden md:flex space-x-10 font-semibold tracking-widest uppercase text-xs">
          {menuItems.map(item => (
            <a key={item.name} href={item.href} className="text-white hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400/50 pb-1">
              {item.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white hover:text-cyan-400 focus:outline-none p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 z-[200] flex flex-col items-center justify-center space-y-10 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
        {menuItems.map(item => (
          <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="font-display text-3xl font-bold text-white uppercase tracking-widest hover:text-cyan-400 transition-colors">
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-[#050505] py-20 border-t border-white/5">
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-col items-center mb-10">
        <img src={LOGO_URL} alt="V.A.C. Creative Logo" className="h-24 w-auto object-contain mb-6 opacity-80" />
        <div className="font-display text-4xl font-black text-white glow-text tracking-tighter uppercase">
          V.A.C. <span className="text-cyan-400">CREATIVE</span>
        </div>
      </div>
      <div className="flex justify-center space-x-12 mb-12">
        <a href="https://www.facebook.com/VAC.Creativ" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-all hover:-translate-y-2"><Facebook size={28} /></a>
        <a href="https://tiktok.com/@vaccreative" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-all hover:-translate-y-2 font-black text-2xl">TT</a>
        <a href="https://youtube.com/@V.A.C.Creative" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-all hover:-translate-y-2"><Youtube size={28} /></a>
      </div>
      <div className="text-gray-700 uppercase tracking-[0.4em] text-[10px] font-bold">
        &copy; {new Date().getFullYear()} V.A.C. Creative Studio • Architecture of Digital Impulse
      </div>
    </div>
  </footer>
);

const SubServicePage: React.FC<{ service: Service; onBack: () => void; onNavigateSub: (subId: string) => void }> = ({ service, onBack, onNavigateSub }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <button onClick={onBack} className="group inline-flex items-center gap-3 text-cyan-400 mb-12 font-bold uppercase tracking-[0.2em] text-xs">
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Volver al Inicio
          </button>
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl md:text-8xl font-black text-white uppercase mb-6 leading-[0.9] tracking-tighter">
                {service.title.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-text">
                  {service.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">{service.description}</p>
            </div>
            <div className="hidden lg:flex p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl animate-pulse">
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 64 })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {service.subServices.map((sub) => (
              <div 
                key={sub.id || sub.title} 
                className={`glass-card group flex flex-col overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] ${service.id === 'diseno-digital' ? 'cursor-pointer' : ''}`}
                onClick={() => service.id === 'diseno-digital' && sub.id && onNavigateSub(sub.id)}
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  {sub.price && (
                    <div className="absolute bottom-4 left-6">
                      <span className="font-display text-cyan-400 font-bold uppercase tracking-widest text-sm bg-black/60 px-3 py-1 backdrop-blur-md">
                        {sub.price}
                      </span>
                    </div>
                  )}
                  {service.id === 'diseno-digital' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-400/20 backdrop-blur-sm">
                      <span className="bg-black text-cyan-400 px-6 py-2 font-bold uppercase tracking-widest text-xs border border-cyan-400">Ver Experiencia</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed font-light">{sub.description}</p>
                  
                  {service.id !== 'diseno-digital' && (
                    <>
                      {sub.idealFor && (
                        <div className="mb-6">
                          <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Users size={12} /> Ideal para:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {sub.idealFor.map((item, i) => (
                              <span key={i} className="text-[9px] text-gray-500 bg-white/5 px-2 py-1 rounded-sm uppercase tracking-wider">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {sub.features && (
                        <div className="mb-6">
                          <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Zap size={12} /> Incluye / Características:
                          </h4>
                          <ul className="space-y-2">
                            {sub.features.map((feature, i) => (
                              <li key={i} className="text-[10px] text-gray-400 flex items-start gap-2 uppercase tracking-wide">
                                <CheckCircle2 size={10} className="text-cyan-400 mt-0.5 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-auto grid grid-cols-2 gap-4">
                        {service.driveLink !== "#" && (
                          <a href={service.driveLink} target="_blank" rel="noopener noreferrer" className="neon-btn py-3 text-center font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                            Portfolio <ExternalLink size={12} />
                          </a>
                        )}
                        <a 
                          href={getWhatsAppLink(service.title, sub.title, sub.whatsappNumber, sub.whatsappMessage)} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`${service.driveLink === "#" ? 'col-span-2' : ''} bg-white/10 hover:bg-cyan-400 hover:text-black py-3 text-center font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2`}
                        >
                          Cotizar <MessageCircle size={12} />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DigitalSubServiceDetail: React.FC<{ subService: SubService; onBack: () => void }> = ({ subService, onBack }) => {
  const getStyleClasses = () => {
    switch (subService.styleType) {
      case 'tech': return 'from-blue-900/40 via-cyan-900/20 to-black';
      case 'elegant': return 'from-amber-900/20 via-stone-900/10 to-black';
      case 'corporate': return 'from-indigo-900/30 via-blue-900/10 to-black';
      case 'food': return 'from-red-900/30 via-orange-900/10 to-black';
      case 'minimal': return 'from-zinc-800/20 via-zinc-900/10 to-black';
      default: return 'from-cyan-900/40 via-black to-black';
    }
  };

  const getAccentColor = () => subService.themeColor || '#22d3ee';
  const isMinimal = subService.styleType === 'minimal';
  const isElegant = subService.styleType === 'elegant';
  const isFood = subService.styleType === 'food';

  return (
    <div className={`min-h-screen bg-black flex flex-col selection:bg-white selection:text-black ${isElegant ? 'font-serif' : ''}`}>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`relative pt-48 pb-32 overflow-hidden bg-gradient-to-b ${getStyleClasses()}`}>
          <div className="absolute inset-0 opacity-20">
            <img src={subService.heroImage} alt="" className="w-full h-full object-cover mix-blend-overlay" />
          </div>
          
          {/* Decorative background elements */}
          {subService.styleType === 'tech' && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>
          )}
          {isElegant && (
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")' }}></div>
          )}

          <div className="container mx-auto px-6 relative z-10">
            <button onClick={onBack} className="group inline-flex items-center gap-3 mb-12 font-bold uppercase tracking-[0.2em] text-xs" style={{ color: getAccentColor() }}>
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Volver a Servicios
            </button>
            
            <div className="max-w-4xl">
              <h1 className={`font-display text-5xl md:text-9xl font-black text-white uppercase mb-8 leading-[0.85] tracking-tighter ${isMinimal ? 'tracking-normal' : ''} ${isElegant ? 'italic' : ''}`}>
                {subService.title.split(' ')[0]} <br />
                <span className="glow-text" style={{ color: getAccentColor() }}>
                  {subService.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className={`text-xl md:text-3xl text-gray-300 leading-relaxed max-w-2xl border-l-4 pl-8 ${isMinimal ? 'font-light' : 'font-medium'}`} style={{ borderColor: getAccentColor() }}>
                {subService.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32 bg-black relative">
          {/* Decorative Elements based on style */}
          {subService.styleType === 'tech' && (
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #00d2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          )}
          {isFood && (
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>
          )}
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="order-2 lg:order-1 space-y-20">
                <div>
                  <h2 className="text-white font-display text-4xl font-bold uppercase tracking-widest mb-12 flex items-center gap-6">
                    <span className="w-16 h-1.5 block" style={{ backgroundColor: getAccentColor() }}></span>
                    Beneficios
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {subService.features?.map((feature, i) => (
                      <div key={i} className="flex items-center gap-6 p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all group">
                        <div className="p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform" style={{ color: getAccentColor() }}>
                          <CheckCircle2 size={28} />
                        </div>
                        <span className="text-gray-200 text-lg uppercase tracking-wider font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-white font-display text-4xl font-bold uppercase tracking-widest mb-12 flex items-center gap-6">
                    <span className="w-16 h-1.5 block" style={{ backgroundColor: getAccentColor() }}></span>
                    Ideal Para
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {subService.idealFor?.map((item, i) => (
                      <span key={i} className="px-8 py-4 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {subService.examples && (
                  <div>
                    <h2 className="text-white font-display text-4xl font-bold uppercase tracking-widest mb-12 flex items-center gap-6">
                      <span className="w-16 h-1.5 block" style={{ backgroundColor: getAccentColor() }}></span>
                      Portafolio
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {subService.examples.map((ex, i) => (
                        <a 
                          key={i} 
                          href={ex.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group relative overflow-hidden p-10 bg-white/[0.02] border border-white/10 hover:border-white/40 transition-all flex flex-col justify-between aspect-square"
                        >
                          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                            <ExternalLink size={24} style={{ color: getAccentColor() }} />
                          </div>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em] mb-2">{ex.category}</p>
                          <p className="text-white font-display text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">{ex.label}</p>
                          <div className="mt-8 w-12 h-1 bg-white/20 group-hover:w-full transition-all duration-500" style={{ backgroundColor: getAccentColor() }}></div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-12">
                  <a 
                    href={getWhatsAppLink(undefined, undefined, subService.whatsappNumber, subService.whatsappMessage)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative inline-flex items-center gap-6 px-16 py-8 font-black uppercase tracking-[0.4em] text-xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
                    style={{ backgroundColor: getAccentColor(), color: isMinimal ? '#000' : '#fff' }}
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Contactar Ahora <MessageCircle size={28} fill={isMinimal ? 'black' : 'white'} />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>

              <div className="lg:sticky lg:top-40">
                <div className="relative group">
                  <div className="absolute -inset-10 blur-[100px] opacity-20 transition-opacity group-hover:opacity-40 animate-pulse" style={{ backgroundColor: getAccentColor() }}></div>
                  <div className={`relative aspect-[3/4] overflow-hidden border border-white/10 bg-white/5 ${isElegant ? 'rounded-[4rem]' : 'rounded-3xl'}`}>
                    <img src={subService.image} alt={subService.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12">
                      <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 mb-4">Visual Experience</p>
                      <h3 className="text-white font-display text-4xl font-black uppercase leading-none tracking-tighter">{subService.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const HomePage: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-600/10 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px] animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="font-display text-sm md:text-base font-bold text-cyan-400 mb-6 tracking-[0.5em] uppercase opacity-80">
              Elite Visual Production House
            </h2>
            <h1 className="font-display text-5xl md:text-9xl font-black text-white mb-10 leading-[0.85] uppercase tracking-tighter">
              Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 glow-text">
                Architecture
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto mb-14 font-light leading-relaxed">
              Elevamos marcas a través de diseño disruptivo y narrativa audiovisual de alto impacto. El futuro es visual, nosotros lo diseñamos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#servicios" className="neon-btn border-2 border-cyan-400 text-cyan-400 px-12 py-5 font-bold text-lg uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all min-w-[240px]">
                Explorar Servicios
              </a>
              <a href={getWhatsAppLink()} target="_blank" className="border-2 border-white/10 text-white px-12 py-5 font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all min-w-[240px]">
                Contacto Directo
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#servicios" className="text-cyan-400/50 hover:text-cyan-400 transition-colors">
              <ChevronDown size={40} strokeWidth={1} />
            </a>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicios" className="py-32 bg-[#080808] relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tighter">
                Ecosistema Creativo
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {SERVICES.map(service => (
                <div 
                  key={service.id} 
                  className="glass-card p-10 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  {service.id === 'diseno-digital' && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-cyan-400 text-black text-[8px] font-black px-2 py-0.5 uppercase tracking-tighter">NUEVO</span>
                    </div>
                  )}
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} className="text-cyan-400" />
                  </div>
                  <div className="mb-10 p-6 rounded-full bg-cyan-400/5 group-hover:bg-cyan-400/10 group-hover:scale-110 transition-all duration-700">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-6 text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="flex flex-col gap-4 w-full">
                    <button 
                      onClick={() => onNavigate(service.id)}
                      className="bg-white/5 hover:bg-white/10 text-white py-3 px-6 font-bold uppercase tracking-widest text-[10px] transition-all"
                    >
                      Ver Detalles
                    </button>
                    <a 
                      href={service.driveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="neon-btn border border-cyan-400/50 text-cyan-400 py-3 px-6 font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2"
                    >
                      Portfolio <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS SECTION */}
        <section id="nosotros" className="py-32 bg-black relative">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" alt="Creative Studio" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-[80px] -z-10"></div>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold uppercase tracking-[0.4em] mb-6 text-sm">Nuestro ADN</h4>
              <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase mb-10 leading-tight tracking-tighter">
                Elevamos la Estética <br /> del Éxito Comercial
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10 font-light">
                Somos una boutique creativa de alto rendimiento. Nuestra misión es fusionar la vanguardia tecnológica con la maestría visual para crear marcas que no solo se vean bien, sino que dominen su mercado.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="border-l-2 border-cyan-400 pl-6">
                  <p className="text-5xl font-black text-white font-display mb-2">100%</p>
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Compromiso Total</p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-6">
                  <p className="text-5xl font-black text-white font-display mb-2">PRO</p>
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Nivel Cinematográfico</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contacto" className="py-32 bg-[#050505] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tighter">¿Listo para Impulsar?</h2>
              <div className="w-32 h-1 bg-cyan-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-12 text-center group">
                <Phone className="mx-auto mb-8 text-cyan-400 group-hover:scale-110 transition-transform" size={48} strokeWidth={1} />
                <h3 className="text-white font-bold mb-4 uppercase tracking-widest">Línea Directa</h3>
                <div className="space-y-2">
                  <a href="tel:932350348" className="text-gray-400 block hover:text-cyan-400 transition-colors text-xl">932 350 348</a>
                  <a href="tel:917420348" className="text-gray-400 block hover:text-cyan-400 transition-colors text-xl">917 420 348</a>
                </div>
              </div>
              
              <div className="glass-card p-12 text-center group">
                <Mail className="mx-auto mb-8 text-cyan-400 group-hover:scale-110 transition-transform" size={48} strokeWidth={1} />
                <h3 className="text-white font-bold mb-4 uppercase tracking-widest">Email Corporativo</h3>
                <a href="mailto:vac7creative@gmail.com" className="text-gray-400 block hover:text-cyan-400 transition-colors text-xl break-all">vac7creative@gmail.com</a>
              </div>
              
              <div className="glass-card p-12 text-center flex flex-col items-center group">
                <MessageCircle className="mb-8 text-cyan-400 group-hover:scale-110 transition-transform" size={48} strokeWidth={1} />
                <h3 className="text-white font-bold mb-8 uppercase tracking-widest">Atención Inmediata</h3>
                <a href={getWhatsAppLink()} target="_blank" className="bg-[#25D366] text-white px-10 py-5 rounded-none font-bold hover:scale-105 transition-all shadow-[0_10px_30px_rgba(37,211,102,0.2)] flex items-center gap-3">
                  <MessageCircle size={20} fill="white" /> Iniciar Chat
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// --- App Root Controller ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Handle navigation for digital sub-services
  const [serviceId, subId] = currentPage.split('/');
  const currentService = SERVICES.find(s => s.id === serviceId);
  const currentSubService = currentService?.subServices.find(sub => sub.id === subId);

  if (currentSubService) {
    return <DigitalSubServiceDetail subService={currentSubService} onBack={() => setCurrentPage(serviceId)} />;
  }

  if (currentService) {
    return <SubServicePage service={currentService} onBack={() => setCurrentPage('home')} onNavigateSub={(id) => setCurrentPage(`${serviceId}/${id}`)} />;
  }

  return <HomePage onNavigate={(id) => setCurrentPage(id)} />;
};

export default App;