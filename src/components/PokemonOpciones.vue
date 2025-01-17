<template>
  <div class="options-container">
    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
      <li>Opcion 4</li>
    </ul>
  </div>
</template>
<script>
export default {
    x

};
</script>
<style>
.options-container{
    display: flex;
    justify-content: center;
}
ul{
    list-style: none;
}
li{
    background-color: white;
    width: 250px;
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}
li:hover{
    background-color: rgba(0, 0, 0, 0.05);
}
</style>