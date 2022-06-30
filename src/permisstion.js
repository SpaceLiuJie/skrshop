import router from './router/index.js'
import NgProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
router.beforeEach((to,from,next)=>{
    let token = store.state.user.token
    NgProgress.start() //发送请求并且得到数据的时候使用
    if (!token) {
        if (to.path == '/login') {
            next(`${to.path}? redirect = ${from.path}`)
        }else{
            next('/login')
        }
    }else{
        next()
    }
})

// 路由组件渲染完成后执行
router.afterEach(() => {
    NgProgress.done(
        router.go(0)
    )

})