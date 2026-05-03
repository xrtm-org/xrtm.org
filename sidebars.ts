import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Workflows',
      collapsed: false,
      items: [
        'workflows/researcher-model-eval',
        'workflows/operator-runbook',
        'workflows/team-workflows',
        'workflows/developer-integrator',
      ],
    },
    'examples',
    {
      type: 'category',
      label: 'Packages & architecture',
      collapsed: false,
      items: [
        'framework/intro',
        'framework/forecast',
        'framework/eval',
        'framework/data',
        'framework/train',
      ],
    },
    {
      type: 'category',
      label: 'Standard',
      collapsed: true,
      items: [
        'standard/intro',
        'standard/forecast-object',
        'standard/governance',
      ],
    },
    {
      type: 'category',
      label: 'Philosophy',
      collapsed: true,
      items: ['philosophy/manifesto'],
    },
    'next-release',
    'roadmap',
    'contributing',
  ],
};

export default sidebars;
