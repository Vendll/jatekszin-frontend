<script lang="ts">
	import KiemeltCard from './KiemeltCard.svelte';
	export let kiemelt: any;
	let scrolling = false;
	let timeout: any;
</script>

<div class="w-full mx-auto px-6 my-16 overflow-hidden relative">
	<h1 class="font-heavitas text-center text-5xl text-error-500 mb-6">Kiemelt előadásaink</h1>
	<ul
		on:touchstart={() => {
			scrolling = true;
		}}
		on:touchend={() => {
			scrolling = false;
		}}
		class="flex snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-scroll"
	>
		{#each kiemelt as ke (ke.value.id)}
			<KiemeltCard {scrolling} {ke} />
		{/each}
	</ul>

	<div
		class="absolute md:static top-1/2 translate-y-3/4 md:translate-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 w-4/5 flex justify-between md:justify-around md:max-w-xl items-center md:mx-auto stroke-white stroke-[10] text-primary-500"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="h-10 md:h-4"
			viewBox="0 0 320 512"
			><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
				d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
			/></svg
		>
		<span class="hidden md:flex justify-between !w-20 items-center">
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="3"
					width="3"
					viewBox="0 0 512 512"
					fill="currentColor"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/></svg
				></span
			>
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="3"
					width="3"
					viewBox="0 0 512 512"
					fill="currentColor"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/></svg
				></span
			>
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="3"
					width="3"
					viewBox="0 0 512 512"
					fill="currentColor"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/></svg
				></span
			>
		</span>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			height="24"
			width="16"
			class="hidden md:block"
			viewBox="0 0 384 512"
			><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
				d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"
			/></svg
		>
		<span class="hidden md:flex justify-between !w-20 items-center">
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="3"
					width="3"
					viewBox="0 0 512 512"
					fill="currentColor"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/></svg
				></span
			>
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="3"
					width="3"
					viewBox="0 0 512 512"
					fill="currentColor"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/></svg
				></span
			>
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="3"
					width="3"
					viewBox="0 0 512 512"
					fill="currentColor"
					><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
					/></svg
				></span
			>
		</span>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			class="h-10 md:h-4"
			viewBox="0 0 320 512"
			><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path
				d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
			/></svg
		>
	</div>
</div>
