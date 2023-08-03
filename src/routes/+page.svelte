<script>
	import Filelist from '$lib/components/Filelist.svelte';
	import Person from '$lib/components/Person.svelte';
</script>

<!-- <fluent-button class="button">Hello world</fluent-button>
<mgt-agenda /> -->
<!-- <mgt-person person-query="Herco" view="twoLines" person-card="hover">
  <template data-type="person-card">
    <pre>{'{{ JSON.stringify(person, null, 2 ) }}'}</pre>
	</template>
</mgt-person> -->

<Person person="herco@it2benefit.nl" />

<!-- <mgt-get resource="me/photo/$value" type="image">
  <template>
    <pre>{'{{this}}'}</pre>
    <img src={'{{image}}'}>
  </template>
</mgt-get> -->

<Filelist rootdir='' />

<mgt-theme-toggle />

<style>
	.button {
		width: 240px;
		height: 240px;
	}
	.button:hover {
		background-color: gray;
	}
</style>
