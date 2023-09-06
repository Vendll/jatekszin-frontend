<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import Richtext from './Richtext.svelte';
	export let eloadas: any;
	import person from '$lib/assets/person-jatekszin.webp';
</script>

<div use:scrollRef={'szereplők'} class="font-heavitas !font-normal text-3xl mb-6 mx-6">
	szereplők
</div>
<div class="m-6 grid grid-cols-1 gap-4 lg:gap-8 lg:flex lg:flex-wrap">
	{#each eloadas.szereplok as szereplo}
		<div
			class="w-full h-full group relative aspect-square lg:w-64 lg:h-64 overflow-hidden rounded-md flex flex-col justify-end px-6 py-3 bg-gray-300"
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
					class="absolute w-full inset-0 rounded-md object-center z-0"
				/>
			{:else}
				<img src={person} alt="" class="absolute w-full inset-0 rounded-md object-center z-1" />
			{/if}
			<div
				class="z-10 text-error-500 text-xl lg:text-base line-clamp-2 group-hover:line-clamp-none text-white-stroke-thin font-heavitas"
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
