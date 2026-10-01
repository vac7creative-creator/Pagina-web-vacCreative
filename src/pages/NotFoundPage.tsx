import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Link } from '../utils/router';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-32 min-h-[70vh] flex items-center">
      <Container size="narrow" className="text-center space-y-6">
        <span className="font-mono text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400 block">
          Error 404 · Página no encontrada
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
          La página solicitada no está disponible.
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto font-normal">
          Es posible que la dirección haya cambiado o que el enlace sea antiguo. Puedes regresar a la página de inicio o consultar nuestro catálogo de servicios.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="md" className="gap-2">
            <ArrowLeft size={16} />
            <span>Volver al Inicio</span>
          </Button>
          <Button href="/servicios" variant="outline" size="md">
            Ver Servicios
          </Button>
        </div>
      </Container>
    </div>
  );
};
