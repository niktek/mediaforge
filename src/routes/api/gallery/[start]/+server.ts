import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {Media} from '$lib/types/Media';

export const GET: RequestHandler = async ({ params }) => {
	var media: Array<Media> = new Array();
	for (let x = 1; x < 50; x++) {
		media.push(new Media('https://via.placeholder.com/180x180/100', 180, 180, '180x180'));
	}
	return new Response(JSON.stringify(media));
};
// <img src="https://via.placeholder.com/180x200/100" alt="180x200" />
// <img src="https://via.placeholder.com/200x210/100" alt="200x210" />
// <img src="https://via.placeholder.com/140x250/100" alt="140x250" />
