<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
	import { fade } from 'svelte/transition';
	import Logo from './Logo.svelte';

	export let eloadas: any;
</script>

<div
	class="relative bg-gray-600 text-white !h-screen w-screen font-heavitas flex flex-col justify-between"
>
	<div class="absolute inset-0 z-10 overflow-hidden">
		<img
			src={eloadas.hero.sizes.large.url}
			alt={eloadas.hero.alt}
			class="hidden sm:block h-full w-full object-cover object-center"
			loading="eager"
		/>
		<img
			src={eloadas.heroMobile.sizes.medium.url}
			alt={eloadas.heroMobile.alt}
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
		<p class="px-12 text-blue-stroke">{eloadas.author}</p>
		<p class="lowercase text-5xl text-error-500 text-white-stroke">{eloadas.title}</p>
	</div>
	<nav
		in:fade={{ delay: 850, duration: 1500 }}
		class="z-20 grid grid-cols-2 text-2xl lg:text-3xl lg:self-center lg:max-w-lg justify-center items-center px-6 pb-24 lg:pb-12 gap-y-4"
	>
		<a
			href="https://jatekszin.jegy.hu/"
			target="_blank"
			class="col-span-2 text-center text-3xl text-error-500 text-white-stroke">jegyvásárlás</a
		>
		<a use:scrollTo={{ ref: 'információk', offset: -50, duration: 1000 }} class="text-blue-stroke">
			információk
		</a>
		<a
			use:scrollTo={{ ref: 'szereplők', offset: -50, duration: 1000 }}
			class="text-blue-stroke text-right"
		>
			szereplők
		</a>
		{#if eloadas.video}
			<a use:scrollTo={{ ref: 'trailer', offset: -50, duration: 1000 }} class="text-blue-stroke">
				trailer
			</a>
			<a
				use:scrollTo={{ ref: 'musor', offset: -50, duration: 1000 }}
				class="text-blue-stroke text-right"
			>
				műsor
			</a>
		{:else}
			<a
				use:scrollTo={{ ref: 'musor', offset: -50, duration: 1000 }}
				class="text-blue-stroke text-center col-span-2"
			>
				műsor
			</a>
		{/if}
	</nav>
</div>
