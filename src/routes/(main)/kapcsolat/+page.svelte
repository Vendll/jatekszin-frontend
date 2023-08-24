<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	const kapcsolat = data.props.kapcsolat;

	console.log(kapcsolat);
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
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5390.125927209287!2d19.058721!3d47.508165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc72a60254d1%3A0x387b562fdf1f2009!2zSsOhdMOpa3N6w61u!5e0!3m2!1sen!2sus!4v1692882778207!5m2!1sen!2sus"
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
				<h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Get in touch</h2>
				<div
					class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0"
				>
					<div class="p-12 variant-filled-primary rounded-md">
						<h3 class="text-lg font-medium leading-6 text-white">Collaborate</h3>
						<dl class="mt-2 text-base text-white">
							<div>
								<dt class="sr-only">Email</dt>
								<dd>support@example.com</dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 123-4567</dd>
							</div>
						</dl>
					</div>
					<div class="p-12 variant-filled-primary rounded-md">
						<h3 class="text-lg font-medium leading-6 text-white">Press</h3>
						<dl class="mt-2 text-base text-white">
							<div>
								<dt class="sr-only">Email</dt>
								<dd>support@example.com</dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 123-4567</dd>
							</div>
						</dl>
					</div>
					<div class="p-12 variant-filled-primary rounded-md">
						<h3 class="text-lg font-medium leading-6 text-white">Join our team</h3>
						<dl class="mt-2 text-base text-white">
							<div>
								<dt class="sr-only">Email</dt>
								<dd>support@example.com</dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 123-4567</dd>
							</div>
						</dl>
					</div>
					<div class="p-12 variant-filled-primary rounded-md">
						<h3 class="text-lg font-medium leading-6 text-white">Say hello</h3>
						<dl class="mt-2 text-base text-white">
							<div>
								<dt class="sr-only">Email</dt>
								<dd>support@example.com</dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 123-4567</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
			<div class="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
				<h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Locations</h2>
				<div
					class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0"
				>
					<div class="p-12 rounded-md variant-filled-primary">
						<h3 class="text-lg font-medium leading-6 text-white">Los Angeles</h3>
						<div class="mt-2 text-base text-white">
							<p>4556 Brendan Ferry</p>
							<p class="mt-1">Los Angeles, CA 90210</p>
						</div>
					</div>
					<div class="p-12 rounded-md variant-filled-primary">
						<h3 class="text-lg font-medium leading-6 text-white">New York</h3>
						<div class="mt-2 text-base text-white">
							<p>886 Walter Streets</p>
							<p class="mt-1">New York, NY 12345</p>
						</div>
					</div>
					<div class="p-12 rounded-md variant-filled-primary">
						<h3 class="text-lg font-medium leading-6 text-white">Toronto</h3>
						<div class="mt-2 text-base text-white">
							<p>7363 Cynthia Pass</p>
							<p class="mt-1">Toronto, ON N3Y 4H8</p>
						</div>
					</div>
					<div class="p-12 rounded-md variant-filled-primary">
						<h3 class="text-lg font-medium leading-6 text-white">Chicago</h3>
						<div class="mt-2 text-base text-white">
							<p>726 Mavis Island</p>
							<p class="mt-1">Chicago, IL 60601</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
