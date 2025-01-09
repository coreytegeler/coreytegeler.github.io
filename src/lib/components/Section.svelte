<script>
	import ListItem from "$lib/components/ListItem.svelte";

	export let title
	export let slug
	export let items
	export let className
	export let printTitle
</script>

<section id={slug} class={className}>

	<header>
		{#if printTitle}
			<h2 class="print-hide">{title}</h2>
			<h2 class="screen-hide">{printTitle}</h2>
		{:else}
			<h2>{title}</h2>
		{/if}
	</header>

	<aside class="print-hide">
		<slot />
	</aside>

	<ul class="nested">
		{#each items?.filter(row => !row.hidden) as item}
			<ListItem item={item} />
		{/each}
	</ul>

</section>