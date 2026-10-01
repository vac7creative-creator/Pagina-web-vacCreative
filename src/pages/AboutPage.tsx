import React from 'react';
import { Container } from '../components/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { CheckCircle2, Compass, Layers, Sparkles, Video, Globe } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20">
      <Container size="wide">
        <Breadcrumbs items={[{ label: 'Nosotros' }]} className="mb-8" />

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            <Compass size={14} />
            <span>Sobre el Estudio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-6 text-balance">
            Elevamos la presencia visual de marcas a través del diseño y la narrativa.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            V.A.C. Creative es un estudio creativo multidisciplinario fundado con la premisa de que toda idea auténtica merece ser comunicada con precisión técnica y rigor estético.
          </p>
        </div>

        {/* Visual Asset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-16 border-b border-neutral-200 dark:border-white/10">
          <div className="md:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-white/10 shadow-lg">
              <img
                src="/images/editorial_studio_hero_1790817276666.jpg"
                alt="V.A.C. Creative Studio Interior"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Criterio editorial aplicado a cada formato.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              No nos limitamos a un único medio: nos movemos con naturalidad entre la diagramación gráfica impresa, la postproducción de video cinematográfico, la animación publicitaria y el desarrollo de experiencias web interactivas para celulares.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Entendemos que el público contemporáneo valora la coherencia y la sutileza. Por eso, despojamos lo superfluo para que el mensaje central brille con fuerza.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="pt-8">
          <SectionHeader
            kicker="Principios de Trabajo"
            title="Cómo concebimos cada encargo"
            description="Nuestro proceso descansa sobre cuatro fundamentos que garantizan coherencia y calidad."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#12141C]">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-2">
                01. Claridad Conceptual
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Antes de trazar una línea o encender una cámara, identificamos el propósito, la audiencia y el tono comunicativo clave.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#12141C]">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Sparkles size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-2">
                02. Rigor Estético
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Cuidamos las proporciones tipográficas, la paleta cromática y el equilibrio espacial para lograr acabados de nivel internacional.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#12141C]">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Video size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-2">
                03. Calidad de Ejecución
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Utilizamos equipos de grabación profesionales, flujos de trabajo en 4K y herramientas de postproducción de vanguardia.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#12141C]">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Globe size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white mb-2">
                04. Usabilidad Digital
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                Nuestras experiencias web y catálogos virtuales cargan de inmediato y están 100% pensados para la navegación móvil cotidiana.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-neutral-900 text-white p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Construyamos juntos algo memorable
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8 font-normal">
            Estamos listos para escuchar tu visión y poner toda nuestra capacidad creativa a tu servicio.
          </p>
          <Button
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            Iniciar Conversación
          </Button>
        </div>
      </Container>
    </div>
  );
};
