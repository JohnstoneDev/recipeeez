// lib imports
import { Link } from 'react-router-dom'

// Assets
import '../../Styles/home.css'
import '../../Styles/recipes.css'

import { Loading } from "./HomeComponent"

// Container for a recipe
function Recipe({ id, title, image,  }){
  return (
    <div className="recipe">
      <img src={image} alt={title}/>
      <section>
        <h4>{title}</h4>
        <button>
          <Link to={`/recipes/${id}`}> Learn  More </Link>
        </button>
      </section>
    </div>
  )
}

// List all Recipes
export const RecipesList = ({ recipes, loading  }) => {
  return (
    <div>
        {
          loading ?
          <Loading /> :
          <div>
            <section className="recipe-card">
              <h3> Recipes : </h3>
              <section className="recipes-list">
                  {
                    recipes.map((recipe) => <Recipe key={recipe.id} {...recipe} />)
                  }
              </section>
            </section>
          </div>
          }
    </div>
  )
}
