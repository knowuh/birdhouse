
<div class="container">
  <div class="left"> Left</div>
  <div class="right"> Right</div>
</div>

<style>
  div {
    border: 1px solid black;
    padding: 5px;
  }
  div.container {
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    justify-content: flex-start;
  }
  div.left {
    flex-basis: 10%;
    flex-grow: 1;
    text-align: end;
  }
  div.right {
    flex-basis: 50%;
    flex-grow: 5;
    margin-left: 5px;
    text-align: start;
  }
</style>
