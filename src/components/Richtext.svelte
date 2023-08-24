<script lang="ts">
	import escapeHTML from 'escape-html';
	import { Text } from 'slate';

	function serialize(children: any) {
		return children
			.map((node: any) => {
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
						const getImage = (size: string) => {
							switch (size) {
								case 'small':
									return node.value.sizes.small.url;
								case 'medium':
									return node.value.sizes.medium.url;
								case 'large':
									return node.value.sizes.large.url;
								case 'xlarge':
									return node.value.sizes.xlarge.url;
								default:
									return node.value.sizes.medium.url;
							}
						};
						const getPosition = (position: string) => {
							switch (position) {
								case 'left':
									return 'mr-auto';
								case 'right':
									return 'ml-auto';
								default:
									return 'mx-auto';
							}
						};
						return `<img class="rounded-md ${getPosition(node.value.position)}" src="${escapeHTML(
							getImage(node.value.size)
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

<div>
	{@html renderedConent}
</div>
