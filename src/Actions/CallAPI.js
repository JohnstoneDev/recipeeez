//

// API Call Hook
import { useFetchData } from "../Hooks/FetchData"

export const GetRecipes = () => {
  const apiKey = process.env.REACT_APP_SPOONACULAR_KEY
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
  return useFetchData(url)
}