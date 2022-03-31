<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const posts = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { posts }
		};
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="rounded border border-black/5 bg-white shadow max-w-xl mx-auto p-4 my-8">
	<h1 class="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 mt-6">
		SvelteKit Blog with Tailwind CSS
	</h1>
	<p class="info">Check out {posts.length} posts:</p>
	<div class="divide-y divide-black/50 mt-6">
		{#each posts as post}
			<a class="py-2" href={`${base}/blog/${post.slug}`}>
				<h2 class="title text-lg sm:text-xl md:text-2xl">{post.metadata.title}</h2>
				<p>{post.metadata.excerpt}</p>
			</a>
		{/each}
	</div>
</div>
