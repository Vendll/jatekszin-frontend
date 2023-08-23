<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import MainFooter from '$components/MainFooter.svelte';
	import MainHero from '$components/MainHero.svelte';
</script>

<Navbar />
<slot />
<MainFooter />
