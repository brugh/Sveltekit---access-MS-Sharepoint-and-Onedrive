<script lang="ts">
	import type { EventData, Data } from '$lib/models';
	import { siteId } from '$lib/stores';

	let sites: any[] = [];

	const getSites = ({ detail: { response, error } }: Data) => {
		if (response) sites = [...response.value];
	};
	const newSite = (e: EventData) => {
		if (e.target.value.indexOf(',') > 0) $siteId = e.target.value;
	};
</script>

<mgt-get resource="sites?Search=*" on:dataChange={getSites} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<fluent-combobox on:click={newSite} autocomplete="both" placeholder="Select a Sharepoint Site">
	{#each sites as site}
		<fluent-option value={site.id}>{site.name}</fluent-option>
	{/each}
</fluent-combobox>
