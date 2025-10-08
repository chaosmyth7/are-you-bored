import type { RouteRecordRaw } from "vue-router"

import { GeneratePageName } from "../models"

const generateRoutes: RouteRecordRaw[] = [
  {
    path: "/generate",
    name: GeneratePageName.GENERATE,
    component: () => import("@/features/generate/views/GenerateView.vue"),
  },
]

export default generateRoutes
