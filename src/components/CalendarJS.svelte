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
					console.log(args);
					const jegyLink =
						args.event._def.title +
						`<a href='${args.event._def.extendedProps.link}' target='_blank' class='btn variant-filled-error float-right !text-white font-heavitas'>jegyvásárlás</a>`;

					/* element
						.find('.fc-list-event-title')
						.append(
							`<a href={${event.link}} class='btn variant-filled-error font-heavitas'>jegyvásárlás</a>`
						); */

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
