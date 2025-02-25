export function RenderMovies({ movies }) {
	return (
		<ul className='movies' >
			{movies.map(movie => (
				<li className='movie' key={movie.id}>
					<img src={movie.poster} />
					<h3>{movie.title}</h3>
					<h6>{movie.year}</h6>
				</li>
			))}
		</ul>
	);
}

export function NoMovie() {
	return (
		<h3>No hay peliculas disponibles.</h3>
	);
}

export function Movie({movies}) {
	const hasMovies = movies?.length > 0;
	return (
		hasMovies ? <RenderMovies movies={movies}/> : <NoMovie />
	)
}