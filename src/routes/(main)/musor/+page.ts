import type { PageLoad } from './$types';
import api from '$lib/api';

export const load: PageLoad = async () => {
	const { data } = await api.get('/musor');
	const { data: commonPage } = await api.get('/globals/musorok-oldal', { params: { depth: '5' } });

	return {
		props: {
			musor: data,
			commonPage
		}
	};
};
