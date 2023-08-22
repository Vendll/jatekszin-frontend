<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import Informaciok from '$components/Informaciok.svelte';
	import Szereplok from '$components/Szereplok.svelte';
	import Trailer from '$components/Trailer.svelte';
	import Galeria from '$components/Galeria.svelte';
	import Tamogatoink from '$components/Tamogatoink.svelte';
	import Footer from '$components/Footer.svelte';
	import TopButton from '$components/TopButton.svelte';
</script>

<div class="">
	<Hero mainPage={false} />
	<div class="max-w-7xl mx-auto space-y-16">
		<Informaciok />
		<Szereplok />
		<Trailer />
		<Galeria />
		<Tamogatoink />
	</div>
	<Footer />
	<TopButton />
</div>
