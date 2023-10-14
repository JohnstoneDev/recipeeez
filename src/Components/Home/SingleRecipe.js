// lib imports
import { useParams } from "react-router-dom"

// local imports
import { Loading } from './HomeComponent'

export const SingleRecipe = () => {
  const { id } = useParams()

  return (
    <div>
      Recipe ID : {id}
      <Loading />
    </div>
  )
}