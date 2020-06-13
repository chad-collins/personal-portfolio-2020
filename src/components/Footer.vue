<template>
  <footer>
    <div class="wrapper">
      <small>&copy;2020 Chad Collins</small>
      <small>
        See the
        <span>
          <router-link
            :to="{ 
            name: 'ProjectPage', 
            params: { 
                slug: 'personal-portfolio',
            } 
        }"
          >project page</router-link>
        </span> and view the code.
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  margin-top: 2rem;
 color:#222629;
  display: flex;
  justify-content: center;
  line-height: 1.5rem;
}
.wrapper {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

a {
  text-decoration: none;
  color: #a50081;

}
</style>