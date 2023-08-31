<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import { Autoplay, Navigation } from 'swiper/modules';
	import { onMount } from 'svelte';
	register();

	export let partners: any;
</script>

<div class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">támogatóink</div>
	<swiper-container
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
			<swiper-slide class="card !h-40 !w-40 bg-primary-500">
				<img
					src={partner.logo.sizes.medium.url}
					alt=""
					class="objcet-center !h-36 !w-36 object-contain"
				/>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
