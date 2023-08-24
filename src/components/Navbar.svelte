<script lang="ts">
	import { onMount } from 'svelte';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebookF from 'svelte-icons-pack/fa/FaBrandsFacebookF';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import FaBrandsTiktok from 'svelte-icons-pack/fa/FaBrandsTiktok';
	import FaEnvelope from 'svelte-icons-pack/fa/FaEnvelope';
	import FaSolidBars from 'svelte-icons-pack/fa/FaSolidBars';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	export let navItems: any;
	console.log(navItems);

	let y: number;
	let screenHeight: any;
	let navColor: boolean = false;

	onMount(() => {
		screenHeight = window.innerHeight;
	});

	$: if ($page.url.pathname !== '/kapcsolat') {
		if (y > screenHeight / 8) {
			navColor = true;
		} else {
			navColor = false;
		}
	} else {
		navColor = true;
	}

	const drawerSettings: DrawerSettings = {
		width: 'w-[100vw] md:w-[24rem]',
		rounded: 'rounded-xl'
	};
</script>

<svelte:window bind:scrollY={y} />
<header
	class="fixed top-0 z-[30] inset-x-0 w-screen"
	style="background: rgba(255, 255, 255, {$page.url.pathname !== '/kapcsolat'
		? y / screenHeight
		: 1});  transition: opacity 0.5s ease;"
>
	<div class="flex justify-between lg:justify-evenly max-w-7xl mx-auto items-center">
		<a href="/" class="block">
			<Logo color={navColor} height={'6rem'} slideUp={false} width={'15rem'} />
		</a>
		{#each navItems as item}
			<a
				href={item.link}
				class="hidden lg:block text-white hover:text-white-stroke transition-color duration-300 ease-in-out"
				class:navColor
			>
				{item.title}
			</a>
		{/each}
		<a
			href="https://www.facebook.com/jatekszin"
			target="_blank"
			class="hidden lg:block text-white text-xl"
			class:navColor
		>
			<Icon
				color={navColor ? 'rgb(37,64,143)' : 'white'}
				src={FaBrandsFacebookF}
				className="transition-color duration-300 ease-in-out"
			/>
		</a>
		<a
			href="https://www.instagram.com/jatekszin/"
			target="_blank"
			class="hidden lg:block text-white text-xl"
			class:navColor
		>
			<Icon
				color={navColor ? 'rgb(37,64,143)' : 'white'}
				src={FaBrandsInstagram}
				className="transition-color duration-300 ease-in-out"
			/>
		</a>
		<a
			href="https://www.tiktok.com/@jatekszin"
			target="_blank"
			class="hidden lg:block text-white text-xl"
			class:navColor
		>
			<Icon
				color={navColor ? 'rgb(37,64,143)' : 'white'}
				src={FaBrandsTiktok}
				className="transition-color duration-300 ease-in-out"
			/>
		</a>
		<a href="mailto:info@jatekszin.hu" class="hidden lg:block text-white text-xl" class:navColor>
			<Icon
				color={navColor ? 'rgb(37,64,143)' : 'white'}
				src={FaEnvelope}
				className="transition-color duration-300 ease-in-out"
			/>
		</a>
		<a href="/hirek" class="hidden lg:block btn variant-filled-error text-white font-heavitas">
			jegyvásárlás
		</a>
		<button on:click={() => drawerStore.open(drawerSettings)} class="block lg:hidden text-xl mr-10">
			<Icon color={navColor ? 'rgb(37,64,143)' : 'white'} src={FaSolidBars} />
		</button>
	</div>
</header>

<style>
	.navColor {
		color: rgb(var(--color-primary-500));
	}
</style>
