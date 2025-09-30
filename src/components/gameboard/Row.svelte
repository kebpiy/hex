<script lang="ts">
	import Spacer from './Spacer.svelte';
	import Tile from './Tile.svelte';

	export let rowIndex: number;
	// create list of `rowIndex` spacers to prepend before the tiles

	// create list of 11 unique tile IDs
</script>

<div>
	{rowIndex}
	<Spacer />
	<Tile />
</div>
