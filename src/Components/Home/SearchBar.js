import {
  useState
} from "react"

// Assets
import '../../Styles/home.css'

export function SearchBar(){
  const [ query, setQuery ] = useState("")

  return (
    <div className='search-bar'>
      <h1>Search Recipes </h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <label className='label'>
          <input
            name="query"
            type="text"
            value={query}
            className='form-input input'
            placeholder="Search for ingredient / nutrients"
            onChange={(e) => { e.preventDefault(); setQuery(e.target.value)}}
            />
          <button> Search </button>
        </label>
      </form>
    </div>
  )
}