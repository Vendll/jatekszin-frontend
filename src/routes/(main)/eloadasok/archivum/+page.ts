import type { PageData } from './$types';
import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/eloadasok', {
		params: { limit: 10, page: 1, depth: 5, where: { archived: { equals: true } } }
	});
	const { data: pageMeta } = await api.get('/globals/eloadasok-oldal');

	return {
		props: {
			eloadasok: data,
			pageMeta: pageMeta
		}
	};
}
