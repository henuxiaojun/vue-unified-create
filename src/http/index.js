import axios from 'axios'
let axiosInstance = axios.create()

axiosInstance.interceptors.request.use(config => {
  /* 在此处设置请求头 */
  return config
})

axiosInstance.interceptors.response.use(res => {
  /* 在此处理请求返回内容 */
  if (res.data.code !== 200) {
    return Promise.reject(res.data.msg)
  }
  return res.data.data
}, err => {
  return Promise.reject(err.res.data.msg)
})

export default axiosInstance
