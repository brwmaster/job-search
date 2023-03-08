import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import router from "@/router/";
import "@/index.css";
import App from "@/App.vue";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
