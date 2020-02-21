import Vue from 'vue';
import VueRouter, {Route, RouteConfig} from 'vue-router';
import Index from '../layout/Index.vue';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Index,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
