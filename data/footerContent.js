module.exports = [
  {
    id: 1,
    title: "Important Links",
    menuList: [
      { name: "About Us", route: "/about" },
      { name: "Browse Jobs", route: "/job-list-v6", modalTarget: "#loginPopupModal"},
      { name: "Post Jobs", route: "/job-list-v6" },
      { name: "Student Services", route: "/service/students", modalTarget: "#loginPopupModal" },
      { name: "Travel, Training & Other", route: "/service/travel-visa" },
    ],
  },
  {
    id: 2,
    title: "Company",
    menuList: [
      { name: "About Us", route: "/about" },
      { name: "Careers", route: "/career" },
      { name: "FAQ", route: "/faq" },
      { name: "Terms & Conditions", route: "/terms" },
      { name: "Security & Privacy", route: "/terms" },
    ],
  },
];
