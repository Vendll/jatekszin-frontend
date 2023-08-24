<script lang="ts">
	import bannerImage from '$lib/assets/banner.jpg';
	import type { PageData } from './$types';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	let commonPage: any;
	export let data: PageData;
	const pageMeta = data.props.pageMeta;
	const eloadasok = data.props.eloadasok.docs;
</script>

<svelte:head>
	<title>{pageMeta?.meta.title}</title>
	<meta name="description" content={pageMeta?.meta.description} />
	<meta property="og:title" content={pageMeta?.meta.title} />
	<meta property="og:description" content={pageMeta?.meta.description} />
	<meta property="og:image" content={pageMeta?.banner.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={pageMeta?.date} />
	<meta property="article:modified_time" content={pageMeta?.date} />
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
			Előadások
		</h1>
	</div>
</div>

<div class="bg-gray-50 px-6 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
	<div class="relative mx-auto max-w-7xl">
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each eloadasok as eloadas (eloadas.id)}
				<a
					href={`eloadasok/${eloadas.slug}`}
					class="flex flex-col overflow-hidden rounded-lg shadow-lg"
				>
					<div class="flex-shrink-0">
						<img class="h-64 w-full object-cover" src={eloadas.thumbnail.sizes.medium.url} alt="" />
					</div>
					<div class="flex flex-1 flex-col justify-between bg-white p-6">
						<div class="flex-1">
							<div class="mt-2 block">
								<p class="text-xl font-semibold text-gray-900">{eloadas.title}</p>
								<p class="mt-3 text-base text-gray-500 line-clamp-3">
									{eloadas.description}
								</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
