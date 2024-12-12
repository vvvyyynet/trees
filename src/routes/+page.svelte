<script>
	import { onMount } from 'svelte';
	import { writable, derived } from 'svelte/store';

	// Stores to manage data and filtering
	const markdownFiles = writable([]);
	const selectedTags = writable([]);

	// Define a long array of colors for tags
	const tagColors = [
		'bg-red-500',
		'bg-blue-500',
		'bg-green-500',
		'bg-yellow-500',
		'bg-purple-500',
		'bg-pink-500',
		'bg-indigo-500',
		'bg-teal-500',
		'bg-orange-500',
		'bg-gray-500'
	];

	// Load and parse markdown files
	async function loadMarkdownFiles() {
		const files = import.meta.glob('/src/lib/files/*.md', { query: '?raw', import: 'default' });
		const fileEntries = [];

		for (const [path, resolver] of Object.entries(files)) {
			const content = await resolver();
			const { tagsCategory1, tagsCategory2, headings } = parseMarkdown(content);
			fileEntries.push({
				name: path.split('/').pop(), // Extract the filename
				tagsCategory1,
				tagsCategory2,
				headings
			});
		}

		markdownFiles.set(fileEntries);
	}

	function parseMarkdown(content) {
		const lines = content.split('\n');
		const tagsCategory1 = lines[0]?.match(/#\S+/g)?.map((tag) => tag.replace(/^#/, '')) || [];
		const tagsCategory2 = lines[1]?.match(/#\S+/g)?.map((tag) => tag.replace(/^#/, '')) || [];

		const headingRegex = /^##\s+(.*?)$/gm;
		const headings = [];
		let match;

		while ((match = headingRegex.exec(content)) !== null) {
			const heading = match[1];
			const headingContent = getSubsequentContent(content, match.index + match[0].length);
			headings.push({ heading, content: headingContent });
		}

		return { tagsCategory1, tagsCategory2, headings };
	}

	function getSubsequentContent(content, startIndex) {
		const nextHeadingIndex = content.slice(startIndex).search(/^##\s+/m);
		return nextHeadingIndex === -1
			? content.slice(startIndex).trim()
			: content.slice(startIndex, startIndex + nextHeadingIndex).trim();
	}

	// Derived store for filtered files
	const filteredFiles = derived(
		[markdownFiles, selectedTags],
		([$markdownFiles, $selectedTags]) => {
			if ($selectedTags.length === 0) return $markdownFiles;
			return $markdownFiles.filter((file) =>
				$selectedTags.every(
					(tag) => file.tagsCategory1.includes(tag) || file.tagsCategory2.includes(tag)
				)
			);
		}
	);

	// Select/Deselect a tag for filtering
	function toggleTag(tag) {
		selectedTags.update((current) =>
			current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
		);
	}

	function getTagColor(tag) {
		const hash = Array.from(tag).reduce((acc, char) => acc + char.charCodeAt(0), 0);
		return tagColors[hash % tagColors.length];
	}

	onMount(loadMarkdownFiles);
</script>

<div class="p-4">
	<!-- Tag Filter Menus -->
	<div class="mb-4 flex flex-col gap-4">
		<!-- Category 1 Tags -->
		<div>
			<h2 class="mb-2 font-bold">Category 1 Tags</h2>
			<div class="flex flex-wrap gap-2">
				{#each Array.from(new Set($markdownFiles.flatMap((file) => file.tagsCategory1))) as tag}
					<button
						onclick={() => toggleTag(tag)}
						class="rounded-lg px-3 py-1 text-white {getTagColor(tag)} {$selectedTags.includes(tag)
							? 'ring-2 ring-offset-2'
							: ''}"
					>
						{tag}
					</button>
				{/each}
			</div>
		</div>

		<!-- Category 2 Tags -->
		<div>
			<h2 class="mb-2 font-bold">Category 2 Tags</h2>
			<div class="flex flex-wrap gap-2">
				{#each Array.from(new Set($markdownFiles.flatMap((file) => file.tagsCategory2))) as tag}
					<button
						onclick={() => toggleTag(tag)}
						class="rounded-lg px-3 py-1 text-white {getTagColor(tag)} {$selectedTags.includes(tag)
							? 'ring-2 ring-offset-2'
							: ''}"
					>
						{tag}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Markdown Table -->
	<table>
		<thead>
			<tr>
				<th>File Name / Tags</th>
				{#if $filteredFiles.length > 0}
					{#each $filteredFiles[0].headings as heading}
						<th>{heading.heading}</th>
					{/each}
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each $filteredFiles as file}
				<tr>
					<td>
						<div>{file.name}</div>
						<div class="mt-2 flex flex-wrap gap-2">
							{#each file.tagsCategory1 as tag}
								<span class="rounded px-2 py-1 text-white {getTagColor(tag)}">{tag}</span>
							{/each}
							{#each file.tagsCategory2 as tag}
								<span class="rounded px-2 py-1 text-white {getTagColor(tag)}">{tag}</span>
							{/each}
						</div>
					</td>
					{#each file.headings as heading}
						<td>{heading.content}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/* Tailwind CSS for styling */
	table {
		border-collapse: collapse;
		width: 100%;
	}
	th,
	td {
		text-align: left;
		padding: 8px;
		border-bottom: 1px solid #ddd;
	}
</style>
