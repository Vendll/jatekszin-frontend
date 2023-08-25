import type { PageLoad } from './$types';
import api from '$lib/api';

export const load: PageLoad = async () => {
	const { data } = await api.get('/globals/kozadatok-oldal', { params: { depth: '5' } });

	return {
		props: {
			commonPage: data
		}
	};
};
