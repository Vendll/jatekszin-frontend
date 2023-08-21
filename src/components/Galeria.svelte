<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import gallery1 from '$lib/assets/gallery1.jpg?format=webp';
	import gallery2 from '$lib/assets/gallery2.jpg?format=webp';
	import gallery3 from '$lib/assets/gallery3.jpg?format=webp';
	import gallery4 from '$lib/assets/gallery4.jpg?format=webp';
	import gallery5 from '$lib/assets/gallery5.jpg?format=webp';
	import gallery6 from '$lib/assets/gallery6.jpg?format=webp';
	import gallery7 from '$lib/assets/gallery7.jpg?format=webp';
	import gallery8 from '$lib/assets/gallery8.jpg?format=webp';
	import gallery9 from '$lib/assets/gallery9.jpg?format=webp';
	import gallery10 from '$lib/assets/gallery10.jpg?format=webp';
	import gallery11 from '$lib/assets/gallery11.jpg?format=webp';
	import gallery12 from '$lib/assets/gallery12.jpg?format=webp';
</script>

<div use:scrollRef={'galéria'} class="m-6 space-y-4">
	<div class="font-heavitas !font-normal text-4xl mb-6">galéria</div>
	<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
		<div class="grid gap-4">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery1} />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery2} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery3} alt="" />
			</div>
		</div>
		<div class="grid gap-4">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery4} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery5} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery6} alt="" />
			</div>
		</div>
		<div class="grid gap-4">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery7} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery8} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery9} alt="" />
			</div>
		</div>
		<div class="grid gap-4">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery10} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery11} alt="" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={gallery12} alt="" />
			</div>
		</div>
	</section>
</div>
