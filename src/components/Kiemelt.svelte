<script lang="ts">
	import pic from '$lib/assets/poster.jpeg';
	import pic2 from '$lib/assets/IMG_8154.jpg';
</script>

<div class="max-w-7xl mx-auto px-6 my-16 overflow-hidden">
	<ul class="flex gap-x-4 overflow-x-scroll">
		<li
			class="group relative bg-gray-500 rounded-md hover:w-[32rem] h-96 w-72 aspect-[4/3] hover:aspect-[3/4] transition-all duration-200 overflow-hidden"
		>
			<img
				class="absolute rounded-md object-cover object-center inset-0 visible group-hover:invisible transition-[visibility] duration-200"
				src={pic}
				alt="sad"
			/>
			<img
				class="absolute rounded-md object-cover top-0 left-0 invisible w-[32rem] h-96 group-hover:!visible transition-[visibility] duration-200 brightness-75"
				src={pic2}
				alt="sad"
			/>
			<div
				class="z-10 absolute bottom-0 left-0 invisible group-hover:visible transition-all transform translate-y-1/2 group-hover:translate-y-0 duration-200 inset-0"
			>
				<div class="absolute bottom-4 left-6">
					<h1 class="text-error-500 text-xl lg:text-2xl text-white-stroke-thin font-heavitas">
						Paolo Genovese
					</h1>
					<h1 class="text-error-500 text-xl lg:text-3xl text-white-stroke-thin font-heavitas">
						teljesen idegenek
					</h1>
					<div class="gap-x-4 flex mt-4">
						<a href="/hirek" class="btn variant-filled-error text-white font-heavitas">
							jegyvásárlás</a
						>
						<a href="/hirek" class="btn variant-filled-error text-white font-heavitas">
							részletek</a
						>
					</div>
				</div>
			</div>
		</li>
	</ul>
</div>
