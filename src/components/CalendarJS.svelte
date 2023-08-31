<script lang="ts">
	import { Calendar } from '@fullcalendar/core';
	import { onMount } from 'svelte';
	import listPlugin from '@fullcalendar/list';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	export let musor: any;

	const show = musor.map((show: any) => {
		return {
			title: show.eloadasok.title,
			start: show.date,
			link: show.jegyLink,
			nincsJegy: show.nincsJegy,
			elmarad: show.elmarad,
			zartkoru: show.zartkoru
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
					let jegyLink;

					if (args.event._def.extendedProps.zartkoru) {
						jegyLink = `<div class="flex flex-col sm:flex-row justify-between items-center w-full"><span class="mb-2 sm:mb-0">${args.event._def.title}</span> <p class='btn variant-ringed-primary !text-primary-500 text-sm font-heavitas'>Zártkörű</p></div>`;
					} else if (args.event._def.extendedProps.nincsJegy) {
						jegyLink = `<div class="flex flex-col sm:flex-row justify-between items-center w-full"><span class="mb-2 sm:mb-0">${args.event._def.title}</span> <p class='btn variant-ringed-error !text-error-600 hover:!brightness-100 text-sm font-heavitas'>Elfogyott</p> </div>`;
					} else if (args.event._def.extendedProps.elmarad) {
						jegyLink = `<div class="flex flex-col sm:flex-row justify-between items-center w-full"><span class="mb-2 sm:mb-0">${args.event._def.title}</span> <p class='btn variant-ringed-error !text-error-600 hover:!brightness-100 cursor-not-allowed text-sm font-heavitas'>Elmarad</p></div>`;
					} else {
						jegyLink = `<div class="flex flex-col sm:flex-row justify-between items-center w-full"><span class="mb-2 sm:mb-0">${args.event._def.title}</span> <a href='${args.event._def.extendedProps.link}' target='_blank' class='btn variant-filled-error !text-white text-sm font-heavitas'>jegyvásárlás</a></div>`;
					}
					/* jegyLink = `<div class="flex flex-col sm:flex-row justify-between items-center w-full"><span class="mb-2 sm:mb-0">${args.event._def.title}</span> <a href='${args.event._def.extendedProps.link}' target='_blank' class='btn variant-filled-error !text-white text-sm font-heavitas'>jegyvásárlás</a></div>`; */

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

<div id="calendar" class="!mb-16 mx-6" />
<div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<div><p>Demo Content</p></div>
	<div class="arrow bg-surface-100-800-token" />
</div>
