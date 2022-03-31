<script context="module">
	import { base } from '$app/paths';

	export async function load({ page, fetch }) {
		const slug = page.params.slug;
		try {
			const postRequest = await fetch(`${base}/blog/${slug}.json`);
			const postData = await postRequest.json();
			return {
				props: {
					post: postData
				}
			};
		} catch (error) {
			return { status: 404 };
		}
	}
</script>

<script>
	export let post;
	let date = post.metadata.date.toUpperCase();
	let author = post.metadata.author;
</script>

<svelte:head>
	<title>{post.metadata.title}</title>
</svelte:head>

<h1 class="title">{post.metadata.title}</h1>
<p class="info"><a href={`${base}/authors/${author}`}>{author}</a> {date}</p>
{@html post.content}
