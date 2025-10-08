import axiosInstance from '@/plugins/axios'
import type { ApiResponse, CustomAxiosRequestConfig } from '@/shared/models/api'
import type { ActivitiesRequestPayload } from '../models'

export const ActivitiesRequest = async (payload: ActivitiesRequestPayload): Promise<ApiResponse> => {
  const configRequest: CustomAxiosRequestConfig<ActivitiesRequestPayload> = {
    url: '/activities/request',
    method: 'POST',
    data: payload,
    meta: {
      requiresAuth: true,
    },
  }
  const { data } = await axiosInstance.request(configRequest)
  return data
}
