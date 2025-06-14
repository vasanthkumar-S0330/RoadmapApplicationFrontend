export interface Week {
  week: number;
  title: string;
  description: string;
  resources: Resource[];
  projects: Project[];
  completed?: boolean;
}

export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'documentation' | 'website' | 'tutorial';
  duration?: string;
}

export interface Project {
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface CapstoneProject {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  estimatedTime: string;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  difficulty: 'Beginner Friendly' | 'Intermediate' | 'Advanced';
  weeks: Week[];
  capstoneProject: CapstoneProject;
}