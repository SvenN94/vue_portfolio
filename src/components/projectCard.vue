<template> 
  <div class="product-card">    
    <img src="..\assets\Profile_avatar_placeholder_large.png" alt="">
    <h2>{{title}}</h2>
    {{about}}
    {{ link1 }}
    {{ link2 }}
  </div>
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
 .product-card{
    background-color: blanchedalmond;
 }
</style>