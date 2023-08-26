<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import { Autoplay, Navigation } from 'swiper/modules';
	import { onMount } from 'svelte';
	onMount(() => {
		register();
		const swiperEl: any = document.querySelector('swiper-container');

		const params = {
			modules: [Autoplay, Navigation],
			injectStyles: [
				`
                .swiper-button-next, .swiper-button-prev {
                    color: #fff;
                }`
			]
			// inject modules styles to shadow DOM
		};

		Object.assign(swiperEl, params);

		swiperEl.initialize();
	});

	export let partners: any;
</script>

<div class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">támogatóink</div>
	<swiper-container
		init="false"
		slides-per-view="auto"
		speed="500"
		space-between={30}
		centered-slides={true}
		autoplay={true}
		autoplay-delay={2500}
		autoplay-disable-on-interaction={false}
		navigation={true}
		loop="true"
		class="w-full h-full overflow-hidden"
	>
		{#each partners as pertner (pertner.id)}
			<swiper-slide class="card h-40 w-40 bg-primary-500 p-4">
				<img src={pertner.logo.sizes.medium.url} alt="" class=" h-40 w-40 object-contain" />
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
