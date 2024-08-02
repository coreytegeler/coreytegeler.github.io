export default function Header() {
	return(
		<header id="header">
			<div className="flex">
				<div className="column">
					<h1>
						<em>Corey Tegeler</em>
					</h1>
					<p>
						<span className="screen-hide">
							<a href="coreytegeler.com">coreytegeler.com</a>;&nbsp;
						</span>
						<a href="mailto:email@coreytegeler.com">email@coreytegeler.com</a>
					</p>
				</div>
				<div className="column">
					<p>
						A New York&ndash;based web developer for public-interest works in academia, non-profits, the arts, and journalism.
					</p>
				</div>
			</div>
		</header>
	)
}