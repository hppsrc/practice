export function RenderMovies({ movies }) {
	return (
		<ul>
			{movies.map(movie => (
				<li key={movie.imdbID}>
					<img src={movie.Poster} alt="" srcset="" />
					<h3>{movie.Title}</h3>
					<h6>{movie.Year}</h6>
				</li>
			))}
		</ul>
	);
}

export function noMovie() {
	return (
		<h3>No hay peliculas disponibles.</h3>
	);
}

export function Movie({movies}) {
	const hasMovies = movies?.length > 0;
	return (
		hasMovies ? <RenderMovies movies={movies}/> : <noMovie />
	)
}