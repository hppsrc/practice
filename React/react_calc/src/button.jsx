export default function Button( { text, color, onClick }) {
	return <div style={{backgroundColor:color}} onClick={onClick} className="Button">{text}</div>;
}
