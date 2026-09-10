import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    id: 'ebay-lister',
    number: '01',
    eyebrow: 'AI · Commerce · Automation',
    badge: 'Flagship project',
    title: 'AI-assisted eBay Lister',
    thesis: 'Turn a photograph into a confident listing — without turning the seller into a data-entry clerk.',
    description: 'A product-first listing workflow built around the real bottleneck in resale: the cognitive cost of identifying an item, researching it, estimating market value, and translating that knowledge into structured marketplace data. The system uses AI to collapse those steps into a fast, guided workflow so the seller can spend more time sourcing, evaluating, and shipping inventory — the work that actually creates value.',
    tech: ['Python', 'FastAPI', 'AWS', 'AI identification', 'Market pricing', 'eBay API', 'Async workflows'],
    link: 'https://youtu.be/s7hCm8nxoRs',
    linkLabel: 'Watch project demo',
    gradient: 'radial-gradient(circle at 24% 22%, rgba(101,216,255,.33), transparent 34%), radial-gradient(circle at 78% 36%, rgba(159,146,255,.28), transparent 38%), linear-gradient(145deg, #102139, #11152a 58%, #08101c)'
  },
  {
    id: 'project-two',
    number: '02',
    eyebrow: 'Project · Coming next',
    badge: 'In development',
    title: 'Project Two',
    thesis: 'A second case study designed to show not only what was built, but the judgment behind it.',
    description: 'This space is intentionally ready for the next project. The case-study format communicates the problem, architectural decision-making, user experience, and result so a hiring manager or client can understand engineering depth without decoding a wall of implementation detail.',
    tech: ['Problem framing', 'System design', 'UX decisions', 'Architecture', 'Implementation', 'Outcome'],
    link: '#contact',
    linkLabel: 'Project details coming soon',
    gradient: 'radial-gradient(circle at 70% 18%, rgba(121,242,208,.28), transparent 32%), radial-gradient(circle at 24% 70%, rgba(244,200,138,.16), transparent 38%), linear-gradient(145deg, #14252a, #151c2e 62%, #0a1019)'
  }
];
