<script lang="ts">
	import Spacer from './Spacer.svelte';
	import Tile from './Tile.svelte';

	export let rowIndex: number;
	// create list of `rowIndex` spacers to prepend before the tiles

	// create list of 11 unique tile IDs
</script>

<div class="flex flex-row">
	<!-- Create a spacer with size according to the current row -->
	<Spacer size={rowIndex} />

	<!-- Create 11 tiles, each with a unique x, y coordinate -->
	{#each Array.from({ length: 11 }, (_, i) => i) as index}
		<Tile x={index} y={rowIndex}/>
	{/each}
</div>
