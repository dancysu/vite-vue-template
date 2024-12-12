import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在请求发送之前做一些事情，例如设置token
    return config
  },
  function (error) {
    // 在请求失败时做一些事情
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // 任何处于2xx范围内的状态码都会触发此函数
    // 对响应数据做一些事情
    return response
  },
  function (error) {
    // 任何超出2xx范围的状态码都会触发此函数
    // 在响应失败时做一些事情
    return Promise.reject(error)
  }
)

// 对外暴露
export default request
