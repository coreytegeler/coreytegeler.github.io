import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

import data from "../data/data";

export const getStaticProps = async () => {
	return {
		props: {
			data: data,
		}
	}
}

export default function Home({ data }) {

	return (
		<div id="page">
			<Header />
			<main>
				<div className="flex">
					<div className="column scroll">
						<Section
							title="Collaborations"
							slug="collaborations"
							data={data.collaborations}
							blurb={<small>Projects rooted in creative partnerships with my collaborators.</small>}
							className="print-hide"
						/>
						<Section
							title="Commissioned projects"
							printTitle="Selected clients"
							slug="commissions"
							data={data.commissions}
							blurb={
								<>
									<div>
										<small>
											Projects commissioned by clients or through partnering studios; sorted alphabetically by client.
										</small>
									</div>
									<br />
									<div>
										<small>My role in each project is notated according to these symbols:</small>
									</div>
									<div>
										<ul className="inline">
											<li><strong>*</strong> <small>= Developer;</small>&nbsp;</li>
											<li><strong>‡</strong> <small>= Designer;</small>&nbsp;</li>
											<li><strong>§</strong> <small>= Contributor</small>&nbsp;</li>
										</ul>
									</div>
								</>
							}
						/>
					</div>
					<div className="column scroll">
						<Section
							title="Non-profit positions"
							slug="nonprofit"
							data={data.nonprofit}
							blurb=""
						/>

						<Section
							title="Teaching"
							slug="teaching"
							data={data.teaching}
							blurb=""
						/>

						<Section
							title="Workshop facilitation"
							slug="workshops"
							data={data.workshops}
							blurb=""
						/>
					</div>
				</div>
			</main>						
		</div>
	)
}
