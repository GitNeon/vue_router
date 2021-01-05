import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 懒加载导包方式
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Query = () => import('../components/Query');


// 解决vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

// 1.注册vue_router组件
Vue.use(VueRouter);

// 2.创建vue_router实例
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home,
    children: [{
        path: '/',
        redirect: 'news'
    }, {
        path: 'news',
        component: HomeNews,
        meta: {
            title: '新闻'
        }
    }, {
        path: 'message',
        component: HomeMessage,
        meta: {
            title: '消息'
        }
    }],
    meta: {
        title: '首页'
    }
}, {
    path: '/about',
    component: About,
    meta: {
        title: '关于'
    }
}, {
    path: '/user/:userId',
    component: User,
    name: 'user',
    meta: {
        title: '用户'
    }
}, {
    path: '/query',
    component: Query,
    name:'query',
    meta: {
        title: '查询'
    }
}];
const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

//路由导航
router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = to.matched[0].meta.title;
    next();
});

//3.导出vue_router
export default router
