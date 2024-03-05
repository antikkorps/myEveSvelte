<script lang="ts">
	import Header from "../components/Header.svelte"
	import './styles.css';
	import { setContext } from "svelte";
	import {writable} from "svelte/store";

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	export let user = writable()
	$: user.set(data)

	setContext("user", user)
</script>

<div class="app dark:bg-base-200 bg-slate-200">
	<Header />
	
	<main class="bg-neutral-100 dark:bg-neutral-950">
		<slot />
	</main>

	<footer>
		<h2>{user}</h2>
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
