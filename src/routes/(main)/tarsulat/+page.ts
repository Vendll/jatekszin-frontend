import type { PageLoad } from './$types';
import api from '$lib/api';

export const load: PageLoad = async () => {
	const { data } = await api.get('/globals/tarsulat-oldal', { params: { depth: '5' } });
	const { data: munkatarsak } = await api.get('/munkatars', {
		params: { depth: '5', limit: 9999, page: 1 }
	});

	return {
		props: {
			commonPage: data,
			munkatarsak: munkatarsak
		}
	};
};
