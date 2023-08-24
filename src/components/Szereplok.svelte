<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	export let eloadas: any;
</script>

<div use:scrollRef={'szereplők'} class="font-heavitas !font-normal text-4xl mb-6 mx-6">
	szereplők
</div>
<div class="m-6 grid grid-cols-1 gap-4 lg:gap-8 lg:flex lg:flex-wrap">
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
