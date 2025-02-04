import { useEffect, useState } from "react";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";
const CAT_ENDPOINT_IMGP = "https://cataas.com"

export default function App() {
	const [fact, setFact] = useState("fact");
	const [imageURL, setimageURL] = useState("");

	const getRandomFact = () => {

		fetch(CAT_ENDPOINT_FACT)

			.then((res) => {
				if (!res.ok) { return "Error en el fetch" }
				return res.json()
			})
			.then((data) => {

				const { fact } = data;
				setFact(data.fact);
				const firstWord = fact.split(' ', 3).join(' ');

				fetch(`https://cataas.com/cat?json=true`)
					.then((res) => res.json())
					.then((response) => {
						const { _id } = response
						setimageURL(`${_id}/says/${firstWord}?fontSize=50&fontColor=red`)
					});
			});
	}

	useEffect(getRandomFact, []);

	const handlerClick = () => {getRandomFact()}

	return (
		<>
			<h1>App de gatitos</h1>
			{fact && <p>{fact}</p>}
			<button onClick={handlerClick}>New Fact</button>
			{imageURL && <img src={`${CAT_ENDPOINT_IMGP}/cat/${imageURL}`} alt="Cat image with a word" /> }
		</>
	);
}
