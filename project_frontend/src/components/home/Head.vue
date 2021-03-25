<template >
  <div class="container" id="Head" >
    
    <div class="container-logo" >
      <a href="/" class="logo-head" id="Head-logo">home</a>
    </div>
    <div class="container-login" @click="setcheck " id ="Head-login">
      <a href="/register" ><b-avatar  icon="people-fill" style="cursor: pointer;"></b-avatar></a>
    </div>
    <div class="container-above" id="Head-above">
       <li class="li-head" id="Head-list"><a href="#" class="text-above" v-show="check" >ลงชื่อเข้าใช้</a></li>
       <li class="li-head" id="Head-list"><a href="#" class="text-above" >เกี่ยวกับ</a></li>
       <li class="li-head" id="Head-list"><a href="#New" class="text-above" @click.prevent="scrollTo('#New')">ข่าวสาร</a></li>
       <li class="li-head" id="Head-list"><a href="#Search" class="text-above" @click.prevent="scrollTo('#Search')">ค้นหา</a></li>
    </div>
  </div>
</template>

<script>
export default {
  
  props: ['hint'],
  data() {
    return {
      check: true,
      container : true
    };
  },
  methods: {
    setcheck() {
      this.check = !this.check;
      console.log(this.check);
    },
    scrollTo(selector){
      document.querySelector(selector).scrollIntoView({behavior : 'smooth'})
    
    }  
  },
  mounted() {
    
  },
  
};
</script>

<style >
a:any-link {
  color: black;
}
a:hover {
  color: brown;
  text-decoration: none;
}
.container {
  max-width: 100%;
  height: 100px;
  top: 0;
  z-index: 9999;
  position: fixed;
  border-bottom: 1px solid; 
  transition: all 0.3s ease-in;
}
.li-head{
  float: right;
  margin-left: 3%;
  list-style-type: none;
}
.container-logo {
  height: 100%;
  width: 10%;
  float: left;
}
.container-above{
  height: 100%;
  width: 70%;
  float: right;
  margin-right: 2.5%;
  transition: all 0.3s ease-in;

}
.text-above{
  font-size: 24px;
  cursor: pointer; 
  position: relative;
  line-height: 4;
  font-weight: 200;
  transition: all 0.5s ease-in;
}
.logo-head{
  font-size: 50px;
  cursor: pointer; 
  position: relative;
  line-height: 2;
  text-align: center;
  transition: all 0.3s ease-in;
}
.container-login {
  float: right;
  margin-top: 2%;
  height: 40px;
  width: 40px;
  transition: all 0.3s ease-in;
}





</style>
