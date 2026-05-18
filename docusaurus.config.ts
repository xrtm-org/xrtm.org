import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'xrtm',
  tagline: 'AI for event forecasting',
  favicon: 'img/favicon.png',

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
          label: 'Start',
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
          title: 'Start',
          items: [
            { label: 'Getting started', to: '/docs/getting-started' },
            { label: 'Researcher / model-eval', to: '/docs/workflows/researcher-model-eval' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Operator runbook', to: '/docs/workflows/operator-runbook' },
            { label: 'Developer / integrator', to: '/docs/workflows/developer-integrator' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'GitHub', href: 'https://github.com/xrtm-org' },
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
