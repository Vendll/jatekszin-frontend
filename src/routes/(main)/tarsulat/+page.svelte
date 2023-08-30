<script lang="ts">
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import person from '$lib/assets/person-jatekszin.webp';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	let tabSet: number = 0;
	export let data: any;
	const { commonPage } = data.props;
	const munkatarsak = data.props.munkatarsak.docs;

	const categories = {
		vezetoseg: [],
		szinesz: [],
		alkoto: [],
		altalanosMunkatarsak: []
	};
	const subcategories = {
		alkoto: [
			'dalszovegiro',
			'diszlettervezo',
			'dramaturg',
			'jelmeztervezo',
			'karmester',
			'koreografus',
			'rendezo',
			'szovegiro',
			'vilagitastervezo'
		],
		altalanosMunkatarsak: [
			'muvugykezeles',
			'gazdasagi',
			'tajszervezes',
			'szervezes',
			'kommunikacio',
			'kellekes',
			'muszakivez',
			'diszito',
			'fodraszat',
			'oltoztetok',
			'vilagosito',
			'hangosito',
			'bufe',
			'portasok',
			'nezoterimunkatars',
			'takarito'
		]
	};
	type Workforce = {
		id: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		[key: string]: string | boolean;
	}[];

	type Subcategories = {
		alkoto: string[];
		altalanosMunkatarsak: string[];
	};

	type CategorizedWorkforce = {
		vezetoseg: Workforce;
		szinesz: Workforce;
		alkoto: { [key: string]: Workforce };
		altalanosMunkatarsak: { [key: string]: Workforce };
	};
	function categorizeWorkforce(workforce: Workforce): CategorizedWorkforce {
		const categorizedWorkforce: CategorizedWorkforce = {
			vezetoseg: [],
			szinesz: [],
			alkoto: {},
			altalanosMunkatarsak: {}
		};

		// Initialize subcategories
		subcategories.alkoto.forEach((subcat) => {
			categorizedWorkforce.alkoto[subcat] = [];
		});
		subcategories.altalanosMunkatarsak.forEach((subcat) => {
			categorizedWorkforce.altalanosMunkatarsak[subcat] = [];
		});

		workforce.forEach((person) => {
			for (const category in categorizedWorkforce) {
				if (category !== 'alkoto' && category !== 'altalanosMunkatarsak' && person[category]) {
					categorizedWorkforce[category as 'vezetoseg' | 'szinesz'].push(person);
				}
			}
			for (const subcategory in subcategories) {
				(subcategories[subcategory as 'alkoto' | 'altalanosMunkatarsak'] as string[]).forEach(
					(subcat) => {
						if (person[subcat]) {
							categorizedWorkforce[subcategory as 'alkoto' | 'altalanosMunkatarsak'][subcat].push(
								person
							);
						}
					}
				);
			}
		});

		return categorizedWorkforce;
	}

	const workforce = categorizeWorkforce(munkatarsak);
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
						{#each színészek as szinesz}
							<div class="card relative aspect-square overflow-hidden uppercase">
								{#if szinesz.thumbnail}
									<img
										class="absolute inset-0 object-contain"
										src={szinesz.thumbnail?.sizes.medium.url}
										alt={szinesz.name}
									/>
								{:else}
									<img src={person} alt={szinesz.name} class="absolute inset-0 object-contain" />
								{/if}
								<span class="absolute bottom-4 left-4 text-white">
									{szinesz.name}
								</span>
							</div>
						{/each}
					</div>
				{:else if tabSet === 1}
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{#each alkotok as alkoto}
							<div
								class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
							>
								{#if alkoto.thumbnail}
									<img
										class="absolute inset-0 object-contain"
										src={alkoto.thumbnail?.sizes.medium.url}
										alt=""
									/>
								{/if}

								{alkoto.name}
							</div>
						{/each}
					</div>
				{:else if tabSet === 2}
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{#each altalanosMunkatarsak as munkatars}
							<div
								class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
							>
								{#if munkatars.thumbnail}
									<img
										class="absolute inset-0 object-contain"
										src={munkatars.thumbnail?.sizes.medium.url}
										alt=""
									/>
								{/if}

								{munkatars.name}
							</div>
						{/each}
					</div>
				{:else if tabSet === 3}
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{#each vezetoseg as vezeto}
							<div
								class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
							>
								{#if vezeto.thumbnail}
									<img
										class="absolute inset-0 object-contain"
										src={vezeto.thumbnail?.sizes.medium.url}
										alt=""
									/>
								{/if}

								{vezeto.name} <br />
								{vezeto.titulus}
							</div>
						{/each}
					</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
</div>
