import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'xrtm',
  tagline: 'AI for event forecasting',
  favicon: 'img/favicon.ico',

  url: 'https://xrtm.org',
  baseUrl: '/',
  organizationName: 'xrtm-org',
  projectName: 'xrtm.org',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/xrtm-org/xrtm.org/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'xrtm Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Released path',
        },
        {
          type: 'doc',
          docId: 'next-release',
          position: 'left',
          label: 'Next release',
        },
        {
          type: 'doc',
          docId: 'workflows/developer-integrator',
          position: 'left',
          label: 'Developer reference',
        },
        {
          type: 'doc',
          docId: 'standard/governance',
          position: 'left',
          label: 'Governance',
        },
        {
          href: 'https://github.com/xrtm-org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Released docs',
          items: [
            { label: 'Docs overview', to: '/docs' },
            { label: 'Start Here', to: '/docs/getting-started' },
            { label: 'Workflows', to: '/docs/workflows/researcher-model-eval' },
            { label: 'Examples', to: '/docs/examples' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Developer reference', to: '/docs/workflows/developer-integrator' },
            { label: 'Packages', to: '/docs/framework/intro' },
            { label: 'Standard', to: '/docs/standard/intro' },
            { label: 'Governance', to: '/docs/standard/governance' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Next release', to: '/docs/next-release' },
            { label: 'Roadmap', to: '/docs/roadmap' },
            { label: 'Contributing', to: '/docs/contributing' },
            { label: 'Philosophy', to: '/docs/philosophy/manifesto' },
            { label: 'GitHub org', href: 'https://github.com/xrtm-org' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} xrtm-org. AI for event forecasting.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
