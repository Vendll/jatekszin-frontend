<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import MainFooter from '$components/MainFooter.svelte';
	import type { LayoutData } from './$types';
	export let data;
	console.log(data);
	const navItems = data.props.menu.navItems;
	console.log(navItems);
</script>

<Navbar {navItems} />
<slot />
<MainFooter />
