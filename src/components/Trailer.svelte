<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import FaSolidPlay from 'svelte-icons-pack/fa/FaSolidPlay';
	import hero from '$lib/assets/IMG_8154.jpg';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<div use:scrollRef={'trailer'} class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">trailer</div>
	<div class="">
		<div
			class="w-full relative aspect-video bg-white overflow-hidden rounded-md grid place-content-center"
		>
			<div class="absolute z-0 inset-0 bg-black/20">
				<div class="absolute z-0 inset-0 bg-black/20" />
				<img src={hero} alt="Hero" class="h-full w-full object-cover object-center" />
			</div>

			<button
				aria-label="Play"
				on:click|preventDefault={() => {}}
				class="bg-black/40 rounded-full z-10 p-4"
				><Icon
					src={FaSolidPlay}
					className="fill-error-500 !stroke-white !stroke-[20px] text-4xl pl-1.5"
				/></button
			>
			>
		</div>
	</div>
	<button
		aria-label="megosztás"
		class="w-full py-2 px-4 bg-primary-500 text-2xl rounded-md font-heavitas text-white-stroke-thin text-error-500"
		>megosztás</button
	>
</div>
