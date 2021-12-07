import ListItem from "./ListItem";

export default function NestedList({ items }) {
	return (
		<ul>
			{items.map((row, i) => {
				return(
					<ListItem
						key={i}
						data={row}
					/>
				);
			})}
		</ul>
	);
}