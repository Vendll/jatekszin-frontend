<script lang="ts">
	import KiemeltCard from './KiemeltCard.svelte';
	export let kiemelt: any;
	let scrolling = false;
	let timeout: any;
</script>

<div class="w-full bg-surface-300 mx-auto px-6 my-16 overflow-hidden">
	<h1 class="font-heavitas !font-normal text-center text-4xl mb-6">Kiemelt előadások</h1>
	<ul
		on:touchstart={() => {
			scrolling = true;
		}}
		on:touchend={() => {
			scrolling = false;
		}}
		class="flex snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-scroll"
	>
		{#each kiemelt as ke (ke.value.id)}
			<KiemeltCard {scrolling} {ke} />
		{/each}
	</ul>
</div>
