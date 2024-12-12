import request from '@/utils/request.ts'

enum API {
  LOGIN = '/login'
}

export const reqLogin = (data: unknown) => request.post(API.LOGIN, data)
