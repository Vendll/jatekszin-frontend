<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import poster from '$lib/assets/poster.jpeg?w=785&h=1100&format=webp';
</script>

<div use:scrollRef={'jegyvásárlás'} class="lg:grid lg:grid-cols-7">
	<div use:scrollRef={'információk'} class="m-6 space-y-4 lg:col-span-5">
		<div class="font-heavitas !font-normal text-4xl mb-6">információk</div>
		<div class="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
			<div class="text-2xl font-bold font-sans">
				Rendező: <span class="font-light">Czukor Balázs</span>
			</div>
			<div class="text-2xl font-bold font-sans">
				Bemutató: <span class="font-light">2019. november 23.</span>
			</div>
		</div>
		<div class="lg:flex lg:gap-x-6 space-y-4 lg:space-y-0 lg:flex-wrap">
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
		<div class="text-2xl font-bold font-sans">Leírás:</div>
		<p class="text-lg font-light font-sans">
			Különös játékot talál ki egy baráti társaság: bárkinek megszólal a telefonja, képes vagy
			szöveges Üzenetet kap, együtt hallgatják, olvassák, nézik...
		</p>
		<p class="text-lg font-light font-sans">
			A hétköznapi estén váratlan titkok pattannak föl, évtizedes szövetségek kapcsai kezdenek
			kilazulni... Pedig eddig úgy gondolták, jól ismerik egymást - am lassanként elszabadul a
			pokol... Paolo Genovese 2016-os filmie szinte percek alatt hóditotta meg Európa mozijait, st
			több országban a helyi remake-jet is leforgattak. A görög, spanyol, török, francia, mexikói,
			koreai, kínai változat mellett a magyar is elkészült.
		</p>
		<p class="text-lg font-light font-sans">
			Most pedig végre szinpadon is látható ez a fursa, egyszerre vicces és drámai történet,
			Magyarorszagon elóször a Játékszinben.
		</p>
	</div>
	<div class="col-span-2 mx-6">
		<img src={poster} alt="Poster" class="w-full h-full object-contain object-center" />
	</div>
</div>
