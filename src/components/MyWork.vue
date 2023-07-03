<template>
    <div>
        <br>
        <H2 id="heading">My Work</H2>
        <div class="row">
            <div class="col" v-for="project in projects" :key="project.name">
                <div class="card" style="width: 18rem;">
                    <img :src="project.image" class="card-img-top" :alt="project.name">
                    <div class="card-body">
                      <h5 class="card-title">{{ project.name }}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        computed:{
            projects(){
                return this.$store.state.projects
            },
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>
    
</style>