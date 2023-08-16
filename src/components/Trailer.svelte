<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
</script>

<div use:scrollRef={'trailer'} class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">trailer</div>
	<div class="w-full aspect-video bg-gray-300 rounded-md">a</div>
	<button
		class="w-full py-2 px-4 bg-primary-500 text-2xl rounded-md font-heavitas text-white-stroke-thin text-error-500"
		>megosztás</button
	>
</div>
