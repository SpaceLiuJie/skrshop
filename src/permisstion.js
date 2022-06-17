import router from './router/index.js'
import NgProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

// 路由导航守卫 全局守卫
router.beforeEach((to, from, next) => {
    console.log('切换页面');
    console.log(to);
    console.log(from);
    //from   to  是从哪个地址到哪个地址
    NgProgress.start()
    next()
})

// 路由组件渲染完成后执行
router.afterEach(() => {
    NgProgress.done()
})