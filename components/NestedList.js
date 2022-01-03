import ListItem from "./ListItem";

export default function NestedList({ children }) {
	return (
		<ul>
			{children ? children.map((child, i) => {
				return(
					<ListItem
						key={i}
						data={child}
					/>
				);
			}) : null}
		</ul>
	);
}