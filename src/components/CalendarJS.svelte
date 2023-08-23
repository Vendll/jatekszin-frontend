<script lang="ts">
	import { Calendar } from '@fullcalendar/core';
	import { onMount } from 'svelte';
	import listPlugin from '@fullcalendar/list';
	export let eloadas: any;
	console.log(eloadas);

	const musor = eloadas.musor.map((musor: any) => {
		return {
			title: eloadas.title,
			start: musor.value.date
		};
	});
	console.log(musor);
	let calendarEl: any;
	onMount(() => {
		if (document !== undefined) {
			calendarEl = document.getElementById('calendar');

			let calendar = new Calendar(calendarEl!, {
				plugins: [listPlugin],
				initialView: 'listMonth',
				headerToolbar: {
					left: 'prev',
					center: 'title',
					right: 'next'
				},
				events: musor,
				locale: 'hu',
				buttonText: {
					next: 'Következő hónap',
					prev: 'Előző hónap'
				},
				contentHeight: 'auto',
				noEventsContent: 'Nincs megjeleníthető esemény'
			});
			calendar.render();
		}
	});
</script>

<div id="calendar" class="!mb-16" />
