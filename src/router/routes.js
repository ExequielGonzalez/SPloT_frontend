const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      { path: "estadisticas", component: () => import("pages/Stats.vue") },
      { path: "historial", component: () => import("pages/History.vue") },
    ],
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () => import("pages/home.vue"),
  // },
  // {
  //   path: "/estadisticas",
  //   name: "Stats",
  //   component: () => import("pages/Stats.vue"),
  // },
  // {
  //   path: "/historial",
  //   name: "History",
  //   component: () => import("pages/History.vue"),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
