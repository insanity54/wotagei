import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Calls from '@/components/Calls';
import StandardMix from '@/components/Calls/StandardMix';
import HaiCall from '@/components/Calls/HaiCall';
import HaiCombo from '@/components/Calls/HaiCombo';
import Furi from '@/components/Furi';
import StandardFuri from '@/components/Furi/StandardFuri';
import HaiFuri from '@/components/Furi/HaiFuri';
import KechaFuri from '@/components/Furi/KechaFuri';
import FuwaFuri from '@/components/Furi/FuwaFuri';
import RomanceFuri from '@/components/Furi/RomanceFuri';
import OADFuri from '@/components/Furi/OADFuri';


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
          path: 'hai-combo',
          component: HaiCombo
        },
        {
          path: 'hai-chant',
          component: HaiCall
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
        {
          path: 'romance',
          component: RomanceFuri
        },
        {
          path: 'oad',
          component: OADFuri
        },
      ]
    },
  ]
})
