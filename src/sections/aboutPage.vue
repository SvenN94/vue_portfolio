<template>
  <div class="main-container">
   <div class="container-one">
    <div class="profile">
      <img src="..\assets\Profile_avatar_placeholder_large.png" alt="">
      <h3>Sven Nelles</h3>
      <p>Full-stack developer</p>
    </div>
    <div class="social-links">      
        <div class="link">          
          <a href="">
            <img src="..\assets\github-mark.png" alt="">
            <h2>Github</h2>
          </a>
        </div>
        <div class="link">          
          <a href="">
            <img src="..\assets\LI-In-Bug.png" alt="">
            <h2>LinkedIn</h2></a>              
        </div>     
    </div>
  </div>
  <div class="container-two">
    <div class="about-me">
      <h1>About me</h1>
      <p>A few years back, i got curious about the possibilities of 
        technology and decided to try some DIY projects. Fast forward
         to today, and i'm still very much engaged in RPI projects,
          AI automation, web development .</p>
        <p>My main focus these days is helping people with 
          online presence and providing digital tools and assests.
           I believe that by leveraging the digital landscape, 
           you can unlock countless opportunities for growth and
            success.</p>
        <p>What sets me apart is my unwavering commitment to 
          providing exceptional value. I go beyond just designing 
          websites; i strive to educate and support you throughout 
          your digital journey. I'm always ready to answer 
          any questions you may have about the online world. 
          Whether it's clarifying technical concepts, suggesting 
          strategies for digital marketing, or addressing any other
           concerns, I'm here to ensure that you have a 
           comprehensive understanding of the digital landscape. 
           With a focus on businesses, i understand the unique 
           challenges and needs you face. I tailor my services 
           to cater to your specific requirements, ensuring 
           that your digital presence aligns with your brand 
           identity and business objectives. My mission is to 
           equip you with the tools, knowledge, and confidence 
           needed to thrive in the digital era.
          </p>
        </div>
  </div> 
  
  </div>
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
  img{
    height: 20px;
  }
  .main-container{
    display: flex;
    flex-direction: row;
    background-color: aliceblue;
  }
  .container-one{
    width: 30%;   
    padding: 2.5%; 
    background-color: beige;
  }
  .profile img{
    height: 5rem;
    border-radius: 50%;
  }
  .link a{
    text-decoration: none;
    color: black;
    font-size: 12px;
  }
  .link img{
    height: 3rem;
  }
  .container-two{
    width: 70%;
    background-color: aquamarine;
    margin: 2.5%;
  }
  .about-me{
    text-align: left;
  }
  
</style>