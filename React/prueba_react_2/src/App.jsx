import responseMovie from "./example/return.json";
import noResponseMovie from "./example/error.json";

import { Movie } from "./components/movies.jsx";

export default function App() {
	const movies = responseMovie.Search;

	return (
		<>
			<header>
				<h1>Busca movie</h1>
				<form action="" className="from">
					<input placeholder="Avengers, Star Wars..." type="text" />
					<button type="submit">Buscar</button>
				</form>
			</header>

			<main>
				<Movie movies={movies} />
			</main>
		</>
	);

}
