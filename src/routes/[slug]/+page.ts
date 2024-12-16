import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async function load({ data }) {
	const { imageData } = data;

	if (!imageData) {
		throw error(404, 'Not found!');
	}

	return {
		...data,
		imageData: JSON.parse(imageData),
	};
};
