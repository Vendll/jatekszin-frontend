<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
	import { fade } from 'svelte/transition';
	import hero from '$lib/assets/IMG_8154.jpg?w=1800&h=1200&format=webp';
	import heroMobile from '$lib/assets/IMG_8078.jpg?w=1200&h=1800&format=webp';
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<div
	class="relative bg-gray-600 text-white !h-screen w-screen font-heavitas flex flex-col justify-between"
>
	<div class="absolute inset-0 z-10 overflow-hidden">
		<img src={hero} alt="Hero" class="hidden sm:block h-full w-full object-cover object-center" />
		<img
			src={heroMobile}
			alt="Hero"
			class="block sm:hidden h-full w-full object-cover object-center"
		/>
	</div>
	<div class="z-20 text-5xl text-center">
		<Logo />
	</div>
	{#if ready}
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
			<p
				use:scrollTo={'jegyvásárlás'}
				class="col-span-2 text-center text-3xl text-error-500 text-white-stroke"
			>
				jegyvásárlás
			</p>
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
	{/if}
</div>
