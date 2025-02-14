import { useEffect, useRef, useState } from "react";
import { useMovies } from "./hooks/useMovies.js";
import { Movie } from "./components/movies.jsx";

function useSearch() {
	const [search, updateSearch] = useState('')
	const [error, setError] = useState(null);
	const isFirstInput = useRef(true)

	useEffect(() => {

		if(isFirstInput.current) {
			isFirstInput.current = search ==''
			return
		}

		if ( search == '') {
			setError('No se puede buscar una pelicula vacia')
			return
		}

		setError(null)

	}, [search])

	return { search, updateSearch, error }

}

export default function App() {
	const inputRef = useRef()
	const { movies } = useMovies()
	const { search, updateSearch, error } = useSearch()

	const handlerSubmit = (event) => {
		event.preventDefault();
	}

	const handlerChange = (event) => {
		updateSearch(event.target.value)
	}

	return (
		<>
			<header>
				<h1>Busca movie</h1>
				<form action="" className="from" onSubmit={handlerSubmit}>
					<input onChange={handlerChange} value={search} ref={inputRef} name="hola" placeholder="Avengers, Star Wars..." type="text" />
					<button type="submit">Buscar</button>
				</form>
				{error && <p style={{color: 'red'}}>{error}</p>}
			</header>

			<main>
				<Movie movies={ movies } />
			</main>
		</>
	);

}
