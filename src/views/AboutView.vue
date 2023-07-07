<template>
  <div class="about">
    <NavBar/>
    <div class="content">
      <img class="img-thumbnail" src="https://i.postimg.cc/mghBKkpN/C12-Mihlali-Matrose-3.jpg" alt="">
      <h4 id="name">Mihlali Matrose</h4>
      <p class="text">
        Welcome to my portfolio website! I'm a passionate Aspiring Full-Stack Software, dedicated to showcasing my skills and creativity in the Tech industry. With a collection of my best work, I strive to deliver high-quality solutions that exceed client expectations. Let's connect and create something remarkable together!</p>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';

  import NavBar from '../components/NavBar';

  export default {
    components: { NavBar,MyFooter}
}
</script>

<style scoped>
  .text{
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: large;
  }
  .img-thumbnail{
    height: 25rem;
    margin-top:1rem ;
  }
  .text{
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .content{
    align-items: center;
    justify-content: center;

  }
  #name{
    color: white;
    margin-top: 5rem;
    
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
