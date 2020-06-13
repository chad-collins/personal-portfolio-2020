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
            class="card-content"
            :to="{ 
            name: 'ProjectPage', 
            params: { 
                slug: project.fields.slug,
            } 
        }"
          >
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
  row-gap: 2rem;
  column-gap: 2rem;
  margin-top: 2rem; 
}

.card {
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.17);
  user-select: none;
  background: #222629;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  transition: box-shadow 0.5s;
  transition: transform 0.2s;
  max-width: 500px;
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



.card-image {
  width: inherit;
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


@media all and (min-width: 501px) {
  .deck { 
  width: 500px;
}
}

@media all and (min-width: 1100px) {
.deck { 
  width: 1100px;
}

.deck::after {
  content: "";
}

.card {
  width: 40vw;

}
}

@media all and (min-width: 1800px) {
  .deck {
    width: 1600px; 
  }

}
</style>

