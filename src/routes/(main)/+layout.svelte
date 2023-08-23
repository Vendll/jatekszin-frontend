<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import MainFooter from '$components/MainFooter.svelte';
	import type { LayoutData } from './$types';
	export let data;
	console.log(data);
</script>

<Navbar />
<slot />
<MainFooter />
