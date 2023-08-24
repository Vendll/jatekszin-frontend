import type { PageLoad } from './$types';
import api from '$lib/api';

export async function load({ params }: any) {
	const { data } = await api.get(`/eloadasok/slug/${params.slug}`, {
		params: { depth: 6 }
	});

	return {
		props: {
			eloadasok: data
		}
	};
}
