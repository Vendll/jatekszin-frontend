<script lang="ts">
	import CalendarJs from '$components/CalendarJS.svelte';
	import bannerImage from '$lib/assets/banner.jpg';
	import FaSolidTicketAlt from 'svelte-icons-pack/fa/FaSolidTicketAlt';
	import FaSolidDownload from 'svelte-icons-pack/fa/FaSolidDownload';
	import FaSolidMap from 'svelte-icons-pack/fa/FaSolidMap';
	import FaFilePdf from 'svelte-icons-pack/fa/FaFilePdf';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import nezoter from '$lib/assets/Jatekszin_nezoter2019.svg';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let data: PageData;
	const musor = data.props.musor.docs;
	const { commonPage } = data.props;
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
			{commonPage.title}
		</h1>
	</div>
</div>

<div class="mx-auto xl:max-w-7xl px-6 mt-16">
	<CalendarJs {musor} />
	<Accordion class="my-6">
		<AccordionItem>
			<svelte:fragment slot="lead">
				<Icon src={FaSolidTicketAlt} className="fill-primary-500" />
			</svelte:fragment>
			<svelte:fragment slot="summary">Jegyárak</svelte:fragment>
			<svelte:fragment slot="content">
				<a target="_blank" href={commonPage.jegyarak.url} class="flex gap-2 items-center">
					<Icon src={FaFilePdf} className="ml-2 fill-primary-500" />
					<p class="hover:underline grow">{commonPage.jegyarak.name}</p>
				</a>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<Icon src={FaSolidDownload} className="fill-primary-500" />
			</svelte:fragment>
			<svelte:fragment slot="summary">Letölthető műsorok</svelte:fragment>
			<svelte:fragment slot="content">
				{#each commonPage.letolthetoMusorok as musor}
					<a target="_blank" href={musor.file.url} class="flex gap-2 items-center">
						<Icon src={FaFilePdf} className="ml-2 fill-primary-500" />
						<p class="hover:underline grow">{musor.file.name}</p>
					</a>
				{/each}
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<Icon src={FaSolidMap} className="fill-primary-500" />
			</svelte:fragment>
			<svelte:fragment slot="summary">Nézőtéri alaprajz</svelte:fragment>
			<svelte:fragment slot="content">
				<img class="w-full" alt="Nézőtér alaprajz" src={nezoter} />
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
