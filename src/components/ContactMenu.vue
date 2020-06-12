<template>
  <div>
    <div class="menu">
      <button @click="close" class="close-button">X</button>
      <h2 class="heading">Get In Touch</h2>
    </div>

    <div class="group-container">
      <a href="mailto:contact@chadcollins.net" target="_blank"class="contact-group">
        <h3 class="title">EMAIL ME</h3>
        <div class="body">contact@chadcollins.net</div>
      </a>
      <a href="http://linkedin.com/in/chadacollins" target="_blank" class="contact-group">
        <h3 class="title">LINKEDIN</h3>
        <div class="body">linkedin.com/in/chadacollins</div>
      </a>
      <a href="http://github.com/chad-collins" target="_blank"  class="contact-group">
        <h3 class="title">GITHUB</h3>
        <div class="body">github.com/chad-collins</div>
      </a>
    </div>

    <div class="window"></div>
  </div>
</template>

<script>
export default {
  name: "ContactMenu",

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.window {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow: -moz-hidden-unscrollable;
  background-color: rgba(0, 0, 0, 0.45);
  position: fixed;
  top: 0;
  z-index: 2000;
}

.menu {
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 22222;
  background-color: #222629;
  height: 100vh;
  width: 80vw;
  max-width: 800px;
  padding: 1rem;
  box-shadow: -41px -1px 99px 45px rgba(0, 0, 0, 0.45);
  right: -330px;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 0.1s;
  animation: slide 0.5s forwards;
  animation-delay: 0.1s;
  overflow: -moz-hidden-unscrollable;
  overflow: hidden;
  z-index: 2001;
}

.group-container {
  
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  position: fixed;
  z-index: 22222;
  height: 75vh;
  bottom: 0;
  right: -850px;
  -webkit-animation: slide 0.6s forwards;
  -webkit-animation-delay: 0.3s;
  animation: slide 0.6s forwards;
  animation-delay: 0.3s;
  width: 90vw;
  max-width: 850px;
  padding: 1rem;
 
}

.contact-group {
  padding: 2rem;
  background-color: #cfcfcf;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 1s;
  animation: slide 0.5s forwards;
  animation-delay: 1s;
  border-bottom: 10px solid #222629;
  z-index: 2002;
  transition: transform 0.2s;
  cursor: pointer;
}

.contact-group:hover {
  transform: scale(1.1);
}

@-webkit-keyframes slide {
  70% {
    right: 20px;
  }
  100% {
    right: 0;
  }
}

@keyframes slide {
  70% {
    right: 20px;
  }
  100% {
    right: 0;
  }
}

.close-button {
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 1.3rem;
  font-weight: bolder;
  transition: transform 0.12s;
  width: fit-content;
  margin: 0.5rem 0 0 0.5rem;
}

.close-button:hover {
  transform: scale(1.5);
  color: #86c232;
}

.heading {
  width: 100%;
  margin-top: 3rem;
  font-size: 2rem;
  color: #86c232;
  justify-self: center;
  text-align: center;
}

.title {
  font-size: 2rem;
  user-select: none;
}

a{
    text-decoration: none;
    color: #222629;
}
</style>