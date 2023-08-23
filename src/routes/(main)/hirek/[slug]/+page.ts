import api from '$lib/api';

export async function load({ params }) {
	const { data } = await api.get(`/hirek/slug/${params.slug}`, {
		params: { depth: 5 }
	});
	return {
		props: {
			hirek: data
		}
	};
}
