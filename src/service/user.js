// 将具体的方法抽离。
import axios from 'axios'
export default{
  useLogin(user) {
    // 登录一般用post，今天这里例外。
    return axios.get('/api/login',{params: user})
  }
}