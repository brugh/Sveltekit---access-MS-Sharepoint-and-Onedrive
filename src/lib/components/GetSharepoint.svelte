<script lang="ts">
	import type { EventData, Data } from '$lib/models';
	import { siteId } from '$lib/stores';

	let sites: any[] = [];
	let combo: any;

	const getSites = ({ detail: { response, error } }: Data) => {
		if (response) sites = [...response.value];
	};
	const newSite = (e: EventData) => {
		if (e.target.value.indexOf(',') > 0) setSite(e.target.value);
	};
	const setSite = (id: string) => {
		$siteId = id;
	};

	const check = (id: string, name: string) => {
		if ($siteId === id) {
			setSite(id);
			combo.control.value = name;
			return true;
		}
	};
</script>

<mgt-get resource="sites?Search=*" on:dataChange={getSites} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<fluent-combobox
	bind:this={combo}
	on:click={newSite}
	autocomplete="both"
	placeholder="Select a Sharepoint Site"
>
	{#each sites as site}
		<fluent-option value={site.id} selected={check(site.id, site.name)}>
			{site.name}
		</fluent-option>
	{/each}
</fluent-combobox>
