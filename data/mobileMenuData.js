module.exports = [
  {
    id: 1,
    label: "Home",
    routePath: "/",
  },
  {
    id: 2,
    label: "About",
    routePath: "/about",

  },
  {
    id: 3,
    label: "Service",
    items: [
      {
        name: "Job Seekers",
        routePath: "/service/job-seekers",
      },
      {
        name: "Students",
        routePath: "/service/students",
      },
      {
        name: "Businesses",
        routePath: "/service/businesses",
      },
      {
        name: "Universities & Colleges",
        routePath: "/service/universities-colleges",
      },
      {
        name: "Training",
        routePath: "/service/training",
      },
      {
        name: "Other",
        routePath: "/service/travel-visa",
      },
    ],
  },
  {
    id: 4,
    label: "Blog",
    routePath: "/blog-list-v1",

  },

  {
    id: 5,
    label: "Contact",
    routePath: "/contact",

  },

];
