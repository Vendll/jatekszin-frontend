<script lang="ts">
	export let title: any;
	export let desc: any;
	export let img: any;
	export let link: any;
</script>

<a href={`hirek/${link}`} class="flex flex-col overflow-hidden rounded-lg shadow-lg">
	<div class="flex-shrink-0">
		<img class="h-64 w-full object-cover" src={img} alt="" />
	</div>
	<div class="flex flex-1 flex-col justify-between bg-white p-6">
		<div class="flex-1">
			<div class="mt-2 block">
				<p class="text-xl font-semibold text-gray-900">{title}</p>
				<p class="mt-3 text-base text-gray-500 line-clamp-3">
					{desc}
				</p>
			</div>
		</div>
	</div>
</a>
