<svelte:head>
	<title>login</title>
	<meta name="description" content="Login the app" />
</svelte:head>

<div class="text-column">
	<h1>This is the login page!</h1>


	<form>
		<div class="form-group">
			<label for="username">Username</label>
			<input type="text" id="username" name="username" class="py-2"/>
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" class="py-2"/>
		</div>

		<button type="submit">Login</button>
	</form>
</div>