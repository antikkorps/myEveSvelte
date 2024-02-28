<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Avatar } from '@skeletonlabs/skeleton';
	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold underline">
		Hello world!
	  </h1>

<div class="container mx-auto p-8 space-y-8">
	<Avatar src="https://i.pravatar.cc/" />
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary my-4" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary my-4" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary my-4" href="https://github.com/">GitHub</a>
	</section>
</div>
            



</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
