<script>
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import Richtext from '$components/Richtext.svelte';
	export let data;
	const hir = data.props.hirek.docs[0];
</script>

<svelte:head>
	<title>{hir.meta.title}</title>
	<meta name="description" content={hir.meta.description} />
	<meta property="og:title" content={hir.meta.title} />
	<meta property="og:description" content={hir.meta.description} />
	<meta property="og:image" content={hir.thumbnail.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}/hirek/${hir.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={hir.date} />
	<meta property="article:modified_time" content={hir.date} />
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
