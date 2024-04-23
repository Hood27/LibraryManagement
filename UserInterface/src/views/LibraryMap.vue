<template>
    <div class="container">
        <h1 v-if="!toggle1">Tầng 2 <box-icon name='right-down-arrow-circle' type='solid' @click="toggle"></box-icon></h1>
            <h1 v-else>Tầng 1 <box-icon type='solid' name='right-top-arrow-circle' @click="toggle"></box-icon></h1>
       
        
        <div class="col-8">
            <div v-if="!toggle1"><Floor2 :position="positionBook" /></div>
            <div v-else><Floor1 :position="positionBook" /></div>
        </div>
    </div>
</template>
<script>
import Floor1 from "@/components/Map/Floor1.vue";
import Floor2 from "@/components/Map/Floor2.vue";

export default {

    data(){
        return {
            toggle1: true,
            positionBook: this.$route.query.position ? this.$route.query.position : "",
        }
    },

    components :{
        Floor1,
        Floor2,
    },

    methods:{
        toggle() {
            this.toggle1 = !this.toggle1;
        }
    },

    created(){
        if(this.positionBook == "J1" || this.positionBook == "J2" || this.positionBook == "K4" || this.positionBook == "K5" ||this.positionBook == "AA"){
            this.toggle();
        }
    }
}
</script>

<style scoped>
    .container>h1 {
        text-align: center;

    }
</style>