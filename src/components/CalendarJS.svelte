<script lang="ts">
	import { Calendar } from '@fullcalendar/core';
	import { onMount } from 'svelte';
	import listPlugin from '@fullcalendar/list';
	export let musor: any;
	console.log(musor);

	const show = musor.map((show: any) => {
		return {
			title: show.eloadasok.title,
			start: show.date,
			link: show.jegyLink
		};
	});

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
				events: show,
				eventContent: function (args: any, event: any, createElement: any) {
					console.log(args.event._def.title);
					const jegyLink = `<div class="flex flex-row justify-between content-center w-full bg-slate-200"><span class="bg-slate-400">${args.event._def.title}</span> <a href='${args.event._def.extendedProps.link}' target='_blank' class='btn variant-filled-error !text-white font-heavitas'>jegyvásárlás</a></div>`;

					return {
						html: jegyLink
					};
				},
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
