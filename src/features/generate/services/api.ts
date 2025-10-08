import axiosInstance from '@/plugins/axios'
import type { ApiResponse, CustomAxiosRequestConfig } from '@/shared/models/api'
import type { GenerateRequestPayload } from '../models'

export const GenerateRequest = async (payload: GenerateRequestPayload): Promise<ApiResponse> => {
  const configRequest: CustomAxiosRequestConfig<GenerateRequestPayload> = {
    url: '/generate/request',
    method: 'POST',
    data: payload,
    meta: {
      requiresAuth: true,
    },
  }
  const { data } = await axiosInstance.request(configRequest)
  return data
}
