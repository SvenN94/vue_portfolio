<template> 
  <v-card >    
    <v-img :src="require('../assets/Profile_avatar_placeholder_large.png')"
    height="5rem"
    :aspect-ratio="1">
    </v-img>
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>{{about}}</v-card-text>
    <v-card-subtitle>{{ link2 }}</v-card-subtitle>
    <a href="{{ link1 }}">
      <button>github Link</button></a>
    
  
  </v-card>
</template>

<script>
export default {
   data(){
    return{
        
    }
   },
   props: {
    id: Number,
    title: String,
    about: String,
    imagefile: String,
    link1: String,
    link2: String
   }
}
</script>

<style> 

</style>