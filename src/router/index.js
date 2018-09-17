import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PointLineSide from '@/components/PointLineSide';
import CurveNurbs from '@/components/CurveNurbs';
import SideDemo from '@/components/SideDemo';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/2-2',
      name: 'curve-nurbs',
      component: CurveNurbs,
    },
    {
      path: '/side-demo',
      name: 'side',
      component: SideDemo,
    }
  ],
});
