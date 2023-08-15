import { createWebHistory, createRouter } from 'vue-router';

const routerProps = [
    {
        path: '',
        component: () => import('../Index.vue')
    },
    {
        path: '/h5',
        component: () => import('../H5.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes: routerProps
  });
  
  export default router;