import { BlogPost } from '../models/blog-post';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'a-bullet-is-rapid-a-leopard-is-agile',
    route: '/blog/a-bullet-is-rapid-a-leopard-is-agile',

    title: 'A Bullet Is Rapid. A Leopard Is Agile.',
    seoTitle:
      'A Bullet Is Rapid. A Leopard Is Agile. | Agile Scrum | Matthew Coatney',

    description:
      'Agile development is not simply rapid development. It is the ability to maneuver quickly in response to change and early feedback.',

    excerpt:
      'Speed matters, but rapid development is not necessarily Agile development. Agility is the ability to maneuver when the target moves.',

    type: 'Engineering Note',
    category: 'Reducing Complexity',

    topics: [
      'Agile',
      'Scrum',
      'Reducing Complexity',
      'Software Development',
      'Lean'
    ],

    published: '2026-09-15',

    featured: true
  },

  {
    slug: 'monorepos-nx-workspaces',
    route: '/blog/monorepos-nx-workspaces',

    title: 'Introduction to Monorepos with Nx Workspaces',
    seoTitle:
      'Monorepos with Nx Workspaces: Angular, NestJS & Developer Experience | Matthew Coatney',

    description:
      'A practical engineering guide to Nx monorepos, Angular and NestJS workspaces, shared libraries, atomic changes, generators, Nx Console, and developer experience.',

    excerpt:
      'How Nx Workspaces can organize interconnected Angular applications, NestJS services, shared libraries, and tooling without letting a growing software system collapse under its own complexity.',

    type: 'DevTalk',
    category: 'Software Architecture',

    topics: [
      'Nx',
      'Monorepos',
      'Angular',
      'NestJS',
      'TypeScript',
      'Software Architecture',
      'Developer Experience'
    ],

    presentation: {
      title: 'Introduction to Monorepos with Nx Workspaces',
      date: 'July 6, 2022',
      youtubeId: 'FyO2GoONAoI',
      youtubeUrl: 'https://youtu.be/FyO2GoONAoI'
    },

    featured: true
  },

  {
    slug: 'building-an-ai-assisted-ebay-lister',
    route: '/blog/building-an-ai-assisted-ebay-lister',

    title: 'Building an AI-Assisted eBay Lister',
    seoTitle:
      'Building an AI-Assisted eBay Lister | AWS, AI & Marketplace Automation | Matthew Coatney',

    description:
      'How I designed an AI-assisted resale workflow that transforms product photographs into structured inventory, researched pricing, marketplace data, and eBay-ready exports.',

    excerpt:
      'How a photo-first reseller workflow becomes structured inventory, researched pricing, polished sales copy, and marketplace-ready data.',

    type: 'Case Study',
    category: 'AI Systems',

    topics: [
      'AI',
      'AWS',
      'Python',
      'FastAPI',
      'DynamoDB',
      'eBay',
      'Automation'
    ],

    featured: true
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  const current = getBlogPost(currentSlug);

  if (!current) {
    return [];
  }

  return BLOG_POSTS
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const sharedTopics = post.topics.filter(topic =>
        current.topics.includes(topic)
      ).length;

      const sameCategory = post.category === current.category ? 2 : 0;

      return {
        post,
        score: sharedTopics + sameCategory
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(result => result.post);
}
