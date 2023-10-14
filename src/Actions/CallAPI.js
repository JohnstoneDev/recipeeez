//

// API Call Hook
import { useFetchData } from "../Hooks/FetchData"

const apiKey = process.env.REACT_APP_SPOONACULAR_KEY

export const GetRecipes = () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
  return useFetchData(url)
}


export const GetRecipeById = (id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  return useFetchData(url)
}