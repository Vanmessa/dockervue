<template>
 
        <div class ="container-recommend-header">
            <div >
              <b-tabs content-class="mt-3" fill>
                <b-tab title="ทั้งหมด" active></b-tab>
                <b-tab title="หอพักหญิง"></b-tab>
                <b-tab title="หอพักชาย"></b-tab>
                
              </b-tabs>
            <div >
                <div v-on:click="setcheck" style="cursor: pointer;" class ="text-recommend-header">
                  {{name}}
                </div>
                <div v-if="check">
                  <div  style="cursor: pointer;" class ="text-recommend-header">
                  {{name}}
                  {{name}}
                  </div> 
                </div>
                
              </div>
            </div>
        </div>
        
  
  
</template>

<script>


export default {
  props : ['title'],

  data() {
    return {
      name : "name",
      check: false
    }
  },
  methods: {
      setcheck() {
      this.check = !this.check;
      console.log(this.check);
    }, 
    }
}
</script>

<style>

.container-recommend{
    width: 500%;
    height: 80px;
}
.container-recommend-header{
  
  
  width: 80%;
  height: 120px;
  margin-left: 8%;
  margin-top: 10%;
  border-bottom: 1px solid;
  

  
}
.text-recommend-header{
  float: left;
  font-size: 36px;
  margin-left: 3%;
  margin-top: 1%;
}
.recomend-filter{
  float: left;
}
</style>
