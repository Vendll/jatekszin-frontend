import type { PageLoad } from './$types';
import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/hirek', { params: { limit: 10, page: 1, depth: 5 } });
	return {
		props: {
			hirek: data
		}
	};
}
