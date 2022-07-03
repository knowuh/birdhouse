<script>
	import Nested from './svg-container.svelte';
  import Attribution from './attributions.svelte';
</script>


<svelte:head>
  <title>Oblique Birdhouse</title>
</svelte:head>

<h1>Welcome to The Oblique Birdhouse</h1>
<Nested />
<Nested />

<Attribution />
<style>
  :root {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    margin: 2em;
  }
  body {
    margin: 4em;
  }
</style>
