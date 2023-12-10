<template>
  <div class="flex items-center mt-8 pl-8">
    <h2 class="text-4xl font-bold mb-4 text-orange-500">{{ $t("category_meal") }}</h2>
    <!-- <img class="cursor-pointer ml-3 mt-[-10px] animate-spin" :src="RefreshIcons" alt="refresh" @click="refreshMeals" /> -->
  </div>
  <div class="grid grid-cols-3 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.id"
      class="bg-white shadow rounded-xl overflow-hidden hover:scale-105 transition-all"
    >
      <img :src="meal.strCategoryThumb" alt="meals" loading="lazy" class="w-full h-48 object-cover" />

      <div class="p-3">
        <h3 class="font-bold">{{ $t("category") }}: {{ meal.strCategory }}</h3>
        <p class="mb-4 h-24 text-ellipsis overflow-hidden">
          {{ meal.strCategoryDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import store from "../store"
import RefreshIcons from "../assets/refresh.svg"

const meals = computed(() => store.state.randomMeals)

function refreshMeals() {
  store.dispatch("randomMeals")
}

onMounted(() => {
  store.dispatch("randomMeals")
})
</script>
