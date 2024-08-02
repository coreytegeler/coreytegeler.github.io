import ListItem from "./ListItem";

export default function Section({title, slug, blurb, data, className, printTitle}) {
	return(
		<section id={slug} className={className}>

			<header>
				{printTitle ?
					<>
						<h2 className="print-hide">{title}</h2>
						<h2 className="screen-hide">{printTitle}</h2>
					</>
				: <h2>{title}</h2>}
			</header>

			{blurb ?
				<aside className="print-hide">
					{blurb}
				</aside>
			: null}

			<ul className="nested">
				{data.filter(row => !row.hidden).map((row, i) => <ListItem key={i} data={row} />)}
			</ul>

		</section>
	);

}