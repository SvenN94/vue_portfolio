<template>
  <v-container id="main" class="d-flex flex-row h-screen  ">   
    <v-container class="d-flex flex-column ">
        <v-container id="persinfo" class="d-flex flex-column " >
          <v-avatar size="x-large">
          <v-img 
          :src="require('../assets/Profile_avatar_placeholder_large.png')"
          height="5rem"
          :aspect-ratio="1">
        </v-img>
      </v-avatar>
          <h3 class="mt-1">Sven Nelles</h3>
          <p>Full-stack developer</p>
        </v-container>      
      <v-container class="d-flex flex-row ">
            <a href="https://github.com/SvenN94" ><v-icon
              start
            size="large"
            icon="fa-brands fa-github" 
            color="white" 
            >
            </v-icon></a>
            <a href="https://www.linkedin.com/in/svennelles/" ><v-icon
             start
            icon="fa-brands fa-linkedin" 
            color="white" 
            size="large"
             ></v-icon>                          
          </a>              
             
      </v-container>
    </v-container>
  <v-container class="w-100 h-100" >
    <v-card class=""
    color="transparent"
    elevation="0"
    >
      <v-card-title>About me</v-card-title>
        <v-card-text class="text-body-1">A few years back, i got curious about the possibilities of 
        technology and decided to try some DIY projects. Fast forward
         to today, and i'm still very much engaged in RPI projects,
          AI automation, web development .
        </v-card-text>
        <v-card-text class="text-body-1">My main focus these days is helping people with 
          online presence and providing digital tools and assests.
           I believe that by leveraging the digital landscape, 
           you can unlock countless opportunities for growth and
            success.
          </v-card-text>
        
        </v-card>
  </v-container>   
  </v-container>
</template>

<script>
export default {
 name: "AboutPage",
 props: {
    naam: String,
    functie: String,
    slogan: String,
    parag1: String,
    parag2: String,
    parag3: String

 }

}
</script>

<style scoped>
 
</style>