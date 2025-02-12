import responseMovie from "../example/return.json";
import noResponseMovie from "../example/error.json";

export function useMovies () {
	const movies = responseMovie.Search;

	const mappedmovies = movies?.map(movie => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster
	}))

	return { movies : mappedmovies }

}