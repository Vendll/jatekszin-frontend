<script lang="ts">
	import CalendarJs from '$components/CalendarJS.svelte';
	import bannerImage from '$lib/assets/banner.jpg';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	let commonPage: any;
	export let data: PageData;
	console.log(data);

	const musor = data.props.musor.docs;
</script>

<svelte:head>
	<title>{commonPage?.meta.title}</title>
	<meta name="description" content={commonPage?.meta.description} />
	<meta property="og:title" content={commonPage?.meta.title} />
	<meta property="og:description" content={commonPage?.meta.description} />
	<meta property="og:image" content={commonPage?.banner.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={commonPage?.date} />
	<meta property="article:modified_time" content={commonPage?.date} />
</svelte:head>

<div class="relative bg-indigo-800">
	<div class="absolute inset-0">
		<img class="h-full w-full object-cover" src={bannerImage} alt="" />
		<div class="absolute inset-0 bg-slate-800 opacity-20 mix-blend-multiply" aria-hidden="true" />
	</div>
	<div class="relative mx-auto text-center max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
		<h1
			class="text-5xl font-heavitas text-error-500 text-white-stroke tracking-tigh sm:text-5xl lg:text-5xl"
		>
			Műsor
		</h1>
	</div>
</div>

<div class="mx-auto xl:max-w-7xl px-6 mt-16">
	<CalendarJs {musor} />
</div>
