import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw
} from 'vue-router';

/**
 * 菜单路由
 */
export const menuRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/AppHome/AppHome.vue'),
    meta: {
      title: '首页',
      icon: 'tabler:home'
    }
  }
];

/**
 * 路由数组
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    meta: {
      icon: 'HomeFilled',
      title: 'index'
    },
    children: menuRoutes
  },

  {
    path: '/AppLogin',
    component: () => import('@/views/AppLogin/AppLogin.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound/404.vue'),
    meta: {
      title: '404'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { routes };

export default router;
