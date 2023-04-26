import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExtraActiveClass: "",

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactPage,
    },
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },

    // vado alla pagina not-found se il path non corrisponde ad uno di quelli esistenti
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };
