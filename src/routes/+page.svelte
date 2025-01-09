<script>
	import { onMount } from 'svelte'
	import data from '$lib/data/site.json'
	import Header from '$lib/components/Header.svelte'
	import Section from '$lib/components/Section.svelte'
	import '$src/globals.css'
	import '$src/styles.css'
	import '$src/print.css'

	const BG_COLORS = [
		'#ebc7eb',
		'thistle',
		'#bdbed6',
		'lavender',
		'lightblue',
		'aliceblue',
		'palegoldenrod',
		'cornsilk',
		'blanchedalmond',
		'papayawhip',
		'bisque',
		'mistyrose',
		'peachpuff',
		'#ffd700'
	]

	const BG_TIMEOUT = 30000;

	let colorIndex = 0;
	
	onMount(() => {
		const colors = BG_COLORS.sort(() => Math.random() - 0.5);
		let index = 0;
		function colorUpdate() {
			index = index === colors.length - 1 ? 0 : index + 1;
			colorIndex = index;
			document.querySelector("body").style.backgroundColor = colors[index];
			console.log(`Background changed to "${colors[index]}"`);
		};
		colorUpdate();
		const colorTimer = setInterval(colorUpdate, BG_TIMEOUT);
		return () => clearInterval(colorTimer);
	}, []);

</script>

<main>
	<Header />
	<div class="flex">
		<div class="column scroll">
			<Section
				title="Commissioned projects"
				printTitle="Selected clients"
				slug="commissions"
				items={data.commissions}
			>
				<div>
					<div>
						<small>
							Projects commissioned by clients or through partnering studios; sorted alphabetically by client.
						</small>
					</div>
					<br />
					<div>
						<small>My role in each project is notated with these symbols:</small>
					</div>
					<div>
						<ul class="inline">
							<li><strong>*</strong> <small>= Developer;</small>&nbsp;</li>
							<li><strong>‡</strong> <small>= Designer;</small>&nbsp;</li>
							<li><strong>§</strong> <small>= Contributing developer</small>&nbsp;</li>
						</ul>
					</div>
				</div>
			</Section>
			<Section
				title="Collaborations"
				slug="collaborations"
				items={data.collaborations}
				className="print-hide"
			>
				<small>Projects rooted in creative partnerships with my collaborators.</small>
			</Section>
		</div>
		<div class="column scroll">
			<Section
				title="Non-profit positions"
				slug="nonprofit"
				items={data.nonprofit}
			/>
	
			<Section
				title="Teaching"
				slug="teaching"
				items={data.teaching}
			/>
	
			<Section
				title="Workshop facilitation"
				slug="workshops"
				items={data.workshops}
			/>
		</div>
</main>