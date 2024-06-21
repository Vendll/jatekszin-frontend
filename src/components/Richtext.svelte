<script lang="ts">
	import escapeHTML from 'escape-html';
	import { Text } from 'slate';

	function isText(node) {
		return node && typeof node.text === 'string';
	}

	function serializeText(node) {
		let text = escapeHTML(node.text).replace(/\n/g, '<br>');

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

	function serializeNode(node) {
		if (isText(node)) {
			return serializeText(node);
		}

		if (!node || !node.children) {
			return '';
		}

		switch (node.type) {
			case 'h1':
				return `<h1>${serialize(node.children)}</h1>`;
			case 'h2':
				return `<h2>${serialize(node.children)}</h2>`;
			case 'h3':
				return `<h3>${serialize(node.children)}</h3>`;
			case 'h4':
				return `<h4>${serialize(node.children)}</h4>`;
			case 'h5':
				return `<h5>${serialize(node.children)}</h5>`;
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
				return `<a target="${node.newTab ? '_blank' : '_self'}" href="${escapeHTML(
					node.url
				)}">${serialize(node.children)}</a>`;
			case 'upload':
				return serializeUpload(node);
			default:
				return `<p>${serialize(node.children)}</p>`;
		}
	}

	function serializeUpload(node) {
		const getImage = (size) => {
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

		const getPosition = (position) => {
			switch (position) {
				case 'left':
					return 'float-left mr-4';
				case 'right':
					return 'float-right ml-4';
				default:
					return 'mx-auto';
			}
		};

		return `<img class="rounded-md ${getPosition(node.value.position)}" src="${escapeHTML(
			getImage(node.value.size)
		)}" alt="${escapeHTML(node.alt || '')}" />`;
	}

	function serialize(children) {
		if (!Array.isArray(children)) {
			console.error('Expected children to be an array, got:', children);
			return '';
		}

		const content = children.map(serializeNode).join('');
		return `<div class="mx-auto prose lg:prose-xl">${content}</div>`;
	}

	export let content;

	const renderedConent = serialize(content);
</script>

<div>
	{@html renderedConent}
</div>
