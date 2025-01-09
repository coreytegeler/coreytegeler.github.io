<script>
	import ListItem from '$lib/components/ListItem.svelte'

	export let items = []
</script>

<ul>
	{#each items as item}
		<ListItem
			item={item}
		/>
	{/each}
</ul>