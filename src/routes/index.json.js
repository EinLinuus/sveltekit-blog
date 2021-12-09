import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get() {
	const posts = fs
		.readdirSync(`src/posts`)
		.filter((fileName) => /.+\.md$/.test(fileName))
		.map((fileName) => {
			const { metadata } = process(`src/posts/${fileName}`);
			return {
				metadata,
				slug: fileName.slice(0, -3)
			};
		});

	return { body: posts };
}
