<script lang="ts">
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
	import Logo from './Logo.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebookF from 'svelte-icons-pack/fa/FaBrandsFacebookF';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import FaEnvelope from 'svelte-icons-pack/fa/FaEnvelope';
	import FaSolidBars from 'svelte-icons-pack/fa/FaSolidBars';
</script>

<div class="fixed top-0 bg-primary-500 z-[9999] inset-x-0">
	<div class="flex justify-between lg:justify-evenly max-w-7xl mx-auto items-center">
		<Logo height={'6rem'} slideUp={false} width={'15rem'} />
		{#each navItems as item}
			<a href={item.href} class="hidden lg:block text-white hover:text-white-stroke">
				{item.title}
			</a>
		{/each}
		<a href="/hirek" class="hidden lg:block text-white text-xl">
			<Icon color="white" src={FaBrandsFacebookF} />
		</a>
		<a href="/hirek" class="hidden lg:block text-white text-xl">
			<Icon color="white" src={FaBrandsInstagram} />
		</a>
		<a href="/hirek" class="hidden lg:block text-white text-xl">
			<Icon color="white" src={FaEnvelope} />
		</a>
		<a href="/hirek" class="hidden lg:block btn variant-filled-error text-white font-heavitas">
			jegyvásárlás
		</a>
		<button class="block lg:hidden text-xl mr-10">
			<Icon color="white" src={FaSolidBars} />
		</button>
	</div>
</div>
