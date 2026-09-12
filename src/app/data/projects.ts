import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    id: 'ebay-lister',
    number: '01',
    eyebrow: 'AI · Commerce · Automation',
    badge: 'Flagship project',
    previewImage: '/assets/ebay-listing-preview.png',
    previewAlt: 'Sigil Books generated listing for Andersen’s Fairy Tales',
    title: 'AI-assisted eBay Lister',
    thesis: 'Turn a photograph into a confident listing — without turning the seller into a data-entry clerk.',
    description: 'A product-first listing workflow built around the real bottleneck in resale: the cognitive cost of identifying an item, researching it, estimating market value, and translating that knowledge into structured marketplace data. The system uses AI to collapse those steps into a fast, guided workflow so the seller can spend more time sourcing, evaluating, and shipping inventory — the work that actually creates value.',
    tech: ['Python', 'FastAPI', 'AWS', 'AI identification', 'Market pricing', 'eBay API', 'Async workflows'],
    link: 'https://youtu.be/s7hCm8nxoRs',
    linkLabel: 'Watch project demo',
    gradient: 'radial-gradient(circle at 24% 22%, rgba(101,216,255,.33), transparent 34%), radial-gradient(circle at 78% 36%, rgba(159,146,255,.28), transparent 38%), linear-gradient(145deg, #102139, #11152a 58%, #08101c)'
  },
  {
    id: 'seawich-digital-menu',
    number: '02',
    eyebrow: 'AWS · IoT · Digital Signage',
    badge: 'Full-stack system',
    previewImage: '/assets/menu-preview.png',
    previewAlt: 'The Seawich cloud-connected digital menu system',
    title: 'The Seawich — Digital Menu System',
    thesis: 'Change the price once. Every display gets the update without touching the displays.',
    description: 'A cloud-connected digital signage and remote price-management system designed for Raspberry Pi displays. Independent Angular and Ionic menu screens provide the customer-facing signage while an authenticated management interface lets pricing be changed remotely. AWS AppSync, GraphQL, DynamoDB, Cognito, and Amplify connect the displays, data, authentication, and deployment into one working full-stack system.',
    tech: [
      'Angular',
      'Ionic',
      'TypeScript',
      'Raspberry Pi',
      'AWS Amplify',
      'AppSync',
      'GraphQL',
      'DynamoDB',
      'Cognito'
    ],
    link: 'https://main.d26v2pfw328oke.amplifyapp.com/menu/left',
    linkLabel: 'LAUNCH LIVE DEMO',
    secondaryLink: 'https://main.d26v2pfw328oke.amplifyapp.com/auth/login',
    secondaryLinkLabel: 'OPEN PRICE CHANGER',
    demoUsername: 'demo@seawich.app',
    demoPassword: 'SeawichDemo2026!',
    gradient: 'radial-gradient(circle at 72% 20%, rgba(121,242,208,.30), transparent 34%), radial-gradient(circle at 20% 72%, rgba(101,216,255,.22), transparent 38%), linear-gradient(145deg, #10272a, #101d2d 60%, #081019)'
  }
];
