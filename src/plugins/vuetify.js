// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib";
// import { preset } from 'vue-cli-plugin-vuetify-preset-basil/preset'

Vue.use(Vuetify);

export default new Vuetify({
  //   preset,
  //   rtl: true,
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: "#FBBC04",
      },
      light: {
        primary: "#412554",
        secondary: "#FFE4A8",
        third: "#008B52",
      },
    },
  },
});
