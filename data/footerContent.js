module.exports = [
  {
    id: 1,
    title: "Find Jobs",
    menuList: [
      { name: "Browse Jobs", route: "/job-list-v6", modalTarget: "#loginPopupModal"},
      { name: "Browse Categories", route: "/job-list-v6" },
      { name: "Candidate Dashboard", route: "/", modalTarget: "#loginPopupModal" },
      { name: "Job Alerts", route: "/" },
      {
        name: "My Bookmarks",
        route: "/",
      },
    ],
  },
  {
    id: 2,
    title: "FAQ",
    menuList: [
      { name: "About Us", route: "/about" },
      { name: "Job Page Invoice", route: "/" },
      { name: "Terms Page", route: "/" },
      { name: "Blog", route: "/blog-list-v1" },
      { name: "Contact", route: "/contact" },
    ],
  },
  // {
  //   id: 3,
  //   title: "Help",
  //   menuList: [
  //     { name: "Site Map", route: "/" },
  //     { name: "Terms of Use", route: "/terms" },
  //     { name: "Privacy Center", route: "/" },
  //     { name: "Security Center", route: "/" },
  //     { name: "Accessibility Center", route: "/" },
  //   ],
  // },
];
