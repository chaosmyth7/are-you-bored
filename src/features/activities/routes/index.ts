import type { RouteRecordRaw } from 'vue-router'
import { ActivitiesPageName } from '../models'

const activitiesRoutes: RouteRecordRaw[] = [
  {
    path: '/activities',
    name: ActivitiesPageName.ACTIVITIES,
    component: () => import('@/features/activities/views/ActivitiesView.vue'),
  },
]

export default activitiesRoutes
