<script lang='ts'>
	
	import { Avatar } from '@skeletonlabs/skeleton';
	import Hero from '../Hero.svelte';
	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
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

</style>
