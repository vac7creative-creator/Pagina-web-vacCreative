import React from 'react';
import { RouterProvider, useRouter } from './utils/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceCategoryPage } from './pages/ServiceCategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getServiceCategory, getSubService } from './data/services';

const AppContent: React.FC = () => {
  const { pathname } = useRouter();

  // Normalize path by stripping trailing slashes (except root '/')
  const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  const renderCurrentPage = () => {
    // 1. Home
    if (cleanPath === '' || cleanPath === '/') {
      return <HomePage />;
    }

    // 2. All Services
    if (cleanPath === '/servicios') {
      return <ServicesPage />;
    }

    // 3. Category or Subservice routes
    if (cleanPath.startsWith('/servicios/')) {
      const parts = cleanPath.split('/').filter(Boolean); // ['servicios', 'diseno-grafico', 'logos']
      const categorySlug = parts[1];
      const subSlug = parts[2];

      if (categorySlug && !subSlug) {
        const category = getServiceCategory(categorySlug);
        if (category) {
          return <ServiceCategoryPage category={category} />;
        }
      }

      if (categorySlug && subSlug) {
        const result = getSubService(categorySlug, subSlug);
        if (result) {
          return <ServiceDetailPage category={result.category} subService={result.subService} />;
        }
      }

      return <NotFoundPage />;
    }

    // 4. Projects Page
    if (cleanPath === '/proyectos') {
      return <ProjectsPage />;
    }

    // 5. About Page
    if (cleanPath === '/nosotros') {
      return <AboutPage />;
    }

    // 6. Contact Page
    if (cleanPath === '/contacto') {
      return <ContactPage />;
    }

    // Default 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas-light text-ink-light dark:bg-canvas-dark dark:text-ink-dark transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;
