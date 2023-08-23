import type { PageLoad } from './$types';
import api from '$lib/api';

export async function load({ params }: any) {
	const { data } = await api.get(`/eloadasok/slug/${params.slug}`, {
		params: { depth: 6 }
	});
	console.log(data);

	const { data: musordata } = await api.get(`/musor/eloadasszerint/${data.docs[0].id}`);
	console.log(musordata);

	return {
		props: {
			eloadasok: data,
			musor: musordata
		}
	};
}