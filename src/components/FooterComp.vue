<template>
    <div>
        suppppppppp
         <div id="footer">
            <p>COPYRIGHT &COPY; {{ cYear }} By Matrose</p>
        </div>    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cYear: new Date().getUTCFullYear() 
            }
    }
}
</script>

<style scoped>

</style>