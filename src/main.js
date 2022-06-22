import { createApp } from "vue";

import App from "./App.vue";

import router from "./router"
import store from "./store";

const app = createApp(App);

// Add store
app.use(store);

// Add router
app.use(router);

app.mount("#app");
