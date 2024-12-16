#demo
#1

# Quick demo of .md -> HTML

## Description

It is now also possible to write some...

### Heading 3

This is nice to ad some _loooooong_ list with

- many items
- more items
  - and yet
  - some
- more

#### Heading 4

Some Text lipsumawe jfklö jkwaeölf jklfaöwjfklaösf hjkalf 3ul sahfjke lwanfjkewalfjewakfö awjefklö waejfklöewaf wajkflöewaf

Another paragraph lipsumawe jfklö jkwaeölf jklfaöwjfklaösf hjkalf 3ul sahfjke lwanfjkewalfjewakfö awjefklö waejfklöewaf wajkflöewaf

### Another Heading 3

## Application

How about some **Javascript**?

### Example

```js
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
```

## References
