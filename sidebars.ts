import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Released user path',
      collapsed: false,
      items: [
        'getting-started',
        'workflows/researcher-model-eval',
        'workflows/operator-runbook',
        'workflows/team-workflows',
        'examples',
      ],
    },
    {
      type: 'category',
      label: 'Developer & package reference',
      collapsed: false,
      items: [
        'workflows/developer-integrator',
        'framework/intro',
        'framework/forecast',
        'framework/eval',
        'framework/data',
        'framework/train',
      ],
    },
    {
      type: 'category',
      label: 'Governance & project policy',
      collapsed: true,
      items: [
        'standard/intro',
        'standard/forecast-object',
        'standard/governance',
        'contributing',
      ],
    },
    {
      type: 'category',
      label: 'Next release & roadmap',
      collapsed: true,
      items: ['next-release', 'roadmap'],
    },
    {
      type: 'category',
      label: 'Project context',
      collapsed: true,
      items: ['philosophy/manifesto'],
    },
  ],
};

export default sidebars;
