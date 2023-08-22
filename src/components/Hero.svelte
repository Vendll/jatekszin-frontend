<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
	import { fade } from 'svelte/transition';
	import hero from '$lib/assets/IMG_8154.jpg?w=1800&h=1200&format=webp';
	import heroMobile from '$lib/assets/IMG_8078.jpg?w=1200&h=1800&format=webp';
	import Logo from './Logo.svelte';
	import { register } from 'swiper/element/bundle';
	register();
	const onSlideChange = (e: any) => {
		console.log('slide changed');
	};
	export let mainPage: boolean;
</script>

<div
	class="relative bg-gray-600 text-white !h-screen w-screen font-heavitas flex flex-col justify-between"
>
	{#if !mainPage}
		<div class="absolute inset-0 z-10 overflow-hidden">
			<img src={hero} alt="Hero" class="hidden sm:block h-full w-full object-cover object-center" />
			<img
				src={heroMobile}
				alt="Hero"
				class="block sm:hidden h-full w-full object-cover object-center"
			/>
		</div>
		<div class="z-20 text-5xl text-center">
			<Logo color height={'13rem'} slideUp width={'100%'} />
		</div>

		<div
			class="z-20 text-4xl text-center py-12 h-full justify-start flex flex-col"
			in:fade={{ delay: 350, duration: 1500 }}
		>
			<p class="px-12 text-blue-stroke">paolo genovese</p>
			<p class="text-5xl text-error-500 text-white-stroke">teljesen idegenek</p>
		</div>
		<div
			in:fade={{ delay: 850, duration: 1500 }}
			class="z-20 grid grid-cols-2 text-2xl lg:text-3xl lg:self-center lg:max-w-lg justify-center items-center px-6 pb-24 lg:pb-12 gap-y-4"
		>
			<p class="col-span-2 text-center text-3xl text-error-500 text-white-stroke">jegyvásárlás</p>
			<p
				use:scrollTo={{ ref: 'információk', offset: -50, duration: 1000 }}
				class="text-blue-stroke"
			>
				információk
			</p>
			<p
				use:scrollTo={{ ref: 'szereplők', offset: -50, duration: 1000 }}
				class="text-blue-stroke text-right"
			>
				szereplők
			</p>
			<p use:scrollTo={{ ref: 'trailer', offset: -50, duration: 1000 }} class="text-blue-stroke">
				trailer
			</p>
			<p
				use:scrollTo={{ ref: 'galéria', offset: -50, duration: 1000 }}
				class="text-blue-stroke text-right"
			>
				galéria
			</p>
		</div>
	{:else}
		<div class="absolute inset-0">
			<swiper-container
				slides-per-view={1}
				speed={500}
				space-between={20}
				centered-slides={true}
				autoplay={true}
				autoplay-delay="2500"
				autoplay-disable-on-interaction="false"
				loop="true"
				on:slidechange={onSlideChange}
				class="w-full h-full"
			>
				{#each Array.from({ length: 8 }) as _, i}
					<swiper-slide class="card rounded-none bg-gray-300 py-20 !h-full text-center">
						<!-- class="snap-center shrink-0 card bg-gray-300 py-20 w-32 md:w-80 text-center" -->
						{i + 1}
					</swiper-slide>
				{/each}
			</swiper-container>
			<div class="" />
		</div>
	{/if}
</div>
