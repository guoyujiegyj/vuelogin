import axios from 'axios'
export default function() {
  // 请求拦截器。
  // 访问后台某些接口必须携带token。否则后台认为没有登录，因为后台对接口进行了保护。
  axios.interceptors.request.use(config=>{
    const token = localStorage.getItem('token')
    if(token){
      config.headers.token=token
    }
    return config
  }) 
  
}