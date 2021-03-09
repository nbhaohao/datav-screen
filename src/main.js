import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import datavScreenComponents from "datav-screen-components";
import ECharts from "vue-echarts";

createApp(App)
  .use(store)
  .use(router)
  .use(datavScreenComponents)
  .component("vue-echarts", ECharts)
  .mount("#app");
