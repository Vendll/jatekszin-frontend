<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import FaSolidAngleLeft from 'svelte-icons-pack/fa/FaSolidAngleLeft';
	import FaSolidAngleRight from 'svelte-icons-pack/fa/FaSolidAngleRight';
	import Icon from 'svelte-icons-pack/Icon.svelte';

	let elemCarousel: HTMLDivElement;

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}

	export let eloadas: any;
</script>

<div use:scrollRef={'galéria'} class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">galéria</div>

	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button
			aria-label="Előző kép"
			type="button"
			class="btn-icon variant-ringed-primary"
			on:click={carouselLeft}
		>
			<Icon className="h-6 w-6 -ml-1 fill-primary-600" src={FaSolidAngleLeft} />
		</button>
		<!-- Full Images -->
		<div
			bind:this={elemCarousel}
			class="snap-x snap-mandatory scroll-smooth flex gap-x-4 overflow-x-auto"
		>
			{#each eloadas.galeria as image}
				<img
					class="snap-center w-full h-full rounded-container-token"
					src={image.image.sizes.medium.url}
					alt={image.image.alt}
					loading="lazy"
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button
			aria-label="Következő kép"
			type="button"
			class="btn-icon variant-ringed-primary"
			on:click={carouselRight}
		>
			<Icon className="h-6 w-6 -mr-1 fill-primary-600" src={FaSolidAngleRight} />
		</button>
	</div>

	<div class="card p-4 grid grid-cols-6 gap-4">
		{#each eloadas.galeria as image, i}
			<button aria-label="Kép" type="button" on:click={() => carouselThumbnail(i)}>
				<img
					class="rounded-container-token"
					src={image.image.sizes.small.url}
					alt={image.image.alt}
					loading="lazy"
				/>
			</button>
		{/each}
	</div>
</div>
