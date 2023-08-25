<script lang="ts">
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	let tabSet: number = 0;
	export let data: any;
	const { commonPage } = data.props;
	console.log(commonPage);
</script>

<svelte:head>
	<title>{commonPage.meta.title}</title>
	<meta name="description" content={commonPage.meta.description} />
	<meta property="og:title" content={commonPage.meta.title} />
	<meta property="og:description" content={commonPage.meta.description} />
	<meta property="og:image" content={commonPage.banner.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={commonPage.date} />
	<meta property="article:modified_time" content={commonPage.date} />
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
<div class="relative overflow-hidden max-w-6xl mx-auto my-8">
	<section class="w-full card bg-surface-200 p-4 text-token">
		<TabGroup>
			<Tab
				class="hover:!variant-soft-primary !border-primary-600-300-token"
				bind:group={tabSet}
				name="tab1"
				value={0}
			>
				<span>Színművészek</span>
			</Tab>
			<Tab
				class="hover:!variant-soft-primary !border-primary-600-300-token"
				bind:group={tabSet}
				name="tab2"
				value={1}>Alkotók</Tab
			>
			<Tab
				class="hover:!variant-soft-primary !border-primary-600-300-token"
				bind:group={tabSet}
				name="tab3"
				value={2}>Munkatársak</Tab
			>
			<Tab
				class="hover:!variant-soft-primary !border-primary-600-300-token"
				bind:group={tabSet}
				name="tab3"
				value={3}>Vezetőség</Tab
			>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
						<div class="card relative aspect-square">színés</div>
					</div>
				{:else if tabSet === 1}
					(tab panel 2 contents)
				{:else if tabSet === 2}
					(tab panel 3 contents)
				{:else if tabSet === 3}
					(tab panel 4 contents)
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
</div>
