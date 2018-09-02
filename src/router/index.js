import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PointLineSide from '@/components/PointLineSide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/2-1',
      name: 'point-line-side',
      component: PointLineSide,
    },
  ],
});
