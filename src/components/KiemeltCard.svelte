<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	export let ke: any;
	export let scrolling: boolean;
	let hovered = false;

	let hoverTimeout: any;
	let safeTimeout: any;

	function safeTimeoutFunc() {
		safeTimeout = setTimeout(() => {
			scrolling = false;
		}, 2000);
	}

	function handleMouseEnter() {
		hoverTimeout = setTimeout(() => {
			hovered = true;
		}, 500);
	}
	function handleMouseLeave() {
		clearTimeout(hoverTimeout);
		setTimeout(() => {
			hovered = false;
		}, 500);
	}
</script>

<li class=" snap-start shrink-0 group relative rounded-md w-[21rem] h-[28rem] aspect-[4/3]">
	<div>
		<img
			class="absolute rounded-md object-cover top-0 left-0 w-[42rem] h-[28rem] brightness-95"
			src={ke.value.heroMobile.sizes.medium.url}
			alt="sad"
		/>
		<div class="z-10 absolute bottom-0 left-0 inset-0">
			<div class="absolute bottom-10 left-2 right-2 text-center">
				<h1 class="lowercase text-white drop-shadow-lg text-xl lg:text-2xl font-heavitas">
					{ke.value.author}
				</h1>
				<h1 class="lowercase text-white drop-shadow-lg text-xl lg:text-3xl font-heavitas">
					{ke.value.title}
				</h1>
				<div class="gap-3 flex justify-center mt-4">
					<a
						href="https://jatekszin.jegy.hu/"
						class="btn !px-4 variant-filled-error text-white font-heavitas">jegyvásárlás</a
					>
					<a
						href={`/eloadasok/${ke.value.slug}`}
						class="btn !px-4 variant-filled-error text-white font-heavitas">részletek</a
					>
				</div>
			</div>
		</div>
	</div>
</li>
<!-- <li
	class="hidden md:block snap-start shrink-0 group relative rounded-md w-[21rem] h-[28rem] aspect-[4/3] md:hover:w-[42rem] md:hover:aspect-[2/3] overflow-hidden transition-all delay-500 duration-[350ms] ease-in-out"
	on:mouseenter={() => handleMouseEnter()}
	on:pointerleave={() => handleMouseLeave()}
>
	{#if !hovered}
		<div
			in:fade={{
				delay: 0,
				duration: 100
			}}
		>
			<img
				class="absolute rounded-md object-cover object-center inset-0"
				src={ke.value.poster.sizes.medium.url}
				alt="sad"
			/>
		</div>
	{:else}
		<div
			in:fly={{
				delay: 0,
				duration: 350,
				x: -250,
				y: 0,
				opacity: 0.5,
				easing: quintOut
			}}
			out:fly={{
				delay: 0,
				duration: 100,
				x: -250,
				y: 0,
				opacity: 0.5,
				easing: quintOut
			}}
		>
			<img
				class="absolute rounded-md object-cover top-0 left-0 w-[42rem] h-[28rem]"
				src={ke.value.hero.sizes.medium.url}
				alt="sad"
			/>
			<div
				class="z-10 absolute bottom-0 left-0 inset-0"
				in:fly={{
					delay: 400,
					duration: 500,
					x: 0,
					y: 250,
					opacity: 0,
					easing: quintOut
				}}
			>
				<div class="absolute bottom-10 left-6">
					<h1 class="lowercase text-error-500 text-xl lg:text-3xl text-white-stroke font-heavitas">
						{ke.value.author}
					</h1>
					<h1 class="lowercase text-error-500 text-xl lg:text-4xl text-white-stroke font-heavitas">
						{ke.value.title}
					</h1>
					<div class="gap-4 flex mt-4">
						<a
							href="https://jatekszin.jegy.hu/"
							class="btn variant-filled-error text-white font-heavitas">jegyvásárlás</a
						>
						<a
							href={`/eloadasok/${ke.value.slug}`}
							class="btn variant-filled-error text-white font-heavitas">részletek</a
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li> -->
