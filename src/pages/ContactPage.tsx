import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { CONTACT_DATA } from '../data/contact';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { GERENTE_CREATIVO_QUOTE_BASE_URL } from '../utils/quoteLinks';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16">
      <Container size="wide">
        <Breadcrumbs items={[{ label: 'Contacto' }]} className="mb-8" />

        <SectionHeader
          kicker="Canales de Comunicación"
          title="Conversemos sobre tu proyecto"
          description="Estamos a tu disposición para asesorarte, estructurar un presupuesto a medida o coordinar una reunión de trabajo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Main Direct Channels */}
          <div className="lg:col-span-7 space-y-6">
            {/* WhatsApp Featured Block */}
            <div className="p-8 rounded-2xl border border-[#C5A059]/40 bg-[#121318] text-white shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#ECC880]">
                <span className="w-2 h-2 rounded-full bg-[#ECC880] animate-pulse"></span>
                <span>Canal Preferente</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white">
                Atención Inmediata por WhatsApp
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Comunícate directamente con nuestro equipo de atención y producción para respuestas ágiles, recepción de requerimientos y cotizaciones en el día.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Chatear al +51 932 350 348</span>
                </Button>

                <a
                  href={GERENTE_CREATIVO_QUOTE_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-[0.15em] transition-colors"
                >
                  <span>Cotizar con Gerente Creativo</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Telephone & Email Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/10 text-[#C5A059] dark:text-[#ECC880] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <h3 className="font-sans text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                  Líneas Telefónicas
                </h3>
                <p className="text-xs text-neutral-500">
                  Llamadas directas para consultas comerciales y urgentes.
                </p>
                <div className="pt-2 space-y-1.5 font-mono text-sm">
                  {CONTACT_DATA.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.value}`}
                      className="block text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059] dark:hover:text-[#ECC880] transition-colors font-medium"
                    >
                      {phone.display} <span className="text-xs text-neutral-400 font-sans">({phone.label})</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#C5A059]/10 text-[#C5A059] dark:text-[#ECC880] flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <h3 className="font-sans text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                  Email Corporativo
                </h3>
                <p className="text-xs text-neutral-500">
                  Para envío de briefs formales, propuestas y documentación.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="block font-mono text-sm text-neutral-800 dark:text-neutral-200 hover:text-[#C5A059] dark:hover:text-[#ECC880] transition-colors font-medium break-all"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Working Hours */}
            <div className="p-6 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-neutral-50/70 dark:bg-[#12141C] space-y-4">
              <div className="flex items-center gap-3 text-neutral-900 dark:text-white">
                <Clock size={18} className="text-[#C5A059] dark:text-[#ECC880]" />
                <h3 className="font-sans text-lg font-bold tracking-tight">Horarios de Trabajo</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {CONTACT_DATA.workingHours}
              </p>
              <div className="text-xs text-neutral-500 pt-1 border-t border-neutral-200 dark:border-white/5">
                Proyectos audiovisuales y coberturas bajo cronograma coordinado previamente.
              </div>
            </div>

            {/* Social Networks List */}
            <div className="p-6 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] space-y-4">
              <h3 className="font-sans text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                Redes Sociales & Canales
              </h3>
              <p className="text-xs text-neutral-500 font-normal">
                Publicamos lanzamientos, piezas detrás de escena y adelantos de nuestros últimos trabajos.
              </p>
              <div className="space-y-2 pt-1">
                {CONTACT_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 hover:border-[#C5A059]/40 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all text-sm group"
                  >
                    <span className="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-[#C5A059] dark:group-hover:text-[#ECC880]">
                      {social.name}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                      <span>{social.handle}</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
