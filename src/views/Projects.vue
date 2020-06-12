<template>
  <div>
    <Hero title="Projects" size="standard" />
    <div class="container">
      <ul class="deck">
        <li
          class="card"
          v-bind:project="project"
          v-bind:key="project.slug"
          v-for="project in sorted"
        >
          <router-link
            :to="{ 
            name: 'ProjectPage', 
            params: { 
                slug: project.fields.slug,
            } 
        }"
          >
            <figure>
              <img
                v-if="project.fields.image"
                class="card-image"
                :src="project.fields.image[0].thumbnails.large.url"
              />
              <img
                v-else
                class="card-image"
                src="https://image.tmdb.org/t/p/w370_and_h556_bestv2///aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg"
              />
            </figure>

            <div class="card-info">
              <h2 class="card-title">{{project.fields.title}}</h2>
              <p class="card-text">{{project.fields.summary}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repositories/RepositoryFactory.js";
const ProjectsRepository = RepositoryFactory.get("projects");
import Hero from "../components/Hero";
export default {
  name: "Projects",
  components: {
    Hero
  },
  data() {
    return {
      projects: [],
      imageError: false,
      defaultImage: require("@/assets/images/adobe-logo.png")
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      let me = this;
      let unsorted = [];
      const { data } = await ProjectsRepository.get();
      me.projects = data.records;
    }
  },
  computed: {
    sorted() {
      let published = [];
      this.projects.forEach(element => {
        if (element.fields.isPublished) {
          published.push(element);
        }
      });

      let sortedProjects = published.sort(function(a, b) {
        return a.fields.order - b.fields.order;
      });

      return sortedProjects;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.deck {
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
}

.deck::after {
  content: "";
}

.card {
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.17);
  margin: 1rem;
  user-select: none;
  background: #222629;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s;
  transition: transform 0.2s;
  width: 100vw;
}

.card-info {
  padding: 1rem;
  text-align: center;
  width: 100%;
}

.card-title {
  padding-bottom: 0.7rem;
  color: #86c232;
}

figure {
  display: grid;
  width: 100%;
}

.card-image {
  width: 600px;
  max-width: 100%;
  max-height: auto;
}

a {
  color: white;
  text-decoration: none;
  transition: color 0.5s;
}

.card:hover {
  box-shadow: 0px 5px 11px 5px rgba(0, 0, 0, 0.37);
  transform: scale(1.01);
}

@media screen and (min-width: 650px) {
  .card {
    max-width: 100%;
    width: 41vw;
  }

  .deck {
    justify-content: space-between;
    padding: 1rem;
  }
}

@media screen and (min-width: 900px) {
  .deck {
    padding: 2.5rem;
  }
}

@media screen and (min-width: 1199px) {
  .card {
    max-width: 100%;
    width: 29vw;
  }

  .deck {
    justify-content: space-between;
    padding: 1rem;
  }
}
</style>

