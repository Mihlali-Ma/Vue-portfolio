<template>
    <div class="body">
        <br>
        <H2 id="heading">My Work</H2>
        <div class="row">
            <div class="col" v-for="project in projects" :key="project.name">
                <div class="card" style="width: 18rem;">
                    <img :src="project.Image" class="card-img-top" :alt="project.name">
                    <div class="card-body">
                      <h5 class="card-title">{{ project.name }}</h5>
                      <p class="card-text">{{ project.Description }}</p>
                      <a :href="project.github" class="btn btn-primary">Github</a>
                      <a :href="project.netlify" class="btn btn-primary">netlify</a>

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
    .row{
        align-content: center;
        padding: 0rem;
    }
    .col-4{
        margin-bottom: 5rem;
       /* margin-left:5rem ;*/
        /*margin-right: -5rem;*/
        align-content: center;
        color:white;
    }
    .card{
        width: 100%;
        background: #181818;
        border: none;
        box-shadow: 0px 0px 25px black;
    }
    .col h5,p{
        color: #fff;
    }
    .col{
        margin-bottom: 5rem;
    }
</style>