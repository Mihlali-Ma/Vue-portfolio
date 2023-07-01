<template>
  <div class="home">
    <NavBar/>
    <img src="https://i.postimg.cc/rwK59hbb/img-nature-wide.jpg" class="img-fluid" alt="...">
    <MyWork/>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar';
import MyWork from '@/components/MyWork.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    MyWork
  }
}
</script>
