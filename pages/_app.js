import { useEffect, useMemo, useState, useRef } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import "../styles/styles.scss";
import "../styles/print.scss";

const BG_COLORS = [
	"#ebc7eb",
	"thistle",
	"#bdbed6",
	"lavender",
	"lightblue",
	"aliceblue",
	"palegoldenrod",
	"cornsilk",
	"blanchedalmond",
	"papayawhip",
	"bisque",
	"mistyrose",
	"peachpuff",
	"#ffd700"
]

const BG_TIMEOUT = 30000;

function App({ Component, pageProps }) {
	const [colorIndex, setColorIndex] = useState(0);

	const colors = useMemo(() =>
		BG_COLORS.sort(() => Math.random() - 0.5)
	, []);
	
	useEffect(() => {
		let index = 0;
		function colorUpdate() {
			index = index === colors.length - 1 ? 0 : index + 1;
			setColorIndex(index);
			console.log(`Background changed to "${colors[index]}"`);
		};
		colorUpdate();
		const colorTimer = setInterval(colorUpdate, BG_TIMEOUT);
		return () => clearInterval(colorTimer);
	}, [colors]);

  return (
  	<HelmetProvider>
  		<Helmet>
  			<title>coreytegeler.com</title>
			<meta name="description" content="" />
			<meta property="og:title" content="Corey Tegeler" />
			<meta property="og:description" content="" />
			<meta property="og:url" content="https://coreytegeler.com/" />
			<meta property="og:type" content="website" />
			<link rel="icon" href="favicon.png" />
			<body style={`background-color: ${colors[colorIndex]}`} />
  		</Helmet>
	  	<Component {...pageProps} />
  	</HelmetProvider>
  )
}

export default App
