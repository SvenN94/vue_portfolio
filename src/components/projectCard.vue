<template> 
  <div class="product-card">    
    <img src="..\assets\Profile_avatar_placeholder_large.png" alt="">
    <div class="text">
    <h3>{{title}}</h3>
    <p>{{about}}</p>
    <p>{{ link2 }}</p>
    <a href="{{ link1 }}">
      <button>github Link</button></a>
    
  </div>
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
  display: flex;
  flex-direction: row;
  background-color: rgb(95, 160, 117);
  margin: 10px;    
  align-items: center; 
  
 
 }
 .product-card img{
  height: 5rem;
 }
 .text{
  display: flex;    
  background-color: rgb(189, 125, 125);  
  padding: 1%; 
  align-items: center;   
 }
</style>