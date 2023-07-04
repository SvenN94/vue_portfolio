<template>
   
    <h1>projectOverview</h1>
  <div class="project-container" >       
        <div class="fetchcards" v-for="project in result" :key="project.id">
            <projectCard :title="project.name"
        :about="project.description"        
        :link1="project.html_url"
        />
        </div>
  </div>
</template>

<script>
import projectCard from '@/components/projectCard.vue'

export default {
    data(){
    return{        
        result: [],
        repo: {id:Number,title:String,about:String, html_url:String, language:String}
    }
   },
   created(){
    fetch('https://api.github.com/users/SvenN94/repos')
            .then((response) => response.json())
            .then((proj) => {
                this.result = proj;
            });
   },
    components:{
        projectCard
    },
}
</script>

<style>

</style>