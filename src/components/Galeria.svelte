<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID: string;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});

	let play: boolean = false;
	let paused: boolean = true;

	$: {
		if (!paused) {
			play = true;
		}
	}

	export let eloadas: any;
</script>

<div use:scrollRef={'galéria'} class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">galéria</div>

	<section class="grid grid-cols-2 md:grid-cols-3 gap-4 pswp-gallery" id={galleryID}>
		{#each eloadas.galeria as image (image.id)}
			<a
				href={image.image.sizes.large.url}
				data-pswp-width={image.image.sizes.large.width}
				data-pswp-height={image.image.sizes.large.height}
				target="_blank"
				rel="noreferrer"
			>
				<img
					class="h-full max-w-full object-cover object-center mx-auto rounded-lg"
					src={image.image.sizes.large.url}
					alt={image.image.alt}
					loading="lazy"
				/>
			</a>
		{/each}
	</section>
</div>
