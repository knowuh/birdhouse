<script>
  import SvgBox from '../components/svg-box.svelte';
  import Attribution from '../components/attributions.svelte';
  import Press from '../icons/press.svelte';
  import Spook from '../icons/spook.svelte';
  import Wand from '../icons/wand.svelte';
  import Yeti from '../icons/yeti.svelte';
  import Moon from '../icons/moon.svelte';
</script>

<svelte:head>
  <title>Oblique Birdhouse</title>
</svelte:head>
  <div class="main">
    <div class="list">
      <h1>The Oblique Birdhouse</h1>
      <SvgBox inverted={true}>
        <Press slot="left" color="white" />
        <p slot="right">
          Your decisions matter. Press a <strong>SEQUENCE</strong> of buttons to get a surprise.
        </p>
      </SvgBox>
      <SvgBox>
        <Spook slot="left" />
        <p slot="right">Sequences starting with the ghost Clyde will make mazes.</p>
      </SvgBox>
      <SvgBox>
        <Wand slot="left" />
        <p slot="right">Sequences starting with the wand will produce text.</p>
      </SvgBox>
      <SvgBox>
        <Moon slot="left" />
        <p slot="right">Sequences starting with the moon will make sounds.</p>
      </SvgBox>
      <SvgBox>
        <Yeti slot="left" />
        <p slot="right">Sequences starting with the Yeti will make images.</p>
      </SvgBox>
    </div>
    <div class="list">
      <Attribution />
  </div>
</div>

<style>
  :root {
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    margin: 1em;
    padding: 0;
  }
  h1 { font-size: 24pt;}
  .list {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14pt;
    margin: 0;
    padding: 0;
  }
</style>
