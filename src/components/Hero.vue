<template>
  <div class="hero" v-bind:class="this.size">
    <div class="container">
      <img v-if="image != null"
        class="card-image"
        v-bind:src="require('@/assets/images/' + image)"
        v-bind:alt="imageAlt"
      />
      <h1 class="title">{{ title }}</h1>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    size: String,
    image: String,
    title: String,
    subtitle: String
  }
};
</script>

<style scoped>
.hero {
  align-items: center;
  background: #222629;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6rem;
  padding-bottom: 5rem;

}

.container {
  padding: 0 2rem;
}

.large {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 75vh;
}

.title{
  color: #86c232;
  font-weight: 800;
  font-size: 2.3rem;
}

.subtitle {
  color: #d6d7c7;
  font-size: 1.3rem;
}

img {

  border-radius: 50%;
  height: auto;
  margin-bottom: 0.1rem;
  max-width: 09rem;
    -webkit-animation: growheadshot 0.6s forwards;
 
  animation: growheadshot  0.6s forwards;

}

@keyframes growheadshot {
  from {
    max-width: 5rem;
  }
  to {
    max-width: 9rem;
  }
}

@media screen and (min-device-width: 415px) {
  .standard {
  height: 30vh;
}
}
</style>