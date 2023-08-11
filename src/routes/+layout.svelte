<script lang="ts">
	import "../app.css"
	import { PUBLIC_CLIENT_ID, PUBLIC_REDIRECT_URI } from '$env/static/public';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';

	let login: any;
	const loggedIn = (e: Event) => user.set(login?.__userDetails);

	onMount(() => {$user = login?.__userDetails})
</script>

<mgt-msal2-provider
	client-id={PUBLIC_CLIENT_ID}
	login-type="redirect/popup"
	scopes="user.read,people.read"
	redirect-uri={PUBLIC_REDIRECT_URI}
/>
<header>
	<nav>
		<mgt-login dir="rtl"
			bind:this={login}
			on:loginCompleted={loggedIn}
			on:logoutCompleted={loggedIn}
			class="login"
		/>
	</nav>
</header>

<slot />

<style>
	.login {
		background-color: var(--fill-color);
		color: var(--neutral-foreground-rest);
		font-family: var(--body-font);
		background-color: var(--neutral-stroke-rest);
		padding: 4px;
	}

</style>
