import axiosClient from "../plugin/axiosClient"

export async function randomMeals({ commit }, keyword) {
  try {
    const { data } = await axiosClient.get("categories.php")
    commit("setRandomMeals", data.categories)
  } catch (error) {
    console.log(error)
  }
}

export async function searchMeals({ commit }, keyword) {
  try {
    const { data } = await axiosClient.get(`search.php?s=${keyword}`)
    commit("setSearchMeals", data.meals)
  } catch (error) {
    console.log(error)
  }
}

export async function searchMealsByLetter({ commit }, letter) {
  try {
    const { data } = await axiosClient.get(`search.php?s=${letter}`)
    commit("setSearchMealsByLetter", data.meals)
  } catch (error) {
    console.log(error)
  }
}
export async function searchMealsByIngredient({ commit }, ing) {
  try {
    const { data } = await axiosClient.get(`filter.php?i=${ing}`)
    commit("setSearchMealsByIngredient", data.meals)
  } catch (error) {
    console.log(error)
  }
}
