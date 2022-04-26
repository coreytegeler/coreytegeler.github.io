import NestedList from "./NestedList";

export default function ListItem({ data }) {

	const roles = ["developer", "designer", "contributor"].filter((role) => data[role]);

	return (
		<li>

			{data.url && !data.url_nice ?
				<a href={data.url} target="_blank" rel="noreferrer">
					{data.children ? data.name : <strong>{data.name}</strong>}
				</a>
			: data.children ? data.name : <strong>{data.name}</strong>}

			{data.new ?
				<>&nbsp;<small style={{color:"red"}}>NEW</small></>
			: null}

			{roles.length ?
				<strong
					title={`Role${roles.length > 1 ? "s" : ""}: ${roles.join("; ")}`}
					className="print-hide">
					{roles.map((role) => {
						let str = ""
						if(role === "developer") str += " *";
						if(role === "designer") str += " ‡";
						if(role === "contributor") str += " §";
						return str;
					})}
				</strong>
			: null}

			{data.url_nice ? 
				<div>
					<strong>
						{/*<small>View at </small>*/}
						{data.url ? 
							<a href={data.url} target="_blank" rel="noreferrer">
								<small dangerouslySetInnerHTML={{
									__html: data.url_nice
								}} />
							</a>
						: <small><s dangerouslySetInnerHTML={{
								__html: data.url_nice
							}} /></small>}
						{data.url_note ? 
							<small dangerouslySetInnerHTML={{
								__html: `&nbsp;(${data.url_note})`
							}} />
						: null}
					</strong>
				</div>
			: null}

			{data.credits ?
				<div className="print-hide">
					<small dangerouslySetInnerHTML={{
						__html: data.credits
					}} />
				</div>
			: null}


			{data.summary ?
				<div>
					<small dangerouslySetInnerHTML={{
						__html: data.summary
					}} />
				</div>
			: null}

			{data.summary_long ?
				<div>
					<details>
						<summary>
							<small>More info</small>
							<small>Close</small>
						</summary>
						<small dangerouslySetInnerHTML={{
							__html: data.summary_long
						}} />
					</details>
				</div>
			: null}

			{data.children ? <NestedList>{data.children}</NestedList> : null}

		</li>
	);
}