<script lanf="ts">
	import escapeHTML from 'escape-html';
	import { Text } from 'slate';

	function serialize(children) {
		return children
			.map((node) => {
				if (Text.isText(node)) {
					let text = `<span>${escapeHTML(node.text)}</span>`;

					if (node.bold) {
						text = `<strong>${text}</strong>`;
					}

					if (node.code) {
						text = `<code>${text}</code>`;
					}
					if (node.italic) {
						text = `<em>${text}</em>`;
					}
					if (node.underline) {
						text = `<u>${text}</u>`;
					}

					return text;
				}

				if (!node) {
					return null;
				}

				switch (node.type) {
					case 'h1':
						return `<h1>${serialize(node.children)}</h1>`;
					// Iterate through all headings here...
					case 'h6':
						return `<h6>${serialize(node.children)}</h6>`;
					case 'blockquote':
						return `<blockquote>${serialize(node.children)}</blockquote>`;
					case 'ul':
						return `<ul>${serialize(node.children)}</ul>`;
					case 'ol':
						return `<ol>${serialize(node.children)}</ol>`;
					case 'li':
						return `<li>${serialize(node.children)}</li>`;
					case 'link':
						return `<a target="${node.newTab ? 'blank' : null}" href="${escapeHTML(
							node.url
						)}">${serialize(node.children)}</a>`;
					case 'upload':
						return `<img class="rounded-md" src="${escapeHTML(
							node.value.sizes.medium.url
						)}" alt="${escapeHTML(node.alt || '')}" />`;
					default:
						return `<p>${serialize(node.children)}</p>`;
				}
			})
			.join('');
	}
	export let content;
	const renderedConent = serialize(content);
</script>

{@html renderedConent}
