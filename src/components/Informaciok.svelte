<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import Time from 'svelte-time';

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
			{ label: 'Fordító', value: 'fordito' }
		];

		return options.find((option) => option.value === value);
	}

	const rendezo = eloadas.kozremukodok.find(
		(kozremukodo: any) => kozremukodo.value.pozicio === 'rendezo'
	);
	const kozremukodok = eloadas.kozremukodok.filter(
		(kozremukodo: any) => kozremukodo.value.pozicio !== 'rendezo'
	);
</script>

<div class="lg:grid lg:grid-cols-7">
	<div use:scrollRef={'információk'} class="m-6 space-y-4 lg:col-span-5">
		<div class="font-heavitas !font-normal text-4xl mb-6">információk</div>
		<div class="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
			<div class="text-2xl font-bold font-sans">
				Rendező: <span class="font-light">{rendezo.value.munkatars.value.name}</span>
			</div>
			<div class="text-2xl font-bold font-sans">
				Bemutató: <span class="font-light">
					<Time timestamp={eloadas.bemutatoDatum} format="YYYY. MMMM DD." />
				</span>
			</div>
		</div>
		<div class="lg:flex lg:gap-x-6 space-y-4 lg:space-y-0 lg:flex-wrap">
			{#each kozremukodok as kozremukodo}
				<div class="text-2xl font-bold font-sans">
					{findPosition(kozremukodo.value.pozicio)?.label}:
					<span class="font-light">
						{kozremukodo.value.munkatars.value.name}
					</span>
				</div>
			{/each}
		</div>
		<div class="text-2xl font-bold font-sans">Leírás:</div>
		<p class="text-lg font-light prose font-sans">
			{eloadas.description}
		</p>
	</div>
	<div class="col-span-2 mx-6">
		<img
			src={eloadas.poster.sizes.medium.url}
			alt="Poster"
			class="w-full h-full object-contain object-center"
		/>
	</div>
</div>
