// lib imports
import { useParams, Link } from "react-router-dom"
import { v4 as uuid } from "uuid"

// Assets
import '../../Styles/singleRecipe.css'
import '../../Styles/home.css'

// local imports
// import { SampleRecipe } from "./Data"
import { GetRecipeById } from "../../Actions/CallAPI"

// components
import { Loading } from './HomeComponent'

export const DisplayRecipe = ({ recipe }) => {

  const {
    title, readyInMinutes, veryHealthy,
    image, sourceName, dishTypes, servings, healthScore,
    extendedIngredients, winePairing,
  } = recipe

  const { pairedWines, pairingText } = winePairing


  return (
    <div className="main">
      <div className="recipe-card">
        <h1>{title}</h1>
        <section className="recipe-intro">
          <img src={image} alt={title} />
          <div>
            <article>
              <h2> Recipe by : {sourceName} </h2>
              <p> Time to Prepare : {readyInMinutes} minutes </p>
              <p>Very Healthy : {veryHealthy ? "Yes" : "No"}</p>
              <p>Servings : {servings}</p>
              <p>Health Score : {healthScore}</p>
              <article>
                <h4> Dish types : </h4>
                <p>{dishTypes.map((dishT) => <span key={uuid()}>{dishT + ", "} </span>)}</p>
              </article>
            </article>
          </div>
        </section>

        <section>
          <article className="ingredients">
            <h4> Ingredients : </h4>
            <div className="ingredients-list">
              {
                extendedIngredients.map((extended) => {
                  const { name, aisle,  measures } = extended
                  return (
                    <section key={uuid()} className="ingredient-card">
                        <h5>{name}</h5>
                        <p>Found in the {aisle} Aisle </p>
                        <p>{measures.metric.amount} {measures.metric.unitLong}</p>
                    </section>
                  )
              })}
            </div>
          </article>

          <article className="wines">
            <h5> Paired Wines : </h5>
            <article>
              <p>{pairedWines.map((wine) => <span key={uuid()}>{wine + ", "}</span>)}</p>
              <p>{pairingText}</p>
            </article>
          </article>
        </section>
      </div>
    </div>
  )
}


export const SingleRecipe = () => {
  const { id } = useParams();

  const  recipe = GetRecipeById(id).stateData
	const loading = GetRecipeById(id).loading

  return (
    <div>
        <Link to="/" className="button">Home</Link>
        {
          loading ? <Loading /> : <DisplayRecipe recipe={recipe} />
        }
    </div>
  )
}