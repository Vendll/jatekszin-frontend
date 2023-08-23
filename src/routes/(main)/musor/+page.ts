import type { PageLoad } from './$types';
import api from '$lib/api';

export const load: PageLoad = async () => {
	const { data } = await api.get('/musor');

	return {
		props: {
			musor: data
		}
	};
};
