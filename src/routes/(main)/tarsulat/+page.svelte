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

		// Sort each category and subcategory by name
		for (const category in categorizedWorkforce) {
			if (category === 'alkoto' || category === 'altalanosMunkatarsak') {
				for (const subcat in categorizedWorkforce[category as 'alkoto' | 'altalanosMunkatarsak']) {
					categorizedWorkforce[category as 'alkoto' | 'altalanosMunkatarsak'][subcat].sort((a, b) =>
						a.name.localeCompare(b.name)
					);
				}
			} else {
				categorizedWorkforce[category as 'vezetoseg' | 'szinesz'].sort((a, b) =>
					a.name.localeCompare(b.name)
				);
			}
		}

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
						{#each workforce.szinesz as szinesz}
							{#if !szinesz.kulsos}
								<div class="card relative aspect-square overflow-hidden">
									{#if szinesz.thumbnail}
										<img
											class="absolute inset-0 object-contain brightness-90"
											src={szinesz.thumbnail?.sizes.medium.url}
											alt={szinesz.name}
										/>
									{:else}
										<img src={person} alt={szinesz.name} class="absolute inset-0 object-contain" />
									{/if}
									<span class="absolute bottom-4 left-4 text-white uppercase">
										{szinesz.name}
									</span>
								</div>
							{/if}
						{/each}
					</div>
				{:else if tabSet === 1}
					{#if workforce.alkoto.dalszovegiro.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Dalszövegírók, zeneszerzők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.dalszovegiro as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.diszlettervezo.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Díszlettervezők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.diszlettervezo as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.dramaturg.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Dramaturgok
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.dramaturg as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.jelmeztervezo.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Jelmeztervezők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.jelmeztervezo as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.karmester.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Karmesterek, zenészek
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.karmester as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.koreografus.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Koreográfusok
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.koreografus as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.rendezo.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Rendezők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.rendezo as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.szovegiro.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Szövegírók, fordítók
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.szovegiro as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.alkoto.vilagitastervezo.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Világítástervezők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.alkoto.vilagitastervezo as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
				{:else if tabSet === 2}
					{#if workforce.altalanosMunkatarsak.muvugykezeles.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Művészeti ügykezelés
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.muvugykezeles as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.gazdasagi.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Gazdasági munkatársak
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.gazdasagi as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.tajszervezes.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Tájszervezés
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.tajszervezes as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.szervezes.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Szervezés
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.szervezes as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.kommunikacio.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Kommunikáció
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.kommunikacio as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.kellekes.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Kellékesek
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.kellekes as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.muszakivez.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Műszaki vezetés
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.muszakivez as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.diszito.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Díszítők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.diszito as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.fodraszat.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Fodrászat
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.fodraszat as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.oltoztetok.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Öltöztetők
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.oltoztetok as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.vilagosito.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Világosítók
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.vilagosito as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.hangosito.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Hangosítók
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.hangosito as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.bufe.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Büfé
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.bufe as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.portasok.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Portások
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.portasok as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.nezoterimunkatars.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Nézőtéri munkatársak
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.nezoterimunkatars as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
					{#if workforce.altalanosMunkatarsak.takarito.length !== 0}<h1
							class=" my-2 text-gray-900 sm:tracking-tight"
						>
							Takarító
						</h1>
						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
							{#each workforce.altalanosMunkatarsak.takarito as alkoto}
								<div
									class="card bg-primary-500 text-center py-2 px-4 text-white relative overflow-hidden uppercase"
								>
									{alkoto.name}
									<br />
									<span class="text-white mt-2 capitalize">{alkoto.titulus}</span>
								</div>
							{/each}
							<div class="sm:col-span-2 md:col-span-3 lg:col-span-4 h-px bg-primary-500/30" />
						</div>
					{/if}
				{:else if tabSet === 3}
					<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{#each workforce.vezetoseg as vezeto}
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
								<span class="text-white mt-2 capitalize">{vezeto.titulus}</span>
							</div>
						{/each}
					</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
</div>
