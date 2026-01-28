import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'xrtm',
  tagline: 'True intelligence is not recall. It is prediction.',
  favicon: 'img/favicon.ico',

  url: 'https://xrtm.org',
  baseUrl: '/',
  organizationName: 'xrtm-org',
  projectName: 'xrtm.org',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    // Replace with your project's social card
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
          to: '/docs/philosophy/manifesto',
          position: 'left',
          label: 'Philosophy',
          activeBasePath: 'docs/philosophy',
        },
        {
          to: '/docs/standard/intro',
          position: 'left',
          label: 'The Standard',
          activeBasePath: 'docs/standard',
        },
        {
          to: '/docs/framework/intro',
          position: 'left',
          label: 'Framework',
          activeBasePath: 'docs/framework',
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
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} xrtm-org. Modeling the World.`,
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
