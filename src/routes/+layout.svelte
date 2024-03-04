<script>
	import Header from './Header.svelte';
	import {AppBar} from '@skeletonlabs/skeleton'
	import './styles.css';
</script>

<div class="app">
	<Header />

	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		(title)
		<svelte:fragment slot="trail">(actions)</svelte:fragment>
	</AppBar>
	
	<main class="bg-neutral-100 dark:bg-neutral-950">
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
