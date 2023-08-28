<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import { Navigation, Pagination, Autoplay } from 'swiper/modules';
	import { onMount } from 'svelte';
	export let heroes: any;

	console.log(heroes);
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
					loading="lazy"
				/>
				<img
					src={hero.hero.value.heroMobile.sizes.medium.url}
					alt=""
					class="landscape:hidden object-cover h-full w-full"
					loading="lazy"
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
					class="absolute inset-0 flex mt-20 mb-24 lg:my-40 mx-5 lg:mx-20 z-10"
				>
					<div
						class:textLeft={hero.position === 'left-top' ||
							hero.position === 'left-middle' ||
							hero.position === 'left-bottom'}
						class:textRight={hero.position === 'right-top' ||
							hero.position === 'right-middle' ||
							hero.position === 'right-bottom'}
					>
						{#if hero.hero.value.author}
							<h1
								class="lowercase text-error-500 my-2 text-xl md:text-5xl white-stroke font-heavitas"
							>
								{hero.hero.value.author}
							</h1>
						{/if}
						{#if !hero.hero.value.author}
							<h1
								class="lowercase text-error-500 my-2 max-w-3xl text-2xl md:text-6xl white-stroke font-heavitas"
							>
								{hero.hero.value.title}
							</h1>
						{:else}
							<h1 class="lowercase text-error-500 text-3xl md:text-6xl white-stroke font-heavitas">
								{hero.hero.value.title}
							</h1>
						{/if}
						<div
							class="gap-4 flex mt-4"
							class:btnCenter={hero.position === 'top-middle' ||
								hero.position === 'bottom-middle' ||
								hero.position === 'middle'}
							class:btnLeft={hero.position === 'left-top' ||
								hero.position === 'left-middle' ||
								hero.position === 'left-bottom'}
							class:btnRight={hero.position === 'right-top' ||
								hero.position === 'right-middle' ||
								hero.position === 'right-bottom'}
						>
							<a
								href="https://jatekszin.jegy.hu/"
								class="btn variant-filled-error text-white font-heavitas">jegyvásárlás</a
							>
							<a
								href={`/eloadasok/${hero.hero.value.slug}`}
								class="btn variant-filled-error text-white font-heavitas">részletek</a
							>
						</div>
					</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<style>
	.textLeft {
		text-align: left;
	}
	.textRight {
		text-align: right;
	}
	.btnCenter {
		justify-content: center;
	}
	.btnLeft {
		justify-content: flex-start;
	}
	.btnRight {
		justify-content: flex-end;
	}
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
	@media screen and (max-width: 1023px) {
		.textLeft {
			text-align: center;
		}
		.textRight {
			text-align: center;
		}
		.btnCenter {
			justify-content: center;
		}
		.btnLeft {
			justify-content: center;
		}
		.btnRight {
			justify-content: center;
		}
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
			justify-content: center;
			align-items: flex-start;
		}
		.leftMiddle {
			justify-content: center;
			align-items: center;
		}
		.leftBottom {
			justify-content: center;
			align-items: flex-end;
		}
		.rightBottom {
			justify-content: center;
			align-items: flex-end;
		}
		.rightTop {
			justify-content: center;
			align-items: flex-start;
		}
		.rightMiddle {
			justify-content: center;
			align-items: center;
		}
	}
	@media screen and (min-width: 768px) {
		.white-stroke {
			stroke-width: 2;
			-webkit-text-stroke: 2px #ffffff;
		}
	}
</style>
