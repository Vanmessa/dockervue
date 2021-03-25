<template>
  <div class="container-home-search" id="Search">
    <b-form  >
      <b-form-input
        id="input-1"
        v-model="form.name_place"
        type="text"
        class="container-home-search-input"
        required
        placeholder="อีเมล"
      ></b-form-input>
        
      <div class="container-home-search-radio-date">
        <b-form-radio-group v-model="form.radio" :options="options_radio" :state="state" name="radio-validation">
        </b-form-radio-group>
      </div>

      
      <b-form-datepicker 
      id="example-datepicker" 
      :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"  
      v-model="form.date" class="container-home-search-date">
      </b-form-datepicker>
      
      <b-form-select
        v-model="form.selected"
        :options="options_select"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
        class="container-home-search-select"
      ></b-form-select>

      <b-button type="submit" variant="primary" class="container-home-search-submit">Submit</b-button>

    </b-form>
 
  </div>
</template>

<script>
  
  export default {

    data() {
      
      return {
        form: {
          name_place: '',
          date: '',
          checked: [],
          radio: null,
          selected: 'A',
        },
        
        options_radio: [
          { text: 'รายวัน', radio: 'รายวัน' },
          { text: 'รายปี', radio: 'รายปี' }
        ],
        options_select: [
          { item: 'A', name: 'ห้องเล็ก' },
          { item: 'B', name: 'ห้องใหญ่' },
          
        ]
        
      }
    },
    computed: {
      state() {
        return Boolean(this.radio)
      }
    },
    
  }
</script>
<style >

.container-home-search :hover{
  color: aquamarine;
}
.container-home-search{
    margin: auto;
    height: 300px;
    max-width: 50%;
    margin-top: -2%;
    border: 1px solid silver; 
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
    position: relative;
    z-index: 9998;
    background: snow;
    border-radius: 15px;
    
    
}

.container-home-search-input{
  max-width: 80%;
  height: 60px;
  margin: auto;
  margin-top: 3%;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);
}
.container-home-search-radio-date{
  margin-top: 3%;

}
.container-home-search-date{
  max-width: 50%;
  height: 40px;
  margin: auto;
  margin-top: 3%;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);
}
.container-home-search-select{
  max-width: 50%;
  height: 40px;
  margin: auto;
  margin-top: 3%;
  margin-left: 15%;
  border-radius: 30px;
  
  float: left;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);
  
}
.container-home-search-submit{
  float: left;
  border-radius: 15px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);
  margin-top: 3%;
  margin-left: 5%;
  
}
</style>