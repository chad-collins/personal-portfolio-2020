<template>
  <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
      
    <router-link to="/">
      <img class="home-image" v-bind:src="require('@/assets/images/nav-image.png')" />
    </router-link>
    <nav>
      <router-link class="nav--link" to="/projects">Projects</router-link>
      <div @click="show" class="nav--link" to="/contact">Contact</div>
    </nav>
  </div>
</template>

<script>


export default {
  name: "Navbar",

  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isActive: true,
      showingContactMenu: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
          
        show(){
            this.$emit('show')
            
        },
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  
    
  }
};
</script>

<style scoped>



a {
  text-decoration: none;
}

.navbar {
  width: 100vw;
  background: #222629;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
  z-index: 1000;
   padding: 0 0.93rem;
}



.home-image {
  height: 30px;
 
}



nav {
  display: flex;;
  justify-content: center;
  align-items: center;
}

nav .router-link-active {
  color: #86c232;
}

.nav--link {
  user-select: none;
  height: 50px;
  display: flex;
  align-items: center;
  background: inherit;
  border: none;
  color: white;
  margin: 0 0.6rem;
  cursor: pointer;
  padding: 0 0.1rem;
  transition: all 0.2s ease-in-out;
}

.nav--link:hover {
   color: #86c232;
}

.navbar.navbar--hidden {
  transform: translate3d(0, -50px, 0);
}


</style>