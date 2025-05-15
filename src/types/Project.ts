import { IconType } from 'react-icons';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  result: string;
  techStack: Array<{
    icon: IconType;
    name: string;
  }>;
  complexity: string;
  demoUrl: string;
  repoUrl: string;
} 