<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import { SlideToggle, InputChip } from '@skeletonlabs/skeleton';

	let markdownFiles = $state([]);
	let selectedTags = $state([]);
	let textQuery = $state('');
	let isVisibleFilters = $state(true);
	let useSomeTags = $state(false);
	let useSomeChips = $state(false);
	let isCaseSensitive = $state(false);
	let textChips = $state([]);
	let textChipTyping = $state('');

	let updatedChipList = $derived(
		[textChipTyping.length > 0 ? textChipTyping : null, ...textChips].filter(Boolean)
	);
	$inspect(updatedChipList);

	// --------------------------------------------
	// Tag coloring
	const tagCat1Colors = ['#5ddb83', '#d4955f', '#ff7455', '#798cee', '#9fece2', '#d3e16e'];
	function getTagColor(tag) {
		return tagCat1Colors[allTagsCat.indexOf(tag)];
	}
	function getPrioColor(tag) {
		if (tag === '1') return '#ff7455';
		else if (tag === '2') return '#9fece2';
		else return 'white';
	}

	// Create array with all tags
	let allTagsCat = $derived(Array.from(new Set(markdownFiles.flatMap((file) => file.tagsCat))));
	let allTagsPrio = $derived(Array.from(new Set(markdownFiles.flatMap((file) => file.tagsPrio))));
	// --------------------------------------------
	// Load and parse markdown files
	async function loadMarkdownFiles() {
		const files = import.meta.glob('/src/lib/files/*.md', { query: '?raw', import: 'default' });

		for (const [path, resolver] of Object.entries(files)) {
			const content = await resolver();
			const { tagsCat, tagsPrio, H2blocks, title } = parseMarkdown(content);
			markdownFiles.push({
				name: path.split('/').pop(), // Extract the filename
				title,
				tagsCat,
				tagsPrio,
				H2blocks
			});
		}
	}

	// --------------------------------------------
	// Parse Markdown and extract tags, H2-content and title
	function parseMarkdown(content) {
		// Extract Tags
		const lines = content.split('\n');
		const tagsCat = lines[0]?.match(/#\S+/g)?.map((tag) => tag.replace(/^#/, '')) || [];
		const tagsPrio = lines[1]?.match(/#\S+/g)?.map((tag) => tag.replace(/^#/, '')) || [];

		// Extract Content of H1 Title
		const H1Regex = /^#\s+(.*?)$/m;
		// ^#: This matches the start of a line (^), followed by exactly one hash (#) character.
		// \s+: This matches one or more whitespace characters (spaces or tabs) following the ##.
		// (.*?): This is a non-greedy match that captures the heading text itself. It matches any sequence of characters (.), but it will stop as soon as it finds a line break or the end of the heading text, because of the *? (non-greedy) quantifier.
		// $: This indicates the end of the line.
		// m-flag means "multiline", which allows the regex to work across multiple lines.

		const title = H1Regex.exec(content)[1];

		// Extract Content of H2 Headings
		const H2blocks = [];
		const H2Regex = /^##\s+(.*?)$/gm;
		// as explained above
		// g-flag means "global", so the regular expression will search through the entire content string, not just stopping after the first match.
		let matchH2;
		// matchH2[0] contains the full matched string
		// matchH2[1] contains the actual text of the heading, as captured by the (.*?) group.

		while ((matchH2 = H2Regex.exec(content)) !== null) {
			const H2block = matchH2[1];
			// get subsequent content
			const startIndex = matchH2.index + matchH2[0].length;
			const nextHeadingIndex = content.slice(startIndex).search(/^##\s+/m);
			const headingContent =
				nextHeadingIndex === -1
					? // last the end for last entry (nextHeadingIndex===-1 means, no more H2 found)
						content.slice(startIndex).trim()
					: // cut in the middle
						content.slice(startIndex, startIndex + nextHeadingIndex).trim();
			H2blocks.push({ H2block, content: headingContent });
		}

		return { tagsCat, tagsPrio, H2blocks, title };
	}

	// ------------------------------------------------------
	// Filter files
	let filteredFiles = $derived.by(() => {
		let files;

		// Filter by Tag
		if (selectedTags.length === 0) {
			files = markdownFiles;
		} else {
			files = markdownFiles.filter((file) => {
				if (useSomeTags) {
					return selectedTags.some(
						(tag) => file.tagsCat.includes(tag) || file.tagsPrio.includes(tag)
					);
				} else {
					return selectedTags.every(
						(tag) => file.tagsCat.includes(tag) || file.tagsPrio.includes(tag)
					);
				}
			});
		}

		// Filter by Text-Chips
		if (updatedChipList.length) {
			files = files.filter((file) => {
				const fullTextContent = file.H2blocks.flatMap((block) => block.content).join('|');
				const fullText = [fullTextContent, file.title].join('|');
				if (useSomeChips) {
					return isCaseSensitive
						? updatedChipList.some((chip) => fullText.includes(chip))
						: updatedChipList.some((chip) => fullText.toLowerCase().includes(chip.toLowerCase()));
				} else {
					return isCaseSensitive
						? updatedChipList.every((chip) => fullText.includes(chip))
						: updatedChipList.every((chip) => fullText.toLowerCase().includes(chip.toLowerCase()));
				}
			});
		}
		return files;
	});

	function highlightText(content, terms) {
		console.log('terms:', terms);
		function escapeRegex(string) {
			// Escapes regex special characters
			// -> ensures that any special characters in the query terms (like . or *) are treated as literal characters.
			return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		}
		if (!terms) return content;
		const flags = isCaseSensitive ? 'g' : 'gi';
		const queryPattern = terms.map((term) => escapeRegex(term)).join('|');
		const regex = new RegExp(`(${queryPattern})`, flags);
		return content.replace(regex, '<mark>$1</mark>');
	}

	// Select/Deselect a tag for filtering
	function toggleTag(tag) {
		selectedTags = selectedTags.includes(tag)
			? selectedTags.filter((t) => t !== tag)
			: [...selectedTags, tag];
	}

	function toggleFilters() {
		isVisibleFilters = !isVisibleFilters;
	}
	onMount(loadMarkdownFiles);
</script>

<div
	class="grid h-full w-full {isVisibleFilters
		? 'grid-rows-[minmax(50%,300px)_auto] md:grid-rows-[minmax(45%,200px)_auto]'
		: 'grid-rows-[minmax(10%,20px)_auto]'} transition-all"
>
	<div class="mb-[50px] flex min-h-[200px] flex-col gap-4 px-2 md:px-5">
		<!-- Tag Filter Menus -->
		<button
			type="button"
			class="md:text-md btn w-[150px] rounded-full border-2 border-black bg-white py-1 text-xs text-black"
			onclick={toggleFilters}
		>
			{#if isVisibleFilters}
				<span>
					<ChevronUp />
				</span>
				<span>Hide Filters</span>
			{:else}
				<span>
					<ChevronDown />
				</span>
				<span>Show Filters</span>
			{/if}
		</button>

		<!-- Category Tags -->
		{#if isVisibleFilters}
			<div>
				<h2 class="mb-2 text-xs">filter by category</h2>
				<div class="flex flex-wrap gap-2">
					{#each Array.from(new Set(markdownFiles.flatMap((file) => file.tagsCat))) as tag}
						<button
							onclick={() => toggleTag(tag)}
							class="btn rounded-full border-2 px-3 py-1 text-xs uppercase"
							style={`border-color: ${getTagColor(tag)}; background-color: ${
								selectedTags.includes(tag) ? getTagColor(tag) : 'white'
							}`}
						>
							{tag}
						</button>
					{/each}
					<SlideToggle
						bind:checked={useSomeTags}
						class="ml-5 text-sm"
						size="sm"
						background="bg-red-400 dark:bg-red-700"
					>
						{useSomeTags ? 'filter some' : 'filter all'}
					</SlideToggle>
				</div>
			</div>

			<!-- Priority Tags -->
			<div>
				<h2 class="mb-2 text-xs">filter by priority</h2>
				<div class="flex flex-wrap gap-2">
					{#each Array.from(new Set(markdownFiles.flatMap((file) => file.tagsPrio))) as tag}
						<button
							onclick={() => toggleTag(tag)}
							class="btn rounded-none border-2 px-2 py-1 text-xs"
							style={`border-color: ${getPrioColor(tag)}; background-color: ${
								selectedTags.includes(tag) ? getPrioColor(tag) : 'white'
							}`}
						>
							{tag}
						</button>
					{/each}
				</div>
			</div>

			<!-- Text Query Filter -->
			<div class="mb-4">
				<h2 class="mb-2 text-xs">filter by text</h2>

				<!-- Simple Textfield -->
				<!-- <div
					class="input-group grid w-[200px] grid-cols-[1fr_auto] rounded-full border border-black py-2 pl-4"
				>
					<input
						type="text"
						class="w-full text-xs focus:border-black focus:outline-none"
						placeholder="Search text..."
						oninput={(e) => {
							textQuery = e.target.value;
						}}
					/>

					<button
						onclick={() => {
							isCaseSensitive = !isCaseSensitive;
						}}
						class="rounded-full py-1 text-sm focus:underline focus:outline-none
					{isCaseSensitive ? 'font-bold text-green-400 dark:text-green-600' : 'text-black'}"
					>
						Aa
					</button>
				</div> -->

				<!-- Textfield with Chips -->
				<div
					class="grid grid-cols-[1fr_auto] rounded-full border border-black px-4 py-0 transition-all {updatedChipList.length
						? 'w-full'
						: 'w-[400px]'}"
				>
					<InputChip
						bind:value={textChips}
						bind:input={textChipTyping}
						class="m-0 cursor-default p-0 text-xs focus:border-black focus:outline-none"
						regionChipWrapper="md:flex md:flex-row-reverse md:gap-5 px-0 md:space-y-0"
						regionChipList="md:flex md:flex-row md:flex-nowrap px-0 mx-0"
						regionInput="px-0 mx-0 min-w-[200px]"
						name="chips"
						placeholder="Enter any value..."
					/>
					<div class="flex gap-5">
						<button
							onclick={() => {
								isCaseSensitive = !isCaseSensitive;
							}}
							class="rounded-full py-1 text-sm focus:underline focus:outline-none
					{isCaseSensitive ? 'font-bold text-green-400 dark:text-green-600' : 'text-black'}"
						>
							Aa
						</button>
						<button
							onclick={() => {
								useSomeChips = !useSomeChips;
							}}
							class="rounded-full py-1 text-sm focus:underline focus:outline-none
						"
						>
							{useSomeChips ? 'filter some' : 'filter all'}
						</button>
						<!-- <SlideToggle
							bind:checked={useSomeChips}
							class="text-sm"
							label="flex flex-row-reverse"
							background="bg-red-400 dark:bg-red-700"
						>
							<span>{useSomeChips ? 'filter some' : 'filter all'}</span>
						</SlideToggle> -->
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Markdown Table -->
	<div class="overflow-scroll px-2 pb-[200px] md:px-5">
		<table>
			<!-- Head of the table -->
			<thead>
				<tr>
					<th class="min-w-[200px]">Feature</th>

					<!-- For all remaining H2blocks use the H2blocks in the first file, assuming they are all the same -->
					{#if filteredFiles.length > 0}
						{#each filteredFiles[0].H2blocks as H2block}
							<th>{H2block.H2block}</th>
						{/each}
					{/if}
				</tr>
			</thead>

			<!-- Body of the table -->
			<tbody>
				{#each filteredFiles as file}
					<tr>
						<!-- First column (feature) -->
						<td class="w-[200px]">
							<!-- Title -->
							<div class="mb-4 text-lg md:text-xl">
								{@html marked(highlightText(file.title, updatedChipList))}
							</div>
							<!-- Tags -->
							<div class="mt-2 flex flex-col gap-2 pl-4">
								<!-- Categories -->
								<div class="flex flex-wrap gap-2">
									{#each file.tagsCat as tag}
										<span
											class="rounded-full px-3 py-1 text-xs uppercase"
											style={`background-color: ${getTagColor(tag)}`}>{tag}</span
										>
									{/each}
								</div>
								<!-- Priority -->
								<div class="border-1 flex flex-wrap gap-2">
									{#each file.tagsPrio as tag}
										<span
											class="border-2 px-2 py-1 text-xs"
											style={`border-color: ${getPrioColor(tag)}`}>{tag}</span
										>
									{/each}
								</div>
							</div></td
						>

						<!-- All other columns -->
						{#each file.H2blocks as H2block}
							<td class="w-[200px]">
								<p class="prose text-sm">
									{@html marked(highlightText(H2block.content, updatedChipList))}
								</p>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	:global(mark) {
		background-color: rgb(192, 234, 192); /* Change to your desired color */
		color: black; /* Optional: Adjust text color for better contrast */
		border-radius: 3px; /* Optional: Add rounded corners */
	}
	table {
		border-collapse: collapse;
		width: 100%;
	}
	th,
	td {
		text-align: left;
		vertical-align: top;

		padding: 8px;
		padding-bottom: 18px;
		border-bottom: 1px solid black;
	}
	th {
		border-top: 1px solid black;
	}
</style>
