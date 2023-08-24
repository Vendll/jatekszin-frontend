<script lang="ts">
	import KiemeltCard from './KiemeltCard.svelte';
	export let kiemelt: any;
</script>

<div class="w-full bg-surface-300 mx-auto px-6 my-16 overflow-hidden">
	<ul class="flex snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-scroll">
		{#each kiemelt as ke (ke.value.id)}
			<KiemeltCard {ke} />
		{/each}
	</ul>
</div>
