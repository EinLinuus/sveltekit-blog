import { process } from '$lib/markdown';
import fs from 'fs';

export function get({ params }) {
	const { slug } = params;

	if (!fs.existsSync(`src/posts/${slug}.md`))
		return {
			status: 404
		};

	const { metadata, content } = process(`src/posts/${slug}.md`);
	const body = JSON.stringify({ metadata, content });

	return {
		body
	};
}
