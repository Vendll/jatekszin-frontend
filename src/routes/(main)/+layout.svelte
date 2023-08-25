<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import MainFooter from '$components/MainFooter.svelte';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	export let data;

	import Logo from '$components/Logo.svelte';
	import FaSolidTimes from 'svelte-icons-pack/fa/FaSolidTimes';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebookF from 'svelte-icons-pack/fa/FaBrandsFacebookF';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import FaBrandsTiktok from 'svelte-icons-pack/fa/FaBrandsTiktok';
	import FaEnvelope from 'svelte-icons-pack/fa/FaEnvelope';
	const navItems = data.props.menu;
</script>

<Navbar {navItems} />
<Drawer class="" position="right" duration={500}>
	<div class="flex items-center justify-evenly mt-6">
		<a href="/" class="-mx-2 -my-8 outline-none p-0">
			<span class="sr-only">Játészín</span>
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
				{#each navItems.navItems as item}
					<a
						on:click={() => drawerStore.close()}
						href={item.link}
						class="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
					>
						{item.title}
					</a>
				{/each}
			</div>
		</div>
		<div class="flex justify-evenly mt-6">
			<a href={navItems.facebookLink} class=" text-xl">
				<Icon
					color={'rgb(37,64,143)'}
					src={FaBrandsFacebookF}
					className="transition-color duration-300 ease-in-out"
				/>
			</a>
			<a href={navItems.instagramLink} class=" text-xl">
				<Icon
					color={'rgb(37,64,143)'}
					src={FaBrandsInstagram}
					className="transition-color duration-300 ease-in-out"
				/>
			</a>
			<a href={navItems.tiktokLink} class=" text-xl">
				<Icon
					color={'rgb(37,64,143)'}
					src={FaBrandsTiktok}
					className="transition-color duration-300 ease-in-out"
				/>
			</a>
			<a href="mailto:info@jatekszin.hu" class=" text-xl">
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
<MainFooter {navItems} />
