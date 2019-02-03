import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Calls from '@/components/Calls';
import StandardMix from '@/components/Calls/StandardMix';
import HaiChant from '@/components/Calls/HaiChant';
import HaiCombo from '@/components/Calls/HaiCombo';
import PPPH from '@/components/Calls/PPPH';
import Furi from '@/components/Furi';
import StandardFuri from '@/components/Furi/StandardFuri';
import HaiFuri from '@/components/Furi/HaiFuri';
import KechaFuri from '@/components/Furi/KechaFuri';
import FuwaFuri from '@/components/Furi/FuwaFuri';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/calls',
      name: 'Calls',
      component: Calls,
      children: [
        {
          path: 'standard-mix',
          component: StandardMix
        },
        {
          path: 'ppph',
          component: PPPH
        },
        {
          path: 'hai-combo',
          component: HaiCombo
        },
        {
          path: 'hai-chant',
          component: HaiChant
        },
      ]
    },
    {
      path: '/furi',
      name: 'Furi',
      component: Furi,
      children: [
        {
          path: 'standard',
          component: StandardFuri
        },
        {
          path: 'hai',
          component: HaiFuri
        },
        {
          path: 'kecha',
          component: KechaFuri
        },
        {
          path: 'fuwa',
          component: FuwaFuri
        },
      ]
    },
  ]
})
