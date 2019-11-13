module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      // mock数据。模拟服务器。
      before(app){
        app.get('/api/login',function(req,res) {
          const {username,password} = req.query
          console.log(username)
          if(username =='gyj' && password== '123') {
            res.json({code: 1,token: '11111111111'})
          }else{
            res.status(401).json({code: 0,message: '数据有误'})
          }
        })
        // 模拟后台对接口保护的中间件，这样前端请求时需要携带token
        function auth(req,res,next){
          if(req.headers.token){
            console.log(2)
            next()
          }else{
            console.log(1)
            res.sendStatus(401)
          }
        }
        // auth就是中间件。
        app.get('/api/logininfo',auth,function(req,res) {
          res.json({code: 1,data: {name: 'jac',age: 20}})
        })
      },
      
    }
  }
}
