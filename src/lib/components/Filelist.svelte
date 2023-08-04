<script lang="ts">
	import type { Data } from '$lib/models';
	import { siteId } from '$lib/stores';
	import { onMount } from 'svelte';

	let fileList: any;
	let breadcrumbs: any[] = [];
	let root: string;
	let drive: any;
	let filelistquery = '';

	const initcrumbs = () => (breadcrumbs = [{ id: fileList?.itemId, name: 'Home' }]);
	$: {
		root = $siteId ? `sites/${$siteId}/drive` : '/me/drive';
		filelistquery = `${root}/root/children?expand=thumbnails`;
		initcrumbs();
	}
	onMount(() => initcrumbs());

	const getDrive = ({ detail: { response, error } }: Data) => (drive = response || null);

	const clicked = (item: any) => {
		if (!item.detail) return;
		// fileList.itemId = item.detail.id; // render new list
		filelistquery = `${root}/items/${item.detail.id}/children?expand=thumbnails`;
		breadcrumbs = [...breadcrumbs, { id: item.detail.id, name: item.detail.name }];
	};

	const moveto = (id: number, itemId: string) => {
		breadcrumbs = breadcrumbs.splice(0, id + 1);
		// fileList.itemId = itemId;
		filelistquery = itemId
			? `${root}/items/${itemId}/children?expand=thumbnails`
			: `${root}/root/children?expand=thumbnails`;
	};
</script>

<fluent-divider />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<fluent-button on:click={() => fileList.reload(true)}>Reload files</fluent-button>
<fluent-divider />

<fluent-breadcrumb>
	{#each breadcrumbs as crumb, idx}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<fluent-breadcrumb-item href={''} on:click={() => moveto(idx, crumb.id)}>
			{crumb.name}
		</fluent-breadcrumb-item>
	{/each}
</fluent-breadcrumb>

{#if root}
	<mgt-get resource={`${root}`} type="json" on:dataChange={getDrive} />
{/if}

<mgt-file-list
	class="file-list"
	bind:this={fileList}
	on:itemClick={clicked}
	file-list-query={filelistquery}
>
	<template data-type="file">
		<mgt-file
			file-query={`${root}/items/{{file.id}}`}
			file-icon={'{{ file.thumbnails[0].small.url }}'}
		/>
	</template>
	<template data-type="loading">
		<div class="root">loading file</div>
	</template>
	<template data-type="no-data">
		<div class="root">there is no data</div>
	</template>
</mgt-file-list>

<style>
	fluent-breadcrumb-item {
		cursor: pointer;
	}

	.file-list {
		/** mgt-file-upload custom styling */
		--file-upload-background-color-drag: rgb(255, 0, 0, 0.5);
		--file-upload-border-drag: 2px groove black;
		--file-upload-button-background-color: orange;
		--file-upload-button-background-color-hover: green;
		--file-upload-button-text-color: whitesmoke;
		--file-upload-dialog-background-color: azure;
		--file-upload-dialog-text-color: yellow;
		--file-upload-dialog-replace-button-background-color: white;
		--file-upload-dialog-replace-button-background-color-hover: gray;
		--file-upload-dialog-replace-button-text-color: black;
		--file-upload-dialog-keep-both-button-background-color: black;
		--file-upload-dialog-keep-both-button-background-color-hover: gray;
		--file-upload-dialog-keep-both-button-text-color: white;
		--file-upload-button-border: 2px dotted yellow;
		--file-upload-dialog-replace-button-border: 2px dotted;
		--file-upload-dialog-keep-both-button-border: 2px dashed;
		--file-upload-dialog-border: 2px solid blue;
		--file-upload-dialog-width: 300px;
		--file-upload-dialog-height: 100px;
		--file-upload-dialog-padding: 36px;

		/** mgt-file-list CSS tokens */
		--file-list-box-shadow: none;
		--file-list-padding: 0;
		/* 
			--file-list-background-color: #e0f8db;
			--file-list-border: 4px dotted #ffbdc3;
			--file-list-border-radius: 10px;
			--file-list-margin: 0;
			--show-more-button-background-color: #fef8dd;
			--show-more-button-background-color--hover: #ffe7c7;
			--show-more-button-font-size: 14px;
			--show-more-button-padding: 16px;
			--show-more-button-border-bottom-right-radius: 12px;
			--show-more-button-border-bottom-left-radius: 12px; 
		*/

		/** mgt-file custom styling */
		--file-type-icon-size: 30px;
		--file-border: 4px dotted #ffbdc3;
		--file-border-radius: 8px;
		--file-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		--file-background-color: #e0f8db;
		--file-background-color-focus: yellow;
		--file-background-color-hover: green;
		--file-item-padding: 8px;
		--file-padding-inline-start: 12px;
		--file-item-margin: 2px 4px;
		--file-line1-font-size: 1.5px;
		--file-line1-font-weight: 500;
		--file-line1-color: gray;
		--file-line1-text-transform: capitalize;
		--file-line2-font-size: 14px;
		--file-line2-font-weight: 300;
		--file-line2-color: #e50000;
		--file-line2-text-transform: lowercase;
		--file-line3-font-size: 13px;
		--file-line3-font-weight: 500;
		--file-line3-color: purple;
		--file-line3-text-transform: capitalize;
	}
</style>
