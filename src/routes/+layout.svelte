<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import Navbar from '$components/Navbar.svelte';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Logo from '$components/Logo.svelte';
	import FaSolidTimes from 'svelte-icons-pack/fa/FaSolidTimes';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebookF from 'svelte-icons-pack/fa/FaBrandsFacebookF';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import FaEnvelope from 'svelte-icons-pack/fa/FaEnvelope';

	let navItems = [
		{
			title: 'Hírek',
			href: '/hirek'
		},
		{
			title: 'Előadások',
			href: '/eloadasok'
		},
		{
			title: 'Műsor',
			href: '/musor'
		},
		{
			title: 'Társulat',
			href: '/tarsulat'
		},
		{
			title: 'Jegyek',
			href: '/jegyek'
		},
		{
			title: 'Játékszín',
			href: '/jatekszin'
		},
		{
			title: 'Kapcsolat',
			href: '/kapcsolat'
		}
	];
</script>

<!-- <Navbar /> -->
<Drawer class="" position="right" duration={500}>
	<div class="flex items-center justify-evenly mt-6">
		<a href="/" class="-mx-2 -my-8 outline-none p-0">
			<span class="sr-only">Your Company</span>
			<Logo color height={'8rem'} slideUp={false} width={'15rem'} />
		</a>
		<button
			on:click={() => drawerStore.close()}
			type="button"
			class="-m-2.5 rounded-md p-2.5 text-gray-700"
		>
			<span class="sr-only">Close menu</span>
			<Icon className="h-6 w-6 fill-primary-500" src={FaSolidTimes} />
		</button>
	</div>
	<div class="m-6 flow-root">
		<div class="-my-6 divide-y divide-gray-500/10">
			<div class="space-y-2 py-6">
				{#each navItems as item}
					<a
						href={item.href}
						class="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
					>
						{item.title}
					</a>
				{/each}
			</div>
		</div>
		<div class="flex justify-evenly mt-6">
			<a href="/hirek" class=" text-xl">
				<Icon
					color={'rgb(37,64,143)'}
					src={FaBrandsFacebookF}
					className="transition-color duration-300 ease-in-out"
				/>
			</a>
			<a href="/hirek" class=" text-xl">
				<Icon
					color={'rgb(37,64,143)'}
					src={FaBrandsInstagram}
					className="transition-color duration-300 ease-in-out"
				/>
			</a>
			<a href="/hirek" class=" text-xl">
				<Icon
					color={'rgb(37,64,143)'}
					src={FaEnvelope}
					className="transition-color duration-300 ease-in-out"
				/>
			</a>
		</div>
	</div>
	<div class="m-6 fixed bottom-6 flex-1 inset-x-0 flex">
		<a href="/hirek" class="btn w-full variant-filled-error text-white font-heavitas">
			jegyvásárlás
		</a>
	</div>
</Drawer>
<slot />
