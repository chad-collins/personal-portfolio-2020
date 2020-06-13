<template>
  <div>
    <Hero v-bind:title="project.title" v-bind:subtitle="project.summary" size="standard" />
    <div class="breadcrumb">
      <router-link class="breadcrumb-link" to="/projects">projects</router-link>
      <p>&ensp;>>&ensp;{{project.slug}}</p>
    </div>
    <div class="container">
      <div class="grid">
        <img class="project-image" v-bind:src="project.screenshot" />

        <section class="project-info">
          <h2 class="section-title">Details</h2>
          <div>{{project.details}}</div>

          <h2 class="section-title">Skills & Tools</h2>
          <ul v-if="project.tools" class="tools-list">
            <ToolIcons
              class="tool-icon"
              v-bind:toolName="tool"
              v-bind:key="tool"
              v-for="tool in tools"
            />
          </ul>

            <h2 v-if="project.live" class="section-title">See it live</h2>
            <a v-if="project.live" :href="project.live" target="_blank">{{project.live}}</a>


            <h2 v-if="project.code" class="section-title">See the code</h2>
            <a v-if="project.code" :href="project.code" target="_blank">{{project.code}}</a>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repositories/RepositoryFactory.js";
const ProjectsRepository = RepositoryFactory.get("projects");
import Hero from "../components/Hero";
import ToolIcons from "../components/ToolIcons";

export default {
  name: "projectPage",
  components: {
    Hero,
    ToolIcons
  },

  data() {
    return {
      project: {},
      projectImage: ""
    };
  },
  created() {
    this.fetchProject();
  },
  methods: {
    async fetchProject() {
      let slug = this.$route.params.slug;
      let { data } = await ProjectsRepository.getProjectBySlug(slug);
      this.project = data.records[0].fields;
      this.project.screenshot = this.project.image[0].thumbnails.large.url;
    }
  },
  computed: {
    tools(){
      const tools =  this.project.tools;
      return tools.sort();
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

section p {
  line-height: 1.8rem;
  color: #222629;
}
.tools-list {
  display: flex;
  flex-wrap: wrap;
}
.tool-icon {
  margin-right: 0.3rem;
  margin-bottom: 0.5rem;
}
li {
  list-style: none;
}

.breadcrumb-link {
  color: #86c232;
}
.breadcrumb {
  color: white;
  padding: 0 0 0.5rem 2rem;
  display: flex;
  width: 100%;
  background-color: #222629;
}

.section-title {
  border-bottom: 1px solid rgb(231, 231, 231);
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  color: #222629;
}


.grid {
  margin: 1rem;
}

.project-image {
   margin-top: 2rem;
  grid-area: image;
  width: 100%;
}

@media all and (min-width: 800px) {
  .grid {
    display: grid;
    max-width: 1200px;
    column-gap: 3rem;

    grid-template-areas:
      "info image"
      "info .";
  }

  .project-image {
    grid-area: image;
    max-width: 30vw;
  }
  .project-info {
    grid-area: info;
  }
}
</style>