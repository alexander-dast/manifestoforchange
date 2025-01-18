
/**
 * @type {import("../config/siteConfig").UserConfig}
 */

const userConfig = {
    title: "manifestoforchange",
    domain: "manifestoforchange.org.uk",
    description: "Looking to leave a brighter future.",
    showEditLink: true,
    editLinkRoot: "https://github.com/alexander-dast/manifestoforchange-content/edit/main",
    showToc: true,
    showSidebar: false,
    showLinkPreviews: true,
    author: "",
    authorLogo: "",
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
        { href: '/Tax', name: 'Tax' },
        { href: '/README', name: 'README.md' },

    ],
  }

export default userConfig;
