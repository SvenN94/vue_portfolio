<template>
  <v-container class="h-auto ">
  <h1 class="my-6">Skilloverview</h1>
  <v-container class="d-flex flex-row flex-wrap  h-auto ">
  <v-btn v-for="skill in areas.Skills" :key="skill.id" class="ma-3" >
    {{ skill.name }}
  </v-btn>  
      
   
  </v-container>
  
</v-container>
</template>

<script>
import skillData from '@/assets/skillsoverview.json'

export default {
data(){
  return{
    areas: skillData
  }
}
}
</script>

<style>
 
</style>