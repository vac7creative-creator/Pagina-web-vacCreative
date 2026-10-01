import { CONTACT_DATA } from '../data/contact';

export function getWhatsAppUrl(params?: {
  customNumber?: string;
  customMessage?: string;
  categoryTitle?: string;
  subServiceTitle?: string;
}): string {
  const number = params?.customNumber || CONTACT_DATA.whatsappNumber;
  let text = params?.customMessage;

  if (!text) {
    if (params?.subServiceTitle && params?.categoryTitle) {
      text = `Hola V.A.C. Creative, me interesa recibir información y cotización sobre el servicio de ${params.subServiceTitle} (${params.categoryTitle}).`;
    } else if (params?.subServiceTitle) {
      text = `Hola V.A.C. Creative, me interesa obtener información sobre el servicio de ${params.subServiceTitle}.`;
    } else if (params?.categoryTitle) {
      text = `Hola V.A.C. Creative, me interesa cotizar un proyecto en el área de ${params.categoryTitle}.`;
    } else {
      text = `Hola V.A.C. Creative, quisiera solicitar información y cotización para un nuevo proyecto.`;
    }
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
