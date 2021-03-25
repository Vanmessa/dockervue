<template>
  <div class ="container-detail">
    <div class ="container-detail-header">
      <h3 class=header-text>{{name}}</h3>
    </div>
    <div class="container-card">
    <ul class="ul-detail">
      <li class="li-detail">
        <a href="/recommend"><b-card
        title="ใกล้กับคุณ"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;  "
        class="card-detail"

        ></b-card></a>
      </li>
      <li class ="li-detail">
        <a href="/recommend"><b-card
        title="ราคาถูก"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem; "
        class="card-detail"

        ></b-card></a>
      </li>
      <li class ="li-detail">
        <a href="/recommend"><b-card
        title="ใกล้ของกิน"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="card-detail"

      ></b-card></a>
      </li>
    </ul>
    
  </div>
  <br>
  <br>
  <br>
  </div>
</template>

<script>

export default {
  name: "head-detail",

  data() {
    return {
      name: "แนะนำ"
    };
  },
  methods: {
    setname() {
      this.name = !name;
    }
  }
};
</script>

<style >
.container-detail{
  
  height: 400px;
  max-width: 80%;

  margin: 5% auto;
  
}
.container-detail-header{
  height: 60px;
  max-width: 100%;

  margin-top: 5%;
}
.header-text{
  line-height: 2.5;
  
}
.container-card{
  margin: auto;
  height: 300px;
  width: 100%;
   
}
.card-detail{
  height: 220px;
  width: 220px;
  cursor: pointer;

  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}
.ul-detail{


  width: 100%;
  margin: 0;
  position: relative;
  top: 50%;
  left: 48.5%;
  transform: translate(-50%, -50%);
  
}
.li-detail{
  display: inline-block;
  margin: auto;
  margin-left: 2%;
  margin-right: 2%;
}

</style>
