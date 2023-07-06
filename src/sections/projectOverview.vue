<template> 
  <div class="project-container" > 
    <h1>projectOverview</h1>
    <div class="projectCards"> 
        <projectCard class="fetchcards" v-for="project in repos" 
        :key="project.id" 
        :title="project.name"
        :about="project.description"        
        :link1="project.html_url"
        :link2="project.language"
        />
        
    </div>
  </div>
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
.project-container{    
    background-color: brown;  
    padding: 2.5%; 
    min-height: 100dvh;
}
.projectCards{    
    display: flex;    
    background-color: aqua;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;       
}  


</style>