import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Sidebar 1: Philosophy (scoped)
  philosophySidebar: [
    'philosophy/manifesto',
  ],

  // Sidebar 2: The Standard (scoped)
  standardSidebar: [
    'standard/intro',
    'standard/forecast-object',
  ],

  // Sidebar 3: Framework (scoped)
  frameworkSidebar: [
    'framework/intro',
    {
      type: 'category',
      label: 'Core Components',
      collapsed: false,
      items: [
        'framework/data',
        'framework/eval',
        'framework/forecast',
        'framework/train',
      ],
    },
    'framework/roadmap',
  ],
};

export default sidebars;
