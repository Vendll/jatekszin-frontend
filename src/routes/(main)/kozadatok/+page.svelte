<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	let commonPage: any;
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

<div class="relative overflow-hidden bg-white prose mx-auto my-16">
	<div class="relative py-16 px-6 lg:px-8">
		<div class="mx-auto text-lg">
			<h1>
				<span
					class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
					>{hir.title}</span
				>
			</h1>
			<p class="mt-8 text-xl leading-8 text-gray-500">
				<Richtext content={hir.content} />
			</p>
		</div>
	</div>
</div>
