// const { assert } = require('console')
const path = require('path')

// 相对路径变绝对路径
function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            //给less-loader传递 Less.js 相关选项
            less: {
                // http://lesscss.ong/usage/#less-options-strict-units `Global Variables`
                //^primary` is global variables fields name
                globalVars: {
                    primary: "#fff"
                }
            }
        }
    },
    /**
     * chainwebpack 是vue-cli使用chain.js 修改webpack默认配置的函数
     * 解决:在vue-cli中如何编写webpack配置
     */


    chainWebpack: (config) => {
        /**
         * config 返回上下文实例，WebpackContext
         */

        /**
         * config.resolve 获取 webpack中resolve
         * config.resolve.alias 获取webpack中resolve.alias
         * 作用：自定义模板中导入路径的属性
         *
         * set(path,resolve('src/*'))
         * 作用：自定义引入路径
         * 参一：自定义路径
         * 参二：代码查找路径
         * --->结果：在src中文件；导入路径；可以使用自定义路径；代替相对路径查找
         */

        //如何实现自定义加载文件资源路径
        //为什么用?
        //因为 在大型项目中，模块化划分，细化，文件路径过深。如果使用相对路径，书写不变
        config.resolve.alias
            .set('@/', resolve('src/'))
            .set('@image', resolve('src/assets/images'))
            .set('@component', resolve('src/components'))
            .set('api', resolve('src/api'))
            .set('utils', resolve('src/utils'))
            .set('@scss', resolve('src/assets/sass'))
    },
    // 配置 npm run serve运行的服务
    devServer: {
        proxy: {
            '/': {
                // target: 'http://localhost:3000/',

                target: 'http://192.168.205.192:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}