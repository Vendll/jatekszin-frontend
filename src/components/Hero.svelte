<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
	import { fade } from 'svelte/transition';
	import hero from '$lib/assets/IMG_8154.jpg';
	import heroMobile from '$lib/assets/IMG_8078.jpg';
	import Logo from './Logo.svelte';
	import { register } from 'swiper/element/bundle';
	import pic from '$lib/assets/IMG_8154.jpg';
	import pic2 from '$lib/assets/gallery1.jpg';
	import pic3 from '$lib/assets/gallery2.jpg';
	let pics = [pic, pic2, pic3];
	register();
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
		<Logo color height={'13rem'} slideUp width={'100%'} />
	</div>

	<div
		class="z-20 text-4xl text-center py-12 h-full justify-start flex flex-col"
		in:fade={{ delay: 350, duration: 1500 }}
	>
		<p class="px-12 text-blue-stroke">paolo genovese</p>
		<p class="text-5xl text-error-500 text-white-stroke">teljesen idegenek</p>
	</div>
	<nav
		in:fade={{ delay: 850, duration: 1500 }}
		class="z-20 grid grid-cols-2 text-2xl lg:text-3xl lg:self-center lg:max-w-lg justify-center items-center px-6 pb-24 lg:pb-12 gap-y-4"
	>
		<p class="col-span-2 text-center text-3xl text-error-500 text-white-stroke">jegyvásárlás</p>
		<a use:scrollTo={{ ref: 'információk', offset: -50, duration: 1000 }} class="text-blue-stroke">
			információk
		</a>
		<a
			use:scrollTo={{ ref: 'szereplők', offset: -50, duration: 1000 }}
			class="text-blue-stroke text-right"
		>
			szereplők
		</a>
		<a use:scrollTo={{ ref: 'trailer', offset: -50, duration: 1000 }} class="text-blue-stroke">
			trailer
		</a>
		<a
			use:scrollTo={{ ref: 'galéria', offset: -50, duration: 1000 }}
			class="text-blue-stroke text-right"
		>
			galéria
		</a>
	</nav>
</div>
