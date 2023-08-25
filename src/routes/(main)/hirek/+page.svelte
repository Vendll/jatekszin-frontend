<script lang="ts">
	import bannerImage from '$lib/assets/banner.jpg';
	import HirCard from '$components/HirCard.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	let commonPage: any;
	export let data: PageData;
	const hirek = data.props.hirek.docs;
	import { Paginator } from '@skeletonlabs/skeleton';
	const source = hirek;
	let pagePagination = {
		offset: 0,
		limit: 9,
		size: source.length,
		amounts: [9, 18, 27]
	};

	$: paginatedSource = source.slice(
		pagePagination.offset * pagePagination.limit, // start
		pagePagination.offset * pagePagination.limit + pagePagination.limit // end
	);
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
			Hírek
		</h1>
	</div>
</div>

<div class="bg-gray-50 px-6 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
	<div class="relative mx-auto max-w-7xl">
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each paginatedSource as hir}
				<HirCard
					desc={hir.description}
					link={hir.slug}
					img={hir.thumbnail.sizes.medium.url}
					title={hir.title}
				/>
			{/each}
		</div>
	</div>

	<div class="max-w-7xl mx-auto">
		<Paginator
			class="mt-12"
			bind:settings={pagePagination}
			showFirstLastButtons={false}
			showNumerals
			maxNumerals={1}
			amountText=""
			select="variant-ringed-primary rounded-md focus:outline-none focus:ring-primary-500 border-0 py-1.5 pl-3 pr-7"
			controlVariant="variant-ringed-primary"
			controlSeparator="rounded-md"
			active="variant-soft-primary rounded-md"
			showPreviousNextButtons={true}
		/>
	</div>
</div>
