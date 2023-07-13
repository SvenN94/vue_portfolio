<template> 
  <v-container class="d-flex-column h-screen mt-6" > 
    <h1>projectOverview</h1>
    <v-container class="d-flex flex-column-wrap h-auto w-100 justify-center align-center"> 
        <projectCard class="" v-for="project in repos" 
        :key="project.id" 
        :title="project.name"
        :about="project.description"        
        :link1="project.html_url"
        :link2="project.language"
        />
        
    </v-container>
  </v-container>
</template>

<script>
import projectCard from '@/components/projectCard.vue'

export default {
    data(){
    return{
        repos: [],
        repo: {id:Number,title:String,about:String, html_url:String, language:String}
    }
   },
   created(){
    fetch('https://api.github.com/users/SvenN94/repos')
            .then((response) => response.json())
            .then((proj) => {
                this.repos = proj.filter((obj) => {
                    return obj.name !== "SvenN94";
                })})
   },
    components:{
        projectCard
    },     
}
</script>

<style>
 


</style>