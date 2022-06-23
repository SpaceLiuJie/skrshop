import router from './router/index.js'
import NgProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 路由组件渲染完成后执行
router.afterEach(() => {
    NgProgress.done()
})