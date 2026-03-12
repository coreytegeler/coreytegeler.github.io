<script>
	import NestedList from '$lib/components/NestedList.svelte'

	export let item

	const roles = [
		"developer",
		"designer",
		"contributor"
	].filter(role =>
		item[role]
	)
</script>

<li>
	{#if item.url && !item.url_nice}
		<a href={item.url} target="_blank" rel="noreferrer">
			{#if item.children}
				{item.name}
			{:else}
				<strong>{item.name}</strong>
			{/if}
		</a>
	{:else}
		{#if item.children}
			{item.name}
		{:else}
			<strong>{item.name}</strong>
		{/if}
	{/if}
	{#if item.new}
		&nbsp;<small class="new">NEW</small>
	{/if}
	{#if roles.length}
		
		{#each roles as role}
			<span>
				<strong
					title={role === "developer" ?
							"* = Developer"
						: role === "designer" ?
							"‡ = Designer"
						: role === "contributor" ?
							"§ = Contributing developer"
						: null
					}
					class="print-hide"
				>
					{#if role === "developer"}
						*
					{:else if role === "designer"}
						&nbsp;‡
					{:else if role === "contributor"}
						&nbsp;§
					{/if}
				</strong>
			</span>
		{/each}
	{/if}
	{#if item.url_nice}
		<div>
			<strong>
				{#if item.url}
					<a href={item.url} target="_blank" rel="noreferrer">
						<small>
							{@html item.url_nice}
						</small>
					</a>
				{:else}
					<small>
						<s>
							{@html item.url_nice}
						</s>
					</small>
				{/if}
				{#if item.url_note}
					<small>
						&nbsp;({@html item.url_note})
					</small>
				{/if}
			</strong>
		</div>
	{/if}
	{#if item.credits}
		<div class="print-hide">
			<small>
				{@html item.credits}
			</small>
		</div>
	{/if}
	{#if item.summary}
		<div>
			<small>
				{@html item.summary}
			</small>
		</div>
	{/if}
	{#if item.summary_long}
		<div>
			<details>
				<summary>
					<small>More info</small>
					<small>Close</small>
				</summary>
				<small>
					{@html item.summary_long}
				</small>
			</details>
		</div>
	{/if}
	{#if item.children}
		<NestedList items={item.children} />
	{/if}
</li>