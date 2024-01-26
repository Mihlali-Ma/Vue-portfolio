<template>
    <div>
        <nav-bar/>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-2" id="colummn_space-1">
                <div class="top">
                    <img src="https://i.postimg.cc/x1Z91FW2/id.jpg" class="id" alt="">
                    <p class="name">Mihlali Matrose</p>
                    <p class="me">Aspiring Full-Stack Web Developer</p>
                    <br>
                    <br>
                </div>
                
                <div id="line_through"></div>
                <div id="txt-align">
                    <p style="color:#fff">Residence: South Africa</p>
                    <p style="color:#fff">City: Cape Town</p>
                    <p style="color:#fff">Age: 20</p>
                </div>
                <div id="line_through"></div>
                <div class="body">
                    <div class="lang">
                        <div class="outside"> <div class="inside">
                            <div class="language">Isixhosa</div>
                        </div></div>
                       
                    </div>
                </div>
            </div>
            <div class="col-9" id="colummn_space">
                <!--Image-->
                <img src="https://contentstatic.techgig.com/photo/91625283/4-coding-habits-to-improve-your-efficiency-in-competitive-programming.jpg?529153" class="img" alt="...">
                <!--Education-->
                <div class="head">
                    <h3 style="color:#fff">Education:</h3>
                </div>
                <div class="row">
                    <div class="col md-8 mb-3" v-for="option in Education" :key="option.id">
                        <div class="text-container" id="container_styling">
                            <div class="head">
                                <h5>{{ option.type }}</h5>
                            </div>
                            <br>
                            <div class="words">
                                <p>{{ option.schooling }}</p>
                            </div> 
                    </div>
                    </div>
                </div>
                 <!--WORK/Volunteer-->
            <div class="head">
            <h3 style="color:#fff">Work and volunteer Expirience:</h3>
            </div>
            <div class="row">
            <div class="col md-8 mb-3" v-for="option in Volunteer" :key="option.id">
                <div class="text-container">
                    <div class="heading">
                        <h5>{{ option.type }}</h5>
                    </div>
                    <br>
                    <div class="words">
                        <p>{{ option.expirience }}</p>
                    </div>
                    
                </div>
                </div>
                </div>
                <!--Skills-->
                <h3 style="color:#fff;">Skills</h3>
                <div class="row">
                    <div class="col" v-for="item in Skills" :key="item.id">
                        <img class="images" :src="item.img">
                    </div>
                </div>
                
            </div>
        </div>
        <!--stuff-->
        <my-footer/>
    </div>
    
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MyFooter from '@/components/MyFooter.vue';
    export default {
  components: { NavBar, MyFooter },
  computed: {
    Volunteer() {
      return this.$store.state.Volunteer;
    },
    Education(){
        return this.$store.state.Education;
    },
    Skills(){
        return this.$store.state.Skills;
    }
  },
  mounted() {
    this.$store.dispatch("fetchVolunteer");
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
  
        
    }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&family=Work+Sans:wght@300&display=swap');
    .text-container{
       /* border: 1px solid white;*/
        width: 20rem;
        color:white;
        background: #242424;
        box-shadow: 0px 0px 25px black;
    }
    .heading{
        margin-bottom: 0%;
    }
    .images{
        width: 5rem;
    }
    .heading h5{
        color:yellow;
        margin-left: -70%;
        margin-bottom: -5%;
    }
    .words{
        color:white;
    }
    .head h4{
        color:#fff;
    }
    .text-container{
        margin-left: 5%;
    }
    .words{
        padding: 1rem;
        text-align: center;
    }
    .heading{
        padding: 1rem;
        text-align: center;
    }
    .head{
        color: yellow;
    }
    h5{
        padding-top: 1rem;
    }
    h3{
        margin-left:0px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: bolder;
        padding: 1rem;
    }
    #container_styling{
        height: 18rem;
    }
    .col{
        justify-content: center;
    }
    .img{
        width: 90%;
        height: 16rem;
        object-fit: cover;
    }
    .col-2{
        box-shadow: 0px 0px 25px black;
    }
    .id{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 10%;
    }
    .name{
        margin-top: 10%;
        color: #fff;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: large;

    }
    .me{
        color:gray;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        
    }
    #line_through{
        border: 1px solid grey;
        margin: 1rem;

    }
    .top{
        background: #242424;
        width: 100%;
    }
    .col-2{
        padding: 0px;
    }
    #colummn_space {
        padding: 0;
    }
    #txt-align{
        text-align: left;
        padding-left: 1rem;
    }
    .lang{
        width: 80px;
        height: 80px;
        position: relative;
    }
    .outside{
        height: 80px;
        width: 80px;
        padding: 20px;
        border-radius: 50%;
        box-shadow: 6px 6px 10px -1px black;
    }
    .inside{
        height:40px;
        width:40px;
        border-radius: 50%;
        /*border: solid 1px yellow;*/
        box-shadow: inset 4px 4px 6px -1px black,
        inset -4px -4px 6px -1 grey,
        -0.5px -0.5px 0px white,
        0.5px 0.5px 0px black,
        0px 12px 10px -10px black ;
    }
   @media (width<600px){
    #colummn_space-1{
        display: none;
    }
    .img{
        display: none;
    }
   }
   @media (width<370px){
    
    col-9{
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-right:5% ;
    }

   }
</style>
