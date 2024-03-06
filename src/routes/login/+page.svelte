<script lang="ts">
	import apiConfig from '../../configs/apiConfig';
	import { goto } from '$app/navigation';
	import { handleLogin, isAuthenticated } from "../../services/auth"
	let email=""
	let password=""

	async function submit() {
        const response = await fetch(apiConfig.loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                // Set the session cookie
                document.cookie = `session=${data.token}; path=/; HttpOnly`;
                goto('/dashboard');
                console.log(data.token);
            } else {
                alert("Login failed");
            }
        } else {
            alert("Login failed");
        }
    }

</script>

<svelte:head>
	<title>login</title>
	<meta name="description" content="Login the app" />
</svelte:head>

<div class="text-column">
	<h1 class="mainTitle">welcome to the login page!</h1>


	<form on:submit|preventDefault={submit} class="flex flex-col justify-center text-center mx-auto w-full md:w-1/2">
		<div class="form-group">
			<label for="username">Username</label>
			<input bind:value={email} type="email" id="username" name="username" placeholder="email" class="py-2"/>
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input bind:value={password} type="password" id="password" name="password" placeholder="password" class="py-2"/>
		</div>

		<button type="submit">Login</button>
	</form>
</div>