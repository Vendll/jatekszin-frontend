<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	import pic from '$lib/assets/poster.jpeg';
	import pic2 from '$lib/assets/IMG_8154.jpg';
	let hovered = false;
</script>

<li
	class="snap-start shrink-0 group relative rounded-md w-[21rem] h-[28rem] aspect-[4/3] hover:w-[42rem] hover:aspect-[2/3] overflow-hidden transition-all duration-[350ms] ease-in-out"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() =>
		setTimeout(() => {
			hovered = false;
		}, 200)}
>
	{#if !hovered}
		<div
			in:fade={{
				delay: 0,
				duration: 100
			}}
		>
			<img class="absolute rounded-md object-cover object-center inset-0" src={pic} alt="sad" />
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
				src={pic2}
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
				<div class="absolute bottom-4 left-6">
					<h1 class="text-error-500 text-xl lg:text-2xl text-white-stroke-thin font-heavitas">
						Paolo Genovese
					</h1>
					<h1 class="text-error-500 text-xl lg:text-3xl text-white-stroke-thin font-heavitas">
						teljesen idegenek
					</h1>
					<div class="gap-4 flex mt-4">
						<a href="/hirek" class="btn variant-filled-error text-white font-heavitas"
							>jegyvásárlás</a
						>
						<a href="/hirek" class="btn variant-filled-error text-white font-heavitas">részletek</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>
