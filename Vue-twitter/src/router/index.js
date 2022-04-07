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
            requireAuth: true,
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




// <!-- Home -->
//           <router-link
//             to="/"
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-hashtag text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">탐색하기</span>
//           </router-link>
//           <!-- Home -->
//           <!-- 알림 -->
//           <router-link
//             to="/notifications"
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-bell text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">알림</span>
//           </router-link>
//           <!-- 알림 -->
//           <!-- 쪽지 -->
//           <router-link
//             to="/message"
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-envelope text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">쪽지</span>
//           </router-link>
//           <!-- 쪽지 -->
//           <!-- 북마크 -->
//           <router-link
//             to="/"
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-bookmark text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">북마크</span>
//           </router-link>
//           <!-- 북마크 -->
//           <!-- 리스트 -->
//           <div
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-list-alt text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">리스트</span>
//           </div>
//           <!-- 리스트 -->
//           <!-- 프로필 -->
//           <router-link
//             to="/profile"
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-user text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">프로필</span>
//           </router-link>
//           <!-- 프로필 -->
//           <!-- 더보기 -->
//           <div
//             class="
//               hover:text-primary hover:bg-blue-50
//               px-4
//               py-2
//               rounded-full
//               cursor-pointer
//             "
//           >
//             <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
//             <span class="text-xl ml-5 hidden xl:inline-block">더보기</span>
//           </div>
//           <!-- 더보기 -->