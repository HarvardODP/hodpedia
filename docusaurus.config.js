// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HODP Wiki",
  tagline:
    "Open datasets and details about all aspects of campus life at Harvard!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hodpedia.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Harvard Open Data Project", // Usually your GitHub org/user name.
  projectName: "HODPedia", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/HarvardODP/hodpedia/tree/main/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/hodplogo.jpg",
      navbar: {
        title: "HODPedia",
        logo: {
          alt: "HODP Logo",
          src: "img/hodplogo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Wiki",
          },
          {
            to: "https://hodp.org",
            position: "right",
            label: "HODP Main Website",
          },
          {
            to: "https://github.com/HarvardOpenData",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Main Website",
                to: "https://hodp.org",
              },
              {
                label: "Facebook",
                to: "https://www.facebook.com/HarvardODP/",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/HarvardODP",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://www.hodp.org/blog",
              },
              {
                label: "GitHub",
                to: "https://github.com/HarvardOpenData",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harvard Open Data Project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
