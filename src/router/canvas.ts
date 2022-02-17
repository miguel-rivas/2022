import Vue from 'vue';

import NestedWorkareaView from '../views/nested-workarea.vue';
import NestedPanelView from '../views/nested-panel.vue';

import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import LocationsPanelView from '../views/locations-panel.vue';
import LocationsWorkareaView from '../views/locations-workarea.vue';
import AvatarWorkareaView from '../views/avatar-workarea.vue';
import AvatarPanelView from '../views/avatar-panel.vue';

export default {
  name: 'canvas',
  path: '/canvas',
  components: {
    workarea: Vue.extend({
      props: {
        defaultRoute: {
          default: "locations"
        },
      },
      extends: NestedWorkareaView,
    }),
    panel: Vue.extend({
      props: {
        panelTitle: {
          default: "Canvas Prototypes"
        },
        links: {
          default: () => ([
            {
              text: "Map",
              name: "locations",
              icon: "airplane",
            },
            {
              text: "Avatar",
              name: "avatar",
              icon: "person",
            },
            {
              text: "Gear Builder",
              name: "gear",
              icon: "cog-transfer-outline",
            },
            {
              text: "Color Wheel",
              name: "wheel",
              icon: "palette",
            },
          ])
        }
      },
      extends: NestedPanelView,
    }),
  },
  children: [
    {
      name: 'locations',
      path: '/locations',
      components: {
        workarea2: LocationsWorkareaView,
        panel2: LocationsPanelView,
      },
    },
    {
      name: 'avatar',
      path: '/avatar',
      components: {
        workarea2: AvatarWorkareaView,
        panel2: AvatarPanelView,
      },
    },
    {
      name: 'gear',
      path: '/gear',
      components: {
        workarea2: GearWorkareaView,
        panel2: GearPanelView,
      },
    },
    {
      name: 'wheel',
      path: '/wheel',
      components: {
        workarea2: WheelWorkareaView,
        panel2: WheelPanelView,
      },
    },
  ],
};