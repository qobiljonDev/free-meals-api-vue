import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import i18n from "./plugin/i18n"

import "./style.css"
// import "node_modules/flag-icons/css/flag-icons.min.css"

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)

app.mount("#app")
