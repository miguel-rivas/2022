import Vue from 'vue';
import app from './app.vue';
import router from './modules/router';
import { store } from './modules/store';
import './stylesheets/application.scss';
import './modules/commons';
import "nano-grid/modules/tooltip";
import {
  formatRawDBToJSON,
  formatRawDBToFirebase,
  formatGroupsToProjects,
} from "./modules/format-db";
import "highlight.js/styles/tomorrow-night-bright.css";

import VueKonva from 'vue-konva';
import VueHighlightJS from "vue-highlight.js";
import xml from "highlight.js/lib/languages/xml";

//-- db
import { projectsDB } from "./db/projects";
import { groupsDB } from "./db/groups";
import { user } from "./db/user";

// ---------------- Selection

store.commit("addColumn",
  {
    absoluteWidth: false,
    absoluteHeight: false,
    width: 0,
    height: 0,
    subtraction: 100,
    block: "column",
  }
);

store.commit("addColumn",
  {
    absoluteWidth: true,
    absoluteHeight: false,
    width: 0,
    height: 0,
    subtraction: 0,
    block: "suffix",
  },
);

Vue.use(VueKonva);
Vue.use(VueHighlightJS, {
  languages: {
    xml,
  },
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: () => ({
    user: user,
    projects: formatRawDBToJSON(projectsDB.map(formatRawDBToFirebase)),
    groups: formatGroupsToProjects(groupsDB),
  }),
  render: h => h(app)
}).$mount('#app');
