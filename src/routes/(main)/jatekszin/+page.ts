import api from '$lib/api';

export async function load() {
	const { data } = await api.get('/globals/Jatekszin-oldal', { params: { depth: '5' } });

	return {
		props: {
			commonPage: data
		}
	};
}
