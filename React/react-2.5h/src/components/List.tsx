interface ListProps {
	list: string[];
}

export function List(props: ListProps) {
	const { list: list } = props;
	return (
		<ul className="list-group">
			{list.map((li, index) => (
				<li
					className="list-group-item"
					key={index}
					onClick={() => console.log(li)}
					style={{cursor: "pointer"}}
				>
					{li}
				</li>
			))}
		</ul>
	);
}

{
	/* <li className="list-group-item">An item</li>
			<li className="list-group-item">A second item</li>
			<li className="list-group-item">A third item</li>
			<li className="list-group-item">A fourth item</li>
			<li className="list-group-item">And a fifth one</li> */
}
