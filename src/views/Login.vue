<template>
  <div>
    <cube-form
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        @submit="handleLogin"
        @reset="handleValidate"
      ></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              type: 'password',
              placeholder: '请输入',
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: 'blur'
          },
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
   methods: {
    handleLogin(e) {
      // 组织表单默认事件
      e.preventDefault();
      // 触发store的action里的login事件。将用户信息传过去。
      this.$store.dispatch('login', this.model)
      // action里的异步方法，返回一个Promise,所以通过.then
      .then(code=>{
        if(code){
          console.log(code)
          const path=this.$route.query.redirect || '/'
          this.$router.push(path)
        }
      }).catch(error=>{
        const toast = this.$createToast({
          time: 2000,
          txt: error.message || error.response.data.message || '登录失败',
          type: 'errro  '
        })
        toast.show()
       
      })
    },
    handleValidate(result) {
    }
  }
};
</script>

<style lang='less' scoped>
</style>