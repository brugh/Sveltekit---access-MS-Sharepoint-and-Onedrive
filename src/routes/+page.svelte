<script lang="ts">
	import Filelist from '$lib/components/Filelist.svelte';
	import GetSharepoint from '$lib/components/GetSharepoint.svelte';

</script>

<GetSharepoint />

<!-- <div id="myCardContainer">
	<fluent-card class="card">
		<h1>Header</h1>
		<Person person={$user?.userPrincipalName} />
		<fluent-button>Hello</fluent-button>
	</fluent-card>
</div> -->

<Filelist />
