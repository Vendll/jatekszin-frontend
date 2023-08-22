<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import szinesz1 from '$lib/assets/IMG_5202.jpg?w=500&h=500&format=webp';
	import szinesz2 from '$lib/assets/IMG_5232.jpg?w=500&h=500&format=webp';
	import szinesz3 from '$lib/assets/IMG_5242_AA.jpg?w=500&h=500&format=webp';
	import szinesz4 from '$lib/assets/IMG_5545_BB.jpg?w=500&h=500&format=webp';
</script>

<div class="" use:scrollRef={'színlap'}>
	<div class="font-heavitas !font-normal text-4xl mb-6 mx-6">színlap</div>
	<div class="lg:flex lg:space-x-6 space-y-4 lg:space-y-0 mx-6">
		<div class="text-2xl font-bold font-sans">
			Rendező: <span class="font-light">Czukor Balázs</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Bemutató: <span class="font-light">2019. november 23.</span>
		</div>
	</div>
	<div class="lg:flex lg:gap-x-6 space-y-4 lg:space-y-0 lg:flex-wrap mx-6">
		<div class="text-2xl font-bold font-sans">
			Díszlet- és jelmeztervező: <span class="font-light">Kovács Yvette Alida</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Dramaturg: <span class="font-light">Lőkös Ildikó</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Fordította: <span class="font-light">Sediánszky Nóra</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Zeneszerző: <span class="font-light">Gulyás Levente</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Ügyelő: <span class="font-light">Kis-Kádi Judit</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Súgó: <span class="font-light">Sajben Anita / Dobos Erika</span>
		</div>
		<div class="text-2xl font-bold font-sans">
			Rendezőasszisztens: <span class="font-light">Petyi János</span>
		</div>
	</div>

	<div use:scrollRef={'szereplők'} class="m-6 grid grid-cols-1 gap-4 lg:gap-8 lg:flex lg:flex-wrap">
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
</div>
