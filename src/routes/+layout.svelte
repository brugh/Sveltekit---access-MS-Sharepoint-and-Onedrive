<script lang="ts">
	import { PUBLIC_CLIENT_ID, PUBLIC_REDIRECT_URI } from '$env/static/public';

</script>

<mgt-msal2-provider
	client-id={PUBLIC_CLIENT_ID}
	login-type="redirect/popup"
	scopes="user.read,people.read"
	redirect-uri={PUBLIC_REDIRECT_URI}
/>
<mgt-login class="login" />
<mgt-theme-toggle />

<slot />

<style>
	.login {
		background-color: var(--fill-color);
		color: var(--neutral-foreground-rest);
		font-family: var(--body-font);
	}
</style>
