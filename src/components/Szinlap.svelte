<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import Time from 'svelte-time';
	import Richtext from './Richtext.svelte';
	import person from '$lib/assets/person-jatekszin.webp';

	export let eloadas: any;

	function findPosition(value: any) {
		const options = [
			{ label: 'Rendező', value: 'rendezo' },
			{ label: 'Dramaturg', value: 'dramaturg' },
			{ label: 'Díszlettervező', value: 'diszlettervezo' },
			{ label: 'Jelmeztervező', value: 'jelmeztervezo' },
			{ label: 'Díszlet- és jelmeztervező', value: 'diszlettervezo-jelmeztervezo' },
			{ label: 'Zenei vezető', value: 'zenei_vezeto' },
			{ label: 'Zeneszerző', value: 'zeneszerzo' },
			{ label: 'Koreográfus', value: 'koreografus' },
			{ label: 'Ügyelő', value: 'ugyelo' },
			{ label: 'Súgó', value: 'sugo' },
			{ label: 'Fénytervező', value: 'fenytervezo' },
			{ label: 'Hangmérnök', value: 'hangmernok' },
			{ label: 'Videó', value: 'video' },
			{ label: 'Rendezőasszisztens', value: 'rendezoasszisztens' },
			{ label: 'Dramaturgasszisztens', value: 'dramaturgasszisztens' },
			{ label: 'Fordító', value: 'fordito' },
			{ label: 'Alkotótárs', value: 'alkototars' },
			{ label: 'Világítástervező', value: 'vilagitastervezo' },
			{ label: 'Szakmai konzultáns', value: 'szakmai_konzultans' },
			{ label: 'Videógrafika', value: 'videografika' },
			{ label: 'Koreográfus', value: 'koreografus' },
			{ label: 'Dalszöveg', value: 'dalszoveg' },
			{ label: 'Konzultáns', value: 'konzultans' },
			{ label: 'Zene', value: 'zene' },
			{ label: 'Jelmez', value: 'jelmez' },
			{ label: 'Díszlet', value: 'diszlet' },
			{ label: 'Társastánc', value: 'tarstanc' },
			{ label: 'Szcenikus', value: 'szcenikus' },
			{ label: 'Konzultáns', value: 'konzultans' },
			{ label: 'Rendező munkatársa', value: 'rendezo_munkatarsa' },
			{ label: 'Társszerző', value: 'tarsszerzo' },
			{ label: 'Producer', value: 'producer' },
			{ label: 'Divattervező', value: 'divattervezo' },
			{ label: 'Társastánc', value: 'tarsastanc' }
		];

		return options.find((option) => option.value === value);
	}

	function durationFormatter(value: any) {
		const hours = Math.floor(value / 60);
		const minutes = value % 60;

		return `${hours} óra ${minutes} perc`;
	}

	const rendezo = eloadas.kozremukodok.find(
		(kozremukodo: any) => kozremukodo.value.pozicio === 'rendezo'
	);
	const kozremukodok = eloadas.kozremukodok.filter(
		(kozremukodo: any) => kozremukodo.value.pozicio !== 'rendezo'
	);
	const eloadasHossza = eloadas.eloadasHossza;
	const szunetekSzama = eloadas.szunetekSzama;
	const otherInfo = eloadas.otherInfo;
</script>

{#if otherInfo}
	<div class="mt-6 font-sans mx-6">
		<Richtext content={otherInfo} />
	</div>
{/if}

<div class="!mt-4" use:scrollRef={'színlap'}>
	<div class="font-heavitas !font-normal text-3xl mb-6 mx-6">színlap</div>
	<div class="lg:flex lg:space-x-6 space-3 mb-3 lg:space-y-0 mx-6">
		<div class="text-base font-bold font-sans">
			{#if eloadasHossza}
				Előadás hossza: <span class="font-light">{durationFormatter(eloadasHossza)}</span>
			{/if}
		</div>
		<div class="text-base font-bold font-sans">
			{#if szunetekSzama}
				Szünetek száma: <span class="font-light">
					{szunetekSzama}
				</span>
			{/if}
		</div>
	</div>
	<div class="lg:flex lg:space-x-6 space-y-3 lg:space-y-0 mx-6">
		<div class="text-base font-bold font-sans">
			{#if rendezo}
				Rendező: <span class="font-light">{rendezo.value.munkatars.value.name}</span>
			{/if}
		</div>
		<div class="text-base font-bold font-sans">
			Bemutató: <span class="font-light">
				<Time timestamp={eloadas.bemutatoDatum} format="YYYY. MMMM DD." />
			</span>
		</div>
	</div>
	<div class="lg:flex lg:gap-x-6 space-y-4 lg:space-y-0 lg:flex-wrap mt-3 mx-6">
		{#each kozremukodok as kozremukodo}
			<div class="text-base font-bold font-sans">
				{findPosition(kozremukodo.value.pozicio)?.label}:
				<span class="font-light !capitalize">
					{kozremukodo.value.munkatars.value.name}
				</span>
			</div>
		{/each}
	</div>

	<div use:scrollRef={'szereplők'} class="m-6 grid grid-cols-1 gap-4 lg:gap-8 lg:flex lg:flex-wrap">
		{#each eloadas.szereplok as szereplo}
			<div
				class="w-full h-full group aspect-square lg:w-64 lg:h-64 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
			>
				{#if szereplo.value.eloadasKep}
					<img
						src={szereplo.value.eloadasKep?.sizes.medium.url}
						alt=""
						class="absolute w-full inset-0 rounded-md object-center z-0"
					/>
				{:else if szereplo.value.szinesz.value.thumbnail}
					<img
						src={szereplo.value.szinesz.value.thumbnail?.sizes.medium.url}
						alt=""
						class="absolute w-full inset-0 rounded-md object-center z-0 brightness-90"
					/>
				{:else}
					<img src={person} alt="" class="absolute w-full inset-0 rounded-md object-center z-1" />
				{/if}

				<div
					class="z-10 text-error-500 text-xl lg:text-lg line-clamp-2 group-hover:line-clamp-none text-white-stroke-thin font-heavitas"
				>
					{szereplo.value.name}
				</div>
				<div class="z-10 text-white">{szereplo.value.szinesz.value.name}</div>
			</div>
		{/each}
	</div>
	{#if eloadas.szereplokSzoveges}
		<div class="mt-6 font-sans mx-6">
			<Richtext content={eloadas.szereplokSzoveges} />
		</div>
	{/if}
</div>
