const { clearSession } = require("@/components/common/form/login/sessionHandler");

module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/student-dashboard/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "My Profile",
    icon: "la-user-tie",
    routePath: "/student-dashboard/my-profile",
    active: "",
  },
  {
    id: 3,
    name: "Services Ordered",
    icon: "la la-file-invoice",
    routePath: "/shop/cart",
    active: "",
  }, {
    id: 4,
    name: "File manager",
    icon: "la la-file",
    routePath: "/student-dashboard/cv-manager",
    active: "",
  },
  {
    id: 5,
    name: "Change Password",
    icon: "la-lock",
    routePath: "/student-dashboard/change-password",
    active: "",
  },
  {
    id: 6,
    name: "Logout",
    icon: "la-sign-out",
    routePath: "/",
    active: "",
  },
  {
    id: 7,
    name: "Unsubscribe",
    icon: "la-briefcase",
    routePath: "",
    active: "",
  },
];
