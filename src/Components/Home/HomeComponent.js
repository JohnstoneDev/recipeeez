// lib imports

// Assets
import '../../Styles/home.css'

// local imports
import { Container } from './Container'
import { SearchBar } from './SearchBar'
import { RecipesList } from './Recipes'

import { recipes } from './Data'

// Actions
// import { GetRecipes } from '../../Actions/CallAPI'

export const HomeComponent = () => {
	// const  recipes = GetRecipes().stateData.results
	// const loading = GetRecipes().loading

	return (
		<Container>
			<div className='main'>
				<div className='top'>
					<h4>Recipeez</h4>
					<ion-icon name="bonfire-outline"></ion-icon>
				</div>
				<SearchBar />
				<RecipesList recipes={recipes} loading={false} />
			</div>
		</Container>
	)
}


export const Loading = () => {
	return (
		<section className='loading'>
			<p> Loading ... </p>
		</section>
	)
}
