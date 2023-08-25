<script lang="ts">
	import Richtext from '$components/Richtext.svelte';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: any;
	const { commonPage } = data.props;
	console.log(commonPage);
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
		<img class="h-full w-full object-cover" src={commonPage.banner.sizes.large.url} alt="" />
		<div class="absolute inset-0 bg-slate-800 opacity-20 mix-blend-multiply" aria-hidden="true" />
	</div>
	<div class="relative mx-auto text-center max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
		<h1
			class="text-5xl font-heavitas text-error-500 text-white-stroke tracking-tigh sm:text-5xl lg:text-5xl"
		>
			{commonPage.title}
		</h1>
	</div>
</div>

<div class="relative overflow-hidden bg-white px-6 prose max-w-4xl mx-auto my-8">
	<div class="relative py-16 px-6 lg:px-8">
		<div class="mx-auto text-lg">
			<p class="mt-8 text-xl leading-8 text-gray-500">
				<Richtext content={commonPage.content} />
			</p>
		</div>
	</div>
</div>
