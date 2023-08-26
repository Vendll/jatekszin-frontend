import type { PageLoad } from './$types';
import api from '$lib/api';

export const load: PageLoad = async () => {
	const { data } = await api.get('/globals/kezdolap');
	const { data: kiemeltHirek } = await api.get(`/hirek`, {
		params: { limit: 3, page: 1, depth: 5, sort: '-date' }
	});
	const { data: partners } = await api.get('/partner');

	return {
		props: {
			kezdolap: data,
			kiemeltHirek,
			partners
		}
	};
};
