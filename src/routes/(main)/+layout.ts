import type { LayoutLoad } from './$types';
import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/globals/menu');
	return {
		props: {
			menu: data
		}
	};
}
