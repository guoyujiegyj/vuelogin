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
      }
    }
  }
}
