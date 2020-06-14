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
      <h2 class="section__title">{{sections[1].heading}}</h2>
      <p class="span-box__text">{{sections[1].content}}</p>
    </section>


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
      <h2 class="section__title">{{sections[2].heading}}</h2>
      <ul class="deck">
        <li class="card" v-for="(logo, name ) in sections[2].content" :key="name">
          <img class="card-image" :src="require('@/assets/images/' + logo)" :alt="name" />
          <p class="card__title">{{name}}</p>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="section__title">Want to get in touch?</h2>
      <div @click="show" class="link" to="/contact">Contact Me.</div>
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
              "I love gaining new skills and sharpening my existing ones. Technology is always moving forward, and learning new skills to keep pace is a challenge that drives me.",
            "Full Stack Experience":
              "I've worked on projects where I needed to be involved through every part of process, from creating Java and Spring Restful APIs, building the decoupled front-end with React, and doing all of the styling from scratch.",
            "Broad Business Exposure":
              "I have several years of experience working for a Fortune 500 company, building and managing client-facing teams tasked with creating exceptional client experiences. I have extensive experience collaborating as part of a team to reach our shared vision."
          }
        },
        {
          heading: "Where I Come From",
          content:
            "My name is Chad Collins and I'm a software developer based in Columbus Ohio. I formerly spent several years in the wireless industry with experiences ranging from management, tech support, and customer service. I made the decision to become a software developer because I wanted a career that allowed me to combine my creative and analytical skill sets to solve problems. Programming allows me to collaborate on projects and watch my ideas come to life as I code, and I can’t think of a better way to spend my life."
        },
        {
          heading: "My Tech Stack",
          content: {
            
            Javascript: "javascript-logo.png",
            "Vue.js": "vue-logo.png",
            Node: "node-logo.png",
            Java: "java-logo.png",
            Spring: "spring-logo.png",
            "HTML 5": "html 5-logo.png",
            "CSS 3": "css 3-logo.png",
            "Rest APIs": "rest apis-logo.png",
            "Git": "git-logo.png",
            "Agile": "agile development-logo.png"
            
          }
        }
      ]
    };
  },
  methods: {
    show() {
      this.$emit("show");
    }
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
  max-width: 600px;
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

.card__title{
  margin-bottom: 0.4rem;

}

.box {
  margin: 1rem;
}

.span-box__list-item {
  margin-left: 1rem;
}

.link:hover {
  cursor: pointer;
  text-decoration: underline;
}

@media all and (min-width: 768px) {
  .container {
    flex-wrap: nowrap;
  }
  
  section {
    padding: 5rem 1rem;
  }
}
</style>
