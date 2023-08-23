import axios from 'axios';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const api = axios.create({
	baseURL: `${PUBLIC_BACKEND_URL}/api`,
	headers: {
		'Content-Type': 'application/json'
	}
});
export default api;
