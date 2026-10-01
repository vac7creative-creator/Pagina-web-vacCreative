import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { CONTACT_DATA } from '../data/contact';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

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
            <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-50/30 dark:bg-emerald-950/10 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Canal Preferente</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                Atención Inmediata por WhatsApp
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Comunícate directamente con nuestro equipo de atención y producción para respuestas ágiles, recepción de requerimientos y cotizaciones en el día.
              </p>
              <div className="pt-2">
                <Button
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Chatear ahora al +51 932 350 348</span>
                </Button>
              </div>
            </div>

            {/* Telephone & Email Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
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
                      className="block text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium"
                    >
                      {phone.display} <span className="text-xs text-neutral-400 font-sans">({phone.label})</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-[#12141C] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                  Email Corporativo
                </h3>
                <p className="text-xs text-neutral-500">
                  Para envío de briefs formales, propuestas y documentación.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="block font-mono text-sm text-neutral-800 dark:text-neutral-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium break-all"
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
                <Clock size={18} className="text-sky-600 dark:text-sky-400" />
                <h3 className="font-serif text-lg font-bold">Horarios de Trabajo</h3>
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
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
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
                    className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 hover:border-sky-500/40 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all text-sm group"
                  >
                    <span className="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
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
