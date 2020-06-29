<template>
  <div id="app">
    <ContactMenu @close="closeContactMenu()" v-show="showingContactMenu" />
    <Navbar @show="showContactMenu()" v-model="currentView" v-bind:resume="resume" />
    <router-view @show="showContactMenu()" />
    <SocialBar v-if="showingContactMenu == false" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import ContactMenu from "./components/ContactMenu";
import { RepositoryFactory } from "./repositories/RepositoryFactory.js";
const dynamicDataRepository = RepositoryFactory.get("dynamicData");

export default {
  name: "app",
  components: {
    Navbar,
    ContactMenu,
    SocialBar,
    Footer
  },
  data() {
    return {
      currentView: "Home",
      showingContactMenu: false,
      resume: ""
    };
  },
  created(){
    this.fetchResume();
  },
  methods: {
    closeContactMenu() {
      this.showingContactMenu = false;
    },
    showContactMenu() {
      this.showingContactMenu = true;
    },
    async fetchResume() {
      const { data } = await dynamicDataRepository.get();
      const items = data.records;
      const found = items.find(element => element.fields.Name == "Resume");
      this.resume = found.fields.Data
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  max-width: 100vw;
}

:focus {
  outline: none !important;
}

body {
  background-color: #cfcfcf;
}
</style>
