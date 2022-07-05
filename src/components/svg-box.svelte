<script>
  export let inverted = false;
</script>
<div class="container" class:inverted>
  <div class="left">
    <slot name="left">
      Left
    </slot>
  </div>
  <div class="right">
    <slot name="right">
      Right
    </slot>
  </div>
</div>

<style>
  div {
    /* border: 1px solid black; */
    padding: 5px;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    align-items: center;
    background-color: white;
    color: black;
  }
  .inverted {
    color: white;
    background-color: black;
  }
  .left {
    flex-basis: 10%;
    flex-grow: 1;
    text-align: end;
  }
  .right {
    flex-basis: 50%;
    flex-grow: 5;
    margin-left: 5px;
    text-align: start;
  }
</style>
