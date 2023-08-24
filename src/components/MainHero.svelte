<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';
	import { onMount } from 'svelte';
	export let heroes: any;
	import pic from '$lib/assets/IMG_8154.jpg';
	import pic2 from '$lib/assets/gallery1.jpg';
	import pic3 from '$lib/assets/gallery2.jpg';
	import pic4 from '$lib/assets/IMG_8078.jpg';
	let pics = [pic, pic2, pic3];
	onMount(() => {
		register();
		const swiperEl: any = document.querySelector('swiper-container');

		const params = {
			modules: [Navigation, Pagination, Autoplay],
			injectStyles: [
				`
                .swiper-pagination-bullet {
                    background-color: transparent;
                    border: 2px solid #fff;
                    opacity: 1;
                    z-index: 10;
                }`,
				`
                .swiper-pagination-bullet-active {
                    background-color: #fff;
                }
                `,
				`
                .swiper-button-next, .swiper-button-prev {
                    color: #fff;
                }`
			]
			// inject modules styles to shadow DOM
		};

		Object.assign(swiperEl, params);

		swiperEl.initialize();
	});
</script>

<div
	class="relative bg-gray-600 text-white !h-screen w-screen font-heavitas flex flex-col justify-between"
>
	<swiper-container
		init="false"
		slides-per-view={1}
		speed={500}
		centered-slides={true}
		autoplay={true}
		autoplay-delay={2500}
		autoplay-disable-on-interaction={false}
		loop="true"
		pagination={{
			clickable: true
		}}
		navigation={true}
		class="absolute inset-0"
	>
		{#each heroes as hero (hero.hero.value.id)}
			<swiper-slide class="w-full !h-full text-center">
				<img
					src={hero.hero.value.hero.sizes.large.url}
					alt=""
					class="portrait:hidden object-cover h-full w-full"
					loading="eager"
				/>
				<img
					src={hero.hero.value.heroMobile.sizes.medium.url}
					alt=""
					class="landscape:hidden object-cover h-full w-full"
					loading="eager"
				/>
				<div
					class:middleTop={hero.position === 'top-middle'}
					class:middle={hero.position === 'middle'}
					class:middleBottom={hero.position === 'bottom-middle'}
					class:leftTop={hero.position === 'left-top'}
					class:leftMiddle={hero.position === 'left-middle'}
					class:leftBottom={hero.position === 'left-bottom'}
					class:rightTop={hero.position === 'right-top'}
					class:rightMiddle={hero.position === 'right-middle'}
					class:rightBottom={hero.position === 'right-bottom'}
					class="absolute inset-0 flex my-20 mx-5 lg:mx-20 z-10"
				>
					<div class="">
						<h1 class="text-error-500 text-xl md:text-4xl white-stroke font-heavitas">
							Paolo genovese
						</h1>
						<h1 class="text-error-500 text-xl md:text-5xl white-stroke font-heavitas">
							teljesen idegenek
						</h1>
						<div class="gap-4 flex mt-4">
							<a href="/hirek" class="btn variant-filled-error text-white font-heavitas"
								>jegyvásárlás</a
							>
							<a href="/hirek" class="btn variant-filled-error text-white font-heavitas"
								>részletek</a
							>
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
	.middle {
		justify-content: center;
		align-items: center;
	}
	.middleTop {
		justify-content: center;
		align-items: flex-start;
	}
	.middleBottom {
		justify-content: center;
		align-items: flex-end;
	}
	.leftTop {
		justify-content: flex-start;
		align-items: flex-start;
	}
	.leftMiddle {
		justify-content: flex-start;
		align-items: center;
	}
	.leftBottom {
		justify-content: flex-start;
		align-items: flex-end;
	}
	.rightBottom {
		justify-content: flex-end;
		align-items: flex-end;
	}
	.rightTop {
		justify-content: flex-end;
		align-items: flex-start;
	}
	.rightMiddle {
		justify-content: flex-end;
		align-items: center;
	}
	.white-stroke {
		stroke: white;
		stroke-width: 1;
		-webkit-text-stroke: 1px #ffffff;
	}
	@media screen and (min-width: 768px) {
		.white-stroke {
			stroke-width: 2;
			-webkit-text-stroke: 2px #ffffff;
		}
	}
</style>
