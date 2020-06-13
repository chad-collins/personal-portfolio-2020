<template>
  <div>
    <div class="box">
      <a href="http://github.com/chad-collins" target="_blank">
        <img class="icon" v-bind:src="require('@/assets/images/github.svg')" alt="github" />
      </a>
      <a href="http://linkedin.com/in/chadacollins" target="_blank">
        <img class="icon" v-bind:src="require('@/assets/images/linkedin.svg')" alt="linkedin" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialBar"
};
</script>

<style scoped>
.icon {
  width: 25px;
  margin: 0.5rem;
  color: white;
}

.box {
  position: fixed;
  border-radius: 0 5px 5px 0;
  width: max-content;
  bottom: 0;
  left: -50px;
  margin-bottom: 35px;
  z-index: 6000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  opacity: 80%;
  -webkit-animation: slide 0.2s forwards;
  -webkit-animation-delay: 1s;
  animation: slide 0.2s forwards;
  animation-delay: 1s;
}

@-webkit-keyframes slide {
  100% {
    left: 0px;
  }
}

@keyframes slide {
  100% {
    left: 0;
  }
}
</style>