<template>
    <div class = "container-recommend-body2">
        <div v-for="user in displayuser" :key="user">
            
                <div class="container-ui-recommend2" >
                    
                    <a href="/view"><div class="container-in-ui-recommend2" >
                        
                        <b-img  class="img-recommend2" src="https://placekitten.com/300/300"/>
                    </div></a>
                    <a href="/view"><div class="container-in-ui-recommend2" style="border-right: 1px solid silver;">
                        <span class ="name-home2">
                            {{user.name}}                         
                        </span>
                        <div class ="rating-recomend2 ">
                                <b-form-rating 
                                    v-model="value" 
                                    readonly
                                    no-border
                                    variant="warning"
                                ></b-form-rating>
                            
                        </div> 
                    </div></a>
                    <a href="/view"><div class="container-in-ui-recommend2" >
                        <div class ="name-home2">
                            ราคา
                        </div>
                        <ul v-for="price in user.price" :key="price" class="ui-recommend-price2" >
                            
                            
                                <span>ห้องใหญ่:</span>
                                <span>{{price.big_room}}</span>
                                <br>
                            
                            
                            
                                <span>ห้องเล็ก:</span>
                                <span>{{price.small_room}}</span>
                                
                            
                        </ul>
                    </div></a>
                </div>
            
        </div>
        <div>
        <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        pills
         class="container-recommend-page2" 
        @input="paginate(currentPage)"
        ></b-pagination>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 5,
            perPage: 3,
            currentPage: 1,
            users: [{
                id: 1,
                name: 'John Doe',
                price : [{
                    big_room : "3000",
                    small_room : "2000"
                }] 
            }, {
                id: 2,
                 name: 'Jane Doe',
                 price : [{
                    big_room : "3500",
                    small_room : "2900"
                }] 
            }, {
                id: 3,
                name: 'Chuck Norris',
                price : [{
                    big_room : "3200",
                    small_room : "2000"
                }] 
            }, {
                id: 4,
                name: 'Chuck Norris',
                price : [{
                    big_room :"4000",
                    small_room : "3000"
                }] 
            }
            ],
        }
    },
    beforeMount() {
        this.fetchData()
    },
    computed: {
      rows() {
        return this.users.length
      }
    },
    methods: {
        async fetchData(){
            this.displayuser = this.users.slice(0,3)
        },
        paginate(currentPage){
            const start = (currentPage - 1)*this.perPage;
            this.displayuser = this.users.slice(start,start+3);
        },
        
    },
}
</script>

<style>

.container-recommend-body2{
    max-width:  70%;
    height: 100%;
    position: relative;
    margin: 5% auto;
    
    left: -5%;
   
}
.container-ui-recommend2:hover{
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);
}
.container-ui-recommend2{
    max-width:  100%;
    height: 220px;
    margin-top: 3%;
    margin-left: 3%;
    border: 1px solid silver;
    overflow: auto;
    border-radius: 15px;
    cursor: pointer;
    
}
.container-in-ui-recommend2{
    width: 33%;
    height: 218px;
    float: left;

    
    overflow: auto;
}
.img-recommend2{
    height: 100%;
    width: 100%;
}
.name-home2{
    
    padding: 15px;
    font: 28px;
    font-weight: 700; 
    float: left;
}
.rating-recomend2{
    width: 40%;
    height: 100px;
    position: relative;
    top: -3%;
    left: 5%;   
}
.ui-recommend-price2{
    
    position: relative; 

    top:20%;
    text-align: left;
}
.container-recommend-page2{
    margin-top: 5%;
    margin-bottom: 5%;
    position: absolute;
    left: 50%;
   
    
    transform: translate(-50%, -50%);
}
</style>