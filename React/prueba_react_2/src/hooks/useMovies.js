import withResults from "../example/return.json";
import withoutResults from "../example/error.json";
import { useState } from "react";

export function useMovies ({ search }) {
	const [responseMovies, setresponseMovies ] = useState([]);

	const movies = responseMovies.Search;

	const mappedmovies = movies?.map(movie => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster
	}))

	const getMovies = () => {
		if (search) {
			setresponseMovies(withResults)
		} else {
			setresponseMovies(withoutResults)
		}
	}

	return { movies : mappedmovies, getMovies }

}