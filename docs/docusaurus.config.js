/* eslint @typescript-eslint/no-var-requires: "off" */
// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const Name = 'React Ethooks';
const GithubUrl = 'https://github.com/incirLabs/react-ethooks';
const NpmUrl = 'https://www.npmjs.com/package/@incirlabs/react-ethooks';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: Name,
  tagline: '',
  url: 'https://incirlabs.github.io',
  baseUrl: '/react-ethooks/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'incirLabs', // Usually your GitHub org/user name.
  projectName: 'react-ethooks', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${GithubUrl}/tree/main/docs/`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: Name,
        items: [
          {
            href: GithubUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Github',
            href: GithubUrl,
          },
          {
            label: 'NPM',
            href: NpmUrl,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} incirLabs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
