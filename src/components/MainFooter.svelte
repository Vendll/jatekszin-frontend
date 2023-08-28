<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebook from 'svelte-icons-pack/fa/FaBrandsFacebook';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import FaBrandsYoutube from 'svelte-icons-pack/fa/FaBrandsYoutube';
	import FaBrandsTiktok from 'svelte-icons-pack/fa/FaBrandsTiktok';
	export let navItems: any;
	let year = new Date().getFullYear();
</script>

<footer class="bg-primary-600" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-24">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8 -mt-8">
				<div class="flex shrink">
					<Logo height={'7rem'} slideUp={false} width={'100%'} color={false} />
				</div>
				<a
					aria-label="A Játékszín egészségéről a Budai Magánorvosi Centrum gondoskodik"
					href="https://budaimaganrendelo.hu/"
					target="_blank"
					class="text-sm leading-6 text-gray-300 hover:text-white"
				>
					A Játékszín egészségéről a Budai Magánorvosi Centrum gondoskodik
				</a><br /><br />
				<a
					aria-label="A Játékszín tudatos étkezéséről a Smart Food gondoskodik"
					href="https://smart-food.hu"
					target="_blank"
					class="text-sm leading-6 text-gray-300 hover:text-white"
				>
					A Játékszín tudatos étkezéséről a Smart Food gondoskodik
				</a>
				<div class="flex justify-between">
					<a
						aria-label="Facebook"
						class="justify-center flex"
						href={navItems.facebookLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon color="white" className="text-3xl" src={FaBrandsFacebook} />
					</a>
					<a
						aria-label="Instagram"
						class="justify-center flex"
						href={navItems.instagramLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon color="white" className="text-3xl" src={FaBrandsInstagram} />
					</a>
					<a
						aria-label="Youtube"
						class="justify-center flex"
						href={navItems.youtubeLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon color="white" className="text-3xl" src={FaBrandsYoutube} />
					</a>
					<a
						aria-label="Tiktok"
						class="justify-center flex"
						href={navItems.tiktokLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon color="white" className="text-3xl" src={FaBrandsTiktok} />
					</a>
				</div>
			</div>
			<div class="mt-16 gap-8 xl:col-span-2 xl:mt-0">
				<div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Hasznos linkek</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									aria-label="IMPRESSZUM"
									href="/impresszum"
									class="text-sm leading-6 text-gray-300 hover:text-white">IMPRESSZUM</a
								>
							</li>

							<li>
								<a
									aria-label="KÖZADATOK"
									href="/kozadatok"
									class="text-sm leading-6 text-gray-300 hover:text-white">KÖZADATOK</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Elérhetőségek:</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									aria-label="1066 Budapest, Teréz krt. 48."
									href="/kapcsolat"
									class="text-sm leading-6 text-gray-300 hover:text-white"
									>1066 Budapest, Teréz krt. 48.</a
								>
							</li>

							<li>
								<a
									aria-label="info@jatekszin.hu"
									href="mailto:info@jatekszin.hu"
									class="text-sm leading-6 text-gray-300 hover:text-white">info@jatekszin.hu</a
								>
							</li>

							<li>
								<a
									aria-label="+36 (1) 331-8925"
									href="tel:+3613318925"
									class="text-sm leading-6 text-gray-300 hover:text-white">+36 (1) 331-8925</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Adatvédelem</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									aria-label="ADATKEZELÉSI TÁJÉKOZTATÓ"
									href="/adatkezelesi-szabalyzat"
									class="text-sm leading-6 text-gray-300 hover:text-white"
									>ADATKEZELÉSI TÁJÉKOZTATÓ</a
								>
							</li>

							<li>
								<a
									aria-label="KÉP ÉS HANGFELVÉTEL"
									href="/kep-es-hangfelvetel"
									class="text-sm leading-6 text-gray-300 hover:text-white">KÉP ÉS HANGFELVÉTEL</a
								>
							</li>

							<li>
								<a
									aria-label="NYEREMÉNYJÁTÉK SZABÁLYZATOK"
									href="/nyeremenyjatek-szabalyzatok"
									class="text-sm leading-6 text-gray-300 hover:text-white"
									>NYEREMÉNYJÁTÉK SZABÁLYZATOK</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-100/20 pt-8 sm:mt-16 lg:mt-20">
			<p class="text-xs leading-5 text-white">
				{year} &copy; JÁTÉKSZÍN Nonprofit Közhasznú Kft. Minden jog fenttartva.
			</p>
		</div>
	</div>
</footer>
