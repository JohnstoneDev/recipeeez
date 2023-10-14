import { Routes, Route } from 'react-router-dom'

// Local imports should come last
import { Home } from '../Pages/Home/Home'
import { RecipePage } from '../Pages/Home/Recipe'


export const Paths = () => {
	return (
		<div>
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route path="/recipes/:id" element={<RecipePage />} />
			</Routes>
		</div>
	)
}