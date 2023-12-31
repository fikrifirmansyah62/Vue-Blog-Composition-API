import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* boostraps */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

/* JQuery */
import JQuery from "jquery";
window.$ = JQuery;

/* Fontawesome */
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

/* Clean Blog */
import "@/assets/css/clean-blog.css";
import "@/assets/js/clean-blog.js";

createApp(App).use(router).mount("#app");
