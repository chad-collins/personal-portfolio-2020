<template>
  <div>
    <Hero v-bind:title="project.title" v-bind:subtitle="project.summary" size="standard" />
    <div class="breadcrumb">
          <router-link to="/projects">projects</router-link>
          <p>&ensp;>>&ensp;{{project.slug}}</p>
        </div>
    <div class="grid">
      <div class="grid-item a">
        <img v-bind:src="project.image[0].thumbnails.large.url" />
      </div>
      <div class="grid-item b">
        
        <section>
          <h2 class="section-title">Goals</h2>
          <ul>
            <li v-bind:goals="goals" v-bind:key="goals" v-for="goals in project.goals">{{goals}}</li>
          </ul>
        </section>
        <section>
          <h2 class="section-title">Skills & Tools</h2>
          <ul class="tools-list">
            <ToolIcons
              class="tool-icon"
              v-bind:toolName="tool"
              v-bind:key="tool"
              v-for="tool in project.tools.sort()"
            />
          </ul>
        </section>
        <section>
          <h2 class="section-title">How It Works</h2>
          <p>{{project.description}}</p>
        </section>
        <section>
          <h2 class="section-title">See the code</h2>
          <p>{{project.link}}</p>
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
  name: "Project",
  components: {
    Hero,
    ToolIcons
  },

  data() {
    return {
      project: {}
    };
  },
  created() {
    this.fetchProject();
  },
  methods: {
    async fetchProject() {
      let me = this;
      let slug = me.$route.params.slug;
      let { data } = await ProjectsRepository.getProjectBySlug(slug);
      me.project = data.records[0].fields;
    }
  }
};
</script>

<style scoped>
section p{
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

.a {
  width: 100vw;
}

.b {
  padding: 1rem;
}

a{
  color: #86c232;
}
.breadcrumb {
  color: white;
  padding:0 0 0.5rem 2rem;
  display: flex;
  width: 100%;
  background-color: #222629;
}

.section-title {
  border-bottom: 1px solid rgb(231, 231, 231);
  margin: 1.2rem 0;
  padding-bottom: 0.5rem;
  color:#222629;
}

img {
  
  width: 100vw;
  min-width: 200px;
  height: auto;
}
</style>