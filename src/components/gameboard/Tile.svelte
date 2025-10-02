<script lang="ts">
    export let x: number;
    export let y: number;
</script>

<!-- draw hexagon with id (x, y) -->
<svg id="tile_{y}_{x}" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <!-- Tile -->
  <path fill="#D9D9D9" d="M26.5 3.17543C29.9034 1.21047 34.0966 1.21047 37.5 3.17543L54.2128 12.8246C57.6162 14.7895 59.7128 18.4209 59.7128 22.3509V41.6491C59.7128 45.5791 57.6162 49.2105 54.2128 51.1754L37.5 60.8246C34.0966 62.7895 29.9034 62.7895 26.5 60.8246L9.78719 51.1754C6.38378 49.2105 4.28719 45.5791 4.28719 41.6491V22.3509C4.28719 18.4209 6.38378 14.7895 9.78719 12.8246L26.5 3.17543Z"/>
  

  <!-- draw left if x=0 -->
  {#if x === 0}
    <path d="M32 64L4.5 48V16" stroke="#FF0000" stroke-width="6" stroke-linecap="round"/>
  {/if}

  <!-- draw right if x=10 -->
  {#if x === 10}
    <path d="M32 3L59.5 19V51" stroke="#FF0000" stroke-width="6" stroke-linecap="round"/>
  {/if}

  <!-- draw top if y=0 -->
  {#if y === 0}
    <path d="M4 20L31.5 4L59 20" stroke="#0000FF" stroke-width="6" stroke-linecap="round"/>
  {/if}

  <!-- draw bottom if y=10 -->
  {#if y === 10}
    <path d="M4 48L31.5 64L59 48" stroke="#0000FF" stroke-width="6" stroke-linecap="round"/>
  {/if}

</svg>