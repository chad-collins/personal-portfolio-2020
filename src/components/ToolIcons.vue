<template>
  <div>
    <div class="box">
      <img
        class="tool-image"
        :src="require(`../assets/images/${toolName.toLowerCase()}-logo.png`)"
        :alt="toolName"
      />
      <div>{{toolName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolIcons",
  props: {
    toolName: String
  }
};
</script>

<style scoped>
.box {
  white-space: pre;
  display: flex;
  flex-wrap: none;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  padding-right: 1rem;
  padding-left: 0.25rem;
  overflow: hidden;
}
.tool-image {
  height: auto;
  max-height: 40px;
  max-width: 40px;
  padding: 8px;
  background-color: white;
 
}
</style>