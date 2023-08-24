<script lang="ts">
	import MainHero from '$components/MainHero.svelte';
	import Kiemelt from '$components/Kiemelt.svelte';
	import HirCard from '$components/HirCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data);

	const kiemelt = data.props.kezdolap.kiemelt;
	const kiemeltHirek = data.props.kiemeltHirek.docs;
</script>

<MainHero />
<Kiemelt {kiemelt} />

<div class="bg-gray-50 px-6 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
	<div class="relative mx-auto max-w-7xl">
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each kiemeltHirek as kiemeltHir (kiemeltHir.id)}
				<HirCard
					desc={kiemeltHir.description}
					link={kiemeltHir.slug}
					img={kiemeltHir.thumbnail.sizes.medium.url}
					title={kiemeltHir.title}
				/>
			{/each}
		</div>
	</div>
</div>
