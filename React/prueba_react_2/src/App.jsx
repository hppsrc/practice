import { useEffect, useRef, useState } from "react";
import { Movie } from "./components/movies.jsx";
import { useMovies } from "./hooks/useMovies.js";

export default function App() {
	const { movies } = useMovies()
	const inputRef = useRef()
	const [query, setQuery] = useState('');
	const [error, setError] = useState(null);

	const handlerSubmit = (event) => {
		event.preventDefault();
	}

	// console.log("render");

	const handlerChange = (event) => {
		const newQuery = event.target.value
		if (newQuery.startsWith(' ')) return
		setQuery(event.target.value)
	}

	useEffect(() => {

		if ( query == '') {
			setError('No se puede buscar una pelicula vacia')
			return
		}

		setError(null)

	}, [query])

	return (
		<>
			<header>
				<h1>Busca movie</h1>
				<form action="" className="from" onSubmit={handlerSubmit}>
					<input  onChange={handlerChange} value={query} ref={inputRef} name="hola" placeholder="Avengers, Star Wars..." type="text" />
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
