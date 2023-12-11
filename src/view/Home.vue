<template>
  <div class="flex items-center mt-8 pl-8">
    <h2 class="text-4xl font-bold mb-4 text-orange-500">{{ $t("category_meal") }}</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.id"
      class="bg-white dark:bg-gray-900 shadow rounded-xl overflow-hidden hover:scale-105 transition-transform"
    >
      <img :src="meal.strCategoryThumb" alt="meals" loading="lazy" class="w-full h-48 object-cover" />

      <div class="p-3">
        <h3 class="font-bold dark:text-white">{{ $t("category") }}: {{ meal.strCategory }}</h3>
        <p class="mb-4 h-24 text-ellipsis overflow-hidden dark:text-gray-400">
          {{ meal.strCategoryDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import store from "../store"

const meals = computed(() => store.state.randomMeals)

function refreshMeals() {
  store.dispatch("randomMeals")
}

onMounted(() => {
  store.dispatch("randomMeals")
})
</script>
