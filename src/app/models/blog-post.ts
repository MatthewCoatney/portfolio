export interface BlogPost {
  slug: string;
  route: string;

  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;

  type: 'Case Study' | 'DevTalk' | 'Engineering Note';
  category: string;
  topics: string[];

  published?: string;
  updated?: string;

  presentation?: {
    title: string;
    date: string;
    youtubeId: string;
    youtubeUrl: string;
  };

  featured: boolean;
}
