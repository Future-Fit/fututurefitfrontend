module.exports = [
  {
    id: 1,
    label: "Home",
    routePath: "/",
  },
  {
    id: 2,
    label: "About Us",
    routePath: "/about",

  },
  {
    id: 3,
    label: "Services",
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
        name: "Training & Other",
        routePath: "/service/training",
      },
      // {
      //   name: "Other",
      //   routePath: "/service/travel-visa",
      // },
    ],
  },
  // {
  //   id: 4,
  //   label: "Blog",
  //   routePath: "/blog-list-v1",

  // },

  {
    id: 4,
    label: "Contact",
    routePath: "/contact",

  },

];
