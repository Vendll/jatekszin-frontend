<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import szinesz1 from '$lib/assets/IMG_5202.jpg?w=500&h=500&format=webp';
	import szinesz2 from '$lib/assets/IMG_5232.jpg?w=500&h=500&format=webp';
	import szinesz3 from '$lib/assets/IMG_5242_AA.jpg?w=500&h=500&format=webp';
	import szinesz4 from '$lib/assets/IMG_5545_BB.jpg?w=500&h=500&format=webp';
</script>

<div use:scrollRef={'szereplők'} class="font-heavitas !font-normal text-4xl mb-6 mx-6">
	szereplők
</div>
<div class="m-6 grid grid-cols-1 gap-4 lg:gap-8 lg:flex lg:flex-wrap">
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src="" alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Eva
		</div>
		<div class="z-10 text-white">Dobó Kata</div>
	</div>
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src={szinesz1} alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Rocco
		</div>
		<div class="z-10 text-white">Kolovracnic Krisztián</div>
	</div>
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src={szinesz4} alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Carlotta
		</div>
		<div class="z-10 text-white">Lévay Viktória</div>
	</div>
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src={szinesz3} alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Lele
		</div>
		<div class="z-10 text-white">Debreczeny Csaba</div>
	</div>
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src="" alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Bianka
		</div>
		<div class="z-10 text-white">Erdélyi Tímea</div>
	</div>
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src={szinesz2} alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Cosimó
		</div>
		<div class="z-10 text-white">Makranczi Zalán</div>
	</div>
	<div
		class="w-full h-full aspect-square lg:w-96 lg:h-96 overflow-hidden rounded-md flex flex-col relative justify-end px-6 py-3 bg-gray-300"
	>
		<img src="" alt="" class="absolute inset-0 rounded-md object-center z-0" />
		<div class="z-10 text-error-500 text-xl lg:text-xl text-white-stroke-thin font-heavitas">
			Peppe
		</div>
		<div class="z-10 text-white">Nagy Sándor</div>
	</div>
</div>
