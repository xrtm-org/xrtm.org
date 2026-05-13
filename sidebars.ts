import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Start',
      collapsed: false,
      items: ['getting-started', 'workflows/researcher-model-eval'],
    },
    {
      type: 'category',
      label: 'More',
      collapsed: true,
      items: ['workflows/operator-runbook', 'examples', 'workflows/developer-integrator', 'framework/intro', 'standard/intro'],
    },
  ],
};

export default sidebars;
