import { useState } from "react";
import { Card, CardBody } from "./components/card";
import { List } from "./components/List";

export default function App() {

	const [world] = useState("mundo");
	const [list] = useState(["list 1", "list 2", "list 3"]);

	return (
		<>
			<h1>Hola {world}</h1>
			<Card>
				<CardBody CardText="Texto" CardTitle="Titulo" />
				<List list={list} />
			</Card>
		</>
	)
}