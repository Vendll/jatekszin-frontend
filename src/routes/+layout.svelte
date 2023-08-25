<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import TopButton from '$components/TopButton.svelte';
	import '@beyonk/gdpr-cookie-consent-banner/style.css';
	import { Banner as GdprBanner } from '@beyonk/gdpr-cookie-consent-banner';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<slot />
<TopButton />
<GdprBanner
	cookieName="gdpr_consent"
	heading="Ez a weboldal sütiket használ"
	description="A www.jatekszin.hu oldal kizárólag az oldal működéséhez szükséges sütiket és HTTP sütiket használ. Az oldal böngészésével hozzájárul a sütik használatához.
Elolvastam és elfogadom a www.jatekszin.hu oldal Süti szabályzatát.
"
	acceptLabel="Elfogadom"
	settingsLabel="Cookie beállítások"
	closeLabel="Beállítások mentése"
	choices={{
		necessary: {
			label: 'Szükséges cookiek',
			description:
				'Az elengedhetetlen sütik segítenek használhatóvá tenni a weboldalunkat azáltal, hogy engedélyeznek olyan alapvető funkciókat, mint az oldalon való navigáció és a weboldal biztonságos területeihez való hozzáférés. A weboldal ezen sütik nélkül nem tud megfelelően működni.',
			value: true
		},
		tracking: {
			label: 'Hírdetési cookiek',
			description: '',
			value: true
		},
		analytics: {
			label: 'Statisztikai cookiek',
			description: '',
			value: true
		},
		marketing: {
			label: 'Marketing cookiek',
			description: '',
			value: true
		}
	}}
/>
