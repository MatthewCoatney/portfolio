export interface Project {
  id: string;
  number: string;
  eyebrow: string;
  badge: string;
  title: string;
  thesis: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  gradient: string;
  previewImage?: string;
  previewAlt?: string;
}

export interface ProjectLoopItem extends Project {
  copy: number;
}
