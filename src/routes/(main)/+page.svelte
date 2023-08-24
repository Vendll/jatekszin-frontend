<script lang="ts">
	import MainHero from '$components/MainHero.svelte';
	import Kiemelt from '$components/Kiemelt.svelte';
	import HirCard from '$components/HirCard.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	let commonPage: any;
	export let data: PageData;
	const kiemelt = data.props.kezdolap.kiemelt;
	const kiemeltHirek = data.props.kiemeltHirek.docs;
	const heroes = data.props.kezdolap.heroes;
	const kezdolap = data.props.kezdolap;
</script>

<svelte:head>
	<title>{kezdolap.meta.title}</title>
	<meta name="description" content={kezdolap.meta.description} />
	<meta property="og:title" content={kezdolap.meta.title} />
	<meta property="og:description" content={kezdolap.meta.description} />
	<meta property="og:image" content={kezdolap.meta.image.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={kezdolap.date} />
	<meta property="article:modified_time" content={kezdolap.date} />
</svelte:head>

<MainHero {heroes} />
<Kiemelt {kiemelt} />

<div class="bg-gray-50 px-6 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
	<div class="relative mx-auto max-w-7xl">
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each kiemeltHirek as kiemeltHir (kiemeltHir.id)}
				<HirCard
					desc={kiemeltHir.description}
					link={kiemeltHir.slug}
					img={kiemeltHir.thumbnail.sizes.medium.url}
					title={kiemeltHir.title}
				/>
			{/each}
		</div>
	</div>
</div>
