import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/notifications.vue'
import Messages from '../pages/Message.vue'
import Profile from '../pages/Profile.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import store from '../store'
import TweetPage from '../pages/TweetPage.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        title: '홈',
        icon: 'fas fa-fw fa-home text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/',
        component: Home,
        name: 'explore',
        title: '탐색하기',
        icon: 'fas fa-fw fa-hashtag text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/notifications',
        component: Notifications,
        name: 'notifications',
        title: '알림',
        icon: 'fas fa-fw fa-bell text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/messages',
        component: Messages,
        name: 'messages',
        title: '쪽지',
        icon: 'fas fa-fw fa-envelope text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/bookmarks',
        component: Home,
        name: 'bookmarks',
        title: '북마크',
        icon: 'fas fa-fw fa-bookmark text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/list',
        component: Home,
        name: 'list',
        title: '리스트',
        icon: 'fas fa-fw fa-list-alt text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile',
        title: '프로필',
        icon: 'fas fa-fw fa-user text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/profile/:uid',
        component: Profile,


        meta: {
            isMenu: false,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/profile',
        component: Home,
        name: 'more',
        title: '더 보기',
        icon: 'fas fa-fw fa-ellipsis-h text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout',
            requireAuth: true,
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            isMenu: false,
            layout: 'EmptyLayout',
        }
    },
    {
        path: '/tweet/:id',
        name: 'tweet',
        component: TweetPage,
        meta: {
            isMenu: false,
            layout: 'DefaultLayout',
            requireAuth: true
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            isMenu: false,
            layout: 'EmptyLayout',
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const currentUser = store.state.user
    const requireAuth = to.matched.some((record) => record.meta.requireAuth)
    // not authenticated
    if (requireAuth && !currentUser) next('/login')
    // authenticated
    else next()
})

export default router