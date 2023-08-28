import type { PageLoad } from './$types';
import api from '$lib/api';

export async function load({ params }: any) {
	const { data } = await api.get(`/eloadasok/slug/${params.slug}`, {
		params: { depth: 6 }
	});
	const { data: partners } = await api.get('/partner', { params: { limit: 999999 } });

	return {
		props: {
			eloadasok: data,
			partners: partners
		}
	};
}
