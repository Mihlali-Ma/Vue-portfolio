<template>
    <div>
        <nav-bar/>
        <div class="form">
            <img src="https://st2.depositphotos.com/1029756/7977/i/450/depositphotos_79773952-stock-photo-contact-me-text-write-on.jpg" class="img-fluid" alt="">
            <form class="forms" action="https://formspree.io/f/xzblbplr" method="POST">
                <div>
                    <input class="input" type="text" placeholder="Name" id="name" required
                    oninvalid="this.setCustomValidity('Please fill in missing text')"
                    oninput="this.setCustomValidity('')">
                    <input class="input" type="text" placeholder="Surname" id="surname" required
                    oninvalid="this.setCustomValidity('Please fill in missing text')"
                    oninput="this.setCustomValidity('')">
                </div>
                <div>
                    <input class="input" type="text" placeholder="Cellphone" maxlength="10" required
                    oninvalid="this.setCustomValidity('Please Enter Your Number')"
                    oninput="this.setCustomValidity('')">
                    <input class="input" type="email" name="email" placeholder="email" id="" required
                    oninvalid="this.setCustomValidity('Please fill in missing text')"
                    oninput="this.setCustomValidity('')">
                </div>
                <div>
                    <button id="btn" type="submit">Submit</button>
                </div>
                
            </form>
        </div>
        <svg style="background:#767676;" xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><a href="https://github.com/Mihlali-Ma"></a>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <svg style="background:#767676;" xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><a href="https://www.linkedin.com/in/mihlali-matrose-7a7680263/?originalSubdomain=za"></a>
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> 
          </svg>
          <my-footer/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MyFooter from '@/components/MyFooter.vue'
    export default {
  components: { NavBar, MyFooter },
        
    }

</script>

<style scoped>
.form img{
    width: 25rem;
}

#btn{
    border: none;
    width: max-content;
    background: #eab676;
    width: 80px;
    border:solid #fff 2px;
    border-radius: 5%;
    
}
.input{
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 5px;
    width: 35rem;
    background: #181818;
    color: #767676;
}

svg{
    margin: 2%;
}
@media (width<500px) {
    .form{
        width: 5rem;
    }
}
</style>
