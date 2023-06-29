<template>
  <AboutPage />  
  <skillOverview />
  
</template>

<script>
import AboutPage from './sections/aboutPage.vue'
import skillOverview from './sections/skillOverview.vue';


export default {
  name: 'App',
  components: {
    AboutPage,    
    skillOverview

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
