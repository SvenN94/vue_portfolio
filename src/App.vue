<template>
  <AboutPage />  
  <skillOverview />
  <projectOverview />
  
</template>

<script>
import AboutPage from './sections/aboutPage.vue'
import skillOverview from './sections/skillOverview.vue'
import projectOverview from './sections/projectOverview.vue'


export default {
  name: 'App',
  components: {
    AboutPage,    
    skillOverview,
    projectOverview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34516d;
  margin-top: 60px;
}
</style>
