import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'xrtm',
  tagline: 'Local-first forecasting and model-eval workbench',
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
          docId: 'getting-started',
          position: 'left',
          label: 'Start Here',
        },
        {
          type: 'doc',
          docId: 'workflows/researcher-model-eval',
          position: 'left',
          label: 'Workflows',
        },
        {
          type: 'doc',
          docId: 'examples',
          position: 'left',
          label: 'Examples',
        },
        {
          type: 'doc',
          docId: 'framework/intro',
          position: 'left',
          label: 'Packages',
        },
        {
          type: 'doc',
          docId: 'philosophy/manifesto',
          position: 'left',
          label: 'Philosophy',
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
          title: 'Product',
          items: [
            { label: 'Start Here', to: '/docs/getting-started' },
            { label: 'Workflows', to: '/docs/workflows/researcher-model-eval' },
            { label: 'Examples', to: '/docs/examples' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Packages', to: '/docs/framework/intro' },
            { label: 'Standard', to: '/docs/standard/intro' },
            { label: 'Roadmap', to: '/docs/roadmap' },
            { label: 'Contributing', to: '/docs/contributing' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Docs overview', to: '/docs' },
            { label: 'Philosophy', to: '/docs/philosophy/manifesto' },
            { label: 'GitHub org', href: 'https://github.com/xrtm-org' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} xrtm-org. Local-first forecasting and model evaluation.`,
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
