<template>
  <v-app >
    <v-content>
    <AboutPage />  
  </v-content>
  <v-content>
    <skillOverview />
  </v-content>
  <v-content>
    <projectOverview />
  </v-content>
  </v-app>
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
</style>
