<template>
    <div class="Blueprint-container">
        <div v-for="i in shelf" v-bind:id="i">
            <div v-if="position == i">
                <h4 class="sel">{{ i }}</h4><box-icon color="#ffbe0b" type='solid' animation="tada" size="30px" name='star'></box-icon>
            </div>
            <h4 class="unsel" v-else>{{ i }}</h4>
        </div>
        <div id="balcony">
            <h3>Ban công</h3>
        </div>
        <div id="stair">
            <h6>Cầu thang</h6>
        </div>
        <div id="reading-area">
            <h3>Khu đọc sách</h3>
        </div>
        <div id="vending">
            <h6>Máy bán hàng</h6>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        position: { type: String, required: false },
    },

    data() {
        return {
            shelf: ['J1','J2','K4','K5','AA'],
            
        }
    },

    methods: {

    },

    computed() {
    },
}
</script>

<style scoped>
.Blueprint-container {
    display: block;
    height: 500px;
    width: 900px;
    margin-left: 80px;
    background-color: wheat;
    padding-top: 20px;
    padding-left: 20px;
}

#J1,
#J2,
#K4,
#K5,
#AA {
    position: absolute;
    width: 250px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* border-radius: 45px; */
}

#J1,
#J2,
#K4,
#K5,
#AA {
    position: absolute;
    width: 250px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color .35s ;
    transition: color .35s ;
    /* border-radius: 45px; */
}

#J1:hover,
#J2:hover,
#K4:hover,
#K5:hover,
#AA:hover {
    background-color: blueviolet;
    color: white;
}


/* #J1 h4,
#J2 h4,
#K4 h4,
#K5 h4,
#AA h4 {
    margin-top: 27px;
    padding-left: 115px;
} */

#J1 h4.unsel,
#J2 h4.unsel,
#K4 h4.unsel,
#K5 h4.unsel,
#AA h4.unsel {
    margin-top: 27px;
    padding-left: 118px;
}

#J1 h4.sel,
#J2 h4.sel,
#K4 h4.sel,
#K5 h4.sel,
#AA h4.sel {
    margin-top: 27px;
    padding-left: 118px;
}

box-icon {
    position: relative;
    top: -60px;
    right: 0px;
    color: yellow;
    float: right;
}

#J1 {
    background: lightblue;
    bottom: 0px;
    left: 95px;
}

#J2 {
    background: lightblue;
    bottom: 0px;
    left: 420px;
}

#K4 {
    background: lightblue;
    transform: rotate(90deg);
    bottom: 87px;
    right: -360px;

}

#K5 {
    background: lightblue;
    bottom: 150px;
    left: 256px;
}

#AA {
    background: lightblue;
    bottom: 150px;
    left: 580px;
}

#balcony {
    transform: rotate(-90deg);
    display: block;
    position: absolute;
    width: 193px;
    height: 120px;
    background-color: burlywood;
    top: 36px;
    right: -311px;
}

#balcony h3 {
    margin-top: 43px;
    padding-left: 37px;
}

#stair {
    display: block;
    position: absolute;
    width: 194px;
    height: 52px;
    background-color: burlywood;
    top: 84px;
    left: 25px;
    transform: rotate(90deg);
}

#stair h6 {
    margin-top: 15px;
    padding-left: 58px;
}

#reading-area {
    display: block;
    position: absolute;
    width: 510px;
    height: 175px;
    background-color: burlywood;
    top: 20px;
    left: 255px;
}

#reading-area h3 {
    margin-top: 70px;
    padding-left: 175px;
}

#vending {
    display: block;
    position: absolute;
    width: 100px;
    height: 65px;
    background-color: burlywood;
    bottom: 0px;
    right: -125px;
}

#vending h6 {
    text-align: center;
    margin-top: 14px;
    padding-left: 1px;
}</style>