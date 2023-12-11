<template>
  <div class="p-8">
    <h2 class="text-4xl font-bold mb-4 text-orange-500">{{ $t("ingredient") }}</h2>
    <input
      type="search"
      v-model="keyword"
      class="rounded border-2 mb-4 border-gray-200 w-full dark:bg-slate-700 dark:text-white dark:border-transparent"
      :placeholder="$t('search_meals')"
    />
    <router-link
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient }
      }"
      class="block bg-white shadow mb-3 rounded p-4 dark:bg-slate-900"
    >
      <h3 class="text-2xl font-bold mb-2 dark:text-gray-100">{{ ingredient.strIngredient }}</h3>
      <p class="dark:text-gray-400">{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import axiosClient from "../plugin/axiosClient"

const ingredients = ref([])
const keyword = ref("")

const computedIngredients = computed(() => {
  if (!keyword.value) return ingredients.value
  return ingredients.value.filter((ing) => {
    return String(ing.strIngredient).toLowerCase().includes(keyword.value.toLowerCase())
  })
})

onMounted(async () => {
  try {
    const { data } = await axiosClient.get("list.php?i=list")
    ingredients.value = data.meals
  } catch (error) {
    console.log(error)
  }
})
</script>
