import type { LayoutLoad } from './$types';
import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/globals/kapcsolat-oldal').catch((err) => console.log(err));

	return {
		props: {
			menu: data
		}
	};
}