import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import pageA from './pages/a'
import pageB from './pages/b'
import vuexa from './components/vuexdemo/a'
import vuexb from './components/vuexdemo/b'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/pagea',
        component: pageA
    },
    {
        path: '/pageb',
        component: pageB
    },
    {
        path: '/vuexa',
        component: vuexa
    },
    {
        path: '/vuexb',
        component: vuexb
    }
]
const router = new VueRouter({
    routes
})
// 把app 的路由和
export default router