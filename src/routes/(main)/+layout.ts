import type { LayoutLoad } from './$types';
import api from '$lib/api';

export const load: LayoutLoad = async () => {
	const { data } = await api.get('/globals/menu');

	return {
		props: {
			menu: data
		}
	};
};
