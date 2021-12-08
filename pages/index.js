import { useEffect, useState, useRef } from "react";
import Head from "next/head";
// import Image from "next/image";
import ListItem from "../components/ListItem";
import NestedList from "../components/NestedList";
import styles from "../styles/Home.module.css";
import data from "../data/data";

export default function Home() {
	const colors = [
		"aliceblue","antiquewhite","aqua","aquamarine","bisque","blanchedalmond","burlywood","cadetblue","coral","cornflowerblue","cornsilk","darkgoldenrod","darkkhaki","darksalmon","darkturquoise","deepskyblue","floralwhite","gold","goldenrod","honeydew","ivory","khaki","lavender","lemonchiffon","lightblue","lightcoral","lightgray","lightgreen","lightgrey","lightseagreen","lightskyblue","lightslategray","lightyellow","lime","mediumaquamarine","mediumseagreen","mediumspringgreen","mintcream","mistyrose","oldlace","orchid","palegoldenrod","palevioletred","papayawhip","peachpuff","plum","powderblue","salmon","seashell","silver","snow","tan","thistle","violet","wheat","white","yellowgreen"
	].sort(() => Math.random() - 0.5);

	const [colorIndex, setColorIndex] = useState(0);
	const [color, setColor] = useState(null);
	const COLOR_INTERVAL = 30000;
	
	useEffect(() => {
		const colorUpdate = () => {
			const newIndex = colorIndex === colors.length -1 ? 0 : colorIndex += 1,
						newColor = colors[newIndex];
			setColorIndex(newIndex);
			setColor(newColor);
			console.log(`Background changed to "${newColor}"`);
		}
		const colorTimer = setInterval(colorUpdate, COLOR_INTERVAL);
		colorUpdate();
		return () => clearInterval(colorTimer);
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>coreytegeler.com</title>
				<meta name="description" content="" />
				<meta property="og:title" content="Corey Tegeler" />
				<meta property="og:description" content="" />
				<meta property="og:url" content="https://coreytegeler.com/" />
				<meta property="og:type" content="website" />
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>

			{/*<main className={styles.main}>
				<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
			</main>*/}

			<div id="filter" className="print-hide" style={{ backgroundColor: color }}></div>

			<main>

				<header id="header">
					<div className="flex">
						<div className="column">
							<h2>
								<em>Corey Tegeler</em>
							</h2>
							<br/><br/>
							<div>
								<a href="mailto:coreytegeler@gmail.com">coreytegeler@gmail.com</a>
							</div>
						</div>
						<div className="column">
							Web developer and desiger, primarily working with in the arts, academia, and the non-profit and public sectors.
						</div>
					</div>
				</header>

				<div className="flex">
					<div className="column scroll">

						<section id="collaborations">

							<header>
								<h2>Collaborations</h2>
							</header>

							<aside>
								<div>
									<small>Projects rooted in creative partnerships.</small>
								</div>
							</aside>

							<ul className="nested">
								{data.collaborations.map((row, i) => <ListItem key={i} data={row} />)}
							</ul>

						</section>
				
						<section id="commissions">

							<header>
								<h2>Commissioned projects</h2>
							</header>

							<aside>
								<div>
									<small>Projects commissioned by clients, sorted alphabetically.</small>
								</div>
								<br/>
								<div className="print-hide">
									<small>My role in each project is notated according to these symbols:</small>
								</div>
								<div className="print-hide">
									<ul className="inline">
										<li><strong>*</strong> <small>= Developer;</small>&nbsp;</li>
										<li><strong>‡</strong> <small>= Designer;</small>&nbsp;</li>
										<li><strong>§</strong> <small>= Contributor</small>&nbsp;</li>
									</ul>
								</div>
							</aside>

							<ul className="nested">
								{data.commissions.map((row, i) => <ListItem key={i} data={row} />)}
							</ul>

						</section>

					</div>


					<div className="column scroll">

						<section id="clients">

							<header>
								<h2>Non-profit positions</h2>
							</header>

							<ul className="nested">
								{data.nonprofit.map((row, i) => <ListItem key={i} data={row} />)}
							</ul>
						</section>

						<section id="teaching">

							<header>
								<h2>Teaching</h2>
							</header>

							<ul className="nested">
								{data.teaching.map((row, i) => <ListItem key={i} data={row} />)}
							</ul>
						</section>

						<section id="workshops">

							<header>
								<h2>Workshop facilitation</h2>
							</header>

							<ul className="nested">
								{data.workshops.map((row, i) => <ListItem key={i} data={row} />)}
							</ul>
						</section>

					</div>

				</div>

			</main>
						
		</div>
	)
}
