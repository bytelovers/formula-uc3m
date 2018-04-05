import Vue from 'vue';
import Router from 'vue-router';
import Mockup from '@/components/Mockup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mockup',
      component: Mockup,
    },
  ],
});
