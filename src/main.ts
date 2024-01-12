import { createApp } from "vue";
import { createPinia } from "pinia";

// styles
import "./style.css";
import "vue-toastification/dist/index.css";

// components
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";

const pinia = createPinia();
// create the app
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Toast, {});

// mount the app
app.mount("#app");
