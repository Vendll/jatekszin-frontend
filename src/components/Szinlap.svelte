<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import Time from 'svelte-time';

	export let eloadas;

	function findPosition(value) {
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
			{ label: 'Fordító', value: 'fordito' }
		];

		return options.find((option) => option.value === value);
	}

	const rendezo = eloadas.kozremukodok.find(
		(kozremukodo) => kozremukodo.value.pozicio === 'rendezo'
	);
	const kozremukodok = eloadas.kozremukodok.filter(
		(kozremukodo) => kozremukodo.value.pozicio !== 'rendezo'
	);
</script>

<div class="" use:scrollRef={'színlap'}>
	<div class="font-heavitas !font-normal text-4xl mb-6 mx-6">színlap</div>
	<div class="lg:flex lg:space-x-6 space-y-4 lg:space-y-0 mx-6">
		<div class="text-2xl font-bold font-sans">
			Rendező: <span class="font-light">{rendezo.value.munkatars.value.name}</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Bemutató: <span class="font-light">
				<Time timestamp={eloadas.bemutatoDatum} format="YYYY. MMMM DD." />
			</span>
		</div>
	</div>
	<div class="lg:flex lg:gap-x-6 space-y-4 lg:space-y-0 lg:flex-wrap mx-6">
		{#each kozremukodok as kozremukodo}
			<div class="text-2xl font-bold font-sans">
				{findPosition(kozremukodo.value.pozicio).label}:
				<span class="font-light">
					{kozremukodo.value.munkatars.value.name}
				</span>
			</div>
		{/each}
	</div>

	<div use:scrollRef={'szereplők'} class="m-6 grid grid-cols-1 gap-4 lg:gap-8 lg:flex lg:flex-wrap">
		{#each eloadas.szereplok as szereplo}
			<div
				class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
			>
				<img
					src={szereplo.value.szinesz.value.thumbnail?.sizes.medium.url}
					alt=""
					class="absolute inset-0 rounded-md object-center z-0"
				/>
				<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
					{szereplo.value.name}
				</div>
				<div class="z-10 text-white">{szereplo.value.szinesz.value.name}</div>
			</div>
		{/each}
	</div>
</div>
