<script lang="ts">
	import { scrollTop } from 'svelte-scrolling';
	import FaSolidArrowAltCircleUp from 'svelte-icons-pack/fa/FaSolidArrowAltCircleUp';
	import Icon from 'svelte-icons-pack';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let scrollY: number = 0;
	let screenHeight: any;
	let topBtn: boolean = false;
	onMount(() => {
		screenHeight = window.innerHeight;
	});
	$: if (scrollY >= screenHeight / 2) {
		topBtn = true;
	} else {
		topBtn = false;
	}
</script>

<svelte:window bind:scrollY />
{#if topBtn}
	<button
		transition:fade={{ duration: 300, delay: 0 }}
		class="btn variant-filled-error hidden fixed bottom-5 right-5 z-[9999] text-white rounded-full m-0 p-0"
		class:topBtn
		on:click={() => scrollTop({ duration: 1000 })}
	>
		<Icon
			color="white"
			className="text-[2.5rem] stroke-white stroke-[10px]  fill-primary-500"
			src={FaSolidArrowAltCircleUp}
		/>
	</button>
{/if}

<style>
	.topBtn {
		display: block !important;
	}
</style>
