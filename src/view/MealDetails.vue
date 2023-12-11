<template>
  <div class="max-w-[800px] h-auto mx-auto px-4">
    <h1 class="font-bold mb-5 text-5xl mt-6 text-orange-500">
      {{ meal.strMeal }}
    </h1>
    <img :src="meal.strMealThumb" :alt="meal.strMealThumb" class="max-w-[100%] w-full rounded" />
    <div class="grid grid-cols-1 md:grid-cols-2 py-2 text-lg">
      <div>
        <strong class="font-bold text-orange-400">Category:</strong>
        <span class="dark:text-white ml-2">{{ meal.strCategory }}</span>
      </div>
      <div>
        <strong class="font-bold text-orange-400">Area:</strong>
        <span class="dark:text-white ml-2">{{ meal.strArea }}</span>
      </div>
      <div class="md:mt-2">
        <strong class="font-bold text-orange-400">Tags:</strong>
        <span class="dark:text-white ml-2">{{ meal.strTags }}</span>
      </div>
    </div>
    <div class="my-3">
      <h3 class="font-bold text-orange-400 mb-2 text-xl">Instructions</h3>
      <p class="dark:text-white">
        {{ meal.strInstructions }}
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3 text-orange-400">{{ $t("ingredient") }}</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]" class="dark:text-white">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2 text-orange-400">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]" class="dark:text-white">
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-3 pb-2 flex">
      <YoutubeButton :href="meal.strYoutube">You Tube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-500"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import axiosClient from "../plugin/axiosClient"
import YoutubeButton from "../components/YoutubeButton.vue"

const meal = ref({})
const route = useRoute()

onMounted(async () => {
  try {
    const { data } = await axiosClient.get(`/lookup.php?i=${route.params.id}`)
    meal.value = data.meals[0]
  } catch (error) {
    console.log(error)
  }
})
</script>
