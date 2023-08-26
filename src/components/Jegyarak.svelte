<script lang="ts">
	export let eloadas;
	console.log(eloadas);
</script>

<div class="max-w-7xl mx-auto px-6 grid gap-4 lg:grid-cols-2">
	<div class="font-heavitas !font-normal text-4xl mb-6 lg:col-span-2">Jegyárak</div>

	<div>
		{#if eloadas.f1_9 && eloadas.f10_12 && eloadas.f13 && eloadas.f_potszek}
			<h1 class="text-2xl !font-normal font-heavitas tracking-tigh">Földszint:</h1>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				1-9. sor {eloadas.f1_9} Ft
			</p>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				10-12. sor {eloadas.f10_12} Ft
			</p>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				13. sor {eloadas.f13} Ft
			</p>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				pótszék {eloadas.f_potszek} Ft
			</p>
		{/if}
	</div>
	<div>
		{#if eloadas.e1 && eloadas.e2 && eloadas.e3_4 && eloadas.e5}
			<h1 class="text-2xl !font-normal font-heavitas tracking-tigh">Erkély:</h1>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				1. sor {eloadas.e1} Ft
			</p>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				2. sor {eloadas.e2} Ft
			</p>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				3-4. sor {eloadas.e3_4} Ft
			</p>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				5. pótsor {eloadas.e5} Ft
			</p>
		{/if}
	</div>
	<div>
		{#if eloadas.jm}
			<h1 class="text-2xl !font-normal font-heavitas tracking-tigh">JULIUS MEInL SZÍNPAD:</h1>
			<p class="text-lg !font-normal font-heavitas tracking-tigh">
				{eloadas.jm} Ft
			</p>
		{/if}
	</div>
</div>
