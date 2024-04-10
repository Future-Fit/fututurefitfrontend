const { clearSession } = require("@/components/common/form/login/sessionHandler");

module.exports = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/admin-dashboard/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "My Profile",
    icon: "la-user-tie",
    routePath: "/admin-dashboard/my-profile",
    active: "",
  },
  {
    id: 3,
    name: "Manage User",
    icon: "la-file-invoice",
    routePath: "/admin-dashboard/all-user",
    active: "",
  },
  {
    id: 4,
    name: "Manage Product",
    icon: "la-file-invoice",
    routePath: "#",
    active: "",
  },
  {
    id: 5,
    name: "Compose Email",
    icon: "la-file-invoice",
    routePath: "#",
    active: "",
  },
  {
    id: 6,
    name: "Settings",
    icon: "la-file-invoice",
    routePath: "#",
    active: "",
  },
  {
    id: 7,
    name: "Change Password",
    icon: "la-lock",
    routePath: "/admin-dashboard/change-password",
    active: "",
  },
  {
    id: 8,
    name: "Logout",
    icon: "la-sign-out",
    routePath: "/",
    active: "",
  },
];
