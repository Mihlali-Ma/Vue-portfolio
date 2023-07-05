<template>
  <div class="about">
    <NavBar/>
    <FooterComp/>
    <footeR/>
  </div>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
  import NavBar from '../components/NavBar';
import footeR from '../components/FooteR.vue'
  export default {
    components: { NavBar,FooterComp,footeR}
}
</script>

<style scoped>

</style>
