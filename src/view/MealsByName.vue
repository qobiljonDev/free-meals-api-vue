<template>
  <div class="p-8">
    <div class="px-8">
      <input
        type="search"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        :placeholder="$t('search_meals')"
        @change="searchMeals"
      />
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { computed, onMounted, ref } from "vue"

import store from "../store"
import Meals from "../components/Meals.vue"

const route = useRoute()
const router = useRouter()

const keyword = ref(route.query.search)

const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  store.dispatch("searchMeals", keyword.value)
  router.replace({
    path: "by-name",
    query: { search: keyword.value ? keyword.value : undefined }
  })
}

onMounted(() => {
  if (keyword.value) {
    searchMeals()
  }
})
</script>
