<script lang="ts">
	import CalendarJs from '$components/CalendarJS.svelte';
	import bannerImage from '$lib/assets/banner.jpg';
	/* import type { PageData } from './$types';
	export let data: PageData;
	const musor = data.props.musor.docs; */
</script>

<div class="relative bg-indigo-800">
	<div class="absolute inset-0">
		<img class="h-full w-full object-cover" src={bannerImage} alt="" />
		<div class="absolute inset-0 bg-slate-800 opacity-20 mix-blend-multiply" aria-hidden="true" />
	</div>
	<div class="relative mx-auto text-center max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
		<h1
			class="text-5xl font-heavitas text-error-500 text-white-stroke tracking-tigh sm:text-5xl lg:text-5xl"
		>
			Műsor
		</h1>
	</div>
</div>

<div class="mx-auto xl:max-w-7xl px-6 mt-16">
	<CalendarJs />
</div>
