<template>
  <div class="home">
    <NavBar/>
    <img src="https://i.postimg.cc/rwK59hbb/img-nature-wide.jpg" class="img-fluid" alt="...">
    <MyWork/>
    <footer-comp/>
    <FooteR/>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar';
import MyWork from '@/components/MyWork.vue';
import FooterComp from '@/components/FooterComp.vue';
import FooteR from '@/components/FooteR.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    MyWork,
    FooterComp,
    FooteR
  }
}
</script>
