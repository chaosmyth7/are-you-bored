import { createRouter, createWebHistory } from "vue-router"

import activitiesRoutes from "@/features/activities/routes"
import generateRoutes from "@/features/generate/routes"
import utilRoutes from "@/shared/routes"

const listRoutes = [...utilRoutes, ...generateRoutes, ...activitiesRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: listRoutes,
})

export default router
