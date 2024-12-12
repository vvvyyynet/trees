<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	let { children } = $props();

	let isRoot = $derived($page.url.pathname === '/');
</script>

<div
	class="absolute h-screen w-screen overflow-hidden text-sm md:text-xl {isRoot
		? 'bg-[#212822] text-white'
		: 'bg-white text-black'}"
>
	<div class="absolute top-0 flex h-[50px] w-screen flex-row gap-2 px-4 py-2 md:gap-8">
		<button
			type="button"
			class="mr-[10px] hover:text-green-300 md:mr-[40px]"
			onclick={() => {
				goto('.');
			}}
		>
			Visualising Urban Tree Ecosystems
		</button>
		<button
			class=" hover:text-green-300"
			type="button"
			onclick={() => {
				goto('/requirements');
			}}>Requirements</button
		>
		<button
			class="hover:text-green-300"
			type="button"
			onclick={() => {
				goto('/info');
			}}>Info</button
		>
	</div>

	<div class="absolute top-[50px] h-[calc(100%-50px)] w-screen overflow-y-auto py-2">
		{@render children()}
	</div>
</div>
