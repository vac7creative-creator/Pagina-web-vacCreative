export interface ContactInfo {
  studioName: string;
  tagline: string;
  description: string;
  logoUrl: string;
  phones: {
    display: string;
    value: string;
    label?: string;
  }[];
  email: string;
  whatsappNumber: string;
  socials: {
    name: string;
    url: string;
    handle: string;
  }[];
  workingHours: string;
}

export const CONTACT_DATA: ContactInfo = {
  studioName: "V.A.C. Creative",
  tagline: "Diseño, audiovisual y experiencias digitales",
  description:
    "Estudio creativo multidisciplinario. Diseñamos identidades sólidas, piezas audiovisuales con narrativa cinematográfica y soluciones web interactivas para potenciar proyectos contemporáneos.",
  logoUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1768607132/VAC_Creatuve_LOGO_fzyvbn.png",
  phones: [
    { display: "932 350 348", value: "+51932350348", label: "Línea principal" },
    { display: "917 420 348", value: "+51917420348", label: "Línea directa" },
  ],
  email: "vac7creative@gmail.com",
  whatsappNumber: "51932350348",
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/VAC.Creativ",
      handle: "@VAC.Creativ",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@vaccreative",
      handle: "@vaccreative",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@V.A.C.Creative",
      handle: "@V.A.C.Creative",
    },
  ],
  workingHours: "Lunes a Sábado · 09:00 - 19:00",
};
