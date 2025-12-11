import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TAKSHA',
  tagline: 'Systems builder. Platform tinkerer. Distributed architecture troublemaker.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://khyaalnix.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For root GitHub Pages (username.github.io), use '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'khyaalnix', // Usually your GitHub org/user name.
  projectName: 'khyaalnix.github.io', // For root deployment, use username.github.io
  deploymentBranch: 'gh-pages', // Branch for GitHub Pages
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'TAKSHA',
      items: [
        {
          to: '/',
          label: 'About',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/lamhe', label: 'Lamhe', position: 'left'},
        {
          href: 'https://drive.google.com/file/d/1BdiLpn0rwnWkD79A0CEvXxqI2w_JVN0b/view?usp=sharing',
          label: 'CV',
          position: 'left',
        },
        {
          href: 'https://github.com/khyaalnix',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://linkedin.com/in/nikhill-kumarr',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn',
        },
        {
          href: 'https://x.com/nikhil__xb',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/khyaalnix',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/nikhill-kumarr',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/nikhil__xb',
            },
            {
              label: 'Email',
              href: 'mailto:nikhil.kumar707128@gmail.com',
            },
          ],
        },
        {
          title: 'Content',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Lamhe',
              to: '/lamhe',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nikhil Kumar. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
