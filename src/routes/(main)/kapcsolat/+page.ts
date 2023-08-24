import type { PageLoad } from './$types';
import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/globals/Kapcsolat-oldal');

	return {
		props: {
			kapcsolat: data
		}
	};
}
