<template lang="">
  <div class="flex items-center ml-10">
    <div @click="toggleDarkMode()">
      <button
        type="button"
        class="dark:hidden block group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        data-hs-theme-click-value="dark"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
      <button
        type="button"
        class="dark:block hidden group items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
        data-hs-theme-click-value="light"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8a2 2 0 1 0 4 4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>
    </div>
    <div class="flex ml-4 divide-x-2 rounded text-[14px] dark:text-gray-100 dark:divide-gray-700">
      <button type="button" @click="setLocale('en')" class="px-3 py-1" :class="{ 'text-orange-400': locale === 'en' }">
        EN
      </button>
      <button type="button" @click="setLocale('uz')" class="px-3 py-1" :class="{ 'text-orange-400': locale === 'uz' }">
        UZ
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import i18n from "../../plugin/i18n"

const route = useRoute()
const router = useRouter()

const userTheme = ref("light")
const locale = computed(() => i18n.global.locale.value)

function toggleDarkMode() {
  const activeTheme = localStorage.getItem("theme")
  const newTheme = activeTheme === "light" ? "dark" : "light"
  setTheme(newTheme)
}

function setTheme(theme) {
  localStorage.setItem("theme", theme)
  userTheme.value = theme

  if (document.body) {
    document.body.className = theme
  }
}

function getMediaPreference() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getTheme() {
  return localStorage.getItem("theme") || getMediaPreference()
}

onMounted(() => {
  const initUserTheme = getTheme()
  setTheme(initUserTheme)
})

function setLocale(lng) {
  i18n.global.locale.value = lng

  const currentPathWithoutLang = route.fullPath.replace(/^\/[a-zA-Z]{2}/, "")

  const newPath = `/${lng}${currentPathWithoutLang}`

  window.reload()
  router.push({ path: newPath })
}
</script>
