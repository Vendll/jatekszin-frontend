<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import Informaciok from '$components/Informaciok.svelte';
	import Szereplok from '$components/Szereplok.svelte';
	import Trailer from '$components/Trailer.svelte';
	import Galeria from '$components/Galeria.svelte';
	import Tamogatoink from '$components/Tamogatoink.svelte';
	import Footer from '$components/Footer.svelte';
	import { onMount } from 'svelte';
	let visibe = false;
	onMount(() => {
		console.log('mounted');
		visibe = true;
	});
</script>

{#if visibe}
	<div class="space-y-16">
		<Hero />
		<div class="max-w-7xl mx-auto space-y-16">
			<Informaciok />
			<Szereplok />
			<Trailer />
			<Galeria />
			<Tamogatoink />
		</div>
		<Footer />
	</div>
{/if}
