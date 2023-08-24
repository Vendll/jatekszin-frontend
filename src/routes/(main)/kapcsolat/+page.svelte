<script lang="ts">
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	let commonPage: any;
</script>

<svelte:head>
	<title>{commonPage?.meta.title}</title>
	<meta name="description" content={commonPage?.meta.description} />
	<meta property="og:title" content={commonPage?.meta.title} />
	<meta property="og:description" content={commonPage?.meta.description} />
	<meta property="og:image" content={commonPage?.banner.sizes.medium.url} />
	<meta property="og:url" content={`${PUBLIC_SITE_URL}${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="article:published_time" content={commonPage?.date} />
	<meta property="article:modified_time" content={commonPage?.date} />
</svelte:head>

<div class="bg-white">
	<div class="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
		<div class="divide-y-2 divide-gray-200">
			<div class="lg:grid lg:grid-cols-3 lg:gap-8">
				<h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Get in touch</h2>
				<div
					class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0"
				>
					<div class="p-12 bg-gray-300 rounded-md">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Collaborate</h3>
						<dl class="mt-2 text-base text-gray-500">
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
					<div class="p-12 bg-gray-300 rounded-md">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Press</h3>
						<dl class="mt-2 text-base text-gray-500">
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
					<div class="p-12 bg-gray-300 rounded-md">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Join our team</h3>
						<dl class="mt-2 text-base text-gray-500">
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
					<div class="p-12 bg-gray-300 rounded-md">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Say hello</h3>
						<dl class="mt-2 text-base text-gray-500">
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
					<div>
						<h3 class="text-lg font-medium leading-6 text-gray-900">Los Angeles</h3>
						<div class="mt-2 text-base text-gray-500">
							<p>4556 Brendan Ferry</p>
							<p class="mt-1">Los Angeles, CA 90210</p>
						</div>
					</div>
					<div>
						<h3 class="text-lg font-medium leading-6 text-gray-900">New York</h3>
						<div class="mt-2 text-base text-gray-500">
							<p>886 Walter Streets</p>
							<p class="mt-1">New York, NY 12345</p>
						</div>
					</div>
					<div>
						<h3 class="text-lg font-medium leading-6 text-gray-900">Toronto</h3>
						<div class="mt-2 text-base text-gray-500">
							<p>7363 Cynthia Pass</p>
							<p class="mt-1">Toronto, ON N3Y 4H8</p>
						</div>
					</div>
					<div>
						<h3 class="text-lg font-medium leading-6 text-gray-900">Chicago</h3>
						<div class="mt-2 text-base text-gray-500">
							<p>726 Mavis Island</p>
							<p class="mt-1">Chicago, IL 60601</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
