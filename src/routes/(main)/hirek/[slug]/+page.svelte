<script>
	import Richtext from '$components/Richtext.svelte';
	export let data;
	const hirek = data.props.hirek.docs[0];
</script>

<div class="relative overflow-hidden bg-white prose mx-auto my-16">
	<div class="relative py-16 px-6 lg:px-8">
		<div class="mx-auto text-lg">
			<h1>
				<span
					class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
					>JavaScript for Beginners</span
				>
			</h1>
			<p class="mt-8 text-xl leading-8 text-gray-500">
				<Richtext content={hirek.content} />
			</p>
		</div>
	</div>
</div>
