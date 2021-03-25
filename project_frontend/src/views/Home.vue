<template>
  <div>
    <Head  ></Head>
    <Photo_slide ></Photo_slide>
    <Search></Search>
    <Detail ></Detail>
    <New></New>
  </div>
</template>

<script>
// @ is an alias to /src

import Head from "@/components/home/Head.vue";
import Photo_slide from "@/components/home/Photo-Slide.vue";
import Detail from "@/components/home/Detail.vue";
import Search from "@/components/home/Search.vue";
import New from "@/components/home/New.vue";

export default {
  name: "Home",
  components: {
    Head,
    Photo_slide,
    Detail,
    Search,
    New
 
  },
  mounted() {
   
    window.addEventListener("scroll", function(){
        
        if(document.scrollingElement.scrollTop >= 100) {
            document.getElementById("Head").style = "background: khaki; height: 80px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;";
            document.getElementById("Head-logo").style = "font-size: 36px;";
            document.getElementById("Head-login").style = "margin-top: 1.5%;";
            document.getElementById("Head-above").style = "margin-right: 2.0%;";
            
            console.log("150")
        }
        else {
           
            document.getElementById("Head").style = "height: 100px;";
            document.getElementById("Head-logo").style = "font-size: 50px;";
            document.getElementById("Head-login").style = "margin-top: 2%;";
            document.getElementById("Head-above").style = "margin-right: 2.5%;";
            console.log("100")
        }
      

    })
  },
  
};
</script>
<style>

</style>
