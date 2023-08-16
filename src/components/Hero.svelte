<script lang="ts">
	import { scrollTo } from 'svelte-scrolling';
</script>

<div
	class="relative bg-gray-600 text-white !h-screen w-screen font-heavitas flex flex-col justify-between"
>
	<div class="absolute inset-0 z-0 overflow-hidden">
		<img src="/hero.jpg" alt="" class="h-full w-full object-cover" />
	</div>
	<div class="z-10 text-5xl text-center py-12">játékszín</div>
	<div class="z-10 text-4xl text-center py-12">
		<p class="px-12 text-blue-stroke">paolo genovese</p>
		<p class="text-5xl text-error-500 text-white-stroke">teljesen idegenek</p>
	</div>
	<div class="z-10 grid grid-cols-2 text-xl justify-center items-center px-6 pb-12 gap-y-4">
		<p
			use:scrollTo={'jegyvásárlás'}
			class="col-span-2 text-center text-error-500 text-white-stroke-thin"
		>
			jegyvásárlás
		</p>
		<p
			use:scrollTo={{ ref: 'információk', offset: -50, duration: 1000 }}
			class="text-blue-stroke-thin"
		>
			információk
		</p>
		<p
			use:scrollTo={{ ref: 'szereplők', offset: -50, duration: 1000 }}
			class="text-blue-stroke-thin text-right"
		>
			szereplők
		</p>
		<p use:scrollTo={{ ref: 'trailer', offset: -50, duration: 1000 }} class="text-blue-stroke-thin">
			trailer
		</p>
		<p
			use:scrollTo={{ ref: 'galéria', offset: -50, duration: 1000 }}
			class="text-blue-stroke-thin text-right"
		>
			galéria
		</p>
	</div>
</div>
