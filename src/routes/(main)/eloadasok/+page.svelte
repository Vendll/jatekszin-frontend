<script lang="ts">
	import bannerImage from '$lib/assets/banner.jpg';
	import type { PageData } from './$types';
	export let data: PageData;
	const eloadasok = data.props.eloadasok.docs;
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
			Előadások
		</h1>
	</div>
</div>

<div class="bg-gray-50 px-6 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
	<div class="relative mx-auto max-w-7xl">
		<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
			{#each eloadasok as eloadas}
				<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
					<div class="flex-shrink-0">
						<img class="h-64 w-full object-cover" src={eloadas.thumbnail.sizes.medium.url} alt="" />
					</div>
					<div class="flex flex-1 flex-col justify-between bg-white p-6">
						<div class="flex-1">
							<a href={`eloadasok/${eloadas.slug}`} class="mt-2 block">
								<p class="text-xl font-semibold text-gray-900">{eloadas.title}</p>
								<p class="mt-3 text-base text-gray-500 line-clamp-3">
									{eloadas.description}
								</p>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
