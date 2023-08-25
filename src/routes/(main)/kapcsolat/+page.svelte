<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidMapMarkerAlt from 'svelte-icons-pack/fa/FaSolidMapMarkerAlt';
	import FaEnvelope from 'svelte-icons-pack/fa/FaEnvelope';
	import FaSolidPhone from 'svelte-icons-pack/fa/FaSolidPhone';
	import FaSolidUser from 'svelte-icons-pack/fa/FaSolidUser';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	const kapcsolat = data.props.kapcsolat;
	const contactInfos = data.props.kapcsolat.contactInfos;
</script>

<svelte:head>
	<title>{kapcsolat?.meta.title}</title>
	<meta name="description" content={kapcsolat?.meta.description} />
	<meta property="og:title" content={kapcsolat?.meta.title} />
	<meta property="og:description" content={kapcsolat?.meta.description} />
	<meta property="og:image" content={kapcsolat?.banner.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={kapcsolat?.date} />
	<meta property="article:modified_time" content={kapcsolat?.date} />
</svelte:head>

<div class="relative bg-indigo-800 mt-24">
	<iframe
		title="Térkép"
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10780.251874957516!2d19.0587207!3d47.5081649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc72a60254d1%3A0x387b562fdf1f2009!2zSsOhdMOpa3N6w61u!5e0!3m2!1sen!2shu!4v1692944736316!5m2!1sen!2shu"
		width="100%"
		height="288px"
		style="border:0;"
		allowfullscreen={false}
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</div>
<div class="bg-white">
	<div class="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
		<div class="divide-y-2 divide-gray-200">
			<div class="lg:grid lg:grid-cols-3 lg:gap-8">
				<h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
					Elérhetőségek:
				</h2>
				<div
					class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0"
				>
					{#each contactInfos as contactInfo (contactInfo.id)}
						<div class="p-12 variant-filled-primary rounded-md">
							<h3 class="text-lg md:text-xl font-medium text-white">
								{contactInfo.title}
							</h3>
							<dl class="mt-4 text-base text-white">
								{#if contactInfo.name}
									<div class="flex gap-x-3 mt-2">
										<dt class="sr-only">Név</dt>
										<Icon className="h-5 w-5 fill-white" src={FaSolidUser} />
										<dd>contactInfo.name</dd>
									</div>
								{/if}
								{#if contactInfo.address}
									<div class="flex gap-x-3 mt-2">
										<dt class="sr-only">Cím</dt>
										<Icon className="h-5 w-5 fill-white" src={FaSolidMapMarkerAlt} />
										<dd>{contactInfo.address}</dd>
									</div>
								{/if}
								{#if contactInfo.email}
									<div class="flex gap-x-3 mt-2">
										<dt class="sr-only">Email</dt>
										<Icon className="h-5 w-5 fill-white" src={FaEnvelope} />
										<dd>
											<a class="hover:underline" href={`mailto:${contactInfo.email}`}>
												{contactInfo.email}
											</a>
										</dd>
									</div>
								{/if}
								{#if contactInfo.phone}
									<div class="flex gap-x-3 mt-2">
										<dt class="sr-only">Telefon</dt>
										<Icon className="h-5 w-5 fill-white" src={FaSolidPhone} />
										<dd>
											<a class="hover:underline" href={`tel:${contactInfo.phone}`}>
												{contactInfo.phone}
											</a>
										</dd>
									</div>
								{/if}
								{#if contactInfo.phone2}
									<div class="flex gap-x-3 mt-2">
										<dt class="sr-only">Telefon</dt>
										<Icon className="h-5 w-5 fill-white" src={FaSolidPhone} />
										<dd>
											<a class="hover:underline" href={`tel:${contactInfo.phone2}`}>
												{contactInfo.phone2}
											</a>
										</dd>
									</div>
								{/if}
							</dl>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
