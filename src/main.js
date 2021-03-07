import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import datavScreenComponents from "datav-screen-components";

createApp(App)
  .use(store)
  .use(router)
  .use(datavScreenComponents)
  .mount("#app");
