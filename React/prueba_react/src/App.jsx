import { useEffect, useState } from "react";

const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact";
const CAT_ENDPOINT_IMGP = "https://cataas.com"
// const CAT_ENDPOINT_IMGS = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export default function App() {
	const [fact, setFact] = useState("fact");
	const [imageURL, setimageURL] = useState("");

	useEffect(() => {

		fetch(CAT_ENDPOINT_FACT)

			.then((res) => res.json())
			.then((data) => {

				const { fact } = data;
				setFact(data.fact);
				const firstWord = fact.split(" ", 3)[0];

				fetch(`https://cataas.com/cat?json=true`)
					.then((res) => res.json())
					.then((response) => {
						const { _id } = response
						setimageURL(`${_id}/says/${firstWord}?fontSize=50&fontColor=red`)
					});

			});

	}, []);

	return (
		<>
			<h1>App de gatitos</h1>
			{fact && <p>{fact}</p>}
			{imageURL && <img src={`${CAT_ENDPOINT_IMGP}/cat/${imageURL}`} alt="Cat image with a word" /> }
		</>
	);
}
