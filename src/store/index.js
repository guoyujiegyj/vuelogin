import Vue from 'vue'
import Vuex from 'vuex'
// 导入抽离的方法模块。
import use from '../service/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录的状态,
    isLogin: false
  },
  mutations: {
    // 设置登录的状态
    setLoginState(state,b) {
      state.isLogin = b
    }
  },
  actions: {
    // u参数是login.vue页面传来的用户名和密码
    login(context,u) {
      // useLogin方法在use.js里申明，因为他返回一个promise，所以这里可以.then。
    return use.useLogin(u).then(res=>{
        // 将需要的数据结构出来。
        const {code, token} = res.data
        if(code){
          console.log(code)
          // 如果有code，调用mutation的方法修改登录状态，并存储token
          context.commit('setLoginState',true)
          localStorage.setItem('token',token)
        }
        return code
      })
    }
  },
  modules: {
  }
})
