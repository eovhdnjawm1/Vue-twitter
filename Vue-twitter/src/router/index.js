import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/notifications.vue'
import Message from '../pages/Message.vue'
import Profile from '../pages/Profile.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
    {
        path: '/',
        component: Home,
        title: '홈',
        icon: 'fas fa-fw fa-home text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/',
        component: Home,
        title: '탐색하기',
        icon: 'fas fa-fw fa-hashtag text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/notifications',
        component: Notifications,
        title: '알림',
        icon: 'fas fa-fw fa-bell text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/message',
        component: Message,
        title: '쪽지',
        icon: 'fas fa-fw fa-envelope text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/bookmark',
        component: Message,
        title: '북마크',
        icon: 'fas fa-fw fa-bookmark text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/list',
        component: Message,
        title: '리스트',
        icon: 'fas fa-fw fa-list-alt text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/profile',
        component: Profile,
        title: '프로필',
        icon: 'fas fa-fw fa-user text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/profile',
        component: Profile,
        title: '더 보기',
        icon: 'fas fa-fw fa-ellipsis-h text-2xl',
        meta: {
            isMenu: true,
            layout: 'DefaultLayout'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isMenu: false,
            layout: 'EmptyLayout'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isMenu: false,
            layout: 'EmptyLayout'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
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