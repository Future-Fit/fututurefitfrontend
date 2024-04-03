const { clearSession } = require("@/components/common/form/login/sessionHandler");

module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/jobseeker-dashboard/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "My Profile",
    icon: "la-user-tie",
    routePath: "/jobseeker-dashboard/my-profile",
    active: "",
  },
  {
    id: 3,
    name: "Services Ordered",
    icon: "la la-file-invoice",
    routePath: "/shop/cart",
    active: "",
  }, 
  {
    id: 4,
    name: "File manager",
    icon: "la la-file",
    routePath: "/jobseeker-dashboard/cv-manager",
    active: "",
  },
  {
    id: 5,
    name: "Applied Jobs",
    icon: "la-briefcase",
    routePath: "/jobseeker-dashboard/applied-jobs",
    active: "",
  },
  {
    id: 6,
    name: "Change Password",
    icon: "la-lock",
    routePath: "/jobseeker-dashboard/change-password",
    active: "",
  },
  {
    id: 7,
    name: "Logout",
    icon: "la-sign-out",
    routePath: "/",
    active: "",
  },
  {
    id: 8,
    name: "Unsubscribe",
    icon: "la-briefcase",
    routePath: "",
    active: "",
  },
];
