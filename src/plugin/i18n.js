import { createI18n } from "vue-i18n"

import en from "../locales/en.json"
import uz from "../locales/uz.json"

let locale = window.location.pathname.replace(/^\/([^/]+).*/i, "$1")

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale.trim().length && locale != "/" ? locale : "uz",
  messages: { en, uz }
})

export default i18n
