<script lang="ts">
	import { register } from 'swiper/element/bundle';
	register();
	const onSlideChange = (e: any) => {
		console.log('slide changed');
	};
</script>

<div class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">támogatóink</div>
	<swiper-container
		slides-per-view={2}
		speed="500"
		space-between={20}
		breakpoints={{ 768: { slidesPerView: 5, spaceBetween: 40 } }}
		centered-slides={true}
		autoplay={true}
		autoplay-delay="2500"
		autoplay-disable-on-interaction="false"
		loop="true"
		on:slidechange={onSlideChange}
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each Array.from({ length: 8 }) as _, i}
			<swiper-slide class="card bg-gray-300 py-20 text-center">
				<!-- class="snap-center shrink-0 card bg-gray-300 py-20 w-32 md:w-80 text-center" -->
				{i + 1}
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
