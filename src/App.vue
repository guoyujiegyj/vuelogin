<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
      <!--cube-ui的form表单-->
      <cube-form
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        :options="options"
        @validate="validateHandler"
        @submit="handleLogin"
        @reset="handleValidate"
      ></cube-form>
    </div>
    <router-view/>
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
    };
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      console.log("submit", e);
    },
    handleValidate(result) {
      this.validity = result.validity;
      this.valid = result.valid;
      console.log(
        "validity",
        result.validity,
        result.valid,
        result.dirty,
        result.firstInvalidFieldIndex
      );
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
