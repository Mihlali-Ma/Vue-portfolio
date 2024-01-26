<template>
  <div class="home">
    <NavBar/>
   
    <div class="container-fluid">
     <!-- <img src="https://i.postimg.cc/sDnnB0Yn/id-removebg-preview.png" class="img-fluid">-->
      <p class="text-1">Hello,</p>
      <H2 class="heading animate__heartBeat">I'M Mihlali Matrose</H2>
      <p class="text-2">Aspiring Web Developer</p>
     
    </div>
    
    <MyWork/>
    <my-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar';
import MyWork from '@/components/MyWork.vue';
import MyFooter from '@/components/MyFooter.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar,
    MyWork,
    MyFooter
  }
}
</script>
<style scoped>
  .container-fluid{
    background-image: url('https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
    margin-top: -4rem
  }
  .img-fluid{
    width: 5rem;
    
  }
  .text-1{
    color: white;
  }
  .text-2{
    color: white;
   /* margin-top: -20px;*/
  }
  .heading{
    color:#eab67e;
   /* margin-top:-40px ;*/
  }
</style>
