<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import Informaciok from '$components/Informaciok.svelte';
	import Szereplok from '$components/Szereplok.svelte';
	import Trailer from '$components/Trailer.svelte';
	import Galeria from '$components/Galeria.svelte';
	import Tamogatoink from '$components/Tamogatoink.svelte';
	import Footer from '$components/Footer.svelte';
	import TopButton from '$components/TopButton.svelte';
	import poster from '$lib/assets/poster.jpeg';
</script>

<div class="mt-24">
	<header class="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
		<div
			class="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32"
		>
			<div class="relative flex items-end lg:col-span-5 lg:row-span-2">
				<div
					class="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-md bg-primary-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40"
				>
					<!-- <GridPattern x="100%" y="100%" patternTransform="translate(112 64)" /> -->
				</div>
				<div
					class="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto"
				>
					<img src={poster} alt="" />
				</div>
			</div>
			<!-- <div class="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
            <div class="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
            <figure class="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
              <div class="flex justify-center text-blue-600 lg:justify-start">
                <StarRating />
              </div>
              <blockquote class="mt-2">
                <p class="font-display text-xl font-medium text-slate-900">
                  “This method of designing icons is genius. I wish I had known
                  this method a lot sooner.”
                </p>
              </blockquote>
              <figcaption class="mt-2 text-sm text-slate-500">
                <strong class="font-semibold text-blue-600 before:content-['—_']">
                  Stacey Solomon
                </strong>
                , Founder at Retail Park
              </figcaption>
            </figure>
          </div> -->
			<div class="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
				<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
					<h1 class="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
						Get lost in the world of icon design.
					</h1>
					<p class="mt-4 text-3xl text-slate-600">
						A book and video course that teaches you how to design your own icons from scratch.
					</p>
					<div class="mt-8 flex space-x-4">
						<a href="#free-chapters" class="btn variant-ghost-error text-white font-heavitas"
							>Get sample chapter</a
						>
						<a href="#pricing" class="btn variant-filled-error text-white font-heavitas">Buy book</a
						>
					</div>
				</div>
			</div>
		</div>
	</header>

	<div class="max-w-7xl mx-auto h-16" />
</div>
