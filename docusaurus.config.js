module.exports = {
  title: "Meditattion",
  tagline:
    "Annotation tool for Image segmentation masks, bounding boxes and classification labels",
  url: "https://meditattion-docs.netlify.app/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Meditattion", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Meditattion",
      logo: {
        alt: "Meditattion Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          href: "https://github.com/meditattion",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Meditattion.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "intro",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/meditattion/docs/edit",
        },
      },
    ],
  ],
};
