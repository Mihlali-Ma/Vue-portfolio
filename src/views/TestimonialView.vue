<template>
    <div>
        <NavBar/>
        <div class="row">
            <div class="col" v-for="Testimonial in Testimonials" :key="Testimonial.person">
                <div class="My-Card">
                    <img :src="Testimonial.image">
                    <div class="info">
                        <h2>{{ Testimonial.person }}</h2>
                        <p>{{ Testimonial.Testimonial }}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar';

    export default {
        components: {
        NavBar,
    },
    computed:{
            Testimonials(){
                return this.$store.state.Testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonials')
        }


}


</script>
<style scoped>
img{
    max-width: 100%;
}
.My-Card{
    width: 350px;
    background: radial-gradient(#111 50%,#000 100%);
    overflow: hidden;
    position: relative;
}
.My-Card img{
    transform: scale(1.3);
    transition: all 0.3s ease-out;
}
.My-Card:hover img{
    transform: scale(1.1) translateY(-20px);
    opacity: 0.3;
}

.info{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px;
    text-align: center;
    color: #fff;
    font-size: 18px;
}

.info h2{
    font-weight: 700;
    font-size: 32px;
    margin: 0 0 20px;
    transform: translateY(30px);
    opacity: 0;
}

.info p{
    transform: translateY(30px);
    opacity: 0;
}


.My-Card:hover .info h2{
    opacity: 1;
    transform: translateY(0);
}
.My-Card:hover .info p{
    opacity: 1;
    transform: translateY(0);
}

</style>