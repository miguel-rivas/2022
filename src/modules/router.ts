import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import DefaultPanelView from '../views/default-panel.vue';

import StargazeWorkareaView from '../views/stargaze-workarea.vue';
import StargazePanelView from '../views/stargaze-panel.vue';

import CanvasRouter from '../router/canvas';
import CssRouter from '../router/css';
import ProjectsRouter from '../router/projects';
import ThreeRouter from '../router/three';
import GalleryRouter from '../router/gallery';
import UnityRouter from '../router/unity';
import UiRouter from '../router/ui';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/stargaze',
  },
  {
    name: 'stargaze',
    path: '/stargaze',
    components: {
      workarea: StargazeWorkareaView,
      panel: StargazePanelView,
    },
  },
  {
    path: '*',
    redirect: '/'
  },

  /* ---------------------- nested ---------------------- */

  CanvasRouter,
  CssRouter,
  ProjectsRouter,
  ThreeRouter,
  GalleryRouter,
  UnityRouter,
  UiRouter
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;