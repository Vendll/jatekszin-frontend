<script lang="ts">
	import bannerImage from '$lib/assets/banner.jpg';
	import type { PageData } from './$types';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	let pageMeta: any;
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
