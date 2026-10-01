import React from 'react';
import { ProjectItem } from '../data/portfolio';
import { PortfolioCard } from './portfolio/PortfolioCard';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return <PortfolioCard project={project} className={className} />;
};
