<script lang="ts">
	import KiemeltCard from './KiemeltCard.svelte';
</script>

<div class="w-full mx-auto px-6 my-16 overflow-hidden">
	<ul class="flex snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-scroll">
		{#each Array(10) as _, i}
			<KiemeltCard />
		{/each}
	</ul>
</div>
