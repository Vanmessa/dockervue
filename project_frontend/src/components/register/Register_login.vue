<template>
    <div>
        <h2 @click="show_registesr" style="margin-top:-20%; cursor: pointer;">สมัครสมาชิก</h2>
        <div class ="container-register-login-form" id="container-register-login-form">
            <b-icon icon="arrow-left" @click="back_to2" class="arrow-left-register-login-form"></b-icon>
            <h2>สมัครสมาชิก</h2>
            <input type="text" placeholder="ชื่อ-นามสกุล" class="register-login-form">
            <input type="email" placeholder="อีเมล" class="register-login-form">
            <input type="password" placeholder="รหัสผ่าน" class="register-login-form">
            <br>
            <button class="register-login-form-button">ยืนยัน</button>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        show_registesr(){
            
            document.getElementById("container-register-login-form").style = "left: 50%; ";
        },
        back_to2(){
            document.getElementById("container-register-login-form").style = "left: 150%; ";
        }
    },
}
</script>

<style>
.container-register-login-form{
    width: 60%;
    height: 80%;
    border-radius : 15px;
    border: 1px solid silver;
    background: white;
    padding: 5%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in;
    
}
.register-login-form{
    position: relative;
    margin-top: 5%;
    border-radius: 15px;
    height: 50px;
    width: 70%;
    border:1px solid silver;
      
}
.register-login-form-button:focus{
    outline: none;
}
.register-login-form-button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.register-login-form-button{
    position: relative;
    margin-top: 5%;
    border-radius: 15px;
    height: 50px;
    width: 30%;
    border:1px solid silver;
    text-decoration: none;
}
.arrow-left-register-login-form{
    height: 40px;
    width: 40px;
    float: left;
    cursor: pointer;
    color:yellowgreen;
}

</style>