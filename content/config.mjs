
/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const userConfig = {
    title: "Manifesto For Change",
    description: "Looking to leave a brighter future.",
    showEditLink: false,
    showToc: true,
    showSidebar: false,
    showLinkPreviews: true,
    author: "",
    authorLogo: "",
    domain: "",
    // Google analytics key e.g. G-XXXX
    analytics: "",
    // content source directory for markdown files
    // DO NOT CHANGE THIS VALUE
    // if you have your notes in another (external) directory,
    // /content dir should be a symlink to that directory
    content: "content",
    avatarPlaceholder: "/_flowershow/avatarplaceholder.png",
    contentExclude: [],
    contentInclude: [],
    // Theme
    theme: {
      default: "dark",
      toggleIcon: "/_flowershow/theme-button.svg",
    },
    navLinks: [
      // { href: '/about', name: 'About' },
    ],
  }

export default config;
