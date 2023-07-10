<template> 
  <v-card class="d-flex flex-column w-75 h-50 ma-3" 
  color="transparent" href="{{ link1 }}"
  target="_blank"
 >    
    <v-img :src="require('../assets/Profile_avatar_placeholder_large.png')"
    height="20%"
    :aspect-ratio="1">
    </v-img>
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>{{about}}</v-card-text>    
    <v-card-subtitle>{{ link2 }}</v-card-subtitle> 
    <v-card-actions>
      <v-btn href="{{ link1 }}">
        Repo
      </v-btn>
    </v-card-actions>
    
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
    link1: URL,
    link2: String
   },
   
   
}
</script>

<style> 

</style>