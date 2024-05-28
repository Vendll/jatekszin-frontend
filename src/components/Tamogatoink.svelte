<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import '@splidejs/svelte-splide/css/core';

	export let partners: any;
</script>

<div class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-3xl mb-6">támogatóink</div>
	<Splide
		options={{
			type: 'loop',
			drag: 'free',
			focus: 'center',
			autoScroll: {
				speed: 1
			},
			perPage: 12,
			gap: '1rem',
			arrows: false
		}}
		extensions={{ AutoScroll }}
		loop={true}
		class="!visible relative w-full h-40 sm:h-fit"
		aria-label="partnerek"
		hasTrack={false}
	>
		<SplideTrack>
			{#each partners as partner (partner.id)}
				<SplideSlide class="card !h-36 !w-36 p-2  bg-primary-500">
					<img
						src={partner.logo.sizes.medium.url}
						alt=""
						class="objcet-center h-full w-full object-contain"
					/>
				</SplideSlide>
			{/each}
		</SplideTrack>
	</Splide>
	<!-- <swiper-container
		slides-per-view="auto"
		speed="500"
		space-between={30}
		centered-slides={true}
		autoplay={true}
		autoplay-delay={800}
		autoplay-disable-on-interaction={false}
		navigation={true}
		loop="true"
		class="!w-full !h-full"
	>
		{#each partners as partner (partner.id)}
			<swiper-slide class="card !h-20 !w-20 p-2 bg-primary-500">
				<img
					src={partner.logo.sizes.medium.url}
					alt=""
					class="objcet-center h-full w-full object-contain"
				/>
			</swiper-slide>
		{/each}
	</swiper-container> -->
</div>
