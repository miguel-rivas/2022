import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ColorsPanelView from '../views/colors-panel.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import GridWorkareaView from '../views/grid-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';
import StargazeWorkareaView from '../views/stargaze-workarea.vue';
import StargazePanelView from '../views/stargaze-panel.vue';
import ProjectsWorkareaView from '../views/projects-workarea.vue';
import ProjectsPanelView from '../views/projects-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';
import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import Projects3DWorkareaView from '../views/gallery-3d-workarea.vue';
import Projects3DPanelView from '../views/gallery-3d-panel.vue';

import DefaultPanelView from '../views/default-panel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'stargaze',
    path: '/',
    components: {
      workarea: StargazeWorkareaView,
      panel: StargazePanelView,
    },
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      workarea: ProjectsWorkareaView,
      panel: ProjectsPanelView,
    },
  },
  {
    name: 'colors',
    path: '/colors',
    components: {
      workarea: ColorsWorkareaView,
      panel: ColorsPanelView,
    },
  },
  {
    name: 'cube',
    path: '/cube',
    components: {
      workarea: CubeWorkareaView,
      panel: CubePanelView,
    },
  },
  {
    name: 'statistics',
    path: '/statistics',
    components: {
      workarea: StatisticsWorkareaView,
      panel: DefaultPanelView,
    },
  },
  {
    name: 'grid',
    path: '/grid',
    components: {
      workarea: GridWorkareaView,
      panel: GridPanelView,
    },
  },
  {
    name: 'gear',
    path: '/gear',
    components: {
      workarea: GearWorkareaView,
      panel: GearPanelView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      workarea: WheelWorkareaView,
      panel: WheelPanelView,
    },
  },
  {
    name: 'gallery-3d',
    path: '/gallery-3d',
    components: {
      workarea: Projects3DWorkareaView,
      panel: Projects3DPanelView,
    },
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;