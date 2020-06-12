<template>
  <div>
    <div class="hero-section">
      <Hero
        title="Hi I'm Chad"
        subtitle="I'm a Full-Stack Developer"
        image="headshot.png"
        size="large"
      />
    </div>

    <section>
      <h2 class="section__title">{{sections[0].heading}}</h2>
      <div class="container">
        <div class="box" :key="title" v-for="(par, title) in sections[0].content">
          <h3 class="card__title">{{title}}</h3>
          <p class="card__body">{{par}}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="section__title">{{sections[1].heading}}</h2>
      <p class="span-box__text">{{sections[1].content}}</p>
    </section>
    <section>
      <h2 class="section__title">{{sections[2].heading}}</h2>
      <ul class="deck">
        <li class="card" v-for="(logo, name ) in sections[2].content" :key="name">
          <img class="card-image" :src="require('@/assets/images/' + logo)" alt />
          <p class="card__title">{{name}}</p>
        </li>
      </ul>
    </section>
    <section>
      <h2 class="section__title">{{sections[3].heading}}</h2>
      <ul class="span-box__list">
        <li v-for="item in sections[3].content" :key="item" class="span-box__list-item">{{item}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import Hero from "../components/Hero";
export default {
  name: "Home",
  components: {
    Hero
  },
  data() {
    return {
      sections: [
        {
          heading: "What I Bring",
          content: {
            "A Passion to Learn":
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi.",
            "Full Stack Experience":
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi.",
            "Broad Business Exposure":
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi."
          }
        },
        {
          heading: "Where I Come From",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque blanditiis iure sequi."
        },
        {
          heading: "My Tech Stack",
          content: {
            "Vue.js": "vue-logo.png",
            Javascript: "javascript-logo.png",
            Node: "node-logo.png",
            Java: "java-logo.png",
            Spring: "spring-logo.png",
            "HTML 5": "html5-logo.png",
            "CSS 3": "css-logo.png"
          }
        },
        {
          heading: "What Drives Me",
          content: ["1","2","3"]
        }
      ]
    };
  }
};
</script>

<style scoped>
section {
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
}

section:nth-child(odd) {
  background-color: #c4c1c5;
}

section * {
  max-width: 1000px;
}

.section__title {
  padding-bottom: 2.6rem;
  font-size: 1.8rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
}

.deck {
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;
  justify-content: center;
  list-style-type: none;
}

.card {
  padding: 10px;
  width: 90px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  margin-bottom: 1rem;
  margin: 0.5rem;
}

.card-image {
  width: 40px;
  max-height: auto;
}

.box {
  margin: 1rem;
}

.span-box__list-item {
  margin-left: 1rem;
}

@media all and (min-width: 768px) {
  .container {
    flex-wrap: nowrap;
  }
}
</style>
