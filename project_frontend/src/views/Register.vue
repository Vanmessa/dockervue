<template>
  <div class="container-home-register">
      <Login></Login>
      <Register_login></Register_login>
  </div>  
  
</template>

<script>
import Login from "@/components/register/Login.vue";
import Register_login from "@/components/register/Register_login.vue";
export default {
    components:{
        Login,
        Register_login
    },
    
}
</script>

<style>
.container-home-register{
    width: 60%;
    height: 600px;
    border-radius : 15px;
    border: 1px solid silver;
    padding: 5%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    
}
</style>