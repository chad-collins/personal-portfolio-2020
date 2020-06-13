<template>
  <div id="app">
    <ContactMenu @close="closeContactMenu()" v-show="showingContactMenu" />
    <Navbar @show="showContactMenu()" v-model="currentView" />
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
      showingContactMenu: false
    };
  },
  methods: {
    closeContactMenu() {
      this.showingContactMenu = false;
    },
    showContactMenu() {
      this.showingContactMenu = true;
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
