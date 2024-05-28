<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import Informaciok from '$components/Informaciok.svelte';
	import Szereplok from '$components/Szereplok.svelte';
	import Trailer from '$components/Trailer.svelte';
	import Galeria from '$components/Galeria.svelte';
	import Tamogatoink from '$components/Tamogatoink.svelte';
	import Szinlap from '$components/Szinlap.svelte';
	import Footer from '$components/Footer.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	export let data: PageData;
	const eloadas = data.props.eloadasok.docs[0];

	const partners = data.props.partners.docs;

	let visibe = false;
</script>

<svelte:head>
	<title>{eloadas?.meta.title}</title>
	<meta name="description" content={eloadas?.meta.description} />
	<meta property="og:title" content={eloadas?.meta.title} />
	<meta property="og:description" content={eloadas?.meta.description} />
	<meta property="og:image" content={eloadas?.meta.image.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={eloadas?.date} />
	<meta property="article:modified_time" content={eloadas?.date} />
</svelte:head>

<div class="space-y-16">
	<Hero {eloadas} />
	<div class="max-w-7xl mx-auto space-y-16">
		<Informaciok {eloadas} />
		<Szereplok {eloadas} />

		{#if eloadas?.video}
			<Trailer {eloadas} />
		{/if}

		{#if eloadas.otherVideos}
			{#each eloadas.otherVideos as video}
				<Trailer title={true} eloadas={video} />
			{/each}
		{/if}

		<Galeria galleryID="galery" {eloadas} />
		<Tamogatoink {partners} />
	</div>
	<Footer />
</div>
