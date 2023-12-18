<script lang="ts">
	import KiemeltCard from './KiemeltCard.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/core';
	export let kiemelt: any;
	let scrolling = false;
	let x: number;
</script>

<svelte:window bind:innerWidth={x} />
<div class="w-full mx-auto px-6 my-16 overflow-hidden relative">
	<h1 class="font-heavitas text-center text-5xl text-error-500 mb-6">Kiemelt előadásaink</h1>
	<Splide
		options={{
			type: 'slide',
			drag: 'free',
			fixedWidth: '21rem',
			gap: '1rem',
			arrows: true
		}}
		loop={false}
		class="!visible relative w-full h-fit"
		aria-label="partnerek"
		hasTrack={false}
	>
		<SplideTrack>
			{#each kiemelt as ke (ke.value.id)}
				<SplideSlide class="">
					<KiemeltCard {scrolling} {ke} />
				</SplideSlide>
			{/each}
		</SplideTrack>
		<div
			class="splide__arrows absolute flex justify-between left-1 lg:left-2 inset-x-0 w-[95vw] bottom-1/2"
		>
			<button
				class="splide__arrow splide__arrow--prev left-3 text-primary-500 h-10 w-10 stroke-white stroke-[10] z-[999999]"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512"
					><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
					/></svg
				></button
			>
			<button
				class="splide__arrow splide__arrow--next right-3 text-primary-500 h-10 w-10 stroke-white stroke-[10] z-[999999]"
			>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512"
					><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
					/></svg
				>
			</button>
		</div>
	</Splide>
</div>
