<script context="module" lang="ts">
    import { isAuthenticated } from "../../services/auth";
    import type { Load } from '@sveltejs/kit';
	import {getContext} from "svelte"

	const user = getContext('user');

	</script>

<svelte:head>
	<title>Dashboard home</title>
	<meta name="description" content="Dashboard Section" />
</svelte:head>

<div class="text-column">
	<h1 class="mainTitle">This is the dashboard section</h1>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
	<p>welcome {user}</p>
</div>