import React from 'react';
import { ProjectItem } from '../../data/portfolio';
import { LivePreviewCard } from './LivePreviewCard';
import { ImagePortfolioCard } from './ImagePortfolioCard';

interface PortfolioCardProps {
  project: ProjectItem;
  className?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, className = '' }) => {
  if (project.previewType === 'live') {
    return <LivePreviewCard project={project} className={className} />;
  }

  return <ImagePortfolioCard project={project} className={className} />;
};
