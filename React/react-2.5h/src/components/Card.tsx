import { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
}

export function Card(props: CardProps) {
	const { children: children } = props;
	return (
		<div className="card" style={{ width: "30em" }}>
			{children}
			{/* <CardBody CardTitle={Title} CardText={Text} /> */}
		</div>
	);
}

interface CardBodyProps {
	CardTitle: string,
	CardText: string
}

export function CardBody(props: CardBodyProps) {
	const { CardTitle, CardText }  = props;
	return (
		<div className="card-body">
			<h5 className="card-title">
				{CardTitle}
			</h5>
			<p className="card-text">
				{CardText}
			</p>
			<a href="#" className="btn btn-primary">
				Go somewhere
			</a>
		</div>
	);
}
