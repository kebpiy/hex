<script lang="ts">
    import Row from './gameboard/Row.svelte';
    let rowIndices: { rowIndex: number }[] = [];
    for (let i = 0; i < 11; i++) {
        rowIndices.push({ rowIndex: i });
    }
</script>

<div id="game" class="box-border flex flex-col border border-[#D9D9D9] p-5 -space-y-2 overflow-visible">
    {#each rowIndices as rowIndex (rowIndex)}
        <Row {...rowIndex} />
    {/each}
</div>
