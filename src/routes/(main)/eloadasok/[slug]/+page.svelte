<script lang="ts">
	import poster from '$lib/assets/poster.jpeg';
	import { scrollTo } from 'svelte-scrolling';
	import Szinlap from '$components/Szinlap.svelte';
	import Trailer from '$components/Trailer.svelte';
	import Galeria from '$components/Galeria.svelte';
	import CalendarJs from '$components/CalendarJS.svelte';
</script>

<div class="mt-20">
	<header class="overflow-hidden bg-white lg:bg-transparent lg:px-5">
		<div
			class="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-12 md:gap-y-0 lg:grid-cols-12 lg:px-3 lg:pb-16"
		>
			<div class="relative flex items-start lg:col-span-5">
				<div
					class="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-md bg-primary-600 md:-bottom-8 lg:bottom-0 lg:-inset-y-8 lg:right-full lg:left-[-100vw] lg:-mr-40"
				/>
				<div
					class="relative z-20 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:mb-4 md:w-80 lg:w-auto"
				>
					<img src={poster} alt="" class="" />
				</div>
			</div>
			<!-- <div
				class="hidden lg:inline-flex relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20"
			>
				<div class="hidden lg:absolute lg:bottom-0 lg:block lg:bg-white" />
			</div> -->

			<div class="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
				<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
					<h1 class="font-display text-5xl font-heavitas text-slate-900 sm:text-6xl">
						teljesen idegenek
					</h1>
					<div class="text-2xl font-bold font-sans mt-8">Leírás:</div>
					<p class="text-lg font-light font-sans">
						Különös játékot talál ki egy baráti társaság: bárkinek megszólal a telefonja, képes vagy
						szöveges Üzenetet kap, együtt hallgatják, olvassák, nézik...
					</p>
					<p class="text-lg font-light font-sans">
						A hétköznapi estén váratlan titkok pattannak föl, évtizedes szövetségek kapcsai kezdenek
						kilazulni... Pedig eddig úgy gondolták, jól ismerik egymást - am lassanként elszabadul a
						pokol... Paolo Genovese 2016-os filmie szinte percek alatt hóditotta meg Európa
						mozijait, st több országban a helyi remake-jet is leforgattak. A görög, spanyol, török,
						francia, mexikói, koreai, kínai változat mellett a magyar is elkészült.
					</p>
					<p class="text-lg font-light font-sans">
						Most pedig végre szinpadon is látható ez a fursa, egyszerre vicces és drámai történet,
						Magyarorszagon elóször a Játékszinben.
					</p>

					<div
						class="z-10 relative grid grid-cols-2 text-2xl font-heavitas mt-8 lg:text-3xl lg:self-center lg:max-w-lg justify-center items-center px-6 pb-24 lg:pb-6 gap-y-4"
					>
						<div
							class=" absolute z-[-1] bg-primary-600 -top-4 lg:-top-6 bottom-20 lg:-bottom-2 -left-[100vw] right-[-100vw]"
						/>
						<p class="text-white-stroke-thin col-span-2 text-center text-3xl text-error-500">
							jegyvásárlás
						</p>
						<p
							use:scrollTo={{ ref: 'színlap', offset: -150, duration: 1000 }}
							class="text-white-stroke-thin text-error-500"
						>
							színlap
						</p>
						<p
							use:scrollTo={{ ref: 'szereplők', offset: -150, duration: 1000 }}
							class="text-white-stroke-thin text-error-500 text-right"
						>
							szereplők
						</p>
						<p
							use:scrollTo={{ ref: 'trailer', offset: -150, duration: 1000 }}
							class="text-white-stroke-thin text-error-500"
						>
							trailer
						</p>
						<p
							use:scrollTo={{ ref: 'galéria', offset: -150, duration: 1000 }}
							class="text-white-stroke-thin text-error-500 text-right"
						>
							galéria
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>

	<div class="max-w-7xl mx-auto space-y-16">
		<Szinlap />
		<Trailer />
		<Galeria />
		<CalendarJs />
	</div>
</div>
