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
    id: 'raspberry-pi-menu',
    number: '02',
    eyebrow: 'IoT · Cloud · Digital Signage',
    badge: 'Production system',
    previewImage: '/assets/menu-preview.png',
    previewAlt: 'Raspberry Pi powered digital menu system',
    title: 'Raspberry Pi Digital Menu System',
    thesis: 'Change the menu once. Every display updates without touching the displays.',
    description: 'A cloud-managed digital menu platform built to replace the friction of manually maintaining restaurant signage. Three Raspberry Pi-powered displays present the customer-facing menus while an Angular and Ionic management application gives staff a single place to update content. AWS services provide authentication, storage, data synchronization, and distribution so menu changes can propagate across the system without editing individual screens.',
    tech: [
      'Angular',
      'Ionic',
      'Raspberry Pi',
      'AWS Amplify',
      'AppSync',
      'GraphQL',
      'DynamoDB',
      'Cognito',
      'S3',
      'CloudFront',
      'piSignage'
    ],
    link: 'https://main.d1sj73oj2s6s26.amplifyapp.com',
    linkLabel: 'LIVE DEMO',
    gradient: 'radial-gradient(circle at 72% 20%, rgba(121,242,208,.30), transparent 34%), radial-gradient(circle at 20% 72%, rgba(101,216,255,.22), transparent 38%), linear-gradient(145deg, #10272a, #101d2d 60%, #081019)'
  }
];
