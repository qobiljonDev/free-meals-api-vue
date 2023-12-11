<template lang="">
  <div
    class="bg-white dark:bg-slate-900 dark:text-gray-300 shadow rounded-xl overflow-hidden hover:scale-105 transition-transform"
  >
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" alt="meals" loading="lazy" class="w-full h-48 object-cover" />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4 h-24 text-ellipsis overflow-hidden dark:text-gray-400">
        {{ meal.strInstructions }}
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">You Tube</YoutubeButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue"

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>
<style lang=""></style>
