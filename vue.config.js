const path = require('path');
module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'https://www.imooc.com',
                changeOrigin:false
            }
        }
    },
		// configureWebpack可以将配置的webpack合并到项目中的webpack配置并覆盖
    configureWebpack:{
      resolve: {
          // configuration options
          alias: {
              '@': path.resolve(__dirname, 'src'),
              Templates: path.resolve(__dirname, 'src/templates/'),
            },
        },
    }
    
}