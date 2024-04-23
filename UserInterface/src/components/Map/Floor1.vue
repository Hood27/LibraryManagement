<template>
    <div class="Blueprint-container">
        <div v-for="i in shelf" v-bind:id="i">
            <div v-if="position == i">
                <h4 class="sel">{{ i }}</h4><box-icon color="#ffbe0b" type='solid' animation="tada" size="30px" name='star'></box-icon>
            </div>
            <h4 class="unsel" v-else>{{ i }}</h4>
        </div>
        <div id="door">
            <h6>Cửa chính</h6>
        </div>
        <div id="stair">
            <h6>Cầu thang</h6>
        </div>
        <div id="reading-area">
            <h3>Khu đọc sách</h3>
        </div>
    </div>
</template>
<script>
import 'boxicons';
export default {
    props: {
        position: { type: String, required: false },
    },

    data() {
        return {
            shelf: ['I5', 'I6', 'I7', 'I8', 'I9'],
        }
    },

    methods: {
    },
    created() {
    }
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

#I5,
#I6,
#I7,
#I8,
#I9 {
    position: absolute;
    width: 250px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color .35s;
    transition: color .35s;
}

#I5:hover,
#I6:hover,
#I7:hover,
#I8:hover,
#I9:hover {
    background-color: blueviolet;
    color: white;
}

#I5 h4.unsel,
#I6 h4.unsel,
#I7 h4.unsel,
#I8 h4.unsel,
#I9 h4.unsel {
    margin-top: 27px;
    padding-left: 118px;
}

#I5 h4.sel,
#I6 h4.sel,
#I7 h4.sel,
#I8 h4.sel,
#I9 h4.sel {
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

#I5 {
    background: lightblue;
    top: 0px;
    left: 230px;
}

#I6 {
    background: lightblue;
    top: 0px;
    left: 550px;
}

#I7 {
    background: lightblue;
    transform: rotate(90deg);
    top: 84px;
    right: -360px;

}

#I8 {
    background: lightblue;
    bottom: 280px;
    left: 230px;
}

#I9 {
    background: lightblue;
    bottom: 280px;
    left: 550px;
}

#door {
    display: block;
    position: absolute;
    width: 125px;
    height: 52px;
    background-color: burlywood;
    bottom: 0px;
    left: 140px;
}

#door h6 {
    margin-top: 16px;
    padding-left: 26px;
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
    width: 555px;
    height: 155px;
    background-color: burlywood;
    bottom: 20px;
    right: -230px;
}

#reading-area h3 {
    margin-top: 58px;
    padding-left: 200px;
}</style>