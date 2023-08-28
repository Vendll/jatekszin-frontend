import type { PageLoad } from './$types';
import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/eloadasok', {
		params: { limit: 10, page: 1, depth: 5, where: { archived: { equals: false } } }
	});
	const { data: pageMeta } = await api.get('/globals/eloadasok-oldal');

	console.log(pageMeta);

	const eloadasok = pageMeta.eloadasok;
	console.log(eloadasok);

	return {
		props: {
			eloadasok,
			pageMeta: pageMeta
		}
	};
}
